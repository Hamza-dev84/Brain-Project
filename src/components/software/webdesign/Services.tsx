import React from "react";
import { ServiceCard } from "./ui/ServiceCard";

interface ServicesProps {
  onOpenPlanner?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenPlanner }) => {
  const services = [
    {
      image:
        "/img/builder/8e250c6d38441284.webp",
      title: "Business Website Design",
      description:
        "Your business deserves more than just a page — it deserves presence. tailored for your Industry.",
    },
    {
      image:
        "/img/builder/e2962225237ffee0.webp",
      title: "E-commerce Website Design",
      description:
        "Turn browsers into buyers with a simplified shopping experience.",
    },
    {
      image:
        "/img/builder/8a582c622bd62f21.webp",
      title: "High-Conversion Landing Pages",
      description: "One page. One goal. One powerful result.",
    },
    {
      image:
        "/img/builder/e710317f97649819.webp",
      title: "UX Redesign for Existing Sites",
      description:
        "Outdated design is killing your credibility. Let's fix that.",
    },
    {
      image:
        "/img/builder/d791ebfb59b1af45.webp",
      title: "Mobile & Web App UI/UX Design",
      description: "Complex systems turned into simplified Designs.",
    },
    {
      image:
        "/img/builder/03373a8c5c5a2423.webp",
      title: "Conversion Optimization Audits",
      description:
        "If your website looks good but doesn't convert — it's time to revisit it.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full flex flex-col items-center mt-24 px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center space-y-4">
        <div className="inline-block bg-brand-primary/10 text-brand-primary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide">
          Our Services
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          End-to-End
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            Web Design Solutions
          </span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={onOpenPlanner}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

    </section>
  );
};
