import { createFileRoute } from "@tanstack/react-router";
import { Boxes, Users, Lock, Gauge, Layers, Settings2 } from "lucide-react";
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
  { q: "What is a private AI cloud?", a: "A private AI cloud is a dedicated multi-tenant GPU cloud reserved for your organization — isolated from other tenants, sized to your workloads, and managed as a shared resource across your teams." },
  { q: "How is this different from GPU server hosting?", a: "GPU server hosting gives your team a dedicated box. Private AI cloud gives your organization a pool of GPU capacity with workspace isolation, per-team quotas, and folder-level model assignment — closer to running your own internal AI platform." },
  { q: "Is my data isolated from other customers?", a: "Yes. Private AI cloud is single-tenant at the compute and storage layer. Multi-tenant only refers to your internal teams sharing the pool you rent." },
  { q: "Can I run my own LLM models?", a: "Yes. Bring your own open-source or fine-tuned models. We provide the GPU capacity, orchestration, and inference layer." },
  { q: "Do you offer on-prem private AI cloud?", a: "Yes. The same platform can be deployed inside your facility or in a fully air-gapped environment — see Sovereign AI Hosting." },
  { q: "How is it billed?", a: "PKR, based on reserved GPU capacity and storage. Volume discounts as your pool grows. No USD invoicing, no FX surprises." },
];

export const Route = createFileRoute("/services/cloud/private-ai-cloud-pakistan")({
  component: PrivateAiCloudPage,
  head: () => ({
    meta: [
      { title: "Private AI Cloud in Pakistan | BrainTEL — Dedicated GPU Cloud" },
      { name: "description", content: "Private AI cloud in Pakistan — dedicated multi-tenant GPU pool isolated for your organization. Workspace isolation, folder-level model assignment, PKR billing." },
      { name: "keywords", content: "private ai cloud, private ai cloud pakistan, on prem llm pakistan, dedicated gpu cloud, ai for business pakistan" },
      { property: "og:title", content: "Private AI Cloud in Pakistan | BrainTEL" },
      { property: "og:description", content: "Dedicated multi-tenant GPU cloud isolated for your organization. Locally hosted, PKR billing, engineer-to-engineer support." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "Private AI Cloud", provider: { "@type": "Organization", name: "BrainTEL" }, areaServed: { "@type": "Country", name: "Pakistan" } }) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
});

const FEATURES = [
  { icon: Boxes, t: "Dedicated GPU Pool", d: "A reserved pool of GPU capacity for your organization only. Isolated at the compute and storage layer." },
  { icon: Users, t: "Multi-Tenant Workspaces", d: "Departments and projects get isolated workspaces with their own quotas, models, and data." },
  { icon: Layers, t: "Folder-Level Model Assignment", d: "Assign different LLMs / SLMs to specific folders based on content type and cost profile." },
  { icon: Settings2, t: "Flexible Model Choice", d: "Run open-source LLMs, small language models, or your own fine-tunes side-by-side in the same pool." },
  { icon: Lock, t: "Data Sovereignty", d: "Training data, embeddings, and model weights stay in-country. Optional on-prem deployment." },
  { icon: Gauge, t: "Predictable PKR Billing", d: "Reserved capacity model with transparent line items. No pay-as-you-go surprises." },
];

const USE_CASES = [
  "Central AI platform for a distributed engineering organization",
  "Internal knowledge assistants with RAG over private company data",
  "Regulated-industry AI where every workload must stay inside a controlled boundary",
  "Multi-department AI rollouts (legal, HR, ops) with per-team model choice and cost tracking",
  "Consolidating shadow-IT AI usage under a governed, secure platform",
  "Hosting fine-tuned models produced by your data-science team for internal consumption",
];

function PrivateAiCloudPage() {
  return (
    <div className="min-h-screen bg-surface text-navy">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-hairline bg-surface">
        <div className="container-x section-y">
          <Eyebrow tone="green" withDot>Private AI cloud · Pakistan</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            Private AI Cloud in <span className="text-green">Pakistan</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lede text-navy/70">
            A dedicated multi-tenant GPU cloud reserved for your organization —
            isolated compute, workspace-level access control, folder-level
            model assignment, and PKR billing. Your internal AI platform,
            without the internal build.
          </p>
          <CTAPair
            className="mt-9"
            primaryLabel="Design my private cloud"
            secondaryLabel="Chat on WhatsApp"
            microcopy="Sizing + PKR quote within 1 business day"
            intent="Private AI Cloud · Hero CTA"
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TierIIIBadge />
            <span className="text-xs font-bold text-navy/55">
              Reserved capacity · Optional on-prem deployment
            </span>
          </div>
        </div>
      </section>

      <Section tone="surface" id="features">
        <div className="mb-14">
          <SectionHeading eyebrow="What's included" title="A private AI platform, not a GPU rental" />
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
              title="Where private AI cloud beats public GPU rental"
              lede="When AI stops being a single project and becomes an organization-wide platform."
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

      <AiExploreMore currentPath="/services/cloud/private-ai-cloud-pakistan" tone="surface" />

      <AiFinalCTA
        intent="Private AI Cloud · Final CTA"
        title={<>Give your team a <span className="text-green">private AI cloud</span>.</>}
        subtitle="Tell us your team size, expected models, and any compliance constraints. We'll come back with a sizing plan and PKR quote within 1 business day."
      />

      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
