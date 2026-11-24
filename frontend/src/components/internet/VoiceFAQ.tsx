import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    question: "What is VoIP and how does it work?",
    answer:
      "VoIP (Voice over Internet Protocol) is a technology that allows you to make voice calls using the internet instead of traditional phone lines. It converts your voice into digital data packets that travel over the internet, providing crystal-clear communication at a fraction of traditional costs.",
  },
  {
    question: "Do I need special equipment for voice services?",
    answer:
      "You can use VoIP with your existing phones by adding an adapter, or use IP phones designed specifically for VoIP. We also offer softphone applications that work on your computer or smartphone. Our team will help you choose the best setup for your needs.",
  },
  {
    question: "Can I keep my existing phone numbers?",
    answer:
      "Yes! We support number porting, allowing you to transfer your existing phone numbers to our VoIP service. The process is seamless and we handle all the coordination with your current provider to ensure zero downtime.",
  },
  {
    question: "What's your call quality guarantee?",
    answer:
      "We guarantee 99.9% uptime and HD voice quality on all our plans. Our advanced infrastructure includes redundancy, quality monitoring, and automatic failover systems. We also provide real-time call quality metrics and 24/7 technical support.",
  },
  {
    question: "Do you provide international calling?",
    answer:
      "Yes, all our Business and Enterprise plans include international calling minutes. We offer competitive rates to over 200 countries worldwide. You can also purchase additional international minutes or unlimited international plans based on your needs.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "Setup fees vary depending on your chosen plan and specific requirements. Essential Voice plans have minimal setup costs, while Business and Enterprise plans include free setup and configuration. Contact us for a detailed quote tailored to your business.",
  },
];

export const VoiceFAQ = () => {
  return (
    <section className="py-20 relative bg-gradient-to-br from-[hsl(242,55%,20%)] via-[hsl(242,63%,29%)] to-[hsl(242,55%,20%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-raleway font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/70 font-lato max-w-2xl mx-auto">
            Everything you need to know about our voice services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card border-none overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left text-white font-raleway font-semibold hover:text-[hsl(358,80%,52%)] transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/80 font-lato">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default VoiceFAQ;
