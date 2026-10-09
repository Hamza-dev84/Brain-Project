
import React, { useState, useEffect } from 'react';
import { Zap, Shield, Clock, MessageCircle, ArrowRight, Wifi, Activity, Building2, Briefcase, Headphones, Tv, Phone, Gift, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AvailabilityCheckerModal } from './AvailabilityCheckerModal';
import AnimatedMesh from './home/AnimatedMesh';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import heroFiber from '@/assets/internet/site/hero-fiber-strands.webp';
import heroBusiness from '@/assets/internet/site/hero-business-lahore.webp';
import heroTriple from '@/assets/internet/site/hero-triple-play.webp';

const SLIDE_IMAGES = [
  { src: heroFiber, alt: 'Glowing fiber optic strands' },
  { src: heroBusiness, alt: 'Isometric Lahore skyline with fiber light trails' },
  { src: heroTriple, alt: 'Floating TV, router and phone devices' },
];

const fadeUp = {
  hidden: { opacity: 1, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

const openWhatsApp = () =>
  window.open('https://api.whatsapp.com/send/?phone=923276222888', '_blank', 'noopener,noreferrer');

type CtaProps = { onPrimary: () => void; primaryLabel?: string };

const PrimaryCtas = ({ onPrimary, primaryLabel = 'Check Availability Now' }: CtaProps) => (
  <div className="flex flex-col sm:flex-row gap-3">
    <Button
      size="lg"
      onClick={onPrimary}
      className="bg-accent hover:bg-accent/90 text-white font-display font-semibold text-base md:text-lg px-7 py-6 rounded-full shadow-[0_20px_50px_-15px_hsl(var(--bn-red)/0.7)] transition-all group"
      aria-label={primaryLabel}
    >
      {primaryLabel}
      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
    </Button>
    <Button
      size="lg"
      variant="outlined"
      onClick={openWhatsApp}
      className="border-2 border-white/30 bg-white/5 backdrop-blur text-white hover:bg-white/10 hover:border-white/50 font-display font-semibold text-base md:text-lg px-7 py-6 rounded-full"
      aria-label="Talk to an expert on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Talk to an Expert
    </Button>
  </div>
);

const Slide1 = ({ onCheck, speedCount }: { onCheck: () => void; speedCount: number }) => (
  <>
    <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="flex justify-center mb-8">
      <span className="bn-eyebrow">
        <Wifi className="w-3.5 h-3.5" />
        FIBER INTERNET · LAHORE · SINCE 1996
      </span>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(140px,auto)]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="md:col-span-3 lg:col-span-2 bn-tile bn-glow-violet p-8 md:p-12 lg:row-span-2 flex flex-col justify-between gap-8"
      >
        <div>
          <h1 className="font-display font-bold text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
            <span className="bn-display">The Leading Fiber</span>
            <br />
            <span className="bn-display">Internet </span>
            <span className="bn-display-accent">Provider in Lahore</span>
          </h1>
          <p className="mt-6 font-dm text-[hsl(var(--bn-ink-soft))] text-base md:text-lg max-w-xl">
            Fast, stable, and high-performance fiber internet for homes and businesses across Lahore. We are Pakistan's Pioneer Fiber Internet Provider.
          </p>
        </div>
        <PrimaryCtas onPrimary={onCheck} />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="bn-tile p-6 md:p-7 flex flex-col justify-between min-h-[180px]"
      >
        <div className="flex items-center justify-between">
          <span className="bn-eyebrow !py-1 !px-2.5 !text-[10px]">Live</span>
          <Zap className="w-5 h-5 text-[hsl(var(--bn-red))]" />
        </div>
        <div>
          <div className="font-display font-bold text-5xl md:text-6xl bn-display-accent tabular-nums">{speedCount}</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm mt-1">Plans from 8 Mbps to 1000 Mbps.</div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="bn-tile p-6 md:p-7 flex flex-col justify-between min-h-[180px]"
      >
        <div className="flex items-center justify-between">
          <span className="bn-eyebrow !py-1 !px-2.5 !text-[10px]">SLA</span>
          <Shield className="w-5 h-5 text-[hsl(var(--bn-violet-soft))]" />
        </div>
        <div>
          <div className="font-display font-bold text-5xl md:text-6xl bn-display">99.9%</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm mt-1">Network uptime guarantee</div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="bn-tile p-6 md:p-7 flex items-center gap-4 min-h-[120px] md:col-span-2 lg:col-span-1"
      >
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-[hsl(var(--bn-red)/0.4)] rounded-full blur-xl" />
          <div className="relative w-14 h-14 rounded-2xl bg-[hsl(var(--bn-red)/0.15)] border border-[hsl(var(--bn-red)/0.4)] flex items-center justify-center">
            <Clock className="w-6 h-6 text-[hsl(var(--bn-red))]" />
          </div>
        </div>
        <div>
          <div className="font-display font-bold text-2xl text-white">24/7 Support</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm">Real engineers, available 24/7/365.</div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={5}
        className="bn-tile p-6 md:p-7 flex items-center gap-4 min-h-[120px]"
      >
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-[hsl(var(--bn-violet)/0.5)] rounded-full blur-xl" />
          <div className="relative w-14 h-14 rounded-2xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
            <Activity className="w-6 h-6 text-[hsl(var(--bn-violet-soft))]" />
          </div>
        </div>
        <div>
          <div className="font-display font-bold text-2xl text-white">10,000+</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm">Connected homes & businesses</div>
        </div>
      </motion.div>
    </div>
  </>
);

const Slide2 = ({ onCheck }: { onCheck: () => void }) => (
  <>
    <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="flex justify-center mb-8">
      <span className="bn-eyebrow">
        <Briefcase className="w-3.5 h-3.5" />
        BUSINESS FIBER · ENTERPRISE-GRADE · DEDICATED
      </span>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(140px,auto)]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="md:col-span-3 lg:col-span-2 bn-tile bn-glow-violet p-8 md:p-12 lg:row-span-2 flex flex-col justify-between gap-8"
      >
        <div>
          <h1 className="font-display font-bold text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
            <span className="bn-display">Dedicated Fiber for </span>
            <span className="bn-display-accent">Growing Businesses</span>
          </h1>
          <p className="mt-6 font-dm text-[hsl(var(--bn-ink-soft))] text-base md:text-lg max-w-xl">
            Symmetric speeds, dedicated bandwidth, and an enterprise SLA built for offices, ISPs, and mission-critical workloads across Lahore.
          </p>
        </div>
        <PrimaryCtas onPrimary={onCheck} primaryLabel="Get a Business Quote" />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="bn-tile p-6 md:p-7 flex flex-col justify-between min-h-[180px]"
      >
        <div className="flex items-center justify-between">
          <span className="bn-eyebrow !py-1 !px-2.5 !text-[10px]">Dedicated</span>
          <Building2 className="w-5 h-5 text-[hsl(var(--bn-red))]" />
        </div>
        <div>
          <div className="font-display font-bold text-5xl md:text-6xl bn-display-accent tabular-nums">1:1</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm mt-1">Contention ratio on dedicated plans</div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="bn-tile p-6 md:p-7 flex flex-col justify-between min-h-[180px]"
      >
        <div className="flex items-center justify-between">
          <span className="bn-eyebrow !py-1 !px-2.5 !text-[10px]">Upload</span>
          <Zap className="w-5 h-5 text-[hsl(var(--bn-violet-soft))]" />
        </div>
        <div>
          <div className="font-display font-bold text-5xl md:text-6xl bn-display">Symmetric</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm mt-1">Equal up & down speeds</div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="bn-tile p-6 md:p-7 flex items-center gap-4 min-h-[120px] md:col-span-2 lg:col-span-1"
      >
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-[hsl(var(--bn-red)/0.4)] rounded-full blur-xl" />
          <div className="relative w-14 h-14 rounded-2xl bg-[hsl(var(--bn-red)/0.15)] border border-[hsl(var(--bn-red)/0.4)] flex items-center justify-center">
            <Headphones className="w-6 h-6 text-[hsl(var(--bn-red))]" />
          </div>
        </div>
        <div>
          <div className="font-display font-bold text-2xl text-white">Priority NOC</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm">24/7 priority support line</div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={5}
        className="bn-tile p-6 md:p-7 flex items-center gap-4 min-h-[120px]"
      >
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-[hsl(var(--bn-violet)/0.5)] rounded-full blur-xl" />
          <div className="relative w-14 h-14 rounded-2xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
            <Shield className="w-6 h-6 text-[hsl(var(--bn-violet-soft))]" />
          </div>
        </div>
        <div>
          <div className="font-display font-bold text-2xl text-white">Static IP</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm">Free with every business plan</div>
        </div>
      </motion.div>
    </div>
  </>
);

