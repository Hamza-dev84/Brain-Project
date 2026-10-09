import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Server,
  Zap,
  Globe,
  Lock,
  Snowflake,
  Wrench,
  ShieldCheck,
  Network,
  BadgeCheck,
  TrendingUp,
  Headphones,
  Banknote,
  HeartPulse,
  ShoppingCart,
  Cloud,
  Clapperboard,
  Landmark,
  Phone,
  Calendar,
} from "lucide-react";
import {
  SiteHeader,
  SiteFooter,
  SiteMobileStickyCTA,
  WHATSAPP_HREF,
  FOCUS_RING,
  CTA_PRIMARY,
  CTA_SECONDARY,
  FOCUS_RING_DARK,
} from "@/components/cloud/site/chrome";
import { useContactDialog } from "@/components/cloud/site/contact-dialog";
import {
  Section,
  SectionHeading,
  Eyebrow,
  CTAPair,
  FeatureCard,
  PricingCard,
  FAQ,

  TierIIIBadge,
  type PricingTier,
} from "@/components/cloud/site/primitives";
import { CustomersStrip, PaymentsStrip } from "@/components/cloud/site/trust-strips";
import { ClientTestimonials } from "@/components/cloud/site/client-testimonials";

import heroImage from "@/assets/cloud/colocation-hero.webp";
import cloudColocationImage from "@/assets/cloud/cloud-colocation-v2.webp";
import PageMeta from "@/components/cloud/site/PageMeta"
import ColocationSchema from "@/pages/schemaFiles/cloud-schema-files/ColocationSchema";


export const Route = createFileRoute("/services/cloud/colocation-services-pakistan")({
  component: ColocationPage,
  // head: () => ({
  //   meta: [
  //     {
  //       title:
  //         "Colocation Services in Pakistan — Cloud Colocation & Data Center | BrainCLOUD",
  //     },
  //     {
  //       name: "description",
  //       content:
  //         "BrainCLOUD colocation & cloud colocation in Pakistan. Tier III facility, N+1 power, carrier-neutral 10Gbps, 24/7 remote hands. 1U to private cage. Transparent pricing.",
  //     },
  //     {
  //       name: "keywords",
  //       content:
  //         "colocation services pakistan, cloud colocation, data center pakistan, server colocation lahore, 1u colocation, full rack colocation, carrier neutral data center pakistan",
  //     },
  //     {
  //       property: "og:title",
  //       content: "Colocation Services in Pakistan | BrainCLOUD",
  //     },
  //     {
  //       property: "og:description",
  //       content:
  //         "Tier III colocation & cloud colocation in Pakistan — your hardware, our facility. N+1 power, carrier-neutral 10Gbps, 24/7 remote hands.",
  //     },
  //   ],
  // }),
});

/* ----------------------------- data ----------------------------- */

const INCLUDED = [
  {
    icon: Server,
    title: "1U, 2U, 4U & Half/Full Rack Colocation",
    body: "Flexible rack space options — from a single 1U server to a full cabinet. Choose the footprint that fits, expand anytime.",
    list: [
      "1U Colocation",
      "2U Colocation",
      "4U Colocation",
      "Quarter Rack (10U)",
      "Half Rack (20U)",
      "Full Rack (42U)",
      "Private Cage / Suite",
    ],
  },
  {
    icon: Zap,
    title: "Redundant Power — No Single Point of Failure",
    body: "Every colocation cabinet has dual power feeds, industrial UPS systems, and diesel generator backup. If the grid goes down, your servers keep running.",
    list: [
      "N+1 power redundancy as standard",
      "Metered and managed PDUs per rack",
      "Custom high-density power available",
    ],
  },
  {
    icon: Globe,
    title: "High-Speed, Carrier-Neutral Connectivity",
    body: "We don't lock you into a single ISP. As a carrier-neutral facility, you can access multiple Tier 1 internet providers with competitive bandwidth pricing and real redundancy.",
    list: [
      "1Gbps and 10Gbps port options",
      "Unmetered bandwidth plans available",
      "Low-latency private interconnects within Lahore",
    ],
  },
  {
    icon: Lock,
    title: "Physical Security, 24/7/365.",
    body: "Your hardware gets layers of physical security most businesses can't match.",
    list: [
      "Biometric access control",
      "24/7 CCTV surveillance with offsite backup",
      "24/7 access to data center available",
      "Strict visitor logging and escort policies",
      "On-site security personnel",
    ],
  },
  {
    icon: Snowflake,
    title: "Precision Cooling — Optimized for Your Workloads",
    body: "Advanced hot-aisle/cold-aisle design and precision climate control maintain optimal temperature and humidity, protecting your equipment and ensuring peak performance.",
    list: [],
  },
  {
    icon: Wrench,
    title: "Remote Hands & Smart Hands Support",
    body: "You can't always be on-site. Our certified 24/7/365 Technical Support Team handles server reboots, cable organization, hardware swaps, and OS installations.",
    list: [
      "24/7 Remote Hands support",
      "Scheduled and emergency Smart Hands available",
      "Detailed work logs and photo documentation",
    ],
  },
];

