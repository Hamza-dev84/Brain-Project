import { Mail, Phone } from "lucide-react";
import WhatsappIcon from "@/assets/sms/whatsapp-icon.webp";
import WhatsAppButton from "@/components/sms/common/WhatsAppButton";

const CTA = () => {
  return (
    <section id="cta" className="py-10 md:py-20 bg-primary/90 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold">
          Start Sending Branded SMS Today
        </h2>
        <p className="mt-5 text-lg opacity-90 max-w-2xl mx-auto">
          Stop sending messages from unknown numbers. Start building brand trust
          with every single SMS.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">

  {/* View Pricing */}
  <a
    href="#pricing"
    className="w-full sm:w-44 flex items-center justify-center border-2 border-white/40 text-white py-3.5 rounded-lg font-semibold hover:bg-white/10 transition"
  >
    View Pricing
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/923276222888"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="w-full sm:w-44 flex items-center justify-center gap-2 py-3.5 rounded-lg border-2 border-white/40 hover:opacity-90 hover:scale-105 transition-all duration-300"
  >
    <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">
      Talk To Sales
    </span>

    <img
      src={WhatsappIcon}
      alt="WhatsApp"
      className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
    />
  </a>

</div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm opacity-90">
          <span className="flex items-center gap-2">
            <a
              href="tel:+924232100000"
              className="hover:underline text-white text-sm inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-white" />
              042-32100000
            </a>
          </span>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=support@brain.net.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:underline"
          >
            <Mail className="w-4 h-4 text-white" />
            support@brain.net.pk
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-wider opacity-80">
          <span>PTA Approved</span>
          <span>·</span>
          <span>Direct Carrier Routes</span>
          <span>·</span>
          <span>All Networks Covered</span>
          <span>·</span>
          <span>24/7 Support</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
