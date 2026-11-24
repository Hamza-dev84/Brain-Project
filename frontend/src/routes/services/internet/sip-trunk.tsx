// import { useState } from "react";
// import { createFileRoute } from "@tanstack/react-router";
// import { Link } from "@/lib/router-compat";
// import {
//   Network,
//   ShieldCheck,
//   Gauge,
//   Repeat,
//   PhoneForwarded,
//   Server,
//   Layers,
//   Wallet,
//   Users,
//   Globe2,
// } from "lucide-react";

// import Header from "@/components/internet/Header";
// import Footer from "@/components/internet/Footer";
// import { Breadcrumb } from "@/components/internet/Breadcrumb";
// import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
// import { AvailabilityCheckerModal } from "@/components/internet/AvailabilityCheckerModal";
// import FinalCTASection from "@/components/internet/home/FinalCTASection";
// import SectionHeader from "@/components/internet/home/SectionHeader";
// import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";

// import TelephonyHero from "@/components/internet/telephony/TelephonyHero";
// import FeatureGrid from "@/components/internet/telephony/FeatureGrid";
// import ComparisonTable from "@/components/internet/telephony/ComparisonTable";
// import ProcessTimeline from "@/components/internet/telephony/ProcessTimeline";
// import PricingTiers from "@/components/internet/telephony/PricingTiers";
// import CostDrivers from "@/components/internet/telephony/CostDrivers";
// import TelephonyFAQ from "@/components/internet/telephony/TelephonyFAQ";
// import RelatedServices from "@/components/internet/telephony/RelatedServices";
// import CTABand from "@/components/internet/telephony/CTABand";
// import ImagePlaceholder from "@/components/internet/telephony/ImagePlaceholder";
// import { buildTelephonyJsonLd } from "@/components/internet/telephony/telephonySeo";

// const PATH = "/services/internet/sip-trunk";

// const title = "SIP Trunk Providers in Pakistan | Licensed SIP Trunking — BrainNET";
// const description =
//   "Licensed SIP trunk providers in Pakistan. Replace PRI lines with elastic SIP channels, keep your numbers, works with Asterisk and 3CX. 99.9% uptime SLA.";

// export const Route = createFileRoute("/services/internet/sip-trunk")({
//   head: () => ({
//     meta: [
//       { title },
//       { name: "description", content: description },
//       { property: "og:title", content: title },
//       { property: "og:description", content: description },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: SIPTrunkPage,
// });

// const features = [
//   {
//     Icon: Network,
//     title: "Channels sized to real traffic",
//     body: "We measure your busy-hour concurrency before quoting, then provision exactly the channel count you need — with headroom you can burst into.",
//   },
//   {
//     Icon: Repeat,
//     title: "Elastic up and down",
//     body: "Seasonal campaign, new call-centre shift, or a quiet quarter? Channels are added or dropped within the same billing cycle.",
//   },
//   {
//     Icon: PhoneForwarded,
//     title: "Number porting & new DIDs",
//     body: "Keep the landline numbers printed on your invoices and signage. We coordinate the release and plan a zero-downtime cutover.",
//   },
//   {
//     Icon: Server,
//     title: "Works with any IP PBX",
//     body: "Registration or IP-authenticated trunks tested against Asterisk, FreePBX, 3CX, Issabel, Grandstream, Yeastar and Cisco CUCM.",
//   },
//   {
//     Icon: ShieldCheck,
//     title: "Fraud & toll-abuse controls",
//     body: "Per-trunk call caps, destination whitelisting, IP ACLs and anomaly alerts so a compromised extension can't run up an international bill.",
//   },
//   {
//     Icon: Gauge,
//     title: "Voice-priority fiber",
//     body: "Trunks ride BrainNET's own last mile with QoS applied to SIP and RTP, so voice never competes with a large file upload.",
//   },
// ];

