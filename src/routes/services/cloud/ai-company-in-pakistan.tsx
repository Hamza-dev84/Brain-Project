import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, BrainCircuit, Cpu, Warehouse, Boxes, Shield, Sparkles, Database, ScanText, Search, Mic, Eye, Users } from "lucide-react";
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
import { CustomersStrip } from "@/components/cloud/site/trust-strips";
import {
  AiExploreMore,
  AiFinalCTA,
  faqJsonLd,
} from "@/components/cloud/site/ai-shared";
import { useContactDialog } from "@/components/cloud/site/contact-dialog";

const FAQS = [
  {
    q: "Are there AI companies in Pakistan?",
    a: "Yes — a growing ecosystem across Lahore, Karachi, and Islamabad, spanning enterprise AI integrations, applied computer vision, LLM-powered SaaS, and generative AI apps. BrainTEL sits at the infrastructure layer of that ecosystem — GPU hosting, colocation, and a full sovereign AI platform delivered locally.",
  },
  {
    q: "Which is the best AI company in Pakistan?",
    a: "\"Best\" depends on what you need. If you need custom AI product engineering, several strong software houses can do it. If you need the AI to run on infrastructure that stays inside Pakistan — with GPU hardware you can point to, data residency you can prove, and PKR billing — BrainTEL is the only Pakistan-based provider that does the full stack: data center, GPU hosting, colocation, and an agentic sovereign AI platform.",
  },
  {
    q: "Does Pakistan have AI infrastructure?",
    a: "Yes. BrainTEL operates Tier III-compliant data centers with NVIDIA GPU capacity (A100 / H100 / L40S) hosted in-country, plus air-gapped and on-prem deployment options for regulated data. This is real, PTA-licensed local infrastructure — not a reseller of overseas capacity.",
  },
  {
    q: "Do you build AI solutions or just host them?",
    a: "Both. BrainTEL delivers the infrastructure (data center, GPU hosting, colocation, private cloud) AND a full sovereign AI platform: agentic AI framework, multi-tenant workspaces, digital asset management with AI tagging, OCR, semantic search, speech-to-text, and computer vision. You can host your own models on our infrastructure, or deploy our platform end-to-end.",
  },
  {
    q: "Can BrainTEL deploy AI on-prem or air-gapped?",
    a: "Yes. For regulated industries — banking, health, government, defence — we deploy the AI platform inside your own facility or in a fully air-gapped environment. Data and model weights never leave your perimeter.",
  },
  {
    q: "Do you support Urdu and other regional languages?",
    a: "Yes. Our AI platform ships with native support for Urdu, English, and industry-specific terminology across OCR, transcription, and LLM workflows.",
  },
];

