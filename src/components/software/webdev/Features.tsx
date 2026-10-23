import React from "react";
import { Zap, Shield } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/022988a51d9de0198fa17ed715ff14217ac5fa5d?placeholderIfAbsent=true",
      title: "Clear Development Process",
      description:
        "We follow a step-by-step process from planning to launch. You stay updated at every stage, so your website project stays clear, organized, and on track.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/74d7dd0401c1e48076adc25172dfb666d772e9a9?placeholderIfAbsent=true",
      title: "Dedicated Project Support",
      description:
        "You work with one point of contact throughout the project. This keeps communication simple, fast, and easy for feedback, updates, and approvals.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/26bd28d25696ccbd37b5201cb2eae0bcb6cbdaff?placeholderIfAbsent=true",
      title: "Pakistan Market Understanding",
      description:
        "We know how local businesses sell online. We build websites that match the needs of brands in Lahore, Karachi, Islamabad, and other cities across Pakistan.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/195b8003cedf17b20edb3471287da2a600dcfece?placeholderIfAbsent=true",
      title: "Responsive Custom Web Design",
      description:
        "Your website is designed to work well on mobile, tablet, and desktop. Every layout is built to look clean, load properly, and support user action.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/b027270d96b99ef21ee79220bbe2977e21827c57?placeholderIfAbsent=true",
      title: "Fast and Secure Websites",
      description:
        "We build websites with clean code, speed-focused structure, and strong security practices. That means better performance, safer data handling, and a smoother user experience.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/f1f7e28103b63be1e019e9f636a08509d2354036?placeholderIfAbsent=true",
      title: "Built for SEO Growth",
      description:
        "Our websites are made with SEO in mind from the start. We structure pages properly so your business has a better base for rankings, traffic, and conversions.",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center pt-24 px-[60px] max-md:mt-10 max-md:px-5 relative overflow-hidden gradient-subtle">
      <Zap className="absolute top-10 right-10 w-8 h-8 text-brand-secondary/20 animate-pulse-slow" />
      <Shield className="absolute bottom-20 left-10 w-10 h-10 text-brand-primary/20 animate-float" />

      <div className="text-center">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-2">
          Why Choose Us
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-4">
          We Build Websites {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            That Help Businesses Grow
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-7xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 border border-neutral-border hover:border-brand-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500"></div>

            {/* Icon */}
            <img
              src={feature.icon}
              alt=""
              className="w-[70px] h-[70px] object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            />

            <h3 className="font-bold text-[24px] text-center font-['Raleway',_sans-serif]">
              {feature.title}
            </h3>

            <p className="software-card-description text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
