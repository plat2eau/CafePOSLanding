The main rule should be:

Show the product when explaining features. Use text when selling outcomes. Use diagrams when explaining flow.

Landing-page component plan
#	Content	Component	Visual treatment
1	OrderDesk + navigation	Navbar	Logo, Features, How It Works, Demo CTA
2	“Run Your Cafe. Simple, Fast & Easy.”	HeroSection	Split layout: copy left, real OrderDesk dashboard right
3	Short trust/value points	HeroBenefitStrip	3–4 compact icon labels under hero
4	“Everything You Need…” + 8 features	FeatureBentoGrid	Product screenshots + icon cards
5	“From Table to Billing…”	WorkflowStepper	5-step visual journey
6	“No More Confusion…”	ProblemSolutionSection	Pain → OrderDesk benefit comparison
7	“More Than Just a QR Menu”	ConnectedOperationsFlow	Visual chain/diagram
8	“Built for Cafes”	AudienceSection	Cafe photography + short copy
9	“We Help You Get Started”	PilotOnboardingSection	Setup checklist + personal onboarding message
10	“Ready to Make…”	FinalCTA	Strong navy/orange CTA block
11	Links/legal	Footer	Minimal

## Responsive implementation requirements

The page must be designed **mobile-first**. Do not create the desktop layout first and simply scale it down.

Use these as design/testing bands, not device-specific assumptions:

| View | Suggested range | Layout intent |
|---|---:|---|
| Mobile / base | `< 48rem` (`< 768px`) | Single-column, touch-first, strongest content only, no decorative clutter |
| Tablet | `48rem–63.99rem` (`768–1023px`) | 2-column where content remains comfortably readable; otherwise keep the mobile structure |
| Desktop | `>= 64rem` (`>= 1024px`) | Full compositions, bento layouts, layered product visuals and wider diagrams |

**Important:** breakpoints should ultimately be introduced when the **content needs them**, not because a particular phone/tablet model exists. If a component becomes cramped before or after these suggested ranges, change that component at the point where its content stops working.

### Global responsive rules

- Use `meta name="viewport" content="width=device-width, initial-scale=1"`.
- The page must work at **320 CSS px wide without horizontal page scrolling**.
- Use a mobile-first single-column source order. Enhance into columns only when enough space exists.
- Never shrink a dense desktop dashboard screenshot until the text becomes unreadable. On smaller screens, **crop/art-direct the screenshot to the important UI** or use a simplified product composition.
- Use responsive images (`srcset`/`sizes` or framework equivalents). Set intrinsic `width` and `height` to avoid layout shift.
- Do **not** lazy-load the hero/LCP image. Lazy-load below-the-fold screenshots and photography.
- All meaningful information available on desktop must remain available on mobile/tablet. It is fine to remove **decorative** floating cards, shadows, background shapes or duplicate visuals.
- Avoid hover-only interactions. The full experience must work with touch. Apply hover effects only where hover is actually available.
- Interactive controls should have a **minimum 44×44 CSS px target**, with ~48px preferred for primary buttons and icon controls.
- Keep at least `16px` body text. Use responsive type with `clamp()` or equivalent rather than aggressively shrinking text.
- Use comfortable line lengths; do not let body copy stretch across the full tablet width.
- Prefer CSS Grid/Flexbox and fluid widths (`min()`, `max()`, `clamp()`, `minmax()`) over fixed pixel layouts.
- Do not use horizontal carousels as the only way to discover important content.
- Respect `prefers-reduced-motion`; product movement and floating-card animation must not be required to understand the page.
- Preserve visible keyboard focus states and semantic heading order on every breakpoint.
- On touch devices, do not rely on tooltips or hidden information revealed only on hover.

### Responsive spacing

Use the following as a starting rhythm:

- **Mobile:** page gutters `20–24px`; section spacing roughly `64–80px`.
- **Tablet:** page gutters `32–40px`; section spacing roughly `80–104px`.
- **Desktop:** use the existing wider desktop composition and max-width container.
- Cards should maintain at least `16–20px` internal padding on mobile and `20–28px` on tablet.

