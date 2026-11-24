import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";

export default function HomePageFAQs() {

  const faqs = [
    {
      question:
        "What IT services does BrainTEL provide in Pakistan?",
      answer:"BrainTEL provides internet services, managed IT services, IT infrastructure setup, cloud solutions, SMS services, telephone services, and enterprise software solutions across Pakistan.",
    },
    {
      question: "Does BrainTEL provide internet services in Lahore?",
      answer:"Yes, BrainTEL offers business-grade and home internet services in Lahore under the brand of BrainNET Fiber with dedicated bandwidth options, SLA-based uptime, and 24/7 technical support.",
    },
    {
      question: "Why choose BrainTEL over other IT companies in Pakistan?",
      answer:"BrainTEL combines decades of experience, strong infrastructure, high uptime reliability, and professional IT support for businesses across multiple industries in Pakistan and globally as well.",
    },
    {
      question: "What are managed IT services in Pakistan?",
      answer:"Managed IT services involve outsourcing your company’s IT operations to a professional IT services company in Pakistan to ensure continuous monitoring, support, and maintenance.",
    },
    {
      question: "Does BrainTEL support small and medium businesses?",
      answer:"Yes, BrainTEL provides scalable IT solutions in Pakistan designed for startups, SMEs, and large enterprises with specializations across multiple industries of Pakistan.",
    }
  ];

  return (
    <>
      {/* Enhanced FAQ Section */}
      <section className="py-16 px-4 md:px-6 bg-m3-surface-container">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-10">
            <Badge className="mx-auto bg-m3-tertiary/10 text-m3-tertiary border-m3-tertiary/20">
              Common Questions
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-m3-on-surface pb-2">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-m3-outline-variant rounded-2xl px-8 py-1 bg-m3-surface shadow-sm hover:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="m3-title-medium text-m3-on-surface hover:text-m3-primary hover:no-underline py-4 group">
                  <div className="flex items-center font-lato space-x-4 font-bold">
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-lato text-start m3-body-medium text-neutral-medium pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

