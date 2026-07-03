# Southern Oregon Continuous Gutters Inc.

Premium Next.js website for Southern Oregon Continuous Gutters Inc., owned and operated by Paul Chitwood. The site presents continuous gutters, seamless gutters, gutter replacement, downspouts, gutter protection, local service copy, a scroll-driven visual experience, and a quote request form for Southern Oregon homeowners.

## Tech Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- GSAP ScrollTrigger
- Lenis smooth scrolling
- Three.js with `@react-three/fiber` and `@react-three/drei`

## Install

```powershell
npm install
```

## Development

```powershell
npm run dev
```

Open the local URL printed by Next.js, usually `http://127.0.0.1:3000` or `http://localhost:3000`.

## Build

```powershell
npm run lint
npm run build
```

## Deployment

This project is Vercel-ready.

1. Create or select a Vercel project.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. Deploy with the Vercel dashboard or CLI.

```powershell
npx vercel --prod
```

For preview deployments, use:

```powershell
npx vercel
```

## Updating Business Info

Business details are centralized in `lib/site-data.ts`.

Update this file for:

- Business name
- Owner name
- Phone number and `tel:` link
- Service area
- Service list
- SEO service terms
- Site description
- CTA labels

## Replacing Images

The current gallery uses CSS-only placeholders. When final project photos are available:

1. Add optimized images under `public/images/`.
2. Replace placeholder gallery cards in `app/page.tsx`.
3. Use Next.js `Image` with explicit `width`, `height`, and descriptive `alt` text.
4. Keep images compressed and sized for their display area.

## Quote Form

The quote form lives in `components/QuoteForm.tsx` and posts to `app/api/quote/route.ts`.

Current behavior:

- Validates required fields.
- Includes a honeypot field for basic spam filtering.
- Logs submissions server-side.
- Returns success without sending email.

To connect email or CRM later:

1. Add provider credentials as environment variables.
2. Keep secrets out of source files.
3. Update `app/api/quote/route.ts` to send the validated payload.
4. Add production error logging before launch.

## Notes

The WebGL scene is progressive enhancement. Reduced-motion, mobile, low-memory, and no-WebGL contexts receive a CSS fallback so business information and quote paths remain accessible.
