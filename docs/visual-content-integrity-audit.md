# Visual Content Integrity Audit

Date: 2026-07-05

Branch: `website-copy-business-audit`

Source of truth: `docs/research/southern-oregon-continuous-gutters-company-local-market-brief.pdf`

## 1. Executive Summary

The current customer-facing website is visually ambitious, but it is not ready for real business launch or client review. The site still reads partly like an internal cinematic prototype instead of a mature gutter contractor website. The biggest issues are business-info mismatch, public placeholder language, unconfirmed services, over-stylized section copy, and trust gaps around contact, scheduling, service proof, and real assets.

The research brief supports a stronger and more practical direction: Southern Oregon Continuous Gutters Inc. should be presented as an established Medford / Southern Oregon gutter specialist connected to Paul Chitwood, with active Oregon CCB license #64538, a public trail going back to 1990, Oregon corporation registration on January 7, 1998, and verified core services around continuous/seamless gutter installation, replacement, repair, maintenance, and downspouts.

The site should pause advanced 3D/prototype work until the public website accurately represents the real business.

## 2. Does The Site Feel Like A Real Operating Business Website?

Not yet.

The hero has a strong dark visual style and clear gutter-related premise, but the page loses credibility as the visitor scrolls. The section "The page follows the same path water should follow" sounds like a web-design concept, not a homeowner-facing business message. The gallery section publicly says "Premium placeholders now. Real Southern Oregon work when approved," which is internal production language and should never appear on a launch site.

The current site may impress as a design experiment, but it does not yet provide enough practical proof that a homeowner should call, schedule, or trust the business.

## 3. Current Public Website Status

Verified from code and browser screenshots:

- Public homepage exists in `app/page.tsx`.
- Business data is centralized in `lib/site-data.ts`.
- Primary public CTA currently uses `541-821-4258`.
- Schema currently uses that same phone number.
- Homepage publicly shows CCB #64538.
- Street address is not published.
- Quote form is live and posts to `/api/quote`.
- Public page includes asset placeholders and file names.
- Public page includes CSS/motion-driven reveal behavior that can leave large blank dark zones in full-page browser capture.

## 4. Verified Business Facts From The Research Brief

- Legal name: Southern Oregon Continuous Gutters Inc.
- Paul Chitwood is connected to the business; BBB lists Mr. Paul Chitwood as President, and a CCB-synced profile lists Paul Laurence Chitwood as RMI.
- Oregon CCB license #64538 is active through February 27, 2028 according to the brief.
- Business public trail goes back to 1990.
- Oregon corporation registration date: January 7, 1998.
- Strong local positioning: Medford, Jackson County, Rogue Valley, Southern Oregon.
- Strongest public company phone candidate: `541-770-5785`.
- `541-821-4258` appears to be alternate/direct/cell and should only be primary if Paul approves.
- Safer address strategy: PO Box 1566, Medford, OR 97501, or simply Medford / Southern Oregon until Paul confirms street-address publication.
- Email from the business card, `pchit35@yahoo.com`, should be confirmed before publishing.

## 5. Verified Core Services

Safe service architecture from the brief:

- Gutter installation.
- Gutter replacement.
- Gutter repair.
- Gutter maintenance.
- Downspouts.
- Seamless / continuous gutters.

Use caution or client confirmation before publishing:

- Materials.
- Gutter profiles and sizes.
- Colors.
- Gutter guards / leaf protection.
- Downspout sizes.
- Buried drainage tie-ins.
- Commercial work.
- Warranties or guarantees.
- Insurance or bond proof language.
- Exact service-area city list.
- Hours.
- Public email.
- Reviews or testimonials.

## 6. Major Visual Problems

1. Full-page screenshots show large blank dark sections between the hero and lower content. This may be due to animation/reveal state in capture, but it is a real QA concern.
2. The site feels visually more like a cinematic concept than a contractor business page.
3. The placeholder gallery uses gray blocks and public filename labels; this looks unfinished.
4. There is not enough real-world proof: no truck, owner, equipment, install, before/after, or license document visuals.
5. The dark style is premium, but it risks hiding practical information.
6. CTAs are visible, but the phone number may be the wrong primary number.
7. The homepage spends too much energy explaining water-path storytelling and not enough energy explaining the business and process plainly.
8. The footer is too thin for launch: it needs safer contact, license, location, and confirmation-driven trust information.

## 7. Major Copy / Verbiage Problems

Problematic public copy:

- "The page follows the same path water should follow."
  - Problem: Refers to the webpage, not the homeowner's problem.
  - Better direction: "A good gutter system gives water a clear path away from the home."

