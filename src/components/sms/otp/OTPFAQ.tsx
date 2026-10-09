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
        "OTP (One-Time Password) service in Pakistan is a secure SMS-based authentication method where businesses send customers a unique password or verification code via SMS to confirm transactions, logins, or sensitive actions.",
    },
    {
      question: "Which businesses need OTP SMS services in Pakistan?",
      answer:
        "Banks, e-commerce platforms, healthcare providers, fintech companies, educational institutions, and any business requiring secure user authentication and transaction verification can benefit from OTP SMS services.",
    },
    {
      question: "How does an OTP SMS service work in Pakistan?",
      answer:
        "When a user attempts to log in or make a transaction, the system generates a unique code and sends it via SMS to their registered mobile number. The user enters this code to complete the verification process, ensuring secure access.",
    },
    {
      question: "Is OTP service in Pakistan secure?",
      answer:
        "Yes, our OTP service uses TLS encryption, direct SS7 carrier links, and is fully compliant with PTA regulations including CTDISR (Cyber-threat Detection and Incident Reporting). We maintain 99.99% uptime with enterprise-grade security.",
    },
    {
      question: "How can I get OTP SMS service for my business in Pakistan?",
      answer:
        "Contact our team through the form above or call our telecom experts. We'll assess your requirements, provide a custom proposal, and help you integrate our OTP SMS service with your existing systems within days.",
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
