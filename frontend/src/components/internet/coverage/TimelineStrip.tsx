import React from "react";
import { CheckCircle2, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";

const events = [
  { date: "This week", area: "DHA Phase 8", status: "Live", icon: Zap },
  { date: "2 weeks ago", area: "Bahria Town Sector C", status: "Activated", icon: CheckCircle2 },
  { date: "1 month ago", area: "Model Town Block B", status: "Activated", icon: CheckCircle2 },
  { date: "6 weeks ago", area: "Johar Town Phase 2", status: "Activated", icon: CheckCircle2 },
];

const TimelineStrip: React.FC = () => {
  return (
    <section className="relative py-16 bg-[hsl(var(--bn-bg-deep))] border-y border-[hsl(var(--bn-line)/0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span className="bn-eyebrow">Rollout</span>
              <h2 className="font-display font-bold text-2xl md:text-3xl mt-2">
                <span className="bn-display">Recently</span> <span className="bn-display-accent">activated.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-[hsl(var(--bn-ink-soft))] font-dm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              Live network expansion
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((e, i) => {
            const Icon = e.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bn-tile p-5 h-full flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[hsl(var(--bn-violet-soft))]" />
                    </div>
                    <span className="text-xs text-[hsl(var(--bn-ink-soft))] font-dm">{e.date}</span>
                  </div>
                  <div className="font-display font-bold text-lg text-[hsl(var(--bn-ink))]">{e.area}</div>
                  <div className="text-sm text-green-400 font-dm flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {e.status}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineStrip;
