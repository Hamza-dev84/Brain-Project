import React from 'react';
import { DollarSign, Award, Clock, Lightbulb, Globe, Package, Zap, Shield } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';
import { ScrollReveal } from './animations/ScrollReveal';
import { motion } from 'framer-motion';
const OffshoreSection: React.FC = () => {
  const features = [{
    Icon: DollarSign,
    title: "Value-Driven Solutions",
    description: "We don't just code—we optimize workflows, reduce costs, and boost ROI."
  }, {
    Icon: Award,
    title: "Decades of Expertise",
    description: "Decades of evolving tech—built on experience, driven by innovation."
  }, {
    Icon: Clock,
    title: "24/7 Support",
    description: "24/7 expert teams aligned to your time zone for instant support."
  }, {
    Icon: Lightbulb,
    title: "Innovation DNA",
    description: "Supported by the founders of the first pC virus, with the most in-depth technical problem-solving skills."
  }, {
    Icon: Globe,
    title: "Global-Local Blend",
    description: "International project management + Pakistani technical execution."
  }, {
    Icon: Package,
    title: "Full-Cycle Ownership",
    description: "From prototyping to post-launch support."
  }];
  return (
    <section className="flex w-full flex-col items-center mt-[80px] px-[60px] py-16 max-md:mt-10 max-md:px-5 relative overflow-hidden gradient-subtle">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10"
      >
        <Zap className="w-8 h-8 text-brand-secondary/20" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10"
      >
        <Shield className="w-10 h-10 text-brand-primary/20" />
      </motion.div>

      <ScrollReveal animationType="fade-up" className="text-center mb-4">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
          Why Choose Us
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          Why We Are The Leading
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">Software Development Company In Pakistan</span>
        </h2>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl w-full" staggerDelay={0.1}>
        {features.map((feature, index) => {
          const { Icon } = feature;
          return (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="group bg-white rounded-2xl p-8 border border-neutral-border hover:border-brand-secondary transition-all duration-300 h-full relative overflow-hidden"
              >
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500"></div>

                {/* Icon */}
                <div className="w-[70px] h-[70px] mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-brand-primary" />
                </div>

                <h3 className="card-title text-center">
                  {feature.title}
                </h3>

                <p className="card-description text-center">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
};
export default OffshoreSection;