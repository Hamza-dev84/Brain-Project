import React, { useEffect, useRef } from "react";
import { ArrowRight, Zap, Settings } from "lucide-react";
import { Button } from "@/components/software/ui/button";

interface HeroProps {
  onOpenPlanner: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPlanner }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-[700px] md:min-h-[800px] w-full text-center px-6 md:px-12 lg:px-24 py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <img loading="eager" decoding="async" fetchPriority="high"
          src="/img/builder/3618d7eb62d2df2a.webp"
          alt="Expert Team of ERP Specialists Working For A Client's ERP Software in Pakistan"
          className="h-full w-full object-cover animate-[ken-burns_20s_ease-in-out_infinite]"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/85 to-brand-primary/20 z-10" />

      {/* Floating Blur Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-secondary/20 rounded-full blur-3xl animate-float-slow z-10" />
      <div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl animate-float z-10"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating Icons */}
      <Zap className="absolute top-24 left-[15%] w-10 h-10 text-brand-secondary/30 animate-float-slow z-10" />
      <Settings className="absolute bottom-32 right-[15%] w-12 h-12 text-brand-primary/30 animate-float z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto space-y-8 animate-fadeIn">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-fade-in">
          <Zap className="w-4 h-4 text-brand-secondary" />
          <span className="font-lato text-sm md:text-base font-semibold text-white tracking-wide">
            Leading ERP Solutions in Pakistan
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className="font-raleway text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-white animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          ERP Software in Pakistan That Turns Your Business into an Automated Powerhouse
        </h1>

        {/* Subheading */}
        <p 
          className="font-lato text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-white/90 max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          From fragmented data to quickly organized actionable insights, we're your end-to-end ERP partner.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in"
          style={{ animationDelay: "0.3s" }}
        >
          <button 
            className="group inline-flex items-center gap-3 text-lg md:text-xl px-8 py-4 md:py-6 bg-brand-secondary text-brand-dark rounded-xl font-lato font-semibold hover:bg-brand-secondary/90 hover:scale-105 transition-all duration-300 shadow-xl"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>Transform Your Business Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Button
            variant="outline"
            size="lg"
            onClick={onOpenPlanner}
            className="text-lg md:text-xl px-8 py-4 md:py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/40"
          >
            <Settings className="w-5 h-5" />
            Estimate Your ERP Solution
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes ken-burns {
          0%, 100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.15);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