The mobile experience should feel intentionally designed, **not like a compressed desktop page**.

1. Navbar

Keep it extremely simple.

OrderDesk

Features
How It Works
For Cafes

[Request Free Demo]

Do not add Pricing yet since pricing/self-service isn't finalized.


Sticky navbar after scrolling.

### Responsive behavior — Navbar

**Mobile**
- Use one compact row.
- Keep the OrderDesk logo/wordmark visible.
- Use a hamburger/menu button for `Features`, `How It Works` and `For Cafes`.
- Keep `Request Free Demo` visible as a compact CTA **only if it fits comfortably**. On very narrow screens, put the CTA as the first prominent item inside the opened menu instead of squeezing the header.
- Menu button and CTA must have touch-friendly hit areas.
- Opened navigation should be simple, full-width or sheet-style; no tiny dropdown.
- Do not hide the primary demo CTA entirely on mobile.

**Tablet**
- Show the full navigation only when all items fit without crowding.
- On portrait/narrow tablets, use the same compact navigation as mobile.
- Sticky behavior remains, but keep the navbar visually short so it does not consume excessive vertical space.


2. Hero
Component

HeroSection

Left

Run Your Cafe.
Simple, Fast & Easy.

Manage orders, tables, menu, staff and sales — all from one simple POS.

Let customers order directly from their table using QR codes and manage everything from one place.

Request a Free Demo

See How It Works →

Right

This should not be an illustration.

Use a layered product composition:

Main: Live Orders dashboard
Floating card: Table 4 — ₹840
Floating card: Today's Sales ₹18,650
Small phone mockup: QR ordering

Something like:

               ┌────────────────────────┐
  ₹18,650      │                        │
 Today's Sales │    LIVE ORDERS         │
               │                        │
               │ Table 3   Preparing    │
               │ Table 7   Ready        │
               │ Table 2   New          │
               └────────────────────────┘

                         ┌─────────┐
                         │ MOBILE  │
                         │ MENU    │
                         └─────────┘


This immediately tells people what OrderDesk actually is.

### Responsive behavior — Hero

**Mobile**
- Stack content in this order:
  1. Headline
  2. Supporting copy
  3. Primary CTA
  4. Secondary CTA
  5. Product visual
- Do **not** use the desktop layered composition exactly as-is.
- Make `Request a Free Demo` the dominant button. It may be full-width on narrow phones.
- Keep `See How It Works` as a secondary button/text link directly below or beside it when space permits.
- Show the Live Orders product visual below the copy, but use a **mobile-specific crop/composition** so order statuses and table numbers remain readable.
- Remove most overlapping floating cards. Keep at most **one useful proof card** (for example `Today's Sales ₹18,650`) if it does not cover the product UI.
- For the current V1 mobile hero, show only the staff order card and table/session card. Keep QR ordering in copy and later sections instead of adding a separate QR phone/card to the mobile hero.
- Do not force the hero to `100vh`; let content determine its height.
- The first viewport must still clearly communicate: **OrderDesk + cafe POS + orders/tables/QR ordering + demo CTA**.

**Tablet**
- Use a 2-column hero when both columns can remain comfortably readable.
- Copy should take roughly 40–45%; product visual 55–60%.
- Limit the layered composition to the main dashboard plus **1–2** supporting cards.
- On portrait tablets where the composition feels cramped, use the mobile stacked layout instead.


3. Hero benefit strip

Instead of adding more paragraphs underneath the hero:

HeroBenefitStrip

Four small items:

QR Ordering
Customers order themselves

Live Orders
Everything in one place

Easy Billing
Tables and payments connected

Sales Reports
Know how you're doing


This gives the visitor a 5-second overview.

### Responsive behavior — HeroBenefitStrip

**Mobile**
- Use a clean **2×2 grid**.
- Each benefit gets icon + short title + one short supporting line.
- Do not turn this into a horizontally scrolling carousel.

**Tablet**
- Prefer a **4-item single row** when space allows.
- If labels wrap awkwardly, use a 2×2 grid instead.