- "Premium placeholders now. Real Southern Oregon work when approved."
  - Problem: Internal production note visible to the public.
  - Better direction: Remove the section until photos are approved, or rename to "Project proof coming from approved local work" only in internal docs, not public UI.

- "These frames are intentionally honest asset slots."
  - Problem: Internal design/development language.
  - Better direction: Do not describe missing assets publicly.

- "Clean completed gutter line on a real Southern Oregon home"
  - Problem: Asset instruction, not customer-facing copy.
  - Better direction: Replace with real alt/caption after photos are approved.

- File names like `project-roofline-profile.jpg`.
  - Problem: Public file-planning artifact.
  - Better direction: Never show file names on the customer page.

- "Tell Paul what water is doing around the home."
  - Problem: Awkward phrasing.
  - Better direction: "Tell us what is happening at the roofline, gutters, or downspouts."

- "Request Quote"
  - Problem: Generic and less homeowner-friendly.
  - Better direction: "Request a Free On-Site Estimate" if Paul confirms free estimates.

## 8. Developer / Prototype Language Found

Safe internal documentation:

- `docs/advanced-version-brief.md`: scroll-synced 3D, WebGL, particle field.
- `docs/site-guide.md`: WebGL foundation, SceneCanvas, fallback notes.
- `docs/final-build-sequence.md`: WebGL hero, scroll-driven scenes.
- `docs/machine-handoff.md`: prototype route and branch instructions.
- `README.md`: technical stack and WebGL notes.

Public-facing and must be removed or rewritten:

- `app/page.tsx`: "The page follows..."
- `app/page.tsx`: "Approved photography slots"
- `app/page.tsx`: "Premium placeholders now. Real Southern Oregon work when approved."
- `app/page.tsx`: "intentional placeholders"
- `app/page.tsx`: visible file names in asset cards.

Potentially public-facing technical positioning to reconsider:

- `README.md` if shared with client: "scroll-driven visual experience", "Three.js", "WebGL scene".
- `docs/client-review-package.md` if sent as client-facing collateral: says site is "client-review-ready," which is no longer accurate after this audit.

## 9. Public-Facing Terms That Must Be Removed

Remove from public UI:

- "page follows"
- "approved photography slots"
- "premium placeholders"
- "asset slots"
- "when approved"
- visible image filenames
- internal TODO-style asset language
- "cinematic" if it distracts from business purpose

Keep only in internal docs:

- prototype
- visual-lab
- shader
- bloom
- particle
- WebGL
- 3D
- scroll-driven
- phase
- mockup

## 10. Business-Model Mismatches

1. Primary phone mismatch: site uses `541-821-4258`; brief identifies `541-770-5785` as strongest public company number.
2. Services list includes `Light commercial gutter systems`; commercial work is not confirmed for public launch.
3. Services list includes `Gutter protection options`; guard/leaf protection offering is not confirmed.
4. Services list includes `Exterior water management`; this can imply broader drainage consulting beyond verified gutter/downspout work.
5. FAQ says gutter protection can be added; this should be client-confirmed.
6. Process says "Form continuous gutters on site for the needed profile and lengths"; on-site forming is plausible but should be confirmed by Paul.
7. CTA "Call Paul" may be good if Paul approves public name prominence, but the brief says Paul/name visibility still requires confirmation.
8. Quote form requires email; the brief notes contractor workflows may prioritize phone and email may be optional if Paul prefers calls.

## 11. Unsupported Claims Found

No fake reviews, awards, financing, emergency service, or explicit warranties were found in the public homepage.

Claims or implied claims needing caution:

- "Gutter protection can be discussed" / "Gutter protection options" - confirm offering.
- "Light commercial gutter systems" - confirm commercial work.
- "formed on site" - confirm equipment/workflow.
- "built for Southern Oregon storms" - safe direction, but should be phrased conservatively as "built for Southern Oregon rooflines and winter runoff" rather than implying a performance guarantee.
- "Active CCB / insured / bonded" is supported in the brief with caution, but the site currently only shows CCB. Do not add insured/bonded proof until Paul provides current documentation.

Avoid adding:

- "no leak points"
- "corrosion-resistant"
- "built to last"
- hard pricing
- BBB accredited
- no-permit-needed blanket claims
- emergency service
- warranty or guarantee wording
- insurance or bond proof language without documentation

## 12. Phone / Address / Email / Schema Concerns

Phone:

