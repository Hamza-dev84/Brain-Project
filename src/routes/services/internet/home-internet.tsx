import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Zap, DollarSign, Wifi, MapPin, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PackageCarousel } from "@/components/internet/PackageCarousel";
import { AvailabilityCheckerModal } from "@/components/internet/AvailabilityCheckerModal";
import { PackageComparisonModal } from "@/components/internet/PackageComparisonModal";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { homePackages } from "@/data/internet/coverageAreas";
import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import AnimatedMesh from "@/components/internet/home/AnimatedMesh";
import SectionHeader from "@/components/internet/home/SectionHeader";
import FinalCTASection from "@/components/internet/home/FinalCTASection";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import PageMeta from "@/components/common/PageMeta";
import HomeInternetSchema from "@/pages/schemaFiles/internet-schema-files/HomeInternetSchema";

// const title = "Home Internet Services in Lahore | BrainNET Fiber";
// const description =
//   "Fast, reliable fiber optic home internet in Lahore with free installation and a 6-month speed boost. Check availability in your area.";

export const Route = createFileRoute("/services/internet/home-internet")({
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
  component: HomeInternetPage,
});

const highlights = [
  { Icon: Zap, title: "Faster Internet for 6 Months", desc: "Free speed upgrade included" },
  { Icon: DollarSign, title: "Free Installation", desc: "Save instantly on setup" },
  { Icon: Wifi, title: "Reliable Connectivity", desc: "Stable, high-performance network" },
  { Icon: MapPin, title: "Limited Availability", desc: "Offered in select areas only" },
];

function HomeInternetPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  const handlePackageSelect = (packageId: string) => {
    if (selectedPackages.includes(packageId)) {
      setSelectedPackages(selectedPackages.filter((id) => id !== packageId));
    } else if (selectedPackages.length < 3) {
      setSelectedPackages([...selectedPackages, packageId]);
    }
  };

  const selectedPackagesData = homePackages.filter((pkg) => selectedPackages.includes(pkg.id));

  return (
    <>
      <PageMeta
        title="Home Fiber Internet in Lahore | High-Speed WiFi Plans - BrainNET"
        description="Get fast and reliable home fiber internet in Lahore with free installation, speed boost offers, low latency, and affordable WiFi packages from BrainNET Fiber. Limited areas available."
        // ogImage="/favicons/brainnet_fiber_favicon.png"
      />

      <HomeInternetSchema />
      
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
                <span className="bn-eyebrow mb-6 inline-flex">Home Internet</span>
                <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight mt-6">
                  <span className="bn-display">Reliable Internet in Lahore.</span>
                  <br />
                  <span className="bn-display-accent">Perfect for your home.</span>
                </h1>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                  Experience faster speeds for 6 months, at no extra cost. Available only in select areas.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { Icon: Zap, label: "Speed Boost", glow: "bn-glow-violet" },
                { Icon: DollarSign, label: "Free Setup", glow: "" },
                { Icon: Wifi, label: "Fast & Reliable", glow: "bn-glow-red" },
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
              eyebrow="Why home users choose us"
              title={
                <>
                  Built for the way <span className="bn-display-accent">you live online.</span>
                </>
              }
              kicker="Powerful speeds that keep up with your lifestyle — streaming, gaming, working from home — with free installation and 6 months of boosted speed."
            />

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
              {highlights.map((h) => (
                <StaggerItem key={h.title}>
                  <div className="bn-tile p-8 h-full flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                      <h.Icon className="w-7 h-7 text-[hsl(var(--bn-violet-soft))]" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[hsl(var(--bn-ink))]">{h.title}</h3>
                    <p className="font-dm text-[hsl(var(--bn-ink-soft))]">{h.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="relative py-20 md:py-24">
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <SectionHeader
              eyebrow="Choose your plan"
              title={
                <>
                  Compare packages. <span className="bn-display-accent">Pick your perfect speed.</span>
                </>
              }
              kicker="Select 2–3 packages to compare side-by-side."
            />
            {selectedPackages.length >= 2 && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => setIsComparisonOpen(true)}
                  className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-5"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Compare {selectedPackages.length} Selected Packages
                </Button>
              </div>
            )}
          </div>
          <div className="mt-12">
            <PackageCarousel
              packages={homePackages}
              selectedPackages={selectedPackages}
              onPackageSelect={handlePackageSelect}
            />
          </div>
        </section>

        <FinalCTASection />

        <section className="py-8 px-5">
          <div className="max-w-screen-xl mx-auto text-center">
            <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))]">
              Offer available only in limited service areas. Terms and conditions apply.
            </p>
          </div>
        </section>

        <Footer />

        <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        <PackageComparisonModal
          open={isComparisonOpen}
          onOpenChange={setIsComparisonOpen}
          packages={selectedPackagesData}
          onSelectPackage={() => setIsModalOpen(true)}
        />
      </div>
    </>
  );
}
