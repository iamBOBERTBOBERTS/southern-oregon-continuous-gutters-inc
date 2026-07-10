# Project Rules

This project is the Southern Oregon Continuous Gutters Inc. Next.js website.

## Project Context

* Active folder: `C:\Users\cavin\OneDrive\Documents\SOUTHERN OREGON CONTINOUS GUTTERS - PAUL CHITWOOD`
* Stack: Next.js App Router, TypeScript, Tailwind CSS, GSAP/Lenis, Three.js, React Three Fiber, Drei, Base44 SDK.
* Package manager: npm. This repo has `package-lock.json`; do not create another lockfile.
* Primary purpose: premium, conversion-focused contractor website with a quote request workflow.

## Build Safety

* Preserve the existing working build, App Router structure, Tailwind setup, SEO files, quote API, and Base44 integration.
* Inspect `README.md`, `package.json`, `app/`, `components/`, `lib/`, `base44/`, and relevant docs before editing.
* Validate meaningful changes with `npm run typecheck`, `npm run lint`, and `npm run build`.
* Run validation sequentially. Parallel validation can race with generated Next.js files.
* Do not create duplicate lockfiles or replace the framework, styling system, package manager, or folder structure without explicit approval.
* Preserve untracked visual review artifacts and prior generated outputs unless the user explicitly asks for cleanup.

## Business Accuracy

* Keep business information centralized in `lib/site-data.ts` when practical.
* Use Oregon CCB #64538.
* Do not invent reviews, awards, warranties, financing, insurance claims, emergency service, final product specs, or compliance-sensitive claims.
* Keep the current phone implementation unless the business confirms a change. Known phone conflict: `541-821-4258` is currently implemented; `541-770-5785` appeared in earlier planning.
* Do not prominently publish a street address unless it is confirmed.
* Use conservative service language and mark any legal, warranty, insurance, privacy, or terms text as business/legal review required.

## Quote Workflow And Base44

* Protect `app/api/quote/route.ts`, `lib/base44.ts`, `base44/config.jsonc`, and `base44/entities/quote-request.jsonc`.
* Base44 supports quote storage only; do not spend frontend polish passes on backend setup unless the form or API is broken.
* Keep secrets out of source files and use environment variables for deployment-specific configuration.
* Verify both quote paths when touching quote logic:

  * without `BASE44_APP_ID`, `POST /api/quote` should keep the non-failing fallback behavior
  * with `BASE44_APP_ID`, the route should be checked for actual remote storage behavior

* Prior runs found Base44 remote writes blocked by app availability/auth state. Re-verify current Base44 status before claiming remote storage works.
* If `base44 link --projectId` cannot link and reports no projects, use the CLI global `--app-id` path only after confirming the intended app ID.
* Stop cleanly at device-code, login, password, MFA, or admin prompts and hand off to the user.
* Do not commit or publish Base44 workflow changes until quote submission returns the intended stored state or the limitation is clearly documented.

## Skill And Tool Routing

* Use Base44 skills for entities, backend functions, SDK work, deployment, and logs.
* Use browser verification for quote forms, mobile layout, visual review, screenshots, and public/client-review flows.
* Use GitHub skills only when the task involves GitHub PRs, issues, CI, comments, commits, pushes, or publishing.
* Use web/current-source verification for public deployment status, current service rules, public accessibility, or external recommendations.

## Frontend Direction

* Prioritize a premium, cinematic, conversion-focused contractor website.
* Keep mobile-first layout, visible phone CTAs, accessible form labels, clear success/error states, and reduced-motion support.
* Use stormwater, roofline, rain, metal, and protection motifs while keeping content readable and practical.
* Do not add advanced 3D or heavier animation systems until approved. CSS-first motion and existing lightweight GSAP/Lenis usage are acceptable.
* Verify responsive layouts and important UI states before claiming visual work is complete.

## Documentation

For meaningful work, update relevant docs with:

* what changed
* why it changed
* validation performed
* remaining TODOs
* business inputs still needed
