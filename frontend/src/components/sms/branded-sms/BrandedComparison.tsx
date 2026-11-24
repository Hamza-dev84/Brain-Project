import React from "react";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";

const rows = [
  {
    feature: "Sender ID",
    branded: "Custom business name (registered mask)",
    nonBranded: "Generic or shared number",
  },
  {
    feature: "Best For",
    branded: "OTPs, alerts, and transactional updates",
    nonBranded: "Marketing and promotional campaigns",
  },
  {
    feature: "PTA Compliance",
    branded: "Requires registered brand mask (strict compliance)",
    nonBranded: "Allowed but must follow anti-spam and consent rules",
  },
  {
    feature: "Delivery Trust",
    branded: "High — verified sender name shown",
    nonBranded: "Medium — may appear as unknown number",
  },
  {
    feature: "Message Type",
    branded: "Informational / transactional",
    nonBranded: "Promotional / bulk marketing",
  },
  { feature: "Cost", branded: "Slightly higher", nonBranded: "Lower per SMS" },
];

const BrandedComparison: React.FC = () => {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-20">
      <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-2xl md:text-3xl mb-2">
            A Quick Comparison
          </p>
          <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl">
            Branded SMS VS Non-Branded SMS
          </h2>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="scale-in" delay={0.2}>
        <div className="overflow-x-auto">
          <div className="min-w-[600px] grid grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="h-16 flex items-center justify-center font-heading font-bold text-2xl text-primary">
                Feature
              </div>
              <div className="space-y-3">
                {rows.map((row) => (
                  <div
                    key={row.feature}
                    className="h-16 flex items-center justify-center font-heading font-bold text-lg text-primary bg-muted rounded-lg"
                  >
                    {row.feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-16 flex items-center justify-center bg-primary text-primary-foreground font-heading font-bold text-xl rounded-t-2xl">
                Branded SMS
              </div>
              <div className="space-y-3">
                {rows.map((row) => (
                  <div
                    key={row.feature}
                    className="h-16 flex items-center justify-center text-center font-body text-base text-foreground border-2 border-primary/30 rounded-lg px-4"
                  >
                    {row.branded}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-16 flex items-center justify-center bg-primary text-primary-foreground font-heading font-bold text-xl rounded-t-2xl">
                Non-Branded SMS
              </div>
              <div className="space-y-3">
                {rows.map((row) => (
                  <div
                    key={row.feature}
                    className="h-16 flex items-center justify-center text-center font-body text-base text-foreground border-2 border-primary/30 rounded-lg px-4"
                  >
                    {row.nonBranded}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={0.3}>
        <p className="text-center text-foreground font-body text-base md:text-lg leading-relaxed mt-12 max-w-3xl mx-auto">
          Need both? BSMS offers complete PTA - complaint{" "}
          <span className="font-bold text-primary">Branded and Non-Branded SMS</span> Solutions.
        </p>
      </AnimateOnScroll>
    </section>
  );
};

export default BrandedComparison;
