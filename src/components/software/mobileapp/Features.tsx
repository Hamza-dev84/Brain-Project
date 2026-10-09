import React from "react";
import {
  CheckCircle2,
  TrendingUp,
  Users,
  Shield,
  Globe2,
  Zap,
  Sparkles,
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      Icon: CheckCircle2,
      title: "30+ Apps Delivered",
      description:
        "Our apps were made for various industries, which handle millions of monthly transactions with 99.9% uptime with post dev-support.",
    },
    {
      Icon: TrendingUp,
      title: "Immense Savings",
      description:
        "Western-quality apps, now made more affordable, with transparent and detailed pricing provided as per your needs and our recommendations.",
    },
    {
      Icon: Users,
      title: "Dedicated Teams",
      description:
        "We Assign a Specialized Team of Experienced & Dedicated Project Managers, Designers, and Developers who work exclusively on your app.",
    },
    {
      Icon: Shield,
      title: "Global Compliance",
      description:
        "We make sure your mobile app is GDPR, HIPAA, and PCI-DSS compliance for international markets.",
    },
    {
      Icon: Globe2,
      title: "Served Clients in 15+ Countries",
      description:
        "From startups in the UK to enterprises in the USA, our company is trusted globally.",
    },
    {
      Icon: Zap,
      title: "ROI-Focused Development",
      description:
        "We Understand The Technical Importance Behind Your Apps, just as much as we understand its importance as your main business tool. We design with scalability, user retention, and monetization in mind.",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center mt-[80px] px-[60px] py-16 max-md:mt-10 max-md:px-5 relative overflow-hidden gradient-subtle">
      <Sparkles className="absolute top-10 right-10 w-8 h-8 text-brand-secondary/20 animate-pulse-slow" />
      <Shield className="absolute bottom-20 left-10 w-10 h-10 text-brand-primary/20 animate-float" />

      <div className="text-center mb-4">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
          Why We Are The Go-To
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            Mobile App Development Company
          </span>
          <br />
          in Pakistan
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

export default Features;
