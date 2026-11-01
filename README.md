# arclocal-home

Standalone Next.js application serving the ArcLocal public home page
(marketing landing page) at `/`.

The ArcLocal application itself (login, registration, invitation acceptance,
and the authenticated workspace) lives in a separate repository under
`app/web` and is served by the ArcLocal Encore application. This project holds
only the public marketing surface.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Yarn classic (1.22)

## Local development

```bash
yarn install
yarn dev
```

The development server runs on `http://localhost:3000`.

## Build

```bash
yarn build
```

Produces a standalone output (see `output: "standalone"` in `next.config.ts`)
deployed via the `Dockerfile`.

## Routing

The home page is served at `/` and links to the application's `/login` and
`/register` routes. In production both apps share one hostname
(`arclocal.soliibridge.com`) split by path at the reverse proxy / Cloudflare
Tunnel:

- `/` and `/_next/*`                                          → this app (port 3000)
- `/login`, `/register`, `/invite`, `/app/*`, `/assets/*`     → the ArcLocal app
