# Fix remaining Core Web Vitals issues (nginx won't solve these)

Goal: fix the performance problems from `PERFORMANCE.md` that your own nginx server cannot fix automatically, so the site is green on mobile and desktop before go-live.

## Scope: this is a site-wide pass, not a per-page fix

You will not have to fix remaining pages one by one afterwards.

- **Phase 1 (fonts)** changes one global stylesheet and the root route. It fixes font-driven layout shift on **every page at once**, including all four brand sections.
- **Phase 2 (images)** is a sweep over **every image asset in the repo**, not just the ones named in the report. The report listed the worst offenders; the work applies the same conversion rule to all of them.
- **Phase 3 (LCP preload + lazy-load)** is a pass over **all 92 routes**, not the 7 measured pages. Every route gets its hero preloaded and its below-the-fold images lazy-loaded.
- **Phase 4 (JavaScript)** changes the shared bundle, which every page loads — so the improvement applies everywhere.

The 7 pages in `PERFORMANCE.md` were sampling points for measurement. The fixes are structural and apply across the whole site.


## What nginx already solves on your hosting

- **Text compression / Lighthouse mobile score 46.** Nginx gzip/brotli will shrink JS/CSS/HTML transfer by ~1.3 MB. This is the biggest single win and needs no code changes.

## What nginx does NOT solve (this plan)

1. **Homepage layout shift (CLS 0.227)** — caused by Google Fonts swapping in after the page renders.
2. **Heavy PNG images** — 645 KB `hero-background.png`, 333 KB `cumulus-showcase.png`, 322 KB `chamber-of-commerce.png`, 268 KB `chughtai-lab.png`, 214 KB `dashboard-preview.png`, and several ~170 KB PNGs on the homepage/internet pages.
3. **No LCP image preloading** — the largest above-the-fold image on each route is discovered late by the browser.
4. **High Total Blocking Time (TBT 476–1569 ms)** — the 694 KB shared JavaScript bundle hydrates every route, including brand-specific code the current page does not need.

## The work

### Phase 1 — Fix the homepage font shift (CLS)

- Replace the external Google Fonts `<link>` in `src/routes/__root.tsx` with self-hosted font files for the families actually used (Raleway, Lato, Space Grotesk, DM Sans).
- Add a `font-display: swap` `@font-face` block **with** `size-adjust` / `ascent-override` / `descent-override` fallback metrics so the fallback system font occupies the same space as the real font while it loads.
- Preload the two hero-critical weights (Raleway 700/800 and Lato 400) via `<link rel="preload" as="font" type="font/woff2" crossorigin>` in the homepage `head()`.
- Keep the other brand scopes (`.brand-cloud`, `.brand-sms`, etc.) working — only the parent/global font path changes.

Expected result: homepage CLS drops from **0.227 → <0.05**.

### Phase 2 — Convert heavy PNGs to WebP/AVIF (all images, every brand)

- Add `vite-imagetools` as a dev dependency and register it in `vite.config.ts`.
- Inventory **every raster image in `src/assets/`** and convert each one above a size threshold to WebP (plus AVIF where worthwhile), at its rendered display size — not only the assets named in the report.
- Update the component imports across all brands (parent, internet, cloud, sms, software) to use the transformed URLs, with a `<picture>`/`srcset` fallback for older browsers.
- Preserve alt text and all SEO attributes.

Expected result: **~1.2–1.5 MB saved** on the heaviest pages, with smaller savings everywhere else.


### Phase 3 — Preload the LCP image on every route

- Walk **all routes in `src/routes/`** (~92 URLs), not just the measured ones, and identify the largest above-the-fold image on each.
- Add a per-route `head().links` preload entry for that image with `fetchpriority="high"`.
- Mark every below-the-fold image site-wide with `loading="lazy" decoding="async"`.

Expected result: faster LCP on every page, especially mobile.


### Phase 4 — Reduce hydration blocking time (TBT)

This is the only phase that touches component structure. It is lower priority than Phases 1–3 because the win/effort ratio is smaller.

- Lazy-load below-the-fold `framer-motion` sections using `React.lazy` + a small visible placeholder, so the initial hydration does not parse/execute animation code that is not yet on screen.
- Audit the shared vendor bundle for brand-specific code that is loaded on every route (e.g. cloud-only components being included in the entry chunk) and move them behind route-level dynamic imports where feasible.
- Keep all content visible if JavaScript is disabled or fails — no blank sections.

Expected result: TBT reduced by **20–40%** on the homepage and brand landing pages.

## Expected outcomes after all phases

| Metric | Current worst | Target |
|---|---|---|
| Homepage CLS | 0.227 🔴 | <0.05 🟢 |
| Mobile Lighthouse | 46 | 75+ |
| TBT (homepage) | 1569 ms 🔴 | <800 ms 🟠/<400 ms 🟢 |
| Image weight (cloud/software) | ~2 MB | ~0.6 MB |

## Verification

- Re-run the same Playwright measurement script used for `PERFORMANCE.md` on the production Node build after each phase.
- Re-run Lighthouse mobile on the homepage after Phase 1 and Phase 2.
- Confirm no `lovable.app`, `__l5e`, or external CDN image URLs remain in the rendered HTML.

## Notes

- No SEO metadata, URL structure, or page content will change.
- Self-hosting fonts removes a third-party request, which is also a privacy/availability win.
- If any converted image looks worse than the PNG, we keep the PNG for that asset and try a higher-quality WebP setting rather than forcing a format change.
- Phase 4 may be skipped if Phases 1–3 already bring all metrics into the green band on your target devices.
