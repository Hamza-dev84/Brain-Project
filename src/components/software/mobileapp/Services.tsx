import React from "react";
import { Lightbulb, Settings, Wrench, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/software/ui/button";
import freeConsultationImg from "@/assets/software/services/free-consultation.webp";
import ClearProjectScopeImg from "@/assets/software/services/ClearProjectScope.webp";
import FullOwnershipImg from "@/assets/software/services/FullOwnership.webp";
import DiscoveryStrategy from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/Discovery&Strategy.webp";
import UI_UX_Design from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/UI-UX-Design.webp";
import Development_Testing from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/Development&Testing.webp";
import LaunchSupport from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/ProcessLaunch&Support.webp";

interface ServiceStepProps {
  stepNumber: string;
  title: string;
  description: string;
  image: string;
}

const ServiceStep: React.FC<ServiceStepProps> = ({
  stepNumber,
  title,
  description,
  image,
}) => {
  return (
    <article className="group bg-white border border-gray-300/50 rounded-2xl p-8 hover-lift transition-all duration-300 flex-1 min-w-[280px]">
      <div className="flex items-center gap-4 mb-6">
        <img src={image} alt={title} className="w-24 h-24" />

        <span className="bg-brand-secondary/10 text-brand-secondary btn-text px-4 py-2 rounded-full">
          {stepNumber}
        </span>
      </div>
      <h3 className="software-card-title group-hover:text-brand-dark transition-colors">
        {title}
      </h3>
      <p className="card-description mt-3">{description}</p>
    </article>
  );
};

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  altText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  altText,
}) => {
  return (
    <article className="group bg-white rounded-b-2xl overflow-hidden shadow-lg hover-lift transition-all duration-300 flex-1 min-w-[300px] max-w-[380px] border border-gray-300/30">
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={altText || title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <ArrowRight className="w-8 h-8 text-brand-dark" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h3 className="software-card-title group-hover:text-brand-dark transition-colors">
          {title}
        </h3>
        <p className="card-description mt-4">{description}</p>
      </div>
      <div className="h-2 bg-gradient-to-r from-brand-secondary to-brand-secondary"></div>
    </article>
  );
};

const Services: React.FC = () => {
  const steps = [
    {
      stepNumber: "Step 1",
      title: "Discovery & Strategy",
      description:
        "We start by understanding your app idea, business model, audience, and feature priorities. This stage helps us define the scope, plan the workflow, and set the right direction.",
      image: DiscoveryStrategy,
    },
    {
      stepNumber: "Step 2",
      title: "UI/UX Design",
      description:
        "We design app screens that are clean, simple, and easy to use. Every flow is planned to help users move smoothly through the app and complete key actions without confusion.",
      image: UI_UX_Design,
    },
    {
      stepNumber: "Step 3",
      title: "Development & Testing",
      description:
        "Our developers build the app in stages while testing speed, function, and stability along the way. This keeps the product reliable and reduces issues before launch.",
      image: Development_Testing,
    },
    {
      stepNumber: "Step 4",
      title: "Launch & Support",
      description:
        "Once the app is ready, we handle deployment and final checks. We also provide support after launch for fixes, updates, and ongoing app improvement.",
      image: LaunchSupport,
    },
  ];

  const serviceCards = [
    {
      image: freeConsultationImg,
      title: "Free Consultation",
      description:
        "Share your app idea with our team and get expert input on features, workflow, and project direction.",
      altText:
        "Group testing an app on multiple devices, mobile app developers Pakistan working together in a meeting.",
    },
    {
      image: ClearProjectScopeImg,
      title: "Clear Project Scope",
      description:
        "We help you define the right feature set, timeline, and build plan before development starts.",
      altText: "Golden Handshake being done on a payment agreement",
    },
    {
      image: FullOwnershipImg,
      title: " Full Ownership",
      description:
        "After launch, your business gets full access to the product, codebase, and core project assets.",
      altText: "App Developer handing the code in a USB to its rightful owner",
    },
  ];

  return (
    <>
      <section
        id="services"
        className="w-full mt-28 mb-20 px-6 bg-white max-md:py-16"
      >
        <header className="text-center max-w-4xl mx-auto mb-12 animate-fade-in-up">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            Our Process
          </div>
          <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            Full-Cycle{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              App Development Process
            </span>
          </h2>
        </header>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`animate-fade-in-up stagger-${index + 1}`}
            >
              <ServiceStep {...step} />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-24 px-6 bg-gradient-to-b from-gray-50 to-white max-md:py-16">
        <header className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            Start Your Project With Us
          </div>
          <h3 className="font-raleway text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark -mb-8 py-4">
            With BrainSOFT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              Build Your Mobile App
            </span>
          </h3>
        </header>
        <div className="flex w-full items-stretch gap-8 flex-wrap justify-center max-w-7xl mx-auto">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={`animate-fade-in-up stagger-${index + 1}`}
            >
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
