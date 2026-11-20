import type { ReactNode } from "react";
import { voipTerms } from "@/components/internet/voip/voipContent";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import { ArrowRight, MessageCircle, Phone, Network, Globe, Building2, Headphones, ShieldCheck, Users, ShoppingBag, GraduationCap, Laptop } from "lucide-react";
import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/internet/home/SectionHeader";
import TelephonyFAQ from "@/components/internet/telephony/TelephonyFAQ";
import RelatedServices from "@/components/internet/telephony/RelatedServices";
import { WHATSAPP } from "@/components/internet/telephony/telephonyLinks";
import hero from "@/assets/internet/voip-business-hero.webp";
import contactCentre from "@/assets/internet/voip-contact-centre.webp";
import "@/components/internet/voip/voip-page.css";

const PATH = "/services/internet/voip-providers-pakistan";
const SITE = "https://brain.net.pk";
const title = "VoIP Providers in Pakistan: Business Calling With Clear PKR Pricing | BrainNET";
const description = "Business VoIP in Pakistan with SIP trunk, IP PBX and Virtual PBX. Compare setups, calling costs and provider requirements. Get a written PKR quote within 24 hours.";

const faqs = [
  { question: "What is a VoIP provider?", answer: "A company that sends your calls over the internet to local, mobile, and international numbers." },
  { question: "Which is the best VoIP provider in Pakistan?", answer: "The best one is licensed, quotes all-in PKR prices, and fits your PBX and call volume. Use the checklist above to compare any provider." },
  { question: "How much does business VoIP cost in Pakistan?", answer: "A monthly fee per channel or user, plus setup where hardware is involved. We quote in PKR within 24 hours." },
  { question: "Is VoIP legal in Pakistan?", answer: "Yes, through legal channels. Use a provider that can show its licence or licensed carrier, and confirm current PTA rules." },
  { question: "Can I keep my existing phone system?", answer: "Yes, if it is SIP-capable. A SIP trunk connects to most SIP PBXs, so you only replace the lines. Older analog or digital systems need a VoIP gateway." },
  { question: "How much internet do I need?", answer: `About ${voipTerms.bandwidthKbpsEachWay} kbps per concurrent call each way (${voipTerms.codec}). A dedicated line keeps quality steady.` },
  { question: "Can I keep my current phone numbers?", answer: "Sometimes. It depends on the number type and your current carrier. We confirm this at the quote stage." },
  { question: "Can VoIP support a call centre?", answer: "Yes. Pair a SIP trunk with an IP PBX for queues, recording and analytics, and add an IVR to route callers." },
];
const jsonLd = [
  { "@context": "https://schema.org", "@type": "Service", name: "Business VoIP Services in Pakistan", serviceType: "VoIP, SIP Trunk, IP PBX and Virtual PBX", description, url: `${SITE}${PATH}`, provider: { "@type": "Organization", name: "BrainNET Fiber", url: SITE }, areaServed: { "@type": "Country", name: "Pakistan" } },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }, { "@type": "ListItem", position: 2, name: "Internet Services", item: `${SITE}/services/internet` }, { "@type": "ListItem", position: 3, name: "VoIP Providers in Pakistan", item: `${SITE}${PATH}` }] },
];
export const Route = createFileRoute("/services/internet/voip-services")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] }),
  component: VoIPProvidersPage,
});

