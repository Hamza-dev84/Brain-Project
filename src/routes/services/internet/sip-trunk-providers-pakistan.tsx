import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import {
  Network,
  ShieldCheck,
  Gauge,
  Repeat,
  PhoneForwarded,
  Server,
  Layers,
  Wallet,
  Users,
  Globe2,
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
import CostDrivers from "@/components/internet/telephony/CostDrivers";
import TelephonyFAQ from "@/components/internet/telephony/TelephonyFAQ";
import RelatedServices from "@/components/internet/telephony/RelatedServices";
import CTABand from "@/components/internet/telephony/CTABand";
import ImagePlaceholder from "@/components/internet/telephony/ImagePlaceholder";
import { buildTelephonyJsonLd } from "@/components/internet/telephony/telephonySeo";

const PATH = "/services/internet/sip-trunk-providers-pakistan";

const title = "SIP Trunk Providers in Pakistan | Licensed SIP Trunking — BrainNET";
const description =
  "Licensed SIP trunk providers in Pakistan. Replace PRI lines with elastic SIP channels, keep your numbers, works with Asterisk and 3CX. 99.9% uptime SLA.";

export const Route = createFileRoute("/services/internet/sip-trunk-providers-pakistan")({
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
  component: SIPTrunkPage,
});

const features = [
  {
    Icon: Network,
    title: "Channels sized to real traffic",
    body: "We measure your busy-hour concurrency before quoting, then provision exactly the channel count you need — with headroom you can burst into.",
  },
  {
    Icon: Repeat,
    title: "Elastic up and down",
    body: "Seasonal campaign, new call-centre shift, or a quiet quarter? Channels are added or dropped within the same billing cycle.",
  },
  {
    Icon: PhoneForwarded,
    title: "Number porting & new DIDs",
    body: "Keep the landline numbers printed on your invoices and signage. We coordinate the release and plan a zero-downtime cutover.",
  },
  {
    Icon: Server,
    title: "Works with any IP PBX",
    body: "Registration or IP-authenticated trunks tested against Asterisk, FreePBX, 3CX, Issabel, Grandstream, Yeastar and Cisco CUCM.",
  },
  {
    Icon: ShieldCheck,
    title: "Fraud & toll-abuse controls",
    body: "Per-trunk call caps, destination whitelisting, IP ACLs and anomaly alerts so a compromised extension can't run up an international bill.",
  },
  {
    Icon: Gauge,
    title: "Voice-priority fiber",
    body: "Trunks ride BrainNET's own last mile with QoS applied to SIP and RTP, so voice never competes with a large file upload.",
  },
];

const comparisonRows = [
  { label: "Line rental per channel", values: ["High, fixed in blocks of 30", "Low, per channel", "Low, per channel"] },
  { label: "Add capacity in days, not months", values: ["no", "yes", "yes"] },
  { label: "Local licensed operator", values: ["yes", "no", "yes"] },
  { label: "Dedicated fiber last mile included", values: ["partial", "no", "yes"] },
  { label: "Keep existing numbers", values: ["yes", "partial", "yes"] },
  { label: "Disaster failover to mobile / alternate site", values: ["no", "partial", "yes"] },
  { label: "Itemised billing & call detail records", values: ["partial", "partial", "yes"] },
  { label: "On-site engineers for PBX integration", values: ["partial", "no", "yes"] },
];

const steps = [
  {
    n: "01",
    title: "Traffic & PBX audit",
    body: "We review your call detail records, busy-hour concurrency and existing PBX model to size the trunk correctly.",
  },
  {
    n: "02",
    title: "Channel & number plan",
    body: "Channel count, DID ranges, dial plan and outbound caller-ID rules are agreed in writing before anything is provisioned.",
  },
  {
    n: "03",
    title: "Trunk provisioning",
    body: "SIP credentials or IP authentication issued, codecs (G.711 / G.729) and NAT traversal settings tuned for your firewall.",
  },
  {
    n: "04",
    title: "Parallel run & porting",
    body: "The new trunk runs alongside your PRI while numbers port, so no call is lost during the transition.",
  },
  {
    n: "05",
    title: "Cutover & SLA handover",
    body: "Old lines are decommissioned only after load tests pass. You go live with a 99.9% uptime SLA and 24/7 NOC escalation.",
  },
];

const tiers = [
  {
    badge: "SMALL OFFICE",
    title: "4–8 channels",
    scale: "Up to ~25 staff, light outbound",
    from: "Quoted per channel",
    fromNote: "Monthly channel rental + per-minute termination",
    points: ["2 DID numbers included", "IP or registration auth", "Basic fraud caps", "Business-hours onboarding"],
  },
  {
    badge: "MOST POPULAR",
    title: "15–30 channels",
    scale: "Growing SME, sales & support desks",
    from: "Volume channel pricing",
    fromNote: "Bundled discount when paired with dedicated fiber",
    points: [
      "DID range + number porting managed",
      "Failover routing to a secondary site",
      "Call detail records & analytics",
      "Priority 24/7 support",
      "PBX integration assistance",
    ],
    featured: true,
  },
  {
    badge: "CONTACT CENTRE",
    title: "50–300+ channels",
    scale: "BPOs, call centres, multi-branch groups",
    from: "Custom termination rates",
    fromNote: "Committed volume pricing with named account manager",
    points: [
      "Redundant trunks on diverse paths",
      "Custom local & international rates",
      "SBC / CUCM integration support",
      "Signed 99.9% uptime SLA with credits",
      "Quarterly capacity reviews",
    ],
  },
];

const drivers = [
  {
    Icon: Layers,
    title: "Concurrent channels",
    body: "The single biggest factor. Channels are billed monthly, so right-sizing against your busy hour is where most of the saving is.",
    impact: "Highest impact",
  },
  {
    Icon: Globe2,
    title: "Destination mix",
    body: "Local, national, mobile and international minutes each carry different termination rates. A heavy international mix changes the per-minute average.",
    impact: "High impact",
  },
  {
    Icon: Wallet,
    title: "DID quantity",
    body: "Each direct-dial number carries a small monthly rental. Departmental or per-agent DIDs add up at scale.",
    impact: "Medium impact",
  },
  {
    Icon: Users,
    title: "Redundancy & failover",
    body: "A second trunk on a diverse path, or automatic mobile failover, adds resilience — and a line item worth having for critical operations.",
    impact: "Medium impact",
  },
];

const faqs = [
  {
    question: "What is a SIP trunk and how is it different from a PRI line?",
    answer:
      "A SIP trunk carries your phone calls over an IP data connection instead of copper or E1/PRI circuits. Where a PRI is sold in fixed blocks of 30 channels and takes weeks to change, a SIP trunk is a software-defined connection where channels can be added or removed on request, usually within the same billing cycle.",
  },
  {
    question: "How many SIP channels do I need?",
    answer:
      "Count your busy-hour concurrent calls, not your total staff. A rough guide: small offices need one channel per 4 to 6 staff, sales-heavy teams one per 2 to 3, and contact centres roughly one per active agent plus 15% headroom. We size it precisely from your call detail records during the audit.",
  },
  {
    question: "Which PBX systems work with your SIP trunks?",
    answer:
      "Any standards-compliant SIP PBX. We regularly deploy against Asterisk, FreePBX, Issabel, 3CX, Grandstream UCM, Yeastar and Cisco CUCM, using either IP authentication or registration credentials. If you do not have a PBX yet, we can supply an IP PBX or a hosted virtual PBX instead.",
  },
  {
    question: "Can I keep my existing landline numbers?",
    answer:
      "Yes. Number porting is managed end to end. We coordinate release with your current operator, run the SIP trunk in parallel with the old lines during the transition, and only decommission the legacy circuits once every extension is answering correctly.",
  },
  {
    question: "Is SIP trunking legal in Pakistan?",
    answer:
      "Yes, when delivered by a licensed operator over compliant interconnects. BrainNET provisions SIP trunks and termination through licensed routes, which is what separates a carrier-grade trunk from grey-route VoIP that can be blocked without warning.",
  },
  {
    question: "How much does a SIP trunk cost in Pakistan?",
    answer:
      "Pricing has two components: a monthly rental per concurrent channel (plus a small rental per DID number), and per-minute termination charged by destination. Inbound calls to your DIDs are included. Because channel counts and destination mixes vary so widely, we quote against your actual traffic rather than publishing a flat rate.",
  },
  {
    question: "What happens if my internet or power fails?",
    answer:
      "Inbound calls automatically reroute to a nominated mobile number, alternate branch or backup trunk, so callers still get through. Our core and exchange run on redundant power and diverse fiber paths behind a 99.9% uptime SLA.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "On sites already inside our fiber footprint, most SIP trunks are live in 5 to 10 working days including audit, provisioning, PBX configuration and load testing. Number porting can add a few days depending on the releasing operator.",
  },
];

const jsonLd = buildTelephonyJsonLd({
  path: PATH,
  name: "SIP Trunk Services in Pakistan",
  serviceType: "SIP Trunking",
  description:
    "Licensed SIP trunk provider in Pakistan. Elastic SIP channels, DID numbers and number porting delivered over BrainNET's own fiber network with a 99.9% uptime SLA.",
  breadcrumbLabel: "SIP Trunk Providers in Pakistan",
  faqs,
  offers: tiers.map((t) => ({ name: t.title, description: t.scale })),
});

function SIPTrunkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openQuote = () => setIsModalOpen(true);

  return (
    <div className="bn-home min-h-screen relative overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <div className="pt-24 max-w-screen-xl mx-auto px-5 relative z-10">
        <Breadcrumb />
      </div>

      <TelephonyHero
        eyebrow="SIP Trunk Providers in Pakistan"
        headline="SIP trunk providers in Pakistan."
        headlineAccent="Retire the PRI, keep the numbers."
        subcopy={
          <>
            Licensed SIP channels delivered over BrainNET's own fiber — sized to your busy hour, scalable within the
            billing cycle and tested against every major IP PBX. Part of our wider{" "}
            <Link
              to="/services/internet/voip-providers-pakistan"
              className="text-[hsl(var(--bn-violet-soft))] underline underline-offset-4"
            >
              VoIP services in Pakistan
            </Link>
            .
          </>
        }
        badges={[
          { Icon: ShieldCheck, label: "Licensed interconnects" },
          { Icon: Repeat, label: "Channels scale on demand" },
          { Icon: Server, label: "Any SIP-compliant PBX" },
        ]}
        imageLabel="Hero Banner Image"
        imageHint="Cinematic fiber core-router close-up with SIP channel waveform overlay, deep indigo with red rim light"
        onQuote={openQuote}
      />

      <ClientLogoSlider />

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal className="lg:col-span-6">
              <span className="bn-eyebrow">Why replace PRI</span>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] bn-display mt-5">
                Thirty channels you don't use, <span className="bn-display-accent">billed every month.</span>
              </h2>
              <div className="flex flex-col gap-4 mt-6 font-dm text-[hsl(var(--bn-ink-soft))] leading-relaxed">
                <p>
                  A PRI/E1 circuit is sold in fixed blocks. If your busy hour peaks at eleven concurrent calls, you are
                  still paying for thirty — and the day you need thirty-one, you are waiting weeks for a second circuit
                  and a second rental.
                </p>
                <p>
                  SIP trunking removes the block. Channels are software-defined, so capacity follows your traffic
                  instead of your contract. Numbers stay the same, handsets can stay the same, and the monthly line
                  item finally matches what your business actually uses.
                </p>
                <p>
                  Because BrainNET owns the fiber last mile, we can prioritise SIP signalling and RTP media on your
                  circuit — the part offshore trunk resellers cannot control.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-6">
              <ImagePlaceholder
                label="PRI vs SIP Trunk Diagram"
                hint="Split infographic: legacy PRI copper block of 30 fixed channels versus elastic SIP channels over fiber, indigo/red neon line-art"
                aspect="aspect-[4/3]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="What's included"
        title={
          <>
            Carrier-grade trunks, <span className="bn-display-accent">without the carrier runaround.</span>
          </>
        }
        kicker="Everything provisioned, tuned and monitored by the same team that runs the fiber underneath it."
        items={features}
      />

      <ComparisonTable
        title={
          <>
            PRI, offshore trunks, or <span className="bn-display-accent">a local carrier.</span>
          </>
        }
        kicker="How SIP trunking from BrainNET compares to the two alternatives most Pakistani businesses evaluate."
        columns={["Traditional PRI / E1", "Offshore SIP reseller", "BrainNET SIP Trunk"]}
        rows={comparisonRows}
        caption="Comparison of traditional PRI lines, offshore SIP resellers and BrainNET SIP trunk services in Pakistan"
      />

      <CTABand
        title="Not sure how many channels you need?"
        body="Send us a month of call records and we'll size the trunk — and the saving — for free."
        onQuote={openQuote}
        showWhatsApp
      />

      <ProcessTimeline
        title={
          <>
            From audit to cutover, <span className="bn-display-accent">without dropping a call.</span>
          </>
        }
        kicker="A clear path from traffic audit to SLA handover — typically 5 to 10 working days."
        steps={steps}
        imageLabel="Cutover Illustration"
        imageHint="Neon line-art: legacy PBX and PRI flowing into a SIP trunk cloud and IP handsets, indigo on deep navy"
      />

      <PricingTiers
        eyebrow="SIP trunk pricing"
        title={
          <>
            Priced per channel. <span className="bn-display-accent">Quoted, not guessed.</span>
          </>
        }
        kicker="Channel rental plus per-minute termination, with inbound calls to your DIDs included."
        tiers={tiers}
        footnote="Indicative tiers only. Final SIP trunk pricing in Pakistan depends on concurrent channels, DID quantity, destination mix and whether the trunk is bundled with a dedicated fiber connection."
        onQuote={openQuote}
      />

      <CostDrivers
        title={
          <>
            What actually moves <span className="bn-display-accent">your monthly bill.</span>
          </>
        }
        kicker="Four variables decide the number on your invoice. Understanding them is how you cut it."
        drivers={drivers}
        imageLabel="Cost Breakdown Visual"
        imageHint="Vertical infographic of stacked cost bars — channels, minutes, DIDs, redundancy — indigo gradient with red highlight"
      />

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Pair it with a phone system"
            title={
              <>
                A trunk needs <span className="bn-display-accent">something to plug into.</span>
              </>
            }
            kicker="Already running a PBX? We integrate with it. Starting fresh? Pick the model that fits your site."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              {
                to: "/services/internet/ip-pbx-pakistan",
                title: "IP PBX (on-premise)",
                body: "Hardware at your site, full control of dial plans and recordings, one-time capital cost.",
              },
              {
                to: "/services/internet/virtual-pbx-pakistan",
                title: "Virtual PBX (cloud)",
                body: "No hardware, no maintenance window — extensions billed monthly and scaled instantly.",
              },
              {
                to: "/services/internet/ivr-services-pakistan",
                title: "IVR & call routing",
                body: "Layer Urdu and English auto-attendant menus, queues and skills-based routing on top.",
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
        </div>
      </section>

      <TelephonyFAQ
        id="sip"
        title={
          <>
            SIP trunking in Pakistan, <span className="bn-display-accent">answered plainly.</span>
          </>
        }
        kicker="The questions our voice engineers field every week."
        faqs={faqs}
      />

      <RelatedServices currentPath={PATH} />

      <FinalCTASection />
      <Footer />

      <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
