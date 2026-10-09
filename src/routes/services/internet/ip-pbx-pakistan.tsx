import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import {
  Server,
  ShieldCheck,
  Cpu,
  HardDrive,
  Wrench,
  Network,
  Lock,
  Wallet,
  Layers,
  Building2,
  Users,
  Gauge,
} from "lucide-react";

import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { AvailabilityCheckerModal } from "@/components/internet/AvailabilityCheckerModal";
import FinalCTASection from "@/components/internet/home/FinalCTASection";
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

const PATH = "/services/internet/ip-pbx-pakistan";

const title = "IP PBX in Pakistan | IP PBX Price, Supply & Installation — BrainNET";
const description =
  "IP PBX systems in Pakistan — Yeastar, Grandstream, Asterisk & FreePBX supplied, installed and maintained. On-premise control, SIP trunk ready, on-site engineers.";

export const Route = createFileRoute("/services/internet/ip-pbx-pakistan")({
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
  component: IPPBX,
});

const features = [
  { Icon: Server, title: "Appliance or server build", body: "Yeastar, Grandstream and Sangoma appliances for smaller sites; Asterisk, FreePBX or Issabel on a rack server where you need full customisation." },
  { Icon: Lock, title: "Your data stays on site", body: "Call recordings, voicemail and CDRs live inside your own building — the deciding factor for banks, legal firms and anyone with data-residency rules." },
  { Icon: Network, title: "SIP trunk ready", body: "Pre-configured against BrainNET SIP trunks with codecs, NAT and firewall rules tuned before the appliance ever leaves our bench." },
  { Icon: Layers, title: "IVR, queues & recording built in", body: "Auto attendant, hunt groups, ring groups, call queues, voicemail-to-email and recording, all licensed with the system." },
  { Icon: Cpu, title: "Sized for concurrency, not seats", body: "We spec CPU, RAM and transcoding headroom against your busy-hour concurrent calls so the system never chokes mid-shift." },
  { Icon: HardDrive, title: "Backup & redundancy", body: "Scheduled configuration backups, optional hot-standby appliance and UPS-backed power planning for critical sites." },
  { Icon: Wrench, title: "On-site maintenance contracts", body: "Annual maintenance with firmware patching, licence renewals, dial-plan changes and a same-day engineer callout in Lahore." },
  { Icon: ShieldCheck, title: "Hardened against toll fraud", body: "SIP ACLs, fail2ban, strong extension secrets and international dialling locks configured as standard, not as an afterthought." },
];

const comparisonRows = [
  { label: "Upfront cost", values: ["Higher (hardware + licences)", "Low (monthly per extension)"] },
  { label: "Monthly cost", values: ["Low (maintenance only)", "Recurring per extension"] },
  { label: "Recordings & data stored on your premises", values: ["yes", "no"] },
  { label: "Works during an internet outage (internal calls)", values: ["yes", "no"] },
  { label: "Scales instantly to new sites", values: ["partial", "yes"] },
  { label: "Requires rack space, power & UPS", values: ["yes", "no"] },
  { label: "You control every dial-plan detail", values: ["yes", "partial"] },
  { label: "Hardware refresh every 5–7 years", values: ["yes", "no"] },
];

const steps = [
  { n: "01", title: "Site survey & sizing", body: "Extension count, busy-hour concurrency, existing handsets, cabling and rack/power availability are surveyed on site." },
  { n: "02", title: "Hardware & licence proposal", body: "A written bill of materials: appliance or server model, extension licences, handsets, gateways and any FXO/FXS cards for legacy lines." },
  { n: "03", title: "Bench build & configuration", body: "The system is built and configured in our lab — dial plans, IVR, queues, trunk credentials and security hardening — before it ships." },
  { n: "04", title: "Installation & handset rollout", body: "Rack mounting, power, VLAN and QoS setup, handset provisioning and desk-by-desk extension assignment at your site." },
  { n: "05", title: "Training & maintenance handover", body: "Admin training for your IT team, documented dial plan, and an annual maintenance contract with named engineer escalation." },
];

const tiers = [
  {
    badge: "SMALL OFFICE",
    title: "Up to 25 extensions",
    scale: "Compact appliance, 8–15 concurrent calls",
    from: "One-time hardware + licences",
    fromNote: "Plus optional annual maintenance",
    points: ["Appliance-class IP PBX", "Auto attendant & voicemail", "Basic call recording", "Installation & handset provisioning"],
  },
  {
    badge: "MOST POPULAR",
    title: "25–100 extensions",
    scale: "Rack server, 30–60 concurrent calls",
    from: "Quoted on bill of materials",
    fromNote: "Hardware, licences, handsets and installation itemised",
    points: [
      "Multi-level IVR & call queues",
      "Full recording with retention policy",
      "SIP trunk integration & failover",
      "VLAN / QoS network design",
      "Annual maintenance contract",
    ],
    featured: true,
  },
  {
    badge: "ENTERPRISE",
    title: "100+ extensions",
    scale: "Redundant pair, multi-branch",
    from: "Custom project quote",
    fromNote: "Includes HA design, UAT and staged rollout",
    points: [
      "Hot-standby / HA appliance pair",
      "Multi-site inter-branch dialling",
      "CRM & directory integration",
      "Priority on-site SLA",
      "Named account manager",
    ],
  },
];