- Current site phone: `541-821-4258`.
- Research brief strongest public phone: `541-770-5785`.
- Recommendation: second-pass repair should prepare a phone strategy change, but do not switch until Paul approves. If approved, update `lib/site-data.ts`, CTA text, `phoneHref`, form messages, footer, and schema.

Address:

- Street address is not published, which is currently safer.
- Do not publish 32 Black Oak Dr unless Paul explicitly approves.
- Consider PO Box 1566 or "Medford, OR / Southern Oregon" after approval.

Email:

- Business-card email `pchit35@yahoo.com` exists, but the brief says public email is not reliably verified. Do not publish until confirmed.

Schema:

- `app/page.tsx` schema currently uses `telephone: siteData.phoneNumber`, so it inherits the weaker primary phone.
- Schema includes `priceRange: "$$"` without client confirmation; remove or confirm.
- Schema includes `serviceType: siteData.seoServices`, which includes unconfirmed `gutter protection`.
- Schema does not include CCB identifier, PO Box, or founding date; these can be added only after copy strategy approval.

## 13. Placeholder / Unfinished Sections

Most damaging public placeholder section:

- `AssetSlots()` in `app/page.tsx`.

Why it hurts:

- It publicly admits the site lacks real project proof.
- It shows planning language instead of customer value.
- It exposes file names.
- It makes the business look unfinished.

Repair options:

1. Remove this section until real photos are approved.
2. Replace it with a trust/process section using verified facts.
3. Use abstract visual frames only if captions are customer-facing and do not expose internal asset planning.

## 14. Quote Form Copy Problems

Current issues:

- "Tell Paul what water is doing around the home" is awkward.
- Requires email; brief suggests phone-first contractor workflow may be more practical.
- "Address / City" placeholder "Street or city" may invite full address collection. That may be useful for estimates, but copy should explain why and avoid implying the street address is publicly used.
- Error messages call Paul at `541-821-4258`, which may be wrong.
- Urgent wording: "Call if urgent" could imply emergency service; better wording is "For faster scheduling, call..."

Recommended form direction:

- Heading: "Request a gutter estimate."
- Helper: "Share your city, service need, and what you are seeing at the gutter, roofline, or downspouts."
- Service options should be limited to verified services.
- Phone should remain required.
- Email could be optional or required depending on Paul approval.
- Address/city label should be "Project city or address" with clear privacy-safe helper text.

## 15. Navigation / Header / Footer Issues

Header:

- Clear but minimal.
- "Call" button hides the actual number on desktop and tablet; consider showing number after phone strategy confirmation.

Footer:

- Shows business name, license, service area, and phone.
- Needs safer trust/contact structure for launch:
  - CCB #64538.
  - Medford / Southern Oregon.
  - Public phone once confirmed.
  - PO Box only if approved.
  - No street address unless approved.

## 16. Mobile Readability Issues

Mobile screenshot observations:

- Header brand is small but readable.
- CTA is visible.
- Full-page capture shows long dark stretches and placeholder blocks that feel unfinished.
- Quote form is findable but appears after a lot of conceptual content.
- The page length is high for the amount of practical business information.

Recommended mobile repair:

- Move practical service/trust information higher.
- Reduce conceptual sections.
- Remove public placeholder gallery.
- Add a compact "What we do" section with verified services.
- Keep sticky call visible, but correct phone strategy first.

## 17. 3D / Prototype Concerns

The customer-facing branch contains components and docs for WebGL/scroll-driven visuals, but this audit is not about continuing that work.

Current risk:

- The public website already leans heavily into "cinematic" behavior while the business facts and trust proof are underdeveloped.
- Advanced 3D should not be integrated until the homepage reads as a credible operating gutter company site.

Approval gate before any 3D integration:

- Phone strategy approved.
- Service list approved.
- Public address/email policy approved.
- Placeholder gallery removed or replaced.
- Quote form copy repaired.
- Schema repaired.
- Homepage passes visual QA on desktop/tablet/mobile.
- Client approves the refined 3D prototype separately.

## 18. Recommended Public Website Vocabulary

Use:

- "Seamless and continuous gutter installation"
- "Gutter replacement"
- "Gutter repair and maintenance"
- "Downspouts"
- "Medford and Southern Oregon"
- "Rogue Valley rooflines"
- "Winter runoff"
- "Leaf debris"
- "Custom-fit gutter systems"
- "Clear estimates"
- "Written quote / written scope" if Paul approves.
- "Active Oregon CCB #64538"
- "Owner-operated" if Paul approves.

Avoid:

