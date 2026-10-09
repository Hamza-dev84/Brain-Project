import FeatureSection from "@/components/sms/features/FeatureSection";
import { Users, MessageSquare, Send, BarChart3 } from "lucide-react";

const SMSMarketingHowItWorks = () => {
  const steps = [
    {
      icon: Users,
      number: "01",
      title: "Build Your Audience",
      description:
        "Import contacts, segment by demographics, behavior, or location. Target the right people with the right message.",
    },
    {
      icon: MessageSquare,
      number: "02",
      title: "Craft Your Message",
      description:
        "Create personalized messages with dynamic fields. Full Urdu support ensures your message resonates with local audiences.",
    },
    {
      icon: Send,
      number: "03",
      title: "Schedule & Send",
      description:
        "Send instantly or schedule for optimal timing. Bulk send thousands of messages across all Pakistani networks in seconds.",
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Track & Optimize",
      description:
        "Monitor delivery reports, open rates, and conversions in real-time. Refine your strategy with actionable insights.",
    },
  ];

  return (
    <FeatureSection
      title="How SMS Marketing Works"
      description="Launch powerful campaigns in minutes with our intuitive platform designed for Pakistani businesses."
      variant="highlighted"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative bg-card rounded-2xl p-6 border border-border/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
              {step.number}
            </div>

            <div className="mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h3 className="text-xl font-bold font-raleway text-primary mb-2">{step.title}</h3>
            <p className="text-muted-foreground font-lato text-sm leading-relaxed">
              {step.description}
            </p>

            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </FeatureSection>
  );
};

export default SMSMarketingHowItWorks;
