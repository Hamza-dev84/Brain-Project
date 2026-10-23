import React from 'react';
import { Briefcase, Award } from 'lucide-react';
import { ScrollReveal } from './animations/ScrollReveal';
import { motion } from 'framer-motion';
import cumulusLogo from '@/assets/software/portfolio/cumulus-logo.webp';
import cumulusIconBadge from '@/assets/software/portfolio/cumulus-icon-badge.webp';
import cumulusShowcase from '@/assets/software/portfolio/cumulus-showcase.webp';
import monitorIcon from '@/assets/software/portfolio/monitor-icon.png';
import videoIcon from '@/assets/software/portfolio/video-icon.png';
import databaseIcon from '@/assets/software/portfolio/database-icon.png';

const PortfolioSection: React.FC = () => {
  const achievements = [
    {
      icon: monitorIcon,
      title: "Improved User Journey"
    },
    {
      icon: videoIcon,
      title: "Seamless Video Experience"
    },
    {
      icon: databaseIcon,
      title: "Revamped Platform Architecture"
    },
  ];

  return (
    <section className="w-full mt-[100px] max-md:max-w-full max-md:mt-10 relative overflow-hidden">
      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[15%] hidden lg:block"
      >
        <Briefcase
          className="text-brand-secondary/20"
          size={80}
          strokeWidth={1.5}
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-40 left-[10%] hidden lg:block"
      >
        <Award
          className="text-brand-secondary/20"
          size={70}
          strokeWidth={1.5}
        />
      </motion.div>

      <div className="flex flex-col px-[60px] max-md:px-5 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <ScrollReveal animationType="fade-up" className="text-center mb-12">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            Our Portfolio
          </div>
          <h2 className="font-raleway text-4xl md:text-5xl lg:text-6xl font-bold">
            Don't Take Our Word For It
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              See Our Work!
            </span>
          </h2>
        </ScrollReveal>

        {/* Main Container */}
        <div className="mx-auto w-full max-w-[1440px] rounded-3xl px-4 sm:px-6 lg:px-12 py-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* LEFT — IMAGES */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Top two images */}
              <div className="flex flex-col sm:flex-row gap-6 w-full">
                <img
                  src={cumulusLogo}
                  alt="Cumulus Labs Project"
                  className="w-full sm:w-2/3 lg:w-3/4 aspect-[2.7] object-contain"
                />
                <img
                  src={cumulusIconBadge}
                  alt="Cumulus icon"
                  className="w-full sm:w-1/3 lg:w-1/4 aspect-square object-contain"
                />
              </div>

              {/* Full width image */}
              <img
                src={cumulusShowcase}
                alt="Cumulus Lab"
                className="w-full h-auto rounded-2xl bg-neutral-100 object-cover"
              />
            </div>

            {/* RIGHT — CONTENT */}
            <div className="flex-1 flex flex-col gap-10">
              {/* Main Card */}
              <article className="p-6 sm:p-8 rounded-2xl border border-neutral-border bg-[linear-gradient(359.29deg,#FFFFFF_-95.8%,#C2D2FF_118.12%)] hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-brand-dark font-raleway text-xl sm:text-2xl font-bold mb-4">
                  Cumulus Labs
                </h3>
                <p className="font-lato text-body-small sm:text-body leading-relaxed">
                  A memorialization platform designed to preserve our deceased
                  loved ones' digital assets. We implemented video streaming,
                  uploading, overhauled their database schema, and fixed
                  numerous issues with their web app.
                </p>
              </article>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {achievements.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 sm:p-8 rounded-2xl border border-neutral-border bg-[linear-gradient(359.29deg,#FFFFFF_-95.8%,#C2D2FF_118.12%)] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-contain"
                    />
                    <div className="mt-4 sm:mt-6 font-lato font-bold text-body-small sm:text-body text-[#17164F]">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
