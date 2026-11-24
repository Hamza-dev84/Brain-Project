
import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import { ArrowRight, MessageCircle, Check, Server, Gauge, Network, Zap, PlugZap, ShieldCheck, Building2, Headphones, GraduationCap, Factory, Landmark } from "lucide-react";
import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/internet/home/SectionHeader";
import TelephonyFAQ from "@/components/internet/telephony/TelephonyFAQ";
import RelatedServices from "@/components/internet/telephony/RelatedServices";
import { WHATSAPP } from "@/components/internet/telephony/telephonyLinks";
import { ipPBXFaqs as faqs, ipPBXStartingPrices as startingPrices, ipPBXSupportTerms as supportTerms, ipPBXTerms as terms } from "@/components/internet/telephony/ipPBXContent";
import hero from "@/assets/internet/ip-pbx-hero.webp";
import install from "@/assets/internet/ip-pbx-install.webp";
import "@/components/internet/telephony/ip-pbx-page.css";

const PATH = "/services/internet/ip-pbx";
const SITE = "https://brain.net.pk";
const title = "IP PBX Systems in Pakistan: Sized, Installed and Supported by One Team | BrainNET";
const description = "On-premise IP PBX systems in Pakistan — sized, supplied, installed and supported by one team. SIP trunk and analog line support, Urdu and English IVR, written PKR quotes within 24 hours.";
const jsonLd = [
  { "@context": "https://schema.org", "@type": "Service", name: "IP PBX Systems in Pakistan", serviceType: "IP PBX supply, installation and support", description, url: `${SITE}${PATH}`, provider: { "@type": "Organization", name: "BrainNET", url: SITE }, areaServed: { "@type": "Country", name: "Pakistan" } },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }, { "@type": "ListItem", position: 2, name: "Internet Services", item: `${SITE}/services/internet` }, { "@type": "ListItem", position: 3, name: "IP PBX Systems in Pakistan", item: `${SITE}${PATH}` }] },
];
export const Route = createFileRoute("/services/internet/ip-pbx")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] }),
  component: IPPBX,
});

