import { createFileRoute } from "@tanstack/react-router";
import { Warehouse, Zap, Snowflake, Network, Wrench, ShieldCheck } from "lucide-react";
import {
  SiteHeader,
  SiteFooter,
  SiteMobileStickyCTA,
} from "@/components/cloud/site/chrome";
import {
  Section,
  SectionHeading,
  Eyebrow,
  CTAPair,
  FeatureCard,
  FAQ,
  TierIIIBadge,
} from "@/components/cloud/site/primitives";
import {
  AiExploreMore,
  AiFinalCTA,
  faqJsonLd,
} from "@/components/cloud/site/ai-shared";

const FAQS = [
  { q: "What is AI colocation?", a: "AI colocation is bringing your own GPU servers or cluster into a data center engineered for AI density — high-power feeds, precision cooling, fast networking, and remote hands. You own the hardware; we own the facility." },
  { q: "How is GPU colocation different from regular colocation?", a: "GPU servers consume 4–8x the power of typical enterprise servers and reject far more heat. GPU colocation requires higher-density power feeds, tighter cooling, and networking topologies designed for east-west GPU traffic. Our facility is engineered for it." },
  { q: "Can you host H100 or 8-GPU boxes?", a: "Yes. We provision high-density racks with the power and cooling required for current-generation multi-GPU boxes. Talk to us about density and expansion plans early." },
  { q: "Do you provide remote hands?", a: "Yes. 24/7 remote hands for reboots, cable work, drive swaps, and OS-level tasks. Photo-documented work logs on every job." },
  { q: "Can I bring my own network hardware?", a: "Yes. Bring your own switches and routers; we provide upstream transit and cross-connects." },
  { q: "Do you offer sovereign / air-gapped colocation?", a: "Yes. Private cages, dedicated networking, and full air-gapped configurations are available for regulated workloads." },
];

