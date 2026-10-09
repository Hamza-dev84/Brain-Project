import React from "react";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    { title: "SMS Delivery Speed", bsms: "900ms avg", market: "<1s avg" },
    { title: "Uptime SLA", bsms: "Guaranteed 99.99%", market: "less than 99%" },
    { title: "Carrier Routing", bsms: "Direct telco links", market: "Gateway hops" },
    { title: "Compliance", bsms: "Auto-PTA formatting", market: "Manual submissions" },
  ];

  return (
    <section className="container mx-auto px-6 lg:px-12 py-20">
      <div className="text-center mb-16">
        <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl">
          Why BSMS Outperforms Competitors
        </h2>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[600px] grid grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="space-y-4">
            <div className="h-16 flex items-center justify-center font-heading font-bold text-2xl text-primary">
              Feature
            </div>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="h-16 flex items-center justify-center font-heading font-bold text-lg text-primary bg-muted rounded-lg text-center px-3"
                >
                  {feature.title}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-16 flex items-center justify-center bg-primary text-primary-foreground font-heading font-bold text-xl rounded-t-2xl">
              BSMS
            </div>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="h-16 flex items-center justify-center gap-2 font-body text-base text-foreground border-2 border-primary/30 rounded-lg px-4"
                >
                  <Check className="text-green-600 flex-shrink-0" size={20} />
                  <span>{feature.bsms}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-16 flex items-center justify-center bg-primary text-primary-foreground font-heading font-bold text-xl rounded-t-2xl">
              Market Average
            </div>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="h-16 flex items-center justify-center gap-2 font-body text-base text-foreground border-2 border-primary/30 rounded-lg px-4"
                >
                  <X className="text-red-500 flex-shrink-0" size={20} />
                  <span>{feature.market}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
