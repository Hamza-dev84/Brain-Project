import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import { Phone, Radio, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { VoiceServiceCard } from "@/components/internet/VoiceServiceCard";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { VoiceProcessSteps } from "@/components/internet/VoiceProcessSteps";
import { VoiceFeatures } from "@/components/internet/VoiceFeatures";
import { VoiceFAQ } from "@/components/internet/VoiceFAQ";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { AvailabilityCheckerModal } from "@/components/internet/AvailabilityCheckerModal";
import { Button } from "@/components/ui/button";
import AnimatedMesh from "@/components/internet/home/AnimatedMesh";
import SectionHeader from "@/components/internet/home/SectionHeader";
import FinalCTASection from "@/components/internet/home/FinalCTASection";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import { buildTelephonyJsonLd } from "@/components/internet/telephony/telephonySeo";
import { faqs } from "@/components/internet/VoiceFAQ";

const title = "VoIP Voice Plans Lahore | HD Call Quality | BrainNET";
const description =
  "Crystal clear VoIP voice solutions for homes and businesses. Unlimited calls, HD audio, IVR systems and 24/7 support across Pakistan.";

export const Route = createFileRoute("/services/internet/telephony")({
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
  component: VoicePlansPage,
});

const voicePackages = [
  {
    badge: "STARTER PACKAGE",
    title: "Essential Voice",
    features: ["HD Voice Quality", "Local & STD Calls", "Call Forwarding", "Voicemail Service", "Basic Support"],
    lineOptions: ["1 Line", "3 Lines", "5 Lines"],
    recommendedFor: ["Small Offices", "Startups", "Home Offices"],
  },
  {
    badge: "BUSINESS ESSENTIAL",
    title: "Professional Voice",
    features: [
      "HD Voice Quality",
      "Unlimited Local Calls",
      "International Minutes",
      "Auto Attendant",
      "Call Recording",
      "Priority Support",
    ],
    lineOptions: ["5 Lines", "10 Lines", "20 Lines", "50 Lines"],
    recommendedFor: ["SMEs", "Growing Teams", "Call Centers"],
  },
  {
    badge: "ENTERPRISE GRADE",
    title: "Advanced Voice Suite",
    features: [
      "Crystal Clear HD Audio",
      "Unlimited Calling",
      "IVR System",
      "Call Analytics",
      "CRM Integration",
      "Dedicated Support",
      "SLA Guarantee",
    ],
    lineOptions: ["50+ Lines", "100+ Lines", "Custom"],
    recommendedFor: ["Large Enterprises", "Contact Centers", "Multi-Branch"],
  },
];

const jsonLd = buildTelephonyJsonLd({
  path: "/services/internet/telephony",
  name: "VoIP Voice Plans Lahore",
  serviceType: "VoIP Voice Services",
  description,
  breadcrumbLabel: "Telephony",
  faqs,
});

function VoicePlansPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bn-home min-h-screen relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <div className="pt-24 max-w-screen-xl mx-auto px-5 relative z-10">
        <Breadcrumb />
      </div>

      <section id="main-content" className="relative pt-8 pb-20 md:pb-28">
        <AnimatedMesh />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <span className="bn-eyebrow mb-6 inline-flex">Voice Plans</span>
              <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight mt-6">
                <span className="bn-display">Crystal Clear.</span>
                <br />
                <span className="bn-display-accent">Voice solutions, reimagined.</span>
              </h1>
              <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                Premium telephony for homes and businesses — HD audio, unlimited calling, 24/7 support. Need SIP trunks
                or a cloud PBX?{" "}
                <Link
                  to="/services/internet/voip-providers-pakistan"
                  className="text-[hsl(var(--bn-violet-soft))] underline underline-offset-4"
                >
                  See our VoIP services in Pakistan
                </Link>
                .
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { Icon: Phone, label: "HD Voice Quality", glow: "bn-glow-violet" },
              { Icon: Radio, label: "Unlimited Calls", glow: "" },
              { Icon: Clock, label: "24/7 Support", glow: "bn-glow-red" },
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
            eyebrow="Voice plans"
            title={
              <>
                Choose your plan. <span className="bn-display-accent">Scale on demand.</span>
              </>
            }
            kicker="Scalable VoIP solutions designed for businesses of all sizes."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {voicePackages.map((pkg, index) => (
              <VoiceServiceCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <VoiceFeatures />
      <VoiceProcessSteps />
      <VoiceFAQ />

      <FinalCTASection />

      <Footer />

      <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
