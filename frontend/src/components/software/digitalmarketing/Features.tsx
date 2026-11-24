import React from "react";
import { Target, Users, TrendingUp, BarChart3, Search, Zap, Shield } from "lucide-react";
import { ScrollReveal } from "@/components/software/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/software/animations/StaggerContainer";

export const Features: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Result-Focused Marketing Strategy",
      description:
        "Every campaign starts with research. We study your industry, competitors, and customer behavior before launching marketing activities. This helps businesses in Lahore get better visibility and stronger results.",
    },
    {
      icon: Users,
      title: "Dedicated Marketing Specialists",
      description:
        "BrainSOFT has skilled marketers. They manage campaigns, analyze data, and keep improving performance. Our team focuses on practical growth rather than random promotion.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Marketing Solutions",
      description:
        "Our marketing services grow with your business. Startups can launch with low-cost campaigns. Larger companies can grow using more advanced strategies.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Performance Tracking",
      description:
        "Every campaign is monitored using analytics tools. We track traffic, leads, and conversion data to improve results and reduce wasted advertising spend.",
    },
    {
      icon: Search,
      title: "SEO-Focused Growth",
      description:
        "Search engines remain one of the strongest sources of customers. Our SEO strategies help businesses rank on Google. We focus on relevant searches in Lahore and all Pakistan.",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center py-20 px-6 md:px-12 lg:px-16 relative overflow-hidden gradient-subtle">
      <Zap className="absolute top-10 right-10 w-8 h-8 text-brand-secondary/20 animate-pulse-slow" />
      <Shield className="absolute bottom-20 left-10 w-10 h-10 text-brand-primary/20 animate-float" />

      <ScrollReveal>
        <div className="text-center mb-4">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            We Don't Just Run Campaigns
          </div>
          <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            We Help Businesses{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              Grow Online
            </span>
          </h2>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl w-full">
        {features.map((feature, index) => (
          <StaggerItem key={index}>
            <div className="group bg-white rounded-2xl p-8 border border-neutral-border hover:border-brand-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-full">
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500" />
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};
