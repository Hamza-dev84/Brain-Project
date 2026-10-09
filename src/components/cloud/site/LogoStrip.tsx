import type { ReactNode } from "react";

export type LogoItem = {
  /** Public URL or imported asset path. Optional — empty slot shows a dashed placeholder until you upload. */
  src?: string;
  alt: string;
  /** Optional short label shown under the logo / inside the placeholder. */
  label?: string;
};

type Props = {
  items: LogoItem[];
  /** Heading above the row. */
  heading?: ReactNode;
  /** Visual size of logos (px height). Default 32. */
  size?: number;
  className?: string;
  /** Dark background variant (used near hero). */
  dark?: boolean;
};

export function LogoStrip({ items, heading, size = 32, className = "", dark = false }: Props) {
  return (
    <div className={className}>
      {heading && (
        <p
          className={
            "mb-4 text-center font-display text-xs font-bold uppercase tracking-[0.16em] " +
            (dark ? "text-white/60" : "text-navy/60")
          }
        >
          {heading}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
        {items.map((it) => (
          <div
            key={it.alt}
            className="flex flex-col items-center gap-1.5"
            style={{ minHeight: size + 18 }}
          >
            {it.src ? (
              <img decoding="async"
                src={it.src}
                alt={it.alt}
                loading="lazy"
                style={{ height: size, width: "auto" }}
                className={
                  "object-contain opacity-90 transition-all duration-300 hover:opacity-100 " +
                  (dark ? "brightness-0 invert" : "")
                }
              />
            ) : (
              <div
                style={{ height: size, minWidth: size * 2.4 }}
                className={
                  "flex items-center justify-center rounded-md border border-dashed px-3 text-eyebrow " +
                  (dark
                    ? "border-white/20 text-white/40"
                    : "border-navy/15 text-navy/40")
                }
                aria-label={it.alt}
              >
                {it.label ?? it.alt}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
