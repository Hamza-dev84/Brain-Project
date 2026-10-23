import React from "react";
import { Factory, HeartPulse, Home, Layers, Store, Truck } from "lucide-react";

const WhyUs = () => {
  const whyUs = [
    {
      title: "Local Expertise",
      desc: "Our team understands Pakistani business practices, tax laws, and industry needs inside out.",
    },
    {
      title: "Fast Go-Live",
      desc: "Most Clients are live within a defined planned time as per their required time with a structured onboarding process.",
    },
    {
      title: "Pakistan-Based Support",
      desc: "Dedicated support via phone, WhatsApp, and on-site visits when needed.",
    },
    {
      title: "Scalable Platform",
      desc: "Start small, add users and modules as your business grows — no system switch needed.",
    },
  ];

  return (
    <section
      className="border-y border-neutral-border bg-brand-muted/40"
      style={{ backgroundColor: "#F3F2F6" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div>
            <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
              Why Choose Us
            </div>

            <h2 className="font-raleway py-2 text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
              Built by a team that knows{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
                Pakistani Businesses
              </span>
            </h2>

            <p className="mt-4 text-neutral-text text-lg">
              Many Businesses Across Pakistan trust us with their accounting,
              inventory, HR and production. Here's why.
            </p>
          </div>

          {/* Right grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <div
                key={w.title}
                className="rounded-2xl border border-neutral-border bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                {/* Number badge */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-secondary text-white text-sm font-bold">
                  0{i + 1}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base font-semibold text-brand-dark">
                  {w.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-neutral-text">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
