import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Check } from "lucide-react";
import { IconWhatsApp as MessageCircle } from "@/components/cloud/icons";
import { WHATSAPP_HREF, FOCUS_RING, FOCUS_RING_DARK, CTA_PRIMARY, CTA_PRIMARY_DARK, CTA_SECONDARY, CTA_SECONDARY_DARK } from "@/components/cloud/site/chrome";
import { useContactDialog } from "@/components/cloud/site/contact-dialog";
import { cn } from "@/lib/utils";

/* ---------------- IncludedGrid ----------------
 * Reusable "what's included on every plan" inclusions card.
 * Use on every service page (VPS, Cloud, Dedicated, Colocation).
 */

export type IncludedItem = {
  label: string;
  blurb?: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

export function IncludedGrid({
  eyebrow = "Included with every plan",
  title,
  lede,
  badge,
  items,
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  badge?: React.ReactNode;
  items: IncludedItem[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-hairline bg-white p-6 shadow-[var(--shadow-card)] sm:p-8 lg:p-10",
        className,
      )}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="mb-3">
              <Eyebrow tone="navy">{eyebrow}</Eyebrow>
            </div>
          )}
          <h3 className="font-display text-h3 font-extrabold text-navy">
            {title}
          </h3>
          {lede && (
            <p className="mt-2 text-sm leading-relaxed text-navy/65">
              {lede}
            </p>
          )}
        </div>
        {badge && <div className="flex-none">{badge}</div>}
      </div>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {items.map((it) => (
          <li
            key={it.label}
            className="group flex flex-col gap-2 rounded-[var(--radius-card)] border border-transparent bg-surface p-4 transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-hairline hover:bg-white hover:shadow-[var(--shadow-card)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
              {it.icon ? (
                <it.icon className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Check className="h-5 w-5" strokeWidth={3} />
              )}
            </span>
            <span className="font-display text-sm font-extrabold leading-snug text-navy">
              {it.label}
            </span>
            {it.blurb && (
              <span className="text-xs leading-relaxed text-navy/60">
                {it.blurb}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
 * Design-system primitives.
 *
 * Every page composes these. Do NOT inline new section wrappers,
 * pricing grids, FAQs, or hero shells in route files — extend
 * the primitive instead so the change propagates everywhere.
 * ============================================================ */

/* ---------------- Section ---------------- */

type SectionProps = {
  id?: string;
  as?: "section" | "div";
  tone?: "surface" | "white" | "tint" | "navy";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

const TONE_BG: Record<NonNullable<SectionProps["tone"]>, string> = {
  surface: "bg-surface",
  white: "bg-white",
  tint: "bg-tint",
  navy: "bg-navy text-white",
};

export function Section({
  id,
  as: Tag = "section",
  tone = "surface",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <Tag id={id} className={cn("section-y", TONE_BG[tone], className)}>
      <div className={cn("container-x", containerClassName)}>{children}</div>
    </Tag>
  );
}

/* ---------------- Eyebrow ---------------- */

export function Eyebrow({
  children,
  tone = "navy",
  withDot = false,
  className,
}: {
  children: React.ReactNode;
  tone?: "navy" | "green" | "on-navy";
  withDot?: boolean;
  className?: string;
}) {
  const TONE: Record<string, string> = {
    navy: "text-navy/60",
    green:
      "inline-flex items-center gap-2 rounded-full border border-green/30 bg-white px-4 py-1.5 text-green shadow-sm",
    "on-navy":
      "inline-flex items-center gap-2 rounded-full border border-green/40 bg-green/10 px-4 py-1.5 text-green",
  };
  return (
    <span className={cn("text-eyebrow", TONE[tone], className)}>
      {withDot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
        </span>
      )}
      {children}
    </span>
  );
}

/* ---------------- SectionHeading ---------------- */

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <div className="mb-4">
          <Eyebrow tone={isDark ? "on-navy" : "navy"}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          "text-h2! font-display font-extrabold!",
          isDark ? "text-slate-50!" : "text-navy",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 text-lede",
            isDark ? "text-white/75" : "text-navy/70",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

/* ---------------- CTA pair (canonical green + WhatsApp) ---------------- */

export function CTAPair({
  align = "left",
  tone = "light",
  primaryLabel = "Get Started Today",
  secondaryLabel = "Chat on WhatsApp",
  primaryHref,
  secondaryHref = WHATSAPP_HREF,
  microcopy = "We reply within 1 business hour · Available 24/7",
  intent,
  service,
  className,
}: {
  align?: "left" | "center";
  tone?: "light" | "dark";
  primaryLabel?: string;
  secondaryLabel?: string;
  /** Override to render a plain anchor (e.g. internal page link). When omitted, opens ContactDialog. */
  primaryHref?: string;
  secondaryHref?: string;
  microcopy?: string | null;
  /** Context label sent to the lead pipeline. */
  intent?: string;
  /** Pre-selects the service in the contact form. */
  service?: "Cloud Hosting" | "VPS Hosting" | "Dedicated Server" | "Colocation" | "Not sure — help me choose";
  className?: string;
}) {
  const isDark = tone === "dark";
  const primaryClass = isDark ? CTA_PRIMARY_DARK : CTA_PRIMARY;
  const secondaryClass = isDark ? CTA_SECONDARY_DARK : CTA_SECONDARY;
  const microColor = isDark ? "text-white/55" : "text-navy/55";
  const { open } = useContactDialog();
  return (
    <div className={cn(align === "center" && "flex flex-col items-center my-0 py-0", className)}>
      <div
        className={cn(
          "flex flex-wrap items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {primaryHref ? (
          <a href={primaryHref} className={primaryClass}>
            {primaryLabel}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        ) : (
          <button
            type="button"
            className={primaryClass}
            onClick={() => open({ intent: intent ?? primaryLabel, service })}
          >
            {primaryLabel}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        )}
        <a href={secondaryHref} className={secondaryClass}>
          <MessageCircle className="h-5 w-5" /> {secondaryLabel}
        </a>
      </div>
      {microcopy && (
        <p className={cn("mt-3 text-xs font-medium", microColor, align === "center" && "text-center")}>
          {microcopy}
        </p>
      )}
    </div>
  );
}

/* ---------------- HeroFrame ---------------- */

export function HeroFrame({
  eyebrow,
  title,
  lede,
  sub,
  media,
  trust,
  stats,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  sub?: React.ReactNode;
  media?: React.ReactNode;
  trust?: React.ReactNode;
  stats?: Array<{ k: string; v: string }>;
}) {
  return (
    <section className="relative border-b border-hairline bg-surface">
      <div
        className={cn(
          "container-x relative grid gap-12 pt-14 pb-14 lg:pt-20 lg:pb-20",
          media ? "lg:grid-cols-12 lg:items-center lg:gap-12" : "",
        )}
      >
        <div className={cn("animate-fade-up space-y-7", media && "lg:col-span-6")}>
          {eyebrow && <Eyebrow tone="green" withDot>{eyebrow}</Eyebrow>}
          <h1 className="text-hero font-display text-navy">{title}</h1>
          {lede && <p className="max-w-xl text-lede text-navy/70">{lede}</p>}
          {sub && (
            <p className="max-w-xl text-base font-bold leading-relaxed text-navy">
              {sub}
            </p>
          )}
          <CTAPair className="pt-1" />
          {stats && <StatCluster items={stats} />}
          {trust}
        </div>
        {media && (
          <div className="relative animate-fade-up [animation-delay:200ms] lg:col-span-6">
            {media}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- StatCluster ---------------- */

export function StatCluster({
  items,
  tone = "light",
}: {
  items: Array<{ k: string; v: string }>;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border sm:grid-cols-4",
        isDark
          ? "border-white/10 bg-white/10"
          : "border-hairline bg-[var(--color-hairline)]",
      )}
    >
      {items.map((s) => (
        <div
          key={s.k}
          className={cn(
            "px-4 py-3 text-center",
            isDark ? "bg-navy" : "bg-white",
          )}
        >
          <div
            className={cn(
              "font-display text-lg font-extrabold",
              isDark ? "text-white" : "text-navy",
            )}
          >
            {s.k}
          </div>
          <div
            className={cn(
              "mt-0.5 text-eyebrow",
              isDark ? "text-white/55" : "text-navy/50",
            )}
            style={{ fontSize: "9px" }}
          >
            {s.v}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- FeatureCard ---------------- */

export function FeatureCard({
  icon: Icon,
  title,
  children,
  className,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("card-surface card-surface-hover p-8", className)}>
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <h3 className="mt-5 font-display text-h3 font-extrabold text-navy">{title}</h3>
      {children && (
        <div className="mt-3 text-base leading-relaxed text-navy/70">
          {children}
        </div>
      )}
    </div>
  );
}

/* ---------------- PricingCard ---------------- */

export type PricingTier = {
  name: string;
  price: React.ReactNode;
  unit?: string;
  blurb?: string;
  features: string[];
  featured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PricingCard({ tier }: { tier: PricingTier }) {
  const featured = tier.featured;
  const { open } = useContactDialog();
  const btnClass = cn(
    "mt-8 w-full rounded-full font-bold",
    featured
      ? "bg-green text-white shadow-cta hover:bg-green"
      : "bg-navy text-white hover:bg-navy-deep",
    FOCUS_RING,
  );
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[var(--radius-card)] border p-8 transition-all",
        featured
          ? "border-green bg-white shadow-[var(--shadow-card-hover)] lg:-translate-y-2"
          : "border-hairline bg-white shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]",
      )}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green px-3 py-1 text-eyebrow text-white">
          Most popular
        </span>
      )}
      <h3 className="font-display text-h3 font-extrabold text-navy">{tier.name}</h3>
      {tier.blurb && (
        <p className="mt-2 text-sm text-navy/60">{tier.blurb}</p>
      )}
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-3xl font-extrabold text-navy">
          {tier.price}
        </span>
        {tier.unit && (
          <span className="text-sm font-bold text-navy/55">
            {tier.unit}
          </span>
        )}
      </div>
      <ul className="mt-6 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-navy/80">
            <Check className="mt-0.5 h-4 w-4 flex-none text-green" strokeWidth={3} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {tier.ctaHref ? (
        <Button asChild className={btnClass}>
          <a href={tier.ctaHref}>{tier.ctaLabel ?? "Get Started"}</a>
        </Button>
      ) : (
        <Button
          type="button"
          className={btnClass}
          onClick={() => open({ intent: `Pricing · ${tier.name}` })}
        >
          {tier.ctaLabel ?? "Get Started"}
        </Button>
      )}
    </div>
  );
}

/* ---------------- FAQ ---------------- */

export function FAQ({
  items,
}: {
  items: Array<{ q: string; a: React.ReactNode }>;
}) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((it, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx}`}
          className="card-surface px-6 data-[state=open]:border-green/40"
        >
          <AccordionTrigger
            className={cn(
              "py-5 text-left font-display text-base font-bold text-navy hover:no-underline",
              FOCUS_RING,
            )}
          >
            {it.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-relaxed text-navy/70">
            {it.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

/* ---------------- TierIIIBadge ---------------- */

export function TierIIIBadge({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-3 py-1.5",
        isDark
          ? "border-white/20 bg-white/5 text-white"
          : "border-navy/15 bg-white text-navy",
        className,
      )}
      aria-label="Tier III compliant data centre"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4 text-green"
        aria-hidden
      >
        <path
          d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m8.5 12 2.5 2.5L16 9.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-eyebrow">
        Tier III Compliant
      </span>
    </span>
  );
}

/* ---------------- Testimonial ----------------
 * NOTE: Attributed customer quote. Replace `quote` / `name` / `role` with
 * a real customer reference before launch. The slot exists because pages
 * convert measurably better with one specific named voice over zero.
 */

export function Testimonial({
  quote,
  name,
  role,
  company,
  metric,
  tone = "light",
}: {
  quote: React.ReactNode;
  name: string;
  role: string;
  company?: string;
  metric?: { value: string; label: string };
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  return (
    <figure
      className={cn(
        "relative grid gap-8 rounded-[var(--radius-card)] border p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12",
        isDark
          ? "border-white/10 bg-navy text-white"
          : "border-hairline bg-white shadow-[var(--shadow-card)]",
      )}
    >
      <div>
        <svg
          aria-hidden
          viewBox="0 0 32 32"
          className={cn("h-7 w-7", isDark ? "text-green" : "text-green")}
          fill="currentColor"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1-4 4-4V8h-2Zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1-4 4-4V8h-2Z" />
        </svg>
        <blockquote
          className={cn(
            "mt-4 font-display text-xl font-bold leading-snug sm:text-2xl",
            isDark ? "text-white" : "text-navy",
          )}
        >
          {quote}
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-4">
          <span
            className={cn(
              "flex h-11 w-11 flex-none items-center justify-center rounded-full font-display text-sm font-extrabold",
              isDark ? "bg-green text-white" : "bg-navy text-white",
            )}
            aria-hidden
          >
            {initials}
          </span>
          <span className="text-sm leading-tight">
            <span
              className={cn(
                "block font-display font-extrabold",
                isDark ? "text-white" : "text-navy",
              )}
            >
              {name}
            </span>
            <span
              className={cn(
                "block",
                isDark ? "text-white/60" : "text-navy/55",
              )}
            >
              {role}
              {company ? ` · ${company}` : ""}
            </span>
          </span>
        </figcaption>
      </div>
      {metric && (
        <div
          className={cn(
            "flex flex-col items-start border-l-2 pl-6 lg:items-end lg:border-l-0 lg:border-l-2 lg:pl-8 lg:text-right",
            isDark ? "border-green" : "border-green",
          )}
        >
          <span
            className={cn(
              "font-display text-4xl font-extrabold leading-none sm:text-5xl",
              isDark ? "text-white" : "text-navy",
            )}
          >
            {metric.value}
          </span>
          <span
            className={cn(
              "mt-2 max-w-[12rem] text-eyebrow",
              isDark ? "text-white/60" : "text-navy/55",
            )}
          >
            {metric.label}
          </span>
        </div>
      )}
    </figure>
  );
}

/* ---------------- BillingToggle ---------------- */

export type BillingCycle = "monthly" | "annual";

export function BillingToggle({
  value,
  onChange,
  annualDiscountLabel = "Save 17%",
  className,
}: {
  value: BillingCycle;
  onChange: (v: BillingCycle) => void;
  annualDiscountLabel?: string;
  className?: string;
}) {
  return (
    <div
      role="tablist"
      aria-label="Billing cycle"
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-hairline bg-white p-1 shadow-sm",
        className,
      )}
    >
      {(["monthly", "annual"] as const).map((cycle) => {
        const active = value === cycle;
        return (
          <button
            key={cycle}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(cycle)}
            className={cn(
              "relative inline-flex items-center gap-2 rounded-full px-5 py-2 font-display text-xs font-extrabold uppercase tracking-[0.14em] transition-colors",
              FOCUS_RING,
              active
                ? "bg-navy text-white"
                : "text-navy/60 hover:text-navy",
            )}
          >
            {cycle === "monthly" ? "Monthly" : "Annual"}
            {cycle === "annual" && (
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[9px] font-extrabold tracking-[0.1em]",
                  active ? "bg-green text-white" : "bg-green/15 text-green",
                )}
              >
                {annualDiscountLabel}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
