# Client Review Package

Date: 2026-07-03

## Current Project Status

The local Next.js website is in a client-review-ready state for Southern Oregon Continuous Gutters Inc. The current version is a polished, cinematic, asset-ready homepage that can be reviewed before final project photography and final business confirmations are available.

Latest completed phases:

- Cinematic homepage MVP
- Asset-ready homepage polish
- Client-review QA polish

Validation target remains:

```powershell
npm run typecheck
npm run lint
npm run build
```

## What Has Been Built

- Premium dark stormwater-protection homepage.
- Sticky header with quote and phone CTAs.
- Cinematic hero with storm, rain, roofline, and water-control visual motifs.
- Stormwater problem section.
- Seamless continuous gutter solution section.
- Services section using safe, non-invented wording.
- Southern Oregon relevance section.
- Installation/process section.
- Local owner-operated trust section.
- Asset-ready project photography slots.
- Before/after image slots without fake claims.
- Fabrication, installation, local context, and company image slots.
- FAQ section.
- Quote form connected to the existing `/api/quote` workflow.
- Final CTA and footer.
- Mobile sticky call button.
- Reduced-motion and low-power visual fallbacks from the existing implementation.

## Intended Communication

The site is designed to communicate that Southern Oregon Continuous Gutters Inc. helps homeowners control roof runoff with custom-fit continuous gutter systems. The visual story is:

1. Southern Oregon weather puts pressure on rooflines.
2. Uncontrolled runoff can affect fascia, siding, walkways, landscaping, and foundation edges.
3. Continuous gutters give water a cleaner route.
4. The system is measured, formed, installed, and routed with practical water-control intent.
5. The homeowner has clear ways to call or request a quote.

The site should feel premium and cinematic while still staying practical for a local contractor website.

## Client Confirmations Needed

| Item | Current site status | Client confirmation needed |
| --- | --- | --- |
| Correct public phone number | Uses `541-821-4258`. Earlier planning referenced `541-770-5785`. | Confirm one public number before launch. |
| Service area | Uses Southern Oregon, Medford, and Rogue Valley wording. | Confirm exact cities/counties/regions to list. |
| CCB #64538 prominence | Currently shown in hero proof, trust section, and footer. | Confirm whether this should stay prominent or move lower on the page. |
| Paul Chitwood name usage | Currently shown as owner/operator. | Confirm whether Paul wants his name shown publicly and at this level of prominence. |
| Street address | Not published. | Confirm whether it should remain unpublished. |
| Final services list | Current services include continuous gutter installation, seamless gutter replacement, gutter repair, downspouts, gutter protection, exterior water management, residential gutter systems, and light commercial gutter systems. | Confirm approved final service list. |
| Warranty or guarantee language | Not included. | Add only if the client provides substantiated, approved wording. |
| Reviews, awards, financing, insurance claims, emergency service | Not included. | Add only if confirmed and approved by the client. |

## Required Photo And Asset List

Use `docs/asset-intake-checklist.md` as the detailed intake map. Priority assets:

| Asset | Suggested file name | Where it will be used |
| --- | --- | --- |
| Hero roofline or storm/exterior image | `hero-southern-oregon-roofline-storm.jpg` | Optional hero background enhancement |
| Finished roofline detail | `project-roofline-profile.jpg` | Project photography grid |
| Downspout routing | `project-downspout-routing.jpg` | Project photography grid |
| Finished exterior | `project-finished-exterior.jpg` | Project photography grid |
| Before condition | `before-existing-runoff.jpg` | Before/after module |
| After condition | `after-finished-runoff-control.jpg` | Before/after module |
| Fabrication image | `fabrication-continuous-gutter-forming.jpg` | Asset-ready process/fabrication module |
| Installation detail | `install-roofline-detail.jpg` | Asset-ready process/install module |
| Owner or company image | `owner-or-company-approved.jpg` | Local trust/company image slot |
| Southern Oregon context image | `southern-oregon-home-context.jpg` | Local service-area visual support |

## Recommended Photo Examples

- Close-up of a clean finished continuous gutter line.
- Wide exterior showing a finished roofline.
- Downspout route from gutter to discharge area.
- Continuous gutter machine or material being formed.
- Job-site detail that looks clean and safe.
- Before/after pair from a similar angle.
- Company truck, equipment, or owner photo if approved.
- Southern Oregon home exterior or service-area context image.

Avoid:

- Photos that expose private addresses, license plates, or customer-identifying details without approval.
- Unsafe ladder/roof-working scenes.
- Dark images that make gutters impossible to see.
- Any image that implies a warranty, guarantee, or result that has not been approved.

## Launch-Readiness Checklist

- Confirm public phone number.
- Confirm final service area wording.
- Confirm CCB #64538 placement.
- Confirm Paul Chitwood name usage.
- Confirm street address policy.
- Confirm final services list.
- Collect approved photos.
- Replace asset slots with optimized images under `public/images/`.
- Add real alt text for each final image.
- Review final copy for unsupported claims.
- Test phone links.
- Test quote form locally.
- Confirm Base44 production readiness if quote storage is required.
- Run `npm run typecheck`.
- Run `npm run lint`.
- Run `npm run build`.
- Verify mobile, tablet, and desktop layouts.
- Deploy preview for client approval.
- Verify logged-out public preview access.

## Suggested Next Phase

After the client provides approved photos and business confirmations, run the final content/photo polish pass:

1. Add optimized images to `public/images/`.
2. Replace CSS asset slots with real `Image` components.
3. Tune crop, contrast, spacing, and alt text.
4. Finalize service-area and business-info wording.
5. Re-run validation.
6. Deploy a preview for client review.
