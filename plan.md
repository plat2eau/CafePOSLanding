# OrderDesk Website Build Plan

This plan splits the OrderDesk landing website into milestones that are each achievable in a single agent chat. Each milestone should leave the project in a working, reviewable state.

## Project Goal

Create a polished, conversion-focused landing website for OrderDesk, a cafe-first POS SaaS platform.

Primary conversion: request a free demo or early pilot setup call.

Primary references:

- `CafePOS_Landing_Page_Design_System_v1.md`
- `Content_responsive.md`
- `Content.md` for any legacy copy not yet covered by `Content_responsive.md`

Product fidelity rule:

- Whenever a section, mockup, screenshot, data pattern, workflow, or UI detail needs to represent the actual SaaS product, stop and verify against the existing CafePOS app or ask for user input before inventing it.

Recommended stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React icons
- Zod for form validation
- Resend for demo request emails
- Vercel for deployment
- Plausible or Vercel Analytics for analytics

## Milestone 1: Project Scaffold

Outcome: A clean Next.js project is created and runs locally.

Tasks:

- Create a Next.js app using the App Router, TypeScript, Tailwind CSS, and ESLint.
- Confirm the app runs locally with `npm run dev`.
- Add basic project scripts for `dev`, `build`, `lint`, and `typecheck`.
- Set up the initial folder structure:
  - `app/`
  - `components/`
  - `lib/`
  - `public/images/`
  - `public/product/`
- Remove default starter content.
- Add a basic home page shell.
- Verify the app builds successfully.

Done when:

- `npm run dev` starts without errors.
- `npm run build` succeeds.
- The browser shows a clean OrderDesk placeholder page.

## Milestone 2: Design System Foundation

Outcome: The brand system from the design document is implemented in code.

Tasks:

- Add global CSS variables for:
  - Deep Navy `#17283B`
  - Orange `#F97316`
  - Teal `#2A9D8F`
  - Warm White `#FFF9F2`
  - Charcoal `#1E2329`
  - White `#FFFFFF`
  - Soft Surface `#F4F6F8`
  - Border `#D9DEE3`
  - Muted Text `#667085`
- Configure fonts:
  - Manrope for headings
  - Inter for body and UI
- Define shared layout utilities:
  - Max content width around `1240px`
  - Mobile and desktop gutters
  - Section spacing
- Create reusable primitives:
  - `Container`
  - `Section`
  - `Button`
  - `Badge`
  - `Card`
- Add accessible focus, hover, and reduced-motion styles.
- Verify color contrast for primary buttons, especially navy text on orange.

Done when:

- The home page uses the real OrderDesk colors and typography.
- Reusable primitives exist and are used on the placeholder page.
- Layout works on desktop and mobile.

## Milestone 3: Navbar and Hero

Outcome: The first viewport clearly communicates what OrderDesk is and drives demo interest.

Tasks:

- Build `Navbar` with:
  - OrderDesk logo text or simple mark
  - Features
  - How It Works
  - For Cafes
  - Request Free Demo CTA
- Make the navbar sticky after scrolling.
- Build `HeroSection` with:
  - Headline: `Run Your Cafe. Simple, Fast & Easy.`
  - Supporting copy from `Content.md`
  - Primary CTA: `Request a Free Demo`
  - Secondary CTA: `See How It Works`
- Build a coded product mockup for the hero:
  - Live Orders dashboard
  - Floating sales card
  - Floating table bill card
  - Small phone QR ordering view
- Make the hero responsive:
  - Split layout on desktop
  - Stacked layout on mobile
  - Product visual visible early on mobile where possible

Done when:

- The first screen looks like OrderDesk business software, not a generic cafe website.
- CTAs link to the demo section or form.
- The hero is readable and stable on mobile and desktop.

## Milestone 4: Quick Benefits and Feature Bento

Outcome: Visitors can understand the main product capabilities within seconds.

Tasks:

- Build `HeroBenefitStrip` with four compact items:
  - QR Ordering
  - Live Orders
  - Easy Billing
  - Sales Reports
- Build `FeatureBentoGrid` with feature hierarchy:
  - Large: Live Order Management
  - Large or medium: QR Table Ordering
  - Medium: Table Management
  - Medium: Easy Billing & Orders
  - Medium: Sales Reports
  - Small: Menu Management
  - Small: Tabs & Pending Payments
  - Small: Purchase Tracking
- Use product UI crops or coded mini UI inside feature cards where useful.
- Use Lucide icons consistently.
- Keep copy concrete and operational.
- Avoid making every feature card visually identical.

Done when:

- Features are scannable and visually varied.
- Product visuals do most of the explaining.
- The section remains clean on mobile.

## Milestone 5: Workflow and Problem-Solution Sections

Outcome: The page explains how OrderDesk fits into daily cafe service and why it matters during rush hours.

Tasks:

- Build `WorkflowStepper` with five steps:
  - Set Up Cafe
  - Scan QR
  - Place Order
  - Staff Prepares
  - Complete Bill
- Use short text and simple visual cues for each step.
- Add the statement: `Simple for your staff. Convenient for your customers.`
- Build `ProblemSolutionSection` as a before/after comparison:
  - Lost paper orders -> Orders in one dashboard
  - Table confusion -> Every order linked to a table
  - Forgotten payments -> Pending bills clearly visible
  - Manual tracking -> Sales and purchases recorded
  - Staff asking around -> Everyone sees order status
- Ensure the layout does not become text-heavy.

Done when:

- The workflow is understandable without reading long paragraphs.
- The before/after comparison feels practical and persuasive.
- Mobile layout remains clear.

## Milestone 6: Positioning, Audience, and Pilot CTA

Outcome: The site positions OrderDesk as more than a QR menu and makes early onboarding feel valuable.

Tasks:

- Build `ConnectedOperationsFlow`:
  - OrderDesk as the center
  - Connected nodes for QR Ordering, Menu, Tables, Orders, Billing, Reports, Purchases
- Build `AudienceSection`:
  - Headline: `Built for Cafes`
  - Short cafe-focused copy
  - Three statements:
    - No complicated software.
    - No unnecessary features.
    - Just what your team actually needs.
- Add a realistic cafe image or high-quality placeholder image.
- Build `PilotOnboardingSection`:
  - Headline: `We'll Help You Get Started`
  - Setup checklist for cafe, menu, tables, QR codes, staff, ordering
  - Early pilot message
  - CTA: `Request Early Access`
- Build `FinalCTA` with deep navy background and orange CTA.
- Build a minimal `Footer`.

Done when:

- The full landing page narrative is complete.
- The final CTA is visually distinct.
- The page has a clear path to requesting a demo.

## Milestone 7: Demo Request Form

Outcome: Cafe owners can submit demo requests.

Tasks:

- Create a demo request form with fields:
  - Name
  - Cafe or business name
  - Email
  - Phone
  - City
  - Message or notes
- Validate submissions with Zod.
- Add clear loading, success, and error states.
- Create an API route or server action for form submission.
- Integrate Resend for sending demo request emails.
- Store secrets in environment variables:
  - `RESEND_API_KEY`
  - `DEMO_REQUEST_TO_EMAIL`
  - `DEMO_REQUEST_FROM_EMAIL`
- Add basic spam protection:
  - Honeypot field
  - Minimum submission timing if needed
- Ensure the form is keyboard accessible.

Done when:

- Valid form submissions send an email.
- Invalid form submissions show useful errors.
- No secret values are committed.

## Milestone 8: SEO, Metadata, and Analytics

Outcome: The website is ready to share publicly and measure demo interest.

Tasks:

- Add metadata:
  - Title
  - Description
  - Open Graph title
  - Open Graph description
  - Open Graph image
  - Twitter card metadata
- Add favicon and app icons.
- Add `robots.txt`.
- Add `sitemap.xml`.
- Add structured data if useful for the homepage.
- Add analytics:
  - Plausible or Vercel Analytics
  - Track demo CTA clicks
  - Track form submissions
- Check Lighthouse basics:
  - Performance
  - Accessibility
  - Best practices
  - SEO

Done when:

- Shared links preview correctly.
- Basic analytics are installed.
- The page has good SEO and accessibility foundations.

## Milestone 9: Responsive QA and Polish

Outcome: The site feels polished across common devices.

Tasks:

- Test at common viewport widths:
  - 360px
  - 390px
  - 768px
  - 1024px
  - 1440px
- Fix text wrapping, overlap, spacing, and visual hierarchy issues.
- Confirm all buttons are at least `44px` high.
- Confirm screenshots and product mockups remain readable.
- Verify keyboard navigation and focus states.
- Verify reduced-motion behavior.
- Check all internal links and CTA anchors.
- Run:
  - `npm run lint`
  - `npm run typecheck`
  - `npm run build`

Done when:

- No obvious layout issues remain on mobile or desktop.
- All verification commands pass.
- The site feels ready for real cafe owners to see.

## Milestone 10: Deployment

Outcome: The OrderDesk landing page is live.

Tasks:

- Prepare production environment variables.
- Deploy to Vercel.
- Connect custom domain if available.
- Verify production form submissions.
- Verify analytics events in production.
- Check production metadata and social preview.
- Document deployment steps in `README.md`.

Done when:

- The production URL is live.
- Demo requests work in production.
- README includes clear local development and deployment notes.

## Suggested Build Order

1. Milestone 1: Project Scaffold
2. Milestone 2: Design System Foundation
3. Milestone 3: Navbar and Hero
4. Milestone 4: Quick Benefits and Feature Bento
5. Milestone 5: Workflow and Problem-Solution Sections
6. Milestone 6: Positioning, Audience, and Pilot CTA
7. Milestone 7: Demo Request Form
8. Milestone 8: SEO, Metadata, and Analytics
9. Milestone 9: Responsive QA and Polish
10. Milestone 10: Deployment

## V1 Scope Rules

Include:

- Landing page
- Demo request form
- Product-style UI mockups
- Analytics
- SEO basics
- Deployment

Avoid for V1:

- Login
- Signup
- Pricing page
- Payment integration
- Full dashboard app
- Multi-location claims
- Self-service onboarding claims
- AI-powered claims
- Generic stock-heavy cafe marketing

## Definition of Done for V1

OrderDesk V1 is done when a cafe owner can visit the site, immediately understand that OrderDesk manages orders, tables, QR ordering, billing, and cafe operations, then request a demo through a working form.