// const comparisonRows = [
//   { label: "Line rental per channel", values: ["High, fixed in blocks of 30", "Low, per channel", "Low, per channel"] },
//   { label: "Add capacity in days, not months", values: ["no", "yes", "yes"] },
//   { label: "Local licensed operator", values: ["yes", "no", "yes"] },
//   { label: "Dedicated fiber last mile included", values: ["partial", "no", "yes"] },
//   { label: "Keep existing numbers", values: ["yes", "partial", "yes"] },
//   { label: "Disaster failover to mobile / alternate site", values: ["no", "partial", "yes"] },
//   { label: "Itemised billing & call detail records", values: ["partial", "partial", "yes"] },
//   { label: "On-site engineers for PBX integration", values: ["partial", "no", "yes"] },
// ];

// const steps = [
//   {
//     n: "01",
//     title: "Traffic & PBX audit",
//     body: "We review your call detail records, busy-hour concurrency and existing PBX model to size the trunk correctly.",
//   },
//   {
//     n: "02",
//     title: "Channel & number plan",
//     body: "Channel count, DID ranges, dial plan and outbound caller-ID rules are agreed in writing before anything is provisioned.",
//   },
//   {
//     n: "03",
//     title: "Trunk provisioning",
//     body: "SIP credentials or IP authentication issued, codecs (G.711 / G.729) and NAT traversal settings tuned for your firewall.",
//   },
//   {
//     n: "04",
//     title: "Parallel run & porting",
//     body: "The new trunk runs alongside your PRI while numbers port, so no call is lost during the transition.",
//   },
//   {
//     n: "05",
//     title: "Cutover & SLA handover",
//     body: "Old lines are decommissioned only after load tests pass. You go live with a 99.9% uptime SLA and 24/7 NOC escalation.",
//   },
// ];

// const tiers = [
//   {
//     badge: "SMALL OFFICE",
//     title: "4–8 channels",
//     scale: "Up to ~25 staff, light outbound",
//     from: "Quoted per channel",
//     fromNote: "Monthly channel rental + per-minute termination",
//     points: ["2 DID numbers included", "IP or registration auth", "Basic fraud caps", "Business-hours onboarding"],
//   },
//   {
//     badge: "MOST POPULAR",
//     title: "15–30 channels",
//     scale: "Growing SME, sales & support desks",
//     from: "Volume channel pricing",
//     fromNote: "Bundled discount when paired with dedicated fiber",
//     points: [
//       "DID range + number porting managed",
//       "Failover routing to a secondary site",
//       "Call detail records & analytics",
//       "Priority 24/7 support",
//       "PBX integration assistance",
//     ],
//     featured: true,
//   },
//   {
//     badge: "CONTACT CENTRE",
//     title: "50–300+ channels",
//     scale: "BPOs, call centres, multi-branch groups",
//     from: "Custom termination rates",
//     fromNote: "Committed volume pricing with named account manager",
//     points: [
//       "Redundant trunks on diverse paths",
//       "Custom local & international rates",
//       "SBC / CUCM integration support",
//       "Signed 99.9% uptime SLA with credits",
//       "Quarterly capacity reviews",
//     ],
//   },
// ];

// const drivers = [
//   {
//     Icon: Layers,
//     title: "Concurrent channels",
//     body: "The single biggest factor. Channels are billed monthly, so right-sizing against your busy hour is where most of the saving is.",
//     impact: "Highest impact",
//   },
//   {
//     Icon: Globe2,
//     title: "Destination mix",
//     body: "Local, national, mobile and international minutes each carry different termination rates. A heavy international mix changes the per-minute average.",
//     impact: "High impact",
//   },
//   {
//     Icon: Wallet,
//     title: "DID quantity",
//     body: "Each direct-dial number carries a small monthly rental. Departmental or per-agent DIDs add up at scale.",
//     impact: "Medium impact",
//   },
//   {
//     Icon: Users,
//     title: "Redundancy & failover",
//     body: "A second trunk on a diverse path, or automatic mobile failover, adds resilience — and a line item worth having for critical operations.",
//     impact: "Medium impact",
//   },
// ];

// const faqs = [
//   {
//     question: "What is a SIP trunk and how is it different from a PRI line?",
//     answer:
//       "A SIP trunk carries your phone calls over an IP data connection instead of copper or E1/PRI circuits. Where a PRI is sold in fixed blocks of 30 channels and takes weeks to change, a SIP trunk is a software-defined connection where channels can be added or removed on request, usually within the same billing cycle.",
//   },
//   {
//     question: "How many SIP channels do I need?",
//     answer:
//       "Count your busy-hour concurrent calls, not your total staff. A rough guide: small offices need one channel per 4 to 6 staff, sales-heavy teams one per 2 to 3, and contact centres roughly one per active agent plus 15% headroom. We size it precisely from your call detail records during the audit.",
//   },
//   {
//     question: "Which PBX systems work with your SIP trunks?",
//     answer:
//       "Any standards-compliant SIP PBX. We regularly deploy against Asterisk, FreePBX, Issabel, 3CX, Grandstream UCM, Yeastar and Cisco CUCM, using either IP authentication or registration credentials. If you do not have a PBX yet, we can supply an IP PBX or a hosted virtual PBX instead.",
//   },
//   {
//     question: "Can I keep my existing landline numbers?",
//     answer:
//       "Yes. Number porting is managed end to end. We coordinate release with your current operator, run the SIP trunk in parallel with the old lines during the transition, and only decommission the legacy circuits once every extension is answering correctly.",
//   },
//   {
//     question: "Is SIP trunking legal in Pakistan?",
//     answer:
//       "Yes, when delivered by a licensed operator over compliant interconnects. BrainNET provisions SIP trunks and termination through licensed routes, which is what separates a carrier-grade trunk from grey-route VoIP that can be blocked without warning.",
//   },
//   {
//     question: "How much does a SIP trunk cost in Pakistan?",
//     answer:
//       "Pricing has two components: a monthly rental per concurrent channel (plus a small rental per DID number), and per-minute termination charged by destination. Inbound calls to your DIDs are included. Because channel counts and destination mixes vary so widely, we quote against your actual traffic rather than publishing a flat rate.",
//   },
//   {
//     question: "What happens if my internet or power fails?",
//     answer:
//       "Inbound calls automatically reroute to a nominated mobile number, alternate branch or backup trunk, so callers still get through. Our core and exchange run on redundant power and diverse fiber paths behind a 99.9% uptime SLA.",
//   },
//   {
//     question: "How long does deployment take?",
//     answer:
//       "On sites already inside our fiber footprint, most SIP trunks are live in 5 to 10 working days including audit, provisioning, PBX configuration and load testing. Number porting can add a few days depending on the releasing operator.",
//   },
// ];

// const jsonLd = buildTelephonyJsonLd({
//   path: PATH,
//   name: "SIP Trunk Services in Pakistan",
//   serviceType: "SIP Trunking",
//   description:
//     "Licensed SIP trunk provider in Pakistan. Elastic SIP channels, DID numbers and number porting delivered over BrainNET's own fiber network with a 99.9% uptime SLA.",
//   breadcrumbLabel: "SIP Trunk Providers in Pakistan",
//   faqs,
//   offers: tiers.map((t) => ({ name: t.title, description: t.scale })),
// });

// function SIPTrunkPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openQuote = () => setIsModalOpen(true);

//   return (
//     <div className="bn-home min-h-screen relative overflow-x-hidden">
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
//       <Header />

//       <div className="pt-24 max-w-screen-xl mx-auto px-5 relative z-10">
//         <Breadcrumb />
//       </div>

//       <TelephonyHero
//         eyebrow="SIP Trunk Providers in Pakistan"
//         headline="SIP trunk providers in Pakistan."
//         headlineAccent="Retire the PRI, keep the numbers."
//         subcopy={
//           <>
//             Licensed SIP channels delivered over BrainNET's own fiber — sized to your busy hour, scalable within the
//             billing cycle and tested against every major IP PBX. Part of our wider{" "}
//             <Link
//               to="/services/internet/voip-services"
//               className="text-[hsl(var(--bn-violet-soft))] underline underline-offset-4"
//             >
//               VoIP services in Pakistan
//             </Link>
//             .
//           </>
//         }
//         badges={[
//           { Icon: ShieldCheck, label: "Licensed interconnects" },
//           { Icon: Repeat, label: "Channels scale on demand" },
//           { Icon: Server, label: "Any SIP-compliant PBX" },
//         ]}
//         imageLabel="Hero Banner Image"
//         imageHint="Cinematic fiber core-router close-up with SIP channel waveform overlay, deep indigo with red rim light"
//         onQuote={openQuote}
//       />

