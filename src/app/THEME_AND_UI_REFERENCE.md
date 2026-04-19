# BioXverse.ai Design System & Theme Reference

## 1. Design Philosophy
**"Premium Medical Meets Minimal Futuristic"**
A synthesis of clinical trust and cutting-edge technology. The design prioritizes clarity and calm (medical) while using modern gradients, glassmorphism, and motion (futuristic) to signal innovation.

---

## 2. Color Palette

### Primary Brand Colors
| Color Name | HEX | Tailwind | Usage |
| :--- | :--- | :--- | :--- |
| **Medical Blue (Gradient Start)** | `#0066FF` | `bg-[#0066FF]` | Hero backgrounds, User chat bubbles, Primary icons |
| **Deep Blue (Gradient End)** | `#004bbd` | `bg-[#004bbd]` | Hero gradients |
| **Bio Teal (Action)** | `#00D4AA` | `bg-[#00D4AA]` | **Primary CTAs**, Focus rings, Success states, "Early Access" badges |
| **Dark Navy** | `#0A1530` | `bg-[#0A1530]` | Navigation CTA, Logo text |

### Neutral & Surface Colors
| Color Name | HEX | Tailwind | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas White** | `#FFFFFF` | `bg-white` | Main background, Cards, Modals |
| **Soft Medical Gray** | `#F8FAFB` | `bg-[#F8FAFB]` | Secondary section backgrounds |
| **Surface Gray** | `#F8FAFC` | `bg-slate-50` | Input backgrounds, subtle wells |
| **Text Black** | `#1A1A1A` | `text-[#1a1a1a]` | Headings, Strong text |
| **Text Gray** | `#4B5563` | `text-gray-600` | Body text, explanations |
| **Muted Gray** | `#9CA3AF` | `text-gray-400` | Placeholders, Footer text |

### Footer Theme (Dark Mode)
- **Background**: `#050B1A`
- **Border**: `border-white/5`

---

## 3. Typography
**Font Family**: `Inter`, system-ui, sans-serif

### Scale & Weight
| Element | Size | Weight | Tracking | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero)** | `42px` (Mobile) / `72px` (Desktop) | `Bold (700/800)` | `-1px` | `1.1` |
| **H2 (Section)** | `30px` (Mobile) / `48px` (Desktop) | `Bold (700)` | `-0.02em` | `1.15` |
| **H3 (Card Title)** | `20px` - `24px` | `SemiBold (600)` | `-0.01em` | `1.3` |
| **Body** | `16px` - `18px` | `Regular (400)` | `Normal` | `1.6` |
| **Button Text** | `16px` - `18px` | `SemiBold (600)` | `Normal` | `1` |

---

## 4. UI Components

### Buttons
**Primary CTA (Hero)**
- **Style**: Solid Fill
- **Color**: `#00D4AA` (Teal)
- **Text**: White
- **Shape**: `rounded-xl`
- **Height**: `h-[56px]`
- **Hover**: Darken to `#00bc98`

**Secondary CTA (Nav)**
- **Style**: Solid Fill
- **Color**: `#0A1530` (Navy)
- **Text**: White
- **Shape**: `rounded-lg`

### Input Fields
- **Background**: White
- **Border**: `border-gray-200`
- **Radius**: `rounded-xl`
- **Height**: `h-[56px]`
- **Focus State**: `ring-2 ring-[#00D4AA]` (Teal glow)

### Cards & Surfaces
- **Base Style**: White background
- **Border**: Subtle `border-gray-100` or `border-gray-200`
- **Shadow**: 
  - Floating Elements: `shadow-2xl` (e.g., App Mockup)
  - Feature Cards: `shadow-lg`
- **Radius**: `rounded-2xl` (Large, friendly corners)

### Chat Interface (Mockup)
- **User Bubble**: `bg-[#0066FF]`, Text White, `rounded-2xl rounded-tr-sm`
- **AI Bubble**: `bg-white`, Border Gray, `rounded-2xl rounded-tl-sm`

### Navigation Bar
- **Background**: `bg-white/90` with `backdrop-blur-xl`
- **Border**: Bottom `border-gray-100`
- **Position**: `fixed top-0` (Sticky)

---

## 5. Motion & Interaction
- **Entrance Animation**: Fade Up (`y: 20 -> 0`, `opacity: 0 -> 1`)
- **Library**: Framer Motion (`framer-motion`)
- **Live Indicators**: `animate-pulse` (e.g., Status dots)
- **Hover Effects**: Lift (`-translate-y-1`) or Shadow Increase

---

## 6. Design References
This theme is a custom synthesis, but draws inspiration from:
1.  **Linear.app**: For the subtle gradients, high-quality borders, and "bento grid" layout styles.
2.  **Modern HealthTech (e.g., Forward, One Medical)**: For the heavy use of white space, reassuring typography, and specific medical blue/teal tones.
3.  **Apple (iOS)**: For the blur effects (glassmorphism) and large, rounded corner radii (`rounded-2xl`, `rounded-3xl`).
