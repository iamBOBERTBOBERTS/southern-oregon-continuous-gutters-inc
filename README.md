# Southern Oregon Continuous Gutters Inc.

Next.js website for Southern Oregon Continuous Gutters Inc., focused on a practical homeowner path: understand roofline runoff, call the company, or request an on-site gutter estimate.

## Current Business Source Of Truth

- Public website phone: `541-770-5785`
- Alternate/direct cell documented for confirmation: `541-821-4258`
- Service area wording: Medford and Southern Oregon
- License: Oregon CCB #64538
- Street address: not published
- Safe public services: seamless gutter installation, continuous gutter replacement, gutter repair, gutter maintenance, downspouts, and roofline water control

Unconfirmed items such as gutter protection, commercial work, warranty language, pricing, insurance/bond proof, public email, exact city list, and street-address publication should not be added until Paul approves them.

## Tech Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- GSAP and Lenis for progressive motion
- Three.js dependencies are present for approved prototype work, but advanced 3D is not part of this public copy repair pass

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
npm run typecheck
npm run lint
npm run build
```

## Project Rules

Read `AGENTS.md` and `docs/codex-rules.md` before major Codex work. They capture the guardrails for business accuracy, quote workflow safety, builds, dependencies, accessibility, mobile performance, and phase commits.

## Public Website Copy

Business details are centralized in `lib/site-data.ts`.

Update this file for:

- Business name
- Owner name
- Public phone number and `tel:` link
- Alternate phone documentation
- Service area
- Service list
- SEO service terms
- Site description
- CTA labels

Most homepage copy lives in `app/page.tsx`. Keep the copy conservative and homeowner-facing. Do not add internal development terms, placeholder language, fake reviews, unsupported guarantees, or unconfirmed service claims to the public UI.

## Image And Asset Replacement

The current homepage uses abstract visual frames rather than fake project photos. Use `docs/asset-intake-checklist.md` to collect approved client photos before replacing those frames.

When final project photos are available:

1. Add optimized images under `public/images/`.
2. Replace the relevant visual frames in `app/page.tsx`.
3. Use Next.js `Image` with explicit `width`, `height`, and descriptive `alt` text.
4. Keep images compressed and sized for their display area.
5. Reconfirm phone number, service area, CCB display preference, Paul/name visibility, public email, and address policy before launch.

## Quote Form

The quote form lives in `components/QuoteForm.tsx` and posts to `app/api/quote/route.ts`.

Current behavior:

- Validates required fields.
- Includes a honeypot field for basic spam filtering.
- Adds preferred contact method and callback window to the submitted message text so the existing API/Base44 schema remains unchanged.
- Stores submissions in the Base44 `QuoteRequest` entity when `BASE44_APP_ID` is configured and the entity has been pushed.
- Falls back to server-side logging when `BASE44_APP_ID` is not configured.

See `docs/base44-integration.md` for the Base44 app ID, entity schema, validation notes, entity push command, and remaining Base44 app availability blocker.

## Deployment

This project is Vercel-ready.

1. Create or select the Vercel project.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain when production is approved.
3. Configure `BASE44_APP_ID` per environment only if quote storage is intended.
4. Use preview deployments for review.

```powershell
npx vercel deploy
```

Do not deploy production without explicit approval.