//       <ClientLogoSlider />

//       <section className="relative py-20 md:py-28 overflow-hidden">
//         <div className="relative z-10 max-w-screen-xl mx-auto px-5">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//             <ScrollReveal className="lg:col-span-6">
//               <span className="bn-eyebrow">Why replace PRI</span>
//               <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] bn-display mt-5">
//                 Thirty channels you don't use, <span className="bn-display-accent">billed every month.</span>
//               </h2>
//               <div className="flex flex-col gap-4 mt-6 font-dm text-[hsl(var(--bn-ink-soft))] leading-relaxed">
//                 <p>
//                   A PRI/E1 circuit is sold in fixed blocks. If your busy hour peaks at eleven concurrent calls, you are
//                   still paying for thirty — and the day you need thirty-one, you are waiting weeks for a second circuit
//                   and a second rental.
//                 </p>
//                 <p>
//                   SIP trunking removes the block. Channels are software-defined, so capacity follows your traffic
//                   instead of your contract. Numbers stay the same, handsets can stay the same, and the monthly line
//                   item finally matches what your business actually uses.
//                 </p>
//                 <p>
//                   Because BrainNET owns the fiber last mile, we can prioritise SIP signalling and RTP media on your
//                   circuit — the part offshore trunk resellers cannot control.
//                 </p>
//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={0.15} className="lg:col-span-6">
//               <ImagePlaceholder
//                 label="PRI vs SIP Trunk Diagram"
//                 hint="Split infographic: legacy PRI copper block of 30 fixed channels versus elastic SIP channels over fiber, indigo/red neon line-art"
//                 aspect="aspect-[4/3]"
//               />
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>

//       <FeatureGrid
//         eyebrow="What's included"
//         title={
//           <>
//             Carrier-grade trunks, <span className="bn-display-accent">without the carrier runaround.</span>
//           </>
//         }
//         kicker="Everything provisioned, tuned and monitored by the same team that runs the fiber underneath it."
//         items={features}
//       />

//       <ComparisonTable
//         title={
//           <>
//             PRI, offshore trunks, or <span className="bn-display-accent">a local carrier.</span>
//           </>
//         }
//         kicker="How SIP trunking from BrainNET compares to the two alternatives most Pakistani businesses evaluate."
//         columns={["Traditional PRI / E1", "Offshore SIP reseller", "BrainNET SIP Trunk"]}
//         rows={comparisonRows}
//         caption="Comparison of traditional PRI lines, offshore SIP resellers and BrainNET SIP trunk services in Pakistan"
//       />

//       <CTABand
//         title="Not sure how many channels you need?"
//         body="Send us a month of call records and we'll size the trunk — and the saving — for free."
//         onQuote={openQuote}
//         showWhatsApp
//       />

//       <ProcessTimeline
//         title={
//           <>
//             From audit to cutover, <span className="bn-display-accent">without dropping a call.</span>
//           </>
//         }
//         kicker="A clear path from traffic audit to SLA handover — typically 5 to 10 working days."
//         steps={steps}
//         imageLabel="Cutover Illustration"
//         imageHint="Neon line-art: legacy PBX and PRI flowing into a SIP trunk cloud and IP handsets, indigo on deep navy"
//       />

//       <PricingTiers
//         eyebrow="SIP trunk pricing"
//         title={
//           <>
//             Priced per channel. <span className="bn-display-accent">Quoted, not guessed.</span>
//           </>
//         }
//         kicker="Channel rental plus per-minute termination, with inbound calls to your DIDs included."
//         tiers={tiers}
//         footnote="Indicative tiers only. Final SIP trunk pricing in Pakistan depends on concurrent channels, DID quantity, destination mix and whether the trunk is bundled with a dedicated fiber connection."
//         onQuote={openQuote}
//       />

//       <CostDrivers
//         title={
//           <>
//             What actually moves <span className="bn-display-accent">your monthly bill.</span>
//           </>
//         }
//         kicker="Four variables decide the number on your invoice. Understanding them is how you cut it."
//         drivers={drivers}
//         imageLabel="Cost Breakdown Visual"
//         imageHint="Vertical infographic of stacked cost bars — channels, minutes, DIDs, redundancy — indigo gradient with red highlight"
//       />

