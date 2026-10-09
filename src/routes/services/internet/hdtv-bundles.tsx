import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Tv, CheckCircle, MessageCircle, ArrowRight, Smartphone, Monitor, Tablet } from "lucide-react";
import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { AvailabilityCheckerModal } from "@/components/internet/AvailabilityCheckerModal";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import tvChannelsImg from "@/assets/internet/tv-channels.webp";
import multiDeviceImg from "@/assets/internet/multi-device.webp";
import AnimatedMesh from "@/components/internet/home/AnimatedMesh";
import SectionHeader from "@/components/internet/home/SectionHeader";
import FinalCTASection from "@/components/internet/home/FinalCTASection";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import HDTVBundlesSchema from "@/pages/schemaFiles/internet-schema-files/HDTVBundlesSchema";
import PageMeta from "@/components/common/PageMeta";

const title = "HDTV Bundles Lahore | 200+ Channels | BrainTV";
const description =
  "Watch 200+ live HD channels on any device with BrainTV bundles from Rs. 399/month. Stream on mobile, tablet, TV and laptop.";

export const Route = createFileRoute("/services/internet/hdtv-bundles")({
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
  component: HDTVBundlesPage,
});

const bundles = [
  { title: "BASIC BUNDLE", price: "Rs. 399/-", features: ["HDTV", "2 Screens"], popular: false, glow: "" },
  {
    title: "PREMIUM BUNDLE",
    price: "Rs. 699/-",
    features: ["HDTV", "4 Screens"],
    popular: true,
    glow: "bn-glow-violet",
  },
  { title: "DELUXE BUNDLE", price: "Rs. 999/-", features: ["HDTV", "6 Screens"], popular: false, glow: "bn-glow-red" },
];

const terms = [
  "BrainTV is exclusively available for BrainNET Fiber customers only.",
  "BrainTV is accessible via BrainNET Fiber internet only.",
  "Available on Android devices: Android 9 for Mobile, Tablet & TV.",
  "Available on all HTML 5 web browsers.",
  "All prices are exclusive of applicable taxes.",
  "STB charges may apply in case of non-compatible TVs.",
  "STB (Set-up box) is a device required for connecting BrainTV App to your TV in case of non-compatibility. One STB per TV is required.",
  "STB is available on upfront payment",
];

function HDTVBundlesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PageMeta
        title="IPTV Services in Lahore | HD TV Streaming Bundles - BrainTV"
        description="Get IPTV services in Lahore with BrainTV HD streaming bundles featuring 200+ live channels, multi-screen support, and smooth viewing on TV, mobile, tablet, and web devices."
        // ogImage="/favicons/brainnet_fiber_favicon.png"
      />
      <HDTVBundlesSchema />
      <div className="bn-home min-h-screen relative overflow-x-hidden">
        <Header />

        <div className="pt-24 max-w-screen-xl mx-auto px-5 relative z-10">
          <Breadcrumb />
        </div>

        <section id="main-content" className="relative pt-8 pb-20 md:pb-28">
          <AnimatedMesh />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-12">
                <span className="bn-eyebrow mb-6 inline-flex">Premium streaming service</span>
                <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight mt-6">
                  <span className="bn-display">HDTV Bundles.</span>
                  <br />
                  <span className="bn-display-accent">Anywhere. Anytime. Any device.</span>
                </h1>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                  Watch your favourite channels on the network of your choice. 200+ live HD channels.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { Icon: Tv, label: "200+ HD Channels", glow: "bn-glow-violet" },
                { Icon: Smartphone, label: "Multi-Device", glow: "" },
                { Icon: CheckCircle, label: "Crystal Clear", glow: "bn-glow-red" },
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
                  onClick={() =>
                    window.open("https://api.whatsapp.com/send/?phone=923276222888", "_blank", "noopener,noreferrer")
                  }
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
              eyebrow="Pick your bundle"
              title={
                <>
                  Three bundles. <span className="bn-display-accent">One incredible experience.</span>
                </>
              }
            />
            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14">
              {bundles.map((bundle) => (
                <StaggerItem key={bundle.title}>
                  <div className={`bn-tile ${bundle.glow} p-8 h-full flex flex-col`}>
                    {bundle.popular && (
                      <div className="text-[hsl(var(--bn-red))] text-xs font-bold mb-4 text-center tracking-widest">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="flex justify-center mb-6">
                      <div className="w-28 h-28 rounded-full bg-[hsl(var(--bn-violet)/0.1)] border-2 border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                        <Tv className="w-12 h-12 text-[hsl(var(--bn-violet-soft))]" />
                      </div>
                    </div>
                    <h3 className="text-[hsl(var(--bn-violet-soft))] text-xs font-bold mb-2 text-center tracking-widest font-dm">
                      {bundle.title}
                    </h3>
                    <p className="font-display text-4xl font-bold text-[hsl(var(--bn-ink))] text-center mb-8">
                      {bundle.price}
                    </p>
                    <div className="space-y-3 mb-8 flex-1">
                      {bundle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[hsl(var(--bn-red))] flex-shrink-0" />
                          <span className="text-[hsl(var(--bn-ink-soft))] font-dm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-accent hover:bg-accent/90 text-white py-6 rounded-full font-display font-semibold transition-all duration-300 hover:scale-[1.02]"
                      aria-label={`Order ${bundle.title} HDTV bundle`}
                    >
                      Order Now
                    </Button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal>
              <div className="bn-tile p-8 md:p-12 max-w-4xl mx-auto text-center mt-14">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[hsl(var(--bn-ink))]">
                  Or to subscribe call us at{" "}
                  <a href="tel:042111222888" className="bn-display-accent hover:opacity-80 transition-opacity">
                    (042) 111 222 888
                  </a>
                </h2>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative py-20 md:py-28">
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <ScrollReveal direction="right">
                <span className="bn-eyebrow mb-6 inline-flex">Channels</span>
                <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.05] mt-6">
                  <span className="bn-display">200+</span> <span className="bn-display-accent">live channels.</span>
                </h2>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg leading-relaxed mt-6">
                  Dive into 200+ high definition channels with BrainTV — top news, captivating shows, thrilling sports.
                  Your entertainment universe is completely unlocked.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left">
                <div className="bn-tile overflow-hidden">
                  <img width={844} height={567} decoding="async"
                    src={tvChannelsImg}
                    alt="Grid showcasing over 200 live TV channels available"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-28">
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <ScrollReveal direction="right" className="order-2 md:order-1">
                <div className="bn-tile overflow-hidden">
                  <img width={1500} height={1000} decoding="async"
                    src={multiDeviceImg}
                    alt="Watch HDTV on smart TV, mobile phone, tablet and laptop devices"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left" className="order-1 md:order-2">
                <span className="bn-eyebrow mb-6 inline-flex">Any device</span>
                <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.05] mt-6">
                  <span className="bn-display">Choose any device.</span>{" "}
                  <span className="bn-display-accent">Stream anywhere.</span>
                </h2>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg leading-relaxed mt-6">
                  Your device, your choice. BrainTV streams seamlessly to your smart TV, phone, tablet, laptop, or more.
                </p>
                <div className="flex gap-4 mt-6">
                  <Tv className="w-7 h-7 text-[hsl(var(--bn-violet-soft))]" />
                  <Smartphone className="w-7 h-7 text-[hsl(var(--bn-violet-soft))]" />
                  <Tablet className="w-7 h-7 text-[hsl(var(--bn-violet-soft))]" />
                  <Monitor className="w-7 h-7 text-[hsl(var(--bn-violet-soft))]" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-5">
            <SectionHeader
              eyebrow="Fine print"
              title={
                <>
                  <span className="bn-display">Terms &amp;</span> <span className="bn-display-accent">conditions.</span>
                </>
              }
            />
            <ScrollReveal>
              <div className="bn-tile p-8 md:p-12 mt-14">
                <div className="space-y-4">
                  {terms.map((term, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-[hsl(var(--bn-red))] flex-shrink-0 mt-1" />
                      <p className="text-[hsl(var(--bn-ink-soft))] font-dm leading-relaxed">{term}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <FinalCTASection />

        <Footer />

        <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </>
  );
}
