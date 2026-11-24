import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";

export const voipFaqs = [
  {
    question: "Is VoIP legal in Pakistan for businesses?",
    answer:
      "Yes. Business VoIP delivered through a licensed operator is fully permitted. BrainNET provisions voice through licensed interconnects, so your trunks, DID numbers and international termination are all compliant — unlike grey-route apps that can be blocked without notice.",
  },
  {
    question: "Do I need dedicated internet to use your VoIP service?",
    answer:
      "Not strictly, but it is strongly recommended. Voice quality depends on consistent latency and jitter, which shared broadband cannot guarantee. Most clients pair VoIP with a dedicated fiber connection so voice traffic is prioritised on a committed, uncontended link.",
  },
  {
    question: "Can I keep my existing phone numbers?",
    answer:
      "Yes. We handle number porting end to end, coordinating with your current provider and planning the cutover so there is no gap in service. You can also add new city DID numbers alongside your existing lines.",
  },
  {
    question: "How many concurrent calls can a SIP trunk handle?",
    answer:
      "Channels are sized to your traffic. A small office typically runs 4 to 8 concurrent channels, a growing SME 15 to 30, and contact centres 50 to 300 or more. Channels can be scaled up or down as your call volume changes.",
  },
  {
    question: "What do calls cost?",
    answer:
      "Pricing has two parts: a monthly trunk and channel subscription, and per-minute termination for outbound calls. Local, national and international rates are quoted transparently and billed on itemised invoices. Inbound calls to your DIDs are included.",
  },
  {
    question: "How long does installation take?",
    answer:
      "For sites already on our fiber footprint, most deployments go live in 5 to 10 working days including survey, provisioning, configuration and testing. Number porting can add a few days depending on the releasing operator.",
  },
  {
    question: "What happens during a power outage or internet failure?",
    answer:
      "Calls can automatically fail over to mobile numbers or an alternate route, so inbound calls are never lost. Our exchange and core network run on redundant power and diverse fiber paths backed by a 99.9% uptime SLA.",
  },
  {
    question: "Do you support IVR, call recording and CRM integration?",
    answer:
      "Yes. Multi-level IVR, call recording with retention, live analytics and API or SIP-level integration with common CRMs and PBX platforms such as Asterisk, FreePBX and 3CX are all supported.",
  },
];

export const VoIPFAQ = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <SectionHeader
        eyebrow="FAQs"
        title={<>VoIP in Pakistan, <span className="bn-display-accent">answered plainly.</span></>}
        kicker="The questions our sales engineers hear every week."
      />

      <ScrollReveal>
        <div className="max-w-4xl mx-auto mt-14">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {voipFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`voip-faq-${index}`}
                className="bn-tile border-0 overflow-hidden px-2"
              >
                <AccordionTrigger className="px-4 py-5 text-left font-display font-semibold text-[hsl(var(--bn-ink))] hover:text-[hsl(var(--bn-violet-soft))] hover:no-underline">
                  <h3 className="text-base md:text-lg">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 font-dm text-sm md:text-base text-[hsl(var(--bn-ink-soft))] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default VoIPFAQ;