const serviceRows: ReactNode[][] = [
  ["A SIP-capable PBX", "Cheaper, more flexible lines", <Link className="voip-link" to="/services/internet/sip-trunk">SIP Trunk ↗</Link>, "Voice lines over the internet, sized to your peak concurrent calls, with local and international routing"],
  ["No phone system, or an old one", "A full business phone system on your premises", <Link className="voip-link" to="/services/internet/ip-pbx">IP PBX ↗</Link>, "Extensions, queues, IVR, call recording, desk phones and softphones"],
  ["Several branches or remote staff", "A phone system with no PBX hardware on your premises", <Link className="voip-link" to="/services/internet/virtual-pbx">Virtual PBX ↗</Link>, "Hosted PBX managed by us; staff answer on desk phones, apps or laptops"],
  ["A call centre", "Queues, dialers and reporting", <span><Link className="voip-link" to="/services/internet/sip-trunk">SIP Trunk</Link> + <Link className="voip-link" to="/services/internet/ip-pbx">IP PBX</Link></span>, "High call volume, skills-based routing, recording and live analytics, dialers via integration"],
];
const comparisonRows = [
  ["Monthly cost", "Lower; scales with channels", "Fixed line rental per line", "Per SIM and per minute"],
  ["International calls", "Competitive routed rates", "Higher", "Higher"],
  ["Extra lines or staff", "Added in minutes", "New line, new wait", "New SIMs"],
  ["Remote or branch staff", "Same number on any device", "Tied to one site", "Personal numbers"],
  ["Features (IVR, queues, recording)", "Built in", "Extra hardware", "Limited"],
  ["Internet and power needed", "Yes; use a backup line or failover", "No", "No"],
];
const checklist = [
  ["Are you licensed, and for what?", "Legal routing protects your numbers and calls", "A named licence or licensed upstream carrier, in writing"],
  ["What is the price in PKR, all-in?", "Per-user, per-channel and per-minute fees add up", "A written quote listing setup, monthly and call charges"],
  ["How is call quality measured?", '"HD voice" means little without data', "Latency, jitter and packet loss targets, plus a test period"],
  ["Will it work with my PBX and CRM?", "Rebuilding your phone system is the hidden cost", "SIP compatibility for the PBX; API or integration for the CRM"],
  ["How are calls protected from fraud?", "Hijacked lines can run up large bills", "Encryption (TLS/SRTP), IP allowlisting and spend limits"],
  ["Who supports me, and when?", "Voice faults are urgent", "Named support hours and a reachable phone line"],
  ["Can I keep my numbers and leave later?", "Lock-in raises the real cost", "Porting depends on number type and carrier; clear contract terms"],
];
const industries = [
  { Icon: Headphones, title: "Call centres and BPOs", setup: "SIP trunk + IP PBX, queues, recording", gain: "Scale agents without new lines" },
  { Icon: Building2, title: "Multi-branch companies", setup: "Virtual PBX, one number plan", gain: "Free calls between branches" },
  { Icon: ShieldCheck, title: "Banks and financial firms", setup: "IVR + CRM integration via API", gain: "Fewer routine calls to agents" },
  { Icon: GraduationCap, title: "Schools and hospitals", setup: "IP PBX with department extensions", gain: "Clear internal and external routing" },
  { Icon: ShoppingBag, title: "E-commerce and logistics", setup: "Virtual PBX + IVR", gain: "Order-status calls handled automatically" },
  { Icon: Users, title: "Startups and remote teams", setup: "Virtual PBX with apps", gain: "Business numbers on any device" },
];
const journey = [
  { Icon: Phone, title: "Phone or app", body: "Your phone or app turns the voice into data packets." },
  { Icon: Laptop, title: "Your PBX", body: "Your PBX, on-site or hosted, handles extensions, queues and call rules." },
  { Icon: Network, title: "Internet line", body: "Your internet line carries the packets to the provider." },
  { Icon: Globe, title: "Provider network", body: "The provider connects the call to a local number, a mobile or an international destination through licensed carriers." },
];
const steps = [
  { title: "Review", body: "We check your lines, PBX, internet and call volume." },
  { title: "Quote", body: "A written PKR quote, normally within 24 hours." },
  { title: "Set up", body: "SIP trunk, PBX and optional IVR configured and tested on your network." },
  { title: "Go live", body: "A parallel test on the new lines first, then the switch, so no calls are missed." },
];

