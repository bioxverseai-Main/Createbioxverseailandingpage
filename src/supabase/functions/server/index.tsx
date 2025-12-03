import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-1e676e04/health", (c) => {
  return c.json({ status: "ok" });
});

// Signup endpoint
app.post("/make-server-1e676e04/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, name, skill_set, reason, source } = body;

    if (!email) {
      return c.json({ error: "Email is required" }, 400);
    }

    const id = crypto.randomUUID();
    // Key format: signup:timestamp:uuid to allow chronological sorting via getByPrefix
    const key = `signup:${new Date().toISOString()}:${id}`;
    const value = {
      id,
      email,
      name: name || null,
      skill_set: skill_set || null,
      reason: reason || null,
      source: source || "unknown",
      created_at: new Date().toISOString(),
    };

    await kv.set(key, value);

    return c.json({ success: true, message: "Signup successful" });
  } catch (error) {
    console.error("Signup error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Get all signups endpoint
app.get("/make-server-1e676e04/signups", async (c) => {
  try {
    const signups = await kv.getByPrefix("signup:");
    // Sort by created_at descending (newest first)
    // The keys are already timestamped, but let's sort the values to be safe
    const sortedSignups = (signups || []).sort((a: any, b: any) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
    
    return c.json(sortedSignups);
  } catch (error) {
    console.error("Fetch signups error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);