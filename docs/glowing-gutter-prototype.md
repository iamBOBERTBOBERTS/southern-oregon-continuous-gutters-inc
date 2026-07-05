# Glowing Gutter Prototype

## Purpose

This prototype explores a premium near-black Three.js scene for Southern Oregon Continuous Gutters Inc. It is intentionally isolated at `/visual-lab/glowing-gutter` and is not integrated into the homepage.

## Visual Direction

- Abstract metallic roofline and gutter form.
- Blue emissive water-flow strip.
- Gold emissive gutter lip accent.
- Blue and gold ember/rain particles using additive blending.
- Custom shader materials with time, blue, gold, and intensity uniforms.
- Bloom-like glow created with additive shader planes and emissive lighting, without adding postprocessing dependencies.

## Technical Notes

- Uses existing dependencies: `three`, `@react-three/fiber`, and `@react-three/drei`.
- No new package dependencies were added.
- Rendering is client-only through a client component boundary.
- Device pixel ratio is clamped to `[1, 1.35]`.
- Mobile, coarse-pointer, low-memory, missing-WebGL, and reduced-motion users receive a static fallback.
- Particle counts are reduced for compact viewports.
- Per-frame animation updates existing buffers/uniforms instead of allocating new objects.

## Integration Rules

Do not integrate this into the homepage until it passes visual approval. Homepage integration must preserve:

- Quote form behavior.
- `/api/quote` and Base44 behavior.
- SEO, schema, sitemap, and robots behavior.
- Current phone numbers and business facts.
- Mobile performance and reduced-motion accessibility.

## Approval Checklist

- Desktop screenshot approved.
- Mobile fallback approved.
- Detail screenshot approved.
- No console errors.
- No horizontal overflow.
- `npm run typecheck`, `npm run lint`, and `npm run build` pass.
- Vercel preview only, not production.
