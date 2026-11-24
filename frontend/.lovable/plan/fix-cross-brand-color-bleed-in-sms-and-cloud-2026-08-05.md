# Fix cross-brand color bleed in /sms and /cloud

## What's actually happening

Yes — confirmed, and it's not your imagination. Two concrete causes:

**1. A global heading rule paints every heading in Brain-Net's colors.**
`src/styles.css` has a base rule on `h1..h6` that sets a hardcoded navy-to-blue gradient
(`#17164f → #435dff`) as the text fill for the entire app. It is not scoped to the parent
site, so BSMS and BrainCLOUD headings are painted with Brain-Net's brand gradient. Verified
live on the SMS page you're viewing: the `<h1>` computes to that exact gradient with
transparent text fill, so any `text-primary` / cyan class on a heading is ignored.

**2. BrainCLOUD's theme tokens are in the wrong format.**
`src/styles/cloud.css` sets `--primary: #17164f`, `--background: #ffffff`, `--border`, `--ring`
as hex, but the global `@theme inline` maps them as `hsl(var(--primary))`. `hsl(#17164f)` is
invalid CSS, so shadcn components inside `/cloud` (buttons, accordion, inputs, dialogs) fall
back to inherited or default colors instead of navy/green. `.brand-sms` already uses the
correct bare-HSL channel format, which is why SMS is mostly right apart from headings.

## Answer to the optimization / scalability question

No — and done this way it sets up the remaining two merges cleanly.

CSS custom properties are resolved by the browser at paint time. Five brand palettes
cost roughly 2-4 KB gzipped of extra CSS in total and zero runtime work. Scoping the
heading gradient actually *removes* a full-page gradient-clip paint from the sub-brand
sections, so it is marginally faster, not slower.

What does affect Core Web Vitals as `/software` and `/internet` come in, and how this
plan keeps it safe:

- **CSS shipped per page.** Tailwind emits one stylesheet for the whole app, so every
  visitor downloads all five brands' utilities. The fix is to keep brand palettes as
  token blocks (a few dozen lines each), not per-brand duplicated component CSS. The
  scoping work below establishes exactly that pattern, so brands 4 and 5 add tokens,
  not weight.
- **JS per route.** TanStack Router code-splits per route file, so a visitor on `/sms`
  never downloads `/software`'s components. Merging more brands does not grow the
  initial bundle as long as each brand's components stay inside its own route subtree
  and nothing imports across brands.
- **Images (the real LCP risk).** Each brand ships its own heroes. The rule going
  forward: WebP/AVIF, explicit width/height to prevent CLS, `loading="lazy"` below the
  fold, and a `preload` on each route's LCP hero.
- **Crawling.** More pages is fine; what hurts is duplicate/conflicting signals. Every
  route already needs a self-referencing canonical, unique title/description, and a
  single combined `sitemap.xml` listing all five sections. That is already scheduled for
  the end of the merge and stays valid.
- **Fonts.** All five brands use Raleway/Lato, so one font load serves everything. If a
  new brand introduces a different family, load it `display=swap` and subset it.

So: yes, this is scalable — the risk is not color count, it is duplicated components,
unoptimized images, and inconsistent canonicals.


## Changes

1. **Scope the heading gradient to the parent site only** — in `src/styles.css`, change the
   `h1..h6` gradient rule (and its `.dark` twin) so it applies only outside the sub-brand
   scopes. Sub-brand headings then use their own scoped rules, which already exist:
   `.brand-cloud h*` (navy, Raleway) and `.brand-sms h*` (Raleway + inherited cyan tokens).
2. **Add explicit heading resets** inside `.brand-sms` and `.brand-cloud` (`background: none;
   -webkit-text-fill-color: currentColor; color: <brand token>`) so no stray gradient can leak
   back in from any other rule.
3. **Convert `.brand-cloud` semantic tokens to bare HSL channels** to match the
   `@theme inline` contract: `--background`, `--foreground`, `--primary`,
   `--primary-foreground`, `--border`, `--ring`, plus add the missing ones the shared shadcn
   components read (`--card`, `--card-foreground`, `--popover`, `--popover-foreground`,
   `--secondary`, `--muted`, `--muted-foreground`, `--accent`, `--input`). Keep the literal
   hex `--color-navy` / `--color-green` Tailwind palette in `@theme` as-is — cloud pages use
   those directly and they are unaffected.
4. **Audit pass for other bleed** — check the remaining global base rules (`body` font/color,
   focus ring, `* { border-color }`) and any other unscoped selector in `src/styles.css`, and
   scope anything brand-specific the same way.
5. **Make the pattern reusable for `/software` and `/internet`** — document the brand-scope
   contract in `src/styles/README` terms: each brand gets one `src/styles/<brand>.css` file
   containing only bare-HSL semantic tokens plus brand-specific heading/font rules, scoped
   under `.brand-<name>`, applied by that brand's layout route. Nothing brand-specific stays
   unscoped in `src/styles.css`. The two remaining merges then plug in without touching
   existing sections.
6. **Verify** each section by screenshotting `/`, `/cloud`, and `/sms` (plus one inner page of
   each) and comparing heading, button, and link colors against the intended palettes:
   Brain-Net navy/blue, BrainCLOUD navy/green, BSMS cyan/teal.


## Technical notes

- Scoping uses `:where(body:not(:has(.brand-sms, .brand-cloud)))`-style selectors or, more
  robustly, a `.brand-parent` class added by the parent `_layout` route wrapper. The plan uses
  the explicit parent-class approach so specificity stays predictable and no `:has()` support
  question arises.
- No component files change; this is styling-layer only.
