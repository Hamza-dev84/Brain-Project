import React from "react";
import { Helmet } from "@/lib/helmet-compat";
import { Link } from "@/lib/router-compat";
import Header from "@/components/software/Header";
import Footer from "@/components/software/Footer";
import { Button } from "@/components/software/ui/button";
import {
  ArrowRight,
  Search,
  MapPin,
  FileText,
  Link2,
  Settings,
  Target,
  ShoppingCart,
  ClipboardCheck,
  Users,
  BarChart3,
  Award,
  ShieldCheck,
  ImageIcon,
  CheckCircle2,
  Minus,
  Gift,
  Plus,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/software/ui/accordion";
import SEOPageSchema from "@/pages/schemaFiles/software-schema-files/SEOPageSchema";

/** Reusable placeholder where the user will drop in an image later. */
const ImagePlaceholder: React.FC<{
  label: string;
  aspect?: string;
  className?: string;
}> = ({ label, aspect = "aspect-[4/3]", className = "" }) => (
  <div
    className={`relative w-full ${aspect} rounded-2xl border-2 border-dashed border-brand-primary/30 bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/5 flex flex-col items-center justify-center text-center px-6 ${className}`}
    aria-label={`Image placeholder: ${label}`}
  >
    <ImageIcon className="w-10 h-10 text-brand-primary/40 mb-3" />
    <span className="font-lato text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-primary/60">
      Image Placeholder
    </span>
    <span className="font-lato text-sm md:text-base text-brand-dark/60 mt-1 max-w-xs">
      {label}
    </span>
  </div>
);

const trustStats = [
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: Award, value: "98%", label: "Client Retention" },
  { icon: BarChart3, value: "Top 3", label: "Rankings Delivered" },
  { icon: ShieldCheck, value: "100%", label: "White-Hat SEO" },
];

const whyPoints = [
  {
    title: "Dedicated SEO consultant",
    desc: "on every account, no rotating junior teams",
  },
  {
    title: "Transparent reporting",
    desc: "with real-time dashboards, not PDFs full of vanity metrics",
  },
  {
    title: "Pakistan market expertise",
    desc: "we understand how Lahore customers search and buy",
  },
  {
    title: "100% white-hat SEO",
    desc: "every strategy follows Google's Webmaster Guidelines",
  },
  {
    title: "Commercial-first keyword targeting",
    desc: "we go after buyers, not just browsers",
  },
];

const services = [
  {
    icon: MapPin,
    title: "Local SEO Services",
    body: `When someone searches "electrician near me" or "best restaurant in Johar Town," local SEO decides who shows up. BrainSOFT optimizes your Google Business Profile, builds location-targeted content, and ensures your business dominates Lahore's local search results and Google Maps.`,
    includes:
      "Google Business Profile setup & management, local citation building, NAP consistency, geo-targeted keyword optimization, and review management.",
  },
  {
    icon: FileText,
    title: "On-Page SEO Optimization",
    body: `On-page SEO is the foundation every ranking is built on. Our team audits and optimizes every element Google evaluates, from your title tags and header structure to your content quality and internal linking, so your pages clearly communicate relevance and authority.`,
    includes:
      "Title tags, meta descriptions, H1–H6 structure, content optimization, image alt text, URL structure, and Core Web Vitals improvement.",
  },
  {
    icon: Link2,
    title: "Off-Page SEO & Link Building",
    body: `Backlinks are still one of Google's strongest ranking signals. BrainSOFT builds high-authority, contextually relevant links through manual outreach, guest posting, and digital PR — the kind of links that move rankings and stick around.`,
    includes:
      "Competitor backlink analysis, niche-relevant guest posts, brand mention acquisition, and toxic link disavow.",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    body: `A website full of crawl errors, broken links, and slow load speeds will never reach Page 1 — no matter how good the content is. Our technical SEO specialists dig deep into your site's infrastructure and fix everything holding your rankings back.`,
    includes:
      "Crawl error fixes, XML sitemap and robots.txt optimization, redirect chain resolution, mobile usability, schema markup, and indexation audits.",
  },
  {
    icon: Target,
    title: "Keyword Research & Content Strategy",
    body: `The wrong keywords waste your budget. Brain Soft's research process targets keywords with commercial intent — the phrases your ideal customer types when they're ready to take action — then maps them to a content strategy that builds topical authority over time.`,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce SEO",
    body: `Running an online store? Brain Soft's e-commerce SEO service targets high-converting product and category keywords, optimizes your product pages, and builds the domain authority your store needs to compete in Pakistan's growing digital marketplace.`,
    includes: "WooCommerce, Shopify, OpenCart, Magento, and custom stores.",
    includesLabel: "Platforms",
  },
  {
    icon: ClipboardCheck,
    title: "Website SEO Audit",
    body: `Before strategy, you need clarity. Our comprehensive SEO audit covers 150+ ranking factors across technical health, on-page quality, backlink profile, and competitor positioning — and delivers a prioritized action plan you can actually use.`,
  },
];

