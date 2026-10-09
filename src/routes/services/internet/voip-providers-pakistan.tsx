import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import {
  PhoneCall,
  Network,
  Headphones,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Building2,
  Receipt,
  Wrench,
  Layers,
  Check,
} from "lucide-react";

import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { AvailabilityCheckerModal } from "@/components/internet/AvailabilityCheckerModal";
import { Button } from "@/components/ui/button";
import AnimatedMesh from "@/components/internet/home/AnimatedMesh";
import SectionHeader from "@/components/internet/home/SectionHeader";
import FinalCTASection from "@/components/internet/home/FinalCTASection";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";

import VoIPPlaceholder from "@/components/internet/voip/VoIPPlaceholder";
import VoIPFeatures from "@/components/internet/voip/VoIPFeatures";
import VoIPUseCases from "@/components/internet/voip/VoIPUseCases";
import VoIPComparison from "@/components/internet/voip/VoIPComparison";
import VoIPProcess from "@/components/internet/voip/VoIPProcess";
import VoIPFAQ, { voipFaqs } from "@/components/internet/voip/VoIPFAQ";
import RelatedServices from "@/components/internet/telephony/RelatedServices";

const SITE = "https://brainnet.com.pk";
const PATH = "/services/internet/voip-providers-pakistan";
const WHATSAPP = "https://api.whatsapp.com/send/?phone=923276222888";

const title = "VoIP Providers in Pakistan | Business VoIP Services — BrainNET";
const description =
  "Licensed VoIP provider in Pakistan. Business VoIP and cloud voice on BrainNET's own fiber network — HD call quality, 99.9% uptime SLA and 24/7 local support.";

export const Route = createFileRoute("/services/internet/voip-providers-pakistan")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VoIPProvidersPage,
});

const overview = [
  {
    Icon: Network,
    title: "SIP trunking",
    body: "Licensed SIP trunks sized to your concurrent-call load, delivered over BrainNET's own fiber last mile.",
  },
  {
    Icon: Layers,
    title: "Cloud & hosted PBX",
    body: "A full IP-PBX without the hardware — extensions, hunt groups, voicemail-to-email and call queues.",
  },
  {
    Icon: PhoneCall,
    title: "DID numbers & porting",
    body: "New local numbers across major cities, or port the numbers your customers already know.",
  },
  {
    Icon: Headphones,
    title: "IVR & contact centre",
    body: "Auto attendant, skills-based routing, recording and live analytics for high-volume phone teams.",
  },
];

const whyUs = [
  {
    Icon: Building2,
    title: "Our own fiber, end to end",
    body: "Voice rides the same network we build and maintain. No third-party last mile means no finger-pointing when quality dips.",
  },
  {
    Icon: ShieldCheck,
    title: "99.9% uptime SLA",
    body: "A written SLA with credits, redundant core routing and 24/7 NOC monitoring behind every trunk.",
  },
  {
    Icon: Wrench,
    title: "Engineers in Lahore, not a ticket queue",
    body: "On-ground field teams and named account managers who can be at your site the same day.",
  },
  {
    Icon: Receipt,
    title: "One provider, one invoice",
    body: "Pair VoIP with dedicated fiber and get internet plus voice on a single, itemised monthly bill.",
  },
  {
    Icon: PhoneCall,
    title: "Thirty years of carrier experience",
    body: "Serving Pakistani businesses since 1996 — from leased lines to fiber to full IP telephony.",
  },
];

const plans = [
  {
    badge: "STARTER",
    title: "Small office trunk",
    channels: "4–8 concurrent channels",
    points: ["2 DID numbers included", "Auto attendant & voicemail", "HD voice codecs", "Business-hours onboarding"],
    featured: false,
  },
  {
    badge: "MOST POPULAR",
    title: "Business VoIP",
    channels: "15–30 concurrent channels",
    points: [
      "Multi-level IVR",
      "Call recording & analytics",
      "Number porting managed for you",
      "Priority 24/7 support",
      "Bundles with dedicated fiber",
    ],
    featured: true,
  },
  {
    badge: "ENTERPRISE",
    title: "Contact centre grade",
    channels: "50–300+ concurrent channels",
    points: [
      "Redundant trunks & failover routing",
      "CRM / PBX integration support",
      "Custom termination rates",
      "Named account manager",
      "Signed 99.9% uptime SLA",
    ],
    featured: false,
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business VoIP Services in Pakistan",
    serviceType: "VoIP, SIP Trunking and Cloud PBX",
    provider: {
      "@type": "Organization",
      name: "BrainNET Fiber",
      url: SITE,
      telephone: "+92-42-111-222-888",
      areaServed: "PK",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    url: `${SITE}${PATH}`,
    description:
      "Licensed business VoIP provider in Pakistan offering SIP trunks, cloud PBX, IVR, DID numbers and call recording over BrainNET's own fiber network.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "VoIP plans",
      itemListElement: plans.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p.title, description: p.channels },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: voipFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "VoIP Providers in Pakistan", item: `${SITE}${PATH}` },
    ],
  },
];

function VoIPProvidersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bn-home min-h-screen relative overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <div className="pt-24 max-w-screen-xl mx-auto px-5 relative z-10">
        <Breadcrumb />
      </div>

      <section id="main-content" className="relative pt-8 pb-20 md:pb-28">
        <AnimatedMesh />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <span className="bn-eyebrow mb-6 inline-flex">VoIP Providers in Pakistan</span>
              <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight mt-6">
                <span className="bn-display">VoIP Providers in Pakistan.</span>
                <br />
                <span className="bn-display-accent">Business voice on our own fiber.</span>
              </h1>
              <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                Licensed SIP trunks, cloud PBX and IVR delivered over the network we build and run ourselves — HD call
                quality, a 99.9% uptime SLA and engineers you can actually reach.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <VoIPPlaceholder
              label="Hero Banner Image"
              hint="Cinematic network operations centre with SIP/voice waveform overlay, deep indigo with red accent lighting"
              aspect="aspect-[21/9]"
              className="max-w-5xl mx-auto mb-12"
            />
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { Icon: ShieldCheck, label: "Licensed, compliant voice", glow: "bn-glow-violet" },
              { Icon: Network, label: "HD SIP trunks", glow: "" },
              { Icon: Headphones, label: "24/7 NOC support", glow: "bn-glow-red" },
            ].map((b) => (
              <StaggerItem key={b.label}>
                <div className={`bn-tile ${b.glow} p-8 flex flex-col items-center text-center gap-4 h-full`}>
                  <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                    <b.Icon className="w-8 h-8 text-[hsl(var(--bn-violet-soft))]" />
                  </div>
                  <p className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))]">{b.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white font-display font-semibold text-base md:text-lg px-8 py-6 rounded-full shadow-[0_20px_60px_-15px_hsl(var(--bn-red)/0.7)] transition-all"
              >
                Check Availability Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outlined"
                onClick={() => window.open(WHATSAPP, "_blank", "noopener,noreferrer")}
                className="border-2 border-white/30 bg-white/5 backdrop-blur text-white hover:bg-white/10 hover:border-white/50 font-display font-semibold text-base md:text-lg px-8 py-6 rounded-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to an Expert
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ClientLogoSlider />

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Service overview"
            title={
              <>
                What our VoIP service <span className="bn-display-accent">actually includes.</span>
              </>
            }
            kicker="VoIP replaces copper phone lines with voice carried over IP. As one of the few VoIP service providers in Pakistan that owns its last mile, we deliver the trunk, the PBX and the connectivity as a single service."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {overview.map((o) => (
              <StaggerItem key={o.title}>
                <article className="bn-tile p-7 h-full flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                    <o.Icon className="w-7 h-7 text-[hsl(var(--bn-violet-soft))]" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))]">{o.title}</h3>
                  <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{o.body}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-center">
              <VoIPPlaceholder
                label="Cloud PBX Diagram"
                hint="Clean schematic: PSTN → BrainNET SIP trunk → cloud PBX → desk phones, softphones, mobile"
                aspect="aspect-[4/3]"
              />
              <div className="bn-tile p-8 flex flex-col gap-4">
                <h3 className="font-display font-bold text-2xl md:text-3xl bn-display">
                  Voice and internet, engineered together
                </h3>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))] leading-relaxed">
                  Call quality is a network problem before it is a phone problem. Pair your trunk with a{" "}
                  <Link
                    to="/services/internet/business-internet"
                    className="text-[hsl(var(--bn-violet-soft))] underline underline-offset-4"
                  >
                    dedicated business internet connection
                  </Link>{" "}
                  and we prioritise voice traffic on a committed, uncontended link — then back the whole thing with one
                  SLA. Smaller sites and homes can start with our{" "}
                  <Link
                    to="/services/internet/voice-plans"
                    className="text-[hsl(var(--bn-violet-soft))] underline underline-offset-4"
                  >
                    standard voice plans
                  </Link>{" "}
                  instead.
                </p>
                <Link
                  to="/services/internet/coverage-area"
                  className="font-display font-semibold text-sm text-[hsl(var(--bn-ink))] inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Check if we cover your area <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Why BrainNET"
            title={
              <>
                Why we're the best VoIP provider <span className="bn-display-accent">for Pakistani businesses.</span>
              </>
            }
            kicker="Most VoIP providers in Pakistan resell someone else's network. We own ours."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {whyUs.map((w) => (
              <StaggerItem key={w.title}>
                <article className="bn-tile p-7 h-full flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--bn-red)/0.12)] border border-[hsl(var(--bn-red)/0.35)] flex items-center justify-center">
                    <w.Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))]">{w.title}</h3>
                  <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{w.body}</p>
                </article>
              </StaggerItem>
            ))}
            <StaggerItem>
              <VoIPPlaceholder
                label="Feature Illustration 2"
                hint="Macro shot of fiber strands feeding a voice gateway, indigo bokeh"
                aspect="aspect-auto"
                className="h-full min-h-[220px]"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <VoIPFeatures />

      <section className="relative py-14 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-5">
          <ScrollReveal>
            <div className="bn-tile bn-glow-violet p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="font-display font-bold text-2xl md:text-3xl bn-display">
                  Not sure how many channels you need?
                </h2>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))]">
                  Send us your seat count and peak call volume — we'll size the trunk and quote it back the same day.
                </p>
              </div>
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white font-display font-semibold px-8 py-6 rounded-full whitespace-nowrap"
              >
                Check Availability Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <VoIPUseCases />
      <VoIPComparison />

      <section className="relative py-14 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-5">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5">
                <VoIPPlaceholder
                  label="CTA Graphic"
                  hint="Stylised handset + fiber ribbon, red glow on deep navy"
                  aspect="aspect-[3/2]"
                />
              </div>
              <div className="lg:col-span-7 bn-tile p-8 md:p-10 flex flex-col gap-5">
                <h2 className="font-display font-bold text-3xl md:text-4xl bn-display">
                  Move off PRI without moving your numbers.
                </h2>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))] leading-relaxed">
                  We manage the porting, run both systems in parallel during cutover, and only decommission the old
                  lines once every extension is answering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-accent hover:bg-accent/90 text-white font-display font-semibold px-8 py-6 rounded-full"
                  >
                    Check Availability Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outlined"
                    onClick={() => window.open(WHATSAPP, "_blank", "noopener,noreferrer")}
                    className="border-2 border-white/30 bg-white/5 backdrop-blur text-white hover:bg-white/10 hover:border-white/50 font-display font-semibold px-8 py-6 rounded-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Talk to an Expert
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <VoIPProcess />

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Plans & consultation"
            title={
              <>
                Sized to your call volume. <span className="bn-display-accent">Quoted, not guessed.</span>
              </>
            }
            kicker="Every VoIP deployment is priced on channels, numbers and termination — tell us your traffic and we'll build the quote."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {plans.map((p) => (
              <StaggerItem key={p.title}>
                <article
                  className={`bn-tile p-8 h-full flex flex-col gap-5 ${
                    p.featured ? "bn-glow-red border-[hsl(var(--bn-red)/0.5)]" : ""
                  }`}
                >
                  <span className="bn-eyebrow">{p.badge}</span>
                  <h3 className="font-display font-bold text-2xl text-[hsl(var(--bn-ink))]">{p.title}</h3>
                  <p className="font-dm text-sm text-[hsl(var(--bn-violet-soft))]">{p.channels}</p>
                  <ul className="flex flex-col gap-3 mt-2 flex-1">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 font-dm text-sm text-[hsl(var(--bn-ink-soft))]">
                        <Check className="w-4 h-4 mt-0.5 text-[hsl(var(--bn-violet-soft))] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className={`w-full rounded-full font-display font-semibold py-6 ${
                      p.featured
                        ? "bg-accent hover:bg-accent/90 text-white"
                        : "bg-white/5 border-2 border-white/25 text-white hover:bg-white/10"
                    }`}
                  >
                    Get a custom quote
                  </Button>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <VoIPFAQ />

      <RelatedServices
        currentPath={PATH}
        title="Go deeper on any part of the stack."
        kicker="VoIP is the umbrella. Each service below has its own page with pricing, specs and FAQs."
      />

      <FinalCTASection />

      <Footer />

      <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
