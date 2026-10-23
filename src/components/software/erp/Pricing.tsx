import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const pricing = [
    {
      size: "Small",
      users: "1–5 users",
      plan: "Core ERP",
      // price: "15,000",
      price: "Custom",
      features: [
        "Accounting & Inventory",
        "FBR-compliant invoices",
        "Email support",
        "Free onboarding",
      ],
      highlight: false,
    },
    {
      size: "Medium",
      users: "5–20 users",
      plan: "Business ERP",
      // price: "35,000",
      price: "Custom",
      features: [
        "All Core modules",
        "HR, Payroll & CRM",
        "Multi-branch control",
        "Priority WhatsApp support",
      ],
      highlight: true,
    },
    {
      size: "Enterprise",
      users: "20+ users",
      plan: "Enterprise ERP",
      price: "Custom",
      features: [
        "Unlimited modules",
        "Manufacturing & POS",
        "Dedicated success manager",
        "On-site implementation",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-2">
          Pricing
        </div>

        <h2 className="font-raleway py-2 text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          ERP Software{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            Price in Pakistan
          </span>
        </h2>

        <p className="mt-4 text-neutral-text text-lg">
          All plans include implementation support, staff training, and local customer service. No hidden fees.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {pricing.map((p) => {
          const highlight = p.highlight;

          return (
            <div
              key={p.size}
              className={`group relative rounded-3xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl overflow-visible
    ${
      highlight
        ? "border-brand-secondary bg-brand-primary text-white"
        : "border-neutral-border bg-white"
    }`}
            >
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-accent transition-all duration-500 group-hover:w-full"></div>

              {/* Badge */}
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="rounded-full bg-brand-secondary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Size */}
              <div className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
                {p.size} · {p.users}
              </div>

              {/* Plan */}
              <h3
                className={`mt-2 text-2xl font-bold ${highlight ? "text-brand-dark text-white" : "text-brand-dark"}`}
              >
                {p.plan}
              </h3>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-neutral-text">
                  {p.price === "Custom" ? "" : "From PKR"}
                </span>

                <span className={`text-4xl font-extrabold ${highlight ? "text-white" : "text-brand-dark"}`}>
                  {p.price}
                </span>

                {p.price !== "Custom" && (
                  <span className="text-sm text-neutral-text">/month</span>
                )}
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-secondary" />
                    <span className="text-neutral-text">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="#demo"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition
              ${
                highlight
                  ? "bg-brand-secondary text-white hover:opacity-90"
                  : "border border-brand-secondary/40 bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary hover:text-white"
              }`}
              >
                {p.price === "Custom" ? "Contact Sales" : "Request Pricing"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