export const Route = createFileRoute("/services/cloud/ai-colocation-pakistan")({
  component: AiColocationPage,
  // head: () => ({
  //   meta: [
  //     { title: "AI Colocation in Pakistan | GPU Colocation | BrainTEL" },
  //     { name: "description", content: "AI colocation and GPU colocation in Pakistan — bring your own GPU cluster into a Tier III facility engineered for AI density. N+1 power, precision cooling, 24/7 remote hands." },
  //     { name: "keywords", content: "ai colocation, gpu colocation, ai colocation pakistan, gpu colocation pakistan, high density colocation, colocation for ai workloads" },
  //     { property: "og:title", content: "AI Colocation in Pakistan | BrainTEL" },
  //     { property: "og:description", content: "Bring your GPU cluster to Pakistan's AI-ready colocation. High-density power, precision cooling, 24/7 remote hands." },
  //     { property: "og:type", content: "website" },
  //   ],
  //   scripts: [
  //     { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "AI Colocation", provider: { "@type": "Organization", name: "BrainTEL" }, areaServed: { "@type": "Country", name: "Pakistan" } }) },
  //     { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
  //   ],
  // }),

  head: () => ({
    meta: [
      { title: "AI Colocation in Pakistan | GPU Colocation | BrainTEL" },
      { name: "description", content: "AI colocation and GPU colocation in Pakistan — bring your own GPU cluster into a Tier III facility engineered for AI density. N+1 power, precision cooling, 24/7 remote hands." },
      { name: "keywords", content: "ai colocation, gpu colocation, ai colocation pakistan, gpu colocation pakistan, high density colocation, colocation for ai workloads" },
      { property: "og:title", content: "AI Colocation in Pakistan | BrainTEL" },
      { property: "og:description", content: "Bring your GPU cluster to Pakistan's AI-ready colocation. High-density power, precision cooling, 24/7 remote hands." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-colocation-pakistan" },
    ],
    links: [{ rel: "canonical", href: "/ai-colocation-pakistan" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "AI Colocation", provider: { "@type": "Organization", name: "BrainTEL" }, areaServed: { "@type": "Country", name: "Pakistan" } }) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
});

const FEATURES = [
  { icon: Zap, t: "High-Density Power", d: "Custom high-density feeds sized for multi-GPU racks — N+1 UPS, diesel generator backup, metered/managed PDUs." },
  { icon: Snowflake, t: "Precision Cooling for GPUs", d: "Hot-aisle/cold-aisle design and climate control tuned for sustained GPU thermals — not general-purpose enterprise loads." },
  { icon: Network, t: "Carrier-Neutral 10Gbps+", d: "PTA-licensed network with multiple Tier 1 upstreams. Cross-connects and private interconnects on request." },
  { icon: Wrench, t: "24/7 Remote Hands", d: "Reboots, cable work, hardware swaps, and OS installs handled by certified staff with photo-documented work logs." },
  { icon: ShieldCheck, t: "Physical Security", d: "Biometric access, 24/7 CCTV, escort policies, on-site security personnel. Private cages available." },
  { icon: Warehouse, t: "Flexible Footprint", d: "From a single GPU box to a private cage. Start small and expand under one contract." },
];

const USE_CASES = [
  "Owned-hardware AI training clusters with predictable cost per epoch",
  "Production LLM inference on your own H100 fleet, kept in-country",
  "Hybrid setups — colocated inference + cloud burst for spikes",
  "GPU-dense HPC workloads that don't fit in standard cloud instances",
  "Sovereign / regulated AI on hardware you own, in a facility you can audit",
  "Disaster recovery for overseas AI infrastructure with Pakistan as the DR site",
];

function AiColocationPage() {
  return (
    <div className="min-h-screen bg-surface text-navy">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-hairline bg-surface">
        <div className="container-x section-y">
          <Eyebrow tone="green" withDot>AI colocation · GPU colocation · Pakistan</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            AI Colocation in <span className="text-green">Pakistan</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lede text-navy/70">
            Bring your GPU cluster into a Tier III-compliant facility that's
            actually engineered for AI density — high-power feeds, precision
            cooling, fast networking, and 24/7 remote hands. Your hardware,
            our facility, one PKR invoice.
          </p>
          <CTAPair
            className="mt-9"
            primaryLabel="Get a colocation quote"
            secondaryLabel="Chat on WhatsApp"
            microcopy="Density check + PKR quote within 1 business day"
            intent="AI Colocation · Hero CTA"
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TierIIIBadge />
            <span className="text-xs font-bold text-navy/55">
              High-density power available · Private cages on request
            </span>
          </div>
        </div>
      </section>

      <Section tone="surface" id="features">
        <div className="mb-14">
          <SectionHeading eyebrow="What's included" title="Colocation engineered for GPU density" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.t} icon={f.icon} title={f.t}>
              <p>{f.d}</p>
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="white" id="use-cases" className="!pb-[var(--section-y-tight)]">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Use cases"
              title="Where AI colocation makes sense"
              lede="Owning hardware isn't the right answer for every AI team. When it is, our facility is built for it."
            />
          </div>
          <ol className="lg:col-span-7">
            {USE_CASES.map((u, i) => (
              <li
                key={u}
                className={"group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-hairline py-6 hover:bg-surface/60" + (i === USE_CASES.length - 1 ? " border-b" : "")}
              >
                <span className="font-display text-h3 font-extrabold tabular-nums text-navy/25 group-hover:text-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lede leading-snug text-navy/85">{u}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="white" containerClassName="max-w-4xl" id="faq" className="!pt-[var(--section-y-tight)]">
        <div className="mb-12 text-center">
          <SectionHeading align="center" eyebrow="FAQs" title="Frequently asked questions" />
        </div>
        <FAQ items={FAQS} />
      </Section>

      <AiExploreMore currentPath="/services/cloud/ai-colocation-pakistan" tone="surface" />

      <AiFinalCTA
        intent="AI Colocation · Final CTA"
        title={<>Colocate your GPU cluster in <span className="text-green">Pakistan</span>.</>}
        subtitle="Tell us your density (kW/rack), GPU count, and networking needs. We'll come back with a facility plan and PKR quote within 1 business day."
      />

      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
