import React from 'react';
import { ArrowRight, Code2, Sparkles, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBackground from '@/assets/software/hero-background.webp';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[700px] w-full flex items-center justify-center mt-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <img width={1440} height={471} loading="eager" decoding="async" fetchPriority="high"
        src={heroBackground}
        alt="Abstract digital network background representing advanced software development services in Pakistan by Brainsoft"
        className="absolute h-full w-full object-cover inset-0"
      />
      
      {/* Floating Decorative Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%]"
      >
        <Code2 className="w-12 h-12 text-brand-secondary/40" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-40 right-[15%]"
      >
        <Sparkles className="w-10 h-10 text-brand-primary/40" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-[20%]"
      >
        <Layers className="w-14 h-14 text-brand-secondary/30" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[25%]"
      >
        <Zap className="w-8 h-8 text-brand-secondary/50" />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-8 py-32 text-center text-white max-md:px-5 max-md:py-24 space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20"
        >
          <Sparkles className="w-4 h-4" />
          <span className="font-lato text-sm font-semibold text-white md:text-base">
            Enterprise-Grade AI Solutions
          </span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="max-md:max-w-full font-raleway font-extrabold text-display-lg max-md:text-display-sm text-white tracking-tight"
        >
          Delivering Scalable, Enterprise-Grade AI Software Development Services
          in Pakistan
        </motion.h1>
        
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="font-lato text-lead text-white max-w-3xl mx-auto"
        >
          World-Class Software Development Services in Pakistan at an Affordable Cost—30+ global
          projects with <span className="font-bold">24/7</span> delivery from
          teams in Pakistan & Globally.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => {
              const servicesSection = document.getElementById('services');
              servicesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-dark text-white flex items-center gap-3 justify-center px-8 py-4 rounded-xl hover:bg-brand-primary hover:shadow-glow transition-all duration-300 btn-text shadow-xl group"
          >
            <span>Explore more</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
