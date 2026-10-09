# Merge Internet & Voice Services under /internet

Stage 4 of the merge: bring `internet-services-seo-ready-786` (BrainNET ISP) into this app
under `/internet`, keeping its own look, with zero color bleed into `/`, `/cloud`, `/sms`.

## What's coming in

13 pages, converted from React Router to TanStack file routes:

```text
/internet                             Index
/internet/home-internet               /internet/business-internet
/internet/voice-plans                 /internet/voip-providers-pakistan
/internet/sip-trunk-providers-pakistan
/internet/ivr-services-pakistan       /internet/ip-pbx-pakistan
/internet/virtual-pbx-pakistan        /internet/pbx-price-in-pakistan
/internet/hdtv-bundles                /internet/coverage-area
/internet/contact-us
```

Plus ~35 top-level components and the `animations/`, `coverage/`, `home/`, `telephony/`,
`voip/` subfolders, and 54 assets.

## Color-bleed prevention (the main ask)

The source ships an unscoped `:root` palette and unscoped `h1..h6` typography rules — exactly
the pattern that caused the earlier bleed. It is handled by following the contract already
written in `src/styles/README.md`:

1. Everything lands in one new `src/styles/internet.css`, scoped under `.brand-internet`.
   Nothing is added to `:root` or to any unscoped selector in `src/styles.css`.
2. Tokens stay **bare HSL channels** (the source already uses this format — `242 63% 29%`
   etc.), so shadcn components re-skin correctly rather than falling back.
3. A heading reset inside `.brand-internet` (`background: none;
   -webkit-text-fill-color: currentColor`) blocks the parent Brain-Net gradient from
   painting BrainNET headings — and because the parent gradient is already scoped to
   `.brand-parent`, `/internet` cannot inherit it either.
4. The scope class is applied once, on the outermost wrapper in the new
   `src/routes/internet.tsx` layout route, alongside the shared `BrandBar` (`active="internet"`,
   already wired in `BrandBar.tsx`).
5. Source-specific tokens (`--bn-bg-deep`, `--bn-violet`, `--bn-red`, …) and its
   Tailwind-config extras (fonts, keyframes, gradients, shadows) move into
   `@theme` / `.brand-internet` here, since this project is Tailwind v4 with no JS config.

## Other error classes and how each is avoided

- **Router**: `react-router-dom` is not used here. Pages get converted to TanStack routes;
  the existing `src/lib/router-compat.tsx` shim (used for `/sms`) covers `Link`/`useNavigate`/
  `useLocation` inside ported components so page bodies need minimal edits.
- **SEO**: `react-helmet-async` / the source `SEO.tsx` component is dropped. Each route gets
  its own `head()` with unique title, description, og:title/og:description, og:type,
  twitter:card, and a self-referencing canonical — no metadata leaking between brands.
- **Internal links**: every `to="/..."` and `href="/..."` inside ported files is prefixed with
  `/internet`, and each target route is created before it is linked.
- **Name collisions**: components go to `src/components/internet/`, assets to
  `src/assets/internet/`, public files to `public/internet/`. The source `public/og-*.jpg`,
  `favicon`, `robots.txt` and `sitemap.xml` do NOT overwrite the parent's.
- **Route collisions**: the source's `/contact-us` and `/` become `/internet/contact-us` and
  `/internet/` — the parent's own `/` and `/contact-us` are untouched.
- **CDN-externalized images**: 22 assets exist only as `.asset.json` pointers. They get
  downloaded and re-hosted into this project, same as was done for BrainCLOUD, so nothing
  depends on the old preview domain.
- **Invisible content**: the source uses Framer Motion `initial={{ opacity: 0 }}`. Those get
  the same fail-visible treatment already applied to the parent and `/sms`.
- **Toasts**: the source imports `@/components/ui/toaster`, which does not exist here — those
  imports are removed and the app's existing sonner setup is used.
- **Parent hand-off**: `src/pages/services/InternetServices.tsx` (currently a placeholder) and
  `/services/telephone` get linked into the new section.

## Verification before I call it done

- `tsgo` typecheck: 0 errors.
- All 13 `/internet` routes return HTTP 200 locally, plus a re-check of `/`, `/cloud`, `/sms`.
- Playwright computed-style check across `/`, `/cloud`, `/sms`, `/internet`: headings, buttons
  and links each resolve to their own brand palette (Brain-Net navy/blue, BrainCLOUD
  navy/green, BSMS cyan/teal, BrainNET indigo/red) with no cross-contamination.
- `src/styles/README.md` updated to mark `/internet` as shipped.

## Technical notes

- New files: `src/routes/internet.tsx` (layout) + 13 route files under `src/routes/internet/`,
  `src/styles/internet.css`, `src/components/internet/**`, `src/assets/internet/**`.
- Existing files touched: `src/styles.css` (one `@import` line), `src/styles/README.md`.
  No changes to parent, cloud or SMS components, so those sections cannot regress.
- Bundle impact: routes are code-split per page, so `/internet` adds nothing to what a visitor
  on `/` or `/sms` downloads. The extra CSS is one token block (~1 KB gzipped). Fonts are
  shared Raleway/Lato — no new font load.
- Redirect list: every changed URL (e.g. `/voice-plans` → `/internet/voice-plans`) is recorded
  for when the old domain is pointed here. The combined `sitemap.xml` still lands after
  stage 5 (`/software`).
