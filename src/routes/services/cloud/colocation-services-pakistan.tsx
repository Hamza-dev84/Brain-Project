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
    title: "Rack space from individual servers to larger deployments",
    body: "Tell us your required rack units, server dimensions, weight and expected growth. We’ll check the right space and availability. This applies if you need room for a few servers, a rack, or a larger setup.",
    body2: "Your quote will specify:",
    list: [
      "Usable rack space and cabinet dimensions",
      "Rack depth and equipment compatibility",
      "Access arrangements",
      "Options for adding hardware later"

    ],
    para: ""
  },
  {
    icon: Zap,
    title: "Power and backup",
    body: "Send the typical and maximum power draw of your equipment, along with the number and type of power supplies.",
    body2: "We’ll confirm:",
    list: [
      "Allocated power and any usage limits",
      "Available power feeds and PDU connections",
      "UPS and generator backup arrangements",
      "Whether power is included or metered separately",
      "Additional requirements for high-density or GPU hardware",
    ],
    para: "Servers with one power supply need a different setup than those with two. We’ll review this before installation."
  },
  {
    icon: Globe,
    title: "Connectivity",
    body: "Tell us your required port speed, expected traffic and whether you need a particular carrier.",
    body2: "Your quote will confirm:",
    list: [
      "Available carriers and port speeds",
      "Included bandwidth or data transfer",
      "IP address allocation",
      "Cross-connect availability and charges",
      "Private connectivity options, where available"
    ],
    para: "A port’s speed is different from the bandwidth included in your plan. Both will be listed separately."
  },
  {
    icon: Lock,
    title: "Physical Security and access",
    body: "We’ll cover the facility’s access controls before you book. This includes visitor authorization, ID requirements, appointment setups, and escort needs.",
    body2: "Check facility details first. Your organization should verify physical security before placing any equipment.",
    list: [
    ],
    para: ""
  },
  {
    icon: Snowflake,
    title: "Cooling",
    body: "Cooling requirements depend on the equipment and its power density. Please send your hardware specs, airflow direction, and expected heat load. This will help us check if it's suitable.",
    body2: "",
    list: [
    ],
    para: "GPU servers and high-density equipment need a capacity check before we agree on space."
  },
  {
    icon: Wrench,
    title: "Remote Hands & Smart Hands Support",
    body: "Remote hands provides physical help with your equipment. Depending on the agreed scope, tasks can include:",
    list: [
      "Checking indicator lights and cable connections",
      "Carrying out an authorised reboot",
      "Connecting or replacing cables",
      "Replacing customer-supplied parts",
      "Assistance with installation, updates, or troubleshooting"

    ],

    para: <>
      Your quote will state support hours, response targets, included time and more charges. OS installation and other technical work must be agreed separately.Colocation does not automatically include operating-system management, patching, backups or application support.Looking for hardware supplied by us instead? See{" "}
      <a
        href="/services/cloud/dedicated-server-hosting-pakistan"
        className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
      >
        Dedicated Server Hosting.
      </a>
      {" "} For a broader facility overview, see{" "}
      <a
        href="/services/cloud/data-center-solutions-pakistan"
        className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
      >
        Data Center Solutions.
      </a>
    </>
  },
];

const whatSets = [
  "List covered services",
  "Explain how to measure them",
  "Note exclusions",
  "Describe the claim process",
  "Include any service credits"

]

const CLOUD_BENEFITS = [
  { t: "Data Sovereignty", d: "Sensitive data stays on your hardware, under your control" },
  { t: "Cloud flexibility", d: "Burst to AWS, Azure, or Google Cloud when demand spikes" },
  { t: "Cost optimization", d: "Run predictable workloads on owned hardware; pay-as-you-go for variable loads" },
  { t: "Compliance", d: "Meet regulatory requirements that pure cloud can't always satisfy" },
  { t: "Low latency", d: "Direct cloud interconnects dramatically reduce application latency" },
];

