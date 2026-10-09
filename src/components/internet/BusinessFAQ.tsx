import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's your up-time guarantee?",
    answer:
      "We guarantee 99.9% uptime for all our business internet packages. Our redundant infrastructure and 24/7 monitoring ensure maximum reliability. In the rare event of downtime, our technical team responds within minutes to resolve any issues. We also offer SLA agreements for enterprise clients with specific uptime requirements.",
  },
  {
    question: "How much is your OTC (One Time Charges)?",
    answer:
      "One-time charges vary based on your location and package selection. Typically, OTC includes installation costs, equipment charges, and initial setup fees. For business packages, we offer flexible payment terms and can waive certain charges based on contract duration. Contact our sales team for a detailed breakdown specific to your requirements.",
  },
  {
    question: "Do you provide network consultation?",
    answer:
      "Yes! We provide comprehensive network consultation services for businesses. Our certified network engineers can assess your current infrastructure, recommend improvements, design custom network architectures, and help you optimize your connectivity. We also offer ongoing consultation as part of our enterprise support packages.",
  },
  {
    question: "Do you provide 24/7 Support?",
    answer:
      "Absolutely! All business customers receive 24/7 priority support through multiple channels including phone, email, and our customer portal. Our dedicated business support team is always available to handle technical issues, answer questions, and provide guidance. Enterprise clients also get access to a dedicated account manager.",
  },
];

export const BusinessFAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-primary relative">
      <div className="absolute inset-0 particles opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-raleway font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80 font-lato">
            Get answers to common questions about our business internet services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 hover:border-accent/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-white hover:text-accent text-lg font-raleway font-semibold py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-lato text-base leading-relaxed pb-6">
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

export default BusinessFAQ;
