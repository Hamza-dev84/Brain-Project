import { useEffect } from "react";
import { useRouter, useRouterState } from "@tanstack/react-router";

const MAX_PRELOADS = 25;

/**
 * Warms route chunks on user intent only:
 *  - pointerenter / focus on an internal link (hover ≈ 200ms before click)
 *  - pointerdown / touchstart, for clicks without hover
 *  - links close to the viewport, but only after the page is interactive
 *
 * Deliberately does NOT bulk-warm every nav link on load: doing so pulled
 * ~100 route chunks into the first page load and dominated main-thread time
 * (TBT 840ms). Intent-based warming keeps navigation instant at a fraction
 * of the cost.
 */
export function RoutePrefetcher() {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect data saver and slow connections.
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } })
      .connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType)) return;

    const preloaded = new Set<string>();

    const warm = (href: string | null | undefined) => {
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;
      const to = href.split("#")[0].split("?")[0];
      if (!to || to === pathname || preloaded.has(to) || preloaded.size >= MAX_PRELOADS) return;
      preloaded.add(to);
      void router.preloadRoute({ to } as never).catch(() => {});
    };

    const anchorFrom = (event: Event) =>
      (event.target as Element | null)?.closest?.("a[href^='/']")?.getAttribute("href");

    const onIntent = (event: Event) => warm(anchorFrom(event));

    document.addEventListener("pointerenter", onIntent, { capture: true, passive: true });
    document.addEventListener("pointerdown", onIntent, { capture: true, passive: true });
    document.addEventListener("touchstart", onIntent, { capture: true, passive: true });
    document.addEventListener("focusin", onIntent, { capture: true, passive: true });

    // Deliberately no viewport/idle bulk warming: it pulled ~100 route chunks
    // per page view. Hover/touch/focus gives the same perceived speed for a
    // fraction of the main-thread cost.

    return () => {
      
      document.removeEventListener("pointerenter", onIntent, { capture: true });
      document.removeEventListener("pointerdown", onIntent, { capture: true });
      document.removeEventListener("touchstart", onIntent, { capture: true });
      document.removeEventListener("focusin", onIntent, { capture: true });
    };
  }, [router, pathname]);

  return null;
}

export default RoutePrefetcher;
