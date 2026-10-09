import React from "react";
import { Target, Globe2, Rocket, BarChart3, RefreshCw, Sparkles, Zap } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      Icon: Target,
      title: "Profit-Driven UI/UX Architecture",
      description:
        "we engineer interfaces that converts visitors into customers using Google's all new material 3 expressive coupled with brand-specific experiences – no templates.",
    },
    {
      Icon: Globe2,
      title: "Global Scale, Pakistan-Engineered Value",
      description:
        "We have created foundational and advanced designs for the fastest-growing SaaS startups globally. Our company delivers Silicon Valley-tier web design services in Pakistan at highly affordable costs.",
    },
    {
      Icon: Rocket,
      title: "Hyper-Accelerated Launch Cycles",
      description:
        "Receive your first high-fidelity, dev-ready prototype in less than a week (not just Figma artboards). We design and de-risk deployment.",
    },
    {
      Icon: BarChart3,
      title: "Full-Funnel Performance Integration",
      description:
        "Your site isn't a brochure – it's your highest-performing sales channel. We bake in CRO frameworks, analytics layers, and scalability blueprints from day one.",
    },
    {
      Icon: RefreshCw,
      title: "Continuous Design Optimization",
      description:
        "We stay on to provide affordable CRO-based design tweaks, ensuring your site keeps converting better over time with WCAG Standards in Place.",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center mt-[80px] px-[60px] py-16 max-md:mt-10 max-md:px-5 relative overflow-hidden gradient-subtle">
      <Sparkles className="absolute top-10 right-10 w-8 h-8 text-brand-secondary/20 animate-pulse-slow" />
      <Zap className="absolute bottom-20 left-10 w-10 h-10 text-brand-primary/20 animate-float" />

      <div className="text-center mb-4">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
          Why Choose Us
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          Why We Are The
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            Leading Web Design Company in Pakistan
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl w-full">
        {features.map((feature, index) => {
          const { Icon } = feature;
          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-neutral-border hover:border-brand-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500"></div>

              {/* Icon */}
              <div className="w-[70px] h-[70px] mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-brand-primary" />
              </div>

              <h3 className="card-title text-center">
                {feature.title}
              </h3>

              <p className="card-description text-center">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
