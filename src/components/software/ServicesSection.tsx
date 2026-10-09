import React from 'react';
import { ServiceCardUnified } from './ui/ServiceCardUnified';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';
import { ScrollReveal } from './animations/ScrollReveal';

// Import service images
import webDevBg from '@/assets/software/services/web-dev-bg.webp';
import appDevBg from '@/assets/software/services/app-dev-bg.webp';
import erpBg from '@/assets/software/services/erp-bg.webp';
import digitalMarketingBg from '@/assets/software/services/digital-marketing-bg.webp';
import uiuxBg from '@/assets/software/services/uiux-bg.webp';

const ServicesSection: React.FC = () => {
  const services = [
    {
      image: webDevBg,
      title: "Web Development",
      description: "We Build Websites That Convert. PHP, React, Or Next.Js—We Craft Responsive Sites With 99.9% Uptime.",
    },
    {
      image: appDevBg,
      title: "App Development",
      description: "We Craft Apps That Dominate Stores. From iOS To Hybrid Apps. We Engineer Sleek, Scalable Solutions.",
    },
    {
      image: erpBg,
      title: "ERP Solutions",
      description: "Streamline Your Business. Odoo For SMEs, Oracle For Enterprises—Customized For Your Workflows.",
    },
    {
      image: digitalMarketingBg,
      title: "Digital Marketing",
      description: "From Code To Customers. SEO, Google Ads, And Social Media Strategies Tailored For Various Industries And Locations.",
    },
    {
      image: uiuxBg,
      title: "UI/UX Designing",
      description: "We Build Designs That Users Love With Wireframing, Prototyping, And Usability Testing Aligned With WCAG 2.2 Standards.",
    },
  ];

  return (
    <section 
      id="services"
      className="flex w-full flex-col items-center mt-24 px-8 max-md:mt-16 max-md:px-5"
    >
      <ScrollReveal animationType="fade-up" className="text-center mb-8">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
          What We Offer
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          Our Comprehensive Suite of Software Development Services in Pakistan
        </h2>
      </ScrollReveal>
      
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl" staggerDelay={0.1}>
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <ServiceCardUnified {...service} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default ServicesSection;
