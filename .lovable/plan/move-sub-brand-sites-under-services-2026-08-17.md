# Move sub-brand sites under /services/*

## Current state

- Canonicals are generated once in `src/routes/__root.tsx` as `https://brain.net.pk` + the real path of the page. So today the cloud site canonicalises to `https://brain.net.pk/cloud`, not `/services/cloud`.
- The merged sub-brand sites live at `/cloud` (17 routes), `/sms` (10), `/internet` (13), `/software` (20).
- The parent site separately has short overview pages at `/services/cloud`, `/services/internet`, `/services/sms`, `/services/software`, `/services/telephone`.
- `public/sitemap.xml` and the homepage JSON-LD already advertise `/services/cloud`-style URLs, so the site is currently inconsistent with itself.

## Target

Every sub-brand page becomes a real `/services/<brand>/...` URL, and the canonical equals the served URL:

```text
/cloud                -> /services/cloud
/cloud/pricing        -> /services/cloud/pricing
/sms/api-docs         -> /services/sms/api-docs
/internet/...         -> /services/internet/...
/software/...         -> /services/software/...
```

The old parent overview pages at `/services/cloud`, `/services/internet`, `/services/sms`, `/services/software` are replaced by the sub-brand homepages. `/services/telephone` stays as-is (no merged site for it yet).

## Work

1. **Move the route files.** `src/routes/cloud/*` -> `src/routes/services/cloud/*` (same for sms, internet, software), plus the brand layout wrappers `cloud.tsx` -> `services/cloud.tsx`. Update every `createFileRoute("/cloud/...")` string to `/services/cloud/...`. Delete the four replaced parent overview route files and their page components.
2. **Rewrite internal links.** Roughly 350 link/button/nav references across components (`/cloud` -> `/services/cloud`, etc.), including the shared `BrandBar`, each brand's own navbar/footer, CTA buttons, breadcrumbs, and any hard-coded `href` strings. Also update brand-internal route constants and sitemap/link data files.
3. **Redirect the old URLs.** Add small splat routes at `/cloud/$`, `/sms/$`, `/internet/$`, `/software/$` (and their index paths) that permanently redirect to the matching `/services/...` URL, so anything already indexed or linked externally keeps working.
4. **SEO consistency pass.**
   - Root canonical logic needs no change; once paths move it emits `https://brain.net.pk/services/cloud` naturally. Verify no leaf route emits a second canonical (root already emits one, and duplicated `<link rel="canonical">` is invalid).
   - Align `PageMeta.tsx` so it does not add a competing canonical for the pages that use it.
   - Regenerate `public/sitemap.xml` from the new route tree (currently 92 URLs) and confirm every `<loc>` is a live 200 page.
   - Update JSON-LD `url`/breadcrumb entries that reference brand URLs.
5. **Verify.** Build, typecheck, then curl a sample of each brand's pages to confirm 200 + a single self-referencing canonical, and confirm the old paths return a 301 to the new ones.

## Notes

- This changes public URLs. Since SEO work is already done on the site, the permanent redirects in step 3 are what preserve it — they are part of the same change, not optional.
- `/services/telephone` keeps its existing parent-branded page.
