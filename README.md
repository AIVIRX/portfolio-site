# Maicol Cabreja — Portfolio

Personal portfolio built with Next.js App Router, React, TypeScript, and Inter.

## Development

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The production build exports static files to `out/`. Development uses `.next-dev/`
so production builds do not interfere with the development server.

## Automatic Cloudflare deployment

Connect this GitHub repository to Cloudflare Workers Builds with these settings:

- Worker name: `portfolio-site`
- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Root directory: repository root
- Node.js version: `24`

Pushes to `main` will build and deploy through Cloudflare's Git integration.
No Cloudflare API token needs to be stored in GitHub for this workflow.

`wrangler.jsonc` serves the exported `out/` directory. The site has no server
runtime or database requirements. Unknown routes use the exported 404 page.

Local manual deployments are also supported after `npx wrangler login`:

```sh
npm run build
npm run deploy
```
