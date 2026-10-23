import React from "react";
import {
  BarChart3,
  CheckCircle2,
  Cloud,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const CloudERP = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-10 rounded-3xl border border-neutral-border bg-white shadow-sm lg:grid-cols-2 p-6 lg:p-14">
        {/* Left Content */}
        <div>
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            Cloud ERP
          </div>

           <h2 className="font-raleway py-2 text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            Cloud-Based ERP{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            Built for Pakistan
          </span>
        </h2>

          <p className="mt-4 text-neutral-text text-lg">
            No servers. No heavy IT costs. Our cloud ERP offers secure, always-on access. You can use it from any device—laptop, tablet, or mobile—anywhere in Pakistan.
          </p>

          {/* Features list */}
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "No upfront hardware investment",
              "Daily automated backups",
              "Automatic software updates",
              "Monthly subscription — cancel anytime",
            ].map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 text-sm text-brand-dark"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-secondary" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-secondary/20 via-transparent to-brand-primary/10 blur-2xl" />

          <div className="relative grid grid-cols-2 gap-4">
            {[
              { icon: Cloud, label: "Bank-grade Security" },
              { icon: BarChart3, label: "Live Dashboards" },
              { icon: ShieldCheck, label: "Daily Backups" },
              { icon: Sparkles, label: "Auto Updates" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-neutral-border bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-secondary/10 text-brand-secondary">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="mt-3 text-sm font-semibold text-brand-dark">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudERP;