const CLOUD_BENEFITS = [
  { t: "Data Sovereignty", d: "Sensitive data stays on your hardware, under your control" },
  { t: "Cloud flexibility", d: "Burst to AWS, Azure, or Google Cloud when demand spikes" },
  { t: "Cost optimization", d: "Run predictable workloads on owned hardware; pay-as-you-go for variable loads" },
  { t: "Compliance", d: "Meet regulatory requirements that pure cloud can't always satisfy" },
  { t: "Low latency", d: "Direct cloud interconnects dramatically reduce application latency" },
];

const USE_CASES = [
  "Hybrid cloud colocation for enterprises balancing on-prem and cloud workloads",
  "Disaster recovery with cloud failover capabilities",
  "AI and HPC workloads requiring GPU-dense, high-power rack deployments",
  "Edge computing for latency-sensitive applications",
  "Private cloud hosted in a secure, compliant colocation environment",
];

const PLANS: PricingTier[] = [
  {
    name: "Starter",
    price: "Contact Us",
    blurb: "1U/2U/3U/4U/5U",
    features: ["Rack space: 1U/2U/3U/4U/5U", "Power: Varies as Per Your Hardware", "Bandwidth: Variable"],
    ctaLabel: "Request Quote",
  },
  {
    name: "Growth",
    price: "Contact Us",
    blurb: "Half Rack (20U)",
    features: ["Rack space: Half Rack (20U)/Quarter Rack (10U)", "Power: Varies as Per Your Hardware", "Bandwidth: Varies as Per Your Hardware"],
    ctaLabel: "Request Quote",
  },
  {
    name: "Business",
    price: "Contact Us",
    blurb: "Full Rack (42U)",
    features: ["Rack space: Full Rack (42U)", "Power: Varies as Per Your Hardware", "Bandwidth: Varies as Per Your Hardware"],
    featured: true,
    ctaLabel: "Request Quote",
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    blurb: "Private Cage · Custom · Unmetered",
    features: ["Rack space: Private Cage", "Power: Varies as Per Your Hardware", "Bandwidth: Unmetered"],
    ctaLabel: "Request Quote",
  },
];

const WHY = [
  { icon: BadgeCheck, t: "99% Uptime SLA", d: "Not a marketing claim. A contractual guarantee with financial backing." },
  { icon: Network, t: "Carrier-Neutral Facility", d: "Freedom to choose your ISP. No vendor lock-in on bandwidth." },
  { icon: Banknote, t: "Transparent Pricing", d: "You know exactly what you're paying before you sign." },
  { icon: TrendingUp, t: "Scalable from Day One", d: "Start with 1U and grow to a private suite — all under one roof, one relationship." },
  { icon: ShieldCheck, t: "Compliance-Ready", d: "PTA CTDISR Audited, ISO 27001 aligned, PCI-DSS capable environments." },
  { icon: Headphones, t: "Real 24/7 Technical Support", d: "Engineers who pick up the phone, not just a chatbot ticket system." },
];

