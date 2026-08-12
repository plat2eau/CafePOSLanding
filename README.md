# OrderDesk Landing

Landing website for OrderDesk, a cafe-first POS SaaS platform.

## Environment

Create a local `.env.local` with:

```bash
RESEND_API_KEY=
DEMO_REQUEST_TO_EMAIL=
DEMO_REQUEST_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SOCIAL_URLS=
```

`RESEND_API_KEY`, `DEMO_REQUEST_TO_EMAIL`, and `DEMO_REQUEST_FROM_EMAIL` are required for demo request emails. `NEXT_PUBLIC_SITE_URL` is used for metadata, robots, and sitemap URLs.
`NEXT_PUBLIC_SOCIAL_URLS` is an optional comma-separated list for Organization structured data once official OrderDesk POS social profiles exist.

If Resend email variables are not configured, valid demo requests are saved locally to `.data/demo-requests.jsonl` so the form still works during development.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

Deploy the app to Vercel as a Next.js project.

1. Add the production environment variables in Vercel:
   - `RESEND_API_KEY`
   - `DEMO_REQUEST_TO_EMAIL`
   - `DEMO_REQUEST_FROM_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
2. Deploy from the main branch or the selected production branch.
3. Open the production URL and submit a test demo request.
4. Confirm the email arrives in `DEMO_REQUEST_TO_EMAIL`.
5. Confirm Vercel Analytics receives page views and demo CTA/form events.
6. Check `/robots.txt`, `/sitemap.xml`, and the social preview image.