const USE_CASES = [
  <>
    <b>Existing business systems.</b> Host servers you already own without maintaining a server room in your office.
  </>,
  <>
    <b>Disaster recovery.</b> Place recovery infrastructure away from your main site. Replication, backups, recovery targets and failover testing need a separate plan.
  </>,
  <>
    <b>AI and HPC.</b>House specialist hardware where suitable power, cooling and rack capacity are available. High-density deployments require assessment first. Prefer to rent GPU resources.,
  </>,
  <>
    <b>Network-sensitive applications.</b> Choose connectivity based on the carriers, routes and users your application needs to reach.
  </>,
  <>
    <b>Private cloud.</b> Run your own virtualisation platform on hardware you control, with management responsibilities agreed separately.
  </>
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
  { icon: BadgeCheck, t: "Local service and PKR quotes", d: "Review the charges, billing terms and any adjustment clauses before committing." },
  { icon: Network, t: "A clear division of responsibilities", d: "Know which tasks remain with your team and which BrainCLOUD will handle." },
  { icon: Banknote, t: "Capacity reviewed before delivery", d: "Space, power, cooling and connectivity requirements are checked before equipment is sent." },
  { icon: TrendingUp, t: "Documented service terms", d: "Ask for the applicable SLA, support scope and access arrangements." },
  { icon: ShieldCheck, t: "Room for future planning", d: "Discuss additional equipment and capacity requirements before your deployment grows." },
];

const INDUSTRIES = [
  { icon: Banknote, t: "Financial Services", d: " deployments requiring documented access controls, service terms and audit evidence" },
  { icon: HeartPulse, t: "Healthcare", d: " infrastructure for patient systems, with data access, backups and security responsibilities clearly assigned" },
  { icon: ShoppingCart, t: "E-Commerce", d: "capacity planning for busy sales periods and the systems supporting online orders" },
  { icon: Cloud, t: "SaaS Companies", d: "infrastructure matched to application, storage and network requirements" },
  { icon: Clapperboard, t: "Media and gaming", d: "deployments assessed for traffic volumes, routing and bandwidth needs" },
  { icon: Landmark, t: "Government & Public Sector", d: "projects with specified hosting locations, procurement requirements and security controls" },
];

