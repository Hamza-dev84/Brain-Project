import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import {
  Headphones,
  Languages,
  GitBranch,
  BarChart3,
  Users,
  Database,
  PhoneCall,
  Phone,
  Building2,
  CalendarClock,
  Voicemail,
  Route as RouteIcon,
  ListTree,
  Check,
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
import ProcessTimeline from "@/components/internet/telephony/ProcessTimeline";
import PricingTiers from "@/components/internet/telephony/PricingTiers";
import TelephonyFAQ from "@/components/internet/telephony/TelephonyFAQ";
import RelatedServices from "@/components/internet/telephony/RelatedServices";
import CTABand from "@/components/internet/telephony/CTABand";
import { buildTelephonyJsonLd } from "@/components/internet/telephony/telephonySeo";

import ivrHero from "@/assets/internet/ivr-hero.jpg";
import ivrCallflow from "@/assets/internet/ivr-callflow.jpg";
import ivrStudio from "@/assets/internet/ivr-studio.jpg";

const PATH = "/services/internet/ivr-services";

const title = "IVR Services in Pakistan: Urdu & English IVR for Your Business | BrainNET";
const description =
  "IVR service provider in Pakistan. Urdu & English prompts, multi-level menus, skills-based routing, CRM lookups and live queue analytics. One-time setup plus monthly fee.";

export const Route = createFileRoute("/services/internet/ivr-services")({
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

/* ---------- What happens when a customer calls ---------- */
const callJourney = [
  {
    Icon: Phone,
    title: "Answer",
    body: "The IVR picks up immediately, 24/7, as long as you have enough channels for your peak calls and a working connection.",
  },
  {
    Icon: Languages,
    title: "Greet & choose a language",
    body: "Press 1 for Urdu, 2 for English.",
  },
  {
    Icon: ListTree,
    title: "Menu",
    body: "The caller picks sales, support, accounts or another option you define.",
  },
  {
    Icon: RouteIcon,
    title: "Resolve or route",
    body: "Routine questions — hours, order status, balance — are answered by the IVR itself; everything else goes to the right agent group. Sensitive details need caller verification, not caller ID alone.",
  },
  {
    Icon: PhoneCall,
    title: "Fallback",
    body: "If no one is free, the caller joins a queue, leaves a voicemail or gets a callback. Key 0 reaches an operator during working hours, or voicemail after hours.",
  },
];

/* ---------- Features table ---------- */
const featureRows = [
  {
    Icon: Languages,
    feature: "Urdu and English prompts",
    does: "Professionally recorded menus in both languages",
    why: "Callers understand the menu the first time",
  },
  {
    Icon: GitBranch,
    feature: "Multi-level menus",
    does: "Nested options with a return-to-main key",
    why: "Fits complex businesses without confusing callers",
  },
  {
    Icon: Users,
    feature: "Skills-based routing",
    does: "Sends calls by department, language or skill",
    why: "First-call resolution, fewer transfers",
  },
  {
    Icon: CalendarClock,
    feature: "Time and holiday rules",
    does: "Separate flows for after hours, weekends and holiday dates you set",
    why: "No dead line when the office is closed",
  },
  {
    Icon: Database,
    feature: "CRM and database lookup",
    does: "Matches the caller's number or an order number (over HTTPS with access keys)",
    why: "Priority customers reach a named agent; status read back",
  },
  {
    Icon: PhoneCall,
    feature: "Callback instead of hold",
    does: "Keeps the caller's place and rings back (callbacks are outbound calls)",
    why: "Fewer abandoned calls at peak hours",
  },
  {
    Icon: Voicemail,
    feature: "Call recording and voicemail",
    does: "Stored with a retention period you set. Tell callers they are recorded.",
    why: "Quality checks and dispute handling",
  },
  {
    Icon: BarChart3,
    feature: "Live queue analytics",
    does: "Waiting, abandoned and answered calls in real time",
    why: "You staff to demand, not guesses",
  },
];

/* ---------- Which IVR do you need ---------- */
const ivrTypes = [
  {
    badge: "SINGLE LEVEL",
    title: "Auto attendant",
    bestFor: "Small teams with one main number",
    gets: "Greeting, department menu, after-hours message, voicemail",
  },
  {
    badge: "MOST POPULAR",
    title: "Multi-level IVR",
    bestFor: "Offices and call centers with several departments",
    gets: "Nested menus, queues, schedules, callbacks, analytics",
    featured: true,
  },
  {
    badge: "CONTACT CENTRE",
    title: "IVR with CRM integration",
    bestFor: "Banks, e-commerce, healthcare, support desks",
    gets: "Lookups by number, self-service answers, custom reports",
  },
];

/* ---------- Pricing ---------- */
const tiers = [
  {
    badge: "SINGLE LEVEL",
    title: "Auto attendant",
    scale: "One number, 1 to 2 menu levels",
    from: "Fixed one-time setup fee",
    fromNote: "Monthly from a flat platform fee — recording and hosting included",
    points: ["Bilingual greeting", "Department routing", "Business-hours & after-hours flows", "Voicemail-to-email"],
  },
  {
    badge: "MOST POPULAR",
    title: "Multi-level IVR",
    scale: "Several departments, queues, schedules",
    from: "Setup quoted on flow size",
    fromNote: "Monthly quoted on queues and agents",
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
    scale: "Lookups, self-service, custom reports",
    from: "Project quote",
    fromNote: "Monthly quoted — includes integration engineering and UAT",
    points: [
      "CRM / ERP caller lookups",
      "Self-service order & balance enquiries",
      "Queue callback and overflow routing",
      "Supervisor whisper & barge-in",
      "Named account manager",
    ],
  },
];

/* ---------- Industry call flows ---------- */
const industryFlows = [
  {
    Icon: Building2,
    industry: "Banks and financial services",
    flow: "Language, then balance or card status (after caller verification), then agent for sensitive requests",
    result: "Fewer routine calls reach agents",
  },
  {
    Icon: Headphones,
    industry: "Call centers and BPOs",
    flow: "Language, skill queue, overflow, callback",
    result: "Shorter queues at peak hours",
  },
  {
    Icon: PhoneCall,
    industry: "Hospitals and clinics",
    flow: "Appointments, departments, report status, operator key during working hours. Announce your emergency number at the start of the menu.",
    result: "Urgent callers reach a person fast",
  },
  {
    Icon: RouteIcon,
    industry: "E-commerce and logistics",
    flow: "Order status by number, cash-on-delivery confirmation, returns",
    result: "Fewer \u201cwhere is my order\u201d calls",
  },
  {
    Icon: Users,
    industry: "Schools and universities",
    flow: "Admissions, fee queries, department extensions",
    result: "Admission season calls handled with less extra staff",
  },
];

/* ---------- BrainNET vs alternatives ---------- */
const comparison = {
  columns: ["BrainNET managed IVR", "Self-serve cloud IVR app", "IVR add-on from your PBX"],
  rows: [
    ["Urdu and English prompts", "Scripted and recorded for you", "You record them", "Default prompts are English; custom Urdu recordings can be uploaded"],
    ["Setup", "We design and build it", "You configure it", "Depends on the PBX"],
    ["CRM integration", "Built by our engineers", "Via plugins or API, your effort", "Often limited"],
    ["Lines and phone system", "SIP trunk, IP PBX or Virtual PBX from us", "Separate purchase", "Already in place"],
    ["Support", "One team for IVR and network", "Vendor support", "PBX vendor"],
    ["Pricing", "One-time setup + monthly", "Per user or per minute, often in USD", "Usually included or a licence fee"],
  ],
};

/* ---------- Process ---------- */
const steps = [
  { n: "01", title: "Map", body: "We review how calls arrive today and where callers drop out." },
  { n: "02", title: "Script and record", body: "You approve the wording; we record Urdu and English prompts." },
  { n: "03", title: "Build and integrate", body: "We build the flow and connect your CRM or database." },
  { n: "04", title: "Test and launch", body: "Test calls on every path, a soft launch, then tuning from real call data." },
];

/* ---------- FAQs ---------- */
const faqs = [
  {
    question: "What is an IVR system?",
    answer:
      "An automated phone menu answers calls. It plays prompts and routes callers using the keypad.",
  },
  {
    question: "How much does an IVR service cost in Pakistan?",
    answer:
      "A one-time setup fee plus a monthly fee, set by menus, languages, queues, and integrations. Our auto attendant price is quoted on your call flow. We quote in PKR within 24 hours, free of charge.",
  },
  {
    question: "Can you record Urdu IVR prompts?",
    answer:
      "Yes. We script and record both Urdu and English, and callers choose at the first prompt.",
  },
  {
    question: "Can the IVR connect to my CRM?",
    answer:
      "Yes. It can look up a caller's number or order number through an API and read back the result or route the call.",
  },
  {
    question: "Do I need a specific PBX?",
    answer:
      "No specific brand, but it should be SIP-capable. Older analog or digital PBXs need a VoIP gateway. The IVR can run on your PBX, or on our platform connected to it by SIP.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Simple auto attendant: within a week if lines are ready. Multi-level and CRM-integrated IVRs take longer.",
  },
  {
    question: "Can I change menus later?",
    answer:
      "Yes. We update them for you, or you can edit them in the portal. We also re-record prompts if you ask.",
  },
  {
    question: "How many menu options should an IVR have?",
    answer:
      "Three to five per level, with key 0 for an agent. Longer menus tend to cause hang-ups.",
  },
];

function IVRServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openQuote = () => setIsModalOpen(true);

  const jsonLd = buildTelephonyJsonLd({
    path: PATH,
    name: "IVR Services in Pakistan",
    serviceType: "Interactive Voice Response (IVR)",
    description:
      "IVR service provider in Pakistan offering Urdu and English prompts, multi-level menus, skills-based call routing, queue analytics and CRM integration.",
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
        headline="Urdu & English IVR"
        headlineAccent="that answers every call."
        subcopy={
          <>
            An IVR (interactive voice response) automatically answers your business calls, plays a
            menu in the caller's language, and sends each call to the right team — or provides the
            answer itself. BrainNET creates and manages Urdu and English IVR systems for businesses
            in Pakistan. We can work with your current phone system or use ours.
          </>
        }
        badges={[
          { Icon: Languages, label: "Urdu & English prompts" },
          { Icon: GitBranch, label: "Multi-level menus" },
          { Icon: BarChart3, label: "Live queue analytics" },
        ]}
        imageLabel="IVR contact centre with live call-flow tree"
        imageHint=""
        imageSrc={ivrHero}
        imageAlt="Contact centre floor with a glowing IVR call-flow tree showing Urdu and English menu branches"
        onQuote={openQuote}
      />

      {/* At a glance strip */}
      <section className="relative pb-4">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal>
            <div className="bn-tile px-6 py-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
              {[
                "Urdu and English prompts",
                "Multi-level menus",
                "Skills-based routing",
                "CRM and database lookups",
                "Live queue analytics",
                "One-time setup + monthly fee",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 font-dm text-sm text-[hsl(var(--bn-ink-soft))]"
                >
                  <Check className="w-4 h-4 text-[hsl(var(--bn-violet-soft))]" />
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <p className="font-dm text-xs text-[hsl(var(--bn-ink-soft))] text-center mt-3">Last updated: 26 October 2026</p>
        </div>
      </section>

      <ClientLogoSlider />

      {/* ---------- What happens when a customer calls ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="The caller's journey"
            title={
              <>
                What happens when a customer <span className="bn-display-accent">calls your IVR.</span>
              </>
            }
            kicker="The IVR answers right away, 24/7, as long as you have enough channels for your peak calls and a working connection. Every call follows the same short path."
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-14 items-center">
            <StaggerContainer className="lg:col-span-6 flex flex-col gap-4">
              {callJourney.map((s, i) => (
                <StaggerItem key={s.title}>
                  <article className="bn-tile p-6 flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center shrink-0">
                      <s.Icon className="w-6 h-6 text-[hsl(var(--bn-violet-soft))]" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-display font-semibold text-lg text-[hsl(var(--bn-ink))]">
                        <span className="text-[hsl(var(--bn-violet-soft))] mr-2">{i + 1}.</span>
                        {s.title}
                      </h3>
                      <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{s.body}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <ScrollReveal delay={0.15} className="lg:col-span-6">
              <img
                src={ivrCallflow}
                alt="IVR call flow diagram: incoming call, language selection in Urdu or English, department menu, queue and agent"
                width={1200}
                height={912}
                loading="lazy"
                className="w-full rounded-2xl border border-[hsl(var(--bn-line)/0.55)] shadow-[0_30px_80px_-20px_hsl(var(--bn-violet)/0.5)]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------- Features table ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Capabilities"
            title={
              <>
                IVR software features that <span className="bn-display-accent">help reduce missed calls.</span>
              </>
            }
            kicker="Our IVR software runs on our platform or connects to your PBX by SIP."
          />
          <ScrollReveal className="mt-14">
            <div className="bn-tile overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[720px]">
                  <thead>
                    <tr className="border-b border-[hsl(var(--bn-line)/0.55)]">
                      <th className="font-display font-semibold text-sm uppercase tracking-wider text-[hsl(var(--bn-ink))] px-6 py-5">Feature</th>
                      <th className="font-display font-semibold text-sm uppercase tracking-wider text-[hsl(var(--bn-ink))] px-6 py-5">What it does</th>
                      <th className="font-display font-semibold text-sm uppercase tracking-wider text-[hsl(var(--bn-ink))] px-6 py-5">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureRows.map((r) => (
                      <tr
                        key={r.feature}
                        className="border-b border-[hsl(var(--bn-line)/0.35)] last:border-0 hover:bg-[hsl(var(--bn-violet)/0.06)] transition-colors"
                      >
                        <td className="px-6 py-5">
                          <span className="flex items-center gap-3 font-display font-semibold text-[hsl(var(--bn-ink))]">
                            <r.Icon className="w-5 h-5 text-[hsl(var(--bn-violet-soft))] shrink-0" />
                            {r.feature}
                          </span>
                        </td>
                        <td className="px-6 py-5 font-dm text-sm text-[hsl(var(--bn-ink-soft))]">{r.does}</td>
                        <td className="px-6 py-5 font-dm text-sm text-[hsl(var(--bn-ink-soft))]">{r.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- Which IVR do you need ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Options"
            title={
              <>
                Which IVR <span className="bn-display-accent">do you need?</span>
              </>
            }
            kicker="Not sure which fits? Send us your current call flow and we will recommend one."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {ivrTypes.map((t) => (
              <StaggerItem key={t.title}>
                <article
                  className={`bn-tile p-7 h-full flex flex-col gap-4 ${t.featured ? "bn-glow-violet border-[hsl(var(--bn-violet)/0.6)]" : ""}`}
                >
                  <span className="bn-eyebrow self-start">{t.badge}</span>
                  <h3 className="font-display font-semibold text-2xl text-[hsl(var(--bn-ink))]">{t.title}</h3>
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="font-display text-xs uppercase tracking-wider text-[hsl(var(--bn-violet-soft))] mb-1">Best for</p>
                      <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))]">{t.bestFor}</p>
                    </div>
                    <div>
                      <p className="font-display text-xs uppercase tracking-wider text-[hsl(var(--bn-violet-soft))] mb-1">What you get</p>
                      <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))]">{t.gets}</p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABand
        title="Send us your current call flow."
        body="We'll map it, show you where callers drop off, and reply with a written quote in PKR within 24 hours."
        onQuote={openQuote}
        showWhatsApp
      />

      {/* ---------- Pricing ---------- */}
      <PricingTiers
        eyebrow="IVR price in Pakistan"
        title={
          <>
            A one-time setup plus a monthly fee, <span className="bn-display-accent">quoted in PKR.</span>
          </>
        }
        kicker="Setup covers call-flow design, Urdu and English scripting, voice recording and the build. The monthly fee covers hosting, support and the lines or channels you use. Multi-level and CRM-integrated IVRs are quoted on your menus, languages, queues and integrations."
        tiers={tiers}
        footnote="Four things move the price: number of menus and prompts, languages, queues and agents, and the systems we connect. Send us your call flow and we reply with a written quote within 24 hours."
        onQuote={openQuote}
      />

      {/* ---------- Industry call flows ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Industry call flows"
            title={
              <>
                Flows tuned to <span className="bn-display-accent">how your callers behave.</span>
              </>
            }
            kicker="Same platform, very different call trees."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {industryFlows.map((f) => (
              <StaggerItem key={f.industry}>
                <article className="bn-tile p-7 h-full flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center shrink-0">
                    <f.Icon className="w-5 h-5 text-[hsl(var(--bn-violet-soft))]" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))]">{f.industry}</h3>
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="font-display text-xs uppercase tracking-wider text-[hsl(var(--bn-violet-soft))] mb-1">Typical IVR flow</p>
                      <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{f.flow}</p>
                    </div>
                    <div>
                      <p className="font-display text-xs uppercase tracking-wider text-[hsl(var(--bn-violet-soft))] mb-1">Result</p>
                      <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))]">{f.result}</p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ---------- BrainNET vs alternatives ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Compare"
            title={
              <>
                BrainNET IVR <span className="bn-display-accent">vs the alternatives.</span>
              </>
            }
            kicker="A self-serve app can suit a tiny team that wants to experiment. A managed IVR suits businesses that want it designed, recorded and supported by one team."
          />
          <ScrollReveal className="mt-14">
            <div className="bn-tile overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[820px]">
                  <thead>
                    <tr className="border-b border-[hsl(var(--bn-line)/0.55)]">
                      <th className="font-display font-semibold text-sm uppercase tracking-wider text-[hsl(var(--bn-ink))] px-6 py-5" />
                      {comparison.columns.map((c, i) => (
                        <th
                          key={c}
                          className={`font-display font-semibold text-sm uppercase tracking-wider px-6 py-5 ${
                            i === 0 ? "text-[hsl(var(--bn-violet-soft))]" : "text-[hsl(var(--bn-ink-soft))]"
                          }`}
                        >
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.rows.map((row) => (
                      <tr
                        key={row[0]}
                        className="border-b border-[hsl(var(--bn-line)/0.35)] last:border-0 hover:bg-[hsl(var(--bn-violet)/0.06)] transition-colors"
                      >
                        <td className="px-6 py-5 font-display font-semibold text-[hsl(var(--bn-ink))]">{row[0]}</td>
                        <td className="px-6 py-5 font-dm text-sm text-[hsl(var(--bn-ink))] bg-[hsl(var(--bn-violet)/0.08)]">{row[1]}</td>
                        <td className="px-6 py-5 font-dm text-sm text-[hsl(var(--bn-ink-soft))]">{row[2]}</td>
                        <td className="px-6 py-5 font-dm text-sm text-[hsl(var(--bn-ink-soft))]">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- Lines and phone system ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Runs on"
            title={
              <>
                IVR needs <span className="bn-display-accent">lines and a phone system.</span>
              </>
            }
            kicker="An IVR only works as well as the lines and PBX under it. BrainNET supplies all three, or drops the IVR onto your existing SIP-capable PBX."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              {
                to: "/services/internet/sip-trunk",
                title: "SIP Trunk",
                body: "Voice lines sized to your peak concurrent calls.",
              },
              {
                to: "/services/internet/ip-pbx",
                title: "IP PBX or Virtual PBX",
                body: "Extensions, queues and call recording behind the IVR. See also our Virtual PBX page.",
              },
              {
                to: "/services/internet/dedicated-internet-lahore",
                title: "Dedicated Internet",
                body: "Plan about 100 kbps per call each way (approximate, G.711 with overhead). Latency, jitter and packet loss matter more than raw speed.",
              },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="bn-tile p-7 flex flex-col gap-3 group">
                <h3 className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))] group-hover:text-[hsl(var(--bn-violet-soft))] transition-colors">
                  {c.title}
                </h3>
                <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{c.body}</p>
              </Link>
            ))}
          </div>
          <ScrollReveal delay={0.15}>
            <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] text-center mt-8">
              Our{" "}
              <Link
                to="/services/internet/voip-providers-pakistan"
                className="text-[hsl(var(--bn-violet-soft))] hover:text-[hsl(var(--bn-violet-soft)/0.8)] transition-colors"
              >
                VoIP services
              </Link>{" "}
              and{" "}
              <Link
                to="/services/internet/pbx-price-in-pakistan"
                className="text-[hsl(var(--bn-violet-soft))] hover:text-[hsl(var(--bn-violet-soft)/0.8)] transition-colors"
              >
                PBX price guide
              </Link>{" "}
              pages cover the rest of the stack.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bn-tile p-7 flex flex-col gap-3">
              <h3 className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))]">Reliability and security</h3>
              <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">If the internet or IVR is down, calls forward to a backup number. Callers cannot transfer out to external numbers from the menu, and spend limits and IP allowlisting protect the lines.</p>
            </div>
            <div className="bn-tile p-7 flex flex-col gap-3">
              <h3 className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))]">Is it legal?</h3>
              <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">Yes, when it runs through legal channels. Calls to international destinations must go through licensed carriers (LDI licensees). Licence details are available on request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <ProcessTimeline
        eyebrow="From call flow to go-live"
        title={
          <>
            From call flow <span className="bn-display-accent">to go-live.</span>
          </>
        }
        kicker="A simple auto attendant can go live within a week if lines are ready; number porting can take longer. Larger projects depend on scope."
        steps={steps}
        imageLabel="IVR voice recording studio"
        imageSrc={ivrStudio}
        imageAlt="Voice-over recording booth with a microphone, waveform monitor and an Urdu and English script on screen"
      />

      <TelephonyFAQ
        id="ivr"
        title={
          <>
            IVR in Pakistan, <span className="bn-display-accent">answered plainly.</span>
          </>
        }
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
