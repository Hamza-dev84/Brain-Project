import React, { useState, useMemo, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useInView } from "framer-motion";
import { MapPin, Search, CheckCircle2, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { coverageAreas } from "@/data/internet/coverageAreas";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { AvailabilityCheckerModal } from "@/components/internet/AvailabilityCheckerModal";
import AnimatedMesh from "@/components/internet/home/AnimatedMesh";
import SectionHeader from "@/components/internet/home/SectionHeader";
import FinalCTASection from "@/components/internet/home/FinalCTASection";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import TimelineStrip from "@/components/internet/coverage/TimelineStrip";
import coverageMap from "@/assets/internet/site/coverage-map-lahore.webp";
import PageMeta from "@/components/common/PageMeta";
import CoverageAreasSchema from "@/pages/schemaFiles/internet-schema-files/CoverageAreasSchema";

const title = "Fiber Internet Coverage Areas in Lahore | BrainNET";
const description =
  "Check if BrainNET fiber optic internet is available in your area. A 100% fiber network covering 50+ areas and 150+ suburbs across Lahore.";

export const Route = createFileRoute("/services/internet/coverage-area")({
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
  component: CoverageAreasPage,
});

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || value <= 0) return;
    let start = 0;
    const incrementTime = (duration * 1000) / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

function CoverageAreasPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredAreas = useMemo(() => {
    if (!searchQuery.trim()) return coverageAreas.map((area) => ({ ...area, matchedSuburbs: [] as string[] }));
    const query = searchQuery.toLowerCase();
    return coverageAreas
      .map((area) => {
        const nameMatch = area.name.toLowerCase().includes(query);
        const matchedSuburbs = area.suburbs?.filter((suburb) => suburb.toLowerCase().includes(query)) || [];
        return { ...area, matchedSuburbs, isMatch: nameMatch || matchedSuburbs.length > 0 };
      })
      .filter((area) => area.isMatch);
  }, [searchQuery]);

  const totalAreas = coverageAreas.length;
  const totalSuburbs = coverageAreas.reduce((acc, area) => acc + (area.suburbs?.length || 0), 0);

  return (
    <>
      <PageMeta
        title="Fiber Internet Coverage Areas in Lahore | BrainNET Fiber"
        description="Check BrainNET Fiber internet coverage areas in Lahore including Gulberg, Johar Town, Model Town, Garden Town, Allama Iqbal Town, and more for high-speed fiber connectivity."
      // ogImage="/favicons/brainnet_fiber_favicon.png"
      />
      <CoverageAreasSchema />
      <div className="bn-home min-h-screen relative overflow-x-hidden">
        <Header />

        <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb />
        </div>

        <section id="main-content" className="relative pt-8 pb-20 md:pb-28 overflow-hidden">
          <AnimatedMesh />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-10">
                <span className="bn-eyebrow mb-6 inline-flex">Coverage</span>
                <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight mt-6">
                  <span className="bn-display">Internet Coverage Areas in Lahore.</span>
                  <br />
                  <span className="bn-display-accent">100% Fiber Optic Network.</span>
                </h1>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                  Explore our fiber footprint across Lahore — search for your area or suburb.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="max-w-2xl mx-auto">
                <div className="bn-tile p-2 flex items-center gap-2 rounded-full">
                  <Search className="ml-4 w-5 h-5 text-[hsl(var(--bn-ink-soft))] flex-shrink-0" />
                  <Input
                    type="text"
                    placeholder="Search for your area or suburb..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search coverage areas"
                    className="flex-1 bg-transparent border-none text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] text-base md:text-lg focus-visible:ring-0 px-2 py-5"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex justify-center mt-8">
                <Button
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-accent hover:bg-accent/90 text-white font-display font-semibold text-base md:text-lg px-8 py-6 rounded-full shadow-[0_20px_60px_-15px_hsl(var(--bn-red)/0.7)]"
                >
                  Check Availability
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-14">
              {[
                { num: totalAreas, suffix: "+", label: "Major Areas Covered", glow: "bn-glow-violet" },
                { num: totalSuburbs, suffix: "+", label: "Suburbs & Localities", glow: "" },
                { num: 100, suffix: "%", label: "Fiber Optic Network", glow: "bn-glow-red" },
              ].map((s) => (
                <StaggerItem key={s.label}>
                  <div className={`bn-tile overflow-hidden relative ${s.glow} p-8 text-center h-full flex flex-col gap-2`}>
                    <div className="font-display font-bold text-5xl bn-display-accent flex items-baseline justify-center">
                      <Counter value={s.num} />
                      <span className="text-3xl ml-0.5">{s.suffix}</span>
                    </div>
                    <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-base">{s.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <TimelineStrip />

        <section className="relative py-20 bg-[hsl(var(--bn-bg-deep))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bn-tile overflow-hidden border-[hsl(var(--bn-line)/0.5)] p-0">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-8 relative aspect-video lg:aspect-auto min-h-[400px]">
                  <img width={1920} height={1433} decoding="async"
                    src={coverageMap}
                    alt="BrainNET fiber coverage map of Lahore"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-center bg-[hsl(var(--bn-bg))] relative">
                  <div className="bn-eyebrow mb-6">Live Network</div>
                  <h2 className="font-display font-bold text-3xl mb-6 bn-display">
                    Explore our <span className="bn-display-accent">Coverage Map.</span>
                  </h2>
                  <p className="font-dm text-[hsl(var(--bn-ink-soft))] mb-8">
                    Visualize our ultra-fast fiber footprint. We are actively expanding to new blocks and phases every
                    week.
                  </p>
                  <Button variant="outlined" className="w-fit rounded-full border-2 text-[hsl(var(--bn-ink-soft))]" onClick={() => setIsModalOpen(true)}>
                    Check My Street
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Lahore"
              title={
                <>
                  <span className="bn-display">Where we deliver</span> <span className="bn-display-accent">fiber today.</span>
                </>
              }
              kicker="BrainNET Fiber provides internet services across major residential and commercial areas of Lahore, including:"
            />

            {filteredAreas.length > 0 ? (
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                {filteredAreas.map((area) => (
                  <StaggerItem key={area.id}>
                    <div className="bn-tile p-6 h-full flex flex-col">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-[hsl(var(--bn-violet-soft))]" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg text-[hsl(var(--bn-ink))]">{area.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-[hsl(var(--bn-ink-soft))] mt-1 font-dm">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                            <span>Available</span>
                          </div>
                        </div>
                      </div>

                      {area.suburbs && area.suburbs.length > 0 && (
                        <div className="mb-4 flex-1">
                          <p className="text-sm text-[hsl(var(--bn-ink-soft))] mb-2 font-dm">
                            {area.matchedSuburbs && area.matchedSuburbs.length > 0
                              ? `Matched suburbs (${area.matchedSuburbs.length}):`
                              : "Includes:"}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {searchQuery && area.matchedSuburbs && area.matchedSuburbs.length > 0 ? (
                              <>
                                {area.matchedSuburbs.slice(0, 3).map((suburb, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs bg-[hsl(var(--bn-red)/0.18)] text-[hsl(var(--bn-red))] px-3 py-1 rounded-full font-semibold border border-[hsl(var(--bn-red)/0.4)]"
                                  >
                                    {suburb}
                                  </span>
                                ))}
                                {area.matchedSuburbs.length > 3 && (
                                  <span className="text-xs text-[hsl(var(--bn-red))] px-2 py-1 font-semibold">
                                    +{area.matchedSuburbs.length - 3} more matches
                                  </span>
                                )}
                              </>
                            ) : (
                              <>
                                {area.suburbs.slice(0, 3).map((suburb, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs bg-[hsl(var(--bn-violet)/0.15)] text-[hsl(var(--bn-violet-soft))] px-3 py-1 rounded-full border border-[hsl(var(--bn-violet)/0.3)]"
                                  >
                                    {suburb}
                                  </span>
                                ))}
                                {area.suburbs.length > 3 && (
                                  <span className="text-xs text-[hsl(var(--bn-ink-soft))] px-2 py-1">
                                    +{area.suburbs.length - 3} more
                                  </span>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      <Button
                        variant="outlined"
                        className="w-full border-2 border-white/20 bg-white/5 text-white hover:bg-accent hover:border-accent rounded-full"
                        onClick={() => setIsModalOpen(true)}
                        aria-label={`Check availability in ${area.name}`}
                      >
                        Check Availability
                      </Button>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <div className="text-center py-20">
                <h3 className="font-display text-xl font-bold text-[hsl(var(--bn-ink))] mb-2">No areas found</h3>
                <p className="text-[hsl(var(--bn-ink-soft))] mb-6 font-dm">
                  We couldn't find any areas matching "{searchQuery}"
                </p>
                <Button
                  variant="outlined"
                  className="border-2 border-white/20 bg-white/5 text-white hover:bg-accent hover:border-accent rounded-full px-6 py-3"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="relative py-20">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="bn-tile bn-glow-violet p-10 md:p-14">
                <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] mb-4">
                  <span className="bn-display">Don't see</span> <span className="bn-display-accent">your area?</span>
                </h2>
                <p className="text-[hsl(var(--bn-ink-soft))] font-dm text-lg mb-8 max-w-2xl mx-auto">
                  We're constantly expanding our network.
                  <a
                    href="/services/internet/contact-us"
                    className="
    text-[#FF3333]
    hover:text-[#FF6666]
    active:text-[#CC0000]
    transition-colors
  "
                  >
                    {" "}
                    Contact us{" "}
                  </a>
                  to check if we can serve your location.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:042111222888">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-white gap-2 rounded-full px-8 py-6 font-display font-semibold shadow-[0_20px_60px_-15px_hsl(var(--bn-red)/0.7)]"
                    >
                      <Phone className="w-5 h-5" />
                      (042) 111 222 888
                    </Button>
                  </a>
                  <a href="https://api.whatsapp.com/send/?phone=923276222888" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outlined"
                      className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50 gap-2 rounded-full px-8 py-6 font-display font-semibold"
                    >
                      <Mail className="w-5 h-5" />
                      WhatsApp Us
                    </Button>
                  </a>
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