4. Features
Everything You Need to Run Your Cafe

Don't make 8 identical feature cards.

That tends to look generic.

Use a Bento-style feature layout where important features get more visual space.

FeatureBentoGrid

Something like:

┌─────────────────────────────┬───────────────┐
│                             │               │
│     LIVE ORDER MANAGEMENT   │ QR ORDERING   │
│                             │               │
│     [product screenshot]    │ [phone UI]    │
│                             │               │
├──────────────┬──────────────┼───────────────┤
│ TABLES       │ BILLING      │ MENU          │
├──────────────┴──────────────┼───────────────┤
│ SALES REPORTS               │ PURCHASES     │
└─────────────────────────────┴───────────────┘
Large cards
Live Order Management

Show an actual order dashboard.

QR Table Ordering

Show phone + QR code + table number.

Medium cards
Table Management
Easy Billing & Orders
Sales Reports
Small cards
Menu Management
Tabs & Pending Payments
Purchase Tracking


This establishes feature hierarchy instead of pretending every feature is equally important.

### Responsive behavior — FeatureBentoGrid

**Mobile**
- Do **not** preserve the desktop bento mosaic.
- Convert it to a single-column priority-ordered sequence:
  1. Live Order Management
  2. QR Table Ordering
  3. Easy Billing & Orders
  4. Table Management
  5. Sales Reports
  6. Menu Management
  7. Tabs & Pending Payments
  8. Purchase Tracking
- The first two cards should remain noticeably more visual/prominent than the smaller utility cards.
- Product screenshots must be cropped to the relevant feature. Never show a full dense desktop UI scaled down to unreadable text.
- Smaller utility features can use compact icon-led cards to keep page length under control.
- Do not hide any of the eight features just to shorten the mobile page.

**Tablet**
- Use a **2-column grid**.
- Live Order Management and QR Table Ordering may span two columns or receive taller cards.
- Medium/small features can occupy one column each.
- Preserve clear reading order even if CSS Grid changes the visual layout.


5. How it works
From Table to Billing — Everything Connected

This should become the most visual section after the hero.

WorkflowStepper

Desktop:

SETUP
  ↓
SCAN QR
  ↓
ORDER
  ↓
STAFF
  ↓
BILL

Better yet, horizontally:

① Setup Cafe
      →
② Scan QR
      →
③ Place Order
      →
④ Staff Prepares
      →
⑤ Complete Bill

Each step gets:

Small illustration/screenshot
2–5 word title
One sentence

For example:

01 Set Up

Add your menu, tables and staff.

↓

02 Scan

Customer scans the QR on their table.

↓

etc.

Finish with a highlighted statement:


Simple for your staff. Convenient for your customers.

### Responsive behavior — WorkflowStepper

**Mobile**
- Use a **vertical stepper**. Do not squeeze five steps horizontally.
- Keep the order obvious: `01 Set Up → 02 Scan → 03 Order → 04 Staff → 05 Bill`.
- Each step should have one compact visual/icon, a short title and one sentence.
- A subtle vertical connector line is enough; do not add large decorative arrows between every card.
- Keep the final statement `Simple for your staff. Convenient for your customers.` visually highlighted.

**Tablet**
- Portrait: use either a vertical stepper or a 2-column stepped grid if the sequence remains obvious.
- Landscape/wider tablet: a horizontal 5-step flow is acceptable only if titles and descriptions remain comfortably readable.
- Do not reduce type size just to force the horizontal version.


6. Rush-hour pain section
No More Confusion During Rush Hours

I wouldn't show the seven bullets exactly as written.

Turn them into a before / after component.

ProblemSolutionSection
WITHOUT OrderDesk              WITH OrderDesk

Lost paper orders     →      Orders in one dashboard

Table confusion       →      Every order linked to a table

Forgotten payments    →      Pending bills clearly visible

Manual tracking       →      Sales & purchases recorded

Staff asking around   →      Everyone sees order status

This is much more persuasive than:

Keep every table organised
Reduce missed orders
Reduce order confusion


because visitors immediately understand the transformation.

