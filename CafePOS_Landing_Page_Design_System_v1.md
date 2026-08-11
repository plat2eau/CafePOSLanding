# OrderDesk Landing Page Design System

**Final direction:** Deep Navy + Orange + Teal  
**Purpose:** A simple, warm, operational visual language for a cafe-first POS.

> **Design principle:** OrderDesk should look like reliable business software built for cafes — not a coffee-shop website and not a generic enterprise dashboard.

---

## 1. Brand Direction

OrderDesk should feel **fast, dependable, and easy to learn**. The visual system combines a serious navy foundation with an energetic orange accent and a calm teal operational color.

### Brand personality

- Clear, not clever
- Warm, not rustic
- Professional, not corporate
- Modern, not futuristic
- Operational, not decorative
- Simple enough for a busy cafe owner to understand in seconds

### What the first screen must communicate

- This is **OrderDesk**.
- It manages **orders, tables, and everyday cafe operations**.
- Customers can order using **table QR codes**.
- The **owner/staff dashboard** is the main product.
- The next step is to **request a demo**, not create an account.

### Avoid

- Coffee-brown or all-beige branding
- Large abstract illustrations
- Overly futuristic gradients
- Technical SaaS language such as tenant architecture
- Claims about automated billing, self-serve signup, or multi-location support as current features
- “Revolutionary”, “AI-powered”, or other hype language without a real product reason

---

## 2. Final Color System

The website should be mostly **warm white and white**. Navy carries trust and structure. Orange drives attention and conversion. Teal communicates healthy operational states and secondary actions.

| Color | Hex | Primary use | Text on it |
|---|---|---|---|
| **Deep Navy** | `#17283B` | Primary brand, navigation, dark sections | White / warm white |
| **Orange** | `#F97316` | CTA accent, emphasis, highlights | Deep navy |
| **Teal** | `#2A9D8F` | Success, active states, secondary accents | Deep navy |
| **Warm White** | `#FFF9F2` | Primary page background | Charcoal / navy |
| **Charcoal** | `#1E2329` | Body copy, dense UI text | White / warm white |

### Supporting neutrals

| Token | Hex | Use |
|---|---|---|
| White | `#FFFFFF` | Surface |
| Soft Surface | `#F4F6F8` | Soft section backgrounds |
| Border | `#D9DEE3` | Borders / dividers |
| Muted Text | `#667085` | Secondary copy |

> **Accessibility rule:** Do not use white text on `#F97316` orange for normal-size CTA copy. Use **Deep Navy text on orange**. Navy on orange is comfortably readable, while white on orange is too low-contrast for small text.

---

## 3. Typography & Layout

### Fonts

| Role | Font | Weight | Typical size |
|---|---|---:|---:|
| Hero / major headings | Manrope | 700–800 | 48–64 px desktop |
| Section headings | Manrope | 700 | 32–44 px |
| Body / navigation | Inter | 400–500 | 16–18 px |
| Buttons / UI labels | Inter | 600 | 14–16 px |
| Product UI / tables | Inter | 400–600 | 12–14 px |

### Layout system

- Max content width: **1200–1240 px**
- Desktop page gutters: **32–48 px**
- Mobile page gutters: **20–24 px**
- Section spacing: **88–120 px desktop**, **56–72 px mobile**
- Use a **12-column desktop grid**
- Hero split: approximately **5 columns copy + 7 columns product visual**
- Card radius: **12 px**
- Button radius: **10 px**
- Avoid excessive pill-shaped UI
- Shadows should be soft and subtle; borders should do most of the separation
- Keep paragraph width around **55–65 characters** where possible

### Section rhythm

Alternate backgrounds to keep the page easy to scan:

- **Hero** — Warm White
- **Trust strip** — White
- **Features** — White / soft grey cards
- **How it works** — Warm White
- **Product proof / dashboard** — Deep Navy
- **Pilot CTA** — Warm White with orange accent

---

## 4. Component Style

### Primary CTA

Use orange only where action matters. The primary button should be visually unmistakable without turning the entire page orange.

**Primary:** `Request a Free Demo`  
**Secondary:** `See How It Works`

Recommended primary button:

```css
background: #F97316;
color: #17283B;
border-radius: 10px;
font-weight: 600;
min-height: 44px;
```

### Cards

- White or `#F4F6F8` surface on warm-white page background
- 1 px neutral border by default
- 12 px radius
- 20–28 px internal padding
- Feature icons use navy linework
- Orange only for emphasis
- Teal for positive operational states
- Feature titles stay concrete: **QR Table Ordering**, **Live Orders**, **Table Management**

### Navigation

Desktop navigation should stay simple:

**OrderDesk logo** → Features → How It Works → Pilot → **Request a Demo**

Avoid Login / Sign Up emphasis until those flows are genuinely ready for customers.

