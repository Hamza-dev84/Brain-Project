import React from "react";
import { Code2, Route, Link as LinkIcon, Languages } from "lucide-react";
import IconContainer from "@/components/sms/common/IconContainer";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";
import StaggeredGrid from "@/components/sms/animations/StaggeredGrid";

const TechnicalFeatures = () => {
  const features = [
    {
      title: "HTTP/RESTful API",
      description: (
        <>
          Integrate with
          <a
            href="/services/software/web-development-pakistan"
            className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
          >
            {" "}WooCommerce,{" "}
          </a>
          <a
            href="/services/software/erp-software-pakistan"
            className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
          >
            {" "}SAP,{" "}
          </a>
          or custom apps{" "}
        </>
      ),
      icon: Code2
    },
    {
      title: "Intelligent Routing",
      description: "Auto-select optimal carriers for delivery.",
      icon: Route,
    },
    {
      title: "SMS Concatenation",
      description: "Split long messages without truncation",
      icon: LinkIcon,
    },
    {
      title: "Urdu Support",
      description: "Send messages in Roman + Urdu scripts.",
      icon: Languages,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 w-full px-[60px] max-md:px-10 max-sm:px-5">
      <AnimateOnScroll animation="fade-up">
        <h2 className="text-primary text-center text-[32px] font-bold capitalize max-sm:text-2xl max-sm:leading-8">
          Technical Brilliance Built To Scale!
        </h2>
      </AnimateOnScroll>
      <StaggeredGrid
        className="grid grid-cols-2 gap-10 w-full max-w-[800px] max-md:grid-cols-1 max-md:gap-[30px]"
        staggerDelay={0.15}
      >
        {features.map((feature, index) => (
          <article
            key={index}
            className="group flex items-center gap-5 p-[30px] rounded-2xl bg-card border-2 border-border/50 max-sm:flex-col max-sm:text-center max-sm:p-5 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
          >
            <IconContainer
              icon={feature.icon}
              size="large"
              className="group-hover:scale-110 shrink-0"
            />
            <div className="flex flex-col gap-2.5">
              <h3 className="text-primary text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm font-normal leading-5">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </StaggeredGrid>
    </section>
  );
};

export default TechnicalFeatures;
