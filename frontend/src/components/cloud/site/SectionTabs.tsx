import * as React from "react";
import { cn } from "@/lib/utils";
import { FOCUS_RING_DARK } from "@/components/cloud/site/chrome";

export type SectionTabItem = { label: string; id: string };

/**
 * Horizontal in-page jump nav. Renders a dark sticky strip with text-button
 * tabs and a green underline on the active section. Active state is tracked
 * via IntersectionObserver against the section ids.
 *
 * Place at the bottom of a hero <section> as its last child. It will sit
 * flush at the hero/next-section boundary and stick under the site header
 * (h-16) while the user scrolls the page.
 */
export function SectionTabs({
  items,
  className,
}: {
  items: SectionTabItem[];
  className?: string;
}) {
  const [active, setActive] = React.useState<string>(items[0]?.id ?? "");
  const listRef = React.useRef<HTMLDivElement | null>(null);
  // While a click-driven scroll is in flight, ignore IO updates so the
  // clicked tab stays highlighted and doesn't flicker through intermediate
  // sections.
  const lockRef = React.useRef(false);
  const lockTimer = React.useRef<number | null>(null);

  // Track which section is currently in view via scroll position. We pick
  // the last section whose top has crossed the threshold line (header +
  // tab strip + a little breathing room). At the bottom of the page we
  // force-select the final section so it's always reachable, even if it's
  // shorter than the viewport.
  React.useEffect(() => {
    const ids = items.map((it) => it.id);
    const getEls = () =>
      ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => !!el);

    const threshold = 64 + 48 + 12; // header + tab strip + breathing room
    let raf = 0;

    const compute = () => {
      raf = 0;
      if (lockRef.current) return;
      const els = getEls();
      if (!els.length) return;

      // Bottom of page → last section.
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= docHeight - 2) {
        setActive(els[els.length - 1].id);
        return;
      }

      let currentId = els[0].id;
      for (const el of els) {
        const top = el.getBoundingClientRect().top;
        if (top - threshold <= 0) currentId = el.id;
        else break;
      }
      setActive(currentId);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);

  // Sync active tab on initial hash so deep links highlight correctly.
  React.useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && items.some((it) => it.id === hash)) setActive(hash);
  }, [items]);

  // Keep the active tab scrolled into view on mobile.
  React.useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const el = list.querySelector<HTMLAnchorElement>(
      `[data-tab-id="${active}"]`,
    );
    if (el) {
      const offset =
        el.offsetLeft - list.clientWidth / 2 + el.clientWidth / 2;
      list.scrollTo({ left: Math.max(0, offset), behavior: "smooth" });
    }
  }, [active]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const headerOffset = 64 + 48; // header + tab strip
    const y =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    // Highlight immediately and lock IO updates while the programmatic
    // scroll plays out, so the clicked tab doesn't flicker through every
    // section it passes.
    setActive(id);
    history.replaceState(null, "", `#${id}`);
    lockRef.current = true;
    if (lockTimer.current) window.clearTimeout(lockTimer.current);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: y,
      behavior: prefersReduced ? "auto" : "smooth",
    });

    const release = () => {
      lockRef.current = false;
      if (lockTimer.current) {
        window.clearTimeout(lockTimer.current);
        lockTimer.current = null;
      }
    };

    // Release once the window settles (scrollY stable for a few frames) or
    // reaches the target. Safety timeout below covers edge cases where the
    // page can't scroll all the way to `y` (e.g. short final section).
    let lastY = window.scrollY;
    let stableFrames = 0;
    const tick = () => {
      if (!lockRef.current) return;
      const curY = window.scrollY;
      if (Math.abs(curY - lastY) < 1) stableFrames += 1;
      else {
        stableFrames = 0;
        lastY = curY;
      }
      if (stableFrames > 6 || Math.abs(curY - y) < 2) {
        release();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    lockTimer.current = window.setTimeout(release, 1500);
  };

  return (
    <div
      className={cn(
        "sticky top-16 z-30 w-full border-y border-white/10 bg-navy",
        className,
      )}
    >
      <div
        ref={listRef}
        className="container-x flex items-stretch gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <a
              key={it.id}
              href={`#${it.id}`}
              data-tab-id={it.id}
              onClick={(e) => handleClick(e, it.id)}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative inline-flex flex-none items-center whitespace-nowrap px-4 py-3.5 font-display text-eyebrow transition-colors duration-[var(--dur-base)] ease-[var(--ease-out)]",
                isActive
                  ? "text-white"
                  : "text-white/55 hover:text-white",
                FOCUS_RING_DARK,
              )}
            >
              {it.label}
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-x-3 -bottom-px h-[2px] transition-colors duration-[var(--dur-base)] ease-[var(--ease-out)]",
                  isActive ? "bg-green" : "bg-transparent",
                )}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
