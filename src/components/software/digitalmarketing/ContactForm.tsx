import React from "react";
import { Button } from "@/components/software/ui/button";
import { Input } from "@/components/software/ui/input";
import { Textarea } from "@/components/software/ui/textarea";
import { ScrollReveal } from "@/components/software/animations/ScrollReveal";

export const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
              Digital Marketing Agency Lahore
            </div>
            <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              Start Growing with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
                BrainSOFT
              </span>
            </h2>
            <p className="font-lato text-lg text-neutral-medium">
              If your business wants better visibility online, BrainSOFT can help. Contact us today to speak with a digital marketing consultant in Lahore and discuss your business goals.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <form className="space-y-6 bg-white rounded-2xl p-8 shadow-lg border border-neutral-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-lato font-semibold text-sm text-brand-dark mb-2 block">
                  Name
                </label>
                <Input placeholder="Your full name" />
              </div>
              <div>
                <label className="font-lato font-semibold text-sm text-brand-dark mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label className="font-lato font-semibold text-sm text-brand-dark mb-2 block">
                Company
              </label>
              <Input placeholder="Your company name" />
            </div>

            <div>
              <label className="font-lato font-semibold text-sm text-brand-dark mb-2 block">
                Phone
              </label>
              <Input type="tel" placeholder="+92 300 1234567" />
            </div>

            <div>
              <label className="font-lato font-semibold text-sm text-brand-dark mb-2 block">
                Message
              </label>
              <Textarea rows={6} placeholder="Tell us about your marketing goals..." />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full h-14 text-lg"
            >
              Contact BrainSOFT Today
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};
