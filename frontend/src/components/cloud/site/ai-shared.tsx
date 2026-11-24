import * as React from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  Cpu,
  Warehouse,
  Boxes,
  Shield,
  Sparkles,
  Building2,
  MapPin,
  Check,
  ExternalLink,
} from "lucide-react";
import {
  Section,
  SectionHeading,
  Eyebrow,
  CTAPair,
  FAQ,
  TierIIIBadge,
} from "@/components/cloud/site/primitives";
import { useContactDialog } from "@/components/cloud/site/contact-dialog";
import {
  CTA_PRIMARY,
  FOCUS_RING,
  WHATSAPP_HREF,
} from "@/components/cloud/site/chrome";
import { cn } from "@/lib/utils";

/* ============================================================
 * AI section — shared navigation data + reusable components.
 * Owned by both the header dropdown (SiteHeader) and every AI
 * route (cross-links, city template).
 * ============================================================ */

export type AiRoutePath =
  | "/services/cloud/ai-data-center-pakistan"
  | "/services/cloud/gpu-server-hosting-pakistan"
  | "/services/cloud/ai-colocation-pakistan"
  | "/services/cloud/private-ai-cloud-pakistan"
  | "/services/cloud/sovereign-ai-hosting-pakistan"
  | "/services/cloud/ai-inference-llm-hosting-pakistan"
  | "/services/cloud/ai-company-in-pakistan"
  | "/services/cloud/ai-companies-in-lahore"
  | "/services/cloud/ai-companies-in-karachi"
  | "/services/cloud/ai-companies-in-islamabad";

export type AiNavItem = {
  to: AiRoutePath;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const AI_INFRA: AiNavItem[] = [
  {
    to: "/services/cloud/ai-data-center-pakistan",
    title: "AI Data Center in Pakistan",
    desc: "Locally hosted AI infrastructure — GPU, colocation, private cloud",
    icon: BrainCircuit,
  },
  {
    to: "/services/cloud/gpu-server-hosting-pakistan",
    title: "GPU Server Hosting",
    desc: "NVIDIA A100 / H100 / L40S servers, billed in PKR",
    icon: Cpu,
  },
  {
    to: "/services/cloud/ai-colocation-pakistan",
    title: "AI Colocation",
    desc: "Bring your own GPU cluster — high-density power & cooling",
    icon: Warehouse,
  },
  {
    to: "/services/cloud/private-ai-cloud-pakistan",
    title: "Private AI Cloud",
    desc: "Dedicated GPU cloud for your team, isolated & multi-tenant",
    icon: Boxes,
  },
  {
    to: "/services/cloud/sovereign-ai-hosting-pakistan",
    title: "Sovereign AI Hosting",
    desc: "Air-gapped, on-prem, in-country AI for regulated data",
    icon: Shield,
  },
  {
    to: "/services/cloud/ai-inference-llm-hosting-pakistan",
    title: "AI Inference & LLM Hosting",
    desc: "Serve open-source LLMs at low latency from Pakistan",
    icon: Sparkles,
  },
];

export const AI_SOLUTIONS: AiNavItem[] = [
  {
    to: "/services/cloud/ai-company-in-pakistan",
    title: "AI Company in Pakistan",
    desc: "Infrastructure, hosting & sovereign AI platform — one team",
    icon: Building2,
  },
  {
    to: "/services/cloud/ai-companies-in-lahore",
    title: "AI Companies in Lahore",
    desc: "The Lahore AI ecosystem & how BrainTEL powers it",
    icon: MapPin,
  },
  {
    to: "/services/cloud/ai-companies-in-karachi",
    title: "AI Companies in Karachi",
    desc: "The Karachi AI ecosystem & how BrainTEL powers it",
    icon: MapPin,
  },
  {
    to: "/services/cloud/ai-companies-in-islamabad",
    title: "AI Companies in Islamabad",
    desc: "The Islamabad AI ecosystem & how BrainTEL powers it",
    icon: MapPin,
  },
];

export const ALL_AI_NAV: AiNavItem[] = [...AI_INFRA, ...AI_SOLUTIONS];

/* ---------------- AiRow (used inside the header dropdown) ---------------- */

export function AiRow({
  item,
  onClick,
}: {
  item: AiNavItem;
  onClick?: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link
      to={item.to}
      activeOptions={{ exact: true }}
      onClick={onClick}
      className={
        "group/row flex items-start gap-4 rounded-[var(--radius-card)] p-3 transition-colors hover:bg-navy/[0.04] " +
        FOCUS_RING
      }
      activeProps={{ className: "bg-green/5 ring-1 ring-inset ring-green/30" }}
    >
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green transition-colors group-hover/row:bg-green group-hover/row:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-sm font-bold text-navy">
          {item.title}
        </span>
        <span className="mt-0.5 block text-xs leading-relaxed text-navy/60">
          {item.desc}
        </span>
      </span>
    </Link>
  );
}

/* ---------------- AiExploreMore ---------------- *
 * Compact 3-card strip of related AI pages. Filters out the current
 * page so each route shows the other most-relevant destinations.
 */

export function AiExploreMore({
  currentPath,
  heading = "Explore more of BrainTEL AI",
  lede = "Every layer of the AI stack — locally built, locally hosted, one team to talk to.",
  tone = "surface",
}: {
  currentPath: AiRoutePath;
  heading?: string;
  lede?: string;
  tone?: "surface" | "white";
}) {
  const others = ALL_AI_NAV.filter((i) => i.to !== currentPath).slice(0, 6);
  return (
    <Section tone={tone} id="explore-ai">
      <div className="mb-10">
        <SectionHeading eyebrow="More AI pages" title={heading} lede={lede} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={
                "card-surface card-surface-hover group flex items-start gap-4 p-6 " +
                FOCUS_RING
              }
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5 font-display text-base font-extrabold text-navy">
                  {item.title}
                  <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-navy/60">
                  {item.desc}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- AiFinalCTA ---------------- */

export function AiFinalCTA({
  title,
  subtitle,
  buttonLabel = "Discuss an AI project",
  intent,
}: {
  title: React.ReactNode;
  subtitle?: string;
  buttonLabel?: string;
  intent: string;
}) {
  const { open } = useContactDialog();
  return (
    <Section tone="navy" id="cta" className="!pt-[var(--section-y-tight)]">
      <div className="relative overflow-hidden rounded-[var(--radius-jumbo)] border border-white/10 bg-navy-deep px-8 section-y text-center sm:px-16">
        <span aria-hidden className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-green/50" />
        <span aria-hidden className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-green/50" />
        <span aria-hidden className="absolute left-0 bottom-0 h-10 w-10 border-l-2 border-b-2 border-green/50" />
        <span aria-hidden className="absolute right-0 bottom-0 h-10 w-10 border-r-2 border-b-2 border-green/50" />
        <div className="relative">
          <h2 className="font-display text-h2 font-extrabold text-white!">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lede text-white/75">
              {subtitle}
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className={
                "group inline-flex items-center justify-center gap-2 rounded-none bg-green px-9 py-[18px] text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#1da82d] " +
                FOCUS_RING
              }
              onClick={() =>
                open({
                  intent,
                  service: "Not sure — help me choose",
                  title: "Talk to our AI team",
                  subtitle:
                    "Tell us your workload — models, users, data sensitivity. We'll come back with a written scoping doc and a PKR quote within 1 business day.",
                })
              }
            >
              {buttonLabel}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={WHATSAPP_HREF}
              className="inline-flex items-center gap-2 rounded-none border-2 border-white/25 bg-transparent px-7 py-[14px] text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-navy"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-3 text-xs font-medium text-white/55">
            Written scoping doc + PKR quote within 1 business day · Available 24/7
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
 * City page template — shared across the three /ai-companies-in-*
 * routes. Route files remain thin so each can define its own head().
 * ============================================================ */

export type CityCompany = {
  name: string;
  blurb: string;
  href: string;
};

export type CityPageProps = {
  city: "Lahore" | "Karachi" | "Islamabad";
  intro: string;
  brainTelBlurb: string;
  companies: CityCompany[];
  otherCities: Array<{ label: string; to: AiRoutePath }>;
  currentPath: AiRoutePath;
};

export function CityPage({
  city,
  intro,
  brainTelBlurb,
  companies,
  otherCities,
  currentPath,
}: CityPageProps) {
  const { open } = useContactDialog();
  const faqs = [
    {
      q: `How many AI companies are in ${city}?`,
      a: `${city} hosts a growing cluster of AI/ML companies — from established enterprise-software vendors adding AI capabilities to newer product-focused teams shipping generative AI apps. The list on this page is a hand-curated selection of the most visible; the actual number is larger and grows every quarter.`,
    },
    {
      q: `What do AI companies in ${city} typically build?`,
      a: `A mix: enterprise AI integrations (banking, fintech, healthcare, telecom), applied computer vision and OCR products, LLM-powered SaaS, generative AI consumer apps, and services work for overseas clients. Data-sovereignty use cases — where the model and data must stay in Pakistan — are the fastest-growing segment.`,
    },
    {
      q: `Is ${city} a good place to build AI?`,
      a: `Yes — deep engineering talent, competitive costs, and strong English-language proficiency. The main constraint used to be local GPU infrastructure; that is what BrainTEL's ${city} presence exists to solve.`,
    },
    {
      q: `Does BrainTEL work with AI companies in ${city}?`,
      a: `Yes. We host, colocate, and provide GPU infrastructure for AI companies operating in ${city} — from single-server LLM inference deployments to multi-rack GPU clusters. Billing in PKR, local support, in-country data residency.`,
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-hairline bg-surface">
        <div className="container-x section-y">
          <Eyebrow tone="green" withDot>
            AI ecosystem · {city}
          </Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            AI Companies in <span className="text-green">{city}</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lede text-navy/70">{intro}</p>
          <CTAPair
            className="mt-9"
            primaryLabel={`Host your AI workload in ${city}`}
            secondaryLabel="Chat on WhatsApp"
            microcopy="Local support · PKR billing · In-country data residency"
            intent={`AI Companies in ${city} · Hero CTA`}
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TierIIIBadge />
            <span className="text-xs font-bold text-navy/55">
              PTA-licensed network · Operated by BrainTEL
            </span>
          </div>
        </div>
      </section>

      {/* BrainTEL in {City} */}
      <Section tone="white" id="braintel-in-city">
        <div className="mb-10">
          <SectionHeading
            eyebrow={`BrainTEL in ${city}`}
            title={
              <>
                What BrainTEL delivers to AI teams in{" "}
                <span className="text-green">{city}</span>.
              </>
            }
            lede={brainTelBlurb}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "GPU Server Hosting",
              d: "NVIDIA A100 / H100 / L40S servers, dedicated to your team, billed in PKR.",
              to: "/services/cloud/gpu-server-hosting-pakistan" as AiRoutePath,
            },
            {
              t: "AI Colocation",
              d: "Bring your own GPU cluster — high-density power, cooling, and 24/7 remote hands.",
              to: "/services/cloud/ai-colocation-pakistan" as AiRoutePath,
            },
            {
              t: "Private AI Cloud",
              d: "Dedicated multi-tenant GPU cloud for your engineering and research teams.",
              to: "/services/cloud/private-ai-cloud-pakistan" as AiRoutePath,
            },
            {
              t: "LLM Hosting & Inference",
              d: "Serve open-source and fine-tuned LLMs at low latency from Pakistan.",
              to: "/services/cloud/ai-inference-llm-hosting-pakistan" as AiRoutePath,
            },
            {
              t: "Sovereign / Air-Gapped AI",
              d: "On-prem or air-gapped deployment for regulated data — finance, health, government.",
              to: "/services/cloud/sovereign-ai-hosting-pakistan" as AiRoutePath,
            },
            {
              t: "24/7 Local Support",
              d: "Engineers you can call in Urdu or English. Tickets answered in minutes, not days.",
              to: "/services/cloud/ai-data-center-pakistan" as AiRoutePath,
            },
          ].map((c) => (
            <Link
              key={c.t}
              to={c.to}
              className={
                "card-surface card-surface-hover group flex flex-col p-6 " +
                FOCUS_RING
              }
            >
              <h3 className="font-display text-base font-extrabold text-navy">
                {c.t}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/65">
                {c.d}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-green">
                Learn more{" "}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Notable AI companies list */}
      <Section tone="surface" id="companies">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Ecosystem"
            title={
              <>
                Notable AI companies in{" "}
                <span className="text-green">{city}</span>.
              </>
            }
            lede={`A hand-curated snapshot of AI/ML companies operating in ${city}. Reviewed and rotated quarterly — inclusion is editorial, never paid.`}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {companies.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener nofollow"
              className={
                "card-surface card-surface-hover group flex items-start gap-4 p-6 " +
                FOCUS_RING
              }
            >
              <span className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-[var(--radius-card)] bg-navy/[0.06] font-display text-sm font-extrabold text-navy">
                {c.name.charAt(0)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5 font-display text-base font-extrabold text-navy">
                  {c.name}
                  <ExternalLink className="h-3.5 w-3.5 text-navy/40 transition-colors group-hover:text-green" />
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-navy/65">
                  {c.blurb}
                </span>
              </span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-navy/50">
          Know a {city}-based AI company we should include next quarter?{" "}
          <button
            type="button"
            onClick={() =>
              open({
                intent: `Editorial · Suggest AI company in ${city}`,
                title: "Suggest a company",
                subtitle:
                  "Tell us about the AI company we should list. We review submissions quarterly.",
              })
            }
            className="font-bold text-green hover:underline"
          >
            Send us the link
          </button>
          .
        </p>
      </Section>

      {/* How we work with AI companies */}
      <Section tone="white" id="how-we-work">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Partnership"
              title={
                <>
                  How we work with AI companies in{" "}
                  <span className="text-green">{city}</span>.
                </>
              }
              lede="Most AI companies don't want to run their own data center. We're the layer underneath — infrastructure and hosting so your team can focus on models and product."
            />
          </div>
          <ul className="space-y-5 lg:col-span-7">
            {[
              "Local GPU capacity — A100 / H100 / L40S, reserved for you, expandable on 30-day notice.",
              "In-country data residency — training data and model weights never leave Pakistan.",
              "PKR billing with clear line items — no USD invoices, no FX surprises.",
              "Engineer-to-engineer support — you talk to people who understand CUDA, not tier-1 script readers.",
              "Sovereign / air-gapped options — for AI companies serving regulated clients (banking, health, government).",
              "Volume pricing — as your inference load grows, your per-unit cost drops.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green/10 text-green">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-base leading-relaxed text-navy/80">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className={CTA_PRIMARY}
            onClick={() =>
              open({
                intent: `AI Companies in ${city} · How-we-work CTA`,
                title: "Host your AI workload with BrainTEL",
                subtitle:
                  "Tell us your models, expected users, and data-sensitivity constraints. We'll come back with a scoping doc and PKR quote within 1 business day.",
              })
            }
          >
            Get a scoping call
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </Section>

      {/* Other cities */}
      <Section tone="surface" id="other-cities" className="!pt-[var(--section-y-tight)]">
        <div className="mb-8">
          <SectionHeading
            eyebrow="Also in"
            title="AI companies in other Pakistan cities"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {otherCities.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className={
                "card-surface card-surface-hover group flex items-center justify-between p-6 " +
                FOCUS_RING
              }
            >
              <span className="font-display text-base font-extrabold text-navy">
                {c.label}
              </span>
              <ArrowRight className="h-4 w-4 text-navy/40 transition-all group-hover:translate-x-1 group-hover:text-green" />
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white" containerClassName="max-w-4xl">
        <div className="mb-12 text-center">
          <SectionHeading
            align="center"
            eyebrow="FAQs"
            title="Frequently asked questions"
          />
        </div>
        <FAQ items={faqs} />
      </Section>

      <AiExploreMore currentPath={currentPath} tone="surface" />

      <AiFinalCTA
        intent={`AI Companies in ${city} · Final CTA`}
        title={
          <>
            Ready to host your AI in{" "}
            <span className="text-green">{city}</span>?
          </>
        }
        subtitle={`Local GPU capacity, in-country data residency, PKR billing, and engineers you can call. Tell us what you're building — we'll send a scoping doc within 1 business day.`}
      />
    </>
  );
}

/* Small helper unused but exported for JSON-LD schema builders */
export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

/* Re-export for local use in city pages */
export { cn };