### Responsive behavior — ProblemSolutionSection

**Mobile**
- Do not render this as a wide comparison table.
- Use one paired transformation card/row at a time:
  - `Lost paper orders` → `Orders in one dashboard`
  - `Table confusion` → `Every order linked to a table`
  - etc.
- Make the **problem** visually quieter and the **OrderDesk result** more prominent.
- The arrow should communicate direction, but the relationship must still be clear without relying only on the arrow/icon.

**Tablet**
- A true 2-column `WITHOUT OrderDesk / WITH OrderDesk` comparison works well.
- Keep rows aligned so each problem clearly maps to its corresponding benefit.
- If the two-column version becomes cramped in portrait, fall back to the paired mobile pattern.


7. More Than Just a QR Menu

This should be a visual component.

ConnectedOperationsFlow

Headline:

More Than Just a QR Menu

Then:

QR ORDERING

     ↓

ORDERS
     ↓
TABLES
     ↓
BILLING
     ↓
TABS
     ↓
PURCHASES
     ↓
REPORTS

But visually, I'd make OrderDesk the center:

                  QR Ordering
                      │
                      │
        Menu ───── OrderDesk ───── Tables
                      │
               ┌──────┼──────┐
               │      │      │
             Orders Billing Reports
                      │
                  Purchases

This communicates:

It's the system running the cafe, not simply the customer menu.


That's an important positioning section.

### Responsive behavior — ConnectedOperationsFlow

**Mobile**
- Do not force the desktop radial diagram into a narrow viewport.
- Use a simplified structure:
  - `QR Ordering`
  - ↓
  - prominent `OrderDesk` core card
  - ↓
  - a 2-column grid of connected capability chips: `Orders`, `Tables`, `Billing`, `Tabs`, `Menu`, `Purchases`, `Reports`
- Keep all labels large enough to read without zooming.
- The point should be understood immediately: **OrderDesk is the central system, not just a QR menu**.

**Tablet**
- Use the central OrderDesk node with surrounding capability nodes if there is enough room.
- Otherwise use a clean 2–3 column connected grid.
- Avoid tiny connector text, crossing lines or excessive animation.


8. Built for Cafes

Don't make this another feature section.

AudienceSection

Use a realistic cafe photo on one side.

Copy on the other:

Built for Cafes

Whether you run a neighbourhood cafe, restaurant or growing food business, OrderDesk keeps daily operations simple.

Then three large statements:

No complicated software.

No unnecessary features.

Just what your team actually needs.


This section should feel human after several product-heavy sections.

### Responsive behavior — AudienceSection

**Mobile**
- Stack the section.
- Show the headline and short copy first, then the cafe photography.
- Keep the three statements large and easy to scan:
  - No complicated software.
  - No unnecessary features.
  - Just what your team actually needs.
- Use one strong cafe image rather than multiple small images.

**Tablet**
- Use a balanced 2-column image/copy layout when possible.
- Avoid making the image dominate so much that the message becomes secondary.


9. Founder-led onboarding

This is actually a strong selling point right now.

Don't hide it.

PilotOnboardingSection

Headline:

We'll Help You Get Started

Subheading:

You don't need to figure everything out yourself.

Then visually show:

We help set up:

✓ Cafe
✓ Menu
✓ Tables
✓ QR Codes
✓ Staff
✓ Ordering

Beside it:

Early OrderDesk Pilot

We're currently working with a small number of cafes and helping them personally set up OrderDesk.

[Request Early Access]


This makes the unfinished self-service onboarding feel like premium onboarding, rather than a missing feature.

### Responsive behavior — PilotOnboardingSection

**Mobile**
- Stack in this order:
  1. Headline + subheading
  2. Setup checklist
  3. Early OrderDesk Pilot message
  4. `Request Early Access` CTA
- Use a 2-column checklist only if each label remains comfortable; otherwise use a single-column checklist.
- The CTA should be large and obvious.
- Do not place the pilot message in a tiny side card beside the checklist.

**Tablet**
- Use a 2-column layout: setup checklist on one side, pilot/onboarding message and CTA on the other.
- Both columns should feel equally intentional, not like a main section plus sidebar.


