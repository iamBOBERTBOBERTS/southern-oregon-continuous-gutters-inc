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

## Base44 CLI status

The installed Base44 CLI can target this app directly with the global `--app-id` flag. The documented `link --projectId` option was not available in the installed CLI and returned no linkable projects for the authenticated account.

Successful authentication and entity push commands:

```powershell
npx base44 whoami
npx base44 --app-id 6a470f4891bc3549991572ff entities push
```

The entity push created `QuoteRequest` in Base44. The CLI also warned `Deleted: User`, which means the remote entity set was synchronized to match the local `base44/entities` folder.

The local project is still not linked with `base44/.app.jsonc`; that file is intentionally ignored if it is created later.

## Remaining Base44 blocker

After the entity push, the local quote API still receives this Base44 SDK error when `BASE44_APP_ID` is configured:

```text
403: This app is not yet available. Please check back later.
```

Until the Base44 app is made available/published for SDK access, quote submissions with `BASE44_APP_ID` set will return `502` from `/api/quote`. Without `BASE44_APP_ID`, the route still validates and logs submissions with `stored: false`.

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
- Confirm the Base44 app is available for SDK access before testing production submissions.
- Confirm the intended admin users in Base44 before relying on the admin-only read/update/delete rules.