const packages: {
  name: string;
  price: string;
  priceNote: string;
  bestFor: string;
  deliverables: string[];
  vsMarket: string;
  cta: string;
  featured?: boolean;
}[] = [
  {
    name: "LAUNCH",
    price: "PKR 29,999",
    priceNote: "/month",
    bestFor:
      "Small local businesses (clinics, salons, shops, single-location services) wanting to appear on Google Maps and page 1 locally for the first time.",
    deliverables: [
      "Full technical + SEO audit",
      "8 focus keywords",
      "On-page optimization (up to 8 pages)",
      "Google Business Profile setup & optimization",
      "10 local citations",
      "GSC + GA4 + Bing Webmaster setup",
      "Schema markup",
      "2 blog posts/month",
      "Basic backlinks (10)",
      "Monthly ranking + traffic report",
    ],
    vsMarket:
      "Beats Next Solutions basic (25K, no local depth) and matches DigiGrowth Growth (30K) while adding GBP + citations that DigiGrowth reserves for its 55K tier.",
    cta: "Start with Launch",
  },
  {
    name: "GROWTH",
    price: "PKR 59,999",
    priceNote: "/month",
    bestFor:
      "Established SMEs and city-wide service businesses serious about outranking local competitors and generating consistent leads.",
    deliverables: [
      "Everything in Launch",
      "20 keywords",
      "Competitor gap analysis",
      "Up to 15 pages optimized",
      "25 citations",
      "4 blog posts/month (human-written)",
      "20 quality backlinks",
      "Internal linking strategy",
      "AEO/GEO — AI search optimization (ChatGPT / Perplexity / Google AI Overviews)",
      "Conversion tracking setup (call + form)",
      "Bi-weekly optimization",
      "Live reporting dashboard",
      "Monthly strategy call",
    ],
    vsMarket:
      "Priced PKR 10,000 under Artimization Gold (70K) and less than half of NexPrime Rank Booster (140K), yet includes AEO + conversion tracking + live dashboard that those tiers either lack or charge premium for.",
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "AUTHORITY",
    price: "PKR 99,999",
    priceNote: "/month",
    bestFor:
      "Competitive niches, multi-location businesses, and growing e-commerce stores.",
    deliverables: [
      "Everything in Growth",
      "40 keywords",
      "Full-site optimization",
      "40 citations",
      "8 blog posts + 2 long-form pillar articles/month",
      "30 backlinks incl. 5 premium/high-DA links",
      "E-commerce/product SEO",
      "Advanced schema",
      "CRO recommendations",
      "Dedicated account manager",
      "Weekly reporting + monthly strategy call",
    ],
    vsMarket:
      "Just above Artimization Platinum (95K) and well under NexPrime Premium (197K) / Digital Sohail (159–230K).",
    cta: "Go Authority",
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    priceNote: "typically PKR 150,000+",
    bestFor:
      "Large e-commerce, national brands, multilingual/international targeting.",
    deliverables: [
      "Everything in Authority",
      "Unlimited/50+ keywords",
      "Multilingual & international SEO",
      "Digital PR link building",
      "Custom content calendar",
      "API/data-warehouse reporting",
      "SLA-backed support",
    ],
    vsMarket:
      "Captures the highest-value leads without publishing a ceiling, and makes Authority feel accessible by comparison.",
    cta: "Request Custom Quote",
  },
];

const comparisonRows: { label: string; values: (string | boolean)[] }[] = [
  { label: "Best for", values: [
    "Local businesses starting out",
    "Growing SMEs serious about leads",
    "Competitive niches & e-commerce",
    "Large / national / international brands",
  ]},
  { label: "Price (PKR/mo)", values: ["29,999", "59,999", "99,999", "Custom"] },
  { label: "Focus keywords", values: ["8", "20", "40", "50+"] },
  { label: "Pages optimized", values: ["8", "15", "Full site", "Full site"] },
  { label: "Technical audit & fixes", values: [true, true, true, true] },
  { label: "GSC / GA4 / Bing setup", values: [true, true, true, true] },
  { label: "Google Business Profile", values: [true, true, true, true] },
  { label: "Local citations", values: ["10", "25", "40", "50+"] },
  { label: "Blog posts / month", values: ["2", "4", "8 + 2 pillar", "Custom calendar"] },
  { label: "Backlinks / month", values: ["10", "20", "30 (5 premium)", "Digital PR"] },
  { label: "Competitor analysis", values: [false, true, "Advanced", true] },
  { label: "AI Search Optimization (AEO/GEO)", values: [false, true, true, true] },
  { label: "Conversion / lead tracking", values: [false, true, true, true] },
  { label: "E-commerce / product SEO", values: [false, false, true, true] },
  { label: "CRO recommendations", values: [false, false, true, true] },
  { label: "International / multilingual", values: [false, false, false, true] },
  { label: "Live reporting dashboard", values: ["Monthly report", "Live", "Live", "API/custom"] },
  { label: "Strategy calls", values: [false, "Monthly", "Weekly report + call", "Dedicated team"] },
  { label: "Dedicated account manager", values: [false, false, true, true] },
  { label: "Contract", values: ["No lock-in", "No lock-in", "No lock-in", "SLA"] },
  { label: "Deliverables guarantee", values: [true, true, true, true] },
];

const valueAdds = [
  "Free monthly SEO audit report",
  "Live client dashboard",
  "Quarterly competitor watch report",
  "WhatsApp priority support line",
  "Onboarding SEO strategy session",
];

const addOns = [
  "Google Ads / PPC management",
  "Premium backlink packs (PKR 8–15K each)",
  "Landing-page CRO sprints",
  "Additional blog content bundles",
  "Press-release / digital-PR campaigns",
  "Website speed / Core Web Vitals overhaul",
  "Multilingual expansion",
];

const guarantees = [
  {
    title: "Deliverables guarantee",
    desc: "Every deliverable in your plan, completed and reported each month — or that month is free.",
  },
  {
    title: "Transparency guarantee",
    desc: "Live dashboard access + monthly report, cancel anytime with 30 days' notice, no lock-in contracts.",
  },
  {
    title: "Realistic timeline commitment",
    desc: "Measurable ranking movement within 90 days, or a free strategy reset.",
  },
  {
    title: "No hidden fees",
    desc: "Fixed monthly price. What you sign for is what you pay — always.",
  },
];

const process = [
  {
    title: "Discovery & Audit",
    desc: "We analyze your website, competitors, and current rankings. Everything starts with data.",
  },
  {
    title: "Strategy & Roadmap",
    desc: "We build a keyword-prioritized SEO roadmap mapped to your specific business goals and timeline.",
  },
  {
    title: "Implementation",
    desc: "On-page fixes, technical improvements, and content optimization — executed properly from day one.",
  },
  {
    title: "Authority Building",
    desc: "Quality backlinks, local citations, and content that earns Google's trust.",
  },
  {
    title: "Monitor & Refine",
    desc: "Weekly monitoring, monthly reporting, and continuous refinement as your rankings grow.",
  },
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "Most websites see measurable improvements within 3 to 6 months. Highly competitive industries may take 6 to 12 months for strong Page 1 positions. SEO is a long-term investment — the results compound over time in a way paid ads never can.",
  },
  {
    q: "How much do SEO services cost in Lahore?",
    a: "Pricing depends on your goals, industry competition, and the scope of work. Brain Soft offers packages for small local businesses as well as comprehensive campaigns for larger brands. Reach out for a transparent, no-obligation quote.",
  },
  {
    q: "Can you guarantee Page 1 rankings?",
    a: "No honest SEO agency can guarantee specific positions — Google's algorithm is complex and constantly evolving. What Brain Soft guarantees is a rigorous, white-hat process that consistently improves your organic visibility and qualified traffic month over month.",
  },
  {
    q: "Do you only work with Lahore businesses?",
    a: "No. While we specialize as a local SEO expert in Lahore, Brain Soft serves clients across Pakistan — Karachi, Islamabad, Rawalpindi — and international clients targeting the Pakistani market.",
  },
  {
    q: "What makes Brain Soft different from other SEO companies in Lahore?",
    a: "We combine deep local market knowledge with enterprise-level SEO practices. You get a dedicated consultant, honest communication, and strategies built around your revenue goals — not just rankings for rankings' sake.",
  },
];