const Slide3 = ({ onCheck }: { onCheck: () => void }) => (
  <>
    <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="flex justify-center mb-8">
      <span className="bn-eyebrow">
        <Gift className="w-3.5 h-3.5" />
        TRIPLE PLAY · INTERNET · TV · VOICE
      </span>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(140px,auto)]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="md:col-span-3 lg:col-span-2 bn-tile bn-glow-violet p-8 md:p-12 lg:row-span-2 flex flex-col justify-between gap-8"
      >
        <div>
          <h1 className="font-display font-bold text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
            <span className="bn-display">Bundle Internet, </span>
            <span className="bn-display-accent">TV & Voice</span>
          </h1>
          <p className="mt-6 font-dm text-[hsl(var(--bn-ink-soft))] text-base md:text-lg max-w-xl">
            One bill, one provider, one home of entertainment. Save more when you combine high-speed fiber with HD TV and crystal-clear voice.
          </p>
        </div>
        <PrimaryCtas onPrimary={onCheck} primaryLabel="Explore Bundles" />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="bn-tile p-6 md:p-7 flex flex-col justify-between min-h-[180px]"
      >
        <div className="flex items-center justify-between">
          <span className="bn-eyebrow !py-1 !px-2.5 !text-[10px]">HD TV</span>
          <Tv className="w-5 h-5 text-[hsl(var(--bn-red))]" />
        </div>
        <div>
          <div className="font-display font-bold text-5xl md:text-6xl bn-display-accent tabular-nums">200+</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm mt-1">HD channels at your fingertips</div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="bn-tile p-6 md:p-7 flex flex-col justify-between min-h-[180px]"
      >
        <div className="flex items-center justify-between">
          <span className="bn-eyebrow !py-1 !px-2.5 !text-[10px]">Save</span>
          <Gift className="w-5 h-5 text-[hsl(var(--bn-violet-soft))]" />
        </div>
        <div>
          <div className="font-display font-bold text-5xl md:text-6xl bn-display">30%</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm mt-1">Off when you bundle services</div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="bn-tile p-6 md:p-7 flex items-center gap-4 min-h-[120px] md:col-span-2 lg:col-span-1"
      >
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-[hsl(var(--bn-red)/0.4)] rounded-full blur-xl" />
          <div className="relative w-14 h-14 rounded-2xl bg-[hsl(var(--bn-red)/0.15)] border border-[hsl(var(--bn-red)/0.4)] flex items-center justify-center">
            <Phone className="w-6 h-6 text-[hsl(var(--bn-red))]" />
          </div>
        </div>
        <div>
          <div className="font-display font-bold text-2xl text-white">Crystal Voice</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm">HD voice with unlimited calls</div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={5}
        className="bn-tile p-6 md:p-7 flex items-center gap-4 min-h-[120px]"
      >
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-[hsl(var(--bn-violet)/0.5)] rounded-full blur-xl" />
          <div className="relative w-14 h-14 rounded-2xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
            <Wifi className="w-6 h-6 text-[hsl(var(--bn-violet-soft))]" />
          </div>
        </div>
        <div>
          <div className="font-display font-bold text-2xl text-white">One Bill</div>
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm">Internet, TV & Voice unified</div>
        </div>
      </motion.div>
    </div>
  </>
);

