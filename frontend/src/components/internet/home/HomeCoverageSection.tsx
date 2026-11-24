import React, { useState } from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { coverageAreas } from '@/data/internet/coverageAreas';
import SectionHeader from '@/components/internet/home/SectionHeader';
import { StaggerContainer, StaggerItem } from '@/components/internet/animations/StaggerContainer';
import { AvailabilityCheckerModal } from '@/components/internet/AvailabilityCheckerModal';
import coverageMap from '@/assets/internet/site/coverage-map-lahore.webp';

const HomeCoverageSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const areas = coverageAreas;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bn-home border-t border-[hsl(var(--bn-line)/0.4)]">
      <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Lahore"
          title={<><span className="bn-display">Where we deliver</span> <span className="bn-display-accent">fiber today.</span></>}
          kicker="BrainNET Fiber provides internet services across major residential and commercial areas of Lahore, including:"
        />

        <div className="mt-12 relative rounded-3xl overflow-hidden border border-[hsl(var(--bn-line)/0.5)] bg-[hsl(var(--bn-bg-deep))]">
          <img width={1920} height={1433}
            src={coverageMap}
            alt="Stylized map of Lahore showing BrainNET fiber coverage nodes"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover aspect-[16/9] md:aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bn-bg-deep))] via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 bn-eyebrow">
            <MapPin className="w-3.5 h-3.5" /> Live coverage across Lahore
          </div>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {areas.map((area) => (
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
                    <p className="text-sm text-[hsl(var(--bn-ink-soft))] mb-2 font-dm">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {area.suburbs.slice(0, 3).map((suburb, idx) => (
                        <span key={idx} className="text-xs bg-[hsl(var(--bn-violet)/0.15)] text-[hsl(var(--bn-violet-soft))] px-3 py-1 rounded-full border border-[hsl(var(--bn-violet)/0.3)]">
                          {suburb}
                        </span>
                      ))}
                      {area.suburbs.length > 3 && (
                        <span className="text-xs text-[hsl(var(--bn-ink-soft))] px-2 py-1">
                          +{area.suburbs.length - 3} more
                        </span>
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
      </div>
      <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default HomeCoverageSection;
