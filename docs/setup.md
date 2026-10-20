# Setup Guide

## Prerequisites

- Node 24 (system). pnpm is pinned to Node 22; use `nvm use 24` for Payload CLI commands.
- pnpm
- Neon account (Postgres + Object Storage)

## Environment

Copy `.env.example` to `.env` and fill:

```env
PAYLOAD_SECRET=<random-32+-char>
DATABASE_URL=postgres://...@ep-...-pooler.neon.tech/neondb?sslmode=require
AWS_ENDPOINT_URL_S3=https://<endpoint>
AWS_ACCESS_KEY_ID=<branch-scoped-key>
AWS_SECRET_ACCESS_KEY=<branch-scoped-secret>
AWS_REGION=auto
S3_BUCKET=<bucket-name>
NEXT_PUBLIC_SITE_URL=https://your-domain
```

## Install

```sh
pnpm install
```

## Database & Storage (Neon)

1. Create a Neon project (Postgres) and a database branch for the environment.
2. Create an Object Storage bucket on the same branch (credentials are branch-scoped).
3. Add CORS rule allowing `PUT` from your site origin (required for `clientUploads`).
4. Paste pooled `DATABASE_URL` and branch-scoped S3 credentials into `.env`.

## Payload

```sh
# generate importMap after any config/collection change (Node 24 required)
nvm use 24
node --loader tsx ./node_modules/.bin/payload generate:importmap
```

Start dev:

```sh
pnpm dev
```

First run creates tables via `push: true` (dev only). Open `/admin` to create the first admin user.

## i18n

- Locales: `id` (default), `en`; prefix `always`.
- Routes live under `src/app/[locale]/`; root `/` redirects to `/id`.
- Middleware matcher excludes `api|trpc|admin|_next|_vercel|.*\..*` so Payload admin/API are not locale-rewritten.
- Translations: `messages/id.json`, `messages/en.json`.
- Typed navigation: `src/i18n/navigation.ts` (`Link`, `useRouter`, `redirect`).

## Payload Collections

- `Users`, `Media` (S3 upload), `Posts`, `Projects`, `Experiences`
- Global `Profile`
- Localized fields on Posts/Projects/Experiences/Profile; slugs/keys are stable (non-localized).

## Content Migration (from static data)

Seed from `src/data/*` (`profile.ts`, `projects.ts`, `experience.ts`, `blog.tsx`) into Payload via a one-off script or manual admin entry. MDX blog body stays single-language; only metadata is localized.

## Read Layer (not yet wired)

Implement `src/payload/getPayload.ts` exporting `getPayloadClient()`, then switch `[locale]` pages, blog routes, and `src/lib/jsonld.ts` to read from Payload. Pass `locale` into jsonld helpers.

## Build & Verify

```sh
pnpm build
pnpm lint
```

## Notes

- `pnpm payload generate:importmap` fails on Node 22 due to top-level await; use Node 24 + tsx loader.
- Vercel server upload limit is 4.5 MB; `clientUploads: true` in `s3Storage` bypasses it via browser-direct PUT.
- Neon Object Storage requires path-style S3 (`forcePathStyle: true`); virtual-hosted style is not supported.
- Do not commit `.env`. Keep branch-scoped credentials out of the repo.