const sizingRows = [
  ["5–20 users", "Compact IP PBX appliance", "Sized from your call volume", "Proposed after sizing", "Auto attendant, voicemail, a few SIP channels"],
  ["20–100 users", "Mid-range appliance or server", "Sized from your call volume", "Proposed after sizing", "IVR, queues, recording, analog lines for existing numbers"],
  ["100–300 users", "Higher-capacity appliance or server with failover", "Sized from your call volume", "Proposed after sizing", "Multiple SIP trunks, supervisors, analytics"],
  ["300+ users or multi-site", "Server-based or clustered system", "Sized from your call volume", "Proposed after sizing", "High availability, CRM integration, branch trunks"],
];
const featureRows = [
  ["Extensions and softphone apps", "Desk phones, PCs and mobiles register to one system", "Staff reachable on any device"],
  ["IVR auto attendant", "Urdu and English menus route callers", "Fewer missed and misrouted calls"],
  ["Queues and ring groups", "Distribute calls across teams", "Short, fair wait times"],
  ["Call recording", "Stores calls on the system or an external drive. Back recordings up. Tell callers they are recorded.", "Training, compliance and dispute records"],
  ["SIP trunk and analog line support", "Connects internet voice lines and your existing phone lines", "Switch SIP carriers without replacing the PBX"],
  ["Voicemail and conferencing", "Voicemail to email, audio multi-party calls", "One platform for internal communication"],
  ["Reports and APIs", "Call logs, analytics, CRM integration via API", "Decisions on data, not guesses"],
];
const comparisonRows = [
  ["Where it runs", "On your premises", "Provider's data center", "On your premises"],
  ["Who owns the equipment", "You", "Provider", "You"],
  ["Who controls call data", "You", "Provider", "You"],
  ["Cost pattern", "Upfront hardware; then support plus line and call charges", "Per user per month", "High hardware cost plus line rental"],
  ["Works if the internet is down", "Internal calls yes; external depends on your lines", "No (calls can be forwarded to mobiles)", "Yes (analog lines)"],
  ["Remote staff", "Via softphone over VPN or a session border controller", "Native", "Difficult"],
  ["Scaling", "Add licences or modules", "Add users", "Add cards and wiring"],
  ["Best for", "Offices and call centers wanting control", "Branches and remote teams", "Legacy sites"],
];
const networkChecks = [
  { Icon: Gauge, title: "Bandwidth", body: `About ${terms.bandwidthKbpsEachWay} kbps per concurrent call each way (${terms.codec}, approximate). Latency, jitter and packet loss matter more than raw speed.` },
  { Icon: Zap, title: "Voice priority (QoS)", body: "Your router and switches should prioritise voice over downloads, ideally on a separate voice VLAN." },
  { Icon: PlugZap, title: "PoE switches", body: "Power desk phones over the network cable, so you need fewer adapters and cables." },
  { Icon: Network, title: "Lines", body: "A SIP Trunk for internet voice lines, analog lines for numbers you want to keep (the PBX needs the right ports or a gateway), and a Dedicated Internet link when call quality is critical." },
  { Icon: ShieldCheck, title: "Security", body: "We do not leave the PBX open to the internet. Remote staff connect through a VPN or a session border controller; a firewall with options such as TLS/SRTP encryption, IP allowlisting and spend limits helps prevent toll fraud." },
];
const migrationSteps = [
  { title: "Audit", body: "We list your extensions, lines, call rules and phones." },
  { title: "Design", body: "We size the system and map your IVR, queues and numbers." },
  { title: "Install", body: "The new PBX is configured and tested alongside the old one." },
  { title: "Cut over", body: "Phones and lines move over in a planned window, so the office stays reachable." },
  { title: "Support", body: "We monitor, update and fix, so the system does not become another unmanaged box." },
];
const buyers = [
  { Icon: Building2, title: "Offices and corporate HQs", why: "Control, extension dialing, low running cost", setup: "20–200 users, IVR, recording" },
  { Icon: Headphones, title: "Call centres and BPOs", why: "Queues, recording, supervisor tools", setup: "SIP trunks, analytics, CRM integration via API" },
  { Icon: GraduationCap, title: "Hospitals and universities", why: "Many departments, heavy internal calling", setup: "Department extensions, paging" },
  { Icon: Factory, title: "Factories and warehouses", why: "On-site calling that survives an internet drop (with a UPS for the PBX, PoE switch and phones)", setup: "Analog and IP phones, mixed" },
  { Icon: Landmark, title: "Banks and finance", why: "PBX and recordings stay on premises", setup: "Recording, high availability" },
];