- "premium placeholders"
- "asset slots"
- "cinematic system"
- "tech demo"
- "phase"
- "mockup"
- "no leak points"
- "corrosion-resistant"
- "built to last"
- "BBB accredited"
- "emergency service"
- "guaranteed"
- "insured and bonded" until current proof is supplied.

## 19. Section-By-Section Repair Plan

Hero:

- Keep the water-control premise.
- Replace primary phone after approval.
- Add a more direct local trust line: "Medford-area gutter contractor serving Southern Oregon. Active Oregon CCB #64538."

Water path:

- Replace "The page follows..." with homeowner-facing copy.
- Example: "A good gutter system gives runoff a clear route away from the home."

Risk section:

- Keep the concept, but make it less dramatic.
- Add winter runoff, debris, fascia/siding/foundation language from the brief.

Services:

- Limit to verified services first:
  - Continuous/seamless gutter installation.
  - Gutter replacement.
  - Gutter repair.
  - Gutter maintenance.
  - Downspouts.
- Move gutter protection, commercial, materials, profiles, and drainage tie-ins to "confirm with Paul" until approved.

Process:

- Keep practical steps, but confirm on-site forming.
- Add "written estimate/scope" if approved.

Asset/gallery section:

- Remove or replace. Do not show placeholders or file names publicly.

FAQ:

- Remove gutter protection FAQ until confirmed.
- Add FAQ about estimates, repair vs replacement, service area, and drainage tie-ins with careful language.

Quote:

- Rewrite for homeowner clarity.
- Remove "urgent" wording unless emergency/urgent handling is approved.

Footer:

- Use confirmed phone.
- Keep CCB #64538.
- Use Medford / Southern Oregon or PO Box if approved.

Schema:

- Replace phone if approved.
- Remove unconfirmed services and priceRange.
- Add CCB identifier and founding date only if final copy approves them.

## 20. Exact Files That Need Edits

High priority:

- `lib/site-data.ts`
- `app/page.tsx`
- `components/QuoteForm.tsx`
- `app/layout.tsx`

Schema/SEO:

- `app/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

Supporting docs to update after repair:

- `README.md`
- `docs/client-review-package.md`
- `docs/asset-intake-checklist.md`
- `docs/brand-reference.md`
- `docs/machine-handoff.md`
- `docs/site-guide.md`

Possible cleanup or deferral:

- `components/three/SceneCanvas.tsx`
- `components/three/SceneCanvasLoader.tsx`
- `components/motion/ScrollSceneController.tsx`

Do not remove 3D code yet unless the user approves a separate cleanup. It is not currently imported by the homepage, but docs should clearly state it is paused.

## 21. Priority Order For Repair

1. Confirm phone strategy: `541-770-5785` as public company line unless Paul explicitly chooses `541-821-4258`.
2. Rewrite `lib/site-data.ts` around verified services only.
3. Rewrite homepage copy to remove internal/placeholder language.
4. Remove or hide public asset placeholder section.
5. Rewrite quote form labels, helper text, service options, and messages.
6. Repair schema and metadata using verified facts only.
7. Update docs so none describe the site as client-ready before copy repair.
8. Re-run validation.
9. Deploy a preview for content review.
10. Only after approval, return to visual/3D decisions.

## 22. Screenshot Artifacts

Captured during this audit:

- `docs/visual-review/content-audit-home-desktop.png`
- `docs/visual-review/content-audit-home-tablet.png`
- `docs/visual-review/content-audit-home-mobile.png`
- `docs/visual-review/content-audit-hero.png`
- `docs/visual-review/content-audit-quote-form.png`
- `docs/visual-review/content-audit-footer.png`

Browser metrics:

- No horizontal overflow observed.
- One 404 resource error observed, likely missing favicon.
- Large blank visual stretches observed in full-page screenshots.

## 23. Final Recommendation

Do not show this website to Paul as client-ready yet.

The next pass should be a public website repair pass, not another visual or 3D pass. The goal should be to turn the homepage into a credible Medford / Southern Oregon gutter contractor website built around verified services, clear phone/contact strategy, practical homeowner language, and conservative trust proof.

Recommended next implementation prompt:

"On branch `website-copy-business-audit`, perform the approved copy/business repair pass. Update only `lib/site-data.ts`, `app/page.tsx`, `components/QuoteForm.tsx`, `app/layout.tsx`, and schema/metadata as needed. Use `docs/research/southern-oregon-continuous-gutters-company-local-market-brief.pdf` and `docs/visual-content-integrity-audit.md` as source documents. Do not integrate 3D. Do not publish a street address. Do not invent services or claims. Prepare the site for a real business preview."
