import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const smsMarketingFaqs = [
  {
    question: "How fast is the delivery of your bulk SMS?",
    answer:
      "We guarantee lightning-fast delivery across all Pakistani mobile networks (Jazz, Telenor, Zong, Ufone), typically within 3-5 seconds of hitting 'Send'. Our direct carrier connections ensure your messages reach customers instantly.",
  },
  {
    question: "Can I send SMS in Urdu for my local audience?",
    answer:
      "Absolutely! We fully support Urdu (Unicode) messaging, allowing you to connect with your audience in the language they love and trust. Create campaigns in both English and Urdu to maximize engagement with Pakistani customers.",
  },
  {
    question: "Is this platform suitable for a small business?",
    answer:
      "Yes! Whether you're a startup or an enterprise, our flexible pricing and easy-to-use platform make SMS marketing Pakistan accessible for all. Start with as little as you need and scale as your business grows.",
  },
  {
    question: "What Pakistani mobile networks do you support?",
    answer:
      "We support all major Pakistani mobile networks including Jazz, Telenor, Zong, and Ufone. Our platform ensures consistent delivery and optimal routing across all carriers for maximum reach.",
  },
  {
    question: "How do I track campaign performance?",
    answer:
      "Our real-time dashboard provides comprehensive analytics including delivery reports, open rates, click-through rates, and conversion tracking. Export reports in PDF or CSV format for detailed analysis and ROI measurement.",
  },
  {
    question: "Can I integrate SMS with my existing systems?",
    answer:
      "Yes! Our SMS marketing Pakistan platform provides a powerful REST API that allows seamless integration with your CRM, e-commerce platform, or custom applications. Automate order confirmations, appointment reminders, OTPs, and more with easy-to-implement webhooks.",
  },
];

const SMSMarketingFAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-raleway text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground font-lato max-w-3xl mx-auto">
            Everything you need to know about SMS marketing in Pakistan
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {smsMarketingFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-md hover:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left font-raleway font-semibold text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-lato leading-relaxed">
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

export default SMSMarketingFAQ;
