import React from "react";
import {
  BarChart3,
  Building2,
  ReceiptText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const WhyChooseUs = () => {
  const whyERP = [
    {
      icon: BarChart3,
      title: "Real-Time Visibility",
      desc: "Know your sales, stock, and cash position at any moment.",
    },
    {
      icon: ReceiptText,
      title: "FBR Tax Compliance",
      desc: "Automated sales tax invoices and withholding tax reports.",
    },
    {
      icon: Building2,
      title: "Multi-Branch Control",
      desc: "Manage all locations from a single unified dashboard.",
    },
    {
      icon: ShieldCheck,
      title: "Fewer Errors",
      desc: "Eliminate manual data entry across every department.",
    },
    {
      icon: Sparkles,
      title: "Faster Decisions",
      desc: "Live reports replace end-of-month guesswork.",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center px-[60px] py-24 max-md:px-5 relative overflow-hidden gradient-subtle">
      {/* Header */}
      <div className="text-center mb-10 max-w-2xl">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
          Why Choose ERP
        </div>

        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          Why Businesses in Pakistan
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            Choose Our ERP Solution.
          </span>
        </h2>

        <p className="mt-4 text-neutral-text text-lg">
          Pakistani businesses deal with unique challenges. They must manage FBR
          compliance, oversee multi-branch operations, and deal with rupee
          fluctuations. Also, they need to do more with less. We built our ERP
          for this environment.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full">
        {whyERP.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group bg-white rounded-2xl p-6 border border-neutral-border hover:border-brand-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500"></div>

            {/* 2-column layout */}
            <div className="flex gap-4 items-start">
              {/* Left: Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-brand-primary" />
              </div>

              {/* Right: Text */}
              <div>
                <h3 className="software-card-title">{title}</h3>
                <p className="software-card-description mt-2">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;