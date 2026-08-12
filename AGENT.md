# OrderDesk Agent Guide

This file tells coding agents how to work on the OrderDesk website repository. Read this before making code or content changes.

## Project Context

OrderDesk is a cafe-first POS SaaS platform. This repository is for the public landing website, not the full SaaS dashboard.

Primary goal: help cafe owners understand the product quickly and request a free demo or early pilot setup call.

The website should feel like reliable business software for cafes: clear, warm, operational, and easy to trust.

## Canonical Reference Files

Use these files before planning or implementing major changes:

- `plan.md`
  - Use this to understand the build roadmap.
  - Follow milestones in order unless the user asks otherwise.
  - Each milestone is intended to be achievable in one focused agent chat.

- `CafePOS_Landing_Page_Design_System_v1.md`
  - Use this for brand, color, typography, layout, accessibility, visual direction, and component styling.
  - Treat this as the canonical design system for V1.
  - Do not introduce a new visual language unless the user explicitly updates the design direction.

- `Content.md`
  - Use this for section order, messaging, component ideas, and page narrative.
  - Treat this as the canonical landing page content strategy.
  - Use product visuals when explaining features, text when selling outcomes, and diagrams when explaining flow.

- `Content_responsive.md`
  - Use this as the primary implementation reference for responsive behavior, mobile-first layout, section structure, and component priorities.
  - Prefer this over `Content.md` whenever the two differ.
  - Do not improvise responsive layouts when this file gives section-specific guidance.

- `README.md`
  - Use this for project setup and operational instructions once the implementation begins.
  - Keep it updated when scripts, environment variables, or deployment steps change.

## V1 Product Scope

Build for the landing website only.

Include:

- Public landing page
- Product-style UI mockups or screenshots
- Demo request flow
- SEO metadata
- Analytics
- Accessibility and responsive polish
- Production deployment notes

Avoid unless explicitly requested:

- Login
- Signup
- Pricing page
- Payment integration
- Full POS dashboard application
- Admin panel
- Customer QR ordering app as a real product flow
- Multi-location claims
- Automated billing claims
- Self-service onboarding claims
- AI-powered claims

## Recommended Tech Direction

Use the stack from `plan.md` unless the user changes direction:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React icons
- Zod for validation
- Resend for demo request emails
- Vercel for hosting
- Plausible or Vercel Analytics for analytics

Prefer simple, maintainable implementation over clever abstractions.

## Design Rules

Follow the design system closely:

- Main colors:
  - Deep Navy `#17283B`
  - Orange `#F97316`
  - Teal `#2A9D8F`
  - Warm White `#FFF9F2`
  - Charcoal `#1E2329`
- Use orange deliberately for conversion actions.
- Use navy text on orange buttons for accessibility.
- Use teal for positive operational states.
- Use warm white and white as the dominant page surfaces.
- Avoid brown, beige, rustic coffee-shop branding.
- Avoid abstract SaaS illustrations as the primary product visual.
- Show product UI early, especially in the hero.
- Keep icons consistent, preferably Lucide outline icons.
- Keep copy concrete and cafe-owner friendly.

The site should look like operational business software, not a decorative cafe brochure.

## Content Rules

Primary CTA language:

- `Request a Free Demo`
- `Request Early Access`
- `Book a Setup Call`

Secondary CTA:

- `See How It Works`

Preferred page narrative:

1. Promise
2. Show product
3. Show quick benefits
4. Show features
5. Explain workflow
6. Show rush-hour problems solved
7. Position as more than a QR menu
8. Reassure cafe owners
9. Explain pilot onboarding
10. Ask for demo

Keep the page roughly 60 percent visual and 40 percent text.

Do not overload the page with paragraphs. Use product mockups, compact comparison sections, and clear labels.

## Development Practices

Before editing:

- Inspect the current project structure.
- Read the relevant reference files.
- Check for existing components and patterns before adding new ones.
- Keep changes scoped to the user's current request or current milestone.

When implementing:

- Use TypeScript for components and utilities.
- Prefer server components by default in Next.js.
- Use client components only when interactivity requires them.
- Keep section components independent and easy to rearrange.
- Put shared primitives in a clear location such as `components/ui/`.
- Put landing page sections in a clear location such as `components/sections/`.
- Keep validation schemas in `lib/`.
- Keep copy close to the section unless it becomes meaningfully reusable.
- Use semantic HTML and a correct heading order.
- Avoid layout shifts by defining stable dimensions for mockups, cards, and media.
- Avoid unnecessary dependencies.

When styling:

- Prefer Tailwind utilities and shared primitives.
- Keep custom CSS for tokens, global styles, and genuinely reusable effects.
- Do not create one-off color palettes outside the design system.
- Do not make the UI dominated by a single hue.
- Ensure buttons are at least `44px` high.
- Ensure text does not overlap or overflow on mobile.

## Accessibility Standards

Target WCAG 2.2 AA where practical.

Requirements:

- Keyboard-visible focus states
- Semantic headings
- Descriptive button and link text
- Alt text for meaningful images
- Color plus text labels for status states
- Good contrast for body text and controls
- Reduced-motion support for animations
- No color-only communication

## Demo Form Standards

The demo form should collect only what is useful for early sales:

- Name
- Cafe or business name
- Email
- Phone
- City
- Optional message

Requirements:

- Validate with Zod.
- Show loading, success, and error states.
- Do not commit secrets.
- Use environment variables for email configuration.
- Add basic spam protection, such as a honeypot field.
- Make the form keyboard accessible.

## Environment Variables

Expected production variables once email is implemented:

- `RESEND_API_KEY`
- `DEMO_REQUEST_TO_EMAIL`
- `DEMO_REQUEST_FROM_EMAIL`

Never hardcode API keys, email credentials, tokens, or production secrets.

## Verification

Run available checks before finishing a coding milestone:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

If a script does not exist yet, either add it when appropriate or clearly report that it is unavailable.

For frontend work, also verify common viewports:

- 360px
- 390px
- 768px
- 1024px
- 1440px

Check:

- No text overlap
- No broken mobile layout
- CTAs are visible and tappable
- Product mockups remain readable
- Focus states are visible
- Links and form flows work

## Git and Change Management

- Do not revert user changes unless explicitly asked.
- Keep commits and changes milestone-focused.
- Avoid unrelated refactors.
- Update `README.md` when setup, scripts, environment variables, or deployment steps change.
- Update `plan.md` only when milestones or scope change.
- Update this file when project operating rules change.

## Deployment Notes

Preferred hosting: Vercel.

Before production deployment:

- Confirm environment variables are configured.
- Confirm the demo form works.
- Confirm metadata and social preview are correct.
- Confirm analytics loads.
- Confirm production build passes.

## Agent Operating Rule

When uncertain, preserve the V1 strategy:

Build a clear, polished, cafe-first landing page that shows the product, explains the workflow, and gets demo requests.
