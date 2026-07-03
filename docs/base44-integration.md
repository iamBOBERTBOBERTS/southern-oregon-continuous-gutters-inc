# Base44 Integration

## What changed

The quote workflow is prepared to store validated website quote requests in Base44.

- Local Base44 project config lives in `base44/config.jsonc`.
- The `QuoteRequest` entity schema lives in `base44/entities/quote-request.jsonc`.
- The Next.js quote API creates `QuoteRequest` records through `@base44/sdk` when `BASE44_APP_ID` is configured.
- If `BASE44_APP_ID` is missing, the API preserves the prior fallback behavior: it validates and logs the request, returns success, and marks `stored: false`.

## Base44 app

The matching connected Base44 app found during setup was:

- Name: `StormGuard Southern Oregon`
- App ID: `6a470f4891bc3549991572ff`

Set this value in local and deployment environments:

```powershell
BASE44_APP_ID=6a470f4891bc3549991572ff
```

## Entity model

`QuoteRequest` stores:

- `name`
- `phone`
- `email`
- `address_city`
- `service`
- `message`
- `submitted_at`
- `source`
- `status`

RLS allows public create access for form submissions and restricts read, update, and delete access to admin users.

## Remaining Base44 CLI steps

These steps still need to run after Base44 CLI authentication works:

```powershell
npx base44 whoami
npx base44 link --projectId 6a470f4891bc3549991572ff
npx base44 entities push
npx base44 types generate
```

During this pass, `npx base44 whoami` hung until timeout, so the project was not linked and the entity was not pushed to the remote Base44 app.

## Validation performed

```powershell
npm install
npm run typecheck
npm run lint
npm run build
```

All three validation scripts passed after running sequentially. Running typecheck in parallel with `next build` caused a generated `.next/types` race, so keep validation sequential.

Next.js still emits a non-fatal SWC lockfile patch warning after build even though `@next/swc-win32-x64-msvc` is present in `package-lock.json` and installed under `next`.

## Production notes

- Add `BASE44_APP_ID` to Vercel before expecting quote records to be stored.
- Push the `QuoteRequest` entity before testing production submissions.
- Confirm the intended admin users in Base44 before relying on the admin-only read/update/delete rules.
