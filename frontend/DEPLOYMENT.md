# Deploying brain.net.pk on your own server

This app is a **TanStack Start v1** (React 19 + Vite 8) site with server-side
rendering. It builds to a self-contained Node server — no platform-specific
services, no external CDN, no vendor runtime.

## Requirements

- Node.js 20+ (22 LTS recommended). `bun` optional (used locally for installs).
- ~1 GB RAM for the build, ~256 MB to run.

## Build & run

```bash
npm install            # or: bun install
npm run build          # regenerates public/sitemap.xml, then builds .output/
npm start              # node .output/server/index.mjs  (defaults to port 3000)
```

Environment variables:

| Variable | Purpose | Default |
| --- | --- | --- |
| `PORT` | Port the SSR server listens on | `3000` |
| `SITE_URL` | Base URL used when generating `public/sitemap.xml` | `https://brain.net.pk` |
| `NITRO_PRESET` | Build target (`node-server`, `bun`, `vercel`, `cloudflare-module`, …) | `node-server` |

Everything under `.output/` is the deployable artifact. `.output/public/`
contains the hashed static assets; the Node server serves them itself, or you
can front them with Nginx.

## PM2

```bash
pm2 start .output/server/index.mjs --name brainnet --env PORT=3000
pm2 save && pm2 startup
```

## Nginx reverse proxy

```nginx
server {
  listen 80;
  server_name brain.net.pk www.brain.net.pk;
  return 301 https://brain.net.pk$request_uri;   # canonical host
}

server {
  listen 443 ssl http2;
  server_name brain.net.pk;

  ssl_certificate     /etc/letsencrypt/live/brain.net.pk/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/brain.net.pk/privkey.pem;

  gzip on;
  gzip_types text/css application/javascript application/json image/svg+xml;

  # Long-cache immutable build assets
  location /_build/ {
    proxy_pass http://127.0.0.1:3000;
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

Serve only one hostname canonically (redirect `www` → apex, as above) so the
canonical tags emitted by the app match the served URL.

## SEO notes (already configured)

- `public/robots.txt` allows all crawlers and points at
  `https://brain.net.pk/sitemap.xml`.
- `public/sitemap.xml` is regenerated from the route tree on every build
  (`scripts/generate-sitemap.mjs`, 92 URLs). No `lastmod` is emitted because
  there is no per-page authoritative timestamp — that is intentional and
  correct; a build-time date would be misleading to crawlers.
- The root route emits `robots: index, follow, max-image-preview:large`, an
  absolute `<link rel="canonical">` and `og:url` derived from the current
  path, plus organization / website / service / FAQ / breadcrumb JSON-LD.
- Every page's `<title>`, description and Open Graph tags are rendered
  server-side in the HTML response — verify with
  `curl -s https://brain.net.pk/sms/pricing | grep -o '<title>[^<]*'`.
- All images are real files inside `src/assets/` and are hashed and served by
  your own server. Nothing is fetched from a third-party CDN.

If you move the site to a different domain, change `SITE_URL` (sitemap) and the
`SITE_URL` constant in `src/routes/__root.tsx` (canonical/og:url), plus the
absolute URLs inside the JSON-LD blocks in that same file.

## What was removed for self-hosting

- The Lovable Vite config wrapper — `vite.config.ts` now uses plain
  `@tanstack/react-start`, `@vitejs/plugin-react`, `@tailwindcss/vite`,
  `vite-tsconfig-paths` and `nitro` plugins. (It keeps one small branch that
  only runs inside the Lovable editor sandbox so previews keep working there;
  on your server the Node build is what runs — delete that branch if you like.)
- The editor runtime error-reporting hook (`src/lib/lovable-error-reporting.ts`).
- 57 CDN image pointer files — the binaries now live in `src/assets/`.
- The site-wide `noindex, nofollow` meta tags and the `Disallow: /` robots rule.
