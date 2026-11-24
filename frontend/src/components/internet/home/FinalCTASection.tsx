import React, { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/internet/animations/ScrollReveal';
import { AvailabilityCheckerModal } from '@/components/internet/AvailabilityCheckerModal';
import AnimatedMesh from './AnimatedMesh';
import ctaBg from '@/assets/internet/site/cta-night-lahore.webp';

const FinalCTASection: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative bn-home overflow-hidden py-24 md:py-32">
      <img width={1920} height={1071}
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--bn-bg-deep)/0.85)] via-[hsl(var(--bn-bg-deep)/0.75)] to-[hsl(var(--bn-bg-deep))]" />
      <AnimatedMesh />
      <div className="relative z-10 max-w-screen-xl mx-auto px-5">
        <ScrollReveal>
          <div className="bn-tile bn-glow-violet p-10 md:p-16 text-center flex flex-col items-center gap-8">
            <span className="bn-eyebrow">Ready when you are</span>
            <h2 className="font-display font-bold text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight">
              <span className="bn-display">Connect Lahore.</span>
              <br />
              <span className="bn-display-accent">At fiber speed.</span>
            </h2>
            <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg md:text-xl max-w-2xl">
              Check availability in your area and get connected with Lahore's leading fiber internet provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button
                size="lg"
                onClick={() => setOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white font-display font-semibold text-base md:text-lg px-8 py-6 rounded-full shadow-[0_20px_60px_-15px_hsl(var(--bn-red)/0.7)] hover:shadow-[0_25px_70px_-15px_hsl(var(--bn-red)/0.9)] transition-all"
              >
                Check Availability Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outlined"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=923276222888', '_blank', 'noopener,noreferrer')}
                className="border-2 border-white/30 bg-white/5 backdrop-blur text-white hover:bg-white/10 hover:border-white/50 font-display font-semibold text-base md:text-lg px-8 py-6 rounded-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to an Expert
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <AvailabilityCheckerModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default FinalCTASection;
