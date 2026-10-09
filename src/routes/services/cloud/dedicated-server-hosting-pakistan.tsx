import { createFileRoute } from "@tanstack/react-router";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Cpu, MemoryStick, Network, MonitorCog } from "lucide-react";
import {
  IconSecurity as ShieldCheck,
  IconServer as ServerCog,
  IconStorage as HardDrive,
  IconLock as LockKeyhole,
  IconHeadphones as Headphones,
  IconGauge as Gauge,
  IconWhatsApp as MessageCircle,
  IconCloud,
  IconRefresh,
  IconNetwork,
  IconBriefcase,
  IconRocket,
  IconBuilding,
  IconQuestion,
  IconFirewall,
} from "@/components/cloud/icons";
import {
  SiteHeader,
  SiteFooter,
  SiteFinalCTA,
  SiteMobileStickyCTA,
  WHATSAPP_HREF,
  FOCUS_RING,
  CTA_PRIMARY,
  CTA_SECONDARY,
} from "@/components/cloud/site/chrome";
import { LogoStrip, type LogoItem } from "@/components/cloud/site/LogoStrip";
import { ToolingStrip, CustomersStrip, OSStrip, PaymentsStrip } from "@/components/cloud/site/trust-strips";
import { DotPattern, CircuitPattern } from "@/components/cloud/site/BgPatterns";
import { SolutionsGrid } from "@/components/cloud/site/SolutionsGrid";
import { ClientTestimonials } from "@/components/cloud/site/client-testimonials";
import { Testimonial, TierIIIBadge, Section, SectionHeading, FAQ } from "@/components/cloud/site/primitives";
import { useContactDialog } from "@/components/cloud/site/contact-dialog";

import dedicatedHero from "@/assets/cloud/dedicated-hero-v2.webp";
import managedBg from "@/assets/cloud/managed-bg.webp";
import dcTier3 from "@/assets/cloud/vps/datacentre-tier3.webp";
import dcNoc from "@/assets/cloud/vps/noc-room.webp";
import dcFibre from "@/assets/cloud/vps/fibre-backbone.webp";
import infraPower from "@/assets/cloud/vps/infra-power.webp";
import infraCooling from "@/assets/cloud/vps/infra-cooling.webp";
import infraNetwork from "@/assets/cloud/vps/infra-network.webp";
import infraHardware from "@/assets/cloud/vps/infra-hardware.webp";
import infraDdos from "@/assets/cloud/vps/infra-ddos.webp";
import infraMonitoring from "@/assets/cloud/vps/infra-monitoring.webp";
import ucEcommerce from "@/assets/cloud/vps/uc-ecommerce.webp";
import ucGaming from "@/assets/cloud/vps/uc-gaming.jpg";
import ucAgency from "@/assets/cloud/vps/uc-agency.jpg";
import ucBusiness from "@/assets/cloud/vps/uc-business-apps.webp";
import ucDatabase from "@/assets/cloud/vps/uc-database.webp";
import PageMeta from "@/components/cloud/site/PageMeta";
import DedicatedSchema from "@/pages/schemaFiles/cloud-schema-files/DedicatedSchema";

export const Route = createFileRoute("/services/cloud/dedicated-server-hosting-pakistan")({
  component: DedicatedPage,
  // head: () => ({
  //   meta: [
  //     { title: "Dedicated Server Hosting in Pakistan — BrainCLOUD" },
  //     {
  //       name: "description",
  //       content:
  //         "BrainCLOUD dedicated server hosting in Pakistan — NVMe SSD, full root access, DDoS protection, Linux & Windows, 24/7 support. Starter, Professional, and Enterprise plans.",
  //     },
  //     {
  //       name: "keywords",
  //       content:
  //         "dedicated server hosting pakistan, dedicated server pakistan, managed dedicated server, gaming dedicated server, enterprise dedicated hosting, NVMe dedicated server",
  //     },
  //     {
  //       property: "og:title",
  //       content: "Enterprise-Grade Dedicated Server Hosting in Pakistan.",
  //     },
  //     {
  //       property: "og:description",
  //       content:
  //         "Top hardware, NVMe SSD, full root access, 24/7 tech support. Built for businesses, e-commerce, gaming, and SaaS.",
  //     },
  //     { property: "og:type", content: "product" },
  //     { property: "og:image", content: dedicatedHero },
  //     { name: "twitter:card", content: "summary_large_image" },
  //     { name: "twitter:image", content: dedicatedHero },
  //   ],
  // }),
});

