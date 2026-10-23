import AnimateOnScroll from '@/components/sms/animations/AnimateOnScroll';

const WhyTrusted = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
       
        <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-8">
          <p className="text-primary font-heading font-semibold text-xl md:text-2xl mb-2">
            Why It Matters
          </p>
          <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl">Pakistan's Most Trusted Branded SMS Provider</h2>
        </div>
      </AnimateOnScroll>

        <p className="text-lg text-muted-foreground font-lato leading-relaxed px-2 md:px-20">
          When Jazz sends you a balance top-up alert, you see <strong className="text-muted-foreground">"Jazz"</strong> — not a random number.
          That's branded SMS. Your customer sees your company name in the sender field, not a random number.
        </p>
        <div className="mt-8 bg-muted border-l-4 border-primary p-5 rounded-r-lg text-left max-w-2xl mx-auto">
          <div className="text-xs text-brand uppercase tracking-wider font-semibold mb-2">Sender: BSMS</div>
          <div className="text-foreground">"We have dispatched your order. Track here: xyz.pk/track"</div>
        </div>
        <p className="mt-8 text-lg text-muted-foreground font-lato leading-relaxed px-2 md:px-20">
          That one line builds trust, drives action, and gets read.In fact, people open <strong className="text-muted-foreground">98% of SMS messages within 3 minutes</strong>.
          Every 
            <a
                href="/industry-solutions/financial-services"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
          {" "} bank, {" "}
          </a>
          e-commerce store, 
           <a
                href="/industry-solutions/health-care"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
          {" "} hospital, {" "}
          </a>
          and school in Pakistan uses branded SMS.
        </p>
      </div>
    </section>
  );
}

export default WhyTrusted;