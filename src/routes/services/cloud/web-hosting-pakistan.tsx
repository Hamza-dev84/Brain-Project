import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  SiteHeader,
  SiteFooter,
  SiteFinalCTA,
  SiteMobileStickyCTA,
  WHATSAPP_HREF,
  CTA_PRIMARY,
  CTA_SECONDARY,
  FOCUS_RING,
} from "@/components/cloud/site/chrome";
import {
  Section,
  SectionHeading,
  Eyebrow,
  FAQ,
  FeatureCard,
  CTAPair,
} from "@/components/cloud/site/primitives";
import { useContactDialog } from "@/components/cloud/site/contact-dialog";
import { CustomersStrip, PaymentsStrip } from "@/components/cloud/site/trust-strips";
import { ClientTestimonials } from "@/components/cloud/site/client-testimonials";
import {
  IconSecurity as ShieldCheck,
  IconGauge as Gauge,
  IconHeadphones as Headphones,
  IconRefresh as RefreshCcw,
  IconServer as Server,
  IconStorage as HardDrive,
  IconMail as Mail,
  IconWhatsApp as MessageCircle,
  IconCloud,
  IconBriefcase,
  IconRocket,
  IconBuilding,
} from "@/components/cloud/icons";
import { cn } from "@/lib/utils";
import heroAsset from "@/assets/cloud/web-hosting-hero.webp";
import localVsIntlAsset from "@/assets/cloud/web-hosting-local-vs-intl.webp";
import emailAsset from "@/assets/cloud/web-hosting-email.webp";
import PageMeta from "@/components/cloud/site/PageMeta";
import WebHostingSchema from "@/pages/schemaFiles/cloud-schema-files/WebHostingSchema";

export const Route = createFileRoute("/services/cloud/web-hosting-pakistan")({
  component: WebHostingPage,
  // head: () => ({
  //   meta: [
  //     {
  //       title:
  //         "Web Hosting in Pakistan | Affordable Plans from Rs 2,250 — BrainCLOUD",
  //     },
  //     {
  //       name: "description",
  //       content:
  //         "Fast, reliable web hosting in Pakistan. Shared, WordPress, VPS & Dedicated plans from Rs 2,250/mo. Free SSL, cPanel, daily backups & 24/7 local support in Urdu & English.",
  //     },
  //     {
  //       name: "keywords",
  //       content:
  //         "web hosting in pakistan, cheap web hosting pakistan, cpanel hosting pakistan, wordpress hosting pakistan, shared hosting pakistan, local web hosting lahore karachi islamabad",
  //     },
  //     {
  //       property: "og:title",
  //       content: "Web Hosting in Pakistan — Fast, Secure & Made for Pakistani Websites",
  //     },
  //     {
  //       property: "og:description",
  //       content:
  //         "BrainCLOUD web hosting from Rs 2,250/mo. Locally hosted in Lahore, NVMe SSD, free SSL, cPanel, 24/7 Urdu & English support.",
  //     },
  //     { property: "og:type", content: "website" },
  //     { name: "twitter:card", content: "summary_large_image" },
  //   ],
  // }),
});

/* --------------------------------- data --------------------------------- */

type OS = "Linux" | "Windows";

type Plan = {
  name: string;
  segment: string;
  icon: React.ComponentType<{ className?: string }>;
  price: number | "On Request";
  disk: string;
  transfer: string;
  email: string;
  subs: string;
  dbs: string;
  panel: { Linux: string; Windows: string };
  support: string;
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Classic",
    segment: "SME websites",
    icon: IconBriefcase,
    price: 2250,
    disk: "2,500 MB",
    transfer: "100 GB / year",
    email: "30 accounts",
    subs: "5 sub-domains",
    dbs: "5 databases",
    panel: { Linux: "cPanel", Windows: "Plesk" },
    support: "9:00 – 5:00 Phone & Email",
  },
  {
    name: "Gold",
    segment: "Growing SMEs",
    icon: IconRocket,
    price: 3125,
    disk: "5,000 MB",
    transfer: "150 GB / year",
    email: "50 accounts",
    subs: "8 sub-domains",
    dbs: "8 databases",
    panel: { Linux: "cPanel", Windows: "Plesk" },
    support: "9:00 – 5:00 Phone & Email",
    highlight: true,
  },
  {
    name: "Corporate",
    segment: "Corporate websites",
    icon: IconBuilding,
    price: 5000,
    disk: "10,000 MB",
    transfer: "200 GB / year",
    email: "100 accounts",
    subs: "10 sub-domains",
    dbs: "10 databases",
    panel: { Linux: "cPanel", Windows: "Plesk" },
    support: "24/7 Phone & Email",
  },
  {
    name: "Corporate Advance",
    segment: "High-traffic corporate",
    icon: IconBuilding,
    price: 8750,
    disk: "25,000 MB",
    transfer: "500 GB / year",
    email: "Unlimited*",
    subs: "20 sub-domains",
    dbs: "20 databases",
    panel: { Linux: "cPanel", Windows: "Plesk" },
    support: "24/7 · 1:1 Phone & Email",
  },
  {
    name: "Reseller Pack",
    segment: "Agencies & resellers",
    icon: Server,
    price: "On Request",
    disk: "Custom",
    transfer: "Custom",
    email: "Unlimited*",
    subs: "Unlimited*",
    dbs: "Unlimited*",
    panel: { Linux: "cPanel WHM", Windows: "Plesk" },
    support: "24/7 · 1:1 Phone & Email",
  },
];

const WHY = [
  {
    icon: ShieldCheck,
    title: "Your Website, Always Online",
    body: (
      <>
        We back every hosting account with a{" "}
        <strong>99.9% uptime guarantee</strong>. That means your website stays
        live, your customers can reach you, and your business doesn't stop
        because of
        <a
          href="/services/cloud/contact"
          className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
        >
          {" "}server issues. {" "}
        </a>
        If we ever fall short, we make it right — no
        arguments.
      </>
    ),
  },
  {
    icon: Gauge,
    title: "Servers That Actually Load Fast",
    body: (
      <>
        BrainCLOUD has a
        <a
          href="/services/cloud/data-center-solutions-pakistan"
          className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
        >
          {" "}data center in Lahore.{" "}
        </a>
        This means we provide our
        service from a local server. You’ll experience faster speeds than those
        who usually resell from international providers, we use{" "}
        <strong>NVMe SSD-powered servers</strong> for faster read/write speeds
        compared to standard SSDs. Every hosting plan is optimized for Pakistani
        traffic, so your visitors in Islamabad, Karachi, and Lahore experience
        consistently quick load times — not the lag you get with servers hosted
        oceans away.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Free SSL — On Every Plan, No Exceptions",
    body: "SSL isn't an add-on here. Every BrainCLOUD plan includes a free SSL certificate from day one. Your website shows the padlock in every browser, customers trust it, and Google rewards it in rankings.",
  },
  {
    icon: Headphones,
    title: "Support That Speaks Your Language",
    body: (
      <>
        Our support team is based in Pakistan. You can reach us 24/7 via{" "}
        <strong>live chat, WhatsApp, or phone</strong> — in Urdu or English.
        Whether it's a billing question or a server issue late at night, someone
        is always there to help. No ticket queues that take countless days. No
        outsourced call centers.
      </>
    ),
  },
  {
    icon: RefreshCcw,
    title: "Free Website Migration",
    body: "Already hosting somewhere else? Our team will move your website, emails, and databases to BrainCLOUD for free — with zero downtime. Just share your login details, and we'll handle the rest.",
  },
  {
    icon: ShieldCheck,
    title: "7-Day Money-Back Guarantee",
    body: "Not satisfied in the first 7 days? We'll refund you in full. No questions, no fine print. We're confident in what we offer, and we want you to be too.",
  },
];

const INCLUDED_TABLE: Array<[string, string]> = [
  ["Free SSL Certificate", "✅ Yes"],
  ["cPanel Control Panel", "✅ Yes"],
  ["Daily Automatic Backups", "✅ Yes"],
  ["Free Website Migration", "✅ Yes"],
  ["Unmetered Bandwidth", "✅ Yes"],
  ["24/7 WhatsApp & Phone Support", "✅ Yes"],
  ["Email Hosting", "✅ Yes"],
  ["One-Click App Installer", "✅ Yes (WordPress, Joomla & more)"],
];

const LOCAL_VS_INTL = [
  {
    title: "Speed",
    body: "Servers hosted internationally add latency for your Pakistani visitors. A website hosted in Pakistan or on a local-optimized server loads faster for users in Karachi, Lahore, or Islamabad.",
  },
  {
    title: "Payment",
    body: "International providers often require credit cards in USD. BrainCLOUD accepts bank transfer, JazzCash, EasyPaisa, and other local payment methods — in Pakistani Rupees.",
  },
  {
    title: "Support",
    body: "When there is an issue late at night in Pakistan, an international support team is in a different timezone. Our team is awake when you need them.",
  },
  {
    title: "SEO",
    body: "Faster local load speeds contribute to better Core Web Vitals — and that directly impacts your Google ranking in Pakistan.",
  },
];

const AUDIENCE = [
  { title: "Small businesses", body: "setting up their first online presence" },
  { title: "Freelancers and agencies", body: "managing client websites" },
  { title: "E-commerce stores", body: "running on WooCommerce or OpenCart" },
  {
    title: "Educational institutions",
    body: "needing reliable .edu.pk hosting",
  },
  {
    title: "Developers and startups",
    body: "who need VPS flexibility",
  },
];

const FAQS = [
  {
    q: "What is web hosting and why do I need it?",
    a: "Web hosting is the service that stores your website's files on a server and makes them accessible to anyone on the internet. Without hosting, your website can't go live. Think of it as the physical space your website lives in online.",
  },
  {
    q: "Which hosting plan is right for me?",
    a: "If you're starting a blog, portfolio, or small business site, Shared Hosting at Rs. 2,250/month is the right fit. If you're running WordPress or a small e-commerce store, go with WordPress Hosting. If you're expecting high traffic or need technical control, choose VPS. For large enterprises and high-traffic platforms, Dedicated Hosting gives you full control and maximum performance.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can upgrade from Shared to VPS to Dedicated at any time without losing your data or going through a complex migration. We handle the upgrade process for you.",
  },
  {
    q: "Do you offer email hosting?",
    a: "Yes. Every hosting plan includes email hosting so you can create and manage professional business email addresses.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfer, JazzCash, EasyPaisa, credit/debit cards, and other local payment methods — all in Pakistani Rupees.",
  },
  {
    q: "Is my website data backed up?",
    a: "Yes. BrainCLOUD performs automatic daily backups of all websites. If anything goes wrong, we can restore your site quickly.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "Yes. We offer a full 7-day money-back guarantee. If you're not happy in the first 7 days, we'll refund you completely.",
  },
  {
    q: "Can you migrate my existing website?",
    a: "Yes, and it's free. Our team migrates your website, emails, and databases from any host to BrainCLOUD with zero downtime.",
  },
];

/* ------------------------------- sections ------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-surface">
      <img width={1376} height={768} decoding="async"
        src={heroAsset}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-60 md:w-[65%] md:opacity-100"
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
      <div className="container-x relative z-10 pt-14 pb-14 lg:pt-20 lg:pb-20">
        <div className="max-w-4xl animate-fade-up">
          <Eyebrow tone="green" withDot>
            Locally hosted in Lahore · From Rs 2,250/mo
          </Eyebrow>
          <h1 className="mt-5 font-display text-hero font-extrabold leading-[1.05] tracking-[-0.02em] text-navy">
            Web Hosting in Pakistan — Fast, Secure &{" "}
            <span className="text-green">Made for Pakistani Websites</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lede text-navy/75">
            Getting your website online in Pakistan has never been simpler.
            BrainCLOUD is a trusted Pakistani web hosting provider offering
            plans starting at just Rs 2,250/month — with cPanel included, a free
            SSL certificate on every plan, free email hosting, and a support
            team available in both Urdu and English. Whether you are launching
            your first blog or scaling an
            <a
              href="/services/software/web-development-pakistan"
              className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
            >
              {" "} e-commerce business, {" "}
            </a>
            we are here to
            keep your website running.
          </p>
          <p className="mt-4 max-w-2xl text-lg font-bold text-navy">
            The best part?{" "}
            <span className="text-green">We are locally hosted.</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#plans" className={CTA_PRIMARY}>
              SEE HOSTING PLANS
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={WHATSAPP_HREF} className={CTA_SECONDARY}>
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
          <p className="mt-3 text-xs font-medium text-navy/55">
            Free migration · 7-day money-back guarantee · 24/7 support in Urdu &
            English
          </p>
        </div>
      </div>
    </section>
  );
}


function WhyChoose() {
  return (
    <Section tone="white" id="why">
      <SectionHeading
        eyebrow="Why Pakistani businesses choose us"
        title="Why Pakistani Businesses Choose BrainCLOUD"
        lede="Thousands of Pakistani websites — from small shops in Lahore to corporate portals in Karachi — run on BrainCLOUD infrastructure. Here's what makes us different from the crowd."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w) => (
          <FeatureCard key={w.title} icon={w.icon} title={w.title}>
            {w.body}
          </FeatureCard>
        ))}
      </div>
    </Section>
  );
}

function HostingTierIntro() {
  return (
    <Section tone="surface" id="plans-intro">
      <SectionHeading
        eyebrow="Hosting plans — pick what works for you"
        title={
          <>
            One provider,{" "}
            <span className="text-green">every hosting tier</span>
          </>
        }
        lede={
          <>
            Every plan includes:{" "}
            <strong>
              Free SSL, cPanel access, daily backups, free migration, and 24/7
              Pakistani support.
            </strong>
          </>
        }
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <TierIntro
          icon={IconCloud}
          name="Shared Hosting"
          from="Rs 2,250/month"
          bestFor="Personal blogs, small business websites, portfolios, NGOs"
          body="Shared hosting is the most budget-friendly way to get your website online. You get a stable, fast environment managed entirely by us — no technical knowledge required. It's the right starting point if you're launching your first site or running a low-to-medium traffic website."
          features={[
            "Free SSL certificate",
            "Free domain registration",
            "cPanel control panel",
            "24/7 local support",
            "Daily backups",
          ]}
          href="#plans"
        />
        <TierIntro
          icon={IconCloud}
          name="WordPress Hosting"
          from="Rs 2,250/month"
          bestFor="WordPress blogs, business sites, WooCommerce stores"
          body="Our WordPress plans are built specifically around how WordPress works. One-click installation, automatic core updates, and a hosting environment tuned to make WordPress run faster and more securely than generic shared hosting."
          features={[
            "Pre-optimized WordPress environment",
            "One-click WP installation",
            "Automatic updates",
            "Enhanced security layer",
            "Free SSL + domain",
          ]}
          href="#plans"
        />
      </div>
    </Section>
  );
}

function TierIntro({
  icon: Icon,
  name,
  from,
  bestFor,
  body,
  features,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  from: string;
  bestFor: string;
  body: string;
  features: string[];
  href: string;
}) {
  const isPageLink = href.startsWith("/services/cloud/");
  const linkClassName = cn(
    "mt-7 inline-flex items-center gap-2 font-display text-sm font-bold text-navy hover:text-green",
    FOCUS_RING,
  );

  return (
    <div className="card-surface card-surface-hover p-8">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-display text-h3 font-extrabold text-navy">
            {name}
          </h3>
          <p className="text-eyebrow text-green">Starting at {from}</p>
        </div>
      </div>
      <p className="mt-5 text-sm italic text-navy/60">
        <strong className="not-italic text-navy/80">Best for:</strong> {bestFor}
      </p>
      <p className="mt-3 text-base leading-relaxed text-navy/75">{body}</p>
      <ul className="mt-6 space-y-2.5 text-sm text-navy/80">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <Check className="h-4 w-4 flex-none text-green" strokeWidth={3} />
            {f}
          </li>
        ))}
      </ul>
      {isPageLink ? (
        <Link to={href} preload="intent" className={linkClassName}>
          See detailed plans <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <a href={href} className={linkClassName}>
          See detailed plans <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function Plans() {
  const [os, setOs] = React.useState<OS>("Linux");
  const { open } = useContactDialog();
  const fmt = (n: number) => n.toLocaleString("en-PK");
  return (
    <Section tone="white" id="plans">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <Eyebrow tone="green">Web hosting plans</Eyebrow>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-navy">
            Our Web Hosting Plans & Pricing in Pakistan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Every plan is billed in Pakistani Rupees and includes free SSL,
            daily backups, and 24/7 local support. Subscription is payable
            yearly — save 5% on 2-year and 10% on 3-year commitments.
          </p>
        </div>
        <OsToggle value={os} onChange={setOs} />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch">
        {PLANS.map((p) => {
          const Icon = p.icon;
          const isHighlight = p.highlight;
          return (
            <div
              key={p.name}
              className={cn(
                "relative flex flex-col card-surface card-surface-hover p-7",
                isHighlight &&
                "border-green ring-2 ring-green/40 shadow-[var(--shadow-card-hover)] xl:-translate-y-4",
              )}
            >
              {isHighlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green px-3 py-1 text-eyebrow text-white">
                  Most popular
                </span>
              )}
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-[var(--radius-card)]",
                  isHighlight
                    ? "bg-green text-white"
                    : "bg-green/10 text-green",
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-extrabold text-navy">
                {p.name}
              </h3>
              <p className="mt-1 text-xs leading-snug text-navy/60">
                {p.segment}
              </p>
              <div className="mt-4">
                {typeof p.price === "number" ? (
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl font-extrabold text-navy">
                      Rs {fmt(p.price)}
                    </span>
                    <span className="text-sm text-navy/60">/mo</span>
                  </div>
                ) : (
                  <span className="font-display text-2xl font-extrabold text-navy">
                    {p.price}
                  </span>
                )}
                <p className="mt-1 text-[11px] text-navy/50">
                  Billed yearly · 5%/10% off on 2yr/3yr
                </p>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-navy/80">
                <PlanRow>{p.disk} disk space</PlanRow>
                <PlanRow>{p.transfer}</PlanRow>
                <PlanRow>{p.email}</PlanRow>
                <PlanRow>{p.subs}</PlanRow>
                <PlanRow>{p.dbs}</PlanRow>
                <PlanRow>{p.panel[os]} control panel</PlanRow>
                <PlanRow>{p.support}</PlanRow>
                <PlanRow>Free SSL &amp; daily backups</PlanRow>
              </ul>
              <div className="mt-auto pt-7">
                <Button
                  type="button"
                  onClick={() =>
                    open({
                      intent: `Web Hosting · ${os} · ${p.name}`,
                      service: "Cloud Hosting",
                    })
                  }
                  className={cn(
                    "h-12 w-full rounded-full font-bold",
                    isHighlight
                      ? "bg-green text-white hover:bg-green"
                      : "bg-navy text-white hover:bg-navy-deep",
                  )}
                >
                  {p.price === "On Request" ? "Request a quote" : `Get ${p.name}`}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-xs text-navy/55">
        * Fair use policy applies. Yearly data transfer limits shown. Late fee
        of Rs 5,000/- applies on renewals. All prices in Pakistani Rupees.
      </p>
    </Section>
  );
}

function PlanRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 h-4 w-4 flex-none text-green" strokeWidth={3} />
      <span>{children}</span>
    </li>
  );
}

function OsToggle({
  value,
  onChange,
}: {
  value: OS;
  onChange: (v: OS) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Operating system"
      className="inline-flex items-center gap-1 rounded-full border border-hairline bg-white p-1 shadow-sm"
    >
      {(["Linux", "Windows"] as const).map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o)}
            className={cn(
              "rounded-full px-5 py-2 font-display text-xs font-extrabold uppercase tracking-[0.14em] transition-colors",
              FOCUS_RING,
              active
                ? "bg-navy text-white"
                : "text-navy/60 hover:text-navy",
            )}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function UpperTiers() {
  return (
    <Section tone="surface" id="upper-tiers">
      <SectionHeading
        eyebrow="OTHER HOSTING SOLUTIONS"
        title={
          <>
            Need more power, or{" "}
            <span className="text-green">dedicated hardware?</span>
          </>
        }
        lede="Compare BrainCLOUD's VPS and Dedicated Servers if shared hosting isn't quite the right fit."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <TierIntro
          icon={Server}
          name="VPS Hosting"
          from="Rs 12,500/month"
          bestFor="Growing websites, developers, SaaS apps, medium-traffic e-commerce"
          body="When your website outgrows shared hosting — more traffic, more resource needs, more customization — VPS is the natural next step. You get a dedicated slice of server resources that no other customer can touch, along with full root access to configure your environment your way."
          features={[
            "Dedicated CPU, RAM & storage",
            "Full root access",
            "Scalable resources",
            "Choice of OS (Linux/Windows)",
            "SLA-backed uptime",
          ]}
          href="/services/cloud/vps-hosting-pakistan"
        />
        <TierIntro
          icon={HardDrive}
          name="Dedicated Hosting"
          from="Rs 5,999/month"
          bestFor="High-traffic portals, enterprise applications, large e-commerce platforms"
          body="An entire server — just for you. No shared resources, no neighbors slowing you down. Dedicated hosting gives you complete control over your server environment with maximum performance and enterprise-grade security. Ideal for businesses where downtime is not an option."
          features={[
            "Entire server exclusively yours",
            "Custom server configurations",
            "Maximum performance & security",
            "Ideal for high-traffic & enterprise sites",
            "Managed or unmanaged options",
          ]}
          href="/services/cloud/dedicated-server-hosting-pakistan"
        />
      </div>
    </Section>
  );
}

/* ------------------------- extended feature matrix ---------------------- */

const MATRIX_PLANS = ["Classic", "Gold", "Corporate", "Corporate Advance"] as const;
const HIGHLIGHT_PLAN = "Gold";

type MatrixCell = string | boolean;
type MatrixGroup = {
  title: string;
  rows: [string, MatrixCell, MatrixCell, MatrixCell, MatrixCell][];
};

const MATRIX_GROUPS: MatrixGroup[] = [
  {
    title: "FTP features",
    rows: [
      ["FTP accounts", "10", "15", "20", "Unlimited"],
      ["Anonymous FTP", true, true, true, true],
      ["Web-based file manager", true, true, true, true],
    ],
  },
  {
    title: "Supported languages & databases",
    rows: [
      ["MySQL storage", "40 MB", "80 MB", "100 MB", "300 MB"],
      ["FrontPage extensions", true, true, true, true],
      ["CGI", true, true, true, true],
      ["PHP", true, true, true, true],
      ["Perl", true, true, true, true],
      ["SSI", true, true, true, true],
      ["cURL", true, true, true, true],
      ["GD library", true, true, true, true],
    ],
  },
  {
    title: "Email features",
    rows: [
      ["POP3 email", true, true, true, true],
      ["Webmail", true, true, true, true],
      ["Email aliasing", true, true, true, true],
      ["Auto responders", true, true, true, true],
      ["Mail forward", true, true, true, true],
      ["SMTP", true, true, true, true],
      ["IMAP", true, true, true, true],
      ["Mailing lists", true, true, true, true],
    ],
  },
  {
    title: "Website management",
    rows: [
      ["File manager", true, true, true, true],
      ["phpMyAdmin", true, true, true, true],
    ],
  },
  {
    title: "Web / FTP statistics",
    rows: [
      ["Webalizer web stats", true, true, true, true],
      ["Webalizer FTP stats", true, true, true, true],
      ["Analog stats", true, true, true, true],
      ["AWStats", true, true, true, true],
      ["View latest visitors", true, true, true, true],
      ["View bandwidth", true, true, true, true],
      ["View error log", true, true, true, true],
    ],
  },
];

function MatrixValue({ value }: { value: MatrixCell }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green/10">
        <Check className="h-3.5 w-3.5 text-green" strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return <span className="text-navy/30">—</span>;
  }
  if (value === "Unlimited") {
    return (
      <span className="inline-flex items-center rounded-full bg-green/10 px-2.5 py-0.5 text-xs font-semibold text-green">
        Unlimited
      </span>
    );
  }
  return <span className="text-sm font-medium text-navy">{value}</span>;
}

