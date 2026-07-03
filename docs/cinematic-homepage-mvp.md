# Cinematic Homepage MVP

Date: 2026-07-03

## What changed

- Rebuilt the homepage presentation into a premium stormwater-protection journey.
- Added a sticky conversion header, cinematic hero, stormwater problem section, continuous gutter solution section, services, Southern Oregon relevance, process, owner-operated trust, gallery placeholders, FAQ, quote form, final CTA, and footer.
- Added CSS-based rain, roofline, metal, shine, water-flow, and section atmosphere treatments.
- Improved quote form presentation without changing the `/api/quote` payload or Base44 storage path.
- Added root `AGENTS.md` project rules for future Codex work.

## Why

The site needed to shift from backend setup toward a visually stronger contractor website that still converts homeowners into calls and quote requests. This pass keeps the existing Next.js, SEO, quote API, and Base44 integration intact while improving the first impression and service story.

## Validation

Run after implementation:

```powershell
npm run typecheck
npm run lint
npm run build
```

## Remaining TODOs

- Confirm final phone number. Current implementation uses `541-821-4258`; earlier planning also referenced `541-770-5785`.
- Add approved local project photography to replace gallery placeholders.
- Confirm whether a street address should be published.
- Confirm final product details, warranty language, and any advertising claims before launch.
- Revisit Base44 only if quote storage is required for deployment testing or if `/api/quote` starts failing unexpectedly.