const SEOServicesLahore: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SEO Services in Lahore | Trusted SEO Company | BrainSOFT</title>
        <meta
          name="description"
          content="Grow your business with professional SEO services in Lahore. Get local SEO, technical SEO, on-page SEO, link building and a free SEO audit from BrainSOFT."
        />
        <link
          rel="canonical"
          href="https://brain.net.pk/services/software/seo-services-lahore"
        />
      </Helmet>

      <div className="bg-white flex flex-col overflow-hidden items-stretch pt-[80px] md:pt-[88px]">
        <Header />
        <SEOPageSchema />
        <main>
          {/* HERO */}
          <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-primary/20 px-6 md:px-12 lg:px-24 py-20 md:py-28">
            <div className="absolute top-20 left-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-3xl animate-float-slow z-0" />
            <div
              className="absolute bottom-10 right-10 w-48 h-48 bg-brand-primary/20 rounded-full blur-3xl animate-float z-0"
              style={{ animationDelay: "1s" }}
            />
            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-7 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <Search className="w-4 h-4 text-brand-secondary" />
                  <span className="font-lato text-sm font-semibold text-white tracking-wide">
                    SEO Agency in Lahore
                  </span>
                </div>
                <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white">
                  SEO Services in Lahore That Actually Grow Your Business.
                </h1>
                <p className="font-lato text-lg md:text-xl text-white/90 leading-relaxed">
                  Your customers are searching for your business on Google right now. The real question is — are they finding you, or your competitor?
                </p>
                <p className="font-lato text-base md:text-lg text-white/80 leading-relaxed">
                  <strong className="text-white">BrainSOFT</strong> is a Lahore-based SEO agency that helps local businesses, e-commerce stores, and service providers rank on Google Page 1 through honest, data-driven strategies. No shortcuts. No black-hat tricks. Just SEO that delivers real, lasting results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link to="/services/software/contact-us">
                    <Button
                      size="lg"
                      className="group text-lg px-8 py-6 bg-brand-secondary text-brand-dark hover:bg-brand-secondary/90 hover:scale-105 transition-all shadow-xl"
                    >
                      Free SEO Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <a href="#packages">
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-8 py-6 bg-white/10 border-2 border-white/30 text-white hover:bg-white/20"
                    >
                      View SEO Packages
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <ImagePlaceholder
                  label="Hero visual — SEO dashboard, ranking graph, or team photo"
                  aspect="aspect-[5/4]"
                  className="bg-white/5 border-white/20"
                />
              </div>
            </div>
          </section>

          {/* TRUST BAR */}
          <section className="bg-white py-12 md:py-16 border-b border-brand-dark/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {trustStats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 hover:shadow-lg transition-shadow"
                  >
                    <s.icon className="w-8 h-8 text-brand-primary mb-3" />
                    <span className="font-raleway text-3xl md:text-4xl font-extrabold text-brand-dark">
                      {s.value}
                    </span>
                    <span className="font-lato text-sm md:text-base text-brand-dark/70 mt-1">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY BRAIN SOFT */}
          <section className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <ImagePlaceholder
                label="Team / office image — BrainSOFT SEO experts at work"
                aspect="aspect-[4/3]"
              />
              <div className="space-y-6">
                <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
                  Why BrainSOFT Is Lahore's Trusted SEO Partner
                </h2>
                <p className="font-lato text-base md:text-lg text-brand-dark/70 leading-relaxed">
                  There are dozens of SEO agencies in Lahore. Most make big promises and deliver generic work. BrainSOFT is built differently, we treat your business like our own.
                </p>
                <ul className="space-y-4">
                  {whyPoints.map((p) => (
                    <li key={p.title} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                      </div>
                      <p className="font-lato text-base md:text-lg text-brand-dark/80">
                        <strong className="text-brand-dark">{p.title}</strong> {p.desc}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="font-lato text-base md:text-lg text-brand-dark/70 leading-relaxed pt-2">
                  Whether you're a small shop in Gulberg, a clinic in DHA, or a growing brand targeting all of Pakistan, Brain Soft has the expertise to get you found.
                </p>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="bg-gradient-to-b from-white to-brand-primary/5 py-20 md:py-28 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
                  Our SEO Services in Lahore
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {services.map((s) => (
                  <article
                    key={s.title}
                    className="group bg-white rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-xl border border-brand-dark/5 hover:border-brand-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <s.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-raleway text-xl md:text-2xl font-bold text-brand-dark pt-2">
                        {s.title}
                      </h3>
                    </div>
                    <p className="font-lato text-base text-brand-dark/75 leading-relaxed">
                      {s.body}
                    </p>
                    {s.includes && (
                      <p className="font-lato text-sm md:text-base text-brand-dark/70 leading-relaxed mt-4 pt-4 border-t border-brand-dark/10">
                        <strong className="text-brand-dark">
                          {s.includesLabel ?? "Includes"}:
                        </strong>{" "}
                        {s.includes}
                      </p>
                    )}
                  </article>
                ))}
              </div>

              <div className="mt-16">
                <ImagePlaceholder
                  label="Services showcase — process diagram, results screenshot, or supporting graphic"
                  aspect="aspect-[16/7]"
                />
              </div>
            </div>
          </section>

          {/* PACKAGES */}
          <section id="packages" className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
                  Packages & Pricing
                </div>
                <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
                  SEO Packages Built to Outperform the Lahore Market
                </h2>
                <p className="font-lato text-base md:text-lg text-brand-dark/70 mt-5">
                  Four tiers designed with anchoring, feature stacking, and no-lock-in flexibility — so comparison shoppers keep landing back on the plan that actually delivers more for less.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {packages.map((p) => (
                  <div
                    key={p.name}
                    className={`relative flex flex-col rounded-2xl p-7 border-2 transition-all hover:-translate-y-1 hover:shadow-2xl ${
                      p.featured
                        ? "bg-brand-dark text-white border-brand-secondary shadow-2xl lg:scale-105 ring-4 ring-brand-secondary/20"
                        : "bg-white text-brand-dark border-brand-dark/10 hover:border-brand-primary/40"
                    }`}
                  >
                    {p.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-secondary text-brand-dark font-lato font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                        ★ Most Popular
                      </span>
                    )}
                    <h3
                      className={`font-raleway text-2xl font-extrabold ${
                        p.featured ? "text-brand-secondary" : "text-brand-primary"
                      }`}
                    >
                      {p.name}
                    </h3>
                    <div className="mt-4">
                      <div
                        className={`font-raleway text-3xl font-extrabold ${
                          p.featured ? "text-white" : "text-brand-dark"
                        }`}
                      >
                        {p.price}
                      </div>
                      <div
                        className={`font-lato text-sm mt-1 ${
                          p.featured ? "text-white/70" : "text-brand-dark/60"
                        }`}
                      >
                        {p.priceNote}
                      </div>
                    </div>
                    <p
                      className={`font-lato text-sm mt-5 leading-relaxed ${
                        p.featured ? "text-white/85" : "text-brand-dark/75"
                      }`}
                    >
                      {p.bestFor}
                    </p>

                    <div
                      className={`mt-5 pt-5 border-t ${
                        p.featured ? "border-white/15" : "border-brand-dark/10"
                      }`}
                    >
                      <ul className="space-y-2.5">
                        {p.deliverables.map((d) => (
                          <li key={d} className="flex gap-2.5 items-start">
                            <CheckCircle2
                              className={`w-4 h-4 mt-1 flex-shrink-0 ${
                                p.featured ? "text-brand-secondary" : "text-brand-primary"
                              }`}
                            />
                            <span
                              className={`font-lato text-sm leading-snug ${
                                p.featured ? "text-white/90" : "text-brand-dark/80"
                              }`}
                            >
                              {d}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`mt-5 pt-5 border-t text-xs italic leading-relaxed ${
                        p.featured
                          ? "border-white/15 text-white/70"
                          : "border-brand-dark/10 text-brand-dark/60"
                      }`}
                    >
                      <span
                        className={`not-italic font-semibold ${
                          p.featured ? "text-brand-secondary" : "text-brand-primary"
                        }`}
                      >
                        Vs. market:
                      </span>{" "}
                      {p.vsMarket}
                    </div>

                    <div className="mt-6 pt-2">
                      <Link to="/services/software/contact-us">
                        <Button
                          className={`w-full font-semibold ${
                            p.featured
                              ? "bg-brand-secondary text-brand-dark hover:bg-brand-secondary/90"
                              : "bg-brand-primary text-white hover:bg-brand-primary/90"
                          }`}
                        >
                          {p.cta}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* COMPARISON TABLE */}
              <div className="mt-20">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <h3 className="font-raleway text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-dark leading-tight">
                    Full Feature Comparison
                  </h3>
                  <p className="font-lato text-base text-brand-dark/70 mt-3">
                    Every deliverable, side by side.
                  </p>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-brand-dark/10 shadow-sm">
                  <table className="w-full min-w-[820px] text-left">
                    <thead>
                      <tr className="bg-brand-dark text-white">
                        <th className="font-raleway font-bold text-sm md:text-base px-5 py-4 sticky left-0 bg-brand-dark z-10">
                          &nbsp;
                        </th>
                        {packages.map((p) => (
                          <th
                            key={p.name}
                            className={`font-raleway font-extrabold text-sm md:text-base px-4 py-4 text-center ${
                              p.featured ? "text-brand-secondary" : "text-white"
                            }`}
                          >
                            {p.name}
                            {p.featured && (
                              <div className="font-lato text-[10px] font-semibold mt-1 text-brand-secondary/90 uppercase tracking-wider">
                                ★ Most Popular
                              </div>
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, ri) => (
                        <tr
                          key={row.label}
                          className={ri % 2 === 0 ? "bg-white" : "bg-brand-primary/5"}
                        >
                          <td
                            className={`font-lato font-semibold text-sm text-brand-dark px-5 py-3.5 sticky left-0 z-10 ${
                              ri % 2 === 0 ? "bg-white" : "bg-brand-primary/5"
                            }`}
                          >
                            {row.label}
                          </td>
                          {row.values.map((v, ci) => {
                            const isFeatured = packages[ci].featured;
                            return (
                              <td
                                key={ci}
                                className={`font-lato text-sm px-4 py-3.5 text-center ${
                                  isFeatured
                                    ? "bg-brand-secondary/10 text-brand-dark font-semibold"
                                    : "text-brand-dark/80"
                                }`}
                              >
                                {typeof v === "boolean" ? (
                                  v ? (
                                    <CheckCircle2 className="w-5 h-5 text-brand-primary mx-auto" />
                                  ) : (
                                    <Minus className="w-5 h-5 text-brand-dark/25 mx-auto" />
                                  )
                                ) : (
                                  v
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="font-lato text-xs md:text-sm italic text-brand-dark/60 mt-5 leading-relaxed max-w-4xl">
                  We use white-hat methods only and follow Google's guidelines. We do not guarantee specific rankings — no ethical agency can — but we guarantee every deliverable, full transparency, and measurable progress. Typical meaningful results appear within 3–6 months.
                </p>
              </div>

              {/* VALUE-ADDS */}
              <div className="mt-20">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <h3 className="font-raleway text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-dark leading-tight">
                    Value-Added Services
                  </h3>
                  <p className="font-lato text-base text-brand-dark/70 mt-3">
                    Included across Growth and above — at no extra cost.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {valueAdds.map((v) => (
                    <div
                      key={v}
                      className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 border border-brand-dark/10 rounded-xl p-5 text-center hover:border-brand-secondary/40 hover:-translate-y-1 transition-all"
                    >
                      <Gift className="w-6 h-6 text-brand-secondary mx-auto mb-3" />
                      <p className="font-lato text-sm font-semibold text-brand-dark leading-snug">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ADD-ONS */}
              <div className="mt-20">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <h3 className="font-raleway text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-dark leading-tight">
                    Add-Ons & Upsells
                  </h3>
                  <p className="font-lato text-base text-brand-dark/70 mt-3">
                    Scale any package with focused, high-impact extras.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {addOns.map((a) => (
                    <div
                      key={a}
                      className="flex items-center gap-3 bg-white border border-brand-dark/10 rounded-xl p-5 hover:border-brand-primary/40 hover:shadow-md transition-all"
                    >
                      <Plus className="w-5 h-5 text-brand-primary flex-shrink-0" />
                      <span className="font-lato text-sm md:text-base text-brand-dark">
                        {a}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* GUARANTEES */}
          <section className="bg-gradient-to-br from-brand-dark to-brand-dark/95 py-20 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-block bg-brand-secondary/15 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
                  Ethical Guarantees
                </div>
                <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Guarantees Other Lahore Agencies Won't Offer
                </h2>
                <p className="font-lato text-base md:text-lg text-white/75 mt-5">
                  No one can honestly guarantee rankings — so we guarantee everything else that actually matters.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {guarantees.map((g) => (
                  <div
                    key={g.title}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-brand-secondary/40 transition-all"
                  >
                    <ShieldCheck className="w-9 h-9 text-brand-secondary mb-4" />
                    <h3 className="font-raleway text-lg font-bold text-white mb-2">
                      {g.title}
                    </h3>
                    <p className="font-lato text-sm text-white/75 leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* PROCESS */}
          <section className="bg-gradient-to-br from-brand-dark to-brand-dark/90 py-20 md:py-28 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Our SEO Process — Simple, Transparent, Effective
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {process.map((step, idx) => (
                  <div
                    key={step.title}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-secondary text-brand-dark font-raleway font-extrabold text-xl flex items-center justify-center mb-4">
                      {idx + 1}
                    </div>
                    <h3 className="font-raleway text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="font-lato text-sm text-white/75 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* INDUSTRIES */}
          <section className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
                  Industries We Serve in Lahore
                </h2>
                <p className="font-lato text-base md:text-lg text-brand-dark/75 leading-relaxed">
                  Brain Soft has delivered real SEO results for businesses across Lahore's most competitive sectors — healthcare, legal, real estate, education, retail, food & hospitality, IT, construction, and financial services.
                </p>
                <p className="font-lato text-base md:text-lg text-brand-dark/75 leading-relaxed">
                  If your customers use Google to find businesses like yours, we can help you rank above your competitors.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {[
                    "Healthcare",
                    "Legal",
                    "Real Estate",
                    "Education",
                    "Retail",
                    "Food & Hospitality",
                    "IT",
                    "Construction",
                    "Financial Services",
                  ].map((i) => (
                    <span
                      key={i}
                      className="font-lato text-sm px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-semibold"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
              <ImagePlaceholder
                label="Industries collage — icons or photos of sectors served"
                aspect="aspect-[4/3]"
              />
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-gradient-to-b from-brand-primary/5 to-white py-20 md:py-28 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
                  Frequently Asked Questions
                </h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((f, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="bg-white border border-brand-dark/10 rounded-2xl px-6 shadow-sm"
                  >
                    <AccordionTrigger className="font-raleway text-left text-base md:text-lg font-bold text-brand-dark hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-lato text-base text-brand-dark/75 leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* CTA */}
          <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-dark px-6 md:px-12 lg:px-24 py-20 md:py-28">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-64 h-64 bg-brand-secondary rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative max-w-5xl mx-auto text-center space-y-7">
              <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Get Your Free SEO Consultation.
              </h2>
              <p className="font-lato text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Not sure why your website isn't ranking? Let's find out together. BrainSOFT offers a complimentary SEO consultation for Lahore businesses — no commitment, no pressure. In our 30 Minutes discovery call, you'll walk away knowing exactly where your site stands, what's holding it back, and what it will take to reach page 1.
              </p>
              <div className="pt-4">
                <Link to="/services/software/contact-us">
                  <Button
                    size="lg"
                    className="group text-lg px-10 py-7 bg-brand-secondary text-brand-dark hover:bg-brand-secondary/90 hover:scale-105 transition-all shadow-2xl"
                  >
                    Book My Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SEOServicesLahore;
