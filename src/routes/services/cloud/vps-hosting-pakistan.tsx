import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import {
  IconSecurity as ShieldCheck,
  IconServer as ServerCog,
  IconNetwork as Network,
  IconStorage as HardDrive,
  IconLock as LockKeyhole,
  IconRefresh as RefreshCcw,
  IconHeadphones as Headphones,
  IconGauge as Gauge,
  IconWhatsApp as MessageCircle,
  IconCloud,
  IconSeedling,
  IconBriefcase,
  IconRocket,
  IconBuilding,
  IconUserCog,
  IconWrench,
} from "@/components/cloud/icons";
import {
  SiteHeader,
  SiteFooter,
  SiteFinalCTA,
  SiteMobileStickyCTA,
  WHATSAPP_HREF,
  CTA_PRIMARY,
  CTA_SECONDARY,
} from "@/components/cloud/site/chrome";
import { CustomersStrip, PaymentsStrip } from "@/components/cloud/site/trust-strips";
import { ClientTestimonials } from "@/components/cloud/site/client-testimonials";
import { SolutionsGrid } from "@/components/cloud/site/SolutionsGrid";
import {
  BillingToggle,
  type BillingCycle,
  TierIIIBadge,
  CTAPair,
  FeatureCard,
  Section,
  SectionHeading,
  FAQ,
} from "@/components/cloud/site/primitives";
import { useContactDialog } from "@/components/cloud/site/contact-dialog";
import vpsHero from "@/assets/cloud/vps-hero-v2.webp";
import linuxServer from "@/assets/cloud/vps/linux-server.webp";
import windowsServer from "@/assets/cloud/vps/windows-server.webp";
import ucEcommerce from "@/assets/cloud/vps/uc-ecommerce.webp";
import ucSaas from "@/assets/cloud/vps/uc-saas.webp";
import ucAgency from "@/assets/cloud/vps/uc-agency.jpg";
import ucGaming from "@/assets/cloud/vps/uc-gaming.jpg";
import ucForex from "@/assets/cloud/vps/uc-forex.jpg";
import ucRdp from "@/assets/cloud/vps/uc-rdp.jpg";
import PageMeta from "@/components/cloud/site/PageMeta";
import VPSSchema from "@/pages/schemaFiles/cloud-schema-files/VPSSchema";
import VPSHerojson from "@/assets/cloud/vps-hero-v2.webp.asset.json"

export const Route = createFileRoute("/services/cloud/vps-hosting-pakistan")({
  component: VpsPage,
  // head: () => ({
  //   meta: [
  //     { title: "VPS Hosting in Pakistan from PKR 12,500/mo | BrainCLOUD" },
  //     {
  //       name: "description",
  //       content:
  //         "Tier III VPS hosting in Pakistan. NVMe SSD, dedicated IPv4, root access, Linux & Windows, 24/7 local support. PKR billing. Plans from PKR 12,500/mo.",
  //     },
  //     {
  //       name: "keywords",
  //       content:
  //         "vps hosting in pakistan, vps server hosting in pakistan, vps hosting price in pakistan, windows vps in pakistan, linux vps in pakistan, cheap vps in pakistan, managed vps pakistan, buy vps in pakistan",
  //     },
  //     {
  //       property: "og:title",
  //       content: "VPS Hosting in Pakistan from PKR 12,500/mo | BrainCLOUD",
  //     },
  //     {
  //       property: "og:description",
  //       content:
  //         "Dedicated server power, without the dedicated server price. Tier III VPS in Pakistan — NVMe SSD, dedicated IPv4, Linux & Windows, 24/7 PK support.",
  //     },
  //     { property: "og:type", content: "product" },
  //     { property: "og:image", content: vpsHero },
  //     { name: "twitter:card", content: "summary_large_image" },
  //     { name: "twitter:image", content: vpsHero },
  //     {
  //       name: "twitter:description",
  //       content:
  //         "Dedicated server power, without the dedicated server price. Tier III VPS in Pakistan from PKR 12,500/mo.",
  //     },
  //   ],
  // }),
});

/* ----------------------------- data ----------------------------- */