export const Route = createFileRoute("/services/cloud/ai-company-in-pakistan")({
  component: AiCompanyPage,
  // head: () => ({
  //   meta: [
  //     { title: "AI Company in Pakistan | BrainTEL — Infrastructure, Hosting & Sovereign AI" },
  //     { name: "description", content: "BrainTEL is Pakistan's AI company — GPU hosting, AI colocation, private AI cloud, and a full agentic sovereign AI platform. Locally hosted, PKR billing, 24/7 support." },
  //     { name: "keywords", content: "ai company in pakistan, ai companies in pakistan, artificial intelligence companies in pakistan, top ai companies in pakistan, ai development company pakistan, ai solutions pakistan" },
  //     { property: "og:title", content: "AI Company in Pakistan | BrainTEL" },
  //     { property: "og:description", content: "Locally hosted GPU infrastructure and a full sovereign AI platform — from BrainTEL, Pakistan's AI infrastructure company." },
  //     { property: "og:type", content: "website" },
  //     { name: "twitter:card", content: "summary_large_image" },
  //     { name: "twitter:title", content: "AI Company in Pakistan | BrainTEL" },
  //     { name: "twitter:description", content: "Infrastructure, hosting, and sovereign AI — one Pakistan-based team." },
  //   ],
  //   scripts: [
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify({
  //         "@context": "https://schema.org",
  //         "@type": "Organization",
  //         name: "BrainTEL",
  //         alternateName: "Brain Telecommunication Ltd",
  //         url: "/services/cloud/ai-company-in-pakistan",
  //         areaServed: { "@type": "Country", name: "Pakistan" },
  //         knowsAbout: [
  //           "AI infrastructure",
  //           "GPU server hosting",
  //           "AI colocation",
  //           "Private AI cloud",
  //           "Sovereign AI",
  //           "LLM hosting",
  //           "Agentic AI",
  //           "Digital Asset Management",
  //           "Computer vision",
  //           "Speech-to-text",
  //         ],
  //         description: "Pakistan's AI infrastructure and sovereign AI platform company.",
  //       }),
  //     },
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify(faqJsonLd(FAQS.map((f) => ({ q: f.q, a: f.a })))),
  //     },
  //   ],
  // }),
  head: () => ({
    meta: [
      { title: "AI Company in Pakistan | BrainTEL — Infrastructure, Hosting & Sovereign AI" },
      { name: "description", content: "BrainTEL is Pakistan's AI company — GPU hosting, AI colocation, private AI cloud, and a full agentic sovereign AI platform. Locally hosted, PKR billing, 24/7 support." },
      { name: "keywords", content: "ai company in pakistan, ai companies in pakistan, artificial intelligence companies in pakistan, top ai companies in pakistan, ai development company pakistan, ai solutions pakistan" },
      { property: "og:title", content: "AI Company in Pakistan | BrainTEL" },
      { property: "og:description", content: "Locally hosted GPU infrastructure and a full sovereign AI platform — from BrainTEL, Pakistan's AI infrastructure company." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-company-in-pakistan" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Company in Pakistan | BrainTEL" },
      { name: "twitter:description", content: "Infrastructure, hosting, and sovereign AI — one Pakistan-based team." },
    ],
    links: [{ rel: "canonical", href: "/ai-company-in-pakistan" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BrainTEL",
          alternateName: "Brain Telecommunication Ltd",
          url: "/ai-company-in-pakistan",
          areaServed: { "@type": "Country", name: "Pakistan" },
          knowsAbout: [
            "AI infrastructure",
            "GPU server hosting",
            "AI colocation",
            "Private AI cloud",
            "Sovereign AI",
            "LLM hosting",
            "Agentic AI",
            "Digital Asset Management",
            "Computer vision",
            "Speech-to-text",
          ],
          description: "Pakistan's AI infrastructure and sovereign AI platform company.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(FAQS.map((f) => ({ q: f.q, a: f.a })))),
      },
    ],
  }),
});

const CAPABILITIES = [
  { icon: Cpu, t: "GPU Server Hosting", d: "NVIDIA A100 / H100 / L40S servers, dedicated to your team, billed in PKR." },
  { icon: Warehouse, t: "AI Colocation", d: "Bring your own GPU cluster — high-density power, cooling, remote hands." },
  { icon: Boxes, t: "Private AI Cloud", d: "Dedicated multi-tenant GPU cloud isolated for your organization." },
  { icon: Sparkles, t: "LLM Hosting & Inference", d: "Open-source and fine-tuned LLMs served at low latency from Pakistan." },
  { icon: BrainCircuit, t: "Agentic AI Framework", d: "Deploy department-specific AI agents with multi-agent orchestration." },
  { icon: Database, t: "Digital Asset Management", d: "Centralized AI-tagged repository for images, video, documents, audio." },
  { icon: ScanText, t: "OCR & NLP Processing", d: "Turn scanned documents into searchable text with entity extraction." },
  { icon: Search, t: "Intelligent Search & RAG", d: "Natural-language semantic search across your structured and unstructured data." },
  { icon: Mic, t: "Speech-to-Text", d: "Transcription with speaker diarization for calls, meetings, and video." },
  { icon: Eye, t: "Computer Vision", d: "Face, object, and scene detection across images and video streams." },
  { icon: Users, t: "Multi-Tenant Workspaces", d: "Isolated spaces per department with folder-level model assignment." },
  { icon: Shield, t: "Sovereign & Air-Gapped", d: "On-prem or air-gapped deployment for regulated data. Nothing leaves your perimeter." },
];

const INDUSTRIES = [
  "Banking & Financial Services — compliance-ready AI on data that never leaves Pakistan.",
  "Healthcare — HIPAA-aligned clinical intelligence, secure DAM for medical assets.",
  "Government & Public Sector — sovereign, air-gapped AI for regulated workloads.",
  "Oil, Gas & Energy — HSE incident review, maintenance RAG, compliance packs.",
  "Telecom & Enterprise — agentic workflows, call transcription, knowledge search.",
  "Media & Broadcasting — AI-tagged DAM, scene detection, multilingual transcription.",
];

function AiCompanyPage() {
  const { open } = useContactDialog();
  return (
    <div className="min-h-screen bg-surface text-navy">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-hairline bg-surface">
        <div className="container-x section-y">
          <Eyebrow tone="green" withDot>
            Pakistan's AI infrastructure company
          </Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            AI Company in Pakistan — Infrastructure, Hosting &{" "}
            <span className="text-green">Sovereign AI</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lede text-navy/70">
            BrainTEL is Pakistan's AI infrastructure and platform company. We
            operate the local data centers, host the GPUs, and ship a full
            agentic sovereign AI platform — one team, one contract, one PKR
            invoice. Whether you need to run your own models or deploy an
            end-to-end AI system on regulated data, we handle the stack.
          </p>
          <CTAPair
            className="mt-9"
            primaryLabel="Discuss an AI project"
            secondaryLabel="Chat on WhatsApp"
            microcopy="Written scoping doc + PKR quote within 1 business day"
            intent="AI Company Pakistan · Hero CTA"
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TierIIIBadge />
            <span className="text-xs font-bold text-navy/55">
              PTA-licensed network · In-country data residency
            </span>
          </div>
          <div className="mt-10">
            <StatCluster
              items={[
                { k: "Tier III", v: "Compliant DC" },
                { k: "24/7", v: "Human support" },
                { k: "PKR", v: "Billing, no FX" },
                { k: "In-country", v: "Data residency" },
              ]}
            />
          </div>
        </div>
      </section>

      <CustomersStrip tone="white" />

      {/* Across the AI stack (3 cards) */}
      <Section tone="surface" id="stack">
        <div className="mb-14">
          <SectionHeading
            eyebrow="What BrainTEL does"
            title={<>Across the entire AI stack — <span className="text-green">locally</span>.</>}
            lede="Three interlocking capabilities. You can start anywhere and expand."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard icon={Warehouse} title="Infrastructure">
            <p>
              Tier III-compliant data centers in Pakistan with high-density
              power, cooling, and PTA-licensed network. Your hardware or ours.
            </p>
          </FeatureCard>
          <FeatureCard icon={Cpu} title="Hosting">
            <p>
              GPU servers, private AI cloud, and LLM inference — reserved,
              scalable, and billed in PKR. No USD invoices, no FX surprises.
            </p>
          </FeatureCard>
          <FeatureCard icon={BrainCircuit} title="Sovereign AI Platform">
            <p>
              A full agentic sovereign AI platform — DAM, OCR, semantic search,
              speech-to-text, computer vision, multi-tenant workspaces — with
              on-prem and air-gapped deployment options.
            </p>
          </FeatureCard>
        </div>
      </Section>

      {/* Capabilities grid */}
      <Section tone="white" id="capabilities">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Capabilities"
            title="AI services BrainTEL delivers"
            lede="Every capability below is deployable on your infrastructure or ours, standalone or as part of an end-to-end platform."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <div
              key={c.t}
              className="card-surface card-surface-hover flex gap-4 p-6"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-extrabold text-navy">
                  {c.t}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/65">
                  {c.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sovereign AI, built for Pakistan */}
      <Section tone="navy" id="sovereign">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="Sovereign AI"
              title={<>Built for <span className="text-green">Pakistan</span>.</>}
              lede="Data sovereignty is not a preference — it's a compliance requirement for the industries we serve. We deploy AI where your data lives: in-country, on-prem, or fully air-gapped."
            />
          </div>
          <div className="rounded-[var(--radius-card)] border border-white/15 bg-navy/55 p-6 shadow-[var(--shadow-card)] backdrop-blur-md lg:col-span-7 lg:p-8">
            <Eyebrow tone="on-navy">Industries we serve</Eyebrow>
            <ul className="mt-5 space-y-4">
              {INDUSTRIES.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-white/80">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button
                type="button"
                onClick={() =>
                  open({
                    intent: "AI Company Pakistan · Sovereign CTA",
                    title: "Discuss an AI project",
                    subtitle:
                      "Tell us your use case, data-sensitivity constraints, and deployment target. We'll come back with a scoping doc within 1 business day.",
                  })
                }
                className={CTA_PRIMARY + " w-full sm:w-auto"}
              >
                Discuss an AI project
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust */}
      <Section tone="white" id="trust" className="!pb-[var(--section-y-tight)]">
        <div className="mb-10 text-center">
          <SectionHeading
            align="center"
            eyebrow="Trust"
            title="Why AI teams host with BrainTEL"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Tier III Compliant", d: "Locally operated data centers with N+1 power and redundant cooling." },
            { t: "PTA-Licensed Network", d: "Carrier-neutral connectivity with real 10Gbps port options." },
            { t: "PKR Billing", d: "Transparent line-items in local currency. Zero FX exposure." },
            { t: "24/7 Human Support", d: "Engineers you can call in Urdu or English. Tickets answered in minutes." },
          ].map((t) => (
            <div key={t.t} className="card-surface p-6">
              <h3 className="font-display text-base font-extrabold text-navy">
                {t.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                {t.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Cross-link to infra */}
      <Section tone="surface" id="infra-crosslink" className="!pt-[var(--section-y-tight)]">
        <div className="rounded-[var(--radius-card)] border border-hairline bg-white p-8 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-h3 font-extrabold text-navy">
                Just need the infrastructure?
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy/65">
                If you're already building AI and just need locally hosted GPU
                capacity, colocation, or LLM inference — start on the
                infrastructure pillar.
              </p>
            </div>
            <Link
              to="/services/cloud/ai-data-center-pakistan"
              className={CTA_PRIMARY + " flex-none"}
            >
              AI Data Center in Pakistan
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white" id="faq" containerClassName="max-w-4xl">
        <div className="mb-12 text-center">
          <SectionHeading
            align="center"
            eyebrow="FAQs"
            title="Frequently asked questions"
          />
        </div>
        <FAQ items={FAQS} />
      </Section>

      <AiExploreMore currentPath="/services/cloud/ai-company-in-pakistan" tone="surface" />

      <AiFinalCTA
        intent="AI Company Pakistan · Final CTA"
        title={<>Build your AI in <span className="text-green">Pakistan</span>.</>}
        subtitle="One team for infrastructure, hosting, and sovereign AI. Tell us what you're building — written scoping doc and PKR quote within 1 business day."
      />

      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