function ContentSection({ eyebrow, title: heading, kicker, children }: { eyebrow: string; title: string; kicker?: ReactNode; children: ReactNode }) {
  return <section className="voip-section"><div className="max-w-screen-xl mx-auto px-5"><SectionHeader eyebrow={eyebrow} title={heading} kicker={kicker} /><div className="mt-10">{children}</div></div></section>;
}
function ContentTable({ columns, rows, caption, featured }: { columns: string[]; rows: ReactNode[][]; caption: string; featured?: number }) {
  return <div className="voip-surface overflow-x-auto" role="region" aria-label={caption} tabIndex={0}><table className="voip-table"><caption className="sr-only">{caption}</caption><thead><tr>{columns.map((c, i) => <th scope="col" key={c} className={i === featured ? "voip-featured" : ""}>{c}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th scope="row" key={j}>{cell}</th> : <td key={j} className={j === featured ? "voip-featured" : ""}>{cell}</td>)}</tr>)}</tbody></table></div>;
}
function QuoteButtons({ consultation = false }: { consultation?: boolean }) {
  const quoteEmail = `mailto:info@brain.net.pk?subject=${encodeURIComponent("Business VoIP — Free PKR Quote")}&body=${encodeURIComponent("Please send me a written PKR quote for business VoIP.\n\nCompany:\nContact number:\nExisting lines / PBX:\nConcurrent calls / users:\nMonthly call volume and destinations:\n")}`;
  return <div className="flex flex-col sm:flex-row gap-3"><Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display rounded-lg px-5"><a href={quoteEmail}>Get a Free VoIP Quote <ArrowRight /></a></Button><Button asChild variant="outlined" size="lg" className="voip-secondary-button rounded-lg px-5"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle /> {consultation ? "Book a Free Consultation" : "Talk to a VoIP Expert"}</a></Button></div>;
}
function VoIPProvidersPage() {
  return <div className="bn-home voip-page min-h-screen overflow-x-hidden">
    <Header />
    <div className="py-2 max-w-screen-xl mx-auto px-5"><Breadcrumb /></div>
    <main id="main-content">
      <section className="voip-hero mt-5">
        <img src={hero} alt="Pakistani business team using IP desk phones and headsets in a modern office" width={1536} height={864} fetchPriority="high" className="voip-hero-photo" />
        <div className="max-w-screen-xl mx-auto px-5 py-14 md:py-16">
          <div className="max-w-xl">
            <span className="bn-eyebrow">BrainNET Fiber · Business voice</span>
            <h1 className="font-display font-bold mt-5">VoIP Providers in Pakistan: <span className="voip-highlight">Business Calling With Clear PKR Pricing</span></h1>
            <p className="mt-5 text-base leading-relaxed voip-muted">A VoIP provider handles your business calls via the internet, not traditional phone lines. This cuts costs and allows your team to answer from any desk, branch, or phone.</p>
            <p className="mt-4 font-semibold">BrainNET Fiber has everything a Pakistani business needs:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 voip-muted"><li><Link className="voip-link" to="/services/internet/sip-trunk">SIP trunk lines</Link></li><li>Phone system (<Link className="voip-link" to="/services/internet/ip-pbx">IP PBX</Link> or hosted <Link className="voip-link" to="/services/internet/virtual-pbx">Virtual PBX</Link>)</li></ul>
            <div className="mt-7"><QuoteButtons /></div>
          </div>
        </div>
      </section>
      <div className="voip-band"><p className="max-w-screen-xl mx-auto px-5 py-6 text-sm leading-relaxed voip-muted"><strong className="voip-highlight">At a glance:</strong> local and international calling · SIP trunk, IP PBX and Virtual PBX · works with SIP-capable PBXs · call recording and analytics · priced in PKR, quoted in 24 hours.</p></div>
      <ClientLogoSlider />
      <ContentSection eyebrow="Find your setup" title="Which VoIP service fits your business" kicker="Most Pakistani businesses need one of three setups. Pick by what you already own.">
        <ContentTable caption="Choose a business VoIP setup" columns={["You have", "You need", "BrainNET Fiber service", "What you get"]} rows={serviceRows} featured={2} />
        <p className="mt-6 voip-muted leading-relaxed">Older analog or digital PBXs need a VoIP gateway. BrainNET Fiber can add an <Link className="voip-link" to="/services/internet/ivr-services">Urdu and English IVR</Link> to any option. It can also provide a <Link className="voip-link" to="/services/internet/dedicated-internet-lahore">Dedicated Internet line</Link> if call quality needs a stable connection.</p>
      </ContentSection>
      <ContentSection eyebrow="The call journey" title="How business VoIP works">
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{journey.map((s, i) => <li key={s.title} className="relative"><div className="flex justify-between items-center mb-5"><s.Icon className="w-9 h-9 voip-highlight" /><span className="voip-number font-display text-xl pb-2">0{i + 1}</span></div><h3 className="font-display font-semibold">{s.title}</h3><p className="voip-muted mt-3 leading-relaxed">{s.body}</p></li>)}</ol>
        <p className="voip-band p-5 mt-10 leading-relaxed voip-muted">Call quality depends on latency, jitter and packet loss, plus enough bandwidth in both directions. Plan about <strong className="voip-highlight">{voipTerms.bandwidthKbpsEachWay} kbps per concurrent call each way</strong> ({voipTerms.codec} codec). For example, {voipTerms.exampleConcurrentCalls} calls need about {voipTerms.exampleMbpsEachWay} Mbps upload and download. Upload is often the bottleneck.</p>
      </ContentSection>
      <ContentSection eyebrow="Compare the options" title="VoIP vs landline vs mobile calling"><ContentTable caption="Business VoIP compared with landline and mobile calling" columns={["", "Business VoIP", "Landline (PSTN)", "Mobile SIMs"]} rows={comparisonRows} featured={1} /></ContentSection>
      <ContentSection eyebrow="Transparent costs" title="VoIP price in Pakistan" kicker={`Business VoIP pricing depends on the number of channels or users, your call destinations and any add-ons such as IVR or call recording. Tell us what you need and we will send a written ${voipTerms.quoteCurrency} quote within ${voipTerms.quoteWithinHours} hours, free of charge.`}>
        <div className="mt-7"><QuoteButtons consultation /></div>
        <p className="voip-muted mt-6 leading-relaxed"><strong className="voip-highlight">What moves the price:</strong> number of channels or users, call destinations and minutes, hardware, and add-ons such as IVR or call recording. International minutes are billed on your actual routes.</p>
      </ContentSection>
      <ContentSection eyebrow="Before you sign" title="How to choose a VoIP provider in Pakistan" kicker="Ask every provider, including us, these questions before you sign."><ContentTable caption="Questions to ask a VoIP provider" columns={["Ask", "Why it matters", "What good looks like"]} rows={checklist} /></ContentSection>
      <section className="voip-band voip-section"><div className="max-w-screen-xl mx-auto px-5 grid md:grid-cols-12 gap-8"><ShieldCheck className="w-14 h-14 voip-highlight md:col-span-2" /><div className="md:col-span-10"><h2 className="font-display">Is VoIP legal in Pakistan?</h2><p className="voip-muted leading-relaxed mt-5">Yes, when it runs through legal channels. In March 2020, the PTA said that businesses and schools can freely use legal VoIP services. However, it will act against VoIP or VPNs that handle illegal traffic (Dawn). International voice should go through licensed service providers and LDI licensees. In practice, buy from a provider that can name its licence or carrier. Never use unlicensed termination such as grey routes or SIM boxes. BrainNET Fiber licence details are available on request. Rules change, so confirm current requirements with your provider or the PTA.</p></div></div></section>
      <ContentSection eyebrow="Made for your team" title="Who uses business VoIP">
        <img src={contactCentre} alt="Pakistani contact centre agents answering business calls with headsets" loading="lazy" width={1200} height={800} className="w-full aspect-[2/1] object-cover rounded-lg mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{industries.map(u => <article key={u.title} className="bn-tile rounded-lg p-6"><u.Icon className="w-8 h-8 voip-highlight mb-5" /><h3 className="font-display font-semibold">{u.title}</h3><p className="voip-muted mt-3 text-sm leading-relaxed">{u.setup}</p><p className="voip-highlight mt-4 text-sm font-semibold">{u.gain}</p></article>)}</div>
      </ContentSection>
      <ContentSection eyebrow="A managed move" title="Switching to BrainNET Fiber VoIP"><ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{steps.map((s, i) => <li key={s.title}><span className="voip-number inline-block pb-2 text-3xl font-display mb-5">0{i + 1}</span><h3 className="font-display">{s.title}</h3><p className="voip-muted mt-3 leading-relaxed">{s.body}</p></li>)}</ol></ContentSection>
      <TelephonyFAQ id="voip" title="VoIP provider FAQs" faqs={faqs} />
      <RelatedServices currentPath={PATH} title="Explore your business phone system" kicker="SIP trunk, IP PBX, Virtual PBX and IVR — choose the services that fit your setup." />
      <section className="voip-band voip-section"><div className="max-w-screen-xl mx-auto px-5 flex flex-col lg:flex-row justify-between gap-8 lg:items-center"><div className="max-w-xl"><h2 className="font-display">Ready to lower your call costs?</h2><p className="voip-muted mt-4 leading-relaxed">Tell us your lines, PBX and call volume, and we will send a written PKR quote within 24 hours.</p></div><QuoteButtons /></div></section>
    </main>
    <Footer />
  </div>;
}
