import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import {
  Cloud,
  Smartphone,
  Users,
  Zap,
  Globe2,
  Headphones,
  ShieldCheck,
  Layers,
  Clock,
} from "lucide-react";

import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { AvailabilityCheckerModal } from "@/components/internet/AvailabilityCheckerModal";
import FinalCTASection from "@/components/internet/home/FinalCTASection";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";

import TelephonyHero from "@/components/internet/telephony/TelephonyHero";
import FeatureGrid from "@/components/internet/telephony/FeatureGrid";
import ComparisonTable from "@/components/internet/telephony/ComparisonTable";
import ProcessTimeline from "@/components/internet/telephony/ProcessTimeline";
import PricingTiers from "@/components/internet/telephony/PricingTiers";
import TelephonyFAQ from "@/components/internet/telephony/TelephonyFAQ";
import RelatedServices from "@/components/internet/telephony/RelatedServices";
import CTABand from "@/components/internet/telephony/CTABand";
import ImagePlaceholder from "@/components/internet/telephony/ImagePlaceholder";
import { buildTelephonyJsonLd } from "@/components/internet/telephony/telephonySeo";

const PATH = "/services/internet/virtual-pbx-pakistan";

const title = "Virtual PBX in Pakistan | Cloud Phone System — BrainNET";
const description =
  "Virtual PBX in Pakistan — a cloud phone system with IVR, queues, recording and mobile extensions. No hardware, per-extension billing, live in days.";

export const Route = createFileRoute("/services/internet/virtual-pbx-pakistan")({
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
  component: VirtualPBX,
});

const features = [
  { Icon: Zap, title: "Live the same week", body: "No rack, no cabling, no lead time on hardware. Extensions are provisioned in the portal and your team is dialling within days." },
  { Icon: Smartphone, title: "Softphone, desk phone or mobile", body: "The same extension rings a desk handset, a laptop app and a mobile — staff answer the office number wherever they are." },
  { Icon: Users, title: "Per-extension billing", body: "Pay only for the seats you use. Add extensions for a seasonal team and remove them again the following month." },
  { Icon: Globe2, title: "Branches on one dial plan", body: "Lahore, Karachi and a remote team share one numbering scheme with free internal dialling between every site." },
  { Icon: Headphones, title: "IVR, queues & recording included", body: "Auto attendant, call queues, ring groups, voicemail-to-email and recording come with the platform rather than as licensed add-ons." },
  { Icon: ShieldCheck, title: "Redundant, monitored platform", body: "Hosted in our own carrier-grade core with redundant power and diverse fiber paths behind a 99.9% uptime SLA." },
  { Icon: Layers, title: "Self-service admin portal", body: "Move an extension, change a greeting, add a queue member or pull a call report without raising a ticket." },
  { Icon: Clock, title: "Zero maintenance windows", body: "Platform upgrades, security patches and feature releases are handled by us, out of hours, with nothing for your IT team to schedule." },
];

const comparisonRows = [
  { label: "Upfront cost", values: ["Low (no hardware)", "Higher (appliance + licences)"] },
  { label: "Deployment time", values: ["Days", "2–4 weeks"] },
  { label: "Remote & work-from-home staff", values: ["yes", "partial"] },
  { label: "Requires rack space, power & UPS", values: ["no", "yes"] },
  { label: "Recordings stored on your premises", values: ["no", "yes"] },
  { label: "Internal calls survive an internet outage", values: ["no", "yes"] },
  { label: "Scale up or down per month", values: ["yes", "no"] },
  { label: "Hardware refresh cycle to budget for", values: ["no", "yes"] },
];

const steps = [
  { n: "01", title: "Seat & flow discovery", body: "We agree extension count, departments, call flow and which staff need desk phones versus softphones or mobile apps." },
  { n: "02", title: "Numbers provisioned", body: "New city DIDs are issued or your existing numbers are ported, and the main line, departmental numbers and hunt groups are mapped." },
  { n: "03", title: "Tenant build", body: "Your cloud tenant is configured — extensions, IVR menus, queues, time conditions, voicemail and permissions." },
  { n: "04", title: "Device rollout & training", body: "Softphones installed, any desk handsets auto-provisioned, and a short walkthrough so staff know transfer, hold and queue etiquette." },
  { n: "05", title: "Go live & tune", body: "You go live under a 99.9% uptime SLA, with a review after the first month to adjust routing based on real call data." },
];

