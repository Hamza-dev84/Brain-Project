import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  PenTool,
  Package,
  ClipboardList,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Snowflake,
  Network,
  BadgeCheck,
  Cpu,
  Server,
  Building2,
  HardDrive,
  LifeBuoy,
  Layers,
  Wrench,
} from "lucide-react";
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
import { CustomersStrip } from "@/components/cloud/site/trust-strips";
import heroAsset from "@/assets/cloud/data-center-solutions-hero.webp";
import aiReadyAsset from "@/assets/cloud/data-center-ai-ready.webp";
import locationsAsset from "@/assets/cloud/data-center-locations.webp";
import solutionsAsset from "@/assets/cloud/data-center-solutions.webp";
import PageMeta from "@/components/cloud/site/PageMeta";
import DataCenterSolutionSchema from "@/pages/schemaFiles/cloud-schema-files/DataCenterSolutionSchema";

const CANONICAL = "https://brain.net.pk/cloud/data-center-solutions-pakistan";

const SOLUTIONS_INCLUDED = [
  { icon: PenTool, t: "Design & Engineering", d: "Power, cooling, layout, and redundancy planning tailored to your workloads and growth curve." },
  { icon: Package, t: "Procurement & Supply", d: "Sourcing and delivery of the infrastructure — racks, PDUs, cooling, security, and networking gear." },
  { icon: ClipboardList, t: "Implementation & Project Management", d: "End-to-end delivery with a single point of accountability, from site prep through go-live." },
  { icon: CheckCircle2, t: "Testing, Commissioning & Handover", d: "Full commissioning and documented handover so your team can operate the facility with confidence." },
];

const UPGRADES = [
  "Infrastructure audits and gap assessments",
  "Power and cooling system upgrades",
  "Security and access control improvements",
  "Network redundancy and connectivity upgrades",
  "Guidance toward Tier certification standards, if that's your goal",
];

const HOSTING_SERVICES = [
  { icon: Server, t: "Colocation Services", d: "Secure rack, cage, and suite space for your servers and network hardware, inside a facility we operate and maintain around the clock." },
  { icon: LifeBuoy, t: "Managed Hosting", d: "We manage the infrastructure layer — power, cooling, connectivity, and uptime — so your team only manages applications and data." },
  { icon: BadgeCheck, t: "Tier 3 Data Center in Pakistan", d: "Concurrently maintainable infrastructure where critical power and cooling components can be serviced without taking your hosted systems offline. Backed by a documented uptime SLA." },
  { icon: Cpu, t: "AI Workload Hosting", d: "High-density AI and compute workloads — training, inference, and large-scale data processing — hosted with us instead of built from scratch." },
  { icon: HardDrive, t: "Disaster Recovery", d: "Failover-ready backup environments hosted in our facility, keeping your operations running through outages or hardware failures." },
  { icon: Network, t: "Network Connectivity", d: "Carrier-neutral connections through multiple upstream providers, so no single point of failure takes your hosted infrastructure offline." },
];

const DELIVERABLES = [
  { icon: BadgeCheck, t: "Tier 3 Certified Facility", d: "Guaranteed uptime SLA, in writing." },
  { icon: Zap, t: "Redundant Power", d: "Dual feeds, UPS, and generators — no single outage takes you down." },
  { icon: Snowflake, t: "Precision Cooling", d: "Hardware stays within safe limits year-round." },
  { icon: ShieldCheck, t: "Biometric Access & 24/7 Surveillance", d: "Only authorized personnel reach your equipment." },
  { icon: Network, t: "Carrier-Neutral Connectivity", d: "No dependency on a single internet provider." },
  { icon: LifeBuoy, t: "24/7 Local Technical Support", d: "Real people, real response times." },
];

