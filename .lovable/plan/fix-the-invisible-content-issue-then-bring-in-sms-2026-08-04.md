# Fix the invisible-content issue, then bring in /sms

## Why the preview looks broken

The home page is fully rendered and error-free — every element is in the DOM, no failed requests, no console errors. The problem is that the parent site's entry animations leave content at `opacity: 0` until JavaScript runs an animation.

Confirmed by inspection of the live preview:

- The page-transition wrapper around every parent page starts at `opacity: 0` and animates in on mount.
- The hero heading is split into per-word spans that also start at `opacity: 0`.
- 64 elements are currently sitting at `opacity: 0` in your preview tab, including the hero H1 and hero badges.
- In a clean browser load the same page resolves to `opacity: 1` correctly.

So whenever the animation frame loop doesn't run to completion in the preview iframe (background tab, throttled iframe, slow first paint), the page stays blank-looking even though everything loaded. Server-rendered content must not depend on JS to become visible.

### Fix

1. `PageTransition` — remove the opacity/scale fade-in gate; content renders visible immediately (keep a subtle transition that can't hide content, or drop it).
2. `TextReveal` — render text visible by default; the word-stagger effect becomes an enhancement layered on visible text rather than a gate.
3. Sweep the parent pages for `initial={{ opacity: 0 }}` + `whileInView` blocks that wrap primary content and make them fail-visible (animate from visible, or use CSS-based reveal that degrades to visible).
4. Re-verify in the preview that no above-the-fold element remains at `opacity: 0`.

Separately noted while inspecting: the root route currently carries BrainCLOUD's title/description ("BrainTEL — Reliable IT Services in Pakistan"), which leaks onto parent pages that have no `head()` of their own. The parent home route gets its own Brain-Net metadata as part of this fix.

## Stage 3 — SMS Service Provider under /sms

Source project has 11 routes plus its own component set and styling.

Routes to port (each becomes `src/routes/sms/...`):

```text
/sms                          index
/sms/features
/sms/pricing
/sms/contact
/sms/sms-api-pakistan
/sms/sms-marketing-pakistan
/sms/branded-sms-pakistan
/sms/otp-service-pakistan
/sms/otp-sms-service-pakistan
/sms/privacy-policy
/sms/terms-of-service
```

Work items, same pattern as `/cloud`:

- `src/routes/sms.tsx` layout route rendering the Brain-Net group bar plus `<Outlet />`.
- Components copied to `src/components/sms/` (hero, pricing, features, otp, sms-api, sms-marketing, branded-sms, campaign-planner, animations, common), reusing the shared shadcn `ui/` set.
- Assets copied to `src/assets/sms/`, with any CDN-hosted images from the source re-uploaded into this project so nothing 404s.
- Brand styling isolated in `src/styles/sms.css` scoped under a `.brand-sms` class applied by the layout, imported after Tailwind in `src/styles.css`.
- Internal links rewritten to `/sms/...`; per-route `head()` with title, description, og tags and `/sms/...` canonicals.
- The parent's existing `/services/sms` overview page links into the section.
- Any data files under the source `src/data/` come across into `src/data/sms/`.

Verification for the stage: typecheck clean, every `/sms/...` route returns 200, no failing image requests, and no element stuck invisible.
