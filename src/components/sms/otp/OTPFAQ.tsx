import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const OTPFAQ = () => {
  const faqData = [
    {
      question: "What is OTP SMS service in Pakistan?",
      answer:
        "OTP SMS service sends a one-time password to a user’s mobile number for verification. Businesses use it for secure login, signup confirmation, and transaction authentication.",
    },
    {
      question: "Which businesses need OTP SMS services?",
      answer:
        "Banks, fintech companies, e-commerce stores, healthcare platforms, and apps use OTP verification systems. This helps protect user accounts.",
    },
    {
      question: "How does OTP SMS verification work?",
      answer:
        "When a user enters their mobile number, the system sends a Pakistan OTP code to that number. The user then enters the received code to verify their identity.",
    },
    {
      question: "How secure is BSMS OTP service?",
      answer:
        "BSMS uses secure telecom routes and verification protocols. This ensures reliable SMS OTP verification and protects user accounts from unauthorized access.",
    },
    {
      question: "How can I start OTP SMS service for my business in Pakistan?",
      answer:
        "Create an account with BSMS. Then, integrate the OTP SMS API. You can start sending OTP codes to users right away.",
    },
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqData.map((faq, index) => (
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
      </div>
    </section>
  );
};

export default OTPFAQ;
