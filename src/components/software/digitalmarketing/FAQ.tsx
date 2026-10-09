import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/software/ui/accordion";
import { ScrollReveal } from "@/components/software/animations/ScrollReveal";

const faqs = [
  {
    question: "What does a digital marketing agency in Lahore do?",
    answer:
      "A digital marketing agency helps businesses promote their services online. This includes SEO, social media marketing, paid ads, and website strategies. These methods attract more visitors and customers.",
  },
  {
    question: "How much do digital marketing services cost in Lahore?",
    answer:
      "The cost depends on the type of service and the business goals. Some companies begin with basic SEO or social media marketing. Others invest in complete digital marketing campaigns. BrainSOFT offers flexible plans for startups and established businesses which suit their situations.",
  },
  {
    question: "Which businesses need digital marketing in Lahore?",
    answer:
      "Almost every business today benefits from digital marketing. Real estate firms, e-commerce shops, and schools use online marketing. Healthcare providers and local services do too. They all aim to attract customers.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO usually takes a few months to show strong results. Search engines need time to index improvements and recognize website authority. But once rankings improve, SEO can bring consistent long-term traffic.",
  },
  {
    question: "Why choose BrainSOFT as a digital marketing agency in Lahore?",
    answer:
      "BrainSOFT focuses on practical strategies that help businesses grow online. Our team researches the market, understands the target audience, and creates marketing campaigns that generate real leads and customers.",
  },
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
              FAQ
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
};
