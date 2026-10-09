# Core Web Vitals Audit

Run a real performance measurement pass over the merged site and report LCP, CLS, INP-proxy (TBT), TTFB and page weight per brand.

## What gets measured

Representative pages, one per division plus the parent:

- `/` (BrainNET parent home)
- `/services/internet`
- `/services/cloud`
- `/services/sms`
- `/services/software`
- one deep page (`/services/sms/pricing` or equivalent) to catch heavy sub-pages

## How

1. Serve the existing production build (`dist/`, Nitro server output) locally so numbers reflect SSR + minified assets, not the Vite dev server.
2. Drive headless Chromium via Playwright and collect, per page:
   - LCP, CLS, TBT (INP proxy), FCP, TTFB via PerformanceObserver
   - transferred bytes split by JS / CSS / images / fonts
   - number of requests and largest individual assets
3. Run each page twice (cold + warm) and take the cold run for reporting.
4. Additionally run a Lighthouse pass (installed on demand via `npx lighthouse`) for a scored, industry-standard number if it installs cleanly; otherwise report the raw metric table only.

## Output

A markdown report at `PERFORMANCE.md` containing:

- Per-page table: LCP / CLS / TBT / FCP / TTFB with green-amber-red thresholds
- Payload breakdown and the top offending assets (usually unoptimised hero images and framer-motion bundles)
- A prioritised fix list (no fixes applied in this pass) — e.g. image format/size, font preloading, deferring animation libs, code-splitting brand CSS

## Notes

- Measurement only; no site code changes in this pass. Fixes come as a follow-up once you pick from the prioritised list.
- Numbers are from a sandbox machine, so treat them as relative indicators; absolute field CWV will depend on your own hosting and CDN.
