import { Check } from "lucide-react";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const WhatIsBranded = () => {
  return (
    <section className="py-6 bg-hero-bg">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-8">
            <p className="text-primary font-heading font-semibold text-xl md:text-2xl mb-2">
              Definition
            </p>
            <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl">
              What Is Branded SMS?
            </h2>
            <p className="mt-3 text-primary">
              Also known as Masked SMS or Alphanumeric Sender ID
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-border">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Normal SMS
            </div>
            <div className="font-mono text-sm bg-muted rounded-lg p-4 mb-3">
              +92 300 1234567
            </div>
            <div className="text-foreground">"Our sale has started"</div>
            <div className="mt-4 text-sm text-muted-foreground">
              Looks like spam. Often ignored.
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border-2 border-brand shadow-lg shadow-brand/10">
            <div className="text-xs uppercase tracking-wider text-brand mb-3 font-semibold">
              Branded SMS
            </div>
            <div className="font-mono text-sm bg-brand-soft rounded-lg p-4 mb-3 text-muted-foreground font-bold">
              MyShop
            </div>
            <div className="text-foreground">
              "Our sale has started — 50% off on all products"
            </div>
            <div className="mt-4 text-sm text-muted-foreground font-medium flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Trusted. Opened. Acted on.
            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-muted-foreground max-w-3xl mx-auto">
          A2P (Application-to-Person) messaging fully approved by the Pakistan
          Telecommunication Authority (PTA). Works across{" "}
          <strong className="text-muted-foreground">
            Jazz, Telenor, Zong, Ufone, and SCOM
          </strong>
          .
        </p>
      </div>
    </section>
  );
};

export default WhatIsBranded;