const INDUSTRIES = [
  { icon: Banknote, t: "Financial Services", d: "Low-latency trading, PCI-DSS compliance, secure data environments" },
  { icon: HeartPulse, t: "Healthcare", d: "HIPAA-compliant colocation for patient data and medical applications" },
  { icon: ShoppingCart, t: "E-Commerce", d: "High-availability infrastructure for peak traffic demands" },
  { icon: Cloud, t: "SaaS Companies", d: "Reliable, scalable hosting for software platforms" },
  { icon: Clapperboard, t: "Media & Gaming", d: "High-bandwidth, low-latency environments for streaming and online gaming" },
  { icon: Landmark, t: "Government & Public Sector", d: "Secure, FedRAMP-capable colocation options" },
];

const FAQS = [
  { q: "How much does colocation cost?", a: "Colocation pricing varies based on rack space, power requirements, and bandwidth. BrainCLOUD offers transparent pricing — contact us for a custom quote." },
  { q: "Do you offer managed colocation services?", a: "Yes. BrainCLOUD goes beyond standard colocation. We provide managed services including remote hands, server monitoring, firewall management, and OS-level support — so your team can focus on your business, not your infrastructure." },
  { q: "What happens if there is a power outage?", a: "BrainCLOUD data centers feature N+1 backup UPS systems, dual utility power feeds, and diesel generator backup. Your servers remain online even during extended grid outages." },
  { q: "Can I visit my equipment?", a: "Yes. Clients have secure, 24/7 access to their colocation space with prior scheduling. Remote hands services are also available for tasks you'd rather not travel for." },
  { q: "Is colocation good for disaster recovery?", a: "Colocation is a key part of disaster recovery planning. Our facility supports a dedicated area for backup hardware, failover systems, and off-site data replication." },
];

/* ----------------------------- page ----------------------------- */

