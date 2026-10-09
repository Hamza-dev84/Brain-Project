import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "What's the difference between OTP, Transactional, and Marketing SMS?",
      answer:
        "OTP SMS are used for one-time passwords and authentication codes. Transactional SMS are time-sensitive notifications like order confirmations, payment receipts, and alerts. Marketing SMS are promotional messages for campaigns and offers. Each category has different delivery priorities and rates.",
    },
    {
      question: "How is validity calculated?",
      answer:
        "Validity starts from the date of purchase and your SMS credits remain active for the specified period (e.g., 3 months, 6 months, 12 months). You can use your credits anytime within this validity period. Any unused SMS after expiry will be forfeited.",
    },
    {
      question: "Can I upgrade my package mid-term?",
      answer:
        "Yes! You can upgrade your package at any time. Your existing credits and validity will be adjusted accordingly, and you'll only pay the difference. Contact our support team for seamless upgrade assistance.",
    },
    {
      question: "What happens to unused SMS after expiry?",
      answer:
        "Unused SMS credits expire at the end of the validity period and cannot be carried forward. We recommend choosing a package that matches your expected usage. You can always purchase additional credits or upgrade to a larger package if needed.",
    },
    {
      question: "How many sender masks do I need?",
      answer:
        "Sender masks (Sender IDs) are the names that appear as the sender when recipients receive your SMS. Most businesses start with 1-2 masks. Larger enterprises may need multiple masks for different departments, brands, or campaigns.",
    },
    {
      question: "Is there a setup fee or hidden charges?",
      answer:
        "No! We believe in transparent pricing. There are no setup fees, no hidden charges, and no annual contracts. You only pay for the SMS package you choose.",
    },
    {
      question: "Can I get a custom package?",
      answer:
        "Absolutely! If our pre-packaged plans don't fit your specific needs, we offer custom packages with tailored SMS volumes, validity periods, mask allocations, and pricing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept multiple payment methods including bank transfers, online payments, and corporate invoicing. For enterprise packages, we offer flexible payment terms.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-raleway">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about our SMS pricing plans
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
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

export default PricingFAQ;
