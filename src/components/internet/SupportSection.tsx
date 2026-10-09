import React from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import supportPortrait from "@/assets/internet/site/support-portrait.webp";
import { Link } from "@tanstack/react-router";

// const supportOptions = [
//   { icon: MessageCircle, title: "WhatsApp Chat", description: "24/7 Instant Support", color: "text-accent" },
//   { icon: Phone, title: "Call Us", description: "24/7 Call Center", color: "text-accent" },
//   { icon: Mail, title: "Drop a Message", description: "Email Support", color: "text-accent" },
// ];

const supportOptions = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Chat',
    description: '24/7 Instant Support',
    color: 'text-accent',
    link: "https://wa.me/923276222888",
    target: "_blank",
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: '24/7 Call Center',
    color: 'text-accent',
    link: "tel:042111222888",
    target: "_self",
  },
  {
    icon: Mail,
    title: 'Drop a Message',
    description: 'Email Support',
    color: 'text-accent',
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=support@brain.net.pk",
    target: "_blank",
  }
];

const SupportSection = () => {
  return (
    <section className="relative py-16 md:py-20 bn-home overflow-hidden border-t border-[hsl(var(--bn-line)/0.4)]">
      <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-[hsl(var(--bn-red)/0.2)] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-screen-xl mx-auto px-5">
        <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-14 items-center animate-fade-in-up">
          <div className="flex flex-col gap-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-[hsl(var(--bn-red)/0.35)] blur-2xl rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity" />
              <img width={1920} height={1433}
                src={supportPortrait}
                alt="BrainNET support engineer wearing a headset, ready to help 24/7"
                loading="lazy"
                decoding="async"
                className="relative w-full max-w-[420px] aspect-[4/5] object-cover rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
            <div className="flex flex-col items-start gap-3 text-left">
              <span className="bn-eyebrow">Need assistance?</span>
              <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] bn-display">
                We're here for you <span className="bn-display-accent">24/7.</span>
              </h2>
              <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm md:text-base max-w-md">
                Pick the channel that suits you best — our team responds around the clock.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (

                <Link to={option.link} target={option.target}>
                  <div key={index} className="stagger-item group">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center p-5 rounded-2xl cursor-pointer hover-lift hover-glow transition-all duration-300 shadow-xl h-full">
                      <div className="flex justify-center mb-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative bg-accent/10 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                            <Icon className={`w-7 h-7 ${option.color} icon-pulse`} />
                          </div>
                        </div>
                      </div>
                      <div className="text-white font-lato font-bold text-[15px] text-center">{option.title}</div>
                      <div className="text-white/70 font-lato text-[12px] text-center mt-1">{option.description}</div>
                      <div className="mt-3 h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section >
  );
};

export default SupportSection;
