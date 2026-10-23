import React from "react";
import { ArrowRight } from "lucide-react";

const ERPSoftwareCTA = () => {
  return (
    <section id="demo" className="px-4 sm:px-6">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-primary p-6 sm:p-10 md:p-12 lg:p-16 text-white shadow-xl">
        {/* Background decoration */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(50% 60% at 90% 0%, rgba(255,255,255,0.15) 0%, transparent 70%), radial-gradient(50% 60% at 10% 100%, rgba(0,0,0,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative text-center">
          <h2 className="font-raleway text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Get Started?
          </h2>

          <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg text-white/90">
            Stop losing time to manual processes and disconnected systems.
            Join 500+ businesses across Pakistan running smarter with our ERP
            software.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-secondary px-6 sm:px-10 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
            >
              Book Free Demo
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 sm:px-10 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
            >
              Request Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPSoftwareCTA;