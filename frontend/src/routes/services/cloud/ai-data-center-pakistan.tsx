import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Warehouse, Boxes, Shield, Sparkles, Zap, Snowflake, Network, ShieldCheck } from "lucide-react";
import {
  SiteHeader,
  SiteFooter,
  SiteMobileStickyCTA,
  FOCUS_RING,
  CTA_PRIMARY,
} from "@/components/cloud/site/chrome";
import {
  Section,
  SectionHeading,
  Eyebrow,
  CTAPair,
  FeatureCard,
  FAQ,
  TierIIIBadge,
  StatCluster,
} from "@/components/cloud/site/primitives";
import {
  AiExploreMore,
  AiFinalCTA,
  AI_INFRA,
  faqJsonLd,
} from "@/components/cloud/site/ai-shared";

const FAQS = [
  { q: "What is an AI data center?", a: "An AI data center is a facility purpose-built to host high-density GPU compute — the hardware modern AI training and inference workloads require. That means far more power per rack, more advanced cooling, faster interconnects, and higher-quality network egress than a general-purpose colocation floor." },
  { q: "Is there an AI data center in Pakistan?", a: "Yes. BrainTEL operates Tier III-compliant data center capacity in Pakistan with NVIDIA GPU hosting (A100 / H100 / L40S), high-density power, precision cooling, and PTA-licensed carrier-neutral connectivity — designed for AI training and inference workloads." },
  { q: "Can I bring my own GPUs?", a: "Yes — that's AI colocation. Bring your own GPU servers or clusters into our facility and we provide the power, cooling, network, physical security, and 24/7 remote hands." },
  { q: "Where is your data center located?", a: "BrainTEL's primary facility is in Lahore with additional PoPs across Pakistan. Both on-net colocation and remote-hands services are available in all major cities." },
  { q: "How is billing handled?", a: "Everything is billed in PKR with clear line items — rack space, power draw, bandwidth, GPU capacity. No USD invoicing, no hidden FX charges." },
  { q: "Do you offer sovereign or air-gapped deployment?", a: "Yes. For regulated industries we deploy AI infrastructure inside your own facility or in a fully air-gapped environment, so no data or model weights leave your perimeter." },
];

export const Route = createFileRoute("/services/cloud/ai-data-center-pakistan")({
  component: AiDataCenterPage,
  // head: () => ({
  //   meta: [
  //     { title: "AI Data Center in Pakistan | BrainTEL — GPU Hosting, Colocation, Sovereign AI Infrastructure" },
  //     { name: "description", content: "BrainTEL's AI data center in Pakistan — Tier III compliant, NVIDIA GPU capacity (A100/H100/L40S), high-density power, PTA-licensed network, PKR billing." },
  //     { name: "keywords", content: "ai data center in pakistan, ai infrastructure pakistan, gpu data center pakistan, ai hosting pakistan, tier iii ai data center" },
  //     { property: "og:title", content: "AI Data Center in Pakistan | BrainTEL" },
  //     { property: "og:description", content: "Locally hosted AI infrastructure — GPU, colocation, private cloud, sovereign deployment. Operated by BrainTEL." },
  //     { property: "og:type", content: "website" },
  //   ],
  //   scripts: [
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify({
  //         "@context": "https://schema.org",
  //         "@type": "Service",
  //         serviceType: "AI Data Center Infrastructure",
  //         provider: { "@type": "Organization", name: "BrainTEL" },
  //         areaServed: { "@type": "Country", name: "Pakistan" },
  //         description: "Tier III-compliant AI data center in Pakistan with GPU hosting, colocation, private cloud, and sovereign AI deployment.",
  //       }),
  //     },
  //     { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
  //   ],
  // }),
  head: () => ({
    meta: [
      { title: "AI Data Center in Pakistan | BrainTEL — GPU Hosting, Colocation, Sovereign AI Infrastructure" },
      { name: "description", content: "BrainTEL's AI data center in Pakistan — Tier III compliant, NVIDIA GPU capacity (A100/H100/L40S), high-density power, PTA-licensed network, PKR billing." },
      { name: "keywords", content: "ai data center in pakistan, ai infrastructure pakistan, gpu data center pakistan, ai hosting pakistan, tier iii ai data center" },
      { property: "og:title", content: "AI Data Center in Pakistan | BrainTEL" },
      { property: "og:description", content: "Locally hosted AI infrastructure — GPU, colocation, private cloud, sovereign deployment. Operated by BrainTEL." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-data-center-pakistan" },
    ],
    links: [{ rel: "canonical", href: "/ai-data-center-pakistan" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "AI Data Center Infrastructure",
          provider: { "@type": "Organization", name: "BrainTEL" },
          areaServed: { "@type": "Country", name: "Pakistan" },
          description: "Tier III-compliant AI data center in Pakistan with GPU hosting, colocation, private cloud, and sovereign AI deployment.",
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
});

const PILLARS = [
  { icon: Cpu, t: "GPU Server Hosting", d: "NVIDIA A100 / H100 / L40S dedicated to your team, billed in PKR.", to: "/services/cloud/gpu-server-hosting-pakistan" as const },
  { icon: Warehouse, t: "AI Colocation", d: "Bring your own GPU cluster — high-density power, cooling, remote hands.", to: "/services/cloud/ai-colocation-pakistan" as const },
  { icon: Boxes, t: "Private AI Cloud", d: "Multi-tenant GPU cloud isolated for your organization.", to: "/services/cloud/private-ai-cloud-pakistan" as const },
  { icon: Shield, t: "Sovereign AI Hosting", d: "On-prem, in-country, or air-gapped — data never leaves your perimeter.", to: "/services/cloud/sovereign-ai-hosting-pakistan" as const },
  { icon: Sparkles, t: "AI Inference & LLM Hosting", d: "Serve open-source and fine-tuned LLMs at low latency from Pakistan.", to: "/services/cloud/ai-inference-llm-hosting-pakistan" as const },
];

const FACILITY = [
  { icon: Zap, t: "High-Density Power", d: "Custom high-density feeds sized for GPU-dense racks with N+1 UPS and diesel generator backup." },
  { icon: Snowflake, t: "Precision Cooling", d: "Hot-aisle/cold-aisle design and climate control tuned for sustained GPU thermals." },
  { icon: Network, t: "Carrier-Neutral 10Gbps", d: "PTA-licensed network with multiple Tier 1 providers. Real port options, low latency across Pakistan." },
  { icon: ShieldCheck, t: "Physical Security 24/7", d: "Biometric access, 24/7 CCTV, escort policies, on-site security personnel." },
];

function AiDataCenterPage() {
  return (
    <div className="min-h-screen bg-surface text-navy">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-hairline bg-surface">
        <div className="container-x section-y">
          <Eyebrow tone="green" withDot>
            Pakistan's AI infrastructure
          </Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            AI Data Center in <span className="text-green">Pakistan</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lede text-navy/70">
            BrainTEL operates the AI data center infrastructure Pakistan's AI
            teams need: Tier III-compliant facilities, NVIDIA GPU capacity,
            high-density power, precision cooling, and PTA-licensed
            carrier-neutral connectivity — all in-country, billed in PKR, with
            engineer-to-engineer support.
          </p>
          <CTAPair
            className="mt-9"
            primaryLabel="Get a capacity quote"
            secondaryLabel="Chat on WhatsApp"
            microcopy="Written quote within 1 business day · No commitment"
            intent="AI Data Center Pakistan · Hero CTA"
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TierIIIBadge />
            <span className="text-xs font-bold text-navy/55">
              PTA-licensed · In-country data residency
            </span>
          </div>
          <div className="mt-10">
            <StatCluster
              items={[
                { k: "A100/H100", v: "GPU capacity" },
                { k: "10 Gbps", v: "Carrier-neutral" },
                { k: "N+1", v: "Power & cooling" },
                { k: "24/7", v: "Remote hands" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pillars grid — links to sub-pages */}
      <Section tone="surface" id="pillars">
        <div className="mb-14">
          <SectionHeading
            eyebrow="What we host"
            title="Five ways to run AI on our infrastructure"
            lede="From a single GPU server to a full sovereign deployment. Pick the model, or combine."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <Link
              key={p.t}
              to={p.to}
              className={"card-surface card-surface-hover group flex flex-col p-6 " + FOCUS_RING}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-h3 font-extrabold text-navy">
                {p.t}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/65">
                {p.d}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-green">
                Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Facility */}
      <Section tone="white" id="facility">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Facility"
            title="Purpose-built for GPU density"
            lede="AI workloads consume more power and reject more heat than typical enterprise servers. Our facility is engineered for it."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FACILITY.map((f) => (
            <FeatureCard key={f.t} icon={f.icon} title={f.t}>
              <p>{f.d}</p>
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Cross-link to /ai-company-in-pakistan */}
      <Section tone="surface" id="company-crosslink">
        <div className="rounded-[var(--radius-card)] border border-hairline bg-white p-8 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-h3 font-extrabold text-navy">
                Looking for an AI company in Pakistan?
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy/65">
                Beyond infrastructure, BrainTEL delivers a full sovereign AI
                platform — agentic AI, DAM, OCR, semantic search, computer
                vision, speech-to-text. See how we position across the stack.
              </p>
            </div>
            <Link to="/services/cloud/ai-company-in-pakistan" className={CTA_PRIMARY + " flex-none"}>
              AI Company in Pakistan
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white" containerClassName="max-w-4xl" id="faq">
        <div className="mb-12 text-center">
          <SectionHeading align="center" eyebrow="FAQs" title="Frequently asked questions" />
        </div>
        <FAQ items={FAQS} />
      </Section>

      <AiExploreMore currentPath="/services/cloud/ai-data-center-pakistan" tone="surface" />

      <AiFinalCTA
        intent="AI Data Center Pakistan · Final CTA"
        title={<>Host your AI in a <span className="text-green">Pakistan data center</span>.</>}
        subtitle="Tell us your workload — GPUs needed, expected traffic, and any compliance requirements. We'll come back with a capacity plan and PKR quote within 1 business day."
      />

      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
