import React from "react";
import { Button } from "@/components/software/ui/button";
import { ArrowRight, PenTool } from "lucide-react";

interface HeroProps {
  onOpenPlanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlanner }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[700px] md:min-h-[800px] w-full text-center px-6 md:px-12 lg:px-24 py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <img loading="eager" decoding="async" fetchPriority="high"
        src="/img/builder/63bbe7aaf75fcbf7.webp"
        alt="Designers planning and creating web design layouts on paper, representing professional web design services in Pakistan by BrainSOFT"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/85 to-brand-primary/20 z-10" />

      {/* Floating Blur Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-secondary/20 rounded-full blur-3xl animate-float-slow z-10" />
      <div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl animate-float z-10"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating Icons */}
      <PenTool className="absolute top-24 left-[15%] w-10 h-10 text-brand-secondary/30 animate-float-slow z-10" />
      <ArrowRight className="absolute bottom-32 right-[15%] w-12 h-12 text-brand-primary/30 animate-float z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto space-y-8 animate-fadeIn">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-fade-in">
          <PenTool className="w-4 h-4 text-brand-secondary" />
          <span className="font-lato text-sm md:text-base font-semibold text-white tracking-wide">
            Pakistan's Premier Web Design Agency
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-raleway text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-white animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Modernized Web Design Services in Pakistan | Smart & Scalable
        </h1>

        {/* Subheading */}
        <p
          className="font-lato text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-white/90 max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          We design with purpose — every pixel, every scroll, aimed at driving results.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-3 text-lg md:text-xl px-8 py-4 md:py-6 bg-brand-secondary text-brand-dark rounded-xl font-lato font-semibold hover:bg-brand-secondary/90 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span>Let's design your website</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Button
            variant="outline"
            size="lg"
            onClick={onOpenPlanner}
            className="text-lg md:text-xl px-8 py-4 md:py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/40"
          >
            <PenTool className="w-5 h-5" />
            Design Your Perfect Website
          </Button>
        </div>
      </div>
    </section>
  );
};
