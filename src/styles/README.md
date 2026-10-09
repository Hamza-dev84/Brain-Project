# Brand scope contract

The app hosts several brands in one TanStack Start project:

| Section     | Route prefix | Scope class     | Stylesheet              |
| ----------- | ------------ | --------------- | ----------------------- |
| Brain-Net   | `/`          | `.brand-parent` | `src/styles.css` (base) |
| BrainCLOUD  | `/services/cloud`     | `.brand-cloud`  | `src/styles/cloud.css`  |
| BSMS        | `/services/sms`       | `.brand-sms`    | `src/styles/sms.css`    |
| BrainSOFT   | `/services/software`  | `.brand-software` | `src/styles/software.css` (planned) |
| Brain-Net ISP | `/services/internet` | `.brand-internet` | `src/styles/internet.css` (planned) |

## Rules

1. **Nothing brand-specific stays unscoped in `src/styles.css`.**
   Base rules there may only set brand-neutral things (resets, font stacks,
   token-driven utilities like `bg-primary`). Anything with a hardcoded
   brand color — e.g. the Brain-Net heading gradient — lives under
   `.brand-parent`, applied by `src/components/layout/Layout.tsx`.

2. **One stylesheet per brand**, imported at the top of `src/styles.css`,
   containing only:
   - semantic tokens under `.brand-<name>` (see format below),
   - brand fonts and heading rules,
   - a handful of brand-only utilities.

   Do not duplicate component CSS per brand — shared shadcn components in
   `src/components/ui/` read the tokens and re-skin automatically.

3. **Semantic tokens must be bare HSL channels**, no `hsl()` and no hex.
   The global `@theme inline` maps them as `hsl(var(--primary))`, so
   `--primary: #17164f` produces the invalid `hsl(#17164f)` and every
   shadcn component silently falls back to defaults.

   ```css
   .brand-x {
     --background: 0 0% 100%;
     --foreground: 241 56% 20%;
     --primary: 241 56% 20%;
     --primary-foreground: 0 0% 100%;
     --secondary: …;  --secondary-foreground: …;
     --muted: …;      --muted-foreground: …;
     --accent: …;     --accent-foreground: …;
     --card: …;       --card-foreground: …;
     --popover: …;    --popover-foreground: …;
     --border: …;     --input: …;  --ring: …;
   }
   ```

   Literal-hex Tailwind palette entries (`--color-navy: #17164f` inside
   `@theme`) are fine — those are used directly as `text-navy`, not
   wrapped in `hsl()`.

4. **Reset inherited heading paint.** Each brand's heading rule must clear
   any gradient that could leak in:

   ```css
   .brand-x h1, … , .brand-x h6 {
     background: none;
     -webkit-text-fill-color: currentColor;
   }
   ```

5. **Apply the scope class in the brand's layout route**
   (`src/routes/<brand>.tsx`), on the outermost wrapper.

6. **No cross-brand imports.** A component under `src/components/<brand>/`
   must not be imported by another brand's routes — that is what keeps
   TanStack Router's per-route code splitting effective as brands are added.

## Performance notes

- Brand palettes are token blocks only: a few dozen lines each, ~1 KB
  gzipped per brand, zero runtime cost.
- LCP: each brand's hero image should be WebP/AVIF, carry explicit
  `width`/`height` (CLS), and be preloaded from that route's `head().links`.
  Everything below the fold uses `loading="lazy"`.
- Fonts: all brands share Raleway + Lato, so one font load serves the whole
  app. A new brand introducing another family must load it with
  `display=swap` and a subset.
- SEO: every route needs a self-referencing canonical, a unique
  title/description, and an entry in the single combined `sitemap.xml`.
