import React from "react";
import { Lightbulb, Settings, Wrench, GraduationCap } from "lucide-react";
import { Button } from "@/components/software/ui/button";
import freeConsultationImg from "@/assets/software/services/free-consultation.webp";

interface ServiceStepProps {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceStep: React.FC<ServiceStepProps> = ({
  stepNumber,
  title,
  description,
  icon,
}) => {
  return (
    <article className="group bg-white border border-gray-300/50 rounded-2xl p-8 hover-lift transition-all duration-300 flex-1 min-w-[280px]">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-secondary rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <span className="bg-brand-secondary/10 text-brand-secondary btn-text px-4 py-2 rounded-full">
          {stepNumber}
        </span>
      </div>
      <h4 className="card-title">
        {title}
      </h4>
      <p className="card-description mt-3">
        {description}
      </p>
    </article>
  );
};

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  alt?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  alt,
}) => {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-lg hover-lift transition-all duration-300 flex-1 min-w-[300px] max-w-[380px] border border-gray-300/30">
      <div className="relative overflow-hidden h-64">
        <img loading="lazy" decoding="async"
          src={image}
          alt={alt || title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-8">
        <h4 className="card-title group-hover:text-brand-dark transition-colors">
          {title}
        </h4>
        <p className="card-description mt-4">
          {description}
        </p>
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
        "We dissect your idea, audit competitors, and craft a roadmap. Miss this step, and you risk building an app no one downloads.",
      icon: <Lightbulb size={32} />,
    },
    {
      stepNumber: "Step 2",
      title: "UI/UX Design",
      description:
        "We create intuitive, pixel-perfect designs that convert visitors into customers. Every screen is crafted with user psychology and conversion optimization in mind.",
      icon: <Settings size={32} />,
    },
    {
      stepNumber: "Step 3",
      title: "Development & Testing",
      description:
        "Using Agile workflows, we code, test, and refine. Every app undergoes 50+ QA checks for bugs, load times, and security.",
      icon: <Wrench size={32} />,
    },
    {
      stepNumber: "Step 4",
      title: "Launch & Support",
      description:
        "We handle App Store submissions and provide 3 months FREE support—because your success is our success.",
      icon: <GraduationCap size={32} />,
    },
  ];

  const serviceCards = [
    {
      image: freeConsultationImg,
      title: "Free Consultation",
      description: "Share your idea → Get a roadmap + quote in 24 hours.",
      alt: "Diverse mobile app developers in Pakistan collaborating in a modern office presentation",
    },
    {
      image:
        "/img/builder/c05cc3fd9ab6bfa8.webp",
      title: "No Upfront Costs",
      description: "Pay 30% after approving the design.",
      alt: "No upfront costs illustration for mobile app development",
    },
    {
      image:
        "/img/builder/40f28c81cfbbb4d6.webp",
      title: "Ownership Guarantee",
      description: "Full code rights transferred upon launch.",
      alt: "Ownership guarantee for mobile app development",
    },
  ];

  return (
    <>
      <section
        id="services"
        className="w-full py-24 px-6 bg-white max-md:py-16"
      >
        <header className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            Our Process
          </div>
          <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              Full-Cycle
            </span>{" "}
            App Development Process
          </h2>
        </header>
        <div className="flex w-full items-stretch gap-6 flex-wrap justify-center max-w-7xl mx-auto">
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
            Start Your Project with
          </div>
          <h3 className="font-raleway text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              BrainSOFT
            </span>{" "}
            Today!
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