const drivers = [
  { Icon: Users, title: "Extension count & licences", body: "Most vendors licence in bands — 25, 50, 100 users. Crossing a band is the single biggest step change in an IP PBX quote.", impact: "Highest impact" },
  { Icon: Gauge, title: "Concurrent call capacity", body: "Concurrency drives the hardware class and transcoding licences. A 50-seat sales floor costs more than a 50-seat back office.", impact: "High impact" },
  { Icon: Building2, title: "Handsets & gateways", body: "IP phones are usually the largest line item after the system itself, and FXO/FXS gateways are needed to keep legacy analogue lines or door phones alive.", impact: "High impact" },
  { Icon: Wallet, title: "Redundancy & maintenance", body: "A hot-standby appliance, UPS provisioning and an annual maintenance contract add cost — and are what keep the system running past year three.", impact: "Medium impact" },
];

const faqs = [
  { question: "What is an IP PBX and how is it different from a traditional PBX?", answer: "An IP PBX is a phone system that routes calls over your data network using SIP, instead of over dedicated copper pairs like a traditional analogue PABX. Extensions are IP handsets or softphones, features such as IVR and call recording are software rather than add-on cards, and the system connects to the outside world through SIP trunks rather than PRI or analogue lines." },
  { question: "How much does an IP PBX cost in Pakistan?", answer: "An IP PBX is largely a one-time capital purchase: the appliance or server, extension licences, IP handsets, any FXO/FXS gateways, and installation. Ongoing cost is limited to an annual maintenance contract and your SIP trunk charges. Because the bill of materials changes completely between a 20-extension office and a 150-extension multi-branch deployment, we quote against a site survey rather than publishing a flat price." },
  { question: "Should I choose an IP PBX or a virtual (cloud) PBX?", answer: "Choose an on-premise IP PBX if you need call recordings and data to stay inside your building, want internal calls to keep working during an internet outage, or prefer a capital purchase over a monthly subscription. Choose a virtual PBX if you have distributed or remote teams, no rack space, and would rather pay per extension monthly with no hardware to maintain." },
  { question: "Which IP PBX brands do you supply and support?", answer: "We deploy appliance-based systems from Yeastar, Grandstream and Sangoma, and open-platform builds on Asterisk, FreePBX and Issabel where deeper customisation is needed. We also support existing 3CX and Cisco CUCM estates when connecting them to our SIP trunks." },
  { question: "Can I keep my existing phone numbers and analogue lines?", answer: "Yes. Existing numbers are ported onto SIP trunks, and any analogue equipment you need to retain — legacy handsets, fax machines, lift or door phones — is kept alive through FXO/FXS gateways connected to the IP PBX." },
  { question: "What happens if the IP PBX hardware fails?", answer: "Configuration backups are scheduled so a replacement unit can be restored quickly. For critical sites we deploy a hot-standby appliance that takes over automatically, and inbound calls can fail over to mobile numbers or a cloud instance while the primary is restored." },
  { question: "Do you provide installation and ongoing maintenance?", answer: "Yes. Our engineers handle rack mounting, network VLAN and QoS setup, handset provisioning and desk-by-desk rollout. Annual maintenance covers firmware patching, licence renewals, dial-plan changes and same-day on-site callout within Lahore." },
  { question: "How long does an IP PBX deployment take?", answer: "Typically two to four weeks. Hardware lead time and handset supply are usually the longest part; the system itself is pre-built and configured on our bench, so on-site installation and rollout for a mid-sized office is generally completed within two working days." },
];

