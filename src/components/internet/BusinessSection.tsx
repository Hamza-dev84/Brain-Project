import React from "react";
import { Zap, Headphones, Globe, Server, CheckCircle, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import SectionHeader from "@/components/internet/home/SectionHeader";
import cirIcon from "@/assets/internet/site/business-cir-speedometer.webp";
import volumeIcon from "@/assets/internet/site/business-volume-blocks.webp";

const features = [
  { icon: Zap, title: "Dedicated Internet Speeds", description: "Uncontended, symmetric bandwidth with guaranteed speeds" },
  { icon: Headphones, title: "24/7 Enterprise Support", description: "Dedicated support team for your business needs" },
  {
    icon: Globe,
    title: "Multiple Upstreams for Optimized Global Connectivity",
    description: "Multiple redundant international links for reliability",
  },
  { icon: Server, title: "State of the Art Data Center", description: "Enterprise-grade infrastructure and security" },
];

const advantages = [
  "Customizable SLAs tailored to meet your unique requirements",
  "SME Packages: Affordable Dedicated Internet Speed Plans with Fixed Data",
  "Exclusive Home Internet Offers",
  "Pioneer of Fiber Internet Services in Pakistan",
];

const BusinessSection = () => {
  return (
    <section className="relative bn-home py-24 md:py-32 overflow-hidden border-t border-[hsl(var(--bn-line)/0.4)]">
      <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-[hsl(var(--bn-violet)/0.25)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-[hsl(var(--bn-red)/0.18)] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-screen-xl mx-auto px-5">
        <SectionHeader
          eyebrow="For business"
          align="left"
          title={
            <>
              Why we're the best <span className="bn-display-accent">internet provider</span> in Lahore
            </>
          }
          kicker="Enterprise-grade fiber, built for uptime, speed, and the businesses that depend on both."
        />

        <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={index}>
                <div className="bn-tile group h-full p-6 md:p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--bn-violet)/0.6)]">
                  <div className="relative w-12 h-12 rounded-xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                    <div className="absolute inset-0 rounded-xl bg-[hsl(var(--bn-violet)/0.4)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="relative w-6 h-6 text-[hsl(var(--bn-ink))]" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[hsl(var(--bn-ink))] text-lg leading-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <ScrollReveal>
            <div className="bn-tile bn-glow-violet p-8 md:p-10 h-full flex flex-col gap-4 group">
              <div className="flex items-center justify-between gap-4">
                <span className="bn-eyebrow">UNLIMITED DATA AT A GUARANTEED SPEED.</span>
                <img width={1920} height={1920}
                  src={cirIcon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_8px_24px_hsl(var(--bn-violet)/0.5)] -mt-2 -mr-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>
              <h3 className="font-display font-bold text-[hsl(var(--bn-ink))] text-2xl md:text-3xl leading-tight">
                Pick your speed and enjoy unlimited internet every month.
              </h3>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bn-tile p-8 md:p-10 h-full flex flex-col gap-4 group border-[hsl(var(--bn-red)/0.4)]">
              <div className="flex items-center justify-between gap-4">
                <span className="bn-eyebrow">FIXED DATA WITH UP TO 1000 MBPS SPEED</span>
                <img width={1920} height={1920}
                  src={volumeIcon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_8px_24px_hsl(var(--bn-violet)/0.5)] -mt-2 -mr-2 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                />
              </div>
              <h3 className="font-display font-bold text-[hsl(var(--bn-ink))] text-2xl md:text-3xl leading-tight">
                Choose a data package and browse at full speed.
              </h3>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <ScrollReveal className="lg:col-span-2">
            <div className="bn-tile p-8 md:p-10 h-full">
              <span className="bn-eyebrow mb-6 inline-block">What sets us apart</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-dm text-[hsl(var(--bn-ink))] text-[15px] leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--bn-violet-soft))] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[hsl(var(--bn-line)/0.5)]">
                <div className="font-display font-bold text-[hsl(var(--bn-ink))] text-2xl md:text-3xl">
                  500+ businesses
                </div>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm mt-1">
                  Trust BrainNET Fiber to keep them online since 1996!
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bn-tile p-8 md:p-10 h-full flex flex-col justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-[hsl(var(--bn-red)/0.25)] rounded-full blur-[80px] pointer-events-none" />
              <div className="relative">
                <span className="bn-eyebrow">Not sure which?</span>
                <h3 className="mt-4 font-display font-bold text-[hsl(var(--bn-ink))] text-2xl md:text-3xl leading-tight">
                  Home or Business internet? Let's figure it out together.
                </h3>
              </div>
              <button className="relative inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-display font-semibold text-base px-6 py-4 rounded-full shadow-[0_15px_40px_-10px_hsl(var(--bn-red)/0.7)] transition-all hover:translate-y-[-2px]">
                Consult Our Experts
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