const tiers = [
  {
    badge: "STARTER",
    title: "Up to 10 extensions",
    scale: "Small teams and single offices",
    from: "Monthly per extension",
    fromNote: "No hardware, no setup capital",
    points: ["1 main number included", "Auto attendant & voicemail-to-email", "Softphone apps for desktop and mobile", "Business-hours onboarding"],
  },
  {
    badge: "MOST POPULAR",
    title: "10–50 extensions",
    scale: "Multi-department, multi-branch teams",
    from: "Volume per-extension pricing",
    fromNote: "Bundled discount with dedicated fiber and SIP trunking",
    points: [
      "Multi-level IVR & call queues",
      "Call recording with retention",
      "Branch-to-branch free dialling",
      "Live analytics & call reports",
      "Priority 24/7 support",
    ],
    featured: true,
  },
  {
    badge: "ENTERPRISE",
    title: "50+ extensions",
    scale: "Contact centres and national groups",
    from: "Custom quote",
    fromNote: "Committed seat pricing with named account manager",
    points: [
      "Supervisor dashboards & barge-in",
      "CRM integration and screen pop",
      "Custom international termination rates",
      "Signed 99.9% uptime SLA with credits",
      "Quarterly service reviews",
    ],
  },
];

const faqs = [
  { question: "What is a virtual PBX?", answer: "A virtual PBX — also called a hosted or cloud PBX — is a phone system that runs in the provider's data centre instead of on hardware at your office. Your extensions, IVR menus, queues and recordings all live in the cloud, and staff connect using IP desk phones, desktop softphones or a mobile app. There is nothing to rack, power or maintain on your side." },
  { question: "How much does a virtual PBX cost in Pakistan?", answer: "Virtual PBX is billed monthly per extension, with a small rental for each direct-dial number and per-minute charges for outbound calls. There is no hardware purchase, so the upfront cost is limited to any desk handsets you choose to buy. Exact pricing depends on seat count, the feature tier you need and whether it is bundled with BrainNET internet or SIP trunking." },
  { question: "Virtual PBX or on-premise IP PBX — which should I choose?", answer: "Choose virtual PBX if you have remote or multi-branch staff, want to be live in days, have no rack space, and prefer a predictable monthly cost. Choose an on-premise IP PBX if recordings must stay inside your building for compliance, if you need internal calling to survive an internet outage, or if your finance team prefers a one-time capital purchase." },
  { question: "Can my staff use their mobiles as office extensions?", answer: "Yes. Each extension can ring a desk phone, a desktop softphone and a mobile app simultaneously, or in sequence. Staff dial out showing the company caller ID from anywhere, and calls between colleagues stay internal and free regardless of where they are." },
  { question: "What happens to calls if our office internet fails?", answer: "Because the phone system itself is in our cloud, inbound calls keep arriving and can automatically reroute to mobile numbers, an alternate branch or voicemail. That is the key resilience advantage over an on-premise system, where an outage at the office takes the whole PBX offline." },
  { question: "Can I keep my existing numbers?", answer: "Yes. We port your existing landline numbers onto the platform and coordinate the cutover with your current operator, running both in parallel so no calls are missed. New city DIDs can be added alongside them at any time." },
  { question: "How many extensions can I add, and how quickly?", answer: "There is no practical ceiling — deployments range from five extensions to several hundred. Adding or removing seats is done in the admin portal and takes effect immediately, with billing adjusted from the following cycle. That elasticity is the main reason seasonal and campaign-driven teams choose cloud." },
  { question: "Do I need BrainNET internet to use the virtual PBX?", answer: "No, it works over any decent broadband connection. But voice quality depends on consistent latency and jitter, so most clients pair it with a BrainNET dedicated fiber link where voice traffic is prioritised — and get internet plus telephony on a single invoice." },
];

