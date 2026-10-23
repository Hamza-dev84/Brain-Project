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

export default function ERPSoftwareFAQs() {
  const faqs = [
    {
      question:
        "What is ERP software, and do I need it?",
      answer:
        "ERP integrates your accounting, inventory, HR, and sales into one system. Using separate tools or spreadsheets for these functions? ERP can save you time, cut errors, and provide real-time business data.",
    },
    {
      question: "Which is the best ERP software in Pakistan?",
      answer:
        "The best ERP depends on your industry. Manufacturing businesses need production and BOM modules. Traders need strong inventory and distribution features. Healthcare needs patient and pharmacy management. We help you identify the right fit.",
    },
     {
      question: "What is the ERP software price in Pakistan?",
      answer:
        "Pricing starts from PKR 15,000/month for small businesses. The final cost depends on the number of users and modules required. We provide a detailed written proposal before any commitment.",
    },
     {
      question: "Is cloud-based ERP safe for my business data?",
      answer:
        "Yes. Our cloud ERP uses bank-grade encryption with daily backups. Your data is more secure in the cloud than on a local server with no IT team managing it.",
    },
     {
      question: "How long does ERP implementation take?",
      answer:
        "For small to medium businesses, it usually takes 4 to 8 weeks to install. This includes configuration, data migration, and staff training.",
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
