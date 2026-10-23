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


const APIHowToSendSMS = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" aria-labelledby="how-to-send-sms">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="how-to-send-sms" className="text-[#145265] text-4xl md:text-5xl font-bold font-raleway mb-3">
            How to Send SMS
          </h2>
          <h3 className="text-[#145265] text-2xl md:text-3xl font-semibold font-raleway">
            with BSMS's API
          </h3>
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative">
          {/* Connecting arrows */}
          {[0, 1, 2].map((i) => (
            <div key={i} className="absolute top-1/3 z-0" style={{ left: `${(i + 1) * 25 - 4}%` }}>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#145265] to-[#00CFE8]"></div>
                <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-[#00CFE8]"></div>
              </div>
            </div>
          ))}

          {steps.map((step, index) => (
            <article
              key={index}
              className="group relative animate-fade-in z-10"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#00CFE8]">
                {/* Step number badge */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#145265] to-[#0a3d4a] rounded-full flex items-center justify-center text-white font-bold font-raleway text-lg shadow-lg mb-4 mx-auto">
                  {step.number}
                </div>

                {/* Icon with unified gradient styling */}
                <div className="mb-4 flex justify-center">
                  <IconContainer
                    icon={step.icon}
                    size="medium"
                    className="group-hover:scale-110"
                  />
                </div>

                <h4 className="text-[#145265] text-lg font-bold font-raleway mb-3 text-center">
                  {step.title}
                </h4>

                <p className="text-gray-600 text-sm font-lato leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile/Tablet: Vertical flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <article
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                  {/* Step number badge */}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#145265] to-[#0a3d4a] rounded-full flex items-center justify-center text-white font-bold font-raleway text-lg shadow-lg mb-4 mx-auto">
                    {step.number}
                  </div>

                  {/* Icon with unified gradient styling */}
                  <div className="mb-4 flex justify-center">
                    <IconContainer
                      icon={step.icon}
                      size="medium"
                    />
                  </div>

                  <h4 className="text-[#145265] text-lg font-bold font-raleway mb-3 text-center">
                    {step.title}
                  </h4>

                  <p className="text-gray-600 text-sm font-lato leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </article>

              {/* Down arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#145265] to-[#00CFE8]"></div>
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