const PLANS = [
  {
    name: "Ready",
    tagline: "WordPress, small SaaS, dev & staging",
    icon: IconSeedling,
    price: "12,500",
    vcpu: "2 vCPU",
    ram: "4 GB RAM",
    ssd: "200 GB NVMe SSD",
    cir: "2 Mbps CIR bandwidth",
    bw: "75 Gb monthly transfer",
    highlight: false,
  },
  {
    name: "Better",
    tagline: "Busy WooCommerce, production SaaS",
    icon: IconBriefcase,
    price: "31,250",
    vcpu: "8 vCPU",
    ram: "32 GB RAM",
    ssd: "800 GB NVMe SSD",
    cir: "8 Mbps CIR bandwidth",
    bw: "200 Gb monthly transfer",
    highlight: false,
  },
  {
    name: "Best",
    tagline: "High-traffic stores, MT5 fleets, multi-tenant SaaS",
    icon: IconRocket,
    price: "37,500",
    vcpu: "16 vCPU",
    ram: "48 GB RAM",
    ssd: "1,600 GB NVMe SSD",
    cir: "10 Mbps CIR bandwidth",
    bw: "500 Gb monthly transfer",
    highlight: true,
  },
  {
    name: "Awesome",
    tagline: "Large databases, video, heavy concurrency",
    icon: IconBuilding,
    price: "62,500",
    vcpu: "30 vCPU",
    ram: "128 GB RAM",
    ssd: "2,500 GB NVMe SSD",
    cir: "20 Mbps CIR bandwidth",
    bw: "1,000 Gb monthly transfer",
    highlight: false,
  },
];


const DIFFERENTIATORS = [
  {
    icon: HardDrive,
    title: "Enterprise SAN + NVMe SSD",
    body: "SAN and RAID-protected NVMe SSDs with a high-availability architecture — faster read/write speeds, built-in redundancy, and zero performance degradation even under heavy workloads.",
  },
  {
    icon: Network,
    title: "Dedicated IPv4 on every plan",
    body: "Each VPS gets its own clean IP address — separate from every other customer. Matters for SSL binding, email deliverability, and avoiding blacklists caused by other users' activity.",
  },
  {
    icon: ShieldCheck,
    title: "Network-layer DDoS mitigation",
    body: "DDoS protection is active by default on every BrainCLOUD VPS hosting plan in Pakistan — no add-on fee, no manual activation. Volumetric attacks are filtered at the network edge before they ever reach your server.",
  },
  {
    icon: Gauge,
    title: "Instant resource scaling",
    body: "Outgrow your current plan? Add CPU cores, RAM, or storage directly from the client portal in minutes. No server rebuild, no migration window, no downtime.",
  },
  {
    icon: LockKeyhole,
    title: "Full root & admin control",
    body: "Unrestricted access to your virtual server environment. Install any software, define custom firewall rules, create or restrict user permissions — configure the server your way.",
  },
  {
    icon: Headphones,
    title: "24/7 support from Pakistan",
    body: "Engineers based in Pakistan on live chat, phone, and tickets. They understand Pakistani business hours, local application stacks, and the needs of SMBs and agencies here.",
  },
  {
    icon: RefreshCcw,
    title: "Daily automated backups",
    body: "BrainCLOUD automatically snapshots your VPS data every day. Restore individual files or roll back the entire server to a previous state with a single click.",
  },
  {
    icon: ServerCog,
    title: "Billed in PKR — pay your way",
    body: " All BrainCLOUD VPS plans are priced and invoiced in Pakistani Rupees, with no USD conversion at checkout. Pay via bank transfer, EasyPaisa, JazzCash, or credit card — the price you see on this page is the price you pay, every renewal.",
  },
];

const USE_CASES = [
  {
    img: ucEcommerce,
    title: "E-Commerce Stores",
    body: "Keep WooCommerce, Magento, or a custom storefront stable during Eid sales, 11.11, and flash-deal traffic spikes — without the slowdowns that cripple shared hosting the moment a campaign goes live.",
  },
  {
    img: ucAgency,
    title: "Web Development Agencies",
    body: "Host multiple client projects on one VPS with cPanel or Plesk. Each project stays isolated in its own environment, so one client's traffic spike never slows down another's site.",
  },
  {
    img: ucSaas,
    title: "SaaS & Web App Developers",
    body: "Deploy Laravel, Django, Node.js, or Rails apps that need predictable uptime and compute that scales with your user base, not a shared-hosting plan you'll outgrow in six months.",
  },
  {
    img: ucGaming,
    title: "Game Server Operators",
    body: "Run low-latency Minecraft, CS2, or custom multiplayer servers with the bandwidth Pakistani players need for smooth gameplay without the ping spikes of an overseas host.",
  },
  {
    img: ucRdp,
    title: "Remote Desktop (RDP) Users",
    body: "Accountants, stock traders, and remote teams use Windows VPS with RDP to run Windows-only software from any device, without keeping a physical office workstation on 24/7.",
  },
  {
    img: ucForex,
    title: "Forex & Algorithmic Traders",
    body: "Run MetaTrader 4/5 and automated trading scripts continuously on a Windows VPS, with the low-latency uptime that matters when a few seconds of downtime means a missed trade.",
  },
];