const SLIDE_LABELS = ['Fiber Internet', 'Business Fiber', 'Triple Play Bundles'];

const HeroSection = () => {
  const [speedCount, setSpeedCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeedCount((prev) => (prev >= 1000 ? 0 : prev + 10));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;
    const id = setInterval(() => api.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [api, isPaused]);

  const openCheck = () => setIsModalOpen(true);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!api) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      api.scrollPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      api.scrollNext();
    }
  };

  return (
    <section
      id="main-content"
      className="relative bn-home overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      aria-roledescription="carousel"
      aria-label="Featured services"
    >
      <AnimatedMesh />

      {/* Per-slide cinematic backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {SLIDE_IMAGES.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt=""
            loading="eager"
            decoding="async"
            className={`absolute right-0 top-0 h-full w-full md:w-[55%] object-cover transition-opacity duration-1000 ease-out ${current === i ? 'opacity-60 md:opacity-70' : 'opacity-0'}`}
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 80% 50%, black 35%, transparent 75%)',
              maskImage: 'radial-gradient(ellipse 70% 80% at 80% 50%, black 35%, transparent 75%)',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--bn-bg-deep))] via-[hsl(var(--bn-bg-deep)/0.85)] to-transparent" />
      </div>

      <div className="relative z-10">
        <Carousel setApi={setApi} opts={{ loop: true, align: 'start', duration: 30 }} className="w-full">
          <CarouselContent className="ml-0">
            <CarouselItem className="pl-0">
              <div className="max-w-screen-xl mx-auto px-5 w-full">
                <Slide1 onCheck={openCheck} speedCount={speedCount} />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0">
              <div className="max-w-screen-xl mx-auto px-5 w-full">
                <Slide2 onCheck={openCheck} />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0">
              <div className="max-w-screen-xl mx-auto px-5 w-full">
                <Slide3 onCheck={openCheck} />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        {/* Arrows */}
        <div className="max-w-screen-xl mx-auto px-5 w-full pointer-events-none">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous slide"
            className="pointer-events-auto hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 backdrop-blur items-center justify-center text-white transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Next slide"
            className="pointer-events-auto hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 backdrop-blur items-center justify-center text-white transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div role="tablist" aria-label="Hero slides" className="mt-10 flex justify-center items-center gap-3">
          {SLIDE_LABELS.map((label, i) => {
            const active = current === i;
            return (
              <button
                key={label}
                role="tab"
                aria-selected={active}
                aria-label={`Go to slide ${i + 1}: ${label}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${active
                    ? 'w-8 bg-accent shadow-[0_0_20px_-2px_hsl(var(--bn-red)/0.8)]'
                    : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
              />
            );
          })}
        </div>
      </div>

      <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default HeroSection;