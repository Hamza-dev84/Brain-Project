import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Zap, Network, Layers, Gauge, ShieldCheck } from "lucide-react";
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
  { q: "What GPUs do you offer?", a: "NVIDIA A100 (40GB / 80GB), H100 (80GB), and L40S. Multi-GPU configurations available on request. We reserve capacity ahead of time — talk to us early if you need H100." },
  { q: "How is GPU hosting priced?", a: "Every GPU workload is different. We size the server (CPU, RAM, NVMe, GPU count, network) to your workload and send a PKR quote. Reserved capacity is significantly cheaper per hour than on-demand." },
  { q: "Where are the GPUs hosted?", a: "In BrainTEL's Tier III-compliant Pakistan data center. Data residency, compliance, and latency stay in-country." },
  { q: "Can I get a GPU VPS?", a: "Yes. Smaller workloads and dev environments can start on a shared GPU VPS with dedicated GPU allocation, and graduate to dedicated servers as load grows." },
  { q: "How fast can you provision?", a: "Reserved GPU stock provisions within 24 hours. New GPU procurement (uncommon models, large quantities) takes longer — talk to us early." },
  { q: "Do you offer sovereign / on-prem GPU deployment?", a: "Yes. We can deploy GPU infrastructure inside your facility or in a fully air-gapped environment for regulated workloads." },
];

export const Route = createFileRoute("/services/cloud/gpu-server-hosting-pakistan")({
  component: GpuHostingPage,
  head: () => ({
    meta: [
      { title: "GPU Server Hosting Pakistan | NVIDIA A100 / H100 / L40S | BrainTEL" },
      { name: "description", content: "Dedicated GPU server hosting in Pakistan — NVIDIA A100, H100, L40S servers hosted in a Tier III data center. GPU VPS options, PKR billing, 24/7 support." },
      { name: "keywords", content: "gpu server hosting, gpu hosting pakistan, gpu vps, ai vps, rent a100, rent h100, nvidia gpu server pakistan" },
      { property: "og:title", content: "GPU Server Hosting in Pakistan | BrainTEL" },
      { property: "og:description", content: "NVIDIA A100 / H100 / L40S servers hosted locally in Pakistan. Dedicated GPU capacity, PKR billing, engineer-to-engineer support." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", serviceType: "GPU Server Hosting", provider: { "@type": "Organization", name: "BrainTEL" }, areaServed: { "@type": "Country", name: "Pakistan" } }) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
});

const FEATURES = [
  { icon: Cpu, t: "NVIDIA A100 / H100 / L40S", d: "Dedicated GPU capacity across current-generation NVIDIA data-center hardware." },
  { icon: Layers, t: "Multi-GPU Configurations", d: "1 to 8 GPUs per server, NVLink where the model requires it." },
  { icon: Zap, t: "High-Density Power", d: "Racks provisioned for sustained GPU draw with N+1 UPS and generator backup." },
  { icon: Network, t: "10 Gbps Networking", d: "Fast, carrier-neutral bandwidth. Direct interconnects available inside Lahore." },
  { icon: Gauge, t: "NVMe Storage", d: "Local NVMe scratch space sized for training datasets and model weights." },
  { icon: ShieldCheck, t: "In-Country Residency", d: "Training data and model weights stay in Pakistan, with real physical security." },
];

const USE_CASES = [
  "Training and fine-tuning open-source LLMs (Llama, Mistral, Qwen) on your own data",
  "Serving inference for fine-tuned models with low latency to Pakistan-based users",
  "Computer vision training and batch inference (object, face, scene detection)",
  "Speech-to-text and transcription workloads at scale",
  "RAG pipelines with local vector databases and semantic search",
  "Research and experimentation with reserved, predictable-cost GPU capacity",
];

function GpuHostingPage() {
  return (
    <div className="min-h-screen bg-surface text-navy">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-hairline bg-surface">
        <div className="container-x section-y">
          <Eyebrow tone="green" withDot>GPU server hosting · Pakistan</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            GPU Server Hosting in <span className="text-green">Pakistan</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lede text-navy/70">
            NVIDIA A100, H100, and L40S GPU servers hosted in BrainTEL's Tier
            III-compliant Pakistan data center. Dedicated capacity, PKR billing,
            and support engineers who understand CUDA. No overseas latency,
            no USD invoicing, no vendor black box.
          </p>
          <CTAPair
            className="mt-9"
            primaryLabel="Get a GPU quote"
            secondaryLabel="Chat on WhatsApp"
            microcopy="Capacity check + PKR quote within 1 business day"
            intent="GPU Server Hosting · Hero CTA"
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TierIIIBadge />
            <span className="text-xs font-bold text-navy/55">
              Reserved capacity available · In-country residency
            </span>
          </div>
        </div>
      </section>

      <Section tone="surface" id="features">
        <div className="mb-14">
          <SectionHeading eyebrow="What's included" title="Every GPU server, configured for real AI workloads" />
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
              title="What Pakistan teams host on our GPUs"
              lede="From training runs to production inference — GPUs sized to the workload, billed in PKR."
            />
          </div>
          <ol className="lg:col-span-7">
            {USE_CASES.map((u, i) => (
              <li
                key={u}
                className={"group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-hairline py-6 transition-colors hover:bg-surface/60" + (i === USE_CASES.length - 1 ? " border-b" : "")}
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

      <AiExploreMore currentPath="/services/cloud/gpu-server-hosting-pakistan" tone="surface" />

      <AiFinalCTA
        intent="GPU Server Hosting · Final CTA"
        title={<>Reserve GPU capacity in <span className="text-green">Pakistan</span>.</>}
        subtitle="Tell us the model, expected load, and any compliance constraints. We'll come back with a sized configuration and PKR quote within 1 business day."
      />

      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
