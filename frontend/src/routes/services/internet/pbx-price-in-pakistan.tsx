
import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import { ArrowRight, MessageCircle, Check, Calculator, Gauge, Phone, Cloud, Laptop, Layers } from "lucide-react";
import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { Breadcrumb } from "@/components/internet/Breadcrumb";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/internet/home/SectionHeader";
import TelephonyFAQ from "@/components/internet/telephony/TelephonyFAQ";
import RelatedServices from "@/components/internet/telephony/RelatedServices";
import { WHATSAPP } from "@/components/internet/telephony/telephonyLinks";
import { pbxPriceTerms as terms, pbxPriceListings as listings, pbxPriceCostItems as costItems, pbxPriceTypes as types, pbxPriceChecks as checks, pbxPriceFaqs as faqs } from "@/components/internet/telephony/pbxPriceContent";
import hero from "@/assets/internet/pbx-price-hero.webp";
import equipment from "@/assets/internet/pbx-price-equipment.webp";
import "@/components/internet/telephony/pbx-price-page.css";

const PATH = "/services/internet/pbx-price-in-pakistan";
const SITE = "https://brain.net.pk";
const title = "PBX Price in Pakistan: What a Business Phone System Really Costs | BrainNET";
const description = "Compare public PBX hardware prices in Pakistan, all-in costs and IP vs virtual PBX over three years. Get an itemised written PKR quote from BrainNET within 24 hours.";
const jsonLd = [
  { "@context": "https://schema.org", "@type": "Service", name: "PBX Pricing in Pakistan", serviceType: "PBX supply, installation and itemised pricing", description, url: `${SITE}${PATH}`, provider: { "@type": "Organization", name: "BrainNET", url: SITE }, areaServed: { "@type": "Country", name: "Pakistan" } },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }, { "@type": "ListItem", position: 2, name: "Internet Services", item: `${SITE}/services/internet` }, { "@type": "ListItem", position: 3, name: "PBX Price in Pakistan", item: `${SITE}${PATH}` }] },
];
export const Route = createFileRoute("/services/internet/pbx-price-in-pakistan")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] }),
  component: PBXPrice,
});
function Section({ eyebrow, heading, kicker, children }: { eyebrow: string; heading: string; kicker?: ReactNode; children: ReactNode }) {
  return <section className="pbxprice-section"><div className="max-w-screen-xl mx-auto px-5"><SectionHeader eyebrow={eyebrow} title={heading} kicker={kicker} /><div className="mt-10">{children}</div></div></section>;
}
function Table({ columns, rows, caption }: { columns: string[]; rows: string[][]; caption: string }) {
  return <div className="pbxprice-table-wrap" role="region" aria-label={caption} tabIndex={0}><table className="pbxprice-table font-dm"><caption className="sr-only">{caption}</caption><thead><tr>{columns.map(c => <th key={c} scope="col">{c}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>;
}
function QuoteButtons() {
  const email = `mailto:info@brain.net.pk?subject=${encodeURIComponent("PBX — All-In PKR Quote")}&body=${encodeURIComponent("Please send an itemised PKR PBX quote and three-year cost comparison.\n\nCompany:\nContact number:\nHeadcount and branches:\nExisting lines and phones:\nConcurrent calls and call volume:\n")}`;
  return <div className="flex flex-col sm:flex-row gap-3"><Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display rounded-lg px-5"><a href={email}>Get an All-In PBX Quote <ArrowRight /></a></Button><Button asChild variant="outlined" size="lg" className="pbxprice-outline rounded-lg px-5"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle />Talk to a PBX Expert</a></Button></div>;
}
const savings = [
  { Icon: Gauge, title: "Size by concurrent calls, not headcount", body: `Plan ${terms.concurrencyPercent} of users on a call at once (approximate; confirm your actual busy-hour demand).` },
  { Icon: Phone, title: "Reuse what you have", body: "Keep SIP-capable phones and analog lines." },
  { Icon: Cloud, title: "Start virtual, grow later", body: "A virtual PBX avoids hardware if headcount is small or changing." },
  { Icon: Laptop, title: "Use softphones", body: "Use softphones for staff who are rarely at a desk." },
  { Icon: Layers, title: "Bundle with one provider", body: "Bundle PBX, SIP trunk and IVR from one provider to cut setup and support overlap." },
];
function PBXPrice() {
  return <div className="bn-home pbxprice-page min-h-screen overflow-x-hidden"><Header /><div className="py-2 max-w-screen-xl mx-auto px-5"><Breadcrumb /></div><main id="main-content">
    <section className="pbxprice-hero"><img className="pbxprice-photo" src={hero} alt="IP desk phone, compact PBX appliance and network cables on an office desk" width={1536} height={864} fetchPriority="high" /><div className="max-w-screen-xl mx-auto px-5 py-10 md:py-12"><div className="max-w-2xl"><span className="bn-eyebrow">BrainNET Fiber · Business phone system costs</span><h1 className="font-display font-bold mt-6">PBX Price in Pakistan: <span className="bn-display-accent">What a Business Phone System Really Costs</span></h1><p className="pbxprice-muted font-dm text-base md:text-lg leading-relaxed mt-6">PBX prices in Pakistan range from about Rs. 105,000 for a 20-user IP PBX appliance to over Rs. 334,000 for a 100-user system, based on public shop listings on {terms.listingDate}. That is the box only: phones, lines, installation and support are extra.</p><p className="font-dm leading-relaxed mt-4">A virtual PBX has no hardware cost and is billed per user per month. BrainNET gives you the all-in price in {terms.currency}, sized to your team, within {terms.quoteWithinHours} hours.</p><div className="mt-7"><QuoteButtons /></div></div></div></section>
    <div className="pbxprice-band"><div className="max-w-screen-xl mx-auto px-5 py-7 grid grid-cols-2 lg:grid-cols-4 gap-5">{["IP PBX appliance from about Rs. 105,000 (20 users)", "Virtual PBX billed per user per month", "Phones, lines, setup and support quoted separately", "One all-in PKR quote from BrainNET"].map(text => <div key={text} className="flex gap-2 text-sm font-dm"><Check className="pbxprice-accent w-4 h-4 shrink-0 mt-0.5" />{text}</div>)}</div></div>
    <ClientLogoSlider />
    <Section eyebrow="Market benchmarks" heading="PBX price by team size" kicker={`Hardware is the first number buyers see. These are public listings read on ${terms.listingDate} and show how price rises with users and concurrent calls.`}>
      <p className="pbxprice-note font-dm text-sm leading-relaxed mb-7"><strong>Market anchors for the box only, not BrainNET prices.</strong> Phones, lines, installation and support are extra.</p>
      <Table columns={["Team size", "Model (listing)", "Users", "Concurrent calls", "Box price (Rs.)"]} rows={listings.map(p => [p.team, p.model, p.users, p.calls, p.price.toLocaleString("en-PK")])} caption="Public PBX appliance prices by team size on 22 Oct 2026" />
      <p className="pbxprice-muted font-dm mt-6 leading-relaxed">The UCM6308A lists below the P560 yet states a higher user capacity, so price does not track capacity across brands. Do not pick by price alone: size by users, concurrent calls and ports.</p>
    </Section>
    <Section eyebrow="The full bill" heading="What goes into the total PBX price" kicker="The box is only one line of a real quote.">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-9"><img src={equipment} alt="Technician connecting business phones, network switches and power backup equipment" width={1200} height={800} loading="lazy" className="w-full rounded-lg aspect-[3/2] object-cover" /><p className="pbxprice-muted font-dm leading-relaxed">A telephone-exchange tender from the Securities and Exchange Commission of Pakistan shows how a buyer itemises it: the exchange, an operator console, batteries, cabling and an MDF box, installation quoted separately, a one-year warranty and taxes.</p></div>
      <Table columns={["Cost item", "One-time or monthly", "What it covers"]} rows={costItems} caption="Complete PBX cost items and billing frequency" />
    </Section>
    <Section eyebrow="Compare your options" heading="PBX price by type"><Table columns={["Type", "How you pay", "Cost pattern", "Best for"]} rows={types} caption="Traditional, IP and virtual PBX cost comparison" /><p className="font-dm mt-6 leading-relaxed">Explore <Link className="pbxprice-link" to="/services/internet/ip-pbx">IP PBX systems</Link> or <Link className="pbxprice-link" to="/services/internet/virtual-pbx">Virtual PBX</Link> for your team.</p>
      <p className="pbxprice-muted font-dm mt-8 mb-6">To compare fairly, work out the three-year cost of each option:</p>
      <div className="pbxprice-formula font-display text-center" aria-label="Three-year cost equals upfront plus 36 times monthly cost"><div><strong>3-year cost</strong><small>Total ownership cost</small></div><span className="pbxprice-accent text-2xl">=</span><div><strong>Upfront</strong><small>One-time costs</small></div><span className="pbxprice-accent text-2xl">+</span><div><strong>{terms.comparisonMonths} × monthly</strong><small>Recurring costs</small></div></div>
      <p className="pbxprice-muted font-dm leading-relaxed mt-6">IP PBX has a high upfront and low monthly; virtual PBX is the reverse. The cheaper option depends on headcount and how long you keep the system. We run this comparison for you in the quote.</p>
    </Section>
    <Section eyebrow="Compare every line" heading="Why two PBX quotes for the same team can differ by a lot" kicker="Check these before you compare quotes."><Table columns={["Check", "Why it changes the price"]} rows={checks} caption="Checks that explain differences between PBX quotes" /></Section>
    <Section eyebrow="Spend smarter" heading="How to lower your PBX cost"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{savings.map(({ Icon, title: name, body }) => <article key={name} className="border-t border-border pt-5"><Icon className="pbxprice-accent w-7 h-7" /><h3 className="font-display font-semibold text-xl mt-5">{name}</h3><p className="pbxprice-muted font-dm text-sm mt-3 leading-relaxed">{body}</p></article>)}</div><p className="font-dm mt-8">Connect your PBX with <Link className="pbxprice-link" to="/services/internet/sip-trunk">SIP trunk lines</Link> and <Link className="pbxprice-link" to="/services/internet/ivr-services">IVR services</Link>.</p></Section>
    <Section eyebrow="One itemised proposal" heading="How we quote your PBX"><ol className="grid md:grid-cols-3 gap-8">{[
      { title: "Share", body: "Your headcount, branches, existing lines and phones." },
      { title: "We size", body: "Users, concurrent calls, ports, and whether IP or virtual fits better." },
      { title: "You receive", body: `One written ${terms.currency} quote with system, phones, lines, installation and support itemised, plus a three-year cost comparison. Normally within ${terms.quoteWithinHours} hours.` },
    ].map((step, i) => <li key={step.title} className="border-t border-border pt-5"><span className="pbxprice-accent font-display text-3xl font-bold">0{i + 1}</span><h3 className="font-display font-semibold text-xl mt-5">{step.title}</h3><p className="pbxprice-muted font-dm text-sm mt-3 leading-relaxed">{step.body}</p></li>)}</ol><div className="mt-8"><QuoteButtons /></div></Section>
    <TelephonyFAQ id="pbxprice" title="PBX Price FAQs" faqs={faqs} />
    <RelatedServices currentPath={PATH} />
    <section className="pbxprice-band pbxprice-section"><div className="max-w-screen-xl mx-auto px-5 text-center"><Calculator className="pbxprice-accent w-10 h-10 mx-auto mb-5" /><h2 className="font-display font-bold">Ready for a clear PBX price?</h2><p className="pbxprice-muted font-dm text-lg max-w-2xl mx-auto mt-5 leading-relaxed">Tell us your team size, lines and phones, and we will send one itemised {terms.currency} quote within {terms.quoteWithinHours} hours.</p><div className="flex justify-center mt-8"><QuoteButtons /></div></div></section>
  </main><Footer /></div>;
}
