# Project Rules

This project is the Southern Oregon Continuous Gutters Inc. Next.js website.

## Build Safety

- Preserve the existing working build, App Router structure, Tailwind setup, SEO files, quote API, and Base44 integration.
- Use npm because this repo has `package-lock.json`.
- Validate meaningful changes with `npm run typecheck`, `npm run lint`, and `npm run build`.
- Do not create duplicate lockfiles or replace the framework, styling system, package manager, or folder structure without explicit approval.

## Business Accuracy

- Keep business information centralized in `lib/site-data.ts` when practical.
- Use Oregon CCB #64538.
- Do not invent reviews, awards, warranties, financing, insurance claims, emergency service, final product specs, or compliance-sensitive claims.
- Keep the current phone implementation unless the business confirms a change. Known phone conflict: `541-821-4258` is currently implemented; `541-770-5785` appeared in earlier planning.
- Do not prominently publish a street address unless it is confirmed.

## Quote Workflow

- Protect `app/api/quote/route.ts`, `lib/base44.ts`, `base44/config.jsonc`, and `base44/entities/quote-request.jsonc`.
- Base44 supports quote storage only; do not spend frontend polish passes on backend setup unless the form or API is broken.
- Keep secrets out of source files and use environment variables for deployment-specific configuration.

## Frontend Direction

- Prioritize a premium, cinematic, conversion-focused contractor website.
- Keep mobile-first layout, visible phone CTAs, accessible form labels, clear success/error states, and reduced-motion support.
- Use stormwater, roofline, rain, metal, and protection motifs while keeping content readable and practical.
- Do not add advanced 3D or heavier animation systems until approved. CSS-first motion and existing lightweight GSAP/Lenis usage are acceptable.

## Documentation

- For meaningful work, update relevant docs with what changed, why, validation performed, remaining TODOs, and business inputs still needed.
