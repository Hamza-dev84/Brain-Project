import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";

import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { Button } from "@/components/ui/button";
import { AvailabilityCheckerModal } from "@/components/internet/AvailabilityCheckerModal";
import {
  Gauge, ArrowUpDown, ShieldCheck, Network, Headphones, TrendingUp,
  MessageCircle, ArrowRight, CheckCircle2, Building2, PhoneCall, Code2,
  HeartPulse, ShoppingCart, MapPin, Sparkles, Clock,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import AnimatedMesh from "@/components/internet/home/AnimatedMesh";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import heroBackdrop from "@/assets/internet/business/bi-hero-isometric-lahore.webp";
import introDiagram from "@/assets/internet/business/bi-intro-shared-vs-dedicated.webp";
import cirCubes from "@/assets/internet/business/bi-cir-cubes.webp";
import indCorporate from "@/assets/internet/business/bi-ind-corporate.webp";
import indCallcenter from "@/assets/internet/business/bi-ind-callcenter.webp";
import indSoftware from "@/assets/internet/business/bi-ind-software.webp";
import indHospital from "@/assets/internet/business/bi-ind-hospital.webp";
import indEcommerce from "@/assets/internet/business/bi-ind-ecommerce.webp";
import fiberMacro from "@/assets/internet/business/bi-fiber-macro.webp";
import installTimeline from "@/assets/internet/business/bi-install-timeline.webp";
import nocPortrait from "@/assets/internet/business/bi-noc-portrait.webp";
import ctaNightLahore from "@/assets/internet/business/bi-cta-night-lahore.webp";
import whyDedicatedBg from "@/assets/internet/business/bi-why-dedicated-bg.webp";
import PageMeta from "@/components/common/PageMeta";
import DedicatedInternetSEOSchema from "@/pages/schemaFiles/internet-schema-files/DedicatedInternetSEOSchema";

// const title = "Dedicated Internet in Lahore — Built for Business | BrainNET";
// const description =
//   "Dedicated fiber internet in Lahore with 99.9% uptime SLA, static IP, symmetrical speeds, and 24/7 NOC support. Business plans from PKR 8,000/month.";

export const Route = createFileRoute("/services/internet/business-internet")({
  // head: () => ({
  //   meta: [
  //     { title },
  //     { name: "description", content: description },
  //     { property: "og:title", content: title },
  //     { property: "og:description", content: description },
  //     { property: "og:type", content: "website" },
  //     { name: "twitter:card", content: "summary_large_image" },
  //   ],
  // }),
  component: BusinessInternet,
});

function BusinessInternet() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openWhatsApp = () =>
    window.open("https://api.whatsapp.com/send/?phone=923276222888", "_blank", "noopener,noreferrer");

  const whyChoose = [
    { Icon: Gauge, title: "Guaranteed Speed", desc: "100% of your subscribed bandwidth, always." },
    { Icon: ArrowUpDown, title: "Symmetrical Upload & Download", desc: "Equal speeds in both directions." },
    { Icon: ShieldCheck, title: "99.9% Uptime SLA", desc: "Backed by a written service level agreement." },
    { Icon: Network, title: "Static IP Address", desc: "Essential for VPNs, servers, and remote access." },
    { Icon: Headphones, title: "24/7 NOC Support", desc: "Dedicated network team, not a general helpdesk." },
    { Icon: TrendingUp, title: "Scalable Bandwidth", desc: "Upgrade your plan as your business grows." },
  ];

  const packages = [
    { name: "Business 5MB", std: "5 Mbps", promo: "10 Mbps", fup: "1000 GB", ideal: "Small offices & startups", price: "8,000" },
    { name: "Business 10MB", std: "10 Mbps", promo: "20 Mbps", fup: "1000 GB", ideal: "Growing teams & daily operations", price: "14,000" },
    { name: "Business 20MB", std: "20 Mbps", promo: "40 Mbps", fup: "2000 GB", ideal: "Medium businesses & cloud usage", price: "26,000", featured: true },
    { name: "Business 30MB", std: "30 Mbps", promo: "60 Mbps", fup: "2000 GB", ideal: "High-demand office environments", price: "38,000" },
    { name: "Business 40MB", std: "40 Mbps", promo: "80 Mbps", fup: "2000 GB", ideal: "Enterprises & heavy traffic usage", price: "50,000" },
    { name: "Business 50MB", std: "50 Mbps", promo: "100 Mbps", fup: "2000 GB", ideal: "Large enterprises & intensive operations", price: "62,000" },
  ];

  const industries = [
    { Icon: Building2, label: "Corporate offices & multi-branch enterprises", image: indCorporate, alt: "Modern corporate office floor in Lahore at dusk with monitors showing dashboards" },
    { Icon: PhoneCall, label: "BPOs & call centers", image: indCallcenter, alt: "Call center workstation with headset in the foreground and agents working in the background" },
    { Icon: Code2, label: "Software houses & IT companies", image: indSoftware, alt: "Developer working on a dual-monitor coding setup in a dark studio" },
    { Icon: HeartPulse, label: "Banks, hospitals & educational institutions", image: indHospital, alt: "Hospital reception desk lit with red accent lighting at night" },
    { Icon: ShoppingCart, label: "E-commerce & logistics operations", image: indEcommerce, alt: "E-commerce warehouse worker scanning packages on a conveyor at dusk" },
  ];

  const differentiators = [
    "PTA-licensed and fully compliant",
    "Redundant fiber backbone with multiple upstream carriers",
    "Fast installation after site survey",
    "Transparent pricing, no hidden charges",
    "Proactive monitoring — we fix issues before you notice them",
  ];

  const faqs = [
    {
      q: "What is dedicated internet, and how is it different from broadband?",
      a: "Dedicated internet gives your business exclusive use of its assigned bandwidth. A dedicated internet connection in Lahore offers steady speed all day, every day. Unlike shared broadband, it doesn't slow down during busy times.",
    },
    {
      q: "Who needs a dedicated internet connection in Lahore?",
      a: "Any business that needs a stable internet connection for daily work — call centers, software houses, corporate offices, hospitals, banks, and e-commerce companies. If downtime costs you money, you need dedicated internet.",
    },
    {
      q: "Do you provide a static IP with dedicated internet?",
      a: "Yes. We include a static IP as standard with all our dedicated internet plans in Lahore. We can also divide larger IP subnets based on your requirements.",
    },
    {
      q: "How long does installation take?",
      a: "Installation usually takes a maximum of 7 days after a site survey. This time frame depends on your location and the existing fiber infrastructure nearby.",
    },
    {
      q: "What makes you the best fiber internet provider in Lahore for businesses?",
      a: "We support our service with a written SLA. You get 24/7 NOC support, redundant upstream connections, and clear pricing. We built our network for business — not adapted it from a residential product.",
    },
    {
      q: "Can I upgrade my plan later?",
      a: "Yes. Our dedicated internet connection in Lahore can accommodate increasing demands. You can upgrade your speed tier anytime. In most cases, this won't change your physical connection.",
    },
  ];

  return (
    <>
      <PageMeta
        title="Dedicated Internet in Lahore | Business Fiber Solutions - BrainNET"
        description=" Get dedicated internet in Lahore with guaranteed bandwidth, 99% uptime, symmetrical speeds, SLA-backed connectivity, and 24/7 enterprise support for businesses, offices, and enterprises."
      // ogImage="/favicons/brainnet_fiber_favicon.png"
      />

      <DedicatedInternetSEOSchema />
      <div className="bn-home min-h-screen relative overflow-x-hidden">
        <Header />

        <div className="pt-24 max-w-screen-xl mx-auto px-5 relative z-10">
          <Breadcrumb />
        </div>

        {/* Hero */}
        <section id="main-content" className="relative pt-8 pb-20 md:pb-28 overflow-hidden">
          <AnimatedMesh />
          <img width={1920} height={1071}
            src={heroBackdrop}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            className="hidden md:block absolute top-0 right-0 w-[55%] h-full object-cover object-left pointer-events-none select-none opacity-70"
            style={{ maskImage: "radial-gradient(ellipse at right, black 40%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at right, black 40%, transparent 75%)" }}
          />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-12">
                <span className="bn-eyebrow mb-6 inline-flex">Business Internet</span>
                <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight mt-6">
                  <span className="bn-display">Dedicated Internet in Lahore —</span>
                  <br />
                  <span className="bn-display-accent">Built for Business.</span>
                </h1>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                  Guaranteed bandwidth. Symmetrical speeds. 99.9% uptime SLA. Internet that doesn't slow down when your business needs it most.
                  Pair it with our{" "}
                  <Link to="/services/internet/voip-providers-pakistan" className="text-[hsl(var(--bn-violet-soft))] underline underline-offset-4">
                    business VoIP services
                  </Link>{" "}
                  for voice and data on one bill.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { Icon: Headphones, label: "24/7 NOC Support", glow: "bn-glow-violet" },
                { Icon: ShieldCheck, label: "99.9% Uptime SLA", glow: "" },
                { Icon: Network, label: "Static IP Included", glow: "bn-glow-red" },
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
                  className="bg-accent hover:bg-accent/90 text-white font-display font-semibold text-base md:text-lg px-8 py-6 rounded-full shadow-[0_20px_60px_-15px_hsl(var(--bn-red)/0.7)] hover:shadow-[0_25px_70px_-15px_hsl(var(--bn-red)/0.9)] transition-all"
                >
                  Check Availability Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outlined"
                  onClick={openWhatsApp}
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

        {/* Intro */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <ScrollReveal>
              <div className="bn-tile p-8 md:p-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 md:gap-10 items-center">
                <div>
                  <p className="font-dm text-[hsl(var(--bn-ink))] text-lg md:text-xl leading-relaxed">
                    If your business runs on the internet, a shared broadband connection is not enough. We offer
                    {/* <span className="text-[hsl(var(--bn-violet-soft))] font-semibold">dedicated internet in Lahore</span>  */}
                    <Link to="/services/internet/business-internet" className="text-[hsl(var(--bn-violet-soft))] underline underline-offset-4">
                      dedicated internet in Lahore
                    </Link>{" "}
                    — your office gets guaranteed bandwidth. It's private, not slowed down at busy times, and there is no reason for dropped connections.
                  </p>
                  <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-base md:text-lg leading-relaxed mt-5">
                    No matter if you manage an office, call center, software firm, or retail shop, our internet in Lahore offers smooth, nonstop service.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-[hsl(var(--bn-violet)/0.25)] blur-3xl rounded-full pointer-events-none" />
                  <img width={1920} height={1920}
                    src={introDiagram}
                    alt="Diagram comparing congested shared broadband with smooth dedicated internet"
                    loading="lazy"
                    decoding="async"
                    className="relative w-full aspect-square object-contain"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Why Choose Dedicated Internet */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <img width={1920} height={1071}
            src={whyDedicatedBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-[35%] pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--bn-bg-deep)/0.85)] via-[hsl(var(--bn-bg-deep)/0.7)] to-[hsl(var(--bn-bg-deep)/0.9)] pointer-events-none" />
          <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <SectionHeader
              eyebrow="Why dedicated"
              title={<>Shared broadband slows down. <span className="bn-display-accent">Dedicated internet doesn't.</span></>}
              kicker="Shared broadband slows down when everyone is online. Our Dedicated Internet in Lahore does not. Here's what you get with our service."
            />
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {whyChoose.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="bn-tile group h-full p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--bn-violet)/0.6)]">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                      <f.Icon className="w-6 h-6 text-[hsl(var(--bn-violet-soft))]" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-[hsl(var(--bn-ink))] text-lg leading-tight mb-2">{f.title}</h3>
                      <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Plans */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
          <div className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-[hsl(var(--bn-violet)/0.18)] rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <SectionHeader
              eyebrow="Plans & Pricing"
              title={<>Our Dedicated internet plans <span className="bn-display-accent">in Lahore.</span></>}
              kicker="Business packages with Fair Usage Policy. All plans include static IP, SLA documentation, and priority support."
            />

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {packages.map((p) => (
                <StaggerItem key={p.name}>
                  <div className={`bn-tile ${p.featured ? "bn-glow-violet border-[hsl(var(--bn-violet)/0.6)]" : ""} h-full p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1`}>
                    <div className="flex items-center justify-between">
                      <span className="bn-eyebrow">{p.name}</span>
                      {p.featured && (
                        <span className="text-[10px] font-display font-bold tracking-widest text-[hsl(var(--bn-violet-soft))] uppercase">Popular</span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display font-bold text-[hsl(var(--bn-ink))] text-5xl leading-none">{p.std.split(" ")[0]}</span>
                        <span className="font-dm text-[hsl(var(--bn-ink-soft))] text-base">Mbps</span>
                      </div>
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--bn-red)/0.12)] border border-[hsl(var(--bn-red)/0.35)]">
                        <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--bn-red))]" />
                        <span className="font-dm text-xs font-semibold text-[hsl(var(--bn-ink))]">Promo Speed: {p.promo}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[hsl(var(--bn-line)/0.5)]">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-[hsl(var(--bn-ink-soft))] font-display">Fair Usage</div>
                        <div className="font-display font-semibold text-[hsl(var(--bn-ink))] text-base mt-1">{p.fup}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-[hsl(var(--bn-ink-soft))] font-display">Monthly</div>
                        <div className="font-display font-bold text-[hsl(var(--bn-ink))] text-base mt-1">PKR {p.price}</div>
                      </div>
                    </div>

                    <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm leading-relaxed">
                      <span className="text-[hsl(var(--bn-ink))] font-semibold">Ideal for:</span> {p.ideal}
                    </p>

                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="mt-auto bg-accent hover:bg-accent/90 text-white font-display font-semibold rounded-full"
                    >
                      Check Availability
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Custom CIR + Pricing transparency */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ScrollReveal>
                <div className="bn-tile bn-glow-violet p-8 md:p-10 h-full flex flex-col gap-5 relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-[hsl(var(--bn-violet)/0.3)] rounded-full blur-[80px] pointer-events-none" />
                  <img width={1920} height={1920}
                    src={cirCubes}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="absolute -right-6 -top-6 w-44 md:w-56 h-auto object-contain pointer-events-none select-none opacity-90 drop-shadow-[0_10px_30px_hsl(var(--bn-violet)/0.5)]"
                  />
                  <span className="bn-eyebrow relative">Volume-Based Access</span>
                  <h3 className="relative font-display font-bold text-[hsl(var(--bn-ink))] text-2xl md:text-3xl leading-tight max-w-md">
                    Custom CIR Plans — unlimited dedicated speed with fixed data.
                  </h3>
                  <p className="relative font-dm text-[hsl(var(--bn-ink-soft))] text-base">
                    Starting at <span className="text-[hsl(var(--bn-ink))] font-bold">Rs. 30 per GB</span>.
                  </p>
                  <Button
                    onClick={openWhatsApp}
                    variant="outlined"
                    className="relative self-start border-2 border-white/30 bg-white/5 backdrop-blur text-white hover:bg-white/10 hover:border-white/50 font-display font-semibold rounded-full"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Talk to an Expert
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bn-tile p-8 md:p-10 h-full flex flex-col gap-5 border-[hsl(var(--bn-red)/0.4)]">
                  <span className="bn-eyebrow">Pricing</span>
                  <h3 className="font-display font-bold text-[hsl(var(--bn-ink))] text-2xl md:text-3xl leading-tight">
                    From <span className="bn-display-accent">PKR 25,000 / month</span>
                  </h3>
                  <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-base leading-relaxed">
                    For a 10 Mbps dedicated fiber connection. Pricing depends on speed, location, and SLA tier. Contact us for a free site survey and a customized quote — no hidden charges.
                  </p>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="self-start bg-accent hover:bg-accent/90 text-white font-display font-semibold rounded-full"
                  >
                    Get a Free Site Survey
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="relative py-20 md:py-28 overflow-hidden border-t border-[hsl(var(--bn-line)/0.4)]">
          <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <SectionHeader
              eyebrow="Who we serve"
              title={<>One of Lahore's top <span className="bn-display-accent">internet providers.</span></>}
              kicker="Serving businesses in Gulberg, Johar Town, Model Town, Ferozepur Road, Iqbal Town, and beyond."
            />
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {industries.map((ind) => (
                <StaggerItem key={ind.label}>
                  <div className="bn-tile group h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--bn-violet)/0.6)]">
                    {ind.image && (
                      <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <img
                          src={ind.image}
                          alt={ind.alt ?? ""}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bn-bg-deep))] via-[hsl(var(--bn-bg-deep)/0.3)] to-transparent pointer-events-none" />
                      </div>
                    )}
                    <div className="p-7 flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center flex-shrink-0">
                        <ind.Icon className="w-6 h-6 text-[hsl(var(--bn-violet-soft))]" />
                      </div>
                      <p className="font-dm text-[hsl(var(--bn-ink))] text-base leading-snug font-medium">{ind.label}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem>
                <div className="bn-tile h-full p-7 flex items-start gap-4 border-[hsl(var(--bn-red)/0.4)]">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--bn-red)/0.12)] border border-[hsl(var(--bn-red)/0.35)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[hsl(var(--bn-red))]" />
                  </div>
                  <p className="font-dm text-[hsl(var(--bn-ink))] text-base leading-snug">
                    For reliable, high-speed connectivity, <span className="font-semibold">we have the infrastructure your business needs.</span>
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Why We're the Best */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
          <img width={1920} height={1071}
            src={fiberMacro}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen pointer-events-none select-none"
          />
          <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[hsl(var(--bn-red)/0.18)] rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <SectionHeader
              eyebrow="Accountability"
              title={<>Why we're the best dedicated <span className="bn-display-accent">internet provider in Lahore.</span></>}
              kicker="We don't sell bandwidth — we commit to it in writing."
            />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {differentiators.map((d) => (
                <StaggerItem key={d}>
                  <div className="bn-tile h-full p-6 flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[hsl(var(--bn-violet-soft))] flex-shrink-0 mt-0.5" />
                    <p className="font-dm text-[hsl(var(--bn-ink))] text-base leading-snug font-medium">{d}</p>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem>
                <div className="bn-tile h-full p-6 flex items-start gap-4 border-[hsl(var(--bn-red)/0.4)]">
                  <Clock className="w-6 h-6 text-[hsl(var(--bn-red))] flex-shrink-0 mt-0.5" />
                  <p className="font-dm text-[hsl(var(--bn-ink))] text-base leading-snug font-medium">
                    7-day installation after site survey
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* NOC Support Portrait */}
        <section className="relative py-20 md:py-24 overflow-hidden border-t border-[hsl(var(--bn-line)/0.4)]">
          <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <ScrollReveal>
              <div className="bn-tile p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
                <div className="relative group order-2 lg:order-1">
                  <div className="absolute -inset-3 bg-[hsl(var(--bn-red)/0.3)] blur-3xl rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <img width={1920} height={1433}
                    src={nocPortrait}
                    alt="BrainNET NOC engineer monitoring network dashboards 24/7"
                    loading="lazy"
                    decoding="async"
                    className="relative w-full aspect-[4/5] object-cover rounded-2xl border border-white/10 shadow-2xl"
                  />
                </div>
                <div className="order-1 lg:order-2 flex flex-col gap-5">
                  <span className="bn-eyebrow">24/7 NOC Support</span>
                  <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.05]">
                    <span className="bn-display">Real engineers.</span>{" "}
                    <span className="bn-display-accent">Watching your network. Always.</span>
                  </h2>
                  <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-base md:text-lg leading-relaxed">
                    Our Network Operations Center is staffed by senior engineers — not a generic helpdesk. We monitor your link proactively, so most issues are detected and resolved before you ever notice them.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mt-2">
                    {[
                      "Proactive 24/7 link monitoring",
                      "Dedicated NOC, not a call center",
                      "Direct escalation to senior engineers",
                      "Average response under 15 minutes",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 font-dm text-[hsl(var(--bn-ink))] text-[15px]">
                        <CheckCircle2 className="w-5 h-5 text-[hsl(var(--bn-violet-soft))] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Installation Timeline */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <SectionHeader
              eyebrow="Installation in 7 days"
              title={<>From signed quote to <span className="bn-display-accent">live link.</span></>}
              kicker="A clear path from site survey to SLA handover."
            />
            <ScrollReveal delay={0.1}>
              <div className="bn-tile mt-12 p-6 md:p-10 overflow-hidden">
                <img width={1920} height={1071}
                  src={installTimeline}
                  alt="Five-step installation path: site survey, fiber pull, equipment install, activation, SLA handover"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain"
                />
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 md:mt-8">
                  {[
                    { d: "Day 1", t: "Site Survey" },
                    { d: "Day 2-4", t: "Fiber Pull" },
                    { d: "Day 5", t: "Equipment Install" },
                    { d: "Day 6", t: "Activation" },
                    { d: "Day 7", t: "SLA Handover" },
                  ].map((s) => (
                    <div key={s.t} className="text-center">
                      <div className="text-[10px] uppercase tracking-widest text-[hsl(var(--bn-red))] font-display font-bold">{s.d}</div>
                      <div className="font-display font-semibold text-[hsl(var(--bn-ink))] text-sm md:text-base mt-1">{s.t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-20 md:py-28 overflow-hidden border-t border-[hsl(var(--bn-line)/0.4)]">
          <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <SectionHeader
              eyebrow="FAQ"
              title={<>Frequently asked <span className="bn-display-accent">questions.</span></>}
              kicker="Everything you need to know about dedicated internet in Lahore."
            />
            <ScrollReveal>
              <div className="max-w-4xl mx-auto mt-14">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="bn-tile px-6 border data-[state=open]:border-[hsl(var(--bn-violet)/0.6)]"
                    >
                      <AccordionTrigger className="text-[hsl(var(--bn-ink))] hover:text-[hsl(var(--bn-violet-soft))] text-left font-display font-semibold text-base md:text-lg py-6 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-[hsl(var(--bn-ink-soft))] font-dm text-base leading-relaxed pb-6">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Final Quote CTA */}
        <section className="relative bn-home overflow-hidden py-24 md:py-32">
          <img width={1920} height={1071}
            src={ctaNightLahore}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--bn-bg-deep)/0.85)] via-[hsl(var(--bn-bg-deep)/0.7)] to-[hsl(var(--bn-bg-deep))] pointer-events-none" />
          <AnimatedMesh />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <ScrollReveal>
              <div className="bn-tile bn-glow-violet p-10 md:p-16 text-center flex flex-col items-center gap-8">
                <span className="bn-eyebrow">Get a free quote today</span>
                <h2 className="font-display font-bold text-[clamp(2.25rem,6vw,5rem)] leading-[0.95] tracking-tight">
                  <span className="bn-display">Stop settling for shared broadband.</span>
                  <br />
                  <span className="bn-display-accent">Get the best dedicated internet in Lahore.</span>
                </h2>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg md:text-xl max-w-2xl">
                  Call us now or fill our form to get a customized quote — and give your business the connectivity it deserves.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Button
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-accent hover:bg-accent/90 text-white font-display font-semibold text-base md:text-lg px-8 py-6 rounded-full shadow-[0_20px_60px_-15px_hsl(var(--bn-red)/0.7)] hover:shadow-[0_25px_70px_-15px_hsl(var(--bn-red)/0.9)] transition-all"
                  >
                    Check Availability Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outlined"
                    onClick={openWhatsApp}
                    className="border-2 border-white/30 bg-white/5 backdrop-blur text-white hover:bg-white/10 hover:border-white/50 font-display font-semibold text-base md:text-lg px-8 py-6 rounded-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Talk to an Expert
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />

        <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </>
  );
}