function IPPBX() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openQuote = () => setIsModalOpen(true);

  const jsonLd = buildTelephonyJsonLd({
    path: PATH,
    name: "IP PBX Systems in Pakistan",
    serviceType: "IP PBX supply, installation and maintenance",
    description:
      "IP PBX supplier in Pakistan. On-premise phone systems from Yeastar, Grandstream, Sangoma, Asterisk and FreePBX with installation, handsets, SIP trunk integration and annual maintenance.",
    breadcrumbLabel: "IP PBX in Pakistan",
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
        eyebrow="IP PBX in Pakistan"
        headline="IP PBX systems in Pakistan."
        headlineAccent="Your phone system, in your building."
        subcopy={
          <>
            On-premise IP PBX supplied, configured, installed and maintained by our own engineers —
            with recordings and dial plans that never leave your site. Prefer no hardware? See{" "}
            <Link to="/services/internet/virtual-pbx-pakistan" className="text-[hsl(var(--bn-violet-soft))] underline underline-offset-4">
              virtual PBX
            </Link>
            .
          </>
        }
        badges={[
          { Icon: Lock, label: "Data stays on premises" },
          { Icon: Server, label: "Yeastar, Asterisk & FreePBX" },
          { Icon: Wrench, label: "On-site engineers in Lahore" },
        ]}
        imageLabel="Hero Banner Image"
        imageHint="Cinematic server rack with an IP PBX appliance and patched handset cabling, deep indigo with red status LEDs — 1920×900"
        onQuote={openQuote}
      />

      <ClientLogoSlider />

      {/* ---------- Why on-premise ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal className="lg:col-span-6">
              <span className="bn-eyebrow">Why on-premise</span>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] bn-display mt-5">
                Own the system. <span className="bn-display-accent">Own the recordings.</span>
              </h2>
              <div className="flex flex-col gap-4 mt-6 font-dm text-[hsl(var(--bn-ink-soft))] leading-relaxed">
                <p>
                  For banks, legal firms, hospitals and anyone with data-residency obligations, the
                  question isn't features — it's where the recordings sit. An on-premise IP PBX keeps
                  call recordings, voicemail and call detail records inside your own rack, under your
                  own retention policy.
                </p>
                <p>
                  It's also a capital purchase rather than a subscription. After the hardware and
                  licences are paid for, the running cost is an annual maintenance contract and your
                  SIP trunk — which is why finance teams with a five-year horizon usually prefer it.
                </p>
                <p>
                  And when the internet drops, internal extension-to-extension calling keeps working.
                  On a cloud platform, it does not.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-6">
              <ImagePlaceholder
                label="IP PBX Architecture Diagram"
                hint="Neon line-art: SIP trunk → on-premise IP PBX appliance → LAN switch → IP handsets & softphones, indigo on deep navy — 1200×900"
                aspect="aspect-[4/3]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="What you get"
        title={<>Specified, hardened, <span className="bn-display-accent">then installed properly.</span></>}
        kicker="Every system is built and tested on our bench before an engineer ever brings it to your site."
        items={features}
        columns={4}
      />

      <ComparisonTable
        title={<>On-premise IP PBX vs <span className="bn-display-accent">cloud virtual PBX.</span></>}
        kicker="The honest trade-offs, so you can pick on facts rather than fashion."
        columns={["On-premise IP PBX", "Virtual (cloud) PBX"]}
        rows={comparisonRows}
        highlightIndex={0}
        caption="Comparison of on-premise IP PBX and cloud virtual PBX systems in Pakistan"
      />

      <CTABand
        title="Want the bill of materials before you commit?"
        body="Book a free site survey and we'll send an itemised hardware, licence and installation quote."
        onQuote={openQuote}
        showWhatsApp
      />

      <ProcessTimeline
        title={<>Surveyed, bench-built, <span className="bn-display-accent">then racked.</span></>}
        kicker="Typically two to four weeks end to end, with on-site rollout completed in a couple of days."
        steps={steps}
        imageLabel="Installation Visual"
        imageHint="BrainNET engineer racking a PBX appliance and patching handset cabling, red rim light on indigo — 1000×1000"
      />

      <PricingTiers
        eyebrow="IP PBX price in Pakistan"
        title={<>A capital purchase, <span className="bn-display-accent">itemised line by line.</span></>}
        kicker="Hardware, extension licences, handsets and installation quoted separately so you can see exactly what you're buying."
        tiers={tiers}
        footnote="Indicative tiers only. Final IP PBX price in Pakistan depends on extension count and licence band, concurrent call capacity, handset models, FXO/FXS gateways for legacy lines, redundancy and the maintenance contract selected. For a full price breakdown across system types, see our PBX price guide."
        onQuote={openQuote}
      />

      <CostDrivers
        title={<>What actually sets <span className="bn-display-accent">the quote.</span></>}
        kicker="Four variables decide most of an IP PBX bill of materials."
        drivers={drivers}
        imageLabel="Hardware Line-up"
        imageHint="Product still-life of PBX appliance, IP handsets and gateway on a dark reflective surface, indigo key light with red rim — 900×1125"
      />

      <TelephonyFAQ
        id="ippbx"
        title={<>IP PBX in Pakistan, <span className="bn-display-accent">answered plainly.</span></>}
        kicker="What IT managers ask before signing off the hardware."
        faqs={faqs}
      />

      <RelatedServices currentPath={PATH} />

      <FinalCTASection />
      <Footer />

      <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
