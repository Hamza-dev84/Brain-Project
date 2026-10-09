# Localhost run verification — BrainTEL merged site

## Verdict

Yes. The merged app runs locally. I verified it against the running dev server in this environment, not by inspection alone.

## What I actually checked

1. Every major route returned HTTP 200 from the local server (`http://localhost:8080`):

```text
200 /                              200 /cloud
200 /company                       200 /cloud/vps-hosting-pakistan
200 /services/cloud                200 /sms
200 /contact-us                    200 /sms/pricing
200 /careers                       200 /sms/sms-api-pakistan
```

2. TypeScript typecheck passes with zero errors across all three merged brands (parent, `/cloud`, `/sms`).
3. No unresolved imports — every ported component, hook, asset and style file resolves; a missing import would fail both the typecheck and the route request above.
4. The only 404 in the console log is `/software`, which is expected — that brand has not been merged yet.

## Notes for the developer

- Stack: TanStack Start v1 (React 19 + Vite), Tailwind CSS v4, Bun/Node 22. No backend, no database, no env vars required to boot.
- Local run:

```bash
bun install      # or npm install
bun run dev      # serves on http://localhost:8080
bun run build    # production build
bun run preview  # serve the production build
```

- Routing is file-based under `src/routes/`. `src/routeTree.gen.ts` is generated — never edit it by hand.
- Brand isolation: each sub-brand has a scoped stylesheet (`src/styles/cloud.css`, `src/styles/sms.css`) applied under a wrapper class (`.brand-cloud`, `.brand-sms`, `.brand-parent`). Rules are documented in `src/styles/README.md`. Tokens must be bare HSL channels (`241 56% 20%`), not hex, because the theme wraps them in `hsl(var(--token))`.
- Routes are code-split per page, so adding `/software` and `/internet` later does not increase the bundle any visitor downloads on other pages.

## One caveat worth stating honestly

The checks above cover the dev server. A full production build (`vite build`) has not been run in this session. If you want, I can run it and report the output before you hand this over.
