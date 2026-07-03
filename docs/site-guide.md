# Southern Oregon Continuous Gutters Website Guide

## What changed

This project is a Next.js App Router foundation for Southern Oregon Continuous Gutters Inc. The current homepage is a stable shell that lists core services, keeps click-to-call contact visible, and provides a quote path without adding 3D or heavy animation yet.

## Editing business details

Update core business data in `lib/site-data.ts`.

- Business name
- Owner/operator
- Phone number and click-to-call value
- Service area
- Service list
- Site URL fallback

The production canonical URL should be set with `NEXT_PUBLIC_SITE_URL` in Vercel or a local `.env.local` file.

## Editing copy and sections

Most homepage copy lives in `app/page.tsx`.

- Hero headline and supporting copy are near the top of the page component.
- Service labels are sourced from `lib/site-data.ts`.
- Quote section text is near the `id="quote"` section.

Keep marketing claims conservative until final business, legal, safety, and advertising review is complete.

## Images and 3D assets

No 3D is active yet. Add WebGL only after the foundation is approved and keep it as progressive enhancement.

Recommended final asset inputs:

- Real project photos from Southern Oregon installations.
- Roofline closeups.
- Gutter profile detail shots.
- A static fallback image or CSS composition for browsers without WebGL.
- Optional optimized GLB models under 1 MB if a custom 3D gutter model is approved later.

## Quote form

The quote path currently uses click-to-call and a prepared email link. Add a real form only after the final email destination, CRM, or form provider is confirmed.

Business inputs still needed:

- Final quote request recipient email.
- Preferred form provider or CRM, if any.
- Privacy policy and terms language for production use.

## Validation

Run these commands after edits:

```powershell
npm run typecheck
npm run build
```

Use `npm run dev` for local preview.
