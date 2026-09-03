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

## Project Rules

Read `AGENTS.md` and `docs/codex-rules.md` before major Codex work. They capture the guardrails for business accuracy, quote workflow safety, builds, dependencies, WebGL fallbacks, motion accessibility, mobile performance, and phase commits.

## Current Frontend Pass

The current homepage pass is documented in `docs/cinematic-homepage-mvp.md`. It keeps the quote API and Base44 path intact while focusing the site on a premium cinematic stormwater-protection experience.

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

The current homepage uses CSS-only asset slots so the site can be reviewed before final photos are approved. Use `docs/asset-intake-checklist.md` to collect the required image assets and business confirmations.

When final project photos are available:

1. Add optimized images under `public/images/`.
2. Replace the asset slots in `app/page.tsx`.
3. Use Next.js `Image` with explicit `width`, `height`, and descriptive `alt` text.
4. Keep images compressed and sized for their display area.
5. Confirm the public phone number, service area, CCB display preference, owner-name preference, and street-address preference before launch.

## Quote Form

The quote form lives in `components/QuoteForm.tsx` and posts to `app/api/quote/route.ts`.

Current behavior:

- Requires exact same-origin JSON, strict bounded fields, a honeypot, and a unique idempotency key.
- Uses shared Redis-backed per-client and global limits; unavailable controls fail closed.
- Keeps the production intake fail-closed until a private adapter can atomically bind durable
  persistence to the idempotency record. The current Base44-plus-Redis sequence is not enabled.
- Returns a bounded unavailable response when intake, storage, rate limiting, or fingerprint
  configuration is incomplete. Customer PII is never used as fallback log storage.

To connect email or CRM later:

1. Add provider credentials only in the deployment secret manager.
2. Keep secrets out of source files.
3. Update `app/api/quote/route.ts` to send the validated payload.
4. Preserve non-PII operational logging and verify the distributed abuse controls before launch.

See `docs/base44-integration.md` for the Base44 app ID, entity schema, validation notes, entity push command, and remaining Base44 app availability blocker.

## Notes

The WebGL scene is progressive enhancement. Reduced-motion, mobile, low-memory, and no-WebGL contexts receive a CSS fallback so business information and quote paths remain accessible.
