import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import {
  Headphones,
  Languages,
  GitBranch,
  Clock,
  BarChart3,
  Mic,
  Users,
  Database,
  PhoneCall,
  Sparkles,
  Building2,
} from "lucide-react";

import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { AvailabilityCheckerModal } from "@/components/internet/AvailabilityCheckerModal";
import FinalCTASection from "@/components/internet/home/FinalCTASection";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";

import TelephonyHero from "@/components/internet/telephony/TelephonyHero";
import FeatureGrid from "@/components/internet/telephony/FeatureGrid";
import ProcessTimeline from "@/components/internet/telephony/ProcessTimeline";
import PricingTiers from "@/components/internet/telephony/PricingTiers";
import TelephonyFAQ from "@/components/internet/telephony/TelephonyFAQ";
import RelatedServices from "@/components/internet/telephony/RelatedServices";
import CTABand from "@/components/internet/telephony/CTABand";
import ImagePlaceholder from "@/components/internet/telephony/ImagePlaceholder";
import { buildTelephonyJsonLd } from "@/components/internet/telephony/telephonySeo";

const PATH = "/services/internet/ivr-services-pakistan";

const title = "IVR Services in Pakistan | IVR Service Provider — BrainNET";
const description =
  "IVR service provider in Pakistan. Multi-level auto attendant, Urdu & English prompts, skills-based routing, queue analytics and CRM integration. Live in days.";

export const Route = createFileRoute("/services/internet/ivr-services-pakistan")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IVRServices,
});

const features = [
  { Icon: Languages, title: "Urdu & English prompts", body: "Professionally recorded bilingual menus, or text-to-speech for prompts that change often. Regional language options available on request." },
  { Icon: GitBranch, title: "Multi-level call flows", body: "Nested menus, department routing, direct-dial extension capture and intelligent fallback to a live agent when a caller stalls." },
  { Icon: Users, title: "Skills-based routing", body: "Send billing calls to billing, enterprise clients to their account manager, and repeat callers straight back to the agent who knows them." },
  { Icon: Clock, title: "Time & holiday conditions", body: "Different flows for business hours, after hours, Fridays, Ramadan timings and public holidays — scheduled once, applied automatically." },
  { Icon: Mic, title: "Call recording & QA", body: "Full recording with configurable retention, whisper coaching and barge-in for supervisors monitoring live queues." },
  { Icon: BarChart3, title: "Queue analytics", body: "Abandonment rate, average wait, longest hold, menu drop-off points and per-agent handling times on a live dashboard." },
  { Icon: Database, title: "CRM & database lookups", body: "Match the caller ID against your CRM or ERP to greet by name, read out an order status, or route by account tier." },
  { Icon: Sparkles, title: "Callback instead of hold", body: "Let callers keep their place in the queue and receive a callback, cutting abandonment during peak windows." },
];

const useCases = [
  { Icon: Building2, title: "Banks & financial services", body: "Secure IVR menus for balance enquiries, card blocking and branch routing, with recorded verification prompts and strict retention rules." },
  { Icon: Headphones, title: "Call centres & BPOs", body: "High-volume queueing, skills-based distribution and supervisor tooling built for hundreds of concurrent agents across shifts." },
  { Icon: PhoneCall, title: "Hospitals & clinics", body: "Appointment lines, department routing and after-hours emergency escalation so no urgent call reaches a dead extension." },
  { Icon: Users, title: "E-commerce & logistics", body: "Order-status self-service with database lookups, deflecting routine tracking calls away from your agents entirely." },
];

const steps = [
  { n: "01", title: "Call-flow discovery", body: "We map how calls arrive today — departments, peak hours, common questions and where callers currently drop off." },
  { n: "02", title: "Menu design & scripting", body: "A flow diagram plus written Urdu and English scripts, kept to three options per level so callers never get lost." },
  { n: "03", title: "Voice recording", body: "Professional bilingual voice-over, or text-to-speech for prompts you expect to change monthly. You approve every take." },
  { n: "04", title: "Build & CRM integration", body: "The flow is built on your PBX or our cloud platform, with queues, time conditions and any CRM lookups wired in." },
  { n: "05", title: "Test, tune & go live", body: "Live-call testing across every branch of the tree, then a 30-day tuning window using real drop-off analytics." },
];

