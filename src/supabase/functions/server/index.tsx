import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { Resend } from "npm:resend";
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

    // Send autoresponder email
    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      if (resendApiKey) {
        const resend = new Resend(resendApiKey);
        const firstName = name ? name.split(' ')[0] : 'there';
        
        await resend.emails.send({
          from: 'BioXverse <onboarding@resend.dev>', // Update this with your verified domain
          to: email,
          subject: "Welcome to BioXverse — You're In! 🎉",
          html: `
            <div style="font-family: sans-serif; font-size: 16px; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 24px; color: #000;">BioXverse</h1>
              
              <p>Hey ${firstName},</p>
              
              <p>Thanks for joining BioXverse early access!</p>
              
              <p>You're one of the first people who'll get access to our AI symptom analyzer when we launch (coming in ~8 weeks).</p>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #000; padding: 16px; margin: 24px 0; border-radius: 4px;">
                <p style="margin: 0; font-weight: bold; color: #1e293b;">Quick question for you:</p>
                <p style="margin: 8px 0 0 0; color: #475569;">What symptom or health situation would you most likely use BioXverse for?</p>
              </div>
              
              <p>Just hit reply and let me know. Your answer helps us build the right product.</p>
              
              <p>Thanks for being here early.</p>
              
              <p style="margin-top: 32px;"><strong>Bhushan K</strong><br>
              <span style="color: #64748b;">Founder, BioXverse.ai</span></p>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
              
              <p style="font-size: 14px; color: #64748b; line-height: 1.5;">P.S. - Know any engineers, doctors, or designers who'd want to help build this? Forward this email their way.</p>
            </div>
          `
        });
        console.log(`Autoresponder sent to ${email}`);
      } else {
        console.log("RESEND_API_KEY not set, skipping autoresponder");
      }
    } catch (emailError) {
      console.error("Failed to send autoresponder:", emailError);
      // Don't fail the request if email fails, just log it
    }

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

// Get signup count endpoint
app.get("/make-server-1e676e04/signups/count", async (c) => {
  try {
    const signups = await kv.getByPrefix("signup:");
    const count = signups ? signups.length : 0;
    return c.json({ count });
  } catch (error) {
    console.error("Fetch signup count error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);