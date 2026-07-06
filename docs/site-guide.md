# Southern Oregon Continuous Gutters Website Guide

## What Changed

This project is a Next.js App Router website for Southern Oregon Continuous Gutters Inc. The current public homepage includes a hero, roofline runoff story, verified services, estimate/process information, quote form, final CTA, and footer.

The current copy/business repair pass removes public development language and keeps the site focused on real homeowner needs: installation, replacement, repair, maintenance, downspouts, and practical roofline water control.

## Editing Business Details

Update core business data in `lib/site-data.ts`.

- Business name
- Owner/operator
- Public phone number and click-to-call value
- Alternate/direct phone documentation
- Service area
- Service list
- Site URL fallback
- CCB license number
- Public CTA labels

The production canonical URL should be set with `NEXT_PUBLIC_SITE_URL` in Vercel or a local `.env.local` file.

## Editing Copy And Sections

Most homepage copy lives in `app/page.tsx`.

- Hero headline and supporting copy are near the top of the page component.
- Section arrays for water-path points, services, process steps, estimate review areas, and FAQ are defined near the top of `app/page.tsx`.
- Service labels in the quote form are sourced from `lib/site-data.ts`.
- Quote section text is near the `id="quote"` section.

Keep marketing claims conservative until final business, legal, safety, and advertising review is complete.

## Services Policy

Safe public services for this phase:

- Seamless gutter installation
- Continuous gutter replacement
- Gutter repair
- Gutter maintenance
- Downspouts
- Roofline water control

Hold these for client confirmation before adding to public copy:

- Gutter protection
- Commercial work
- Materials, profiles, colors, and downspout sizes
- Buried drainage tie-ins
- Clean-outs
- Warranties or guarantees
- Pricing
- Insurance/bond proof
- Reviews
- Exact city list
- Public hours

## Images And Motion

The current homepage uses abstract visual treatment and CSS/JS motion as progressive enhancement. Business information, CTAs, and the quote path must remain readable without animation.

Advanced 3D work is paused for the public homepage. Prototype work should remain isolated until the public business copy, assets, and approvals are stable.

Recommended final asset inputs:

- Real project photos from Southern Oregon installations.
- Roofline closeups.
- Downspout routing detail shots.
- Owner, company vehicle, or equipment photo if approved.
- Before/after pairs only when the client approves both images and any related wording.

## Motion System

The motion layer uses GSAP ScrollTrigger and Lenis. `components/motion/SmoothScrollProvider.tsx` configures smooth scrolling on desktop-style pointers and disables Lenis for reduced-motion users and coarse-pointer mobile devices.

Use these attributes when adding content:

- `data-scroll-scene` for sections that should report section progress.
- `data-reveal` for headings, body copy, and important text.
- `data-card` for cards and visual frames.
- `data-cta` for call-to-action links and buttons.

Keep mobile animation simpler and avoid hiding business-critical content behind motion.

## Quote Form

The quote form lives in `components/QuoteForm.tsx` and submits to `app/api/quote/route.ts`. The API validates required fields, checks a honeypot field, and stores submissions in the Base44 `QuoteRequest` entity when `BASE44_APP_ID` is configured and the entity has been pushed. Without `BASE44_APP_ID`, it logs the validated submission and returns success with `stored: false`.

Preferred contact method and callback window are appended to the message text so the existing API/Base44 schema does not change.

Base44 setup details and remaining CLI steps are documented in `docs/base44-integration.md`.

## Business Inputs Still Needed

- Confirm primary website phone number.
- Confirm whether the alternate/direct cell should be public.
- Confirm final quote request recipient email or CRM, if any.
- Confirm public email policy.
- Confirm service area and city list.
- Confirm CCB display preference.
- Confirm Paul/name visibility.
- Confirm street address policy.
- Confirm warranty/guarantee wording only if substantiated.

## Validation

Run these commands after edits:

```powershell
npm run typecheck
npm run lint
npm run build
```

Use `npm run dev` for local preview.
