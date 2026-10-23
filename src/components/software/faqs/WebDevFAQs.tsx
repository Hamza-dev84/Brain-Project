import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { ScrollReveal } from "../animations/ScrollReveal";

import { Badge } from "../ui/badge";

export default function WebDevFAQs() {
  const faqs = [
    {
      question:
        "What do your website development services in Pakistan include?",
      answer:
        "Our website development services in Pakistan cover planning, custom web design, front-end development, back-end setup, CMS development, eCommerce setup, API integration, testing, and launch support.",
    },
    {
      question: "How much is the website development cost in Pakistan?",
      answer:
        "The website development cost in Pakistan depends on the project scope. A simple company website costs less than a custom business portal or eCommerce store with payment and delivery features.",
    },
    {
      question: "Do you offer custom web design for businesses?",
      answer:
        "Yes. We offer custom web design based on your brand, business goals, and target audience. This helps your website look more professional and work better for lead generation or sales.",
    },
    {
      question: "Do you build eCommerce websites in Pakistan?",
      answer:
        "Yes. We build eCommerce websites for businesses that want to sell products online. This includes product pages, categories, cart, checkout, payment gateway setup, and store management features.",
    },
    {
      question:
        "Do you provide website development services in Lahore and Islamabad?",
      answer:
        "Yes. We work with clients in Lahore, Islamabad, Karachi, and other cities across Pakistan, along with overseas clients looking for a reliable website development company in Pakistan.",
    },
    {
      question: "How long does website development take?",
      answer:
        "A small business website may take a few weeks, while a larger custom website or eCommerce platform takes longer depending on pages, features, revisions, and integrations.",
    },
    {
      question: "Will my website be mobile-friendly and SEO-friendly?",
      answer:
        "Yes. We build responsive websites that work across devices and follow proper page structure, performance, and technical basics that support SEO.",
    },
    {
      question: "Why hire a professional web development company in Pakistan?",
      answer:
        "A professional team helps you avoid weak design, broken functionality, poor speed, and hard-to-manage systems. You get a website that is easier to run, safer, and better suited to business growth.",
    },
  ];

  return (
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
                Common Questions
              </div>
              <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                Frequently Asked{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
                  Questions
                </span>
              </h2>
            </div>
          </ScrollReveal>
  
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-neutral-50 rounded-xl border border-neutral-border px-6 data-[state=open]:border-brand-secondary transition-colors"
                >
                  <AccordionTrigger className="font-raleway font-bold text-brand-dark text-left hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-lato text-neutral-medium leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>
    );
}