/* ----------------------------- data ----------------------------- */

const FEATURES = [
  {
    icon: HardDrive,
    t: "NVMe SSD Storage, Standard on Every Plan.",
    b: "Most providers still ship entry-level servers with SATA SSDs. Every BrainCLOUD dedicated server comes with NVMe storage as the baseline — up to 7x faster read speeds, lower latency, and noticeably snappier application performance out of the box.",
  },
  {
    icon: ShieldCheck,
    t: "DDoS Protection, Built In, Not Billed Separately",
    b: "Network-layer mitigation is active on every plan from day one. Attacks are filtered before they reach your server. No manual configuration. No add-on purchase. Enterprise customers get advanced scrubbing for large-scale threats.",
  },
  {
    icon: LockKeyhole,
    t: "Full Root & Admin Access",
    b: "Install any software. Set custom firewall rules. Configure the server exactly the way your team needs it. Nothing is locked or restricted.",
  },
  {
    icon: Headphones,
    t: "24/7 Managed Support. Real Engineers, Not Scripts",
    b: "Our support team is available around the clock via live whatsapp chat, phone, and ticket. Server engineers, not frontline agents — so when something breaks at 2 AM, it actually gets fixed.",
  },
  {
    icon: Gauge,
    t: "99.99% Uptime, Contractually Backed",
    b: (
      <>
        Redundant power, redundant cooling, and
        <a
          href="/services/internet/business-internet"
          className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
        >
          {" "}multiple upstream ISP links{" "}
        </a>
        keep your server stable. The SLA comes with measurable service credits — not just a promise on a webpage.
      </>
    ),
  },
  {
    icon: IconRocket,
    t: "Fast Provisioning, Live Within Hours",
    b: "Standard configurations go live within 2–4 hours of confirmed payment. Custom hardware builds are ready within 24 hours.",
  },
];

const CONFIG_OPTIONS = [
  {
    icon: Cpu,
    title: "Processor (CPU)",
    items: [
      "Intel Xeon (E-series, Silver, Gold)",
      "AMD EPYC (single or dual socket)",
      "Single-CPU or Dual-CPU configurations",
    ],
  },
  {
    icon: MemoryStick,
    title: "Memory (RAM)",
    items: [
      "16 GB – 512 GB DDR4 / DDR5",
      "ECC Registered memory available",
      "Custom capacities on request",
    ],
  },
  {
    icon: HardDrive,
    title: "Storage",
    items: [
      "NVMe SSD (standard on every build)",
      "SATA SSD and Enterprise HDD options",
      "RAID 0 / 1 / 5 / 10 configurations",
      "500 GB to multi-TB custom arrays",
    ],
  },
  {
    icon: Network,
    title: "Bandwidth & Network",
    items: [
      "1 Gbps standard, 10 Gbps optional",
      "Metered or unmetered transfer",
      "Dedicated IPv4 + IPv6 addresses",
      "Additional IP blocks on request",
    ],
  },
  {
    icon: MonitorCog,
    title: "Operating System & Management",
    items: [
      "Linux: Ubuntu, Debian, CentOS, AlmaLinux, Rocky",
      "Windows Server (licensed)",
      "Self-managed or fully managed hosting",
      "cPanel / Plesk control panels available",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security, Support & Data Center",
    items: [
      "Tier III compliant, locally hosted Pakistan data center",
      "24/7 priority technical support",
      "Hardware-level DDoS mitigation",
      "Daily backups + disaster recovery options",
      "Free migration assistance",
    ],
  },
];

const USE_CASES = [
  {
    img: ucEcommerce,
    t: "E-Commerce & Online Stores",
    b: "Exclusive resources mean your checkout doesn't slow down during flash sales or holiday traffic spikes. PCI-compliant infrastructure for secure payment handling.",
  },
  {
    img: ucGaming,
    t: "Gaming Dedicated Servers",
    b: "Sub-10ms latency, unmetered bandwidth, full mod support. Runs Minecraft, CS2, Rust, ARK, and more — with complete admin control over your server environment.",
  },
  {
    img: ucBusiness,
    t: "Database & ERP Applications",
    b: "High-IOPS NVMe storage and large ECC RAM configurations make a measurable difference in query performance for MySQL, PostgreSQL, MSSQL, and enterprise ERP platforms.",
  },
  {
    img: ucAgency,
    t: "Web Agencies & Reseller Hosting",
    b: "Host multiple client accounts on one powerful machine with cPanel or Plesk. Better margins, simpler management.",
  },
  {
    img: ucDatabase,
    t: "Business & SaaS Platforms",
    b: "\u00a0An isolated, hardened environment for business-critical software — fully under your team's control.",
  },
];

const MANAGED_INCLUDES = [
  "Server deployment",
  "Security hardening",
  "OS installation",
  "Monitoring assistance",
  "Performance optimization",
  "Migration support",
  "Server maintenance",
];

type Cell = "yes" | "no" | string;
const COMPARE: { feature: string; shared: Cell; vps: Cell; dedicated: Cell }[] = [
  { feature: "Dedicated Resources of Entire Server", shared: "no", vps: "Partial", dedicated: "yes" },
  { feature: "Full Root Access", shared: "no", vps: "yes", dedicated: "yes" },
  { feature: "Performance Stability", shared: "Limited", vps: "Moderate", dedicated: "High" },
  { feature: "Scalability", shared: "Limited", vps: "Moderate", dedicated: "Advanced" },
  { feature: "High-Traffic Ready", shared: "no", vps: "Moderate", dedicated: "yes" },
  { feature: "Gaming Hosting", shared: "no", vps: "Limited", dedicated: "yes" },
];

const OS_LOGOS: LogoItem[] = [
  { alt: "Ubuntu", label: "Ubuntu" },
  { alt: "AlmaLinux", label: "AlmaLinux" },
  { alt: "Debian", label: "Debian" },
  { alt: "Rocky Linux", label: "Rocky" },
  { alt: "CentOS", label: "CentOS" },
  { alt: "Windows Server 2019", label: "Win 2019" },
  { alt: "Windows Server 2022", label: "Win 2022" },
];

const FAQS = [
  {
    q: "What is dedicated server hosting? ",
    a: "A physical machine leased exclusively to you. No shared hardware, no shared bandwidth. You get 100% of the CPU, RAM, bandwidth and storage — plus full root or admin access.",
  },
  {
    q: "How is BrainCLOUD different from other providers? ",
    a: "NVMe SSD is standard, not an upgrade. Free migration is included, not an add-on. Support comes from engineers available 24/7 — not a helpdesk that escalates everything and everything is billed in PKR with no USD conversion.",
  },
  {
    q: "What does a dedicated server cost?",
    a: "Custom pricing, but no hidden setup fees. Request a quote, and our team responds within one business hour.",
  },
  {
    q: "Do I get full root access? ",
    a: "Yes, no exceptions. Linux gets full root. Windows gets full admin. Nothing is restricted.",
  },
  {
    q: "Is Windows Server available?",
    a: "Yes. Both Windows Server 2019 and 2022 are supported. Licensing fees are transparently included in plan pricing.",
  },
  {
    q: "How fast is provisioning?",
    a: "Standard plans: 2–4 hours. Custom hardware builds: within 24 hours.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes — 7-day money-back guarantee on our custom dedicated server offerings.",
  },
];

const TECH_HEADING = "text-eyebrow text-navy/60";

/* ----------------------------- sections ----------------------------- */

function Hero() {
  const { open } = useContactDialog();
  return (
    <section id="top" className="relative overflow-hidden border-b border-hairline bg-surface">
      {/* Background image, anchored right, faded to surface on the left */}
      <img width={1376} height={768} loading="lazy"
        src={dedicatedHero}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-60 md:w-[70%] md:opacity-100"
        fetchPriority="high"
        decoding="async"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface from-30% via-surface/85 via-60% to-surface/30 md:from-surface md:from-25% md:via-surface/70 md:via-55% md:to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent md:hidden"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-16 lg:pt-20 lg:pb-20">
        <div className="animate-fade-up space-y-7 max-w-3xl">
          <h1 className="font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            Dedicated Server Hosting in Pakistan Built for High-Performance Workloads
          </h1>
          <p className="max-w-xl text-lede text-navy/75">
            Some workloads need more than a virtual environment. A dedicated server gives you a complete bare metal physical machine — every CPU core, every GB of RAM, every IOPS of NVMe storage — reserved for you alone. No shared resources. No virtualization overhead. No performance dips because someone else's traffic spiked.
          </p>
          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              <a href="#plans" className={CTA_PRIMARY}>
                REQUEST A CUSTOM SERVER
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={WHATSAPP_HREF} className={CTA_SECONDARY}>
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
            <p className="text-xs font-medium text-navy/55">
              Need a custom build?{" "}
              <button
                type="button"
                onClick={() =>
                  open({
                    intent: "Dedicated · Custom spec",
                    service: "Dedicated Server",
                    title: "Request a custom server spec",
                    subtitle:
                      "Tell us your workload (CPU cores, RAM, storage, GPU, network). We'll quote a build in PKR within 1 business hour.",
                  })
                }
                className="font-bold text-navy underline-offset-2 hover:underline"
              >
                Request a custom server spec
              </button>
              {" · "}We reply within 1 business hour · Available 24/7
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <TierIIIBadge />
            <span className="text-xs font-bold text-navy/55">PTA-licensed network · Operated by BrainTEL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// function WhyChoose() {
//   return (
//     <section id="features" className="bg-white section-y-tight">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="mb-12 max-w-3xl">
//           <span className={TECH_HEADING}>Why choose us</span>
//           <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">
//             Why Businesses Choose BrainCLOUD Dedicated Servers.
//           </h2>
//           <p className="mt-5 text-base leading-relaxed text-navy/70">
//             Every BrainCLOUD dedicated server offers complete access to physical hardware. This means you get the
//             greatest speed, reliability, and control. Unlike shared or VPS hosting, you have full resources of the
//             entire physical server for yourself.
//           </p>
//         </div>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {FEATURES.map(({ icon: Icon, t, b }) => (
//             <div
//               key={t}
//               className="rounded-[var(--radius-card)] border border-[#e8ecf1] bg-white p-8 transition-all hover:-translate-y-0.5 hover:border-green/40 hover:shadow-lg hover:shadow-navy/5"
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
//                 <Icon className="h-6 w-6" />
//               </div>
//               <h3 className="mt-5 font-display text-h3 font-extrabold text-navy">{t}</h3>
//               <p className="mt-2 text-sm leading-relaxed text-navy/70">{b}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function WhyChoose() {
  return (
    <section id="features" className="bg-white section-y-tight">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className={TECH_HEADING}>Why choose us</span>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">
            Why Businesses Choose BrainCLOUD Dedicated Servers.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70">
            Every BrainCLOUD dedicated server offers complete access to physical
            hardware. This means you get the greatest speed, reliability, and
            control. Unlike shared or
            <a
              href="/services/cloud/vps-hosting-pakistan"
              className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
            >
              {" "}VPS hosting,{" "}
            </a>
            you have full resources of
            the entire physical server for yourself.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, t, b }) => (
            <div
              key={t}
              className="rounded-[var(--radius-card)] border border-[#e8ecf1] bg-white p-8 transition-all hover:-translate-y-0.5 hover:border-green/40 hover:shadow-lg hover:shadow-navy/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-h3 font-extrabold text-navy">
                {t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const { open } = useContactDialog();
  return (
    <section id="plans" className="bg-[#fafbfc] section-y-tight">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className={TECH_HEADING}>Configure</span>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">
            Build Your Dedicated Server.{" "}
            <span className="text-green">Custom Quote in 24 Hours.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70">
            Every BrainCLOUD dedicated server is custom-configured to your workload. Choose the components you actually
            need and we'll send a tailored PKR quote within 24 hours — no fixed packages, no overpaying for resources
            you'll never use.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONFIG_OPTIONS.map((opt) => {
            const OptIcon = opt.icon;
            return (
              <div
                key={opt.title}
                className="relative flex flex-col rounded-[var(--radius-card)] border border-[#e8ecf1] bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
                  <OptIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-h3 font-extrabold text-navy">{opt.title}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-navy/80">
                  {opt.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-green" strokeWidth={3} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-12 rounded-[var(--radius-card)] border border-[#e8ecf1] bg-white p-8 text-center sm:p-10">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-navy/75">
            Tell us your workload, we'll spec the right server and send a quote within 24 hours.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              type="button"
              onClick={() => open({ intent: "Dedicated · Custom Quote", service: "Dedicated Server" })}
              className="rounded-full bg-green px-7 font-bold text-white hover:bg-green"
            >
              Request a Custom Quote
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              type="button"
              onClick={() => open({ intent: "Dedicated · Consultation", service: "Dedicated Server" })}
              className="rounded-full border border-navy/15 bg-white px-7 font-bold text-navy hover:bg-navy hover:text-white"
            >
              Chat On WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="bg-white section-y-tight">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <span className={TECH_HEADING}>Workloads</span>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">
            Dedicated Hosting <span className="text-green">Built for Mission-Critical Workloads.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70">
            BrainCLOUD dedicated hosting solutions are suitable for:
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u) => (
            <article
              key={u.t}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[#e8ecf1] bg-white transition-all hover:-translate-y-0.5 hover:border-green/40 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="aspect-[4/3] overflow-hidden bg-navy">
                <img decoding="async"
                  src={u.img}
                  alt={u.t}
                  loading="lazy"
                  width={768}
                  height={576}
                  className="h-full w-full object-cover transition-transform duration-500 group-"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-h3 font-extrabold leading-snug text-navy">{u.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{u.b}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Managed() {
  return (
    <section id="support" className="relative overflow-hidden bg-navy section-y text-white">
      <img width={1536} height={1024}
        src={managedBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/70 via-transparent to-navy"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <span className="text-eyebrow text-green">Managed dedicated</span>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-white!">Managed Dedicated Server Hosting</h2>
          <p className="mt-5 text-lede text-white/80">Need server power without handling technical management?</p>
          <p className="mt-3 text-base leading-relaxed text-white/65">BrainCLOUD managed dedicated hosting includes:</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:self-start">
            {MANAGED_INCLUDES.map((m) => (
              <li
                key={m}
                className="flex items-start gap-3 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/90 backdrop-blur transition-colors hover:border-green/40 hover:bg-white/[0.07]"
              >
                <Check className="mt-0.5 h-4 w-4 flex-none text-green" strokeWidth={3} />
                <span>{m}</span>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-5">
            <div className="rounded-[var(--radius-card)] border border-white/15 bg-navy/60 p-6 shadow-2xl backdrop-blur-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-card)] bg-green/20 text-green">
                  <IconFirewall className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-extrabold">Fully Managed</div>
                  <div className="text-xs text-white/60">Hands-off infrastructure</div>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                <li className="flex items-start gap-2">
                  <IconRefresh className="mt-0.5 h-4 w-4 flex-none text-green" /> Daily off-host backups
                </li>
                <li className="flex items-start gap-2">
                  <Headphones className="mt-0.5 h-4 w-4 flex-none text-green" /> 24/7 Pakistan-based engineering
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-green" /> Proactive security hardening
                </li>
                <li className="flex items-start gap-2">
                  <Gauge className="mt-0.5 h-4 w-4 flex-none text-green" /> Performance tuning + monthly audit
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-base leading-relaxed text-white/70">
          Ideal for businesses that want reliable infrastructure without managing servers internally.
        </p>
      </div>
    </section>
  );
}

function Cell({ value }: { value: Cell }) {
  if (value === "yes") return <Check className="h-5 w-5 text-green" strokeWidth={3} aria-label="yes" />;
  if (value === "no") return <X className="h-5 w-5 text-navy/30" strokeWidth={3} aria-label="no" />;
  return <span className="text-sm text-navy/75">{value}</span>;
}

function Compare() {
  return (
    <section className="bg-[#fafbfc] section-y-tight">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <span className={TECH_HEADING}>Comparison</span>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">BrainCLOUD vs Traditional Hosting</h2>
        </div>
        <div className="overflow-x-auto rounded-[var(--radius-card)] border border-[#e8ecf1] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#fafbfc] font-display text-xs uppercase tracking-[0.12em] text-navy/70">
              <tr>
                <th className="px-5 py-4">Feature</th>
                <th className="px-5 py-4">Shared Hosting</th>
                <th className="px-5 py-4">VPS Hosting</th>
                <th className="px-5 py-4 text-green">DEDICATED HOSTING</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={row.feature} className={i % 2 ? "bg-[#fafbfc]/40" : ""}>
                  <td className="px-5 py-3 font-bold text-navy">{row.feature}</td>
                  <td className="px-5 py-3">
                    <Cell value={row.shared} />
                  </td>
                  <td className="px-5 py-3">
                    <Cell value={row.vps} />
                  </td>
                  <td className="px-5 py-3">
                    <Cell value={row.dedicated} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function SupportedOS() {
  return (
    <section className="bg-white section-y-tight">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <span className={TECH_HEADING}>Operating systems</span>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">Supported Operating Systems</h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70">
            Ubuntu · AlmaLinux · Debian · Rocky Linux · CentOS · Windows Server 2019 / 2022
          </p>
          <p className="mt-3 text-sm italic text-navy/60">Custom operating system deployment available on request.</p>
        </div>
        <div className="rounded-[var(--radius-card)] border border-[#e8ecf1] bg-[#fafbfc] p-8">
          <LogoStrip items={OS_LOGOS} size={30} />
        </div>
      </div>
    </section>
  );
}

function Infrastructure() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy section-y text-white">
      <DotPattern className="text-white/[0.04]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className="text-eyebrow text-green">Enterprise-grade</span>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">
            Enterprise-Grade <span className="text-green">Infrastructure.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            Your server runs in a Tier III certified facility in Pakistan built to eliminate single points of failure:
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              src: dcTier3,
              alt: "Tier III data centre interior with rows of server racks in Pakistan",
              t: "Tier III Compliant Data Center",
            },
            { src: dcNoc, alt: "Network operations centre with monitoring dashboards", t: "24/7 NOC monitoring" },
            { src: dcFibre, alt: "Fibre optic backbone cabling at BrainNET data centre", t: "BrainNET Fiber backbone" },
            {
              src: infraPower,
              alt: "Redundant UPS and power distribution units in data centre",
              t: "2N Redundant Power + UPS + Diesel Generator Backup",
            },
            {
              src: infraCooling,
              alt: "Precision cooling cold aisle in data centre",
              t: "Redundant Precision Cooling Systems",
            },
            {
              src: infraNetwork,
              alt: "Dense network switch stack with patch cables",
              t: "Multiple Upstream ISP Links with Automatic Failover",
            },
            {
              src: infraHardware,
              alt: "Hardware-level server monitoring sensors and diagnostics",
              t: "Gas-Based Fire Suppression Systems",
            },
            {
              src: infraDdos,
              alt: "DDoS mitigation shield protecting data centre network",
              t: "Hardware-Level DDoS Mitigation at the Network Perimeter",
            },
            {
              src: infraMonitoring,
              alt: "24/7 infrastructure monitoring dashboards",
              t: "24/7 Physical Security & Full CCTV Coverage",
            },
          ].map((x) => (
            <figure
              key={x.t}
              className="group overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img decoding="async"
                  src={x.src}
                  alt={x.alt}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5 font-display text-h3 text-white! font-extrabold">{x.t}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <Section tone="white" id="faq" containerClassName="max-w-4xl">
      <div className="mb-12 text-center">
        <SectionHeading align="center" eyebrow="FAQs" title="Frequently Asked Questions" />
      </div>
      <FAQ items={FAQS.map((f) => ({ q: f.q, a: f.a }))} />
    </Section>
  );
}

/* ------------------------- JSON-LD ------------------------- */

function FAQSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function ProductSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Dedicated Server Hosting",
    name: "BrainCLOUD Dedicated Server Hosting in Pakistan",
    description:
      "Custom-configured dedicated server hosting with NVMe SSD, full root access, DDoS protection, Linux and Windows support, and 24/7 Pakistan-based engineering. Custom PKR quotes within 24 hours.",
    provider: { "@type": "Organization", name: "BrainCLOUD" },
    areaServed: "PK",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ----------------------------- page ----------------------------- */

function DedicatedTestimonial() {
  return (
    <section className="bg-white section-y">
      <div className="mx-auto max-w-5xl px-6">
        {/* TODO: replace with verified customer quote before public launch */}
        <Testimonial
          quote={
            <>
              "We run a regulated fintech workload — every query has to stay in Pakistan. BrainCLOUD gave us a dedicated
              dual-Xeon box in Lahore with our own VLAN, and{" "}
              <span className="text-green">zero unplanned downtime in 14 months.</span>"
            </>
          }
          name="Sara Khan"
          role="Head of Infrastructure"
          company="Pakistani fintech (regulated)"
          metric={{ value: "99.99%", label: "Realised uptime, last 14 months" }}
        />
      </div>
    </section>
  );
}

function DedicatedPage() {
  const { open } = useContactDialog();
  return (
    <>
      <PageMeta
        title="Dedicated Server Hosting Pakistan | Enterprise Servers | BrainCLOUD"
        description="Dedicated server hosting in Pakistan with NVMe storage, full root access, DDoS protection, and 24/7 support on Tier III infrastructure."
        keywords="dedicated server hosting pakistan, dedicated server pakistan, managed dedicated server, gaming dedicated server, enterprise dedicated hosting, NVMe dedicated server"
        ogTitle="Enterprise-Grade Dedicated Server Hosting in Pakistan."
        ogDescription="Top hardware, NVMe SSD, full root access, 24/7 tech support. Built for businesses, e-commerce, gaming, and SaaS."
        ogType="product"
        ogUrl="/dedicated-server-hosting-pakistan"
        ogImage={dedicatedHero.url}
        twitterCard="summary_large_image"
        twitterImage={dedicatedHero.url}
        canonical="/services/cloud/dedicated-server-hosting-pakistan"
        schema={DedicatedSchema}
      />
      <div className="min-h-screen bg-[#fafbfc] text-navy">
        <SiteHeader />
        <main className="pb-20 md:pb-0">
          <Hero />
          <CustomersStrip tone="white" />
          <WhyChoose />
          <Plans />
          <ClientTestimonials tone="white" className="section-y-tight" />
          <UseCases />
          <Managed />
          <Compare />
          <OSStrip tone="surface" className="!py-10" />
          <ToolingStrip tone="white" className="!py-10" />
          <Infrastructure />
          <FAQSection />
          <PaymentsStrip tone="surface" />
          <SolutionsGrid
            variant="cross-link"
            // excludeTo="/services/cloud/dedicated-server-hosting-pakistan"
            eyebrow="Other hosting solutions"
            heading="Compare hosting types"
            subheading="Not sure which fits? See how Cloud and VPS hosting compare with our dedicated servers."
            className="!py-10"
          />
          <SiteFinalCTA
            title="Ready to Move to Dedicated Infrastructure?"
            subtitle="Get reliable dedicated hosting built for speed, security, scalability, and business growth."
            buttonLabel="REQUEST A CUSTOM SERVER"
          />
        </main>
        <SiteFooter />
        <SiteMobileStickyCTA />
        <FAQSchema />
        <ProductSchema />
      </div>
    </>
  );
}