const CITIES: Array<{ name: string; blurb: string; to: "/services/cloud/ai-companies-in-lahore" | "/services/cloud/ai-companies-in-karachi" | "/services/cloud/ai-companies-in-islamabad" }> = [
  { name: "Lahore", blurb: "Supporting Lahore's textile, manufacturing, fintech, and tech sectors with local project delivery and hosting support — low latency, local teams, compliance-ready.", to: "/services/cloud/ai-companies-in-lahore" },
  { name: "Karachi", blurb: "Serving Pakistan's financial and trade hub with data center design, upgrades, and high-availability hosting for banks, logistics, and e-commerce businesses.", to: "/services/cloud/ai-companies-in-karachi" },
  { name: "Islamabad", blurb: "Secure, compliance-focused data center solutions and hosting for government-adjacent institutions and enterprise head offices in the capital.", to: "/services/cloud/ai-companies-in-islamabad" },
];

const VETTING = [
  "Are they designing and building your data center, or hosting you in theirs? The two come with very different guarantees.",
  "If it's a build project, what design standards and delivery timelines are they committing to, in writing?",
  "If it's hosting, is the uptime SLA documented, and is the Tier rating independently certified or self-described?",
  "How many independent upstream carriers does their facility run on?",
  "What does support actually look like, 24/7, or office hours only?",
];

const FAQS = [
  { q: "What's the difference between a data center solutions provider and a data center hosting provider?", a: "A data center solutions provider designs, builds, or upgrades a data center that you then own and operate — it's a project-based engagement. A hosting provider runs its own facility and hosts your infrastructure inside it, backed by an uptime SLA. We offer both, depending on whether you want to own your infrastructure or host it with us." },
  { q: "Do you guarantee uptime for data centers you design and build?", a: "Uptime guarantees apply to infrastructure we host and operate ourselves, not to facilities we design and hand over to a client. For build and upgrade projects, our commitments are around design standards, build quality, and delivery timelines rather than an ongoing uptime SLA." },
  { q: "We already have a data center — can you help us upgrade it?", a: "Yes. We assess your existing infrastructure and provide guidance and implementation support for upgrades to power, cooling, security, or network systems, without requiring a full rebuild." },
  { q: "Is your own data center Tier 3 certified?", a: "Yes. The facility we operate for hosting clients is built to Tier 3 standards, meaning critical components can be maintained without downtime. This is backed by a documented uptime SLA for hosted clients." },
  { q: "Which cities do you serve?", a: "We support clients with data center solutions and hosting in Lahore, Karachi, and Islamabad, with local teams in each location. Coverage is expanding to additional cities as demand grows." },
  { q: "Can you support AI workloads?", a: "Yes, in both directions — we can design and build AI-ready data center infrastructure for clients, or host AI workloads directly in our own facility if you'd rather not build your own." },
];

const META_DESC =
  "BrainCLOUD designs, builds, and hosts data center infrastructure across Pakistan — Tier 3 facilities, AI-ready compute, and SLA-backed hosting in Lahore, Karachi, and Islamabad.";