function FeatureMatrix() {
  const [open, setOpen] = React.useState(false);
  return (
    <Section tone="white" id="compare-features">
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="feature-matrix-panel"
          className={cn(
            "group inline-flex items-center gap-2 rounded-full border-2 border-green/60 bg-white px-6 py-3",
            "font-display text-sm font-semibold text-navy transition-all",
            "hover:border-green hover:bg-green/5",
            FOCUS_RING,
          )}
        >
          {open ? "Hide detailed features" : "Compare all features across plans"}
          <ChevronDown
            className={cn(
              "h-4 w-4 text-green transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>

        {open && (
          <div
            id="feature-matrix-panel"
            className="mt-8 w-full animate-in fade-in slide-in-from-top-2 duration-300"
          >
            <Accordion
              type="multiple"
              defaultValue={MATRIX_GROUPS.map((g) => g.title)}
              className="space-y-4"
            >
              {MATRIX_GROUPS.map((group) => (
                <AccordionItem
                  key={group.title}
                  value={group.title}
                  className="card-surface card-surface-hover overflow-hidden rounded-[var(--radius-card)] border border-hairline"
                >
                  <AccordionTrigger className="px-6 py-4 font-display text-h3 font-bold text-navy hover:no-underline">
                    {group.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    <div className="overflow-x-auto border-t border-hairline">
                      <table className="w-full min-w-[640px] text-left">
                        <thead className="bg-surface">
                          <tr>
                            <th className="px-6 py-3 font-display text-eyebrow uppercase tracking-wider text-navy/70">
                              Feature
                            </th>
                            {MATRIX_PLANS.map((plan) => (
                              <th
                                key={plan}
                                className={cn(
                                  "px-4 py-3 text-center font-display text-eyebrow uppercase tracking-wider",
                                  plan === HIGHLIGHT_PLAN
                                    ? "bg-green/10 text-green"
                                    : "text-navy/70",
                                )}
                              >
                                {plan}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-hairline bg-white">
                          {group.rows.map((row) => {
                            const [label, ...cells] = row;
                            return (
                              <tr key={label} className="hover:bg-surface/60">
                                <td className="px-6 py-3 text-sm font-medium text-navy">
                                  {label}
                                </td>
                                {cells.map((cell, i) => (
                                  <td
                                    key={i}
                                    className={cn(
                                      "px-4 py-3 text-center",
                                      MATRIX_PLANS[i] === HIGHLIGHT_PLAN &&
                                      "bg-green/5",
                                    )}
                                  >
                                    <MatrixValue value={cell} />
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-4 text-center text-xs text-navy/60">
              Reseller Pack features are provided on request — talk to us for a custom scope.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}

function IncludedTable() {

  return (
    <Section tone="white" id="included">
      <SectionHeading
        eyebrow="Included in every plan"
        title="What's Included in Every BrainCLOUD Hosting Plan"
      />
      <div className="mt-10 overflow-hidden rounded-[var(--radius-card)] border border-hairline">
        <table className="w-full text-left">
          <thead className="bg-navy text-white">
            <tr>
              <th className="px-6 py-4 font-display text-eyebrow">Feature</th>
              <th className="px-6 py-4 font-display text-eyebrow">Included?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-hairline bg-white">
            {INCLUDED_TABLE.map(([f, inc]) => (
              <tr key={f} className="hover:bg-surface">
                <td className="px-6 py-4 text-sm font-medium text-navy">{f}</td>
                <td className="px-6 py-4 text-sm text-navy/80">{inc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function LocalVsIntl() {
  return (
    <section id="local-vs-intl" className="relative overflow-hidden bg-surface">
      <img width={1376} height={768} decoding="async"
        src={localVsIntlAsset}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-50 md:w-[60%] md:opacity-100"
        loading="lazy"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface from-30% via-surface/85 via-60% to-surface/30 md:from-surface md:from-30% md:via-surface/75 md:via-60% md:to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent md:hidden"
      />
      <div className="container-x section-y relative z-10">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Local vs international"
            title="Local Hosting vs. International Hosting — What's the Difference for Pakistani Websites?"
            lede="Many Pakistani businesses make the mistake of hosting their websites on international servers, because they look affordable at first glance. But there are real tradeoffs:"
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {LOCAL_VS_INTL.map((it) => (
            <div key={it.title} className="card-surface card-surface-hover p-7">
              <h3 className="font-display text-h3 font-extrabold text-navy">
                {it.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmailHosting() {
  return (
    <section id="email-hosting" className="relative overflow-hidden bg-white">
      <img width={1376} height={768} decoding="async"
        src={emailAsset}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-50 md:w-[60%] md:opacity-100"
        loading="lazy"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white from-30% via-white/85 via-60% to-white/30 md:from-white md:from-30% md:via-white/75 md:via-60% md:to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent md:hidden"
      />
      <div className="container-x section-y relative z-10">
        <div className="max-w-2xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
            <Mail className="h-8 w-8" />
          </div>
          <Eyebrow tone="green" className="mt-6 inline-flex">Email hosting included</Eyebrow>
          <h2 className="mt-4 font-display text-h2 font-extrabold text-navy">
            Email Hosting — Professional Addresses for Your Business
          </h2>
          <p className="mt-5 text-lede text-navy/75">
            Every BrainCLOUD hosting account includes email hosting. Create
            professional addresses like{" "}
            <strong>info@yourbusiness.pk</strong> or{" "}
            <strong>sales@yourcompany.com</strong> and manage them directly from
            cPanel or through any email client (Outlook, Gmail, or mobile).
          </p>
        </div>
      </div>
    </section>
  );
}


function Audience() {
  return (
    <Section tone="surface" id="audience">
      <SectionHeading
        eyebrow="Who uses BrainCLOUD"
        title="Who Uses BrainCLOUD Web Hosting?"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {AUDIENCE.map((a) => (
          <div key={a.title} className="card-surface card-surface-hover p-6">
            <div className="flex items-start gap-3">
              <Check
                className="mt-1 h-5 w-5 flex-none text-green"
                strokeWidth={3}
              />
              <p className="text-base text-navy/80">
                <strong className="text-navy">{a.title}</strong> {a.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section tone="white" id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        align="center"
      />
      <div className="mt-10 mx-auto max-w-4xl">
        <FAQ items={FAQS} />
      </div>
    </Section>
  );
}

function ReadyCTA() {
  return (
    <Section tone="surface" id="ready">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow tone="green" withDot>
          Ready when you are
        </Eyebrow>
        <h2 className="mt-5 font-display text-h2 font-extrabold text-navy">
          Ready to Get Your Website Live?
        </h2>
        <p className="mt-5 text-lede text-navy/75">
          Starting a new website or switching from another host — BrainCLOUD
          makes it simple. Choose your plan, pick a domain, and our team sets
          everything up for you.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAPair
            align="center"
            primaryLabel="Get Started — Plans from Rs 2,250/month"
            secondaryLabel="Talk to Us on WhatsApp"
            intent="Web Hosting · Ready CTA"
            service="Cloud Hosting"
          />
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------- page --------------------------------- */

function WebHostingPage() {
  return (
    <div className="min-h-screen bg-surface text-navy">
      <SiteHeader />
      <PageMeta
        title="Web Hosting Pakistan | Fast & Secure Website Hosting | BrainCLOUD"
        description="BrainCLOUD provides fast, secure and reliable web hosting in Pakistan with affordable hosting plans, SSL, business email and local technical support."
        schema={WebHostingSchema}
      />
      <main className="pb-20 md:pb-0">
        <Hero />
        <CustomersStrip tone="white" />
        <WhyChoose />
        <HostingTierIntro />
        <Plans />
        <FeatureMatrix />
        <IncludedTable />

        <LocalVsIntl />
        <EmailHosting />
        <Audience />
        <ClientTestimonials />
        <FAQSection />
        <ReadyCTA />
        <UpperTiers />
        <PaymentsStrip tone="white" />
        <SiteFinalCTA
          title={
            <>
              Get your website{" "}
              <span className="text-green">live in Pakistan</span> today.
            </>
          }
          subtitle="Free migration, free SSL, cPanel included. Locally hosted in Lahore with 24/7 Urdu & English support. Talk to a BrainCLOUD engineer for a written plan and PKR quote within one business hour."
          buttonLabel="Get my hosting plan"
        />
      </main>
      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