//       <section className="relative py-20 md:py-28 overflow-hidden">
//         <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
//         <div className="relative z-10 max-w-screen-xl mx-auto px-5">
//           <SectionHeader
//             eyebrow="Pair it with a phone system"
//             title={
//               <>
//                 A trunk needs <span className="bn-display-accent">something to plug into.</span>
//               </>
//             }
//             kicker="Already running a PBX? We integrate with it. Starting fresh? Pick the model that fits your site."
//           />
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
//             {[
//               {
//                 to: "/services/internet/ip-pbx",
//                 title: "IP PBX (on-premise)",
//                 body: "Hardware at your site, full control of dial plans and recordings, one-time capital cost.",
//               },
//               {
//                 to: "/services/internet/virtual-pbx",
//                 title: "Virtual PBX (cloud)",
//                 body: "No hardware, no maintenance window — extensions billed monthly and scaled instantly.",
//               },
//               {
//                 to: "/services/internet/ivr-services",
//                 title: "IVR & call routing",
//                 body: "Layer Urdu and English auto-attendant menus, queues and skills-based routing on top.",
//               },
//             ].map((c) => (
//               <Link key={c.to} to={c.to} className="bn-tile p-7 flex flex-col gap-3 group">
//                 <h3 className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))] group-hover:text-[hsl(var(--bn-violet-soft))] transition-colors">
//                   {c.title}
//                 </h3>
//                 <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{c.body}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       <TelephonyFAQ
//         id="sip"
//         title={
//           <>
//             SIP trunking in Pakistan, <span className="bn-display-accent">answered plainly.</span>
//           </>
//         }
//         kicker="The questions our voice engineers field every week."
//         faqs={faqs}
//       />

//       <RelatedServices currentPath={PATH} />

//       <FinalCTASection />
//       <Footer />

//       <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
//     </div>
//   );
// }






import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import { ArrowRight, MessageCircle, Check, Phone, Headphones, Landmark, Building2, GraduationCap, ShoppingCart, Scale, PhoneCall, Route as RouteIcon, PhoneIncoming, PhoneOutgoing, ClipboardCheck, Rocket } from "lucide-react";
import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/internet/home/SectionHeader";
import TelephonyFAQ from "@/components/internet/telephony/TelephonyFAQ";
import RelatedServices from "@/components/internet/telephony/RelatedServices";
import { WHATSAPP } from "@/components/internet/telephony/telephonyLinks";
import {
  sipTrunkFaqs as faqs,
  sipTrunkTerms as terms,
  sipTrunkPricingModels as pricingModels,
  sipTrunkPlans as plans,
  sipTrunkPriceMovers as priceMovers,
  sipTrunkChannelSizing as channelSizing,
  sipTrunkProviderChecklist as providerChecklist,
} from "@/components/internet/telephony/sipTrunkContent";
import hero from "@/assets/internet/sip-trunk-hero.webp";
import setup from "@/assets/internet/sip-trunk-setup.webp";
import "@/components/internet/telephony/sip-trunk-page.css";

const PATH = "/services/internet/sip-trunk";
const SITE = "https://brain.net.pk";
const title = "SIP Trunk Providers in Pakistan: Business Voice Lines Sized to Your Call Volume | BrainNET";
const description = "SIP trunk providers in Pakistan — virtual phone lines with DID and DOD numbers, sized to your peak call volume. Licensed routing, PKR pricing, written quote within 24 hours.";
const jsonLd = [
  { "@context": "https://schema.org", "@type": "Service", name: "SIP Trunk Providers in Pakistan", serviceType: "SIP trunking with DID and DOD numbers", description, url: `${SITE}${PATH}`, provider: { "@type": "Organization", name: "BrainNET", url: SITE }, areaServed: { "@type": "Country", name: "Pakistan" } },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }, { "@type": "ListItem", position: 2, name: "Internet Services", item: `${SITE}/services/internet` }, { "@type": "ListItem", position: 3, name: "SIP Trunk Providers in Pakistan", item: `${SITE}${PATH}` }] },
];
export const Route = createFileRoute("/services/internet/sip-trunk")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] }),
  component: SIPTrunk,
});

