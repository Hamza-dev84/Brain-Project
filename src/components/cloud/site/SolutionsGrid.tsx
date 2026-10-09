import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  IconCloud,
  IconServer,
  IconDatabase,
} from "@/components/cloud/icons";

type Variant = "feature" | "cross-link";

type Solution = {
  icon: typeof IconCloud;
  title: string;
  tagline: string;
  desc: string;
  to?: "/" | "/services/cloud/vps-hosting-pakistan" | "/services/cloud/dedicated-server-hosting-pakistan";
  href?: string;
};

const SOLUTIONS: Solution[] = [
  {
    icon: IconCloud,
    title: "Cloud Hosting",
    tagline: "Elastic, multi-tenant",
    desc: "Auto-scaling cloud infrastructure with Tier III redundancy for production websites and applications.",
    to: "/services/cloud",
  },
  {
    icon: IconServer,
    title: "VPS Hosting",
    tagline: "Dedicated virtual resources",
    desc: "Isolated vCPU, RAM, NVMe SSD, and a dedicated IPv4 — from PKR 12,499/mo. Linux & Windows.",
    to: "/services/cloud/vps-hosting-pakistan",
  },
  {
    icon: IconDatabase,
    title: "Dedicated Servers",
    tagline: "Single-tenant hardware",
    desc: "Full physical servers with NVMe RAID, ECC RAM, and 99.99% uptime — built for high-traffic workloads.",
    to: "/services/cloud/dedicated-server-hosting-pakistan",
  },
];

export function SolutionsGrid({
  variant = "feature",
  excludeTo,
  eyebrow = "Our hosting solutions",
  heading,
  subheading,
  className,
}: {
  variant?: Variant;
  /** Hide the card that matches this route — used on VPS/Dedicated pages so they don't link to themselves. */
  excludeTo?: Solution["to"];
  eyebrow?: string;
  heading?: React.ReactNode;
  subheading?: string;
  className?: string;
}) {
  const items = SOLUTIONS.filter((s) => s.to !== excludeTo);
  const dark = variant === "cross-link";

  return (
    <section
      className={
        "relative section-y " +
        (dark ? "bg-[#fafbfc]" : "bg-white") +
        (className ? " " + className : "")
      }
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <span className="text-eyebrow text-green">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-navy">
            {heading ?? "Cloud, VPS, and Dedicated — one Pakistan-based provider"}
          </h2>
          {subheading && (
            <p className="mt-4 text-base leading-relaxed text-navy/70">{subheading}</p>
          )}
        </div>
        <div className={"grid gap-6 " + (items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3")}>
          {items.map((s) => {
            const Icon = s.icon;
            const inner = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-eyebrow text-green">
                  {s.tagline}
                </p>
                <h3 className="mt-2 font-display text-h3 font-extrabold text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-navy transition-colors group-hover:text-green">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </>
            );

            const cls =
              "group flex flex-col rounded-[var(--radius-card)] border border-hairline bg-white p-8 transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]";

            return s.to ? (
              <Link key={s.title} to={s.to} className={cls}>
                {inner}
              </Link>
            ) : (
              <a key={s.title} href={s.href} className={cls}>
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
