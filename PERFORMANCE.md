# Core Web Vitals Report

Measured on the **production build** (`npm run build` → `.output/`, Nitro `node-server`
preset) served locally at `http://localhost:3123`, i.e. real SSR HTML + minified,
hashed assets — not the dev server.

Two passes per page (cold + warm); cold numbers reported. Desktop viewport
1280×1800 with **4× CPU throttling** to approximate a mid-range machine.
Lighthouse was additionally run on the homepage with its default **mobile**
profile (slow 4G + 4× CPU).

---

## 1. Per-page metrics (cold, desktop, 4× CPU)

| Page | LCP | FCP | CLS | TBT (INP proxy) | TTFB | Weight | Requests |
|---|---|---|---|---|---|---|---|
| `/` | 1144 ms 🟢 | 1144 ms | **0.227 🔴** | **1569 ms 🔴** | 44 ms 🟢 | 2.5 MB | 146 |
| `/services/internet` | 1112 ms 🟢 | 784 ms | 0.024 🟢 | **877 ms 🔴** | 17 ms 🟢 | 3.6 MB | 169 |
| `/services/cloud` | 588 ms 🟢 | 588 ms | 0.001 🟢 | **728 ms 🔴** | 15 ms 🟢 | 3.9 MB | 163 |
| `/services/sms` | 580 ms 🟢 | 580 ms | 0.001 🟢 | **531 ms 🔴** | 12 ms 🟢 | 2.9 MB | 153 |
| `/services/software` | 760 ms 🟢 | 760 ms | 0.000 🟢 | **642 ms 🔴** | 22 ms 🟢 | 3.9 MB | 155 |
| `/services/sms/pricing` | 484 ms 🟢 | 484 ms | 0.003 🟢 | **620 ms 🔴** | 14 ms 🟢 | 2.0 MB | 134 |
| `/services/software/erp` | 424 ms 🟢 | 424 ms | 0.000 🟢 | **476 ms 🟠** | 6 ms 🟢 | 1.8 MB | 108 |

Thresholds: LCP 🟢 ≤2.5 s / 🔴 >4 s · CLS 🟢 ≤0.1 / 🔴 >0.25 · TBT 🟢 ≤200 ms / 🟠 ≤600 ms / 🔴 >600 ms.

**Read:** SSR is doing its job — TTFB is 6–44 ms and LCP is well inside the green
band everywhere. The two real problems are **main-thread blocking (hydration)** on
every page and a **single large layout shift on the homepage**.

## 2. Lighthouse (homepage, mobile profile)

| Metric | Value |
|---|---|
| Performance score | **46** |
| FCP | 10.0 s |
| LCP | 12.1 s |
| Speed Index | 10.0 s |
| TBT | 390 ms |
| CLS | 0.033 |

Top opportunities Lighthouse flagged:

| Opportunity | Est. saving |
|---|---|
| Enable text compression | **1,345 KiB** |
| Remove unused JavaScript | 550 KiB |
| Server response time | already fine (20 ms) |

⚠️ The mobile numbers are dominated by the missing text compression. The bare
Nitro Node server does **not** gzip/brotli responses; on your own hosting this is
normally handled by Nginx/Cloudflare in front of it. With brotli on, ~1.3 MB of the
transfer disappears and the mobile FCP/LCP drop dramatically. Treat score 46 as
"un-gzipped worst case", not the production number.

## 3. Payload breakdown (cold, KB)

| Page | JS | CSS | Images | Fonts | HTML/other |
|---|---|---|---|---|---|
| `/` | 1423 | 353 | 541 | 93 | 123 |
| `/services/internet` | 1643 | 353 | 1335 | 150 | 154 |
| `/services/cloud` | 1463 | 353 | 1949 | 115 | 108 |
| `/services/sms` | 1509 | 353 | 919 | 93 | 79 |
| `/services/software` | 1536 | 353 | 1842 | 93 | 79 |
| `/services/sms/pricing` | 1509 | 353 | 20 | 93 | 88 |
| `/services/software/erp` | 1320 | 353 | 0 | 93 | 15 |

Largest individual assets:

| Size | Type | Asset |
|---|---|---|
| 694 KB | JS | `index-*.js` (shared app/vendor bundle) |
| 645 KB | PNG | `hero-background.png` (software) |
| 333 KB | PNG | `cumulus-showcase.png` |
| 331 KB | CSS | `styles-*.css` (all four brand palettes in one file) |
| 322 KB | PNG | `chamber-of-commerce.png` |
| 268 KB | PNG | `chughtai-lab.png` |
| 214 KB | PNG | `dashboard-preview.png` |
| 181/168/167 KB | PNG/WebP | `home-hero`, `pakistan-map-network-new`, `brain-icon-blue` |

## 4. Diagnosis

1. **Homepage CLS 0.227 — webfont swap.** A single shift at ~1060 ms moves the
   hero block down ~7 px. Cause: Raleway/Lato/Space Grotesk/DM Sans load from
   Google Fonts with `display=swap` and no size-adjusted fallback, so the fallback
   metrics differ from the real face. Only the homepage is affected badly because
   its hero text is the largest above-the-fold block.
2. **TBT 476–1569 ms — hydration cost.** The 694 KB shared bundle (React 19 +
   Radix + framer-motion + the four brand component trees) is parsed and hydrated
   on every route. Long tasks: 13 on the homepage.
3. **Unoptimised raster images.** Several PNGs at 170–645 KB that should be WebP/AVIF
   at correct display dimensions. This is the bulk of the 3.9 MB on `/services/cloud`
   and `/services/software`.
4. **One CSS file for all brands (331 KB).** Every page downloads the parent, cloud,
   sms, internet and software palettes plus the full utility surface.
5. **No compression at the origin** (see Lighthouse note above).

## 5. Prioritised fix list

No code changes were made in this pass. Ranked by impact/effort:

1. **Turn on brotli/gzip at your reverse proxy** (Nginx `brotli on;` / Cloudflare
   default). Biggest single win, zero code risk. ~1.3 MB saved.
2. **Fix the homepage font shift**: self-host the four families (or drop to two),
   add `size-adjust`/`ascent-override` fallback `@font-face`, and preload the hero
   face. Should take CLS from 0.227 → <0.02.
3. **Convert the heavy PNGs to WebP/AVIF** at their rendered size (`hero-background`,
   `cumulus-showcase`, `chamber-of-commerce`, `chughtai-lab`, `dashboard-preview`,
   `brain-icon-blue`). ~1.5 MB saved across the brand landing pages.
4. **Preload the LCP image per route** via the leaf route's `head().links` and mark
   below-the-fold images `loading="lazy" decoding="async"`.
5. **Cut hydration weight**: lazy-load framer-motion-heavy sections below the fold
   and split the vendor bundle so brand-specific code is not in the shared chunk.
   Targets the 500–1500 ms TBT.
6. **Split brand CSS** so `/services/cloud` doesn't ship the sms/software/internet
   palettes (~200 KB saved per page).

Steps 1–4 are low-risk and would move the homepage into all-green territory.
Step 5 is the only one that touches component structure.

---

*Numbers come from a sandbox machine; treat them as relative indicators. Real-world
field CWV will depend on your hosting, CDN and users' devices.*