function Section({ eyebrow, heading, kicker, children }: { eyebrow: string; heading: string; kicker?: ReactNode; children: ReactNode }) {
  return <section className="ippbx-section"><div className="max-w-screen-xl mx-auto px-5"><SectionHeader eyebrow={eyebrow} title={heading} kicker={kicker} /><div className="mt-10">{children}</div></div></section>;
}
function Table({ columns, rows, caption }: { columns: string[]; rows: string[][]; caption: string }) {
  return <div className="ippbx-table-wrap" role="region" aria-label={caption} tabIndex={0}><table className="ippbx-table"><caption className="sr-only">{caption}</caption><thead><tr>{columns.map(c => <th key={c} scope="col">{c}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>;
}
function QuoteButtons({ consult = false }: { consult?: boolean }) {
  const email = `mailto:info@brain.net.pk?subject=${encodeURIComponent(consult ? "IP PBX — Free Consultation" : "IP PBX — Free PKR Quote")}&body=${encodeURIComponent("Please send a written PKR quote for an IP PBX system.\n\nCompany:\nContact number:\nHeadcount:\nExisting lines and numbers:\nConcurrent calls and monthly call volume:\n")}`;
  return <div className="flex flex-col sm:flex-row gap-3">{consult
    ? <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display rounded-lg px-5"><a href={email}>Book a Free Consultation <ArrowRight /></a></Button>
    : <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display rounded-lg px-5"><a href={email}>Get a Free IP PBX Quote <ArrowRight /></a></Button>}
    <Button asChild variant="outlined" size="lg" className="ippbx-outline rounded-lg px-5"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle /> {consult ? "Talk to a PBX Expert" : "Talk to a PBX Expert"}</a></Button></div>;
}

function IPPBX() {
  return <div className="bn-home ippbx-page min-h-screen overflow-x-hidden"><Header /><div className="py-2 max-w-screen-xl mx-auto px-5"><Breadcrumb /></div><main id="main-content">
    <section className="ippbx-hero"><img className="ippbx-photo" src={hero} alt="IP PBX appliance with patched handset cabling in a server rack" width={1536} height={864} fetchPriority="high" /><div className="max-w-screen-xl mx-auto px-5 py-10 md:py-12"><div className="max-w-2xl"><span className="bn-eyebrow">BrainNET Fiber · On-premise business voice</span><h1 className="font-display font-bold mt-6">IP PBX Systems in Pakistan: <span className="bn-display-accent">Sized, Installed and Supported by One Team</span></h1><p className="ippbx-muted font-dm text-base md:text-lg leading-relaxed mt-6">An IP PBX is a business phone system that runs on your own network and carries calls over IP. One system handles extensions, IVR, call queues, recording and your outside lines together.</p><p className="font-dm leading-relaxed mt-4">BrainNET sizes the right system for your team, supplies and installs it, connects it to SIP trunk lines, and supports it afterwards. You own the system and the call data; we keep it running.</p><div className="mt-7"><QuoteButtons /></div></div></div></section>
    <div className="ippbx-band"><div className="max-w-screen-xl mx-auto px-5 py-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">{["Small offices to call centres", "IVR, queues, recording and softphone apps", "SIP trunk and analog line support", "Your PBX and call recordings stay on your premises", "Supply, setup and support from one team"].map(text => <div key={text} className="flex gap-2 text-sm font-dm"><Check className="ippbx-accent w-4 h-4 shrink-0 mt-0.5" />{text}</div>)}</div></div>
    <ClientLogoSlider />
    <Section eyebrow="Sizing" heading="Which IP PBX is big enough for you" kicker={`Size an IP PBX by two numbers: users (extensions) and concurrent calls. As a rule of thumb, plan for ${terms.concurrencyRuleOfThumbPercent} of users on a call at once; call centres plan for nearly all agents on calls. These are approximate figures; we confirm them against your real call volume.`}><Table columns={["Your team", "System class", "Approx. concurrent calls", "Example models", "Typical extras"]} rows={sizingRows} caption="IP PBX sizing by users, concurrent calls and system class" /><p className="ippbx-muted font-dm mt-6 leading-relaxed">Send us your headcount and call volume and we confirm the model, so you do not overbuy or run out of channels in a year.</p></Section>
    <Section eyebrow="What’s included" heading="What an IP PBX includes"><Table columns={["Feature", "What it does", "Business benefit"]} rows={featureRows} caption="IP PBX features and business benefits" /><p className="font-dm ippbx-muted mt-6 leading-relaxed">Add a BrainNET <Link className="ippbx-link" to="/services/internet/ivr-services">Urdu and English IVR</Link> and <Link className="ippbx-link" to="/services/internet/sip-trunk">SIP Trunk lines</Link> for a complete setup.</p></Section>
    <Section eyebrow="Compare your options" heading="IP PBX vs virtual PBX vs traditional PBX"><Table columns={["", "IP PBX", "Virtual PBX", "Traditional PBX"]} rows={comparisonRows} caption="IP PBX, virtual PBX and traditional PBX comparison" /><p className="ippbx-muted font-dm mt-6 leading-relaxed">If you would rather not own hardware, see our <Link className="ippbx-link" to="/services/internet/virtual-pbx">Virtual PBX</Link>. Some businesses start virtual and move to an IP PBX as they grow, or the reverse.</p></Section>
    <Section eyebrow="Transparent costs" heading="IP PBX price in Pakistan" kicker="IP PBX cost has three parts: the system, installation and setup, and ongoing support.">
      <Table columns={["Setup", "Starting price"]} rows={startingPrices.map(p => [p.setup, p.pricing])} caption="IP PBX starting prices by office size" />
      <p className="ippbx-muted font-dm leading-relaxed mt-6">The final price depends on your users, concurrent calls, analog ports, phones and integrations. <strong>Prices exclude SIP trunk and call charges.</strong> Send us your headcount and call volume and we will send a free written {terms.currency} quote within {terms.quoteWithinHours} hours.</p>
      <p className="font-dm text-sm ippbx-muted mt-4">Last updated: 26 October 2026</p>
      <div className="mt-7"><QuoteButtons consult /></div>
    </Section>
    <Section eyebrow="Before we install" heading="Network and lines your IP PBX needs" kicker="An IP PBX is only as good as the network under it. We check these before install:">
      <div className="grid md:grid-cols-2 gap-10 items-start"><img src={install} alt="BrainNET engineer racking a PBX appliance and patching network cabling" width={1200} height={800} loading="lazy" className="w-full rounded-lg aspect-[3/2] object-cover" /><div className="grid gap-6">{networkChecks.map(({ Icon, title: name, body }) => <article key={name} className="flex gap-4"><Icon className="ippbx-accent w-6 h-6 shrink-0 mt-1" /><div><h3 className="font-display font-semibold text-lg">{name}</h3><p className="ippbx-muted font-dm text-sm mt-2 leading-relaxed">{body}</p></div></article>)}<Link to="/services/internet/dedicated-internet-lahore" className="ippbx-link font-dm inline-flex items-center gap-2">Explore Dedicated Internet <ArrowRight className="w-4 h-4" /></Link></div></div>
    </Section>
    <Section eyebrow="Migration" heading="Moving from an old PBX"><ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">{migrationSteps.map((step, i) => <li key={step.title} className="border-t border-border pt-5"><span className="ippbx-accent font-display text-3xl font-bold">0{i + 1}</span><h3 className="font-display font-semibold text-lg mt-5">{step.title}</h3><p className="ippbx-muted font-dm text-sm mt-3 leading-relaxed">{step.body}</p></li>)}</ol></Section>
    <Section eyebrow="After install" heading="Support after install" kicker="Support terms are agreed in your support plan. The items we set with you:"><Table columns={["Item", "How it is set"]} rows={supportTerms.map(s => [s.item, s.detail])} caption="IP PBX support items agreed in your support plan" /></Section>
    <Section eyebrow="Who it’s for" heading="Who buys an IP PBX"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{buyers.map(({ Icon, title: name, why, setup }) => <article className="bn-tile p-6" key={name}><Icon className="ippbx-accent w-7 h-7" /><h3 className="font-display font-semibold text-xl mt-5">{name}</h3><p className="ippbx-muted font-dm text-sm leading-relaxed mt-3">{why}</p><p className="font-dm text-sm leading-relaxed mt-4">{setup}</p></article>)}</div></Section>
    <Section eyebrow="Compliance" heading="Is an IP PBX legal in Pakistan?">
      <div className="ippbx-benchmark"><p className="font-dm leading-relaxed">Yes. The IP PBX itself is your own equipment on your own network. The rules apply to the lines it uses: calls to international destinations must go through licensed carriers (LDI licensees), and BrainNET's SIP Trunk lines are supplied through them. PTA's position on IP telephony for businesses follows its March 2020 framework — see the <Link className="ippbx-link" to="/services/internet/virtual-pbx">Virtual PBX page</Link> for the detail. BrainNET licence details are available on request.</p></div>
    </Section>
    <TelephonyFAQ id="ippbx" title="IP PBX FAQs" faqs={faqs} />
    <RelatedServices currentPath={PATH} />
    <section className="ippbx-band ippbx-section"><div className="max-w-screen-xl mx-auto px-5 text-center"><Server className="ippbx-accent w-10 h-10 mx-auto mb-5" /><h2 className="font-display font-bold">Ready to get the right IP PBX?</h2><p className="ippbx-muted font-dm text-lg max-w-2xl mx-auto mt-5 leading-relaxed">Tell us your headcount, lines and call volume, and we will send a written {terms.currency} quote within {terms.quoteWithinHours} hours.</p><div className="flex justify-center mt-8"><QuoteButtons /></div></div></section>
  </main><Footer /></div>;
}
