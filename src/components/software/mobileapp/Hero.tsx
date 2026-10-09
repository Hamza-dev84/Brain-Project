import React from "react";
import { Rocket, Sparkles, Smartphone } from "lucide-react";
import { Button } from "@/components/software/ui/button";

interface HeroProps {
  onOpenPlanner: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPlanner }) => {
  return (
    <section className="flex flex-col relative min-h-[700px] w-full text-white font-bold text-center pt-32 pb-24 px-6 overflow-hidden max-md:min-h-[600px] max-md:pt-28 max-md:pb-20">
      {/* Background Image */}
      <img loading="eager" decoding="async" fetchPriority="high"
        src="/img/builder/452a52107d35f342.webp"
        alt="An Expert Mobile App Developer in Pakistan Drawing the Mobile App Architecture"
        className="absolute h-full w-full object-cover inset-0 z-0"
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float z-10"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float z-10"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 animate-fade-in-up">
          <Sparkles size={16} className="text-secondary" />
          <span className="font-lato text-sm font-semibold">
            Transform Your Ideas
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-raleway text-4xl lg:text-6xl xl:text-7xl leading-tight font-bold text-white md:text-5xl animate-slide-up">
          Expert Mobile App Developers in Pakistan
        </h1>

        {/* Description */}
        <p className="font-lato text-xl md:text-2xl lg:text-3xl font-medium text-white max-w-3xl mx-auto mt-8 mb-10 opacity-95 animate-fade-in-up stagger-2">
          Transform your vision into powerful apps with the leading mobile app developers in Pakistan. We build user-friendly, high-performance iOS, Android, and cross-platform solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-scale-in stagger-3">
          <button
            className="bg-brand-secondary text-brand-dark flex items-center gap-3 px-8 py-4 rounded-xl btn-text hover:bg-brand-secondary/90 hover-glow hover-scale transition-all duration-300 shadow-xl cursor-pointer"
            onClick={() => window.location.href = '/services/software/contact-us'}
          >
            <Rocket size={24} />
            <span>Let's Build Your App</span>
          </button>
          <Button
            variant="outline"
            size="lg"
            onClick={onOpenPlanner}
            className="btn-text px-8 py-4 group bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <Smartphone className="w-5 h-5" />
            Plan Your Mobile App
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
