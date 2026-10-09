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
    <section className="w-full mt-[60px] max-md:max-w-full max-md:mt-10 relative overflow-hidden">
      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[15%] hidden lg:block"
      >
        <Briefcase className="text-brand-secondary/20" size={80} strokeWidth={1.5} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 left-[10%] hidden lg:block"
      >
        <Award className="text-brand-secondary/20" size={70} strokeWidth={1.5} />
      </motion.div>

      <div className="flex flex-col px-[60px] max-md:px-5 max-w-[1400px] mx-auto">
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

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-[30px] w-full">
          
          {/* LEFT COLUMN - Images */}
          <ScrollReveal animationType="fade-right" delay={100} className="flex flex-col gap-[20px] lg:w-[45%]">
            {/* Logo Card */}
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-[#E8EBF7] rounded-[30px] p-[60px] max-md:p-10 flex items-center justify-center"
            >
              <img width={446} height={165} loading="lazy" decoding="async" 
                src={cumulusLogo} 
                alt="Cumulus Labs Logo" 
                className="w-full max-w-[280px] h-auto"
              />
            </motion.div>

            {/* Icon Badge & Showcase Row */}
            <div className="flex gap-[20px] max-md:flex-col">
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-[#E8EBF7] rounded-[30px] p-[30px] flex items-center justify-center"
              >
                <img width={169} height={165} loading="lazy" decoding="async" 
                  src={cumulusIconBadge} 
                  alt="Cumulus Icon Badge" 
                  className="w-[60px] h-[60px]"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
                className="flex-1 rounded-[30px] overflow-hidden shadow-lg"
              >
                <img width={645} height={283} loading="lazy" decoding="async" 
                  src={cumulusShowcase} 
                  alt="Cumulus Labs Website Showcase" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN - Info & Achievements */}
          <ScrollReveal animationType="fade-left" delay={200} className="flex flex-col gap-[30px] lg:w-[55%]">
            {/* Main Info Card */}
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-white border-2 border-brand-secondary/20 rounded-[30px] p-[40px] max-md:p-8"
            >
              <h3 className="card-title">
                Cumulus Labs
              </h3>
              <p className="card-description">
                A Memorialization Platform Designed To Preserve Our Deceased Loved Ones' Digital Assets. We Implemented Video Streaming, Uploading, Overhauled Their Database Schema, And Fixed Numerous Issues With Their Web App.
              </p>
            </motion.div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="bg-[#E8EBF7] rounded-[25px] p-[30px] max-md:p-6 flex flex-col items-center text-center"
                >
                  <img loading="lazy" decoding="async" 
                    src={achievement.icon} 
                    alt={achievement.title}
                    className="w-[60px] h-[60px] mb-4"
                  />
                  <h3 className="font-raleway font-bold text-base text-[hsl(var(--brand-dark))]">
                    {achievement.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
