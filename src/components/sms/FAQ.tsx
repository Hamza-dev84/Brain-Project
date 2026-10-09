import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is an SMS Service Provider in Pakistan?",
      answer:
        "An SMS service provider in Pakistan offers businesses the ability to send bulk SMS, branded messages, OTPs, alerts, and promotions directly to customer mobile phones through PTA-approved routes.",
    },
    {
      question: "How do SMS services in Pakistan ensure delivery?",
      answer:
        "We are hosted on local data centers, use direct PTA-approved telecom routes, and maintain multiple upstreams for redundancy — because we are also a licensed Internet Service Provider.",
    },
    {
      question: "Can I integrate SMS services with my website or app?",
      answer:
        "Yes. We offer RESTful APIs and plugins for websites (PHP, .NET, WordPress), CRMs and ERPs, and mobile apps (iOS, Android).",
    },
    {
      question: "How do I choose the best SMS service provider in Pakistan?",
      answer:
        "Look for PTA compliance and direct telecom routes, branded masking options, scalable pricing, reliable APIs and delivery reports, and 24/7 enterprise support.",
    },
  ];

  return (
    <section
      aria-labelledby="faq-heading"
      className="flex flex-col items-center gap-10 w-full px-[60px] max-md:px-10 max-sm:px-5"
    >
      <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2
            id="faq-heading"
            className="text-primary text-center text-[32px] font-bold capitalize max-sm:text-2xl max-sm:leading-8"
          >
            Frequently Asked Questions
          </h2>
        </div>
      </AnimateOnScroll>

      <div className="w-full max-w-4xl mx-auto">
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-primary/30 rounded-xl px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left font-heading font-bold text-lg text-primary py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground font-body text-base leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
