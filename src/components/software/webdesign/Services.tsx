import React from "react";
import { ServiceCard } from "./ui/ServiceCard";
//Images
import businessWebsiteImage from '@/assets/software/web-design/images/Business Website Design.png'
import ecommerceWebsiteImage from '@/assets/software/web-design/images/E-commerce Website Design.png'
import highConversionImage from '@/assets/software/web-design/images/High-Conversion Landing Pages.png'
import uxRedesignImage from '@/assets/software/web-design/images/UX Redesign for Existing Sites.png'
import mobileWebAppImage from '@/assets/software/web-design/images/UX Design.png'
import conversionImage from '@/assets/software/web-design/images/Conversion Optimization Audits.png'
//Icons
import businessWebsiteIcon from '@/assets/software/web-design/icons/Business Website Design.svg'
import ecommerceWebsiteIcon from '@/assets/software/web-design/icons/E-commerce Website Design.svg'
import highConversionIcon from '@/assets/software/web-design/icons/High-Conversion Landing Pages.svg'
import uxRedesignIcon from '@/assets/software/web-design/icons/UX Redesign for Existing Sites.svg'
import mobileWebAppIcon from '@/assets/software/web-design/icons/UX Design.svg'
import conversionIcon from '@/assets/software/web-design/icons/Conversion Optimization Audits.svg'

interface ServicesProps {
  onOpenPlanner?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenPlanner }) => {
  const services = [
    {
      image: businessWebsiteImage,
      altText: "Team collaborating around monitor displaying modern website layout for professional web design services in Pakistan.",
      imageIcon: businessWebsiteIcon ,
      title: "Business Website Design",
      description:
        "We design professional websites for companies that want a strong digital presence. Brain Soft is a website development company in Lahore. We create websites that present services clearly. This helps businesses attract more clients.",
    },
    {
      image: ecommerceWebsiteImage,
      altText: "Designer analyzing e-commerce sales dashboard with colorful bar charts on tablet.",
      imageIcon: ecommerceWebsiteIcon,
      title: "E-commerce Website Design",
      description:
        "Online stores must secure payment integration and easy product navigation. We build our e-commerce websites to improve the shopping experience and increase sales.",
    },
    {
      image: highConversionImage,
      altText: "Professional viewing dark-themed marketing landing page offering 30% discount on desktop screen.",
      imageIcon: highConversionIcon,
      title: "Landing Page Design",
      description: "Marketers use landing pages for campaigns and lead generation. Our team designs high-conversion pages that guide visitors toward taking action.",
    },
    {
      image: uxRedesignImage,
      altText: "Developer pointing at dual monitors showing Canon website frontend and backend admin panel.",
      imageIcon: uxRedesignIcon,
      title: "UX Improvements for Existing Websites",
      description: "If your website is up but not doing well, we can redesign its structure and layout. This will help boost user engagement.",
    },
    {
      image: mobileWebAppImage,
      altText: "UI designer sketching mobile app wireframes on tablet next to laptop mockups for responsive web design services in Pakistan.",
      imageIcon: mobileWebAppIcon,
      title: "Mobile & Responsive Web Design",
      description: "Mobile users form a large part of website traffic today. Our designs ensure smooth performance across smartphones, tablets, and desktops.",
    },
    {
      image: conversionImage,
      altText: "Web analyst reviewing conversion funnel heatmap on large monitor for optimized web design services in Pakistan.",
      imageIcon: conversionIcon,
      title: "Website Optimization & Performance",
      description: "Website speed and structure have a direct impact on visitor engagement. We optimize website performance to deliver a better user experience.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full flex flex-col items-center mt-24 px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center space-y-4">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide">
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
