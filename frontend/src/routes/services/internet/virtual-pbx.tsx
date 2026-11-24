import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import { ArrowRight, MessageCircle, Cloud, Phone, Smartphone, Laptop, Network, Users, GitBranch, Headphones, ShieldCheck, BatteryCharging, Wifi, Check } from "lucide-react";
import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/internet/home/SectionHeader";
import TelephonyFAQ from "@/components/internet/telephony/TelephonyFAQ";
import RelatedServices from "@/components/internet/telephony/RelatedServices";
import { WHATSAPP } from "@/components/internet/telephony/telephonyLinks";
import { virtualPBXFaqs as faqs, virtualPBXPlans as plans, virtualPBXTerms as terms } from "@/components/internet/telephony/virtualPBXContent";
import hero from "@/assets/internet/virtual-pbx-office.webp";
import remote from "@/assets/internet/virtual-pbx-remote.webp";
import "@/components/internet/telephony/virtual-pbx-page.css";

const PATH = "/services/internet/virtual-pbx";
const SITE = "https://brain.net.pk";
const title = "Virtual PBX in Pakistan: A Full Business Phone System, No PBX Hardware | BrainNET";
const description = "Hosted Virtual PBX in Pakistan with extensions, Urdu and English IVR, queues, recording and mobile apps. Per-user PKR pricing and free written quotes within 24 hours.";
const jsonLd = [
  { "@context": "https://schema.org", "@type": "Service", name: "Virtual PBX in Pakistan", serviceType: "Hosted business phone system", description, url: `${SITE}${PATH}`, provider: { "@type": "Organization", name: "BrainNET", url: SITE }, areaServed: { "@type": "Country", name: "Pakistan" } },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }, { "@type": "ListItem", position: 2, name: "Internet Services", item: `${SITE}/services/internet` }, { "@type": "ListItem", position: 3, name: "Virtual PBX in Pakistan", item: `${SITE}${PATH}` }] },
];
export const Route = createFileRoute("/services/internet/virtual-pbx")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] }),
  component: VirtualPBX,
});
const featureRows = [
  ["Extensions and ring groups", "Gives each person or team a number inside your system", "Add or remove staff in minutes"],
  ["IVR auto attendant", "Greets callers in Urdu or English and routes them", "Fewer missed or misrouted calls"],
  ["Call queues", "Holds callers and rings agents in order or all at once", "Fair, measurable call handling"],
  ["Call forwarding and transfer", "Sends calls to mobiles, desks or other branches", "Reachable when away from the desk"],
  ["Call recording", "Stores calls for review. Tell callers they are recorded.", "Training and dispute records"],
  ["Conferencing", "Audio multi-party calls from one number", "Meetings without a separate conferencing tool"],
  ["Mobile and desktop apps", "Business number on any device", "Remote and branch staff on one system"],
  ["Reports and analytics", "Call volume, answer time, missed calls", "Staffing based on data"],
];
const comparisonRows = [
  ["Where it runs", "Provider’s data center", "A server in your office", "A box in your office"],
  ["Upfront cost", "Low; mostly setup", "Server and setup; licences vary", "High hardware cost"],
  ["Monthly cost", "Per user", "Support plus trunk and call charges", "Line rental, maintenance"],
  ["Adding users", "Minutes", "Licence and phone", "Cards and wiring"],
  ["Multi-branch and remote", "Native", "Needs VPN or trunks", "Difficult"],
  ["Needs internet to work", "Yes", "Only for external calls", "No"],
  ["Best for", "SMEs, branches, remote teams", "Larger offices wanting control", "Legacy sites"],
];
const resilience = [
  { Icon: GitBranch, title: "Failover routing", body: "Set rules to forward calls to mobile numbers if your office line is down (forwarded calls are billed as outbound calls)." },
  { Icon: Smartphone, title: "Mobile app", body: "Staff can keep taking calls on their phones over mobile data." },
  { Icon: Wifi, title: "Backup connection", body: "A second internet line, ideally from a different provider, removes the single point of failure. A Dedicated Internet link can be one of the two." },
  { Icon: BatteryCharging, title: "Power", body: "A UPS on your router, PoE switch and desk phones covers short load-shedding gaps." },
];
const industries = [
  { Icon: Users, title: "Small office or startup", setup: "3 to 10 users, one main number, IVR", gain: "A professional front desk without a receptionist" },
  { Icon: Network, title: "Multi-branch company", setup: "One system, extension dialing between branches", gain: "Free internal calls across cities" },
  { Icon: Laptop, title: "Remote or hybrid team", setup: "Mobile and desktop apps", gain: "Staff answer the business number anywhere" },
  { Icon: Headphones, title: "Call center or sales team", setup: "Queues, recording, CRM integration via API", gain: "Scale seats up or down by season" },
  { Icon: ShieldCheck, title: "Clinics, schools, showrooms", setup: "Department extensions and after-hours routing", gain: "No missed calls when the office is closed" },
];
const steps = [
  { title: "Plan", body: "We map users, numbers, departments and call rules." },
  { title: "Configure", body: "Extensions, IVR, queues and recording are built on our platform." },
  { title: "Connect", body: "Desk phones, apps or softphones are provisioned, and your numbers are connected." },
  { title: "Test and launch", body: "Test calls on every path, staff training, then go-live." },
];
function Section({ eyebrow, heading, kicker, children }: { eyebrow: string; heading: string; kicker?: ReactNode; children: ReactNode }) {
  return <section className="vpbx-section"><div className="max-w-screen-xl mx-auto px-5"><SectionHeader eyebrow={eyebrow} title={heading} kicker={kicker} /><div className="mt-10">{children}</div></div></section>;
}
function Table({ columns, rows, caption }: { columns: string[]; rows: string[][]; caption: string }) {
  return <div className="vpbx-table-wrap" role="region" aria-label={caption} tabIndex={0}><table className="vpbx-table"><caption className="sr-only">{caption}</caption><thead><tr>{columns.map(c => <th key={c} scope="col">{c}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row[0]}>{row.map((cell,i) => i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>;
}
function QuoteButtons() {
  const email = `mailto:info@brain.net.pk?subject=${encodeURIComponent("Virtual PBX — Free PKR Quote")}&body=${encodeURIComponent("Please send a written PKR quote for Virtual PBX.\n\nCompany:\nContact number:\nHeadcount:\nBranches:\nConcurrent calls and monthly call volume:\nExisting numbers and phones:\n")}`;
  return <div className="flex flex-col sm:flex-row gap-3"><Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display rounded-lg px-5"><a href={email}>Get a Free Virtual PBX Quote <ArrowRight /></a></Button><Button asChild variant="outlined" size="lg" className="vpbx-outline rounded-lg px-5"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle /> Talk to a PBX Expert</a></Button></div>;
}
function VirtualPBX() {
  return <div className="bn-home vpbx-page min-h-screen overflow-x-hidden"><Header /><div className="py-2 max-w-screen-xl mx-auto px-5"><Breadcrumb /></div><main id="main-content">
    <section className="vpbx-hero"><img className="vpbx-photo" src={hero} alt="Business colleagues using desk phones in a modern Pakistani office" width={1536} height={864} fetchPriority="high" /><div className="max-w-screen-xl mx-auto px-5 py-10 md:py-12"><div className="max-w-2xl"><span className="bn-eyebrow">BrainNET Fiber · Hosted business voice</span><h1 className="font-display font-bold mt-6">Virtual PBX in Pakistan: <span className="bn-display-accent">A Full Business Phone System, No PBX Hardware</span></h1><p className="vpbx-muted font-dm text-base md:text-lg leading-relaxed mt-6">Extensions, a menu, call routing, voicemail and recording — run from our data center, not a box in your office. Your team answers on desk phones, mobile apps or laptops.</p><p className="font-dm leading-relaxed mt-4">BrainNET hosts and manages this virtual phone system for you, so there is no PBX hardware to buy, house or maintain.</p><div className="mt-7"><QuoteButtons /></div><p className="vpbx-muted font-dm text-sm mt-5">Last updated: 26 October 2026</p></div></div></section>
    <div className="vpbx-band"><div className="max-w-screen-xl mx-auto px-5 py-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">{["Extensions in minutes", "IVR and call queues", "Call recording", "Mobile and desktop apps", "Works across branches", "Priced per user in PKR"].map(text => <div key={text} className="flex gap-2 text-sm font-dm"><Check className="vpbx-cloud w-4 h-4 shrink-0 mt-0.5" />{text}</div>)}</div></div>
    <ClientLogoSlider />
    <Section eyebrow="What’s included" heading="What a virtual PBX gives your business"><p className="vpbx-muted font-dm leading-relaxed mb-8">A virtual PBX, known as a hosted PBX or cloud PBX, is a business phone system. It operates from the provider’s data center, not from a box in your office. You get extensions, a menu, call routing, voicemail, and recording. Your team can answer calls on desk phones, mobile apps, or laptops.</p><Table columns={["Feature", "What it does", "Business benefit"]} rows={featureRows} caption="Virtual PBX features and business benefits" /><p className="font-dm vpbx-muted mt-6 leading-relaxed">BrainNET provides the PBX, an <Link className="vpbx-link" to="/services/internet/ivr-services">Urdu and English IVR</Link> and the voice lines (<Link className="vpbx-link" to="/services/internet/sip-trunk">SIP Trunk</Link>) as one service.</p></Section>
    <Section eyebrow="One system, every device" heading="Your business number follows your team" kicker="Hosted and managed by BrainNET. Connected to your desks, branches and remote staff."><div className="vpbx-flow grid grid-cols-1 md:grid-cols-3 gap-8 items-center"><div className="text-center"><Phone className="vpbx-cloud w-9 h-9 mx-auto" /><h3 className="font-display font-semibold mt-4">Your business number</h3><p className="vpbx-muted font-dm text-sm mt-2">Incoming calls and SIP trunk lines</p><ArrowRight className="vpbx-cloud mx-auto mt-5 rotate-90 md:rotate-0" /></div><div className="text-center"><Cloud className="vpbx-cloud w-16 h-16 mx-auto" /><h3 className="font-display font-semibold text-xl mt-4">BrainNET hosted PBX</h3><p className="vpbx-muted font-dm text-sm mt-2">IVR → queues → extensions<br />Voicemail, recording and reports</p></div><div className="grid grid-cols-3 gap-4 text-center">{[{ Icon: Phone, label: "Desk phones" }, { Icon: Laptop, label: "Laptops" }, { Icon: Smartphone, label: "Mobile apps" }].map(({ Icon, label }) => <div key={label}><Icon className="vpbx-cloud w-7 h-7 mx-auto" /><p className="font-dm text-sm mt-3">{label}</p></div>)}</div></div></Section>
    <Section eyebrow="Compare your options" heading="Virtual PBX vs IP PBX vs traditional PBX"><Table columns={["", "Virtual PBX (hosted)", "IP PBX (on-premise)", "Traditional PBX"]} rows={comparisonRows} caption="Virtual PBX, IP PBX and traditional PBX comparison" /><p className="vpbx-muted font-dm mt-6 leading-relaxed">Virtual PBX is the right default for most small and mid-size businesses. Choose an <Link className="vpbx-link" to="/services/internet/ip-pbx">IP PBX</Link> if you want everything on your own premises.</p></Section>
    <Section eyebrow="Built for continuity" heading="What happens when the internet drops or power goes out?" kicker="The PBX stays online in our data center and can forward calls to mobiles or apps, but your office phones and internet need a UPS to keep working."><div className="grid md:grid-cols-2 gap-10 items-start"><img src={remote} alt="Remote business professional taking a call on a headset beside her laptop" width={1200} height={800} loading="lazy" className="w-full rounded-lg aspect-[3/2] object-cover" /><div className="grid gap-6">{resilience.map(({ Icon, title: name, body }) => <article key={name} className="flex gap-4"><Icon className="vpbx-cloud w-6 h-6 shrink-0 mt-1" /><div><h3 className="font-display font-semibold text-lg">{name}</h3><p className="vpbx-muted font-dm text-sm mt-2 leading-relaxed">{body}</p></div></article>)}<Link to="/services/internet/dedicated-internet-lahore" className="vpbx-link font-dm inline-flex items-center gap-2">Explore Dedicated Internet <ArrowRight className="w-4 h-4" /></Link></div></div></Section>
    <Section eyebrow="Call quality and security" heading="Call quality and security"><div className="grid md:grid-cols-3 gap-6">{[{ Icon: Wifi, name: `About ${terms.bandwidthKbpsEachWay} kbps per call`, body: `Plan about ${terms.bandwidthKbpsEachWay} kbps per call each way (${terms.codec}).` }, { Icon: Network, name: "Latency, jitter, packet loss", body: "These matter more than raw speed for clear calls." }, { Icon: ShieldCheck, name: "Protected calls", body: "Encryption (TLS/SRTP), IP allowlisting and spend limits." }].map(({ Icon, name, body }) => <article key={name} className="bn-tile p-6"><Icon className="vpbx-cloud w-7 h-7" /><h3 className="font-display font-semibold text-lg mt-4">{name}</h3><p className="vpbx-muted font-dm text-sm mt-2 leading-relaxed">{body}</p></article>)}</div></Section>
    <Section eyebrow="Transparent costs" heading="Virtual PBX price in Pakistan" kicker="Virtual PBX is priced per user per month in PKR, with a one-time setup for numbers, IVR and any desk phones."><p className="vpbx-muted font-dm leading-relaxed mb-8">Many international cloud phone tools bill in US dollars, so costs move with the exchange rate. Ours are quoted in {terms.currency}.</p><Table columns={["Plan", "Monthly", "One-time setup", "Best for"]} rows={plans.map(p => [p.name, p.monthly, p.oneTime, p.bestFor])} caption="Virtual PBX plans and quote-based PKR pricing" /><p className="vpbx-muted font-dm leading-relaxed mt-6"><strong>What moves the price:</strong> number of users, concurrent calls, call destinations and minutes, IVR complexity, and desk phones. Send us your headcount and we will send a free written quote within {terms.quoteWithinHours} hours.</p><div className="mt-7"><QuoteButtons /></div></Section>
    <Section eyebrow="Who it’s for" heading="Who should use a virtual PBX"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{industries.map(({ Icon, title: name, setup, gain }) => <article className="bn-tile p-6" key={name}><Icon className="vpbx-cloud w-7 h-7" /><h3 className="font-display font-semibold text-xl mt-5">{name}</h3><p className="vpbx-muted font-dm text-sm leading-relaxed mt-3">{setup}</p><p className="font-dm text-sm leading-relaxed mt-4">{gain}</p></article>)}</div><p className="vpbx-muted font-dm leading-relaxed mt-7"><strong>Not a fit:</strong> sites with no stable internet at all, or businesses that must keep all call data on their own premises. For those, an <Link to="/services/internet/ip-pbx" className="vpbx-link">IP PBX</Link> is better. Large call centers may prefer <Link to="/services/internet/sip-trunk" className="vpbx-link">SIP Trunk</Link> + IP PBX.</p></Section>
    {/* <Section eyebrow="Legal channels" heading="Is a virtual PBX legal in Pakistan?"><p className="vpbx-muted font-dm leading-relaxed max-w-3xl">Yes, when it runs through legal channels. The PTA said in March 2020 that businesses can use legal VoIP services without extra permission, while it acts against traffic that bypasses licensed operators (Dawn). Calls to international destinations must go through licensed carriers (LDI licensees). BrainNET licence details are available on request. Rules change, so confirm current requirements with your provider or the PTA.</p></Section> */}
    <Section eyebrow="From plan to first call" heading="How we set up your virtual PBX"><ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{steps.map((step,i) => <li key={step.title} className="border-t border-border pt-5"><span className="vpbx-cloud font-display text-3xl font-bold">0{i+1}</span><h3 className="font-display font-semibold text-lg mt-5">{step.title}</h3><p className="vpbx-muted font-dm text-sm mt-3 leading-relaxed">{step.body}</p></li>)}</ol><p className="vpbx-muted font-dm mt-7">A small team can usually be live within days; larger or multi-branch setups depend on scope. Number porting can take longer. See also our <Link to="/services/internet/voip-providers-pakistan" className="vpbx-link">VoIP services</Link>.</p></Section>
    <TelephonyFAQ id="vpbx" title="Virtual PBX FAQs" faqs={faqs} />
    <RelatedServices currentPath={PATH} />
    <section className="vpbx-band vpbx-section"><div className="max-w-screen-xl mx-auto px-5 text-center"><h2 className="font-display font-bold">Ready to switch to a virtual PBX?</h2><p className="vpbx-muted font-dm text-lg max-w-2xl mx-auto mt-5 leading-relaxed">Tell us your headcount, branches and call volume, and we will send a written PKR quote within {terms.quoteWithinHours} hours.</p><div className="flex justify-center mt-8"><QuoteButtons /></div></div></section>
  </main><Footer /></div>;
}
