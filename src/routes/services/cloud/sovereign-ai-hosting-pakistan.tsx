import { createFileRoute } from "@tanstack/react-router";
import { Shield, Lock, Landmark, HeartPulse, Banknote, Building2 } from "lucide-react";
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
  { q: "What is sovereign AI?", a: "Sovereign AI is AI where the compute, data, and model weights stay inside a controlled boundary — typically a single country, a private facility, or a fully air-gapped environment. It matters for regulated industries and governments who can't send sensitive data to overseas GPU clouds." },
  { q: "Do you offer sovereign AI hosting in Pakistan?", a: "Yes. BrainTEL hosts AI in Pakistan-based Tier III data centers with in-country data residency. On-prem and air-gapped deployment options are available for the strictest workloads." },
  { q: "What does air-gapped deployment mean?", a: "Air-gapped means the AI system runs with no network connection to the internet or any external network. Updates, models, and data flow in and out through controlled processes. Used for defence, intelligence, and highly regulated finance and health workloads." },
  { q: "Can I run open-source LLMs sovereignly?", a: "Yes. We host open-source models (Llama, Mistral, Qwen, and others) inside your sovereign boundary, with your own fine-tunes and RAG data — none of which leaves the boundary." },
  { q: "How is compliance handled?", a: "The infrastructure is Tier III compliant, PTA-licensed, and configurable for PCI-DSS, ISO 27001, and sector-specific compliance frameworks. Air-gapped deployments are audited on-site." },
  { q: "Who typically uses sovereign AI hosting?", a: "Banks, insurers, telecoms, public-sector agencies, defence contractors, and hospitals — anyone whose data is regulated, sensitive, or classified." },
];

export const Route = createFileRoute("/services/cloud/sovereign-ai-hosting-pakistan")({
  component: SovereignAiPage,
  head: () => ({
    meta: [
      { title: "Sovereign AI Hosting in Pakistan | Air-Gapped & On-Prem | BrainTEL" },
      { name: "description", content: "Sovereign AI hosting in Pakistan — in-country, on-prem, or fully air-gapped AI infrastructure for regulated workloads. Banking, health, government, defence." },
      { name: "keywords", content: "sovereign ai, sovereign ai hosting, sovereign ai pakistan, air gapped ai, on prem ai pakistan, regulated ai hosting" },
      { property: "og:title", content: "Sovereign AI Hosting in Pakistan | BrainTEL" },
      { property: "og:description", content: "In-country, on-prem, or air-gapped AI. For workloads that can't send data to overseas GPU clouds." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "Sovereign AI Hosting", provider: { "@type": "Organization", name: "BrainTEL" }, areaServed: { "@type": "Country", name: "Pakistan" } }) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
});

const FEATURES = [
  { icon: Shield, t: "In-Country Data Residency", d: "GPU compute, training data, embeddings, and model weights stay inside Pakistan." },
  { icon: Lock, t: "Air-Gapped Deployment", d: "Optional fully air-gapped configurations for defence and intelligence workloads." },
  { icon: Building2, t: "On-Prem Delivery", d: "Deploy the entire AI stack inside your own facility with our engineering support." },
  { icon: Landmark, t: "Compliance-Ready", d: "Tier III compliant, PTA-licensed, configurable for PCI-DSS, ISO 27001, and sector frameworks." },
  { icon: HeartPulse, t: "Sector-Specific Deployments", d: "Reference architectures for banking, health, government, telecom, and energy." },
  { icon: Banknote, t: "PKR Contracting", d: "Local currency, local entity, local support. No cross-border data flow, no FX exposure." },
];

const USE_CASES = [
  "Banking & fintech AI on customer data that cannot leave the country",
  "Hospital and clinical AI operating on patient records under health-data regulation",
  "Government and public-sector document intelligence with classified data",
  "Defence and national-security workloads requiring air-gapped operation",
  "Telecom AI over subscriber data with in-country residency mandates",
  "Energy-sector operational AI on infrastructure that cannot connect to the public internet",
];

function SovereignAiPage() {
  return (
    <div className="min-h-screen bg-surface text-navy">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-hairline bg-surface">
        <div className="container-x section-y">
          <Eyebrow tone="green" withDot>Sovereign AI · Pakistan</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            Sovereign AI Hosting in <span className="text-green">Pakistan</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lede text-navy/70">
            For workloads where the AI, the data, and the model weights all
            have to stay inside a controlled boundary. BrainTEL delivers
            sovereign AI hosting three ways: in-country in our Tier III data
            center, on-prem inside your facility, or fully air-gapped.
          </p>
          <CTAPair
            className="mt-9"
            primaryLabel="Design a sovereign deployment"
            secondaryLabel="Chat on WhatsApp"
            microcopy="Scoping doc + PKR quote within 1 business day"
            intent="Sovereign AI · Hero CTA"
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TierIIIBadge />
            <span className="text-xs font-bold text-navy/55">
              PTA-licensed · In-country data residency · Air-gapped options
            </span>
          </div>
        </div>
      </section>

      <Section tone="surface" id="features">
        <div className="mb-14">
          <SectionHeading eyebrow="What's included" title="Three deployment models, one platform" />
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
              title="Where sovereign AI is not optional"
              lede="Regulated data doesn't get to leave the country. Sovereign AI is the answer."
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

      <AiExploreMore currentPath="/services/cloud/sovereign-ai-hosting-pakistan" tone="surface" />

      <AiFinalCTA
        intent="Sovereign AI · Final CTA"
        title={<>Deploy AI where your <span className="text-green">data lives</span>.</>}
        subtitle="Tell us the compliance regime, deployment target, and expected workload. We'll come back with a scoping doc and PKR quote within 1 business day."
      />

      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