const howItWorks = [
  { Icon: PhoneIncoming, title: "Caller dials your business number (a DID)", body: "The provider's network receives the call and sends it over the internet to your PBX." },
  { Icon: RouteIcon, title: "Your PBX routes the call", body: "It goes to an extension, IVR or queue — exactly the rules you set." },
  { Icon: PhoneOutgoing, title: "Outbound calls travel in reverse", body: "Over the same trunk to local, mobile and international destinations." },
];
const comparisonRows = [
  ["Carried over", "Internet or private IP link", "Dedicated digital circuit", "Copper pair"],
  ["Capacity", "Channels added or removed on request", "Fixed (typically 30 channels per E1)", "One call per line"],
  ["Adding capacity", "Often within days", "New circuit, longer lead time", "New line per call"],
  ["Multi-site", "Same provider, numbers shared across sites", "Separate circuit per site", "Separate lines per site"],
  ["Needs", "Stable internet and a SIP-capable PBX", "Digital PBX or gateway", "Analog PBX or gateway"],
  ["Best for", "Growing offices, call centres, branches", "Large sites with existing digital PBX", "Very small offices"],
];
const fitRows = [
  { Icon: Headphones, business: "Call centres and BPOs", setup: "High channel count, DID pools, recording", gain: "Scale agents without new lines" },
  { Icon: Landmark, business: "Banks and finance", setup: "Redundant trunks, number porting, IVR", gain: "Reliable lines with tested failover" },
  { Icon: Building2, business: "Multi-branch companies", setup: "Shared numbers and pooled channels", gain: "One number plan across cities" },
  { Icon: GraduationCap, business: "Hospitals and universities", setup: "DIDs per department", gain: "Direct dialing without a receptionist" },
  { Icon: ShoppingCart, business: "E-commerce and logistics", setup: "SIP trunk + IVR", gain: "Order-status calls handled automatically" },
];
const goLiveSteps = [
  { Icon: ClipboardCheck, title: "Review", body: "We check your PBX, internet, call volume and numbers." },
  { Icon: Scale, title: "Quote", body: "An itemised PKR quote with channel count and routes." },
  { Icon: Phone, title: "Connect", body: "We configure the trunk on your PBX or ours, and set up DID/DOD numbers." },
  { Icon: PhoneCall, title: "Test and port", body: "Test calls on every route, then number porting where needed, running old and new lines in parallel." },
  { Icon: Rocket, title: "Go live", body: "Cut-over in a planned window, then ongoing support." },
];

