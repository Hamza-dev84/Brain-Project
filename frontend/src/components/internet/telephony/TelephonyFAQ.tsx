import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";

export interface FaqEntry {
  question: string;
  answer: string;
}

interface TelephonyFAQProps {
  id: string;
  title: ReactNode;
  kicker?: string;
  faqs: FaqEntry[];
}

export const TelephonyFAQ = ({ id, title, kicker, faqs }: TelephonyFAQProps) => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <SectionHeader eyebrow="FAQs" title={title} kicker={kicker} />

      <ScrollReveal>
        <div className="max-w-4xl mx-auto mt-14">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`${id}-faq-${index}`}
                className="bn-tile border-0 overflow-hidden px-2"
              >
                <AccordionTrigger className="px-4 py-5 text-left font-display font-semibold text-[hsl(var(--bn-ink))] hover:text-[hsl(var(--bn-violet-soft))] hover:no-underline">
                  <h3 className="text-base md:text-lg">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 font-dm text-sm md:text-base text-[hsl(var(--bn-ink-soft))] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TelephonyFAQ;
