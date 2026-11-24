import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Cpu, Gauge, Layers, Search, Boxes } from "lucide-react";
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
  { q: "Can I self-host an LLM in Pakistan?", a: "Yes. BrainTEL hosts open-source LLMs (Llama, Mistral, Qwen, Gemma, and others) on locally hosted GPU servers — dedicated to you, billed in PKR, with data residency inside Pakistan." },
  { q: "What models do you support?", a: "Any open-source or open-weight LLM that runs on standard GPU stacks — plus your own fine-tunes. Common choices include Llama 3, Mistral, Qwen, Gemma, and DeepSeek. Talk to us about specific model requirements." },
  { q: "How is LLM inference priced?", a: "Reserved GPU capacity, billed monthly in PKR. Predictable cost per model per instance — no per-token surprises. Volume discounts as your inference load grows." },
  { q: "How fast is inference?", a: "Latency depends on model size, GPU choice (A100 / H100 / L40S), and batching strategy. For Pakistan-based users, hosting locally cuts round-trip latency dramatically vs. overseas inference APIs." },
  { q: "Can I run RAG against my own data?", a: "Yes. We host vector databases, embedding models, and retrieval pipelines alongside the LLM — all in-country, so your knowledge base never leaves Pakistan." },
  { q: "Do you support sovereign or air-gapped LLM hosting?", a: "Yes. The same LLM hosting stack deploys on-prem or air-gapped for regulated workloads. See Sovereign AI Hosting." },
];

export const Route = createFileRoute("/services/cloud/ai-inference-llm-hosting-pakistan")({
  component: LlmHostingPage,
  // head: () => ({
  //   meta: [
  //     { title: "AI Inference & LLM Hosting in Pakistan | BrainTEL — Self-Host LLMs Locally" },
  //     { name: "description", content: "Host open-source LLMs — Llama, Mistral, Qwen — on Pakistan-based GPU infrastructure. Low-latency inference, PKR billing, in-country data residency, RAG-ready." },
  //     { name: "keywords", content: "llm hosting, self host llm, ai inference server, llm hosting pakistan, host your own llm, ai inference pakistan, open source llm hosting" },
  //     { property: "og:title", content: "AI Inference & LLM Hosting in Pakistan | BrainTEL" },
  //     { property: "og:description", content: "Self-host open-source LLMs on locally hosted GPU infrastructure. Low-latency, PKR billing, in-country data residency." },
  //     { property: "og:type", content: "website" },
  //   ],
  //   scripts: [
  //     { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "LLM Hosting and AI Inference", provider: { "@type": "Organization", name: "BrainTEL" }, areaServed: { "@type": "Country", name: "Pakistan" } }) },
  //     { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
  //   ],
  // }),
  head: () => ({
    meta: [
      { title: "AI Inference & LLM Hosting in Pakistan | BrainTEL — Self-Host LLMs Locally" },
      { name: "description", content: "Host open-source LLMs — Llama, Mistral, Qwen — on Pakistan-based GPU infrastructure. Low-latency inference, PKR billing, in-country data residency, RAG-ready." },
      { name: "keywords", content: "llm hosting, self host llm, ai inference server, llm hosting pakistan, host your own llm, ai inference pakistan, open source llm hosting" },
      { property: "og:title", content: "AI Inference & LLM Hosting in Pakistan | BrainTEL" },
      { property: "og:description", content: "Self-host open-source LLMs on locally hosted GPU infrastructure. Low-latency, PKR billing, in-country data residency." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-inference-llm-hosting-pakistan" },
    ],
    links: [{ rel: "canonical", href: "/ai-inference-llm-hosting-pakistan" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "LLM Hosting and AI Inference", provider: { "@type": "Organization", name: "BrainTEL" }, areaServed: { "@type": "Country", name: "Pakistan" } }) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
});

const FEATURES = [
  { icon: Sparkles, t: "Open-Source LLM Hosting", d: "Llama, Mistral, Qwen, Gemma, DeepSeek and more — deployed on dedicated GPU capacity." },
  { icon: Cpu, t: "GPU-Sized for Your Model", d: "A100, H100, or L40S — sized to model class, throughput target, and batching strategy." },
  { icon: Layers, t: "Fine-Tune Support", d: "Bring your own fine-tunes and LoRA adapters. We handle deployment, versioning, and rollout." },
  { icon: Search, t: "RAG-Ready Stack", d: "Vector databases, embedding models, and retrieval pipelines hosted alongside your LLM." },
  { icon: Gauge, t: "Low Latency to Pakistan", d: "Local hosting cuts round-trip time vs. overseas inference APIs — measured in tens of ms, not hundreds." },
  { icon: Boxes, t: "Predictable PKR Billing", d: "Reserved capacity model. No per-token pricing volatility. Volume discounts as usage grows." },
];

const USE_CASES = [
  "Internal knowledge assistants over private company data (RAG)",
  "Customer-facing chat and support agents with response latency SLAs",
  "Document intelligence pipelines — summarization, extraction, classification",
  "Urdu / English multilingual assistants for local user bases",
  "Fine-tuned domain models (legal, medical, financial) served in-country",
  "AI features embedded in Pakistan-facing SaaS products",
];

function LlmHostingPage() {
  return (
    <div className="min-h-screen bg-surface text-navy">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-hairline bg-surface">
        <div className="container-x section-y">
          <Eyebrow tone="green" withDot>AI inference · LLM hosting · Pakistan</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            AI Inference & LLM Hosting in <span className="text-green">Pakistan</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lede text-navy/70">
            Self-host open-source LLMs on locally hosted GPU infrastructure —
            low latency to Pakistan-based users, predictable PKR pricing, and
            data that never leaves the country. RAG-ready, fine-tune friendly,
            and available on dedicated A100 / H100 / L40S capacity.
          </p>
          <CTAPair
            className="mt-9"
            primaryLabel="Host my LLM"
            secondaryLabel="Chat on WhatsApp"
            microcopy="Sizing + PKR quote within 1 business day"
            intent="LLM Hosting · Hero CTA"
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TierIIIBadge />
            <span className="text-xs font-bold text-navy/55">
              In-country residency · RAG-ready · Fine-tune friendly
            </span>
          </div>
        </div>
      </section>

      <Section tone="surface" id="features">
        <div className="mb-14">
          <SectionHeading eyebrow="What's included" title="Everything you need to run an LLM in production" />
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
              title="What Pakistan teams ship on hosted LLMs"
              lede="From internal assistants to customer-facing products — self-hosted, in-country, predictable."
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

      <AiExploreMore currentPath="/services/cloud/ai-inference-llm-hosting-pakistan" tone="surface" />

      <AiFinalCTA
        intent="LLM Hosting · Final CTA"
        title={<>Self-host your LLM in <span className="text-green">Pakistan</span>.</>}
        subtitle="Tell us the model, expected traffic, and any latency or compliance targets. We'll come back with a sized deployment plan and PKR quote within 1 business day."
      />

      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
