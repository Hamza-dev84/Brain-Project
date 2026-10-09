import React from "react";
import { Zap, Shield } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: "/img/builder/022988a51d9de019.svg",
      title: "Proven Development Methodology",
      description:
        "We follow an agile, milestone-driven approach—each phase is transparent, on-budget, and on-schedule.",
    },
    {
      icon: "/img/builder/74d7dd0401c1e480.svg",
      title: "Dedicated Project Manager",
      description:
        "From kickoff to launch, you have a single point of contact ensuring clear communication and zero surprises.",
    },
    {
      icon: "/img/builder/26bd28d25696ccbd.svg",
      title: "Global Clientele, Local Expertise",
      description:
        "Trusted by businesses across the globe for premium website development services in Pakistan—delivering world-class quality at highly competitive rates.",
    },
    {
      icon: "/img/builder/195b8003cedf17b2.svg",
      title: "Responsive & Scalable Designs",
      description:
        "Built to adapt: mobile-first layouts, future-proof architectures, and integrations with your favorite platforms (e-commerce, CRM, payment gateways).",
    },
    {
      icon: "/img/builder/b027270d96b99ef2.svg",
      title: "Secure, Performance-Optimized Websites",
      description:
        "Every site is Optimized for speed and built to resist cyber threats—your site will load fast, stay secure, and pass Core Web Vitals before launch so visitors stay longer and convert faster.",
    },
    {
      icon: "/img/builder/f1f7e28103b63be1.svg",
      title: "Elevate with SEO",
      description:
        "Want to boost organic traffic? Your website won't just look good—it'll rank better with our SEO Services. See how we can drive qualified leads to your new site",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center mt-[80px] px-[60px] py-16 max-md:mt-10 max-md:px-5 relative overflow-hidden gradient-subtle">
      <Zap className="absolute top-10 right-10 w-8 h-8 text-brand-secondary/20 animate-pulse-slow" />
      <Shield className="absolute bottom-20 left-10 w-10 h-10 text-brand-primary/20 animate-float" />

      <div className="text-center mb-4">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
          Why Choose Us
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          We Don't Just Deliver Websites
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            We Deliver Business Growth Engines
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 border border-neutral-border hover:border-brand-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500"></div>

            {/* Icon */}
            <img loading="lazy" decoding="async"
              src={feature.icon}
              alt=""
              className="w-[70px] h-[70px] object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            />

            <h3 className="card-title text-center">
              {feature.title}
            </h3>

            <p className="card-description text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
