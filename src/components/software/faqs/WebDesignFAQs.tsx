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

export default function WebDesignFAQs() {
  const faqs = [
    {
      question: "What services do web design companies in Lahore include?",
      answer: [
        "Website planning",
        "UI design",
        "Development",
        "Mobile optimization",
        "Performance improvements",
      ],
      isList: true,
    },
    {
      question: "Do you provide web development services in Karachi?",
      answer:
        "Yes. Brain Soft provides web development services in Karachi and other cities across Pakistan.",
    },
    {
      question: "How long does website development take?",
      answer:
        "The timeline depends on project requirements. Basic business websites take a few weeks. Larger eCommerce projects need more time",
    },
    {
      question: "Do you provide custom website development?",
      answer:
        "Yes. Brain Soft provides custom website development. We help businesses with unique features and scalable platforms.",
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
