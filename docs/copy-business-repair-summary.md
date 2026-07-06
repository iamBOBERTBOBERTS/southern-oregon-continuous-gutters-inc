# Copy And Business Repair Summary

Date: 2026-07-05

Branch: `website-copy-business-audit`

Source documents:

- `docs/research/southern-oregon-continuous-gutters-company-local-market-brief.pdf`
- `docs/visual-content-integrity-audit.md`

## What Changed

- Changed the public website phone strategy to use `541-770-5785` as the primary public company line.
- Kept `541-821-4258` documented as an alternate/direct/cell candidate that requires Paul approval before public use.
- Limited public services to safe, supported categories: seamless gutter installation, continuous gutter replacement, gutter repair, gutter maintenance, downspouts, and roofline water control.
- Removed unconfirmed gutter protection, commercial work, and broad exterior water-management positioning from public UI and metadata.
- Reworked homepage copy so it reads like a contractor website for homeowners rather than an internal cinematic prototype.
- Reframed the public visual-frame section around what an estimate reviews instead of public photo placeholders.
- Removed schema `priceRange` and added conservative CCB/founding/location data without publishing a street address.
- Updated quote form wording, error messages, and CTA text while preserving the existing `/api/quote` and Base44 payload shape.

## What Was Not Changed

- No backend/API/Base44 behavior was changed.
- No phone numbers other than the public website primary/CTA configuration were invented.
- No street address was published.
- No reviews, warranties, guarantees, awards, financing, emergency-service claims, insurance claims, or commercial offerings were added.
- No 3D prototype work was integrated into the homepage.
- No dependencies were added.

## Confirmation Still Needed

- Confirm `541-770-5785` as the final primary website phone.
- Confirm whether `541-821-4258` should appear publicly.
- Confirm exact service area and city list.
- Confirm whether CCB #64538 should remain prominent.
- Confirm whether Paul Chitwood should be shown publicly.
- Confirm whether `pchit35@yahoo.com` should be shown publicly.
- Confirm whether the street address should remain unpublished.
- Confirm final services list.
- Confirm gutter protection, commercial work, warranties, insurance/bond proof, reviews, and any guarantees only if substantiated.
- Provide approved real project photos before final photo polish.

## Validation Required

Run:

```powershell
npm run typecheck
npm run lint
npm run build
```

Then deploy a Vercel preview only and verify the public page from the live URL.
