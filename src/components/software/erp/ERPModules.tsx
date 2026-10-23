import React from "react";
import {
  BarChart3,
  Building2,
  Cloud,
  Factory,
  Package,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

const ERPModules = () => {
  const modules = [
    {
      icon: Wallet,
      title: "Accounting & Finance",
      desc: [
        "General Ledger",
        "Accounts Payable",
        "Accounts Receivable",
        "Bank Reconciliation",
        "Multi-Currency Support",
        "FBR-Compliant Reporting",
      ],
    },
    {
      icon: Package,
      title: "Inventory & Warehouse",
      desc: "Track stocks in real time at various locations. Manage buy orders, receive goods, scan barcodes, and check stock aging reports.",
    },
    {
      icon: Users,
      title: "Sales & CRM",
      desc: "Customer management, order processing, delivery notes, invoicing, and sales team performance tracking.",
    },
    {
      icon: Factory,
      title: "Manufacturing & Production",
      desc: [
        "Bill of Materials (BOM)",
        "Production Orders",
        "Raw Material Usage",
        "Wastage Tracking",
        "Finished Goods Costing",
      ],
    },
    {
      icon: Users,
      title: "HR & Payroll",
      desc: "Employee records, attendance, leave management, EOBI/PESSI calculations, and automated payslip generation.",
    },
    {
      icon: ShoppingCart,
      title: "Point of Sale (POS)",
      desc: "Fast retail billing synced with your head office inventory in real time. Built for shops, pharmacies, and outlet chains.",
    },
  ];
  return (
    <section
      id="modules"
      className="border-y border-neutral-border"
      style={{ backgroundColor: "#F3F2F6" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            Our Modules
          </div>

          {/* <h2 className="mt-3 text-3xl font-bold text-brand-dark md:text-4xl">
            Powerful <span className="text-brand-secondary">ERP Modules</span>
          </h2> */}

          <h2 className="font-raleway py-2 text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            Powerful{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              ERP Modules
            </span>
          </h2>

          <p className="mt-1 text-neutral-text text-lg">
            Mix and match the modules you need today — add more as you grow.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full">
          {modules.map(({ icon: Icon, title, desc }) => (
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
                  {Array.isArray(desc) ? (
                    <div className="mt-2">
                      {desc.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                          <p className="software-card-description">{item}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="software-card-description mt-2">{desc}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPModules;
