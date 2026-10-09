import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";

export const brandedFaqs = [
  {
    question: "What is Branded SMS and how does it differ from regular SMS?",
    answer:
      "Branded SMS displays your company name as the sender ID instead of a random number. This builds instant trust and recognition with your customers, making your messages more likely to be read and acted upon.",
  },
  {
    question: "How long does it take to get PTA approval for Branded SMS?",
    answer:
      "PTA approval typically takes 7-14 business days. We handle the entire registration process for you, including documentation and follow-ups with regulatory authorities.",
  },
  {
    question: "What are the costs associated with Branded SMS in Pakistan?",
    answer:
      "Costs vary based on volume and service requirements. Contact us for a customized quote based on your specific needs and monthly SMS volume.",
  },
  {
    question: "Can I use Branded SMS for promotional messages?",
    answer:
      "Yes, but you must comply with PTA's DND regulations. Promotional messages can only be sent to users who have opted in to receive marketing communications.",
  },
];

const BrandedFAQ: React.FC = () => {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-20">
      <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
      </AnimateOnScroll>
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
          {brandedFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-primary/30 rounded-xl px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left font-heading font-bold text-lg text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground font-body text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default BrandedFAQ;
