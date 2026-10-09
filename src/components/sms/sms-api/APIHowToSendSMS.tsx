import React from "react";
import { Terminal, FileJson, Smartphone, Webhook } from "lucide-react";
import IconContainer from "@/components/sms/common/IconContainer";

const steps = [
  {
    number: "01",
    title: "Send an HTTPS Request",
    description:
      "After signing up on our SMS portal, simply send an HTTPS request through our secure SMS API in Pakistan using your account credentials. This request carries your message, sender details, and recipient information.",
    icon: Terminal,
  },
  {
    number: "02",
    title: "Capture Response",
    description:
      "Once the request is processed, the API will return a success code along with a unique Transaction ID. Keep this ID stored, it acts as your reference for delivery tracking later on.",
    icon: FileJson,
  },
  {
    number: "03",
    title: "Message Delivered",
    description:
      "Your SMS is sent in real time through direct carrier routes, which reaches the recipient's phone almost always instantly.",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "Get DLR",
    description:
      "To confirm delivery, BSMS automatically sends status updates back to your callback URL. Each report is tied to the Transaction ID you saved earlier, which gives you precise visibility into whether your SMS was delivered, pending, or failed.",
    icon: Webhook,
  },
];

const StepCard = ({ step }: { step: (typeof steps)[number] }) => (
  <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-border hover:border-accent h-full">
    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-primary-foreground font-bold font-raleway text-lg shadow-lg mb-4 mx-auto">
      {step.number}
    </div>

    <div className="mb-4 flex justify-center">
      <IconContainer icon={step.icon} size="medium" className="group-hover:scale-110" />
    </div>

    <h4 className="text-primary text-lg font-bold font-raleway mb-3 text-center">{step.title}</h4>

    <p className="text-muted-foreground text-sm font-lato leading-relaxed text-center">
      {step.description}
    </p>
  </div>
);

const APIHowToSendSMS = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b from-background to-muted/40"
      aria-labelledby="how-to-send-sms"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2
            id="how-to-send-sms"
            className="text-primary text-4xl md:text-5xl font-bold font-raleway mb-3"
          >
            How to Send SMS
          </h2>
          <h3 className="text-primary text-2xl md:text-3xl font-semibold font-raleway">
            with BSMS's API
          </h3>
        </div>

        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <article key={step.number} className="group relative z-10">
              <StepCard step={step} />
            </article>
          ))}
        </div>

        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <article className="group">
                <StepCard step={step} />
              </article>

              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default APIHowToSendSMS;
