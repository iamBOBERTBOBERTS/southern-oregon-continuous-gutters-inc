# Asset Intake Checklist

Use this checklist before the final photo/content polish pass. Do not add fake photos, reviews, awards, warranties, guarantees, insurance claims, financing language, or unconfirmed business details.

## Image Asset Map

| Required image type | Recommended orientation | Suggested file name | Site use | Priority | Client notes |
| --- | --- | --- | --- | --- | --- |
| Hero storm/roofline image | Wide landscape, 16:9 or wider | `hero-southern-oregon-roofline-storm.jpg` | Optional hero background enhancement behind the current CSS/WebGL storm atmosphere | High | Use a real local roofline or approved exterior. Avoid dark images that hide CTAs. |
| Finished roofline detail | Landscape or square | `project-roofline-profile.jpg` | Project photography grid, roofline profile card | High | Close-up of finished continuous gutter line. Must be approved for public use. |
| Downspout routing | Landscape or portrait | `project-downspout-routing.jpg` | Project photography grid, downspout routing card | High | Show routing clearly without implying a guarantee. |
| Finished exterior | Landscape | `project-finished-exterior.jpg` | Project photography grid, finished exterior card | High | Curb-facing exterior photo after installation. Avoid publishing address details. |
| Before condition | Landscape, match after angle when possible | `before-existing-runoff.jpg` | Before/after comparison module | Medium | Existing gutter, runoff, or roofline condition. Do not use if it identifies a customer without approval. |
| After condition | Landscape, match before angle when possible | `after-finished-runoff-control.jpg` | Before/after comparison module | Medium | Finished installation from the same angle where practical. |
| Fabrication image | Wide landscape | `fabrication-continuous-gutter-forming.jpg` | Asset-ready process/fabrication slot | Medium | Show continuous gutter forming equipment or material. |
| Installation detail | Landscape | `install-roofline-detail.jpg` | Asset-ready process/install slot | Medium | Use a clean, safe-looking job-site image. Avoid unsafe ladder/roof conditions. |
| Owner/company image | Portrait, landscape, or vehicle/equipment photo | `owner-or-company-approved.jpg` | Local trust/company image slot | Medium | Use only if Paul approves being shown. Company vehicle or equipment is acceptable instead. |
| Southern Oregon local context | Landscape | `southern-oregon-home-context.jpg` | Local service-area visual support | Low | Use a real service-area exterior or landscape reference approved by the client. |

## Business Confirmations Needed

| Confirmation | Current site status | Needed before final polish |
| --- | --- | --- |
| Correct public phone number | Current implementation uses `541-821-4258`; earlier planning referenced `541-770-5785`. | Client must confirm the public number before launch. |
| Confirmed service area | Current copy references Southern Oregon, Medford, and Rogue Valley. | Confirm exact city/service-area wording. |
| CCB #64538 prominence | Currently shown in hero proof, trust area, and footer. | Confirm whether this should remain prominent or move to footer/trust only. |
| Paul Chitwood name usage | Currently appears as owner/operator in business copy. | Confirm whether Paul wants his name shown publicly and at what prominence. |
| Street address | Currently unpublished. | Confirm whether it should remain unpublished. |
| Approved services list | Current list includes continuous gutters, seamless replacement, repair, downspouts, gutter protection, exterior water management, residential, and light commercial. | Confirm final public service list. |
| Warranties, guarantees, awards, reviews, financing, emergency service, insurance claims | Not included. | Add only if the client provides substantiated, approved language. |

## Replacement Notes

1. Add approved optimized images under `public/images/`.
2. Replace CSS placeholder slots in `app/page.tsx` with Next.js `Image` components.
3. Use descriptive alt text tied to the real image content.
4. Keep phone number and business details sourced from `lib/site-data.ts` where practical.
5. Re-run `npm run typecheck`, `npm run lint`, and `npm run build` after asset replacement.
