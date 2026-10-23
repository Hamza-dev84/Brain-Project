import {
  Clock,
  Headphones,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const reasons = [
  {
    icon: Network,
    title: "Direct Carrier Connections",
    desc: "We connect directly to Jazz, Telenor, Zong, and Ufone. There are no middlemen or third-party routes. Your messages go through the highest priority route and arrive fast.",
  },
  {
    icon: ShieldCheck,
    title: "99.9% Uptime Guarantee",
    desc: "Our SMS gateway runs on enterprise-grade infrastructure with full redundancy. Your campaigns never go down.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Delivery Reports",
    desc: "See the status of every single SMS — delivered, pending, or failed — in real time. Complete transparency, no guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "PTA Approved & Legally Compliant",
    desc: "Every sender ID and campaign is verified in line with PTA regulations. You are 100% legally protected.",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    desc: "WhatsApp, phone, email, or live chat — available 7 days a week, including public holidays. If there is a problem, we fix it fast.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why" className="py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-8">
            <p className="text-primary font-heading font-semibold text-xl md:text-2xl mb-2">
              Built To Win
            </p>
            <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl">
              Why Choose Us?
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 p-6 rounded-2xl bg-white border border-border hover:border-brand transition"
            >
              <div
                className="shrink-0 w-12 h-12 rounded-xl grid place-items-center bg-primary/10"
              >
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1.5">
                  {r.title}
                </h3>
                <p className="text-sm text-primary">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
