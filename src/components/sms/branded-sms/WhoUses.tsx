import {
  Building2,
  Check,
  GraduationCap,
  HomeIcon,
  Landmark,
  Radio,
  ShoppingBag,
  Stethoscope,
  Store,
} from "lucide-react";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const industries = [
  {
    icon: Landmark,
    title: "Banking & Finance",
    items: ["Account alerts", "OTP verification", "Transaction notifications"],
    note: "HBL, Meezan Bank, UBL",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    items: [
      "Order confirmations",
      "Dispatch alerts",
      "COD verification",
      "Return updates",
    ],
    note: "WooCommerce, Shopify",
  },
  {
    icon: Stethoscope,
    title: "Hospitals & Clinics",
    items: [
      "Appointment reminders",
      "Lab result notifications",
      "Follow-up messages",
    ],
    note: "Without delay",
  },
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    items: ["Fees & exam schedules", "Results", "Emergency alerts"],
    note: "Parents & students",
  },
  {
    icon: HomeIcon,
    title: "Real Estate",
    items: [
      "Property availability",
      "Visit confirmations",
      "Payment reminders",
    ],
    note: "Prospects & clients",
  },
  {
    icon: Store,
    title: "Retail & Restaurants",
    items: ["Flash sales", "Daily deals", "Loyalty updates"],
    note: "Registered customers",
  },
  {
    icon: Radio,
    title: "ISPs & Telecom",
    items: ["Service alerts", "Bill reminders", "Renewal notifications"],
    note: "At scale",
  },
  {
    icon: Building2,
    title: "Government & NGOs",
    items: ["Awareness campaigns", "Citizen notifications", "Mass outreach"],
    note: "Reaching millions",
  },
];

const WhoUses = () => {
  return (
    <section className="py-6 md:py-12 bg-hero-bg">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-8">
            <p className="text-primary font-heading font-semibold text-xl md:text-2xl mb-4">
              Industries
            </p>
            <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl">
              Who Uses Branded SMS in Pakistan?
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((i) => (
            <div
              key={i.title}
              className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:border-brand transition"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 grid place-items-center mb-4">
                <i.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-3">{i.title}</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {i.items.map((it) => (
                  <li key={it} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-brand mt-1 shrink-0" />{" "}
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-border text-xs text-sm font-medium">
                {i.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoUses;
