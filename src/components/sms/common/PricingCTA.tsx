import React from "react";
import { Link } from "@/lib/router-compat";
import { ArrowRight, DollarSign } from "lucide-react";

const PricingCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-xs">
            <DollarSign className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-raleway text-white mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-lg text-white/90 font-lato mb-8 leading-relaxed">
            Start sending OTP codes to users across Pakistan within minutes. BSMS provides a quick
            <a
              href="/services/sms/otp-service-pakistan"
              className="
    text-[#A3E635]
    hover:text-[#BEF264]
    active:text-[#84CC16]
    transition-colors
  "
            >
              {" "}OTP SMS service in Pakistan.{" "}
            </a>
            It's perfect for apps, websites, fintech platforms, and digital services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services/sms/pricing"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-lato font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg group"
            >
              <span>View Our Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services/sms/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs text-white border-2 border-white px-8 py-4 rounded-lg font-lato font-semibold hover:bg-white/20 transition-all hover:scale-105"
            >
              <span>Contact Sales</span>
            </Link>
          </div>

          <p className="text-white/80 font-lato mt-6 text-sm">
            No credit card required • Start with free credits • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
