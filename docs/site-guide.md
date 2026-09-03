# Southern Oregon Continuous Gutters Website Guide

## What changed

This project is a Next.js App Router foundation for Southern Oregon Continuous Gutters Inc. The homepage now includes the full content structure: hero, storm problem, seamless solution, services, continuous gutter benefits, installation process, local trust, gallery placeholders, FAQ, quote form, and footer.

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
- Section arrays for storm problems, services, process steps, and FAQ are defined near the top of `app/page.tsx`.
- Service labels in the quote form are sourced from `lib/site-data.ts`.
- Quote section text is near the `id="quote"` section.

Keep marketing claims conservative until final business, legal, safety, and advertising review is complete.

## Images and 3D assets

The WebGL foundation lives in `components/three/SceneCanvas.tsx` and is loaded through `components/three/SceneCanvasLoader.tsx` so it does not run during server rendering. It uses lightweight geometry, deterministic rain particles, a soft light sweep, and an abstract roofline plane.

The scene intentionally falls back to CSS-only atmosphere for reduced-motion users, coarse-pointer/mobile devices, low-memory devices, or browsers without WebGL support. Keep future 3D additions abstract and lightweight until final models or project photography are approved.

The scroll-driven cinematic journey is defined in `app/page.tsx` as `journeyScenes`. `ScrollSceneController` writes `--cinematic-progress` as visitors scroll through the journey, and `SceneCanvas` uses that value to transition camera position, rain intensity, water paths, gutter profile opacity, aluminum coil opacity, and lighting. Keep scene copy in DOM panels so business messaging remains readable without WebGL.

Performance notes:

- `SceneCanvasLoader` checks reduced motion, pointer type, viewport size, available device memory, and WebGL support before loading the WebGL chunk.
- WebGL is lazy-mounted only when the scene wrapper is near the viewport; offscreen scenes unmount and animation work stops.
- Mobile and low-power contexts use the CSS fallback instead of WebGL. Compact desktop/tablet contexts use fewer rain particles.
- Gallery placeholders are CSS-only until real project images are available. When images are added, use Next.js `Image` with explicit dimensions to avoid layout shift.

## Motion system

The motion layer uses GSAP ScrollTrigger and Lenis. `components/motion/SmoothScrollProvider.tsx` configures smooth scrolling on desktop-style pointers and disables Lenis for reduced-motion users and coarse-pointer mobile devices. `components/motion/ScrollSceneController.tsx` controls section progress, reveal animations, CTA reveals, card reveals, and the single desktop-only pinned solution section.

Use these attributes when adding content:

- `data-scroll-scene` for sections that should report section progress.
- `data-reveal` for headings, body copy, and important text.
- `data-card` for cards and gallery items.
- `data-cta` for call-to-action links and buttons.

Keep mobile animation simpler and avoid hiding business-critical content behind motion.

Recommended final asset inputs:

- Real project photos from Southern Oregon installations.
- Roofline closeups.
- Gutter profile detail shots.
- A static fallback image or CSS composition for browsers without WebGL.
- Optional optimized GLB models under 1 MB if a custom 3D gutter model is approved later.

## Quote form

The quote form lives in `components/QuoteForm.tsx` and submits to `app/api/quote/route.ts`. The
API enforces same-origin JSON, strict bounds, a honeypot, distributed Redis limits, and idempotency.
It returns success only after durable storage. Missing intake, Base44, Redis, or fingerprint
configuration fails closed without logging customer PII.

Base44 setup details and remaining CLI steps are documented in `docs/base44-integration.md`.

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