const COMPARE_TABLE: Array<[string, string, string, string]> = [
  ["Resources", "Shared pool", "Dedicated per VM", "Entire server"],
  ["Root / Admin Access", "No", "Yes — full access", "Yes — full access"],
  ["Custom Software", "Limited", "Any software", "Any software"],
  ["Performance Under Load", "Drops on the spike", "Stable", "Maximum"],
  ["Dedicated IP", "Shared", "Yes", "Yes"],
  ["Price Range (PKR/mo)", "500 – 2,000", "12,500 – 62,500", "Custom (much higher)"],
  ["Best For", "Personal blogs, static sites", "SMBs, agencies, apps", "High-traffic enterprises"],
];

const STEPS = [
  {
    icon: IconBriefcase,
    title: "Select your plan",
    body: "Choose based on the RAM, CPU cores, and storage your application needs. Not sure where to start? The Best plan handles most SMB and agency workloads comfortably.",
  },
  {
    icon: ServerCog,
    title: "Choose your operating system",
    body: "Linux: Ubuntu, CentOS, Debian, AlmaLinux. Windows: Server 2019 or 2022. Add cPanel or Plesk during checkout if you want a graphical control panel.",
  },
  {
    icon: IconCloud,
    title: "Pay in PKR",
    body: "Complete your order via JazzCash, EasyPaisa, bank transfer, or credit card. No currency conversion. Fixed monthly charges, no surprise forex movement.",
  },
  {
    icon: LockKeyhole,
    title: "Receive credentials instantly",
    body: "Within minutes of payment, your server IP address, root or admin credentials, and login instructions arrive in your registered email.",
  },
  {
    icon: Network,
    title: "Connect and configure",
    body: "SSH into your Linux VPS or open Remote Desktop to your Windows VPS and start building. Our 24/7 team is on standby if you hit any roadblocks.",
  },
];