const FAQS = [
  { q: "How much does colocation cost?", a: "Pricing depends on rack space (1U up to a full 42U rack or private cage), power draw, and bandwidth. Many Pakistani businesses begin with a quarter or half rack. Share your hardware specs, and we will provide a written quote in 24 hours" },
  { q: "Do you offer managed colocation services?", a: "Yes. Our Remote Hands and Smart Hands team goes beyond space, power, and connectivity. They can manage reboots, cabling, hardware swaps, and OS installs. This means you don’t need someone on-site for every issue that comes up." },
  { q: "What happens if there is a power outage?", a: "Every rack has dual power feeds, N+1 UPS redundancy, and diesel generator backup. If the grid goes down, your servers keep running without interruption." },
  { q: "Can I visit my equipment?", a: "Yes. Colocation clients can enter the data center if they schedule ahead. This is part of our visitor logging and escort policy. 24/7 access is also available for select plans." },
  { q: "Is colocation good for disaster recovery?", a: "Yes — it's one of the most common reasons Pakistani businesses colocate. Keeping a DR copy of your infrastructure in our facility protects you. If your main site loses power, connectivity, or has other problems, you’re safe." },
  { q: "What is colocation, and how is it different from cloud hosting?", a: "Colocation means putting your own servers in our data center. You get power, cooling, security, and connectivity. But you own and control the hardware. Cloud hosting, by contrast, means renting virtual resources on hardware we own. Colocation is great for businesses that have their own hardware. It’s ideal if they want full control or need to meet compliance rules by keeping their equipment." },
  {
    q: "What hardware details do you need for a quote?",
    a: (
      <>
        <p>Please provide the following details:</p>

        <ul className="mt-3 space-y-2">
          {[
            "Make and model",
            "Rack units",
            "Dimensions",
            "Weight",
            "Typical and greatest power draw",
            "Power-supply connections",
            "Required network ports",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm"
            >
              <Check
                className="mt-0.5 h-4 w-4 flex-none text-green"
                strokeWidth={3}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-3">
          Include any storage, GPU or unusual cooling requirements.
        </p>
      </>
    ),
  },
  { q: "Who replaces a failed server component?", a: "You remain responsible for your hardware unless another arrangement is agreed. Our team can help with physical replacements through the remote-hands service. This depends on available support, your approval, and a suitable replacement part." },
  { q: "Can I keep spare parts at the facility?", a: "Ask before sending them. Storage availability, labelling, access and any charges need to be agreed separately." },
  { q: "Can I visit or remove my equipment?", a: "Access and equipment removal must follow the agreed authorisation process. Your equipment will be available for access 24/7/365 provided that the authorised person comes to access the servers. However, it’s better to confirm access requirements, identification, and removal procedures before booking so we can better help you during your visit." },
  {
    q: "Are backups included?",
    a: (
      <>
        <p>Yes, we offer backups provided that they’re included.</p>

        <p className="mt-3">Your quote should include:</p>

        <ul className="mt-3 space-y-2">
          {[
            "Any backup service",
            "Retention period",
            "Storage location",
            "Restore responsibilities",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm"
            >
              <Check
                className="mt-0.5 h-4 w-4 flex-none text-green"
                strokeWidth={3}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-3">
          Otherwise, backups remain your responsibility.
        </p>
      </>
    ),
  },
  { q: "Can you help move servers from another facility?", a: "Send the equipment list, current setup and acceptable downtime. We’ll confirm what help is available. Then we’ll agree who handles shutdown, transport, installation and testing." },
  { q: "What happens if I need more power or rack space later?", a: "Request a capacity review before adding equipment. More space, power, and cooling depend on what's available. This may change your monthly charges." },
  { q: "Ready to plan your colocation deployment?", a: "Send your hardware specifications, rack space, power and bandwidth needs. We’ll confirm the available options and provide a written PKR quote before you commit." },

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
              Colocation Services in Pakistan for Businesses That{" "}
              <span className="text-green">Need Reliable Infrastructure.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lede text-navy/70">
              Colocation is about placing your servers in a data center. Our Tier 3 data center offers the rack space, power, cooling, physical security, and connectivity which your servers need. You keep ownership of your hardware and control of your systems. BrainCLOUD provides colocation services for your business in Pakistan. BrainCLOUD and its customers decide on rack space, power, network connection, and support before installation.
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
              eyebrow="WHAT'S INCLUDED"
              title="Our Colocation Services"
            />
            <p className="mt-7 max-w-2xl text-lede text-navy/70">
              Your quote details the space, power, connectivity, and support for your installation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title}>
                <p>{f.body}</p>
                <p>{f.body2}</p>
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
                <p>{f.para}</p>
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
                eyebrow="CLOUD COLOCATION"
                title="The Best of Both Worlds"
                lede="Modern businesses don't choose between cloud and physical infrastructure anymore — they run both. BrainCLOUD's colocation in Pakistan allows you to house your servers in our facility. You can enjoy fast, private links to public cloud platforms like AWS, Azure, and Google Cloud. More Pakistani businesses are shifting to a hybrid model. This change comes as data sovereignty rules get stricter and pure cloud costs rise."
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
                      <span className="block font-display text-sm font-extrabold leading-snug text-white!">
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
                eyebrow="USE CASES"
                title="Where Colocation Fits Best"
                lede=" "
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
              eyebrow="PRICING"
              title="Request Your Colo Space."
              lede="Colocation pricing varies based on your rack space, power draw, and bandwidth needs. That’s why each BrainCLOUD plan below has a specific quote, not a generic price. Tell us your requirements, and we'll send a written quote within 24 hours, with no obligation."
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
              eyebrow="WHAT SETS US APART"
              title="What Sets BrainCLOUD Apart"
              lede=" "
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
          <p className="mt-5 text-navy/75">
            For availability commitments, review the actual SLA.
          </p>
          <ul className="mt-4 space-y-1.5">
            {whatSets.map((item) => (
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
          <p className="mt-5 text-navy/75">
            Request the current certifications or audit documents your organization needs. Then, check their facility and service scope. Network licensing does not replace a review of the controls your business needs.
          </p>
        </Section>






        {/* INDUSTRIES */}
        <Section tone="surface" id="industries" className="!pt-[var(--section-y-tight)] !pb-[var(--section-y-tight)]">
          <div className="mb-14">
            <SectionHeading
              eyebrow="INDUSTRIES"
              title="Industries We Serve"
              lede=" "
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
          <p className="mt-5 text-navy/75">
            Colocation alone does not make an application or organisation compliant. Requirements must be checked against the complete deployment.
          </p>
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
                  Stop overpaying for cloud resources you can’t fully control. Also, stop worrying about your current setup's reliability. BrainCLOUD colocation offers enterprise-level infrastructure. It's in a Tier III, PTA-licensed facility in Pakistan. You get all this without the usual complexity.

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
