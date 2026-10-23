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
    question: "What is the difference between branded SMS and normal SMS?",
    answer:
      'Normal SMS comes from random mobile numbers. Customers often ignore or distrust these unknown numbers. Branded SMS comes from your company name, like "MyShop" or "BankAlert." This makes it easy to recognize and builds trust.',
  },
  {
    question: "Is branded SMS legal in Pakistan?",
    answer:
      "Yes — it is subject to complete regulation by the PTA. You need to register and get approval for your sender ID (brand name) first. Only then can you start sending.",
  },
  {
    question: "How long does sender ID approval take?",
    answer:
      "We expect a duration of 24 to 72 hours through our fast-track process.",
  },
  {
    question: "Does Branded SMS work on all networks in Pakistan?",
    answer:
      "Yes — Jazz (Warid), Telenor, Zong, Ufone, and SCOM are all fully covered.",
  },
  {
    question: "What is the SMS character limit?",
    answer:
      "A single SMS supports 160 characters. If messages exceed this length, they are sent as multi-part SMSs. This may use 2 or more SMS credits.",
  },
  {
    question: "Is an SMS API available?",
    answer:
      "Yes — our REST-based SMS API supports PHP, Python, Node.js, Java, and .NET. It's free with every account. It includes full documentation and a sandbox environment.",
  },
  {
    question: "What is the smallest package?",
    answer:
      "The Starter package starts at Rs. 1,500 for 1,000 SMS — ideal for small businesses trying the service for the first time.",
  },
  {
    question: "Can I schedule SMS campaigns?",
    answer:
      "Sure! Just set your campaign, pick a delivery date and time, and the system will take care of the rest for you.",
  },
  {
    question: "Is a free trial available?",
    answer:
      "Register now to get free test credits. You can use them to check delivery quality and speed before you buy.",
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
