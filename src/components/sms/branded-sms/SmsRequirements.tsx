import {
  Building2,
  FileText,
  FileBadge,
  Stamp,
  CalendarClock,
  AlertTriangle,
} from "lucide-react";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const requirements = [
  {
    icon: Building2,
    title: "Registered Company",
    desc: "The company must be legally registered in Pakistan.",
  },
  {
    icon: FileBadge,
    title: "Valid NTN Number",
    desc: "A valid National Tax Number (NTN) is required.",
  },
  {
    icon: FileText,
    title: "Official Letterhead",
    desc: "The company must provide documents on its official letterhead.",
  },
  {
    icon: Stamp,
    title: "Authorized Company Stamp",
    desc: "All required documents must include the company's authorized stamp.",
  },
  {
    icon: CalendarClock,
    title: "Mask Approval Timeline",
    desc: "The branded SMS mask approval process typically takes around 15 days.",
  },
];

const SmsRequirements = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-semibold text-xl md:text-2xl mb-2">
              Before You Apply
            </p>

            <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl">
              Branded SMS Registration Requirements
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-primary/80">
              The following requirements must be fulfilled before proceeding
              with your Branded SMS Sender ID (Mask) application.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {requirements.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-white p-6 hover:border-brand transition"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-2 font-semibold text-sm">
                {item.title}
              </h3>

              <p className="text-sm text-primary">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-5xl mx-auto rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5 md:p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600 flex-shrink-0 -mt-1" />

            <div>
              <h4 className="text-sm sm:text-base font-semibold text-amber-900">
                Important
              </h4>

              <p className="mt-1 text-xs sm:text-sm md:text-base leading-relaxed text-amber-800">
                The Sender ID (Mask) approval process is handled by telecom
                operators and regulatory authorities.<br/> Approval timelines may
                vary, but the typical processing time is approximately{" "}
                <strong>15 days</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmsRequirements;