function VirtualPBX() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openQuote = () => setIsModalOpen(true);

  const jsonLd = buildTelephonyJsonLd({
    path: PATH,
    name: "Virtual PBX in Pakistan",
    serviceType: "Hosted cloud PBX",
    description:
      "Virtual PBX provider in Pakistan. Cloud phone system with IVR, call queues, recording, softphone and mobile extensions billed monthly, on BrainNET's own network.",
    breadcrumbLabel: "Virtual PBX in Pakistan",
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
        eyebrow="Virtual PBX in Pakistan"
        headline="Virtual PBX in Pakistan."
        headlineAccent="A phone system with nothing to rack."
        subcopy={
          <>
            A hosted cloud PBX with IVR, queues, recording and mobile extensions — billed per seat and
            live in days. Need the hardware on site instead? Compare it with{" "}
            <Link to="/services/internet/ip-pbx-pakistan" className="text-[hsl(var(--bn-violet-soft))] underline underline-offset-4">
              on-premise IP PBX
            </Link>
            .
          </>
        }
        badges={[
          { Icon: Cloud, label: "No hardware to buy" },
          { Icon: Smartphone, label: "Desk, desktop or mobile" },
          { Icon: Zap, label: "Live within days" },
        ]}
        imageLabel="Hero Banner Image"
        imageHint="Cinematic composite of a cloud PBX network graph over a modern Lahore office floor, deep indigo with red accent lighting — 1920×900"
        onQuote={openQuote}
      />

      <ClientLogoSlider />

      {/* ---------- Why cloud ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal className="lg:col-span-6">
              <span className="bn-eyebrow">Why cloud</span>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] bn-display mt-5">
                Your team moved. <span className="bn-display-accent">Your phone system didn't.</span>
              </h2>
              <div className="flex flex-col gap-4 mt-6 font-dm text-[hsl(var(--bn-ink-soft))] leading-relaxed">
                <p>
                  Most phone systems in Pakistan were designed around a single building with everyone
                  at a desk. That assumption broke the moment sales started working from client sites,
                  support ran a night shift from home, and the business opened a second branch.
                </p>
                <p>
                  A virtual PBX puts the system in our data centre instead of your rack. The extension
                  follows the person — desk phone, laptop, mobile — and every branch shares one dial
                  plan with free internal calling between them.
                </p>
                <p>
                  There's no capital outlay, no maintenance window and no hardware refresh to budget
                  for in year five. You add a seat when you hire and drop it when you don't.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-6">
              <ImagePlaceholder
                label="Cloud PBX Architecture Diagram"
                hint="Neon line-art: cloud PBX core radiating to desk phone, laptop softphone, mobile app and a second branch, indigo on deep navy — 1200×900"
                aspect="aspect-[4/3]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="What's included"
        title={<>Enterprise features, <span className="bn-display-accent">no enterprise hardware.</span></>}
        kicker="Everything below ships with the platform — not as a licensed extra."
        items={features}
        columns={4}
      />

      <ComparisonTable
        title={<>Cloud virtual PBX vs <span className="bn-display-accent">on-premise IP PBX.</span></>}
        kicker="The honest trade-offs. We sell both, so we have no reason to bend this table."
        columns={["Virtual (cloud) PBX", "On-premise IP PBX"]}
        rows={comparisonRows}
        highlightIndex={0}
        caption="Comparison of cloud virtual PBX and on-premise IP PBX systems in Pakistan"
      />

      <CTABand
        title="Not sure which model fits?"
        body="Tell us your seat count and how spread out your team is — we'll recommend cloud or on-premise honestly."
        onQuote={openQuote}
        showWhatsApp
      />

      <ProcessTimeline
        title={<>From first call to <span className="bn-display-accent">first extension ringing.</span></>}
        kicker="Most virtual PBX deployments are live within a week, porting aside."
        steps={steps}
        imageLabel="Rollout Visual"
        imageHint="Office staff on softphone headsets with a cloud PBX admin dashboard on screen, indigo grade with red rim light — 1000×1000"
      />

      <PricingTiers
        eyebrow="Virtual PBX pricing"
        title={<>Billed per extension. <span className="bn-display-accent">Nothing to depreciate.</span></>}
        kicker="A monthly seat charge plus number rental and outbound minutes — inbound calls included."
        tiers={tiers}
        footnote="Indicative tiers only. Final virtual PBX pricing in Pakistan depends on extension count, feature tier, DID quantity, call volume and whether the service is bundled with BrainNET dedicated fiber. See our PBX price guide for how cloud compares against on-premise over five years."
        onQuote={openQuote}
      />

      {/* ---------- Pairing ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Works with"
            title={<>Better on <span className="bn-display-accent">our own network.</span></>}
            kicker="Pair the cloud phone system with the lines and routing underneath it."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              { to: "/services/internet/sip-trunk-providers-pakistan", title: "SIP Trunk", body: "Licensed channels carrying calls into your cloud tenant, sized to your busy hour." },
              { to: "/services/internet/ivr-services-pakistan", title: "IVR Services", body: "Urdu and English auto-attendant menus, queues and skills-based routing on top of your tenant." },
              { to: "/services/internet/business-internet", title: "Dedicated Internet", body: "Uncontended 1:1 fiber with QoS on voice traffic, on one invoice with your telephony." },
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
        id="vpbx"
        title={<>Virtual PBX in Pakistan, <span className="bn-display-accent">answered plainly.</span></>}
        kicker="What businesses ask before moving their phone system to the cloud."
        faqs={faqs}
      />

      <RelatedServices currentPath={PATH} />

      <FinalCTASection />
      <Footer />

      <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
