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

export default function MobileAppFAQs() {
  const faqs = [
    {
      question:
        "What services do mobile app developers in Pakistan usually offer?",
      answer:
        "Mobile app developers in Pakistan usually offer app planning, UI/UX design, Android development, iOS development, cross-platform development, testing, deployment, and post-launch support.",
    },
    {
      question: "Do you offer custom mobile app development services?",
      answer:
        "Yes. We build custom mobile apps based on your business model, user needs, feature list, and future goals. The app is planned around your project instead of a fixed template.",
    },
    {
      question: "Do you provide custom Android app development services?",
      answer:
        "Yes. We build Android apps for startups, service businesses, online stores, and companies that need mobile solutions with custom features and reliable performance.",
    },
    {
      question:
        "Are you one of the best mobile app developers in Pakistan for business apps?",
      answer:
        "We focus on business-ready mobile apps with clear planning, strong design, stable development, and long-term support. Our goal is to build apps that work well in real business use, not just look good on screen.",
    },
    {
      question: "Do you build iOS and cross-platform apps too?",
      answer:
        "Yes. We develop Android, iOS, and cross-platform apps depending on your product goals, target audience, budget, and launch plan.",
    },
    {
      question: "How long does app development take?",
      answer:
        "The timeline depends on app size, screens, features, integrations, and testing needs. A simple app takes less time, while a larger app with custom features needs a longer development cycle.",
    },
    {
      question: "Can you help improve an existing mobile app?",
      answer:
        "Yes. We can review your current app, fix usability issues, improve performance, add features, and support further development.",
    },
    {
      question: "Why hire a mobile app development company in Pakistan?",
      answer:
        "A skilled mobile app development company in Pakistan can help you get quality work, direct communication, and cost-effective development without compromising on features or performance.",
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
