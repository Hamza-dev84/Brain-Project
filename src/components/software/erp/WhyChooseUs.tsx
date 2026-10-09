import React from "react";
import { Workflow, Target, Zap, Shield, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      Icon: Workflow,
      title: "Seamless Migration",
      description:
        "Seamless transition from legacy systems like MS Access, FoxPro, SQL Server, Odoo, or any custom ERP with secure data transfer and no major business disruption.",
    },
    {
      Icon: Target,
      title: "Industry-Specific Expertise",
      description:
        "ERP solutions tailored for key industries including Manufacturing with streamlined workflows, Textiles with smart material planning, Logistics with fleet and supply chain tools, and Telecoms with user management systems.",
    },
    {
      Icon: Zap,
      title: "Rapid Deployment Approach",
      description:
        "Quick and efficient ERP implementation with compliance to local tax laws, fast team onboarding, and minimal delays in rollout.",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center mt-[80px] px-[60px] py-16 max-md:mt-10 max-md:px-5 relative overflow-hidden gradient-subtle">
      <Sparkles className="absolute top-10 right-10 w-8 h-8 text-brand-secondary/20 animate-pulse-slow" />
      <Shield className="absolute bottom-20 left-10 w-10 h-10 text-brand-primary/20 animate-float" />

      <div className="text-center mb-4">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
          Why Choose Us
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          Why We Are The Leading
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            ERP Solutions Provider in Pakistan
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

              <h3 className="card-title text-center">{feature.title}</h3>

              <p className="card-description text-center">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
