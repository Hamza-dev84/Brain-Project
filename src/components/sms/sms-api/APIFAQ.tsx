import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const apiFaqs = [
   {
      question: "What is an SMS API and how does it work in Pakistan?",
      answer: (
        <>
      An SMS API (Application Programming Interface) allows businesses in Pakistan to connect their applications, websites, or software with an SMS gateway. This enables automated sending and receiving of messages such as 
        <a
                href="/services/sms/otp-service-pakistan"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
      {" "}OTPs,{" "}
      </a>
      alerts, and 
       <a
                href="/services/sms/sms-marketing-pakistan"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
      {" "}marketing campaigns.{" "}
      </a>
      </>
      ),
    },
    {
      question: "How can businesses in Pakistan integrate an SMS API?",
      answer: "It starts with Pakistani licensed SMS Service Providers which provide endpoints using REST API OR HTTP, where SMS provider websites such as ours have a standard way of providing it via their own developer-friendly documentation which includes SDKs, sample code, step-by-step instructions, and more.",
    },
    {
      question: "What are the benefits of using an SMS API for businesses in Pakistan?",
      answer: "Before mentioning all benefits, the most important one for SMS APIs in Pakistan to consider is no doubt that it is mostly in compliance with PTA regulations. Other benefits include SMS workflow automation, higher customer engagement, sustainable scalability for large campaigns. All are important for secure communication.",
    },
    {
      question: "How much does an SMS API cost in Pakistan?",
      answer: "SMS API itself is free to get, but it's the SMS Costs which vary by provider and volume. Pricing is usually based on the number of SMS credits purchased, BSMS provides flexible options ranging from custom built packages, pay as you go, or standard monthly packages. High Volume Bulk SMS rates are more cost-effective.",
    },
    {
      question: "How secure are SMS API'S in Pakistan?",
      answer: "SMS APIs via licensed providers are built to deliver reports, come with advanced encryption, direct carrier connections with major telcos of Pakistan for SMS reliability and security.",
    }

];

const APIFAQ = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b from-background to-muted/40"
      aria-labelledby="faq-section"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2
            id="faq-section"
            className="text-primary text-4xl md:text-5xl font-bold font-raleway mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg font-lato">
            Everything you need to know about our SMS API service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {apiFaqs.map((faq, index) => (
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

export default APIFAQ;
