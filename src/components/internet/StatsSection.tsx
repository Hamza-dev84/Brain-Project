import React, { useState, useEffect, useRef } from "react";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import statsBg from "@/assets/internet/site/stats-fiber-macro.webp";

interface Stat {
  number: string;
  label: string;
  targetValue: number;
  suffix: string;
}

const stats: Stat[] = [
  { number: "10,000+", label: "Happy Customers", targetValue: 10000, suffix: "+" },
  { number: "99.9%", label: "Uptime Guarantee", targetValue: 99.9, suffix: "%" },
  { number: "100+", label: "Professionals", targetValue: 100, suffix: "+" },
  { number: "30+ Years", label: "Industry Experience", targetValue: 30, suffix: " Years" },
];

const StatsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      stats.forEach((stat, index) => {
        let currentStep = 0;
        const stepValue = stat.targetValue / steps;

        const timer = setInterval(() => {
          currentStep++;
          const newValue = Math.min(stepValue * currentStep, stat.targetValue);
          setCounts((prev) => {
            const next = [...prev];
            next[index] = newValue;
            return next;
          });
          if (currentStep >= steps) clearInterval(timer);
        }, increment);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatNumber = (value: number, index: number): string => {
    const stat = stats[index];
    if (stat.suffix === "%") return value.toFixed(1);
    return Math.floor(value).toLocaleString();
  };

  return (
    <section
      ref={sectionRef}
      className="bn-home relative overflow-hidden py-24 md:py-32 border-t border-[hsl(var(--bn-line)/0.4)]"
    >
      <img width={1920} height={1071}
        src={statsBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-screen pointer-events-none"
      />
      <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-screen-xl mx-auto px-5">
        <div className="mb-14 flex flex-col items-start gap-4">
          <span className="bn-eyebrow">30 YEARS OF OPERATING.</span>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.05] bn-display max-w-3xl">
            Three decades wiring Lahore for speed.
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(var(--bn-line)/0.5)] rounded-3xl overflow-hidden border border-[hsl(var(--bn-line)/0.5)]">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="bg-[hsl(var(--bn-bg-deep))] hover:bg-[hsl(var(--bn-bg)/0.5)] transition-colors p-8 md:p-10 h-full flex flex-col gap-3">
                <div className="font-display font-bold text-5xl md:text-6xl lg:text-7xl bn-display-accent tabular-nums leading-none">
                  {hasAnimated ? formatNumber(counts[index], index) : "0"}
                  <span className="text-3xl md:text-4xl ml-1 align-top">{stat.suffix}</span>
                </div>
                <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm md:text-base">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default StatsSection;