// const FAQS = [
const FAQS: Array<{ q: string; a: string; content?: React.ReactNode }> = [
  {
    q: "What is VPS server hosting?",
    a: "A VPS provides your website or app with a dedicated part of a server. You receive guaranteed CPU, RAM, and NVMe SSD, all for your exclusive use. Plus, you have full root or admin access to set it up the way you want.",
  },
  {
    q: "How is VPS different from shared hosting?",
    a: "Shared hosting means many sites share the same CPU, RAM, and IP. If one site gets a lot of traffic, it can slow down the others. VPS provides isolated resources, a personal IP, and root/admin access. Shared hosting does not offer these features.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. Switch between Ready, Better, Best, or Awesome. You can also add CPU, RAM, and storage right from the client portal. There’s no downtime or server rebuild needed.",
  },
  {
    q: "Do you offer Windows VPS hosting?",
    a: "",
    content: (
      <>
        <p>Yes, at the same price as Linux.</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Comes with full RDP access</li>
          <li>
            Includes genuine Microsoft Server 2019/2022 licensing at no extra
            charge
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "Which security features do they include?",
    a: "",
    content: (
      <>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Default network-layer DDoS protection</li>
          <li>Dedicated IPv4</li>
          <li>Daily automated backups with one-click restore</li>
          <li>Free SSL on every plan</li>
        </ul>
      </>
    ),

  },
  {
    q: "Where is BrainCLOUD's VPS hosting located?",
    a: "A Tier III data center in Pakistan offers local latency of under 30ms for users.",
  },
  {
    q: "How much does VPS hosting cost in Pakistan?",
    a: "Plans start at PKR 12,500/mo (Ready) and go up to PKR 62,500/mo (Awesome). Annual billing saves 17%. Dedicated IPv4, SSL, DDoS protection, and support are included—no setup fees.",
  },
];

const TECH_HEADING = "text-eyebrow text-navy/60";

/* ----------------------------- sections ----------------------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-hairline bg-surface">
      <img width={1920} height={1071} loading="lazy"
        src={vpsHero}
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-10 lg:pt-14 lg:pb-12">
        <div className="animate-fade-up space-y-7 max-w-3xl">
          <h1 className="font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            High-Performance VPS Hosting in Pakistan.
          </h1>
          <p className="max-w-xl text-lede text-navy/75">
            BrainCLOUD gives your website or app a virtual server. It's located in our Tier III data center in Pakistan. It’s not part of an overcrowded shared server. Each VPS hosting plan gives you dedicated vCPU, RAM, and NVMe SSD. This means your performance stays steady, whether you have 10 visitors or 10,000. No resource sharing. No noisy-neighbour slowdowns. No hidden charges. PKR pricing and a server ready in under an hour.
          </p>
          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              <a href="#plans" className={CTA_PRIMARY}>
                SEE VPS PLANS & PRICING
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={WHATSAPP_HREF} className={CTA_SECONDARY}>
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
            <p className="text-xs font-medium text-navy/55">
              Deployed in 1 hr · We reply within 1 business hour · Available 24/7
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-hairline sm:grid-cols-4 max-w-2xl">
            {[
              { k: "PKR 12,500", v: "Starting / mo" },
              { k: "<30ms", v: "Local latency" },
              { k: "1 hr", v: "Provisioning" },
              { k: "Tier III", v: "Data Center" },
            ].map((s) => (
              <div key={s.k} className="bg-white/90 backdrop-blur px-4 py-5 text-center">
                <div className="font-display text-2xl font-extrabold text-navy">{s.k}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-navy/50">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const [cycle, setCycle] = React.useState("monthly" as BillingCycle);
  const { open } = useContactDialog();
  const fmt = (n: number) => n.toLocaleString("en-PK");
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = React.useState(0);
  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const handler = () => {
      const cardWidth = el.scrollWidth / PLANS.length;
      if (cardWidth > 0) setActiveIdx(Math.round(el.scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);
  const scrollToIdx = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / PLANS.length;
    el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
  };
  return (
    <section id="plans" className="bg-white !py-10 md:!py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className={TECH_HEADING}>Plans & pricing</span>
            <h2 className="mt-4 font-display text-h2 font-extrabold text-inherit">
              Our VPS Hosting Plans & Pricing in Pakistan
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy/70">
              Check out our VPS hosting plans in Pakistan below. Pick the option that suits you best. This applies whether you run a small WordPress site or a busy multi-tenant SaaS platform.
              {" "}
              <p> Every plan, whether Linux VPS or Windows VPS, comes with:</p>
              <ul className="m-3 list-disc space-y-1 pl-5">
                <li>A dedicated IPv4 address</li>
                <li>Full root or administrator access</li>
                <li>Enterprise NVMe SSD storage</li>
                <li>Free SSL</li>
                <li>Network-layer DDoS protection</li>
                <li>24/7 managed support from our team in Pakistan</li>
              </ul>

              <p>No setup fees. No long-term contracts. No forced annual billing. You can pay monthly or save 17% by paying annually. Need something outside our standard specs? Our sales team will build a custom VPS server hosting quote in PKR.
              </p>

            </p>
          </div>
          <div className="flex flex-col items-start gap-2 lg:flex-none lg:items-end">
            <BillingToggle value={cycle} onChange={setCycle} />
            <p className="text-xs font-medium text-navy/55">
              {cycle === "annual"
                ? "Annual billing — pay for 10 months, get 12."
                : "Monthly billing — cancel anytime, no setup fees."}
            </p>
          </div>
        </div>
        <div
          ref={scrollerRef}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:snap-none md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:grid-cols-2 lg:grid-cols-4 lg:items-start"
        >
          {PLANS.map((p) => {
            const TierIcon = p.icon;
            const monthly = Number(p.price.replace(/,/g, ""));
            const annualMonthly = Math.round((monthly * 10) / 12);
            const displayed = cycle === "annual" ? annualMonthly : monthly;
            return (
              <div
                key={p.name}
                className={"relative flex flex-col card-surface card-surface-hover min-w-[85%] flex-none snap-center md:min-w-0 md:flex-auto " +
                  (p.highlight
                    ? "border-green ring-2 ring-green/40 shadow-[var(--shadow-card-hover)] lg:order-none lg:-translate-y-4 p-7 sm:p-8 lg:p-10"
                    : "p-6 sm:p-7 lg:p-8")
                }
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green px-4 py-1.5 text-eyebrow text-white shadow-cta">
                    ★ Best seller
                  </span>
                )}
                <div
                  className={"flex items-center justify-center rounded-[var(--radius-card)] " +
                    (p.highlight ? "h-14 w-14 bg-green text-white" : "h-12 w-12 bg-green/10 text-green")
                  }
                >
                  <TierIcon className={p.highlight ? "h-7 w-7" : "h-6 w-6"} />
                </div>
                <h3 className={"mt-4 font-display font-extrabold text-navy " + (p.highlight ? "text-xl" : "text-lg")}>{p.name}</h3>
                <p className="mt-1 text-xs leading-snug text-navy/60">{p.tagline}</p>
                <div className="mt-3">
                  <div className="flex items-baseline gap-1">
                    <span className={"font-display font-extrabold text-navy " + (p.highlight ? "text-4xl" : "text-3xl")}>PKR {fmt(displayed)}</span>
                    <span className="text-sm text-navy/60">/mo</span>
                  </div>
                  {cycle === "annual" ? (
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px]">
                      <span className="text-navy/45 line-through">PKR {p.price}</span>
                      <span className="rounded-full bg-green/10 px-2 py-0.5 font-extrabold uppercase tracking-[0.1em] text-green">
                        Save 17%
                      </span>
                    </div>
                  ) : (
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px]">
                      <span className="text-navy/55">or PKR {fmt(annualMonthly)}/mo annually</span>
                      <span className="rounded-full bg-green/10 px-2 py-0.5 font-extrabold uppercase tracking-[0.1em] text-green">
                        Save 17%
                      </span>
                    </div>
                  )}
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-navy/80">
                  {[p.vcpu, p.ram, p.ssd, p.cir, p.bw, "1 × Dedicated IPv4"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-none text-green" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <Button
                    type="button"
                    onClick={() => open({ intent: `VPS · ${p.name}`, service: "VPS Hosting" })}
                    className={"h-12 w-full rounded-full font-bold transition-transform " +
                      (p.highlight
                        ? "bg-green text-white shadow-cta hover:bg-green hover:-translate-y-0.5"
                        : "border border-navy/10 bg-white text-navy hover:bg-navy hover:text-white")
                    }
                  >
                    Start with {p.name} →
                  </Button>
                  <p className="mt-2 text-center text-[11px] font-medium text-navy/50">
                    Deployed in 1 hr · No setup fees
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex justify-center gap-2 md:hidden" role="tablist" aria-label="Plans">
          {PLANS.map((p, i) => (
            <button
              key={p.name}
              type="button"
              role="tab"
              aria-selected={i === activeIdx}
              aria-label={`Show ${p.name} plan`}
              onClick={() => scrollToIdx(i)}
              className={"h-2 rounded-full transition-all " + (i === activeIdx ? "w-6 bg-green" : "w-2 bg-navy/20")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LinuxVsWindows() {
  return (
    <Section tone="surface" id="os" className="!py-10 md:!py-14">
      <div className="mb-12">
        <SectionHeading
          eyebrow="Operating systems"
          title={<>Linux VPS or Windows VPS — pick the environment that <span className="text-green">fits your stack</span>.</>}
          lede="Choosing Linux VPS hosting or Windows VPS hosting in Pakistan depends on your needs, not the cost. BrainCLOUD prices the two operating systems the same. So, your choice depends on your application, not your budget. Windows VPS plans come with genuine Microsoft Server licensing (2019 or 2022) included for free. Many budget VPS providers in Pakistan charge extra for this."
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="overflow-hidden card-surface card-surface-hover">
          <div className="aspect-[16/10] overflow-hidden bg-navy sm:aspect-[4/3]">
            <img decoding="async"
              src={linuxServer}
              alt="Linux VPS hosting in Pakistan"
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 sm:p-7 lg:p-8">
            <h3 className="font-display text-h3 font-extrabold text-navy">Linux VPS Hosting</h3>
            <p className="mt-3 text-base leading-relaxed text-navy/75">
              Developers and agencies often choose our Linux VPS hosting in Pakistan. They work with PHP, Python, Node.js, or Ruby. It supports NGINX, LiteSpeed, Apache, cPanel, and Plesk. It also offers better performance per rupee than a similar Windows setup. If your team uses the command line and needs root access, this is for you.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-navy/80">
              {[
                "LAMP / LEMP stacks, Laravel, Symfony, WordPress, Magento, WooCommerce",
                "Node.js, Python (Django, Flask, FastAPI), Ruby on Rails, Go",
                "cPanel, Plesk, DirectAdmin, CyberPanel",
                "NGINX, Apache, LiteSpeed, HAProxy, Docker",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-green" strokeWidth={3} />
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-navy/60">
              <strong className="text-navy">Distributions:</strong> Ubuntu 22.04 / 24.04 LTS · AlmaLinux 9 · Rocky Linux 9 · Debian 12 · CentOS Stream.
            </p>
          </div>
        </article>
        <article className="overflow-hidden card-surface card-surface-hover">
          <div className="aspect-[16/10] overflow-hidden bg-navy sm:aspect-[4/3]">
            <img decoding="async"
              src={windowsServer}
              alt="Windows VPS hosting with RDP access in Pakistan"
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 sm:p-7 lg:p-8">
            <h3 className="font-display text-h3 font-extrabold text-navy">Windows VPS Hosting (RDP Included)</h3>
            <p className="mt-3 text-base leading-relaxed text-navy/75">
              A Windows virtual server, or Windows VPS with RDP, is ideal for tasks that need a Windows-only setup. Every Windows VPS from BrainCLOUD in Pakistan offers full Remote Desktop Protocol access. You also get genuine Microsoft Server licensing and admin control from day one. This means you won't deal with a pirated license or limited permissions.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-navy/80">
              {[
                "Full RDP (Remote Desktop Protocol) access from any device",
                "ASP.NET and IIS support for .NET applications",
                "MSSQL database compatibility",
                "Genuine Microsoft Server licensing (2019 or 2022) included, not billed separately",
                "Windows-only tools: QuickBooks, accounting software, MetaTrader 4/5, trading bots",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-green" strokeWidth={3} />
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-navy/60">
              <strong className="text-navy">Editions:</strong> Windows Server 2019 Standard · Windows Server 2022 Standard.
            </p>
          </div>
        </article>
      </div>
      <div className="mt-12">
        <CTAPair
          align="center"
          primaryHref="#plans"
          primaryLabel="SEE VPS PLANS & PRICING"
          microcopy={null}
        />
      </div>
    </Section>
  );
}

function WhatMakesDifferent() {
  return (
    <Section tone="white" id="why" className="!py-10 md:!py-14">
      <div className="mb-12">
        <SectionHeading
          eyebrow="What makes us different"
          title={<>What makes BrainCLOUD different from <span className="text-green">other VPS providers</span> in Pakistan.</>}
          lede="Search VPS hosting Pakistan, and you'll find dozens of providers reselling the same international template plans with a PKR price tag stapled on. BrainCLOUD is engineered from the ground up for Pakistani businesses — infrastructure, billing, and support built around what local developers, agencies, and SMBs actually need, not a generic global VPS product localized after the fact."
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {DIFFERENTIATORS.map((d) => (
          <FeatureCard key={d.title} icon={d.icon} title={d.title}>
            {d.body}
          </FeatureCard>
        ))}
      </div>
      <div className="mt-12">
        <CTAPair
          align="center"
          primaryHref="#plans"
          primaryLabel="SEE VPS PLANS & PRICING"
          microcopy={null}
        />
      </div>
    </Section>
  );
}

function WhoShouldUse() {
  return (
    <Section tone="surface" id="use-cases" className="!py-10 md:!py-14">
      <div className="mb-12">
        <SectionHeading
          eyebrow="WHO SHOULD BE RUNNING ON A VPS"
          title={<>Who should be running on a <span className="text-green">VPS</span>?</>}
          lede="A VPS isn’t the same for everyone. The best plan depends on what you’re running, who visits, and how quickly you plan to grow. Here’s how businesses in Pakistan, like those in Karachi, Lahore, and Islamabad, use BrainCLOUD VPS hosting."
        />
      </div>
      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {USE_CASES.map((u) => (
          <article
            key={u.title}
            className="group flex flex-col overflow-hidden card-surface card-surface-hover"
          >
            <div className="aspect-[16/10] overflow-hidden bg-navy">
              <img decoding="async"
                src={u.img}
                alt={u.title}
                loading="lazy"
                width={640}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-h3 font-extrabold text-navy">{u.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">{u.body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <CTAPair
          align="center"
          primaryHref="#plans"
          primaryLabel="SEE VPS PLANS & PRICING"
          microcopy={null}
        />
      </div>
    </Section>
  );
}

function CompareTiers() {
  return (
    <Section tone="white" id="compare" className="!py-10 md:!py-14">
      <div className="mb-10">
        <SectionHeading
          eyebrow="Tiers compared"
          title={<>Shared Hosting vs VPS Hosting vs <span className="text-green">Dedicated Server</span>.</>}
          lede="If shared hosting can't handle your traffic, and a dedicated server seems too much, try VPS hosting. It's often the best choice. A VPS offers growing businesses in Pakistan the stability of a dedicated server, but at a lower cost. The table below shows how each tier compares."
        />
      </div>
      <div className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy/[0.03] font-display text-xs uppercase tracking-[0.12em] text-navy/70">
              <tr>
                <th className="px-5 py-3">Feature</th>
                <th className="px-5 py-3">Shared Hosting</th>
                <th className="px-5 py-3 text-green">VPS Hosting</th>
                <th className="px-5 py-3">Dedicated Server</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_TABLE.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-navy/[0.02]" : ""}>
                  <td className="px-5 py-3 font-bold text-navy">{row[0]}</td>
                  <td className="px-5 py-3 text-navy/60">{row[1]}</td>
                  <td className="px-5 py-3 font-bold text-navy">{row[2]}</td>
                  <td className="px-5 py-3 text-navy/60">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

function HowToOrder() {
  return (
    <Section tone="surface" id="how-to-order" className="!py-10 md:!py-14">
      <div className="mb-12">
        <SectionHeading
          eyebrow="How to order"
          title={<>Go live on your BrainCLOUD VPS in <span className="text-green">under 1 hour</span>.</>}
          lede="Getting from order to live server is a straightforward process."
        />
      </div>
      <ol className="grid auto-rows-fr gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {STEPS.map((s, i) => {
          const StepIcon = s.icon;
          return (
            <li key={s.title} className="relative card-surface p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-navy font-display text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
                  <StepIcon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-4 font-display text-base font-extrabold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{s.body}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

function ManagedVsUnmanaged() {
  return (
    <Section tone="white" id="support" className="!py-10 md:!py-14">
      <div className="mb-12">
        <SectionHeading
          eyebrow="Managed vs Unmanaged"
          title={<>Managed vs Unmanaged VPS, <span className="text-green">What We Provide</span>.</>}
          lede="All BrainCLOUD VPS hosting plans in Pakistan include free 24/7 managed technical support. Many budget providers in Pakistan charge extra for this service. If something breaks at 3 AM, our engineers fix it, whether you're on an unmanaged or fully managed setup."
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="card-surface card-surface-hover p-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-card)] bg-navy/10 text-navy">
            <IconUserCog className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display text-h3 font-extrabold text-navy">Unmanaged VPS</h3>
          <p className="mt-3 text-base leading-relaxed text-navy/70">
            You receive a clean server. The team pre-installs the OS and leaves everything else untouched. Software configuration, security hardening, updates, and maintenance are in your hands. Ideal for seasoned sysadmins and developers seeking full control over all stack layers.
          </p>
        </article>
        <article className="card-surface card-surface-hover border-green/40 p-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
            <IconWrench className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display text-h3 font-extrabold text-navy">Managed VPS</h3>
          <p className="mt-3 text-base leading-relaxed text-navy/70">
            BrainCLOUD handles OS updates, security patches, and checks server health. It also configures firewalls and performs maintenance in the background. Your team handles the application. We manage the infrastructure. It's included in every plan and not billed extra.
          </p>
        </article>
      </div>
      <p className="mt-8 text-center text-sm text-navy/70">
        You can choose fully managed add-ons for extra support. These include cPanel/WHM management, monthly server audits, and hands-on maintenance. They’re perfect for teams wanting more help with their setup.
      </p>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section tone="surface" id="faq" containerClassName="max-w-4xl" className="!py-10 md:!py-14">
      <div className="mb-12 text-center">
        <SectionHeading
          align="center"
          eyebrow="FAQs"
          title="Frequently Asked Questions"
        />
      </div>
      {/* <FAQ items={FAQS.map((f) => ({ q: f.q, a: f.a }))} /> */}
      <FAQ items={FAQS.map((f) => ({ q: f.q, a: f.content ?? f.a }))} />
    </Section>
  );
}