function Section({ eyebrow, heading, kicker, children }: { eyebrow: string; heading: string; kicker?: ReactNode; children: ReactNode }) {
  return <section className="sipt-section"><div className="max-w-screen-xl mx-auto px-5"><SectionHeader eyebrow={eyebrow} title={heading} kicker={kicker} /><div className="mt-10">{children}</div></div></section>;
}
function Table({ columns, rows, caption }: { columns: string[]; rows: string[][]; caption: string }) {
  return <div className="sipt-table-wrap" role="region" aria-label={caption} tabIndex={0}><table className="sipt-table"><caption className="sr-only">{caption}</caption><thead><tr>{columns.map(c => <th key={c} scope="col">{c}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>;
}
function QuoteButtons() {
  const email = `mailto:info@brain.net.pk?subject=${encodeURIComponent("SIP Trunk — Free PKR Quote")}&body=${encodeURIComponent("Please send a written PKR quote for SIP trunk channels.\n\nCompany:\nContact number:\nPBX make and model:\nExisting numbers to keep:\nPeak concurrent calls and monthly call volume:\n")}`;
  return <div className="flex flex-col sm:flex-row gap-3"><Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display rounded-lg px-5"><a href={email}>Get a Free SIP Trunk Quote <ArrowRight /></a></Button><Button asChild variant="outlined" size="lg" className="sipt-outline rounded-lg px-5"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle /> Talk to a Voice Expert</a></Button></div>;
}

function SIPTrunk() {
  return <div className="bn-home sipt-page min-h-screen overflow-x-hidden"><Header /><div className="py-2 max-w-screen-xl mx-auto px-5"><Breadcrumb /></div><main id="main-content">
    <section className="sipt-hero"><img className="sipt-photo" src={hero} alt="Fiber-optic voice channels flowing into a core router in a data center" width={1536} height={864} fetchPriority="high" /><div className="max-w-screen-xl mx-auto px-5 py-10 md:py-12"><div className="max-w-2xl"><span className="bn-eyebrow">BrainNET Fiber · Business voice lines</span><h1 className="font-display font-bold mt-6">SIP Trunk Providers in Pakistan: <span className="bn-display-accent">Business Voice Lines Sized to Your Call Volume</span></h1><p className="sipt-muted font-dm text-base md:text-lg leading-relaxed mt-6">A SIP trunk is a virtual phone line. It sends your business calls over the internet to your PBX, replacing PRI and analog lines. You pay for channels — the number of calls you can run at once — not for physical cables.</p><p className="font-dm leading-relaxed mt-4">BrainNET provides SIP trunk channels with local numbers (DID) and outbound routing (DOD), for local and international calls — connected to your PBX or ours.</p><div className="mt-7"><QuoteButtons /></div></div></div></section>
    <div className="sipt-band"><div className="max-w-screen-xl mx-auto px-5 py-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">{["Channels sized to peak calls", "DID and DOD numbers", "Works with most SIP-capable PBXs", "Add or remove channels as volume changes", `Priced in ${terms.currency}`, `Written quote in ${terms.quoteWithinHours} hours`].map(text => <div key={text} className="flex gap-2 text-sm font-dm"><Check className="sipt-accent w-4 h-4 shrink-0 mt-0.5" />{text}</div>)}</div></div>
    <ClientLogoSlider />
    <Section eyebrow="How it works" heading="How a SIP trunk works" kicker="The trunk is the line; the PBX is the brain. Any SIP-capable PBX — including our IP PBX and Virtual PBX — can use it.">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <ol className="grid gap-6">{howItWorks.map(({ Icon, title: name, body }, i) => <li key={name} className="flex gap-4"><div className="shrink-0"><Icon className="sipt-accent w-6 h-6 mt-1" /><span className="sipt-accent font-display text-sm font-bold">0{i + 1}</span></div><div><h3 className="font-display font-semibold text-lg">{name}</h3><p className="sipt-muted font-dm text-sm mt-2 leading-relaxed">{body}</p></div></li>)}</ol>
        <img src={setup} alt="Engineer configuring a SIP trunk on a laptop beside a racked PBX and VoIP phone" width={1200} height={800} loading="lazy" className="w-full rounded-lg aspect-[3/2] object-cover" />
      </div>
      <p className="sipt-muted font-dm mt-8 leading-relaxed">Need the brain too? See our <Link className="sipt-link" to="/services/internet/ip-pbx">IP PBX</Link> and <Link className="sipt-link" to="/services/internet/virtual-pbx">Virtual PBX</Link> options.</p>
    </Section>
    <Section eyebrow="Compare your options" heading="SIP trunk vs PRI vs analog lines"><Table columns={["", "SIP trunk", "PRI", "Analog lines"]} rows={comparisonRows} caption="SIP trunk, PRI and analog line comparison" /></Section>
    <Section eyebrow="Sizing" heading="How many SIP channels do you need?" kicker={`One channel carries one call at a time. Size by peak concurrent calls, not headcount: identify your busiest hour, count the calls happening at the same time, then add ${terms.headroomPercent} for headroom (approximate rule).`}>
      <Table columns={["Business", "Typical need", "Notes"]} rows={channelSizing} caption="SIP channel sizing by business type" />
      <p className="sipt-muted font-dm mt-6 leading-relaxed">These are starting points. We check your call logs and recommend a number, so you neither overpay nor hear busy tones.</p>
    </Section>
    <Section eyebrow="Transparent pricing" heading="SIP trunk price in Pakistan" kicker={`SIP trunk pricing normally follows one of two models, and we quote in ${terms.currency}.`}>
      <Table columns={["Model", "How you pay", "Best for"]} rows={pricingModels} caption="SIP trunk pricing models" />
      <div className="mt-10"><Table columns={["Plan", "Monthly", "One-time", "Includes"]} rows={plans} caption="SIP trunk plans with quote-based PKR pricing" /></div>
      <div className="sipt-callout mt-8"><p className="font-dm text-sm leading-relaxed"><strong>What moves the price:</strong> {priceMovers.join(", ").replace(/, ([^,]*)$/, " and $1")}. Compare total cost, not the headline rate: numbers, porting, and taxes can change the bill. We send an itemised {terms.currency} quote within {terms.quoteWithinHours} hours.</p></div>
      <div className="mt-7"><QuoteButtons /></div>
    </Section>
    <Section eyebrow="Buyer's checklist" heading="How to choose a SIP trunk provider in Pakistan" kicker="A Bank of Khyber tender for SIP trunking reveals what enterprise buyers need. Use it as your checklist for any provider, including us.">
      <Table columns={["Ask the provider", "Why it matters", "What good looks like"]} rows={providerChecklist} caption="SIP trunk provider selection checklist" />
    </Section>
    <Section eyebrow="Compliance" heading="Is SIP trunking legal in Pakistan?">
      <div className="max-w-3xl flex flex-col gap-4 font-dm leading-relaxed">
        <p>Yes, through licensed channels. The PTA has said businesses can use legal VoIP services without extra permission, and it acts against traffic that skips licensed operators (Dawn, March 2020).</p>
        <p className="sipt-muted">For international calls, use licensed service providers and licensed LDI operators. Enterprise tenders such as the Bank of Khyber bid also ask providers to prove PTA approval. In practice, buy from a provider that can name its licence or carrier — and never use unlicensed termination. Confirm current rules with your provider or the PTA.</p>
      </div>
    </Section>
    <Section eyebrow="Who it's for" heading="Where SIP trunks fit"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{fitRows.map(({ Icon, business, setup: s, gain }) => <article className="bn-tile p-6" key={business}><Icon className="sipt-accent w-7 h-7" /><h3 className="font-display font-semibold text-xl mt-5">{business}</h3><p className="sipt-muted font-dm text-sm leading-relaxed mt-3">{s}</p><p className="font-dm text-sm leading-relaxed mt-4">{gain}</p></article>)}</div></Section>
    <Section eyebrow="Deployment" heading="Getting your SIP trunk live" kicker={`We size bandwidth too: plan roughly ${terms.bandwidthKbpsPerCall} kbps per concurrent call (approximate, standard codec), and consider Dedicated Internet where quality matters most.`}>
      <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">{goLiveSteps.map(({ Icon, title: name, body }, i) => <li key={name} className="border-t border-border pt-5"><Icon className="sipt-accent w-6 h-6" /><span className="sipt-accent font-display text-3xl font-bold block mt-3">0{i + 1}</span><h3 className="font-display font-semibold text-lg mt-4">{name}</h3><p className="sipt-muted font-dm text-sm mt-3 leading-relaxed">{body}</p></li>)}</ol>
      <p className="sipt-muted font-dm mt-8 leading-relaxed">Pair the trunk with an <Link className="sipt-link" to="/services/internet/ivr-services">Urdu and English IVR</Link> for a complete call-handling setup, and <Link className="sipt-link" to="/services/internet/dedicated-internet-lahore">Dedicated Internet</Link> where call quality matters most.</p>
    </Section>
    <TelephonyFAQ id="sipt" title="SIP Trunk FAQs" faqs={faqs} />
    <RelatedServices currentPath={PATH} />
    <section className="sipt-band sipt-section"><div className="max-w-screen-xl mx-auto px-5 text-center"><Phone className="sipt-accent w-10 h-10 mx-auto mb-5" /><h2 className="font-display font-bold">Ready for SIP trunk lines that fit your call volume?</h2><p className="sipt-muted font-dm text-lg max-w-2xl mx-auto mt-5 leading-relaxed">Send us your PBX, call volume, and numbers, and we will reply with an itemised {terms.currency} quote within {terms.quoteWithinHours} hours.</p><div className="flex justify-center mt-8"><QuoteButtons /></div></div></section>
  </main><Footer /></div>;
}
