import React from "react";
import { ServiceCardUnified } from "@/components/software/ui/ServiceCardUnified";

interface ServicesProps {
  onOpenPlanner?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenPlanner }) => {
  const services = [
    {
      image: "/img/builder/eeab4dc6908c4f98.webp",
      title: "Custom Website Development",
      description: "From sleek portfolios to complex SaaS platforms. Technologies: React, Next.js, PHP, Node.js, Laravel, and Vue.js.",
    },
    {
      image: "/img/builder/4b2daf5851c1d45a.webp",
      title: "E-Commerce Solutions",
      description: "Build online stores that convert. Platforms: Shopify, WooCommerce, Magento for seamless shopping experiences.",
    },
    {
      image: "/img/builder/a40b0c063e28b5f8.webp",
      title: "API Integration",
      description: "Connect payment gateways (Stripe, PayFast JazzCash, EasyPaisa), CRMs, and analytics tools for seamless operations.",
    },
    {
      image: "/img/builder/c3ef11a55f393084.webp",
      title: "CMS Development",
      description: "Take control with WordPress or custom CMS solutions tailored to your content management needs.",
    },
  ];

  return (
    <section
      id="services"
      className="flex w-full flex-col items-center mt-[80px] px-[60px] py-16 max-md:px-5 relative gradient-subtle"
    >


      <div className="text-center mb-12 max-w-4xl mx-auto">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
          Our Services
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            End-to-End
          </span>{" "}
          Web Development Services in Pakistan
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <ServiceCardUnified {...service} onClick={onOpenPlanner} />
          </div>
        ))}
      </div>
    </section>
  );
};