/* ------------------------- JSON-LD schemas ------------------------- */

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
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function ProductSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BrainCLOUD VPS Hosting in Pakistan",
    description:
      "Tier III VPS server hosting in Pakistan with NVMe SSD, dedicated IPv4, root access, Linux and Windows support, and 24/7 Pakistan-based engineering.",
    brand: { "@type": "Brand", name: "BrainCLOUD" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PKR",
      lowPrice: "12500",
      highPrice: "62500",
      offerCount: PLANS.length,
      offers: PLANS.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price.replace(/,/g, ""),
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ----------------------------- page ----------------------------- */

function FloatingPlansCTA() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#plans"
      aria-label="Jump to VPS plans and pricing"
      className={
        "fixed bottom-8 right-8 z-40 hidden items-center gap-2 rounded-full bg-green px-5 py-3 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-cta transition-all duration-300 hover:-translate-y-0.5 md:inline-flex " +
        (show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3")
      }
    >
      SEE VPS PLANS & PRICING
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function VpsPage() {
  return (
    <>
      <PageMeta
        title="VPS Hosting Pakistan | Linux & Windows VPS | BrainCLOUD"
        description="Fast VPS hosting in Pakistan with Linux & Windows support, NVMe SSD, dedicated IP, daily backups, and 24/7 local support."
        keywords="vps hosting in pakistan, vps server hosting in pakistan, vps hosting price in pakistan, windows vps in pakistan, linux vps in pakistan, cheap vps in pakistan, managed vps pakistan, buy vps in pakistan"
        ogTitle="VPS Hosting Pakistan | Linux & Windows VPS | BrainCLOUD"
        ogDescription="Dedicated server power, without the dedicated server price. Tier III VPS in Pakistan — NVMe SSD, dedicated IPv4, Linux & Windows, 24/7 PK support."
        ogType="product"
        ogUrl="/vps-hosting-pakistan"
        ogImage={VPSHerojson.url}
        twitterCard="summary_large_image"
        twitterImage={VPSHerojson.url}
        twitterDescription="Dedicated server power, without the dedicated server price. Tier III VPS in Pakistan from PKR 12,500/mo."
        canonical="/services/cloud/vps-hosting-pakistan"
        schema={VPSSchema}
      />
      <div className="min-h-screen bg-surface text-navy">
        <SiteHeader />
        <main className="pb-20 md:pb-0">
          <Hero />
          <CustomersStrip tone="white" />
          <Plans />
          <ClientTestimonials className="!py-10 md:!py-14" />
          <LinuxVsWindows />
          <WhatMakesDifferent />
          <WhoShouldUse />
          <CompareTiers />
          <HowToOrder />
          <ManagedVsUnmanaged />
          <FAQSection />
          <SolutionsGrid
            variant="cross-link"
            excludeTo="/services/cloud/vps-hosting-pakistan"
            eyebrow="Other hosting solutions"
            heading="Need more power, or more flexibility?"
            subheading="Compare BrainCLOUD's Cloud Hosting and Dedicated Servers if VPS isn't quite the right fit."
            className="!py-10 md:!py-14"
          />
          <PaymentsStrip tone="white" />
          <SiteFinalCTA
            title={
              <>
                Ready to move your business to a <span className="text-green">faster, more reliable</span> server?
              </>
            }
            subtitle="BrainCLOUD offers Pakistani businesses dedicated VPS infrastructure. You also get local support and clear PKR pricing. This all comes without the high cost or complexity of a full dedicated server. Pick a plan above, go live in under an hour, and scale whenever you're ready."
          />
        </main>
        <SiteFooter />
        <SiteMobileStickyCTA />
        <FloatingPlansCTA />
        <FAQSchema />
        <ProductSchema />
      </div>
    </>
  );
}
