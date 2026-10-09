import { createFileRoute, Link } from "@tanstack/react-router";
import { SolutionsGrid } from "@/components/cloud/site/SolutionsGrid";
import { SiteHeader, SiteFinalCTA, SiteFooter, SiteMobileStickyCTA, FOCUS_RING, WHATSAPP_HREF, CTA_PRIMARY, CTA_SECONDARY } from "@/components/cloud/site/chrome";
import { CTAPair, Section, SectionHeading, FAQ as FAQPrimitive } from "@/components/cloud/site/primitives";

import { ToolingStrip, CustomersStrip, OSStrip, PaymentsStrip } from "@/components/cloud/site/trust-strips";
import { ClientTestimonials } from "@/components/cloud/site/client-testimonials";
import { useContactDialog } from "@/components/cloud/site/contact-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  ArrowRight,
  Check,
  Wallet,
  Sparkles,
} from "lucide-react";
import {
  IconSecurity as ShieldCheck,
  IconFilter as Filter,
  IconDatabase as Database,
  IconNetwork as Network,
  IconGauge as Gauge,
  IconTrending as TrendingUp,
  IconServer as ServerCog,
  IconLocation as MapPin,
  IconHeadphones as Headphones,
  IconLock as LockKeyhole,
  IconStorage as HardDrive,
  IconRefresh as RefreshCcw,
  IconCloud as CloudCog,
  IconMail as Mail,
  IconPhone as Phone,
  IconWhatsApp as MessageCircle,
} from "@/components/cloud/icons";

import heroBg from "@/assets/cloud/home-hero.webp";
import audienceBg from "@/assets/cloud/audience-bg.webp";
import performanceImg from "@/assets/cloud/performance-network.webp";
import securityImg from "@/assets/cloud/security-shield.webp";
import chashniImg from "@/assets/cloud/chashni-case.webp";
import logoBlue from "@/assets/cloud/braincloud-logo-blue.png";
import logoWhite from "@/assets/cloud/braincloud-logo-white.png";
import PageMeta from "@/components/cloud/site/PageMeta";
import HomeSchema from "@/pages/schemaFiles/cloud-schema-files/HomeSchema";

export const Route = createFileRoute("/services/cloud/")({
  component: Index,
  // head: () => ({
  //   meta: [
  //     { title: "BrainCLOUD — Cloud, VPS & Dedicated Hosting in Pakistan" },
  //     {
  //       name: "description",
  //       content:
  //         "Tier III cloud hosting, VPS, dedicated servers and colocation in Pakistan. PKR billing, 99.9% uptime SLA and 24/7 local engineers from Brain Telecommunication.",
  //     },
  //     { property: "og:type", content: "website" },
  //     { property: "og:title", content: "BrainCLOUD — Cloud, VPS & Dedicated Hosting in Pakistan" },
  //     {
  //       property: "og:description",
  //       content:
  //         "Locally hosted Tier III cloud infrastructure: cloud hosting, VPS, dedicated servers, colocation and AI hosting — billed in PKR.",
  //     },
  //     { name: "twitter:card", content: "summary_large_image" },
  //   ],
  // }),
});



const faqs = [
  {
    q: "What are cloud services?",
    a: "Cloud services let businesses host websites, apps, and data on remote servers, which means they don't need physical machines. This setup improves performance, reduces maintenance, and allows easy access from anywhere. It also eliminates the need for in-house hardware which makes operations more flexible and scalable.",
  },
  {
    q: "Why should a business move to cloud infrastructure?",
    a: "Businesses move to the cloud to improve speed, reliability, and system stability. Cloud infrastructure removes hardware dependencies and enables instant scaling as traffic grows. It cuts downtime and lowers costs. This makes managing applications, websites, and data easier, with less technical handling needed.",
  },
  {
    q: "Are cloud services suitable for startups?",
    a: "Cloud services suit startups well. They cut initial costs and enable fast deployment. Startups can skip buying servers. They can use cloud infrastructure to launch apps and scale up as they grow. This flexibility lets new businesses stay efficient. They can focus on growth rather than technical setup.",
  },
  {
    q: "Can e-commerce websites operate with high efficiency on cloud hosting?",
    a: "Yes, cloud hosting is an excellent choice for e-commerce websites. It handles traffic spikes, quickens loading times, and maintains uptime during sales. Platforms like WooCommerce, Magento, and OpenCart work better on cloud infrastructure. This is because cloud systems offer great scalability and optimized performance.",
  },
  {
    q: "How secure is business data on cloud infrastructure?",
    a: "Cloud infrastructure uses many security layers, including firewalls, encrypted storage, and automated backups. These systems protect data from unauthorized access and reduce the risk of loss. Backup and recovery systems help restore business data on time if there is a problem.",
  },
  {
    q: "Can cloud infrastructure scale as my business grows?",
    a: "Yes, cloud infrastructure designers create it to scale based on your needs. You can increase computing power, storage, and server capacity without rebuilding your system. This helps businesses manage growth, increased traffic, and bigger workloads. They can do this without performance problems.",
  },
];

