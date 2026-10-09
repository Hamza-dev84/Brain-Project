# Make page transitions actually instant (and remove the loading screen)

You're right: the previous change made the wait *visible* instead of making it *shorter*. This plan removes the loading UI and attacks the real cause — the browser downloads and compiles each page's JavaScript chunk only after you click.

## What changes

1. **Remove the loading screen and progress bar**
   - Delete `RoutePending` and `NavigationProgress` and unwire them from `src/router.tsx` and `src/routes/__root.tsx`.
   - No pending fallback at all; a navigation that is already warm renders in one frame.

2. **Have the next page already loaded before the click (the actual fix)**
   - Preload on hover/focus stays, but is no longer the primary mechanism: after the first page is interactive, warm the route chunks for every link currently in the viewport, and idle-prefetch the whole nav set for the current brand (header, mobile menu, footer, brand bar).
   - Use `router.preloadRoute` on an idle callback so it never competes with the initial render.
   - Preload on `pointerdown`/`touchstart` as a last-resort catch for clicks with no hover (mobile), which buys 80-150 ms on its own.

3. **Make the chunks smaller so a cold load is short even when preload misses**
   - Audit the heaviest Internet/parent routes for imports that pull whole shared barrels (icon barrels, animation wrappers, sibling page modules) into a single page chunk, and import narrowly instead.
   - Ensure `framer-motion` and other shared libraries land in one shared vendor chunk instead of being duplicated per route chunk.
   - Keep below-the-fold and remote imagery lazy so images never block the route's first paint.

4. **Verify with numbers, not vibes**
   - Measure click-to-first-paint of the new route on parent, `/cloud`, `/sms`, `/internet` for: cold first visit, warm (preloaded) visit, and back/forward.
   - Target: warm navigations under ~100 ms, cold navigations materially below the 550-870 ms currently measured on the heavy Internet pages.
   - Report the before/after table rather than declaring it fixed.

## Technical notes

- Dev preview compiles route modules on demand, which inflates first-visit numbers; measurements will be taken against a production build so the numbers reflect what users get.
- Idle prefetching is bounded to the current brand's navigation targets so we don't download the entire site on every page.
- No layout, styling, or brand-token changes; this is navigation and bundling only.
