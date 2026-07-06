# Client Review Package

Date: 2026-07-05

## Current Project Status

The website is in a public copy/business-alignment repair phase. The goal is to make the current homepage credible for a real Southern Oregon gutter contractor before returning to advanced visual or 3D work.

The site is not final-launch-ready until Paul confirms the remaining business inputs and approves real project assets.

## What Has Been Built

- Dark, premium homeowner-facing homepage.
- Header, phone CTA, quote CTA, and sticky mobile call path.
- Hero focused on Medford and Southern Oregon seamless gutter work.
- Roofline runoff story using practical gutter/downspout language.
- Services section limited to safe public services.
- Estimate/process section with conservative wording.
- Quote form connected to the existing `/api/quote` workflow.
- Footer with Oregon CCB #64538, Medford/Southern Oregon location language, and public phone CTA.

## What The Site Is Designed To Communicate

Southern Oregon Continuous Gutters Inc. helps Medford and Southern Oregon homeowners move roof water away from siding, walkways, landscaping, and foundation edges with custom-fit seamless gutter systems, replacement, repair, maintenance, downspouts, and practical roofline water-control work.

The site should feel premium, but the business message must stay clear: call the company or request an on-site estimate.

## Current Public Business Details

| Item | Current site status |
| --- | --- |
| Public phone | `541-770-5785` |
| Alternate/direct cell | `541-821-4258`, documented only until Paul confirms usage |
| Service area | Medford and Southern Oregon |
| License | Oregon CCB #64538 |
| Street address | Not published |
| Public email | Not published |
| Paul Chitwood name | Kept in internal business data and docs; not made more prominent on the homepage |

## Required Photo And Asset List

Use `docs/asset-intake-checklist.md` as the detailed intake map. Priority assets:

| Asset | Suggested file name | Where it will be used |
| --- | --- | --- |
| Hero roofline or storm/exterior image | `hero-southern-oregon-roofline-storm.jpg` | Optional hero enhancement |
| Finished roofline detail | `project-roofline-profile.jpg` | Project proof section |
| Downspout routing | `project-downspout-routing.jpg` | Project proof section |
| Finished exterior | `project-finished-exterior.jpg` | Project proof section |
| Before condition | `before-existing-runoff.jpg` | Before/after module, if approved |
| After condition | `after-finished-runoff-control.jpg` | Before/after module, if approved |
| Fabrication image | `fabrication-continuous-gutter-forming.jpg` | Process support, if confirmed |
| Installation detail | `install-roofline-detail.jpg` | Process support |
| Owner or company image | `owner-or-company-approved.jpg` | Trust/company section, if approved |
| Southern Oregon context image | `southern-oregon-home-context.jpg` | Local service-area support |

## Recommended Photo Examples

- Clean finished seamless gutter line.
- Wide exterior showing completed roofline work.
- Downspout path away from a walkway, bed, or foundation edge.
- Repair/replacement condition before work begins.
- Job-site detail that looks safe and professional.
- Company truck, equipment, or owner photo if approved.
- Southern Oregon home exterior or service-area context image.

Avoid images that expose private addresses, license plates, unsafe work practices, or unsupported results.

## Business Info Confirmation Checklist

- Confirm `541-770-5785` as the primary public website phone.
- Confirm whether `541-821-4258` should appear publicly as a cell/direct number.
- Confirm exact service area and any city list.
- Confirm whether CCB #64538 should be prominent or footer-only.
- Confirm whether Paul wants his name shown publicly.
- Confirm whether `pchit35@yahoo.com` should be published.
- Confirm whether the street address should remain unpublished.
- Confirm approved final services list.
- Confirm gutter protection only if offered.
- Confirm commercial work only if offered.
- Confirm warranty/guarantee language only if substantiated.
- Confirm any insurance/bond language only with current proof.

## Launch-Readiness Checklist

- Business confirmations complete.
- Approved photos collected.
- Public copy reviewed by Paul.
- Unsupported claims removed.
- Phone links tested.
- Quote form tested.
- Base44 production readiness confirmed if quote storage is required.
- `npm run typecheck` passes.
- `npm run lint` passes.
- `npm run build` passes.
- Mobile, tablet, and desktop visual QA passes.
- Vercel preview reviewed from a logged-out browser.
- Production deployment explicitly approved.

## Suggested Next Phase

After the copy/business repair preview is reviewed, collect approved photos and client confirmations. Then run the final content/photo polish pass before production launch decisions.