const tiers = [
  {
    badge: "SINGLE LEVEL",
    title: "Auto attendant",
    scale: "One menu, up to 6 departments",
    from: "One-time setup + monthly",
    fromNote: "Recording and hosting included",
    points: ["Bilingual greeting", "Department routing", "Business-hours & after-hours flows", "Voicemail-to-email"],
  },
  {
    badge: "MOST POPULAR",
    title: "Multi-level IVR",
    scale: "Nested menus, queues & reporting",
    from: "Quoted on flow complexity",
    fromNote: "Priced by menu levels, queues and prompt count",
    points: [
      "Unlimited menu levels",
      "Skills-based queue routing",
      "Call recording with retention",
      "Live queue analytics dashboard",
      "Holiday & time conditions",
    ],
    featured: true,
  },
  {
    badge: "CONTACT CENTRE",
    title: "IVR + CRM integration",
    scale: "Database lookups & callback",
    from: "Custom project quote",
    fromNote: "Includes integration engineering and UAT",
    points: [
      "CRM / ERP caller lookups",
      "Self-service order & balance enquiries",
      "Queue callback and overflow routing",
      "Supervisor whisper & barge-in",
      "Named account manager",
    ],
  },
];

const faqs = [
  { question: "What is an IVR system and what does it do?", answer: "IVR stands for Interactive Voice Response — the automated menu callers hear when they dial your business. It greets the caller, presents options such as 'press 1 for sales', and routes the call to the right department, queue or extension without a receptionist manually transferring it. Modern IVR also handles self-service tasks like order status or balance enquiries." },
  { question: "Do you provide IVR prompts in Urdu as well as English?", answer: "Yes. Bilingual Urdu and English prompts are standard, with the language selection usually offered at the first menu level. We provide professional voice-over recording, and regional languages such as Punjabi, Sindhi or Pashto can be added on request. For prompts that change frequently, text-to-speech is available instead." },
  { question: "How much does an IVR service cost in Pakistan?", answer: "IVR is typically priced as a one-time setup and scripting fee plus a monthly platform charge. The setup cost scales with the complexity of the flow — the number of menu levels, queues, recorded prompts and any CRM integration. Because a two-option auto attendant and a twelve-branch contact-centre flow are very different projects, we quote against your actual call flow." },
  { question: "Can the IVR connect to my CRM or database?", answer: "Yes. We can match the incoming caller ID against your CRM, ERP or order database to greet customers by name, route them to their assigned account manager, or read back live information such as an order status or account balance through the menu itself." },
  { question: "Do I need a specific PBX to use your IVR services?", answer: "No. The IVR can be built directly on your existing IP PBX (Asterisk, FreePBX, 3CX and similar), or hosted entirely on our cloud platform if you'd rather not run hardware. Pairing it with a BrainNET SIP trunk keeps voice quality and routing under one provider." },
  { question: "How long does it take to deploy an IVR?", answer: "A straightforward auto attendant can be live within a week. A multi-level IVR with queues, holiday conditions and professional recordings typically takes two to three weeks, most of which is script approval and voice recording. CRM-integrated flows depend on your system's API and are scoped separately." },
  { question: "Can we change the menus and prompts ourselves later?", answer: "Yes. You get an admin portal to update greetings, change time conditions, reorder menu options and re-record prompts. For structural changes to the call tree, our team can make the change for you, usually the same working day." },
  { question: "How do I stop the IVR frustrating my callers?", answer: "Keep it to three options per level, always offer a route to a human, and put the most-requested option first. We review your drop-off analytics 30 days after go-live and prune the branches nobody uses — that tuning pass is included in every deployment." },
];

function IVRServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openQuote = () => setIsModalOpen(true);

  const jsonLd = buildTelephonyJsonLd({
    path: PATH,
    name: "IVR Services in Pakistan",
    serviceType: "Interactive Voice Response (IVR)",
    description:
      "IVR service provider in Pakistan offering multi-level auto attendant, Urdu and English prompts, skills-based call routing, queue analytics and CRM integration.",
    breadcrumbLabel: "IVR Services in Pakistan",
    faqs,
    offers: tiers.map((t) => ({ name: t.title, description: t.scale })),
  });

  return (
    <div className="bn-home min-h-screen relative overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <div className="pt-24 max-w-screen-xl mx-auto px-5 relative z-10">
        <Breadcrumb />
      </div>

      <TelephonyHero
        eyebrow="IVR Services in Pakistan"
        headline="IVR services in Pakistan."
        headlineAccent="Every caller lands in the right place."
        subcopy={
          <>
            Multi-level auto attendant with Urdu and English prompts, skills-based routing, queue
            analytics and CRM lookups — built on your PBX or ours, and on the same network as our{" "}
            <Link to="/services/internet/voip-providers-pakistan" className="text-[hsl(var(--bn-violet-soft))] underline underline-offset-4">
              VoIP services
            </Link>
            .
          </>
        }
        badges={[
          { Icon: Languages, label: "Urdu & English prompts" },
          { Icon: GitBranch, label: "Unlimited menu levels" },
          { Icon: BarChart3, label: "Live queue analytics" },
        ]}
        imageLabel="Hero Banner Image"
        imageHint="Cinematic contact-centre floor with a glowing IVR call-flow tree overlay, deep indigo with red accent lighting — 1920×900"
        onQuote={openQuote}
      />

      <ClientLogoSlider />

      {/* ---------- Why IVR ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal className="lg:col-span-6">
              <span className="bn-eyebrow">Why it matters</span>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] bn-display mt-5">
                A missed call is <span className="bn-display-accent">a lost customer.</span>
              </h2>
              <div className="flex flex-col gap-4 mt-6 font-dm text-[hsl(var(--bn-ink-soft))] leading-relaxed">
                <p>
                  Most Pakistani businesses still route calls through a single receptionist and a
                  handful of extensions. At peak hours callers hear an engaged tone, hang up, and dial
                  a competitor — and nobody in the business ever sees that it happened.
                </p>
                <p>
                  A well-designed IVR answers on the first ring, sorts the caller by intent, and either
                  resolves the query through self-service or queues them for the agent best placed to
                  help. Everything is measured: how long they waited, where they dropped off, which
                  menu option nobody ever presses.
                </p>
                <p>
                  Done badly, IVR is a maze. We keep every level to three options, always leave a route
                  to a human, and prune the tree using real analytics 30 days after go-live.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-6">
              <ImagePlaceholder
                label="IVR Call Flow Diagram"
                hint="Neon line-art call tree: incoming call → language select → department menu → queue → agent, indigo nodes with red active path — 1200×900"
                aspect="aspect-[4/3]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Capabilities"
        title={<>Everything a modern <span className="bn-display-accent">call flow needs.</span></>}
        kicker="Configured by our voice engineers, then handed over with an admin portal you can drive yourself."
        items={features}
        columns={4}
      />

      {/* ---------- Use cases ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Who we build for"
            title={<>Flows tuned to <span className="bn-display-accent">how your callers behave.</span></>}
            kicker="Same platform, very different call trees."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {useCases.map((u) => (
              <StaggerItem key={u.title}>
                <article className="bn-tile p-7 h-full flex flex-col gap-4">
                  <ImagePlaceholder
                    label={`${u.title} vignette`}
                    hint="Photoreal environment shot with indigo/red colour grade — 1200×675"
                    aspect="aspect-[16/9]"
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center shrink-0">
                      <u.Icon className="w-5 h-5 text-[hsl(var(--bn-violet-soft))]" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))]">{u.title}</h3>
                  </div>
                  <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{u.body}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABand
        title="Bring us your current call flow."
        body="We'll map it, show you where callers drop off, and quote the rebuild — no charge for the review."
        onQuote={openQuote}
        showWhatsApp
      />

      <ProcessTimeline
        title={<>From messy extensions to <span className="bn-display-accent">a measured call tree.</span></>}
        kicker="Most auto attendants are live within a week; full multi-level IVR in two to three."
        steps={steps}
        imageLabel="IVR Studio Visual"
        imageHint="Voice-over booth with waveform monitor and script on screen, indigo lighting with red rim — 1000×1000"
      />

      <PricingTiers
        eyebrow="IVR pricing"
        title={<>Priced on your call flow, <span className="bn-display-accent">not a menu template.</span></>}
        kicker="A one-time build and recording fee, plus a monthly platform charge that scales with queues and agents."
        tiers={tiers}
        footnote="Indicative tiers only. Final IVR pricing in Pakistan depends on menu levels, number of recorded prompts, queue count, agent seats and any CRM or database integration required."
        onQuote={openQuote}
      />

      {/* ---------- Pairing ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Runs on"
            title={<>IVR needs <span className="bn-display-accent">lines and a phone system.</span></>}
            kicker="We can supply all three, or drop the IVR onto what you already run."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              { to: "/services/internet/sip-trunk-providers-pakistan", title: "SIP Trunk", body: "The licensed channels that carry the calls into your IVR, sized to your busy hour." },
              { to: "/services/internet/ip-pbx-pakistan", title: "IP PBX", body: "An on-premise phone system if you want dial plans and recordings inside your own building." },
              { to: "/services/internet/virtual-pbx-pakistan", title: "Virtual PBX", body: "A hosted phone system with the IVR built in — nothing to rack, nothing to maintain." },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="bn-tile p-7 flex flex-col gap-3 group">
                <h3 className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))] group-hover:text-[hsl(var(--bn-violet-soft))] transition-colors">
                  {c.title}
                </h3>
                <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{c.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TelephonyFAQ
        id="ivr"
        title={<>IVR in Pakistan, <span className="bn-display-accent">answered plainly.</span></>}
        kicker="What businesses ask us before they commit to a call flow."
        faqs={faqs}
      />

      <RelatedServices currentPath={PATH} />

      <FinalCTASection />
      <Footer />

      <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
