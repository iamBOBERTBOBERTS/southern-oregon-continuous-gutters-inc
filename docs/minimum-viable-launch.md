# Minimum Viable Launch Gate

Before adding advanced cinematic scenes, the site must satisfy this launch version.

## Required For Launch

- Working homepage
- Clear services
- Phone number visible
- Quote form visible
- Mobile responsive layout
- Local SEO metadata
- Basic animation
- One cinematic WebGL hero scene
- Build passing
- Vercel preview deployed

## Current Implementation Notes

- Homepage content lives in `app/page.tsx`.
- Business details and CTA labels live in `lib/site-data.ts`.
- Quote form lives in `components/QuoteForm.tsx` and posts to `app/api/quote/route.ts`.
- Local metadata is configured in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and the homepage structured data.
- Basic animation uses GSAP ScrollTrigger, Lenis, and DOM reveal hooks.
- WebGL is loaded through `components/three/SceneCanvasLoader.tsx` and falls back for reduced motion, mobile, low-memory, or no-WebGL contexts.

## Advanced Scene Rule

Do not expand the site into the full multi-scene WebGL journey until the launch gate is passing locally and a Vercel preview URL exists.

## Latest Gate Check

- Local lint: passed
- Local typecheck: passed
- Local production build: passed
- Vercel preview: https://southern-oregon-continuous-gutters-3ohezpuil-cavinindustries.vercel.app
