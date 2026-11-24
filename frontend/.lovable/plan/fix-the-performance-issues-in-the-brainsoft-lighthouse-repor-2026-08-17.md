# Fix the performance issues in the BrainSOFT Lighthouse report

The report is a **mobile** Lighthouse run against `/services/software` on the preview URL. Score 49. Verified findings from the report data plus a check of the codebase.

## First: three items in the report are not real problems

- **"Page is blocked from indexing"** (the whole reason SEO scores 69) — that is the `Disallow: /` you asked for on the preview. It disappears on the live site.
- **`cdn.gpteng.co/lovable.js`** (76 KB, 94% unused) — preview-only editor script. Not in your exported build.
- **"Missing source maps"** — a diagnostic, not a user-facing cost.

Everything below is real and mostly site-wide, not software-only.

## The real problems (measured)

| Problem | Evidence in report |
|---|---|
| 136 separate JavaScript requests on one page load | 615 KB of script across 136 files; 105 of them under 3 KB |
| Main-thread work 8.2 s, script execution 2.2 s | TBT 840 ms, Max FID 780 ms, TTI 5.5 s |
| Style & Layout alone costs 2.3 s + 384 ms forced reflow | main-thread breakdown |
| Main bundle 207 KB, 52% unused on this page | `unused-javascript` |
| One 44 KB (≈331 KB raw) stylesheet blocks render | `render-blocking-insight`, 450 ms |
| 137 images across 43 files still hotlinked from `api.builder.io` | code check; one of them is the header logo, fetched with high priority |
| 96 KB of fonts on first paint (Raleway file alone 48 KB) | 3 font requests |
| Two icon-only buttons have no accessible name; `h5` used out of order | accessibility 93 |

CLS is already 0 and server response is 190 ms — the font/image work from the last pass held up. What is left is **JavaScript and CSS execution**, not payload weight.

## Root cause of the 136 requests

`RoutePrefetcher` warms every link in the header, nav and footer on idle, up to 60 routes. On a page with full mega-nav that means the browser downloads and compiles ~100 route chunks while the page is still trying to become interactive. That is what turns a fast SSR page into an 840 ms blocking, 8.2 s main-thread page.

## The work

### Phase 1 — Make prefetching cheap again (biggest win, low risk)
- Keep instant navigation, but stop bulk-warming on load: prefetch on hover/pointerdown and on viewport approach only, drop the "warm all nav links on idle" sweep, and lower the cap.
- Gate prefetching on `navigator.connection` (skip on save-data / 2G) and delay it until after the page is interactive.
- Expected: script requests drop from ~136 to ~10–15 on first load; TBT and TTI fall sharply on **every page**.

### Phase 2 — Cut the shared bundle (207 KB, half unused)
- Split brand-specific code out of the entry chunk so `/services/software` does not ship internet/sms/cloud component trees.
- Lazy-load heavy interactive widgets that are not on first screen (planner dialogs, carousels, campaign planner).

### Phase 3 — Kill the 2.3 s Style & Layout cost
- The single 331 KB stylesheet carries all five brand palettes and a large `:where(.brand-*)` element-selector surface, which is expensive to match on every element.
- Split per-brand CSS so a page loads the parent scope plus its own brand only, and replace the broad descendant `:where(...)` typography rules with class-based ones on the components that need them.
- Inline the critical above-the-fold CSS so the stylesheet stops blocking render (450 ms).

### Phase 4 — Bring the last external images in-house
- 137 `api.builder.io` URLs across 43 files (software + internet brands) are still hotlinked. Download, convert to WebP at display size, import locally, and update every reference — same treatment the other images got. This removes a third-party dependency that also affects self-hosting and SEO.

### Phase 5 — Accessibility fixes from the same report
- Give the two icon-only carousel buttons `aria-label`s.
- Fix the two out-of-order `h5` headings on the software page.

### Phase 6 — Server config note (no code)
- "Efficient cache lifetimes" (74 KB) is an nginx `expires` / `Cache-Control` header rule for `/assets/*`. Documented in `DEPLOYMENT.md`, nothing to change in the app.

## Verification
- Re-run Lighthouse mobile on `/services/software` after Phase 1 and again after Phase 3.
- Re-run the Playwright CWV script on the production Node build across all seven sampled pages and update `PERFORMANCE.md`.
- Confirm zero `builder.io` URLs remain in the rendered HTML.

## Expected outcome

| Metric | Now | Target |
|---|---|---|
| Mobile performance score | 49 | 80+ |
| TBT | 840 ms | <250 ms |
| Script requests on load | 136 | ~12 |
| FCP / LCP (mobile) | 4.2 s / 5.3 s | <2.0 s / <2.5 s |

Phases 1 and 2 give most of the gain. Phase 3 is the one that touches CSS structure and needs a careful visual check per brand.