function ColocationPage() {
  const { open: openContact } = useContactDialog();
  <PageMeta
    title="Colocation Services Pakistan | Tier III Data Center | BrainCLOUD"
    description="Colocation services in Pakistan with Tier III infrastructure, redundant power, carrier-neutral connectivity, and 24/7 support."
    keywords="colocation services pakistan, cloud colocation, data center pakistan, server colocation lahore, 1u colocation, full rack colocation, carrier neutral data center pakistan"
    ogTitle="Colocation Services in Pakistan | BrainCLOUD"
    ogDescription="Tier III colocation & cloud colocation in Pakistan — your hardware, our facility. N+1 power, carrier-neutral 10Gbps, 24/7 remote hands."
    ogUrl="/colocation-services-pakistan"
    canonical="/services/cloud/colocation-services-pakistan"
    schema={ColocationSchema}
  />
  return (
    <>
      <div className="min-h-screen bg-surface text-navy">
        <SiteHeader />

        {/* HERO — custom (no media) so we compose with primitives directly */}
        <section className="relative overflow-hidden border-b border-hairline bg-surface">
          {/* Background image, anchored right, faded to white on the left */}
          <img width={1693} height={929} loading="lazy" decoding="async"
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-60 md:w-[70%] md:opacity-100"
          />
          {/* Gradient overlay: solid white on the left, transparent on the right */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface from-30% via-surface/85 via-60% to-surface/30 md:from-surface md:from-25% md:via-surface/70 md:via-55% md:to-transparent"
          />
          {/* Extra bottom fade on mobile to keep CTAs legible */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent md:hidden"
          />

          <div className="container-x section-y relative z-10">
            <h1 className="max-w-4xl font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
              Colocation Services & Cloud Colocation, For Businesses That{" "}
              <span className="text-green">Can't Afford Downtime.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lede text-navy/70">
              Your IT infrastructure is the backbone of your business. It deserves
              more than a shared shelf in an overcrowded rack. At BrainCLOUD, we
              offer top-notch colocation services and cloud colocation solutions.
              You get complete control of your hardware and avoid the high costs
              and hassle of building a data center.
            </p>
            <CTAPair
              className="mt-9"
              primaryLabel="Get a free colocation quote"
              secondaryLabel="CHAT ON WHATSAPP"
              microcopy="No commitment · Written quote within 24 hours · Available 24/7"
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


        {/* WHAT'S INCLUDED */}
        <Section tone="surface" id="overview">
          <div className="mb-14">
            <SectionHeading
              eyebrow="What's included"
              title="Our Colocation Services"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title}>
                <p>{f.body}</p>
                {f.list.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {f.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-navy/75"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 flex-none text-green"
                          strokeWidth={3}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </FeatureCard>
            ))}
          </div>
        </Section>


        {/* CLOUD COLOCATION */}
        <Section tone="navy" className="relative overflow-hidden" id="cloud-colocation">
          {/* Full-bleed background image anchored to the right of the section, fading into navy toward the left */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[70%] lg:block"
          >
            <img width={1920} height={1279} decoding="async"
              src={cloudColocationImage}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/0" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                tone="dark"
                eyebrow="Cloud Colocation"
                title="The Best of Both Worlds"
                lede="Modern businesses don't choose between cloud and physical infrastructure — they use both. BrainCLOUD's colocation services let you run your on-premises servers in our facility while establishing fast, private, low-latency connections to public cloud platforms."
              />
              <p className="mt-4 text-base leading-relaxed text-white/60">
                This hybrid approach is the new standard for enterprises that
                need:
              </p>
            </div>

            {/* Translucent card over the photo holding the 5 benefits */}
            <div className="rounded-[var(--radius-card)] border border-white/15 bg-navy/55 p-6 shadow-[var(--shadow-card)] backdrop-blur-md lg:p-8">
              <Eyebrow tone="on-navy">What you get</Eyebrow>
              <ul className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                {CLOUD_BENEFITS.map((b) => (
                  <li key={b.t} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-extrabold leading-snug text-white">
                        {b.t}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-white/70">
                        {b.d}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* CLOUD COLOCATION USE CASES */}
        <Section tone="surface" id="use-cases" className="!pb-[var(--section-y-tight)]">
          <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Use Cases"
                title="Where Cloud Colocation Fits Best"
                lede="From hybrid cloud to AI workloads, our colocation services support the most demanding modern enterprise scenarios."
              />
            </div>
            <ol className="lg:col-span-7">
              {USE_CASES.map((u, i) => (
                <li
                  key={u}
                  className={
                    "group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-hairline py-6 transition-colors duration-[var(--dur-base)] ease-[var(--ease-out)] hover:bg-white/60" +
                    (i === USE_CASES.length - 1 ? " border-b" : "")
                  }
                >
                  <span className="font-display text-h3 font-extrabold tabular-nums text-navy/25 transition-colors duration-[var(--dur-base)] ease-[var(--ease-out)] group-hover:text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lede leading-snug text-navy/85">{u}</span>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* PRICING */}
        <Section tone="surface" id="pricing" className="!pt-[var(--section-y-tight)]">
          <div className="mb-14">
            <SectionHeading
              eyebrow="Pricing"
              title="Request Your Colo Space."
              lede="Custom Colocation plans — From a Single 1U Server to a Full Private Cage. Every plan is tailored to your space, power, and bandwidth needs."
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => (
              <PricingCard key={p.name} tier={p} />
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-navy/60">
            Custom configurations available. Need a custom quote? Contact our
            team for high-density power, GPU rack setups, and multi-rack
            environments.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              type="button"
              size="lg"
              onClick={() => openContact({ intent: "Colocation · Pricing", service: "Colocation", title: "Request colocation pricing", subtitle: "Tell us your rack / U requirements, power draw, and bandwidth. We'll send a PKR quote within 1 business hour." })}
              className={"group rounded-full bg-green px-8 py-6 font-extrabold text-white shadow-cta shadow-cta-hover hover:bg-green " +
                FOCUS_RING
              }
            >
              Request Colocation Pricing
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Section>

        {/* WHY BRAINCLOUD */}
        <Section tone="white" id="why" className="!pb-[var(--section-y-tight)]">
          <div className="mb-14">
            <SectionHeading
              eyebrow="Why BrainCLOUD"
              title="What Sets Us Apart"
              lede="Many companies crowd the colocation market. Here's why businesses choose BrainCLOUD over generic providers."
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.t}
                  className="card-surface card-surface-hover flex gap-4 p-6"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-card)] text-green">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-h3 font-extrabold text-navy">
                      {w.t}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy/65">
                      {w.d}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>






        {/* INDUSTRIES */}
        <Section tone="surface" id="industries" className="!pt-[var(--section-y-tight)] !pb-[var(--section-y-tight)]">
          <div className="mb-14">
            <SectionHeading
              eyebrow="Industries"
              title="Industries We Serve"
              lede="BrainCLOUD colocation and cloud colocation services support businesses across:"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((i) => {
              const Icon = i.icon;
              return (
                <div
                  key={i.t}
                  className="card-surface card-surface-hover p-6"
                >
                  <Icon className="h-7 w-7 text-green" strokeWidth={2} />
                  <h3 className="mt-4 font-display text-h3 font-extrabold text-navy">
                    {i.t}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/65">
                    {i.d}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* TESTIMONIALS */}
        <ClientTestimonials tone="surface" className="!pt-[var(--section-y-tight)] !pb-[var(--section-y-tight)]" />

        <Section tone="white" id="support" containerClassName="max-w-4xl" className="!pt-[var(--section-y-tight)] !pb-[var(--section-y-tight)]">
          <div className="mb-12 text-center">
            <SectionHeading
              align="center"
              eyebrow="FAQs"
              title="Frequently Asked Questions"
            />
          </div>
          <FAQ items={FAQS.map((f) => ({ q: f.q, a: f.a }))} />
        </Section>

        <PaymentsStrip tone="surface" />



        {/* FINAL CTA — custom (Phone + Tour CTAs); kept inline but on tokens */}
        <section id="cta" className="section-y !pt-[var(--section-y-tight)] bg-surface">
          <div className="container-x" style={{ maxWidth: "72rem" }}>
            <div className="relative overflow-hidden rounded-[var(--radius-jumbo)] border border-white/10 bg-navy px-8 section-y text-center sm:px-16">
              <span aria-hidden className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-green/50" />
              <span aria-hidden className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-green/50" />
              <span aria-hidden className="absolute left-0 bottom-0 h-10 w-10 border-l-2 border-b-2 border-green/50" />
              <span aria-hidden className="absolute right-0 bottom-0 h-10 w-10 border-r-2 border-b-2 border-green/50" />
              <div className="relative">
                <h2 className="font-display text-h2 font-extrabold text-white!">
                  Ready to Move Your Infrastructure{" "}
                  <span className="text-green">To Us</span>?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lede text-white/75">
                  Stop overpaying for cloud resources you don't fully control.
                  Stop worrying about the reliability of your current setup.
                  BrainCLOUD colocation gives you enterprise infrastructure
                  without enterprise complexity.
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-eyebrow text-green">
                  Get a Custom Colocation Quote — No Commitment, No Pressure
                </p>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60">
                  Let us know your rack space, power, and bandwidth needs. We'll
                  send you a clear quote within 24 hours.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    type="button"
                    size="lg"
                    onClick={() => openContact({ intent: "Colocation final CTA · Request quote", service: "Colocation" })}
                    className={"group rounded-full bg-green px-9 py-7 text-base font-extrabold text-white shadow-cta shadow-cta-hover hover:bg-green transition-transform " +
                      FOCUS_RING_DARK
                    }
                  >
                    Request a Quote
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <a
                    href="tel:+92421112228888"
                    className={"inline-flex items-center gap-2 rounded-full border-2 border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur hover:bg-white hover:text-navy " +
                      FOCUS_RING_DARK
                    }
                  >
                    <Phone className="h-4 w-4" /> Call (042) 111 222 888
                  </a>
                  <a
                    href={WHATSAPP_HREF}
                    className={"inline-flex items-center gap-2 rounded-full border-2 border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur hover:bg-white hover:text-navy " +
                      FOCUS_RING_DARK
                    }
                  >
                    <Calendar className="h-4 w-4" /> Schedule a Data Center Tour
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
        <SiteMobileStickyCTA />
      </div>
    </>
  );
}
