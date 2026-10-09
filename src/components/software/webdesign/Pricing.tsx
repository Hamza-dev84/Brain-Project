import React from "react";
import { CheckCircle2, X, DollarSign, Clock, Headphones } from "lucide-react";

export const Pricing: React.FC = () => {
  const comparisons = [
    {
      icon: DollarSign,
      category: "Cost",
      brainsoft: "From $1,000",
      western: "From $8,000",
      brainsoftBenefit: "8x More Affordable",
    },
    {
      icon: Headphones,
      category: "Support",
      brainsoft: "3 Months FREE Updates",
      western: "Paid After Launch",
      brainsoftBenefit: "Ongoing Partnership",
    },
    {
      icon: Clock,
      category: "Speed",
      brainsoft: "48-Hour Mockups",
      western: "1-Week Delays",
      brainsoftBenefit: "Lightning Fast Delivery",
    },
  ];

  return (
    <section className="w-full mt-24 px-6 md:px-12 lg:px-16 py-16 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center space-y-4">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide">
            Value Comparison
          </div>
          <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            Affordably Outperform
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Global Competitors
            </span>
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comparisons.map((comparison, index) => {
            const IconComponent = comparison.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-brand-primary/90 to-brand-primary p-6 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10 border-2 border-white/20">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-raleway text-2xl font-bold relative z-10 text-white">
                    {comparison.category}
                  </h3>
                </div>

                {/* Comparison Content */}
                <div className="p-6 space-y-6">
                  {/* BrainSOFT */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-brand-dark font-raleway font-bold text-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>brainSOFT</span>
                    </div>
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                      <p className="font-lato text-brand-dark font-bold text-xl">
                        {comparison.brainsoft}
                      </p>
                      <p className="font-lato text-green-700 text-sm mt-1">
                        {comparison.brainsoftBenefit}
                      </p>
                    </div>
                  </div>

                  {/* Western Agencies */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-neutral-400 font-raleway font-bold text-lg">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>Western Agencies</span>
                    </div>
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                      <p className="font-lato text-neutral-400 font-bold text-xl line-through">
                        {comparison.western}
                      </p>
                      <p className="font-lato text-red-700 text-sm mt-1">
                        Higher Costs, Slower Delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Proposition Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="font-raleway text-3xl md:text-4xl font-bold mb-4 text-white">
            Save up to 80% Without Compromising Quality
          </h3>
          <p className="font-lato text-lg md:text-xl max-w-3xl mx-auto text-white">
            Get Silicon Valley-level design expertise at Pakistan prices. Our
            team delivers the same quality as top Western agencies, but at a
            fraction of the cost.
          </p>
        </div>
      </div>
    </section>
  );
};
