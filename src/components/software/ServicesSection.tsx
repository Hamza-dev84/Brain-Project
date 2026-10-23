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

// Import service icons
import webDevIcon from "@/assets/software/services/icons/Web Dev.svg";
import appDevIcon from "@/assets/software/services/icons/App Dev.svg";
import erpSolutionIcon from "@/assets/software/services/icons/ERP Solutions.svg";
import digitalMarketingIcon from "@/assets/software/services/icons/Digital Marketing.svg";
import uiuxIcon from "@/assets/software/services/icons/UX Design.svg";


const ServicesSection: React.FC = () => {
  // const services = [
  //   {
  //     image: webDevBg,
  //     title: "Web Development",
  //     description: "We Build Websites That Convert. PHP, React, Or Next.Js—We Craft Responsive Sites With 99.9% Uptime.",
  //   },
  //   {
  //     image: appDevBg,
  //     title: "App Development",
  //     description: "We Craft Apps That Dominate Stores. From iOS To Hybrid Apps. We Engineer Sleek, Scalable Solutions.",
  //   },
  //   {
  //     image: erpBg,
  //     title: "ERP Solutions",
  //     description: "Streamline Your Business. Odoo For SMEs, Oracle For Enterprises—Customized For Your Workflows.",
  //   },
  //   {
  //     image: digitalMarketingBg,
  //     title: "Digital Marketing",
  //     description: "From Code To Customers. SEO, Google Ads, And Social Media Strategies Tailored For Various Industries And Locations.",
  //   },
  //   {
  //     image: uiuxBg,
  //     title: "UI/UX Designing",
  //     description: "We Build Designs That Users Love With Wireframing, Prototyping, And Usability Testing Aligned With WCAG 2.2 Standards.",
  //   },
  // ];

  const services = [
    {
      image: webDevBg,
      altText: "Developer interacting with glowing HTML5 logo and code editor, symbolizing modern web development offered through Software development services in Pakistan.",
      imageIcon: webDevIcon,
      title: "Web Development",
      description:
        "We Build Websites That Convert. PHP, React, Or Next.Js—We Craft Responsive Sites With 99.9% Uptime.",
    },
    {
      image: appDevBg,
      altText: "Hand-drawn mobile app wireframes and interface sketches on paper for planning user-friendly applications.",
      imageIcon: appDevIcon,
      title: "App Development",
      description:
        "We Craft Apps That Dominate Stores. From iOS To Hybrid Apps. We Engineer Sleek, Scalable Solutions.",
    },
    {
      image: erpBg,
      altText: "Professional using laptop with holographic security shield and data icons, representing secure ERP solutions from software development services in Pakistan.",
      imageIcon: erpSolutionIcon,
      title: "ERP Solutions",
      description: "Streamline Your Business. Odoo For SMEs, Oracle For Enterprises—Customized For Your Workflows.",
    },
    {
      image: digitalMarketingBg,
      altText: "Hands typing on laptop overlaid with digital marketing symbols like handshake, dollar signs, charts, and paper planes.",
      imageIcon: digitalMarketingIcon,
      title: "SEO Services",
      description:
        "From Code To Customers. SEO, Google Ads, And Social Media Strategies Tailored For Various Industries And Locations.",
    },
    {
      image: uiuxBg,
      altText: "Laptop screen showing detailed hand-sketched UI/UX wireframes and user interface layouts for intuitive design in software development services in Pakistan.",
      imageIcon: uiuxIcon,
      title: "UI/UX Designing",
      description:
        "We Build Designs That Users Love With Wireframing, Prototyping, And Usability Testing Aligned With WCAG 2.2 Standards.",
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
          Our Comprehensive Suite of <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            Software Development Services in Pakistan
          </span>
        </h2>
      </ScrollReveal>

      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
        staggerDelay={0.1}
      >
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