10. Final CTA

This should be visually different from everything above.

Use full Deep Navy background.

Orange primary CTA.

Something like:

Ready to Make Your Cafe Easier to Manage?

See OrderDesk in action and find out how it can work for your cafe.

Request a Free Demo

Early access available for selected cafes.


No distractions here.

### Responsive behavior — FinalCTA

**Mobile**
- Full-width Deep Navy block.
- Keep copy concise.
- Use one strong Orange `Request a Free Demo` button.
- Button can be full-width with a reasonable max width.
- No decorative product mockups that compete with the CTA.

**Tablet**
- Keep the CTA block spacious.
- CTA may sit inline with the copy on wider tablets or below it on portrait tablets.
- Preserve strong contrast and a single obvious action.


Overall page rhythm

The resulting page becomes:

NAVBAR

       ↓

HERO
Product immediately visible

       ↓

4 QUICK BENEFITS

       ↓

FEATURE BENTO
What OrderDesk can do

       ↓

HOW IT WORKS
How OrderDesk fits service

       ↓

RUSH-HOUR PROBLEMS
Why the owner needs it

       ↓

CONNECTED OPERATIONS
Why OrderDesk isn't just QR ordering

       ↓

BUILT FOR CAFES
Who this is for

       ↓

PERSONAL ONBOARDING
Why join now

       ↓

FINAL DEMO CTA

       ↓


FOOTER


### Responsive behavior — Footer

**Mobile**
- Keep footer content minimal and stacked.
- Links can use one or two columns, but every link should have comfortable touch spacing.
- Do not repeat large navigation structures or add unnecessary marketing content.

**Tablet**
- Use a compact multi-column footer if it fits naturally.
- Keep legal/utility links visually secondary.

One important design principle

I would aim for roughly 60% visual / 40% text on wider screens.

On mobile, do not force this ratio. Prioritize readability and content order. Keep the strongest product visuals, but remove decorative visual duplication and let the page become more linear.

Your existing copy contains good information, but if we literally put all of it on screen as paragraphs/cards, the page will become text-heavy.

Screenshots should do a lot of the explaining.

The strongest flow is:

Promise → Show product → Show features → Show workflow → Show problem solved → Establish positioning → Reduce onboarding fear → Ask for demo.

## Responsive QA checklist for the implementation AI

Before considering the page complete, verify all of the following:

- Test at approximately `320`, `360`, `390`, `430`, `768`, `820`, `1024`, `1280` and `1440` CSS px widths.
- There is no horizontal page scrollbar at narrow widths.
- The hero message and demo CTA are understandable before scrolling far.
- Dense product screenshots are readable or intentionally cropped on mobile.
- No meaningful feature or selling point disappears on mobile.
- Touch controls are at least 44×44 CSS px, preferably ~48px for primary interactions.
- Navigation works without hover and is keyboard accessible.
- The five-step workflow never becomes an unreadable squeezed row.
- The before/after section never becomes a tiny desktop table on mobile.
- The connected-operations diagram changes structure on mobile instead of simply shrinking.
- Text remains readable at 200% zoom and layouts continue to reflow.
- Below-the-fold images are lazy-loaded; the hero/LCP image is not.
- Images have dimensions/aspect ratio reserved to prevent layout shift.
- Use responsive image sources so phones do not download unnecessarily large desktop assets.
- Reduced-motion users can understand and use the page without animation.
- CTA hierarchy remains consistent: `Request Free Demo` / early access actions are visually dominant.
- Tablet portrait is checked independently; do not assume a tablet should always use the desktop layout.

## Responsive implementation references

These decisions are based on current guidance from:
- MDN: Responsive web design and mobile-first media queries.
- web.dev: Responsive web design basics, content-driven breakpoints, accessible tap targets and responsive images.
- W3C WCAG 2.2: reflow and target-size requirements.

The practical rule for this page is:

**Design the smallest useful version first, preserve the selling message and product clarity, then add layout complexity only when the viewport has enough room.**