const TECH_HEADING = "text-eyebrow text-navy/60";



function Hero() {
  const { open } = useContactDialog();
  return (
    <section id="top" className="relative overflow-hidden border-b border-hairline bg-surface">
      <img width={1692} height={930} loading="lazy" decoding="async"
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-40 md:w-[70%] md:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface from-30% via-surface/85 via-60% to-surface/30 md:from-surface md:from-25% md:via-surface/70 md:via-55% md:to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent md:hidden"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-8 lg:pt-12 lg:pb-12">
        <div className="animate-fade-up max-w-2xl space-y-5 lg:max-w-4xl lg:space-y-6">

          <h1 className="font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            Cloud Services in Pakistan<br />
            For <span className="text-green">Business-Critical<br />Workloads.</span>
          </h1>

          <p className="max-w-xl text-lede text-navy/70">
            {/* If your website is slow,  */}
            If your

            <a href="/services/cloud/web-hosting-pakistan"
              className="text-[#15803d] hover:text-[#166534] active:text-[#14532D] transition-colors"
            >
              {" "}website is slow,{" "}
            </a>
            your app crashes, or your server has issues, the
            problem isn't hosting. It's your infrastructure. BrainCLOUD Plus gives
            you a full cloud infrastructure which is stable, fast, and always
            available.
          </p>

          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => open({ intent: "Hero · Free infrastructure audit", service: "Cloud Hosting", title: "Get Your Free Infrastructure Audit.", subtitle: "Share what you're running. A BrainCLOUD Solutions Consultant will reply within 1 Business Hour." })}
                className={CTA_PRIMARY}
              >
                Get my free infrastructure audit
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href={WHATSAPP_HREF} className={CTA_SECONDARY}>
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
            <p className="text-xs font-medium text-navy/55">
              Free, no commitment · We reply within 1 business hour · Available 24/7
            </p>
          </div>

          {/* Stats — compact inline row, visible above the fold */}
          <div className="grid grid-cols-4 gap-2 border border-hairline bg-white p-1.5 sm:gap-0 sm:divide-x sm:divide-hairline sm:p-0">
            {[
              { k: "99.9%", v: "UPTIME WITH SLA" },
              { k: "<30ms", v: "Latency" },
              { k: "24/7", v: "Support" },
              { k: "Tier III", v: "Data Center" },
            ].map((s) => (
              <div key={s.k} className="px-1 py-2 text-center sm:px-4 sm:py-3.5">
                <div className="font-display text-sm font-extrabold text-navy sm:text-xl">{s.k}</div>
                <div className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-navy/55 sm:text-[10px] sm:tracking-[0.16em]">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// TrustLogos extracted to ToolingStrip in trust-strips.tsx

function Audience() {
  const items = [
    "Websites with active users",
    "SaaS platforms & applications",
    "Growing traffic",
    "Scaling or performance issues",
  ];
  return (
    <section className="relative overflow-hidden bg-surface section-y">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[65%] bg-cover bg-right md:block lg:w-[55%]"
        style={{ backgroundImage: `url(${audienceBg})` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[65%] bg-gradient-to-r from-surface via-surface/95 to-transparent md:block lg:w-[55%]"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className={TECH_HEADING}>Built for serious workloads</span>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">
            Built for Businesses That Can't Afford{" "}
            <span className="text-green">Downtime.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lede text-navy/70">
            Many businesses in Pakistan are moving to the cloud as per Pakistan's Cloud
            First Policy. However, not all providers deliver the same performance. We
            don't offer servers; we give you a ready-to-use secure environment.
            Everything functions well without the need for frequent repairs.
          </p>
        </div>

        <div className="mt-12 border-t border-hairline pt-10">
          <span className={TECH_HEADING}>Who it's for</span>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((it) => (
              <div key={it} className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green/10 text-green">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <p className="font-display text-sm font-bold leading-tight text-navy">
                  {it}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="bg-white section-y">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className={TECH_HEADING}>Why teams pick us</span>
          <h2 className="mt-4 font-display text-h2 font-extrabold tracking-[-0.015em] text-inherit">
            Why Businesses <span className="text-green">Choose Us.</span>
          </h2>
          <p className="mt-5 text-lede text-charcoal">
            The main reason is simple — control, stability, and peace of mind. Here's what
            you get:
          </p>
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* 1. No Server Management */}
          <div className="flex flex-col rounded-[var(--radius-card)] border border-[#e8ecf1] bg-white p-8 transition-all hover:-translate-y-0.5 hover:border-green/40 hover:shadow-lg hover:shadow-navy/5">
            <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
              <ServerCog className="h-5 w-5" />
            </div>
            <div className="mt-auto pt-10">
              <h3 className="font-display text-h3 font-extrabold leading-snug text-navy">
                No Server Management Stress
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                You don't have to deal with hardware or setup. Everything is already
                optimized.
              </p>
            </div>
          </div>

          {/* 2. Local Performance — navy highlight */}
          <div className="flex flex-col rounded-[var(--radius-card)] bg-navy p-8 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] bg-green text-navy">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="mt-auto pt-10">
              <h3 className="font-display text-h3 font-extrabold leading-snug text-green!">
                Local Performance Advantage
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Infrastructure in Pakistan means quicker loading and a better experience
                for local users.
              </p>
            </div>
          </div>

          {/* 3. PKR Pricing — green accent */}
          <div className="flex flex-col rounded-[var(--radius-card)] bg-green p-8 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] bg-white/20">
              <Wallet className="h-5 w-5" />
            </div>
            <div className="mt-auto pt-10">
              <h3 className="font-display text-h3 font-extrabold leading-snug text-white">
                Transparent Pricing (PKR)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white">
                Stable pricing in PKR with no hidden costs. What you see is what you pay.
              </p>
            </div>
          </div>

          {/* 4. 24/7 Support */}
          <div className="flex flex-col rounded-[var(--radius-card)] border border-[#e8ecf1] bg-white p-8 transition-all hover:-translate-y-0.5 hover:border-green/40 hover:shadow-lg hover:shadow-navy/5">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
                <Headphones className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-green/10 px-2.5 py-1 text-eyebrow text-green">
                24/7
              </span>
            </div>
            <div className="mt-auto pt-10">
              <h3 className="font-display text-h3 font-extrabold leading-snug text-navy">
                Real 24/7 Human Support
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                You can reach out via WhatsApp, call, or email and get actual help, not
                automated replies.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <CTAPair align="center" service="Cloud Hosting" intent="Inline CTA" />
        </div>
      </div>
    </section>
  );
}

function Performance() {
  const bullets = [
    "Your website stays up and fast",
    "Your app keeps running smoothly",
    "No manual upgrades are needed",
  ];
  return (
    <section id="performance" className="bg-surface section-y">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-5 lg:auto-rows-[minmax(220px,auto)]">
          <div className="card-surface lg:col-span-3 lg:row-span-2 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <span className={TECH_HEADING}>Performance</span>
              <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">
                Performance That Handles <span className="text-green">Real Traffic.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy/70">
                Most systems fail when traffic increases. With Braincloud Plus:
              </p>
              <ul className="mt-6 space-y-3">
                {bullets.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-green/15">
                      <TrendingUp className="h-3 w-3 text-green" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-navy">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 rounded-[var(--radius-card)] border border-hairline bg-[#fafbfc] px-5 py-4 text-sm font-bold text-navy">
              The system scales automatically when demand increases.
            </p>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 relative min-h-[280px] overflow-hidden rounded-[var(--radius-card)] border border-[#e8ecf1] bg-navy">
            <img width={1024} height={1024} decoding="async"
              src={performanceImg}
              alt="Isometric visualization of cloud servers connected by glowing network paths"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-green!">99.9%</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/70">
                Uptime SLA · Auto-scaled
              </div>
            </div>
          </div>
        </div>

        <CTAPair align="center" service="Cloud Hosting" intent="Inline CTA" className="mt-10" />
      </div>
    </section>
  );
}

function TechnicalAdvantage() {
  const secure = [
    {
      icon: ShieldCheck,
      title: "Advanced Firewall Protection",
      body: "Enterprise firewall systems guard cloud platforms in Pakistan. They prevent unauthorized access and block harmful traffic.",
    },
    {
      icon: Filter,
      title: "Smart Spam Filtering",
      body: "Email and communication systems stay safe thanks to smart filtering. This blocks unwanted traffic and harmful messages.",
    },
    {
      icon: Database,
      title: "Reliable Storage Systems",
      body: "Secure storage architecture keeps business data safe. It also makes data easy to access on cloud platforms in Pakistan.",
    },
  ];
  const perf = [
    {
      icon: Network,
      title: "Optimized Network Infrastructure",
      body: "Our reliable connectivity helps businesses in Pakistan, as we are peered with major telecoms of Pakistan. This ensures the continuous operation of our cloud services.",
    },
    {
      icon: Gauge,
      title: "Fast Data Processing",
      body: "Our cloud servers run applications, websites, and digital platforms with high efficiency. They keep performance steady.",
    },
    {
      icon: CloudCog,
      title: "Scalable Computing Resources",
      body: "Businesses can easily boost computing power when traffic or system use increases with auto-scaling options available.",
    },
  ];

  const Tile = ({
    item,
    dark = false,
  }: {
    item: { icon: typeof ShieldCheck; title: string; body: string };
    dark?: boolean;
  }) => {
    const Icon = item.icon;
    return (
      <div
        className={"flex flex-col gap-5 rounded-[var(--radius-card)] p-8 transition-all hover:-translate-y-0.5 " +
          (dark
            ? "bg-navy text-white hover:shadow-xl hover:shadow-navy/20"
            : "border border-[#e8ecf1] bg-white hover:border-green/40 hover:shadow-lg hover:shadow-navy/5")
        }
      >
        <div
          className={"flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] " +
            (dark ? "bg-green text-navy" : "bg-green/10 text-green")
          }
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h4
            className={"font-display text-base font-bold tracking-[0.01em] " +
              (dark ? "!text-white" : "text-navy")
            }
          >
            {item.title}
          </h4>
          <p
            className={"mt-2 text-sm leading-relaxed " + (dark ? "text-white/70" : "text-navy/70")
            }
          >
            {item.body}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white section-y">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <span className={TECH_HEADING}>Technical Advantage</span>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">
            Our Technical Advantage.
          </h2>
        </div>

        <div className="space-y-14">
          <div>
            <h3 className={`${TECH_HEADING} mb-6 block`}>
              Secure Cloud Infrastructure
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {secure.map((s, i) => (
                <div key={s.title} className={i === 1 ? "order-first md:order-none" : ""}>
                  <Tile item={s} dark={i === 1} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className={`${TECH_HEADING} mb-6 block`}>
              High-Performance Cloud Hosting
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {perf.map((s, i) => (
                <div key={s.title} className={i === 1 ? "order-first md:order-none" : ""}>
                  <Tile item={s} dark={i === 1} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  const items = [
    { icon: ShieldCheck, t: "Advanced Firewall Protection", d: "Blocks unauthorized access at the network edge." },
    { icon: Filter, t: "Smart Filtering Against Harmful Traffic", d: "Filters malicious requests before they reach your app." },
    { icon: LockKeyhole, t: "Secure Data Storage", d: "Encrypted volumes with strict access controls." },
    { icon: RefreshCcw, t: "Disaster Recovery Protocols", d: "Rapid failover keeps services online during incidents." },
    { icon: HardDrive, t: "Automated Backups", d: "Scheduled snapshots with quick, reliable restores." },
  ];
  return (
    <section id="security" className="bg-surface section-y">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 relative overflow-hidden rounded-[var(--radius-card)] border border-[#e8ecf1] bg-navy p-7 text-white">
            <div
              aria-hidden
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 70% 20%, rgba(33,188,50,0.35), transparent 60%)",
              }}
            />
            <div className="relative">
              <span className="text-eyebrow text-green">
                Security
              </span>
              <h2 className="mt-4 font-display text-h2 font-extrabold text-white!">
                Security You Don't Have to Worry About.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Keeping your business data safe is critical. That's why we provide five
                hardened layers — and if anything goes wrong, recovery is quick and
                reliable.
              </p>
            </div>
            <img width={1024} height={1024} decoding="async"
              src={securityImg}
              alt=""
              aria-hidden
              loading="lazy"
              className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full object-cover opacity-30"
            />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {items.map(({ icon: Icon, t, d }, i) => (
              <div
                key={t}
                className={"card-surface card-surface-hover flex items-start gap-4 p-5 " +
                  (i === 4 ? "sm:col-span-2" : "")
                }
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-card)] bg-white text-green shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-h3 font-extrabold text-navy">{t}</h4>
                  <p className="mt-1 text-sm text-navy/65">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function FrameworksAndStacks() {
  return (
    <section className="bg-white section-y">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className={TECH_HEADING}>Ready out of the box</span>
        <h2 className="mt-4 font-display text-h2 font-extrabold text-navy">
          Pre-tuned for <span className="text-green">WordPress, E-Commerce, and Custom Apps.</span>
        </h2>
        <p className="mt-6 text-lede text-navy/70">
          Everything is already optimized for performance. You don't waste time on set-up,
          you focus on running your business.
        </p>
      </div>
    </section>
  );
}

function Support() {
  const tiers = [
    {
      level: "L1 Support",
      body: "Basic troubleshooting for businesses using cloud services includes support. You can get help through email, phone, or WhatsApp. This support covers common hosting and server problems.",
    },
    {
      level: "L2 Support",
      body: "Technical support helps with cloud-hosted apps and infrastructure. It keeps systems running without interruption, throughout the day and night.",
    },
    {
      level: "L3 Support",
      body: "Get expert help with system design. Improve scaling methods and boost performance for enterprise cloud services.",
    },
  ];
  return (
    <section id="support" className="bg-surface section-y">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <span className={TECH_HEADING}>Support</span>
            <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">
              Support That Actually <span className="text-green">Helps You Grow.</span>
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-navy/70">
            <p>Most providers only fix basic issues. We go further with 3 levels of support:</p>
            <ul className="space-y-1.5 text-sm">
              <li className="flex gap-2"><span className="text-green">•</span> quick fixes for common problems</li>
              <li className="flex gap-2"><span className="text-green">•</span> technical support for systems and apps</li>
              <li className="flex gap-2"><span className="text-green">•</span> expert help for scaling and performance</li>
            </ul>
            <p className="font-bold text-navy">
              So you're not just fixing issues — you're improving your system over time.
            </p>
          </div>
        </div>

        <div className="card-surface p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col items-start justify-between gap-3 border-b border-[#e8ecf1] pb-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-card)] bg-green text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="font-display text-h3 font-bold text-navy">
                24/7/365 Support
              </h3>
            </div>
            <span className="rounded-full bg-green/10 px-4 py-1.5 text-eyebrow text-green">
              Your success is our priority
            </span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tiers.map((t, i) => (
              <div
                key={t.level}
                className={"rounded-[var(--radius-card)] p-8 " +
                  (i === 1
                    ? "bg-navy text-white"
                    : "border border-[#e8ecf1] bg-white")
                }
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={"flex h-10 w-10 items-center justify-center rounded-[var(--radius-card)] font-display text-sm font-extrabold " +
                      (i === 1 ? "bg-green! text-navy!" : "bg-navy text-green")
                    }
                  >
                    L{i + 1}
                  </span>
                  <h4
                    className={"font-display text-lg font-bold " +
                      (i === 1 ? "text-white!" : "text-navy")
                    }
                  >
                    {t.level}
                  </h4>
                </div>
                <p
                  className={"text-sm leading-relaxed " +
                    (i === 1 ? "text-white/75" : "text-navy/70")
                  }
                >
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section className="bg-white section-y">
      <div className="mx-auto max-w-7xl px-6">
        <div className="card-surface grid gap-6 overflow-hidden lg:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-[340px]">
            <img width={1152} height={849} decoding="async"
              src={chashniImg}
              alt="Chashni confectionery brand packaging and sweets — a growing Pakistani food brand"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="p-10 sm:p-14">
            <span className={TECH_HEADING}>Case Study</span>
            <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">
              Chashni Scales Up <span className="text-green">5x.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy/70">
              Chashni is a growing food and confectionery brand in Pakistan, known for its
              quality products and expanding customer base.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              We provide
              <a href="/services/cloud/dedicated-server-hosting-pakistan"
                className="text-[#15803d] hover:text-[#166534] active:text-[#14532D] transition-colors"
              >
                {" "}database hosting services,{" "}
              </a>
              ensuring secure data management, high
              availability, and reliable performance to support their daily business
              operations.
            </p>
            <figure className="mt-8 border-l-2 border-green pl-5">
              <blockquote className="font-display text-lg italic leading-relaxed text-navy">
                "Stable, fast, and always available — exactly what a growing brand
                needs."
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-navy font-display text-xs font-extrabold text-white"
                >
                  CH
                </span>
                <span className="text-sm leading-tight">
                  <span className="block font-display font-extrabold text-navy">
                    Chashni Operations Team
                  </span>
                  <span className="block text-navy/55">
                    Food & confectionery brand · Pakistan
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <Section tone="white" id="faq" containerClassName="max-w-4xl">
      <div className="mb-12 text-center">
        <SectionHeading
          align="center"
          eyebrow="FAQs"
          title="Frequently Asked Questions"
        />
      </div>
      <FAQPrimitive items={faqs.map((f) => ({ q: f.q, a: f.a }))} />
    </Section>
  );
}





function FAQSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function Index() {
  return (
    <>
      <PageMeta
        title="Cloud Services in Pakistan | Cloud Hosting & VPS Solutions | BrainCloud"
        description="Cloud providers in Pakistan with Tier III infrastructure, cloud hosting, VPS hosting, dedicated servers, free migration, PKR billing, and 24/7 support."
        schema={HomeSchema}
      />
      <div className="min-h-screen bg-[#fafbfc] text-navy">
        <SiteHeader />
        <main className="pb-20 md:pb-0">
          <Hero />
          <CustomersStrip tone="white" />
          <SolutionsGrid
            eyebrow="Our hosting solutions"
            heading={<>Our Cloud Services. <span className="text-green">Truly Locally-Hosted.</span></>}
            subheading="One Pakistan-based provider, three infrastructure tiers. All Tier III, all PKR-billed, all backed by 24/7 local engineers."
          />
          <Audience />
          <WhyUs />
          <Performance />
          <TechnicalAdvantage />
          <Security />
          <FrameworksAndStacks />
          <ToolingStrip tone="surface" />
          <OSStrip tone="surface" />
          <CaseStudy />
          <ClientTestimonials tone="surface" />
          <Support />
          <FAQ />
          <PaymentsStrip tone="surface" />
          <SiteFinalCTA title={<>Ready for cloud that <span className="text-green">actually performs</span>?</>} subtitle="Stable, fast, and always available. Get a ready-to-use cloud environment built for Pakistani businesses — with transparent PKR pricing and real human support." />
        </main>
        <SiteFooter />
        <SiteMobileStickyCTA />
        <FAQSchema />
      </div>
    </>
  );
}