export const Route = createFileRoute("/services/cloud/data-center-solutions-pakistan")({
  component: DataCenterSolutionsPage,
  // head: () => ({
  //   meta: [
  //     { title: "Data Center Solutions in Pakistan | BrainCLOUD — Design, Build & Tier 3 Hosting" },
  //     { name: "description", content: META_DESC },
  //     { name: "keywords", content: "data center solutions pakistan, data center company pakistan, tier 3 data center pakistan, data center hosting, ai ready data center, data center design build" },
  //     { property: "og:title", content: "Data Center Solutions in Pakistan | BrainCLOUD" },
  //     { property: "og:description", content: META_DESC },
  //     { property: "og:type", content: "website" },
  //     { property: "og:image", content: heroAsset },
  //     { name: "twitter:card", content: "summary_large_image" },
  //     { name: "twitter:image", content: heroAsset },
  //   ],
  //   scripts: [
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify({
  //         "@context": "https://schema.org",
  //         "@type": "Service",
  //         name: "Data Center Solutions",
  //         serviceType: ["Data Center Design & Build", "Data Center Hosting", "Colocation", "Managed Hosting"],
  //         provider: { "@type": "Organization", name: "BrainCLOUD", url: "https://brain.net.pk/cloud" },
  //         areaServed: [
  //           { "@type": "Country", name: "Pakistan" },
  //           { "@type": "City", name: "Lahore" },
  //           { "@type": "City", name: "Karachi" },
  //           { "@type": "City", name: "Islamabad" },
  //         ],
  //       }),
  //     },
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify({
  //         "@context": "https://schema.org",
  //         "@type": "FAQPage",
  //         mainEntity: FAQS.map((f) => ({
  //           "@type": "Question",
  //           name: f.q,
  //           acceptedAnswer: { "@type": "Answer", text: f.a },
  //         })),
  //       }),
  //     },
  //   ],
  // }),
});

function DataCenterSolutionsPage() {
  return (
    <div className="min-h-screen bg-surface text-navy">
      <PageMeta
        title="Data Center Solutions in Pakistan | Enterprise Infrastructure | BrainCLOUD"
        description="BrainCLOUD delivers enterprise data center solutions in Pakistan, including data center design, infrastructure deployment, upgrades, hosting and technical support for modern businesses."
        schema={DataCenterSolutionSchema}
      />
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-hairline bg-surface">
        <img width={1376} height={768} decoding="async"
          src={heroAsset}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-60 md:w-[70%] md:opacity-100"
          loading="eager"
          fetchPriority="high"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface from-30% via-surface/85 via-60% to-surface/30 md:from-surface md:from-25% md:via-surface/70 md:via-55% md:to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent md:hidden"
        />
        <div className="container-x section-y relative z-10">
          <Eyebrow tone="green" withDot>Data center solutions</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            Reliable Data Center Solutions for Businesses{" "}
            <span className="text-green">Across Pakistan.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lede text-navy/70">
            Enterprise-grade
            <a
              href="/services/cloud/colocation-services-pakistan"
              className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
            >
              {" "}
              colocation,{" "}
            </a>
            <a
              href="/services/cloud/web-hosting-pakistan"
              className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
            >
              {" "}
              hosting,{" "}
            </a>
            and
            <a
              href="/services/cloud"
              className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
            >
              {" "}
              managed infrastructure{" "}
            </a> —
            engineered for uptime, security, and scale. We design, host, and manage data center infrastructure for businesses across Pakistan, backed by Tier 3-certified facilities and AI-ready compute environments. World-class reliability with the quick support of a local team.
          </p>
          <CTAPair
            className="mt-9"
            primaryLabel="Get a Free Consultation"
            secondaryLabel="Chat on WhatsApp"
            microcopy="We reply within 1 business hour · Available 24/7"
            intent="Data Center Solutions · Hero"
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TierIIIBadge />
            <span className="text-xs font-bold text-navy/55">
              PTA-licensed network · Operated by BrainTEL
            </span>
          </div>
        </div>
      </section>


      <CustomersStrip tone="white" />

      {/* TWO WAYS */}
      <Section tone="white" id="two-ways">
        <div className="mb-14">
          <SectionHeading
            eyebrow="How we work"
            title="Two Ways We Support Your Infrastructure"
            lede="We work with businesses in two distinct ways, and it's worth understanding the difference before you reach out. Most clients start with one and stay for years. Some use both."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard icon={Wrench} title="Data Center Solutions">
            <p>
              You need a data center designed, built, or upgraded. We handle the
              design, infrastructure, implementation, and project delivery. You
              own and operate the facility once it's live.
            </p>
            <a href="#solutions" className="mt-5 inline-flex items-center gap-1 font-display text-sm font-extrabold uppercase tracking-[0.12em] text-green hover:underline">
              Explore design &amp; build →
            </a>
          </FeatureCard>
          <FeatureCard icon={Building2} title="Data Center Hosting">
            <p>
              You don't want to build or run your own facility. You host your
              infrastructure in our data center instead, backed by a guaranteed
              uptime SLA.
            </p>
            <a href="#hosting" className="mt-5 inline-flex items-center gap-1 font-display text-sm font-extrabold uppercase tracking-[0.12em] text-green hover:underline">
              Explore hosting with us →
            </a>
          </FeatureCard>
        </div>
      </Section>

      {/* SOLUTIONS — Design, Build & Implementation */}
      <Section tone="surface" id="solutions">
        <div className="relative mb-14 overflow-hidden min-h-[420px] md:min-h-[460px]">
          <img width={1376} height={768} decoding="async"
            src={solutionsAsset}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-50 md:w-[65%] md:opacity-100"
            loading="lazy"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface from-30% via-surface/85 via-60% to-surface/30 md:from-surface md:from-25% md:via-surface/70 md:via-55% md:to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent md:hidden"
          />
          <div className="relative z-10 max-w-2xl">
            <SectionHeading
              eyebrow="Design, Build & Implementation"
              title="Data Center Solutions — Built From the Ground Up."
              lede="As a data center solutions company, we design and deliver complete data centers for clients from the ground up. This covers site assessment, architectural and MEP design, power and cooling infrastructure, network design, and full implementation — handed over ready to operate."
            />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS_INCLUDED.map((s) => (
            <FeatureCard key={s.t} icon={s.icon} title={s.t}>
              <p>{s.d}</p>
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10 rounded-[var(--radius-card)] border border-navy/10 bg-white p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-navy/70">
            <span className="font-display font-extrabold text-navy">Note on SLAs:</span>{" "}
            This is a project-based engagement. We design and build the facility — you own and operate it. Because we're not the ones hosting or running your data center day-to-day, this service doesn't carry an uptime SLA; the guarantees here are around design standards, build quality, and delivery timelines.
          </p>
        </div>
      </Section>

      {/* UPGRADES */}
      <Section tone="white" id="upgrades">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Upgrades & Support"
              title="Data Center Upgrades & Infrastructure Support"
              lede="Already running your own data center but need to modernize it? We help businesses upgrade existing infrastructure without a full rebuild — improving power redundancy, cooling efficiency, security systems, or network architecture based on where your current setup falls short."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {UPGRADES.map((u) => (
                <li key={u} className="flex items-start gap-3 rounded-[var(--radius-card)] border border-hairline bg-surface p-4">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-base leading-relaxed text-navy/80">{u}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-navy/60">
              As with new builds, this is advisory and implementation support for infrastructure you own — not a hosted service, so it doesn't carry an uptime SLA either.
            </p>
          </div>
        </div>
      </Section>

      {/* AI-READY */}
      <section id="ai-ready" className="relative overflow-hidden bg-surface section-y">
        <img width={1376} height={768} decoding="async"
          src={aiReadyAsset}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-50 md:w-[60%] md:opacity-100"
          loading="lazy"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface from-30% via-surface/85 via-60% to-surface/30 md:from-surface md:from-30% md:via-surface/70 md:via-60% md:to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent md:hidden"
        />
        <div className="container-x relative z-10">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="AI-Ready"
              title="AI-Ready Data Center Design"
              lede={
                <>
                  Businesses building
                  <a
                    href="/services/software"
                    className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
                  >
                    {" "}
                    AI-driven products{" "}
                  </a>
                  or large-scale data platforms need data centers designed
                  differently — higher rack density, advanced thermal
                  management, and networking built for sustained, heavy compute.
                  We design and build AI-ready data centers as part of our
                  solutions offering, whether that's a new facility or an
                  upgrade to an existing one.
                </>
              }
            />
            <div className="mt-8">
              <CTAPair
                primaryLabel="Discuss an AI-Ready Build"
                secondaryLabel="Chat on WhatsApp"
                microcopy={null}
                intent="Data Center Solutions · AI-Ready design"
              />
            </div>
          </div>
        </div>
      </section>


      {/* HOSTING — dark section */}
      <Section tone="navy" id="hosting">
        <div className="mb-14">
          <SectionHeading
            tone="dark"
            eyebrow="Our Own Tier 3 Facility"
            title="Data Center Hosting — Host Your Infrastructure With Us."
            lede="If you'd rather not build or operate your own data center, you can host your infrastructure in ours. This is where our uptime commitments apply — because we're the ones running the facility."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HOSTING_SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.t}
                className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:border-green/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] bg-green/15 text-green">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-h3 font-extrabold text-white!">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* WHAT HOSTING CLIENTS GET */}
      <Section tone="white" id="hosting-benefits">
        <div className="mb-14">
          <SectionHeading
            eyebrow="What our hosting clients get"
            title="Guarantees We Put in Writing."
            lede="What we deliver at the infrastructure layer, and what it means for your team."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DELIVERABLES.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.t} className="card-surface card-surface-hover flex gap-4 p-6">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-card)] text-green">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-h3 font-extrabold text-navy">{d.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/65">{d.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* LOCATIONS */}
      <section id="locations" className="relative bg-surface section-y">
        <div className="relative overflow-hidden">
          <img width={1200} height={896} decoding="async"
            src={locationsAsset}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-50 md:w-[60%] md:opacity-100"
            loading="lazy"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface from-30% via-surface/85 via-60% to-surface/30 md:from-surface md:from-30% md:via-surface/70 md:via-60% md:to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent md:hidden"
          />
          <div className="container-x relative z-10 py-16 md:py-24">
            <div className="max-w-xl">
              <SectionHeading
                eyebrow="Locations"
                title="Data Center Locations Across Pakistan"
                lede="Whether you need a data center built, an existing one upgraded, or space to host your infrastructure, our teams work with clients across Pakistan's major business hubs."
              />
            </div>
          </div>
        </div>
        <div className="container-x mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {CITIES.map((c) => (
              <div key={c.name} className="card-surface card-surface-hover flex h-full flex-col p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
                  <Layers className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-h3 font-extrabold text-navy">
                  Data Center in {c.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/65">{c.blurb}</p>
                <Link
                  to={c.to}
                  className="mt-6 inline-flex items-center gap-1 font-display text-sm font-extrabold uppercase tracking-[0.12em] text-green hover:underline"
                >
                  View {c.name} services →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-navy/55">
            Coverage is expanding to additional cities — Faisalabad, Multan, and Rawalpindi — as demand grows.
          </p>
        </div>
      </section>


      {/* VETTING */}
      <Section tone="white" id="vetting">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Before you choose"
              title="Ask Any Data Center Provider in Pakistan These Five Questions."
              lede="We're happy to answer all of this directly, with documentation on request."
            />
          </div>
          <ol className="lg:col-span-7">
            {VETTING.map((q, i) => (
              <li
                key={q}
                className={
                  "group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-hairline py-6 transition-colors duration-[var(--dur-base)] ease-[var(--ease-out)] hover:bg-surface" +
                  (i === VETTING.length - 1 ? " border-b" : "")
                }
              >
                <span className="font-display text-h3 font-extrabold tabular-nums text-navy/25 transition-colors duration-[var(--dur-base)] ease-[var(--ease-out)] group-hover:text-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lede leading-snug text-navy/85">{q}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="surface" id="faq" containerClassName="max-w-4xl">
        <div className="mb-12 text-center">
          <SectionHeading align="center" eyebrow="FAQs" title="Frequently Asked Questions" />
        </div>
        <FAQ items={FAQS} />
      </Section>

      {/* FINAL CTA */}
      <section id="cta" className="section-y bg-surface">
        <div className="container-x" style={{ maxWidth: "72rem" }}>
          <div className="relative overflow-hidden rounded-[var(--radius-jumbo)] border border-white/10 bg-navy px-8 section-y text-center sm:px-16">
            <span aria-hidden className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-green/50" />
            <span aria-hidden className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-green/50" />
            <span aria-hidden className="absolute left-0 bottom-0 h-10 w-10 border-l-2 border-b-2 border-green/50" />
            <span aria-hidden className="absolute right-0 bottom-0 h-10 w-10 border-r-2 border-b-2 border-green/50" />
            <div className="relative">
              <h2 className="font-display text-h2 font-extrabold text-white!">
                Ready to <span className="text-green">Get Started</span>?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lede text-white/75">
                Tell us what you need — a data center designed and built, an existing facility upgraded, or space to host your infrastructure with us — and we'll point you to the right service.
              </p>
              <div className="mt-10 flex justify-center">
                <CTAPair
                  align="center"
                  tone="dark"
                  primaryLabel="Request a Quote"
                  secondaryLabel="Chat on WhatsApp"
                  microcopy="We reply within 1 business hour · Available 24/7"
                  intent="Data Center Solutions · Final CTA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
