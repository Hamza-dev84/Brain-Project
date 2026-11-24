# Make the site fully self-hostable (no Lovable dependencies, SEO intact)

Goal: you can take the repo to your own server, run `npm install && npm run build && node .output/server/index.mjs`, and get exactly what you see today — with SEO switched on instead of blocked.

## What would break today if you exported as-is

Verified in the current project:

1. **57 images are not in the repo.** Files like `src/assets/internet/site/hero-fiber-strands.webp.asset.json` are pointers to Lovable's CDN (`/__l5e/assets-v1/...`). Off Lovable, those URLs do not exist, so those images 404 — hero images on Internet, Cloud, and other pages.
2. **The build config is a Lovable package.** `vite.config.ts` uses `@lovable.dev/vite-tanstack-config`, which hides the real plugin setup and defaults the server build to a Cloudflare Worker target — not a Node server.
3. **The whole site is blocked from search engines right now.** `public/robots.txt` is `Disallow: /`, and the root route sends `noindex, nofollow, noarchive, nosnippet, noimageindex`. This is correct for a preview, fatal on production. It must be flipped as part of the export.
4. **No sitemap.xml exists**, and there's no robots reference to one.
5. **Lovable runtime hook** in `src/lib/lovable-error-reporting.ts` (used by the root error boundary) talks to a `window.__lovableEvents` API that won't exist on your host. Harmless but dead code.

## The work

### 1. Bring every image into the repo
Download all 57 CDN assets to their real paths next to the pointer files, rewrite each import (`...webp.asset.json` -> `...webp`), delete the `.asset.json` files, then grep the whole repo to confirm zero `__l5e` / `.asset.json` references remain.

### 2. Replace the Lovable build config with a plain one
Rewrite `vite.config.ts` with the plugins spelled out: TanStack Start, React, Tailwind v4, tsconfig paths, and Nitro targeting a **Node server** preset. Remove `@lovable.dev/vite-tanstack-config` from `package.json`. Keep `src/server.ts` as the SSR entry (it's ours, not Lovable's).

### 3. Turn SEO on
- `public/robots.txt`: allow crawling, add `Sitemap: https://brain.net.pk/sitemap.xml`.
- `src/routes/__root.tsx`: remove the `robots` and `googlebot` noindex meta.
- Keep `noindex` on the software 404 catch-all (correct).
- Add `sitemap.xml` covering every real route across the parent site plus `/internet`, `/cloud`, `/sms`, `/software`. No invented `lastmod` values — entries ship without one rather than with a fake build-time date.
- Audit canonical tags: some pages set them through the Helmet shim, others don't. Add a canonical to each route's `head()` so every URL has exactly one, pointing at `https://brain.net.pk`.

### 4. Remove Lovable-specific runtime code
Delete `src/lib/lovable-error-reporting.ts` and its call in the root error boundary; strip the Lovable block from `AGENTS.md`. No behaviour change for visitors.

### 5. Hand-off docs
A `DEPLOYMENT.md` with: Node version, install/build/run commands, the `PORT`/host env vars, a sample nginx reverse-proxy block with correct cache headers for `/_build/` and `/assets/`, and a systemd/pm2 example so the process restarts.

### 6. Verification before hand-off
- Production build, then run the Node output locally and curl a sample of routes from each brand for 200s.
- Check served HTML contains the rendered content (SSR working), the right `<title>`, canonical, and no `noindex`.
- Confirm no request in the page HTML points at a `lovable.app` or `__l5e` URL.

## Notes

- This site is server-rendered. Self-hosting it means running a Node process behind nginx — not dropping files into a static folder. If your server can only serve static files, say so and I'll switch the plan to a full prerender/SSG build instead (all routes are static content today, so that is feasible; it only loses the ability to add server functions later).
- Your domain/SEO metadata already targets `brain.net.pk`, so no content rewrites are needed there.
