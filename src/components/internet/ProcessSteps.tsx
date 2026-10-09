import { Badge } from "@/components/ui/badge";

const steps = [
  { number: "1", title: "Check Coverage", description: "Enter your address to verify if BrainNET Fiber is available in your area" },
  { number: "2", title: "Survey Location", description: "Our technical team visits your premises for a comprehensive site survey" },
  { number: "3", title: "Receive Proposal", description: "Get a customized proposal with recommended packages and pricing" },
  { number: "4", title: "Installation", description: "Our certified engineers install and configure your business internet connection" },
];

export const ProcessSteps = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-secondary relative">
      <div className="absolute inset-0 network-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
            <img decoding="async"
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800"
              alt="BrainNET engineers installing a business fiber connection"
              loading="lazy"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-raleway font-bold text-white mb-4">How It Works</h2>
              <p className="text-xl text-white/80 font-lato">Four simple steps to get your business connected</p>
            </div>

            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-accent/50 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <Badge className="bg-accent/20 text-accent border-accent/30 mb-3">STEP {step.number}</Badge>
                  <h3 className="text-2xl font-raleway font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/80 font-lato leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
