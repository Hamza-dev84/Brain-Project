import { Target, BarChart, Lock, Globe } from "lucide-react";

const features = [
  { icon: Target, title: "HD Voice Quality", description: "Crystal clear audio with advanced noise cancellation and echo suppression" },
  { icon: BarChart, title: "Call Analytics", description: "Detailed insights and reports on call patterns, duration, and quality metrics" },
  { icon: Lock, title: "Secure Encryption", description: "Enterprise-grade encryption to protect your business communications" },
  { icon: Globe, title: "Global Coverage", description: "Make and receive calls from anywhere with our worldwide network" },
];

export const VoiceFeatures = () => {
  return (
    <section className="py-20 relative bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-raleway font-bold text-white mb-4">Premium Voice Features</h2>
          <p className="text-xl text-white/70 font-lato max-w-2xl mx-auto">
            Everything you need for seamless business communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[hsl(358,80%,52%)] to-[hsl(358,80%,42%)] rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-raleway font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 font-lato text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VoiceFeatures;
