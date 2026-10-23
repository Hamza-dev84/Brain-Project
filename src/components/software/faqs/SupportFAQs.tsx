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

export default function WebAppFAQs() {
  const faqs = [
    {
      question: "What is the best way to contact support?",
      answer:
        "For the fastest assistance, please use the relevant contact option above. This helps route your query to the right specialist immediately.",
    },
    {
      question: "How do I report a bug or technical issue?",
      answer:
        'Please use the "Report a Technical Issue" link. Be ready to provide details like your software version, operating system, and steps to reproduce the issue.',
    },
    {
      question: "Who can I talk to about my bill or invoice?",
      answer:
        'Our billing team handles all account and payment inquiries. Click "Get Billing Help" to get in touch with them directly.',
    },
    {
      question: "How can I get an update on my project's progress?",
      answer:
        'For project-specific updates and new requests, please use the "Project Updates & Requests" channel to contact your project manager.',
    },
    {
      question: "Where can I find the latest software updates?",
      answer:
        'All updates are distributed directly to clients. If you believe you are missing an update, please contact us through the "Report a Technical Issue" channel.',
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
