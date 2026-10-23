import React from "react";
import { Factory, HeartPulse, Home, Layers, Store, Truck } from "lucide-react";

const IndustriesERP = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing ERP Software in Pakistan:",
      desc: "Track production from raw material to finished goods. Supports textile, food, pharmaceutical, plastic, and engineering industries.",
    },
    {
      icon: Truck,
      title: "Trading & Distribution ERP:",
      desc: "Manage large catalogs, credit limits, distributor tiers, and multi-warehouse stock with precision.",
    },
    {
      icon: HeartPulse,
      title: "Hospital & Healthcare ERP:",
      desc: "Patient billing, pharmacy inventory, lab reports, and staff payroll link together for healthcare providers in Pakistan.",
    },
    {
      icon: Home,
      title: "Real Estate & Property ERP:",
      desc: "Manage inventory, bookings, installment plans, and customer accounts for housing societies and developers.",
    },
    {
      icon: Store,
      title: "Retail & POS ERP:",
      desc: "Connect all your outlets with the head office. Manage pricing, promotions, and cashier operations in real time.",
    },
   
  ];

  return (
    <section
      id="industries"
      className="border-y border-neutral-border"
      style={{ backgroundColor: "#F3F2F6" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            Industries
          </div>

           <h2 className="font-raleway py-2 text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
           Industry-Specific{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              ERP Solutions
            </span>
          </h2>

          <p className="mt-4 text-neutral-text text-lg">
            Tailored workflows for the industries that power Pakistan.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 border border-neutral-border hover:border-brand-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500"></div>

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 text-brand-primary group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-brand-dark">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-neutral-text">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesERP;
