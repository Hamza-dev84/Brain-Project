import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01", title: "Check Compatibility",
    // description: "We verify your network infrastructure and bandwidth requirements" 
    description: (
      <>
        We verify your

        <a
          href="/services/internet/business-internet"
          className="
    text-[#FF3333]
    hover:text-[#FF6666]
    active:text-[#CC0000]
    transition-colors
  "
        >
          {" "} network infrastructure and bandwidth requirements {" "}
        </a>

      </>
    )
  },
  { number: "02", title: "Choose Your Plan", description: "Select the perfect voice package that fits your business needs" },
  { number: "03", title: "Setup & Configuration", description: "Our team installs and configures your complete voice system" },
  { number: "04", title: "Go Live", description: "Start making calls with premium quality and reliability" },
];

export const VoiceProcessSteps = () => {
  return (
    <section className="py-20 relative bg-gradient-to-br from-[hsl(242,63%,29%)] to-[hsl(242,55%,20%)] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="glass-card p-8 group hover:scale-105 transition-all duration-300">
              <img decoding="async"
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                alt="Business voice system setup"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(242,55%,20%)]/80 to-transparent rounded-lg pointer-events-none" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-raleway font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-white/70 font-lato mb-12">
              Get started with enterprise voice in four simple steps
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-[hsl(358,80%,52%)] to-[hsl(358,80%,42%)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-raleway font-bold text-lg">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Badge className="bg-[hsl(358,80%,52%)]/20 text-[hsl(358,80%,52%)] border-[hsl(358,80%,52%)]/30 font-raleway text-xs mb-2">
                        STEP {step.number}
                      </Badge>
                      <h3 className="text-xl font-raleway font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-white/70 font-lato text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceProcessSteps;
