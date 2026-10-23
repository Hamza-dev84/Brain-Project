
import React from "react";
import { ServiceCardUnified } from "@/components/software/ui/ServiceCardUnified";
//Web Development Images
import webDevImg from '../../../assets/software/web-development/images/Custom Web dev.png';
import ecommerceImg from '../../../assets/software/web-development/images/Ecommerce Site.png'
import paymentIntegrationImg from '../../../assets/software/web-development/images/API Integration.png';
import cmsDevImg from '../../../assets/software/web-development/images/CMS Dev.png';
//Web Development Icons
import webDevIcon from '../../../assets/software/web-development/icons/Custom Web dev.svg';
import ecommerceIcon from '../../../assets/software/web-development/icons/Ecommerce Site.svg';
import paymentIntegrationIcon from '../../../assets/software/web-development/icons/API Integration.svg';
import cmsDevIcon from '../../../assets/software/web-development/icons/CMS Dev.svg';
//Web Development Logos
import reactjs from '../../../assets/software/web-development/technology/react-logo.svg';
import nodejs from '../../../assets/software/web-development/technology/nodejs-logo.png';
import python from '../../../assets/software/web-development/technology/python-logo.png';
import firebase from '../../../assets/software/web-development/technology/firebase-logo.png';
import supabase from '../../../assets/software/web-development/technology/supabase-logo.png';
//E-commerce Logos
import shopify from '../../../assets/software/e-commerce/shopify-logo.png';
import woocommerce from '../../../assets/software/e-commerce/woocommerce-logo.png';
import magneto from '../../../assets/software/e-commerce/magento-logo.png';
//Payment Method Integration Logs
import stripe from '../../../assets/software/payment-integration/stripe-logo.png';
import jazzcash from '../../../assets/software/payment-integration/jazzcash-logo.png';
import easypaisa from '../../../assets/software/payment-integration/easypaisa-logo.png';
import payfast from '../../../assets/software/payment-integration/payfast-logo.png';
//CMS Development Logos
import shopify_cms from '../../../assets/software/cms-development/shopify-logo.png';
import wordpress from '../../../assets/software/cms-development/wordpress-logo.png';

interface ServicesProps {
  onOpenPlanner?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenPlanner }) => {
  const services = [
    {
      image: webDevImg,
      altText: "Web developer building a responsive interface, illustrating real-world website development services in Pakistan",
      imageIcon:webDevIcon,
      title: "Custom Website Development",
      description: "We create custom website development solutions for service businesses, startups, software companies, educational brands, and growing companies that need more than a basic template. Every website is planned around your goals, pages, features, and customer journey.",
      techHeading: "Technologies We Use:",
      techIcons: [reactjs,nodejs,python,firebase,supabase]
    },
    {
      image: cmsDevImg,
      altText: "Developer Working on Delivering Website Development Services in Pakistan by making a CMS",
      imageIcon:webDevIcon,
      title: "Web Design Services",
      description: "Our web design services focus on layout, structure, user flow, and brand presentation. We design websites that look clean, feel trustworthy, and guide visitors toward inquiry, booking, or purchase.",
      techHeading: "Technologies We Use:",
      techIcons: [shopify_cms,wordpress]
    },
    {
      image: ecommerceImg,
      altText: "Online shopping website layout on desktop, showing the checkout section",
      imageIcon:ecommerceIcon,
      title: "eCommerce Website Development",
      description: "We build online stores that are easy to manage and ready to sell. From product pages and category setup to cart, checkout, and order flow, we create eCommerce websites that help Pakistani businesses sell with confidence.",
      techHeading: "Platforms We Work With:",
      techIcons: [shopify,woocommerce,magneto]
    },
    {
      image: paymentIntegrationImg,
      altText: "API Integration of Website with multiple systems",
      imageIcon:paymentIntegrationIcon,
      title: "API Integration Services",
      description: "We connect your website with payment gateways, CRMs, ERPs, shipping tools, WhatsApp systems, forms, and analytics platforms. This helps your business save time, reduce manual work, and keep operations smooth.",
      techHeading: "Seamless Payment Integration:",
      techIcons: [stripe,jazzcash,easypaisa,payfast]
    },
    {
      image: cmsDevImg,
      altText: "Developer Working on Delivering Website Development Services in Pakistan by making a CMS",
      imageIcon:cmsDevIcon,
      title: "CMS Development",
      description: "We build CMS-based websites that give you full control over content, pages, blogs, products, and updates. Whether you need WordPress development or a custom admin panel, we make content management easier for your team.",
      techHeading: "Smart CMS Solutions:",
      techIcons: [shopify_cms,wordpress]
    },
  ];

  return (
    <section
      id="services"
      className="flex w-full flex-col items-center px-[60px] pt-18 max-md:px-5 relative gradient-subtle"
    >
      <div className="text-center mt-10 max-w-4xl mx-auto">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
          Our Services
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-4 mb-8 ">
            End-to-End {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
          Website Development Services {" "}
          </span>
          in Pakistan
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
