import { memo } from 'react';
import { Trophy, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { CountUp } from '@/components/ui/count-up';
import hblLogo from '@/assets/clients/hbl.png';
import dominosLogo from '@/assets/clients/dominos.png';
import ffgLogo from '@/assets/clients/ffg.png';
import lseLogo from '@/assets/clients/lse.png';
import lgsLogo from '@/assets/clients/lgs.webp';
import nextbridgeLogo from '@/assets/clients/nextbridge.png';
import sazgarLogo from '@/assets/clients/sazgar.png';
import colabsLogo from '@/assets/clients/colabs.png';
import izharLogo from '@/assets/clients/izhar-construction.png';
import lahoreStockLogo from '@/assets/clients/lahore-stock-exchange.png';

const CLIENT_LOGOS = [
  { src: hblLogo, alt: 'HBL - Habib Bank Limited', name: 'HBL' },
  { src: dominosLogo, alt: "Domino's Pizza Pakistan", name: "Domino's" },
  { src: ffgLogo, alt: 'Fauji Fertilizer Group', name: 'FFG' },
  { src: lseLogo, alt: 'Lahore School of Economics', name: 'LSE' },
  { src: lgsLogo, alt: 'Lahore Grammar School', name: 'LGS' },
  { src: nextbridgeLogo, alt: 'NextBridge - Technology Solutions', name: 'NextBridge' },
  { src: sazgarLogo, alt: 'Sazgar Engineering Works', name: 'Sazgar' },
  { src: colabsLogo, alt: 'COLABS Coworking Space', name: 'COLABS' },
  { src: izharLogo, alt: 'Izhar Construction', name: 'Izhar' },
  { src: lahoreStockLogo, alt: 'Lahore Stock Exchange', name: 'LSX' },
];

export const TrustedClients = memo(() => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-light via-background to-neutral-light overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
      <motion.div
        initial={{ opacity: 1, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12"
      >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Trophy className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Pakistan's Leading Enterprises
          </h2>
          <p className="text-lg text-neutral-medium max-w-3xl mx-auto">
            From Fortune 500 companies to innovative startups, businesses across Pakistan rely on our 40+ years of IT excellence
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              'IT infrastructure setup and management',
              'Business internet services in Lahore',
              'Managed IT support for businesses',
              'Cloud and software services',
              'Enterprise communication systems',
            ].map((offering) => (
              <span
                key={offering}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-card border border-border text-sm text-foreground"
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {offering}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Sliding Logo Carousel */}
        <div className="relative">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-neutral-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-neutral-light to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden py-8 group/carousel">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: [0, -1800],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              whileHover={{
                animationPlayState: "paused",
              }}
            >
              {/* First set of logos */}
              {CLIENT_LOGOS.map((logo, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 group"
                  initial={{ opacity: 1, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <motion.div 
                    className="w-40 h-24 md:w-48 md:h-28 bg-card rounded-2xl border border-border flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg hover:bg-neutral-100"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      decoding="async"
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {CLIENT_LOGOS.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="w-40 h-24 md:w-48 md:h-28 bg-card rounded-2xl border border-border flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-neutral-100">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      decoding="async"
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 1, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              <CountUp end={10000} suffix="+" duration={2500} />
            </div>
            <div className="text-sm md:text-base text-neutral-medium">Trusted Clients</div>
          </div>
          <div className="hidden md:block w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              <CountUp end={12} suffix="+" duration={2000} />
            </div>
            <div className="text-sm md:text-base text-neutral-medium">Industries Served</div>
          </div>
          <div className="hidden md:block w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              <CountUp end={99.9} decimals={1} suffix="%" duration={2000} />
            </div>
            <div className="text-sm md:text-base text-neutral-medium">Service Uptime SLA</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

TrustedClients.displayName = 'TrustedClients';