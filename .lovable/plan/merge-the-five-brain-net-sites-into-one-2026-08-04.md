# Merge the five Brain-Net sites into one

Build a single site in this project where **Brain-Net** is the parent company website and the four sub-brands live under path prefixes, each keeping its own visual identity.

## URL structure

```text
/                         Brain-Net parent (home, company, industry-solutions,
                          resources, careers, contact, legal)
/software/...             Software Services  (14 pages)
/internet/...             Internet & Voice Services (13 pages)
/cloud/...                BrainCLOUD (17 pages)
/sms/...                  SMS Service Provider (11 pages)
```

The parent's existing `/services/software`, `/services/internet`, `/services/cloud`, `/services/sms`, `/services/telephone` overview pages stay and become the entry points that link into each sub-brand section.

## Design approach

Each sub-brand section keeps its own look — its own header, footer, colors, typography and hero styling, exactly as it is in its source project. What ties everything together:

- A slim parent "Brain-Net group" bar at the top of every sub-brand page linking back to the parent site and across to sibling brands.
- Parent pages keep the Brain-Net design system unchanged.

Technically this means one shared shell per section: `/software`, `/internet`, `/cloud`, `/sms` each get their own layout route carrying that brand's chrome and CSS scope, so styles cannot bleed between brands.

## Staged delivery

Each stage is reviewable on its own before the next starts.

1. **Parent foundation** — port Brain-Net into this project: design system, layout/header/footer, all `_layout` pages (home, company/*, industry-solutions/*, resources/*, careers, referral, contact, legal), assets, and the cross-brand nav bar component.
2. **/cloud** — BrainCLOUD's 17 routes plus its own layout and styling.
3. **/sms** — SMS provider's 11 routes; the parent already has an `sms.tsx` route that gets folded in.
4. **/internet** — the 13 internet/voice pages. This project is an older single-page-app style codebase, so its pages get converted to file-based routes; content and styling stay the same.
5. **/software** — the 14 software-service routes, including the case-studies and digital-marketing sub-sections.

## Technical notes

- Target stack is this project's TanStack Start setup. Route files go under `src/routes/`, with `software.tsx`, `internet.tsx`, `cloud.tsx`, `sms.tsx` as layout routes rendering `<Outlet />`, and one file per page beneath them.
- Per-brand components/assets are namespaced: `src/components/<brand>/`, `src/assets/<brand>/`, so nothing collides.
- Brand palettes become scoped CSS variable blocks (e.g. `.brand-cloud { --primary: ... }`) applied on each section layout, instead of five competing `:root` themes.
- `react-helmet-async` from the source projects is not used here; all SEO metadata moves into each route's `head()` with per-page title, description, canonical and og tags. Internal links become `<Link to=...>`.
- Any page whose URL changes (e.g. `/vps-hosting-pakistan` -> `/cloud/vps-hosting-pakistan`) is recorded so redirects can be added when the old domains are pointed here.
- A combined `sitemap.xml` covering all sections and an updated `robots.txt` land at the end of stage 5.
- No backend is required; contact forms are ported as-is. If any source project posts form data somewhere, that is flagged during its stage.
