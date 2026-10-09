import React from "react";
import { Code2, Sparkles, Layers, ArrowRight, Zap, Code } from "lucide-react";
import { Button } from "@/components/software/ui/button";

interface HeroProps {
  onOpenPlanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlanner }) => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[700px] md:min-h-[800px] w-full text-center px-6 md:px-12 lg:px-24 py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <img loading="eager" decoding="async" fetchPriority="high"
        src="/img/builder/340228b3bce94242.webp"
        alt="Expert Team of Web Developers Working On Website Development Services in Pakistan for a client"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/85 to-brand-primary/20 z-10" />

      {/* Floating Blur Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-secondary/20 rounded-full blur-3xl animate-float-slow z-10" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl animate-float z-10" style={{ animationDelay: "1s" }} />

      {/* Floating Icons */}
      <Code2 className="absolute top-24 left-[15%] w-10 h-10 text-brand-secondary/30 animate-float-slow z-10" />
      <Sparkles className="absolute bottom-32 right-[15%] w-12 h-12 text-brand-primary/30 animate-float z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto space-y-8 animate-fadeIn">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-fade-in">
          <Sparkles className="w-4 h-4 text-brand-secondary" />
          <span className="font-lato text-sm md:text-base font-semibold text-white tracking-wide">
            Pakistan's Leading Web Development Agency
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className="font-raleway text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-white animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Professional Website Development Services in Pakistan
        </h1>

        {/* Subheading */}
        <p 
          className="font-lato text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-white/90 max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Custom website development services in Pakistan tailored to your business. From e-commerce to enterprise solutions, we deliver high-performing websites that drive growth.
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
            <span>Let's Build Your Site</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Button
            variant="outline"
            size="lg"
            onClick={onOpenPlanner}
            className="text-lg md:text-xl px-8 py-4 md:py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/40"
          >
            <Code className="w-5 h-5" />
            Calculate Your Project Scope
          </Button>
        </div>
      </div>
    </section>
  );
};
