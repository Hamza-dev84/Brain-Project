import React from "react";
import IconContainer from "@/components/sms/common/IconContainer";
import { BadgeCheck, ShieldCheck, Plug, Rocket, LucideIcon } from "lucide-react";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";
import StaggeredGrid from "@/components/sms/animations/StaggeredGrid";

interface StepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => (
  <article className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:shadow-elegant transition-all">
    <div className="mb-6 flex items-center justify-center">
      <IconContainer icon={icon} size="large" />
    </div>
    <h3 className="text-primary font-heading font-bold text-2xl mb-4">{title}</h3>
    <p className="text-foreground font-body text-base leading-relaxed">{description}</p>
  </article>
);

const BrandedHowItWorks: React.FC = () => {
  const steps = [
    {
      icon: BadgeCheck,
      title: "Choose Provider",
      description: "Select a PTA-Approved provider like BSMS.",
    },
    {
      icon: ShieldCheck,
      title: "Register sender ID",
      description: "We handle the PTA registration for your business name.",
    },
    {
      icon: Plug,
      title: "Integrate",
      description: "Connect via our robust API or user friendly bulk SMS portal.",
    },
    {
      icon: Rocket,
      title: "Launch & track",
      description: "Send your campaign and monitor performance with detailed reports.",
    },
  ];

  return (
    <section className="container mx-auto px-6 lg:px-12 py-20">
      <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl mb-2">
            How It Works
          </h2>
          <p className="text-primary font-heading font-semibold text-xl md:text-2xl">
            How to get Our Branded SMS Service in Pakistan
          </p>
        </div>
      </AnimateOnScroll>
      <StaggeredGrid
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        animation="fade-up"
        staggerDelay={0.15}
      >
        {steps.map((step, index) => (
          <Step key={index} icon={step.icon} title={step.title} description={step.description} />
        ))}
      </StaggeredGrid>
    </section>
  );
};

export default BrandedHowItWorks;
