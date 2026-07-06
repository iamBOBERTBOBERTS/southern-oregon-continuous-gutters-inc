# Asset Intake Checklist

Use this checklist before the final photo/content polish pass. Do not add fake photos, reviews, awards, warranties, guarantees, insurance claims, financing language, emergency-service claims, or unconfirmed business details.

## Image Asset Map

| Required image type | Recommended orientation | Suggested file name | Site use | Priority | Client notes |
| --- | --- | --- | --- | --- | --- |
| Hero storm/roofline image | Wide landscape, 16:9 or wider | `hero-southern-oregon-roofline-storm.jpg` | Optional hero enhancement | High | Use a real local roofline or approved exterior. Avoid dark images that hide CTAs. |
| Finished roofline detail | Landscape or square | `project-roofline-profile.jpg` | Project proof section | High | Close-up of finished seamless/continuous gutter line. Must be approved for public use. |
| Downspout routing | Landscape or portrait | `project-downspout-routing.jpg` | Project proof section | High | Show routing clearly without implying a guarantee. |
| Finished exterior | Landscape | `project-finished-exterior.jpg` | Project proof section | High | Curb-facing exterior after installation. Avoid publishing address details. |
| Before condition | Landscape, match after angle when possible | `before-existing-runoff.jpg` | Before/after module, if approved | Medium | Existing gutter, runoff, or roofline condition. Do not use if it identifies a customer without approval. |
| After condition | Landscape, match before angle when possible | `after-finished-runoff-control.jpg` | Before/after module, if approved | Medium | Finished installation from the same angle where practical. Avoid result claims unless approved. |
| Fabrication image | Wide landscape | `fabrication-continuous-gutter-forming.jpg` | Process support, if Paul confirms fabrication/on-site forming should be shown | Medium | Show continuous gutter forming equipment or material only if approved. |
| Installation detail | Landscape | `install-roofline-detail.jpg` | Process/install support | Medium | Use a clean, safe-looking job-site image. Avoid unsafe ladder/roof conditions. |
| Owner/company image | Portrait, landscape, vehicle, or equipment photo | `owner-or-company-approved.jpg` | Trust/company section | Medium | Use only if Paul approves being shown. Company vehicle or equipment is acceptable instead. |
| Southern Oregon local context | Landscape | `southern-oregon-home-context.jpg` | Local service-area visual support | Low | Use a real service-area exterior or landscape reference approved by the client. |

## Business Confirmations Needed

| Confirmation | Current site status | Needed before final polish |
| --- | --- | --- |
| Correct public phone number | Website now uses `541-770-5785` as the public company line. `541-821-4258` is documented as alternate/direct/cell. | Paul should confirm the primary public number before launch. |
| Confirmed service area | Current copy references Medford and Southern Oregon. | Confirm exact city/service-area wording. |
| CCB #64538 prominence | Currently shown in hero proof and footer. | Confirm whether this should remain prominent or move lower on the page. |
| Paul Chitwood name usage | Name is documented internally and in source data, but not emphasized more heavily on the homepage. | Confirm whether Paul wants his name shown publicly and at what prominence. |
| Street address | Not published. | Confirm whether it should remain unpublished. |
| Public email | Not published. | Confirm whether `pchit35@yahoo.com` should appear publicly. |
| Approved services list | Current public list is seamless gutter installation, continuous gutter replacement, gutter repair, gutter maintenance, downspouts, and roofline water control. | Confirm final public service list. |
| Gutter protection, commercial work, materials, profiles, colors, buried drainage tie-ins, hours | Not included as public offerings. | Add only if confirmed by Paul. |
| Warranties, guarantees, awards, reviews, financing, emergency service, insurance claims | Not included. | Add only if the client provides substantiated, approved language. |

## Replacement Notes

1. Add approved optimized images under `public/images/`.
2. Replace abstract visual frames in `app/page.tsx` with Next.js `Image` components.
3. Use descriptive alt text tied to the real image content.
4. Keep phone number and business details sourced from `lib/site-data.ts` where practical.
5. Re-run `npm run typecheck`, `npm run lint`, and `npm run build` after asset replacement.
