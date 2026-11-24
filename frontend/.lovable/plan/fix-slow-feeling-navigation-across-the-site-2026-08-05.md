# Fix slow-feeling navigation across the site

The measured delay is mainly on the first visit to a route while its code-split JavaScript is fetched/compiled. The current router gives no immediate navigation feedback and keeps the previous route visible until the next route is ready, which makes that delay look like a frozen page. Local first-visit measurements ranged from roughly 0.2 seconds on SMS/Cloud to 0.55–0.87 seconds on heavier parent/Internet pages.

## Changes

1. **Add immediate global navigation feedback**
   - Add a lightweight top progress indicator driven by TanStack Router's pending navigation state.
   - Replace stale outgoing content with a stable branded loading state when a route takes long enough to notice, rather than showing the old page under the new URL.
   - Keep the indicator accessible, non-blocking, and respectful of reduced-motion settings.

2. **Improve route preloading**
   - Keep intent preloading globally and add earlier preloading to persistent header, mobile-menu, and cross-brand links so common destinations start loading before the click.
   - Ensure links that are only mounted after a dropdown opens can still preload their destination promptly.
   - Convert the two confirmed internal Cloud links that use raw `<a href>` navigation to TanStack `<Link>` navigation so they do not trigger full document reloads.

3. **Reduce avoidable first-navigation work**
   - Audit the heaviest parent and Internet route import graphs and remove route-level imports that unnecessarily pull unrelated page modules or media into the requested navigation.
   - Preserve automatic route code splitting; do not combine all pages into a larger shared bundle.
   - Keep non-critical below-the-fold imagery lazy and ensure remote media does not block initial route content.

4. **Keep navigation state stable**
   - Remove unnecessary route-tree remount behavior if verification shows it is causing avoidable teardown/recreation work, while preserving scroll-to-top and brand isolation.
   - Keep existing page animations from delaying visibility; the current parent and SMS page-transition wrappers already render immediately and should remain that way.

5. **Verify the whole merged site**
   - Re-measure first and repeat navigation across parent, `/cloud`, `/sms`, and `/internet` representative routes.
   - Test menu links, cross-brand navigation, browser back/forward, scroll restoration, mobile menus, and direct deep links.
   - Confirm no stale page remains visible after the URL changes, no full-page reload occurs for internal links, and no console/runtime errors are introduced.

## Technical notes

- The delay is not caused by brand colors or CSS token isolation.
- Development preview adds on-demand transform/compile overhead; published production chunks should load faster, but the pending-state and preload fixes are still needed for honest, responsive feedback on slower networks.
- All brand CSS and layouts remain scoped as they are; this work changes navigation behavior and loading efficiency only.