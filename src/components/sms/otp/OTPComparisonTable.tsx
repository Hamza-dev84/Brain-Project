import React from "react";
import { Check, X } from "lucide-react";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";

const OTPComparisonTable = () => {
  const comparisonData = [
    { category: "Delivery Success Rate", bsms: "99.9%", market: "85-90%" },
    {
      category: "Brand Recognition",
      bsms: "Instant with Registered Name",
      market: "Generic Number Display",
    },
    { category: "Customer Trust", bsms: "High", market: "Low to Medium" },
    { category: "API Integration", bsms: "Full Support", market: "Limited" },
    { category: "Compliance", bsms: "PTA Approved", market: "Variable" },
    { category: "Support", bsms: "24/7 Dedicated", market: "Business Hours Only" },
  ];

  return (
    <section className="container mx-auto px-6 lg:px-12 py-20">
      <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-4">
            Why BSMS Outperforms Competitors
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our enterprise-grade SMS service compares to market alternatives
          </p>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="scale-in" delay={0.2}>
        <div className="overflow-x-auto">
          <div className="min-w-[600px] grid grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="h-16 flex items-center justify-center font-heading font-bold text-2xl text-primary">
                Category
              </div>
              <div className="space-y-3">
                {comparisonData.map((row, index) => (
                  <div
                    key={index}
                    className="h-16 flex items-center justify-center text-center font-heading font-bold text-lg text-primary bg-muted rounded-lg"
                  >
                    {row.category}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-16 flex items-center justify-center bg-primary text-primary-foreground font-heading font-bold text-xl rounded-t-2xl">
                BSMS
              </div>
              <div className="space-y-3">
                {comparisonData.map((row, index) => (
                  <div
                    key={index}
                    className="h-16 flex items-center justify-center gap-2 text-center font-body text-base text-foreground border-2 border-primary/30 rounded-lg px-4"
                  >
                    <Check className="text-green-600 shrink-0" size={20} />
                    <span>{row.bsms}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-16 flex items-center justify-center bg-primary text-primary-foreground font-heading font-bold text-xl rounded-t-2xl">
                Market Average
              </div>
              <div className="space-y-3">
                {comparisonData.map((row, index) => (
                  <div
                    key={index}
                    className="h-16 flex items-center justify-center gap-2 text-center font-body text-base text-foreground border-2 border-primary/30 rounded-lg px-4"
                  >
                    <X className="text-red-500 shrink-0" size={20} />
                    <span>{row.market}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default OTPComparisonTable;
