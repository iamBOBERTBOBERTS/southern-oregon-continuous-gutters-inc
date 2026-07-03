# Southern Oregon Continuous Gutters Inc.

Next.js foundation for the Southern Oregon Continuous Gutters Inc. website, owned and operated by Paul Chitwood.

## Tech stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS

## Local development

```powershell
npm install
npm run dev
```

Open the local URL printed by Next.js.

## Production

Set this environment variable in Vercel:

```powershell
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

Then deploy with the standard Vercel Next.js flow.

## Project notes

Business data is centralized in `lib/site-data.ts`. The homepage shell lives in `app/page.tsx`, and reusable UI primitives live in `components/`.

No 3D layer is active yet. Future WebGL work should be progressive enhancement with a static fallback, reduced-motion support, and visible business contact paths.

See `docs/site-guide.md` for editing copy, contact info, validation, and remaining production inputs.