### Operational status colors

Use color plus text labels — never color alone.

- **New** — neutral / blue-grey
- **Preparing** — orange
- **Ready** — teal
- **Completed** — muted green / neutral success

---

## 5. Product & Imagery Direction

### Product screenshots are the proof

- Hero: show the **live order dashboard first**
- Add smaller supporting views for **QR ordering, tables, or reports**
- Use realistic cafe data: table numbers, order items, bills, daily sales, and order states
- Keep screenshots sharp enough to read
- Do not blur the product into a decorative backdrop
- Use subtle perspective only if readability remains high

### Cafe photography

- Use real, contemporary cafes with visible service context: tables, counters, staff, or customers
- Prefer warm natural light, but avoid heavy brown/orange filters
- Food photography should support specific features, not dominate the brand
- Avoid stock imagery of people pointing at laptops
- Avoid abstract 3D shapes
- Avoid oversized latte-art photos

### Icons

Use a consistent **1.75–2 px outline icon family**.

Icons should represent operational actions clearly:

- QR
- Table
- Receipt
- Order
- Staff
- Report
- Purchase
- Menu

Do not mix filled cartoon icons with line icons.

---

## 6. Landing Page Blueprint

| # | Section | Core message | CTA | Visual |
|---:|---|---|---|---|
| 01 | Hero | “Run Your Cafe. Simple, Fast & Easy.” | Request a Free Demo | Large live-orders dashboard + small QR ordering view |
| 02 | Trust / quick value | Faster orders, fewer mistakes, easier table management, better sales visibility | — | Compact icon strip |
| 03 | Core features | Everything you need to run your cafe | See How It Works | Feature cards with real UI crops |
| 04 | How it works | Set up → QR order → dashboard → serve → bill | Request a Demo | Simple 5-step flow |
| 05 | More than QR | OrderDesk connects ordering, tables, billing, tabs, purchases, and reports | — | Connected product screenshots |
| 06 | Built for busy cafes | Practical benefits during rush hours | — | Real cafe photo + UI callouts |
| 07 | Pilot setup | Hands-on onboarding for a limited number of cafes | Book a Setup Call | Warm high-intent CTA block |

### Hero implementation

**Desktop:** headline and CTA on the left; product dashboard on the right.  
**Mobile:** headline → CTA → screenshot.

The screenshot should appear in the first viewport on common mobile sizes whenever possible.

> **Conversion priority:** The page has one main conversion goal: get a cafe owner to request a demo or setup call. Every major section should reinforce that decision without introducing competing signup or checkout flows.

---

## 7. Responsive, Interaction & Accessibility

### Responsive

- Hero stacks at roughly **900 px and below**
- Feature grids: **3 columns desktop → 2 tablet → 1 mobile**
- Buttons should be at least **44 px high** and easy to tap
- On mobile, avoid horizontal dashboard screenshots that become unreadably tiny
- Use cropped or responsive product views instead
- Keep the primary CTA visible early without using an intrusive sticky banner

### Interaction

- Hover transitions: **150–220 ms**
- Use subtle color, border, or shadow changes only
- Avoid scroll-jacking
- Avoid parallax-heavy effects
- Avoid long entrance animations
- Use animation only to explain product flow or focus attention
- Buttons and links must have visible hover and keyboard-focus states

### Accessibility

- Target **WCAG 2.2 AA** contrast for normal text
- Use navy text on orange CTA
- Do not rely on color alone for order status
- Include text labels / icons alongside status colors
- Use semantic heading order
- Add descriptive alt text for meaningful product screenshots
- Respect reduced-motion preferences

---

## 8. Developer Handoff Tokens

```css
:root {
  --cp-navy: #17283B;
  --cp-orange: #F97316;
  --cp-teal: #2A9D8F;
  --cp-warm-white: #FFF9F2;
  --cp-charcoal: #1E2329;

  --cp-white: #FFFFFF;
  --cp-surface: #F4F6F8;
  --cp-border: #D9DEE3;
  --cp-muted: #667085;

  --cp-radius-card: 12px;
  --cp-radius-button: 10px;
  --cp-content-max: 1240px;
}
```

### Recommended web fonts

- **Manrope** for brand headings
- **Inter** for body and product UI

If implementation simplicity is preferred, **Inter can be used everywhere** without breaking the design system.

---

## Definition of “On Brand”

A OrderDesk page is on brand when it feels **clear before it feels stylish**:

- Warm-white space
- Strong navy structure
- Orange used deliberately for action
- Teal used for operational confidence
- Real product UI in view
- Copy that a cafe owner can understand immediately

> **Final decision:** Deep Navy + Orange + Teal is the locked OrderDesk landing-page direction for V1. Use this document as the default reference for design and frontend implementation.
