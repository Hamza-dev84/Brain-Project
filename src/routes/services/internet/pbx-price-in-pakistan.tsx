import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import {
  Server,
  Cloud,
  Users,
  Gauge,
  Phone,
  Cable,
  Wrench,
  ShieldCheck,
  Calculator,
  Layers,
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
import ComparisonTable from "@/components/internet/telephony/ComparisonTable";
import CostDrivers from "@/components/internet/telephony/CostDrivers";
import TelephonyFAQ from "@/components/internet/telephony/TelephonyFAQ";
import RelatedServices from "@/components/internet/telephony/RelatedServices";
import CTABand from "@/components/internet/telephony/CTABand";
import ImagePlaceholder from "@/components/internet/telephony/ImagePlaceholder";
import { buildTelephonyJsonLd } from "@/components/internet/telephony/telephonySeo";

const PATH = "/services/internet/pbx-price-in-pakistan";

const title = "PBX Price in Pakistan | PBX & PABX System Cost Guide — BrainNET";
const description =
  "What a PBX system costs in Pakistan. Compare analogue PABX, IP PBX and cloud virtual PBX pricing, see every cost driver, and get an itemised quote for your site.";

export const Route = createFileRoute("/services/internet/pbx-price-in-pakistan")({
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
  component: PBXPrice,
});

const systemTypes = [
  {
    Icon: Cable,
    title: "Analogue PABX",
    who: "Very small offices, legacy sites",
    cost: "Lowest upfront, highest per-feature",
    body: "A traditional PABX system switches calls over copper pairs. Cheap to buy, but IVR, recording and reporting are bolt-on cards — and analogue line rental keeps climbing while SIP keeps falling.",
    verdict: "Only worth it if you are keeping existing analogue lines and handsets.",
  },
  {
    Icon: Server,
    title: "On-premise IP PBX",
    who: "25–200+ extensions, compliance-driven sites",
    cost: "Capital purchase + annual maintenance",
    body: "Hardware and extension licences bought once, installed in your rack. Recordings and call data stay in your building, and internal calling survives an internet outage.",
    verdict: "Best five-year cost at scale, and mandatory where data must stay on site.",
    link: "/services/internet/ip-pbx-pakistan",
  },
  {
    Icon: Cloud,
    title: "Virtual / cloud PBX",
    who: "Distributed teams, fast-growing SMEs",
    cost: "Monthly per extension, no capital",
    body: "The system runs in our data centre. No hardware, no maintenance window, extensions added or dropped each month, and staff answer the office number on mobile.",
    verdict: "Lowest entry cost and the fastest to deploy — usually live within a week.",
    link: "/services/internet/virtual-pbx-pakistan",
  },
];

const drivers = [
  { Icon: Users, title: "Number of extensions", body: "The primary driver in every quote. On-premise systems licence in bands (25 / 50 / 100 users), so crossing a band creates a step change. Cloud scales smoothly per seat.", impact: "Highest impact" },
  { Icon: Gauge, title: "Concurrent call capacity", body: "How many calls run at once decides hardware class, transcoding licences and SIP channel count. A 50-seat call centre costs far more than a 50-seat back office.", impact: "High impact" },
  { Icon: Phone, title: "Handsets & endpoints", body: "IP desk phones are often the largest single line item after the system. Softphones and mobile apps cost nothing extra, which is why hybrid rollouts land cheaper.", impact: "High impact" },
  { Icon: Layers, title: "Features & licences", body: "Multi-level IVR, call recording with long retention, queue analytics and CRM integration are licensed separately on most on-premise platforms, and tiered on cloud.", impact: "Medium impact" },
  { Icon: Cable, title: "Cabling, gateways & UPS", body: "Structured cabling, PoE switches, FXO/FXS gateways for legacy analogue lines and UPS provisioning are real installation costs that quotes often omit.", impact: "Medium impact" },
  { Icon: Wrench, title: "Installation & maintenance", body: "Site survey, configuration, rollout and an annual maintenance contract. Skipping maintenance is the most common false economy we see in Pakistani deployments.", impact: "Medium impact" },
];

const budgetBands = [
  {
    band: "Small office",
    seats: "Up to 25 extensions",
    cloud: "Lowest monthly outlay — no hardware, live in days",
    onprem: "Compact appliance, one-time purchase, pays back over 3–4 years",
    note: "At this size, cloud almost always wins unless recordings must stay on site.",
  },
  {
    band: "Growing business",
    seats: "25–100 extensions",
    cloud: "Predictable per-seat cost, scales with hiring",
    onprem: "Rack server plus licence band, lower five-year total",
    note: "The genuine crossover point. We model both over five years before recommending.",
  },
  {
    band: "Contact centre / enterprise",
    seats: "100+ extensions",
    cloud: "Attractive where teams are remote or multi-city",
    onprem: "Usually the lowest total cost, with HA and full data control",
    note: "Redundancy, SLA and integration work dominate the quote more than seat count.",
  },
];

const comparisonRows = [
  { label: "Upfront capital cost", values: ["Low", "Medium", "High"] },
  { label: "Monthly recurring cost", values: ["Medium (per seat)", "Low (line rental)", "Low (maintenance)"] },
  { label: "IVR & call recording included", values: ["yes", "no", "partial"] },
  { label: "Remote & mobile extensions", values: ["yes", "no", "partial"] },
  { label: "Data & recordings stay on your premises", values: ["no", "yes", "yes"] },
  { label: "Typical time to deploy", values: ["Days", "1–2 weeks", "2–4 weeks"] },
  { label: "Hardware refresh to budget for", values: ["no", "yes", "yes"] },
  { label: "Lowest five-year cost at 100+ seats", values: ["partial", "no", "yes"] },
];

const faqs = [
  { question: "How much does a PBX system cost in Pakistan?", answer: "There is no single figure, because a PBX quote is really a bill of materials. The three things that decide it are the number of extensions, the number of concurrent calls, and whether you buy an on-premise system outright or subscribe to a cloud one per seat. On top of that sit handsets, cabling, gateways for legacy lines, feature licences and an annual maintenance contract. We publish the drivers rather than a headline price so you can sanity-check any quote you receive, including ours." },
  { question: "What is the difference between PBX price and PABX price in Pakistan?", answer: "In practice the terms are used interchangeably. PABX (Private Automatic Branch Exchange) usually refers to older analogue systems switching calls over copper, while PBX today generally means an IP-based system running over your data network. An analogue PABX looks cheaper on the invoice, but IVR, recording and reporting are paid add-on cards, and analogue line rental costs more per channel than SIP — so the total cost usually inverts within two to three years." },
  { question: "Is an IP PBX price higher than a virtual PBX?", answer: "Upfront, yes — an IP PBX is a capital purchase covering the appliance or server, extension licences, handsets and installation, while a virtual PBX has almost no entry cost. Over five years the picture reverses at scale: once the on-premise hardware is paid off you are only funding maintenance and SIP trunking, whereas cloud keeps billing per seat. The crossover typically sits somewhere between 25 and 100 extensions, depending on your feature mix." },
  { question: "What is included in a BrainNET PBX quote?", answer: "Every quote is itemised: the system itself (appliance, server or cloud tenant), extension licences or seat count, IP handsets, any FXO/FXS gateways needed for legacy analogue equipment, structured cabling and PoE requirements, the SIP trunk and DID numbers, installation and configuration labour, staff training, and the annual maintenance contract. Nothing material is left to 'to be advised'." },
  { question: "Do I need to buy handsets, or can staff use their phones?", answer: "You can mix both, and most clients do. Reception, meeting rooms and heavy phone users get IP desk handsets; everyone else uses a desktop softphone or the mobile app on the same extension. Because softphones cost nothing extra, a hybrid rollout is usually the single largest saving available on a PBX project." },
  { question: "Are there hidden costs in a PBX system?", answer: "The ones that catch people out are structured cabling and PoE switching, UPS capacity for the rack, FXO/FXS gateways to keep fax, lift and door phones alive, feature licences for recording retention or extra IVR levels, and the maintenance contract from year two. We list all of these in the initial proposal so the second-year budget is not a surprise." },
  { question: "Can I upgrade an existing PABX instead of replacing it?", answer: "Sometimes. If your analogue PABX is healthy and handsets are serviceable, we can front it with a SIP gateway so you get cheaper SIP trunking without replacing the system. That buys time, but you will not get modern IVR, recording or remote extensions until the switch itself is replaced." },
  { question: "How do I get an accurate PBX price for my business?", answer: "Give us four numbers: total extensions, expected concurrent calls at your busy hour, how many staff are remote or field-based, and whether recordings must stay on your premises. With those we can produce an itemised quote for both an on-premise and a cloud option, modelled over five years, usually within two working days." },
];

function PBXPrice() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openQuote = () => setIsModalOpen(true);

  const jsonLd = buildTelephonyJsonLd({
    path: PATH,
    name: "PBX Systems & Pricing in Pakistan",
    serviceType: "PBX and PABX system supply, installation and pricing",
    description:
      "PBX price guide for Pakistan — what analogue PABX, on-premise IP PBX and cloud virtual PBX systems cost, the factors that drive the quote, and how to budget accurately.",
    breadcrumbLabel: "PBX Price in Pakistan",
    faqs,
    offers: systemTypes.map((s) => ({ name: s.title, description: s.who })),
  });

  return (
    <div className="bn-home min-h-screen relative overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <div className="pt-24 max-w-screen-xl mx-auto px-5 relative z-10">
        <Breadcrumb />
      </div>

      <TelephonyHero
        eyebrow="PBX Price in Pakistan"
        headline="PBX price in Pakistan."
        headlineAccent="Every cost, before you sign."
        subcopy={
          <>
            A straight guide to what PBX and PABX systems actually cost in Pakistan — analogue,
            on-premise IP PBX and cloud — plus the drivers behind every quote and an itemised
            proposal for your own site.
          </>
        }
        badges={[
          { Icon: Calculator, label: "Itemised, no 'TBA' lines" },
          { Icon: Layers, label: "Cloud vs on-premise modelled" },
          { Icon: ShieldCheck, label: "Five-year cost comparison" },
        ]}
        imageLabel="Hero Banner Image"
        imageHint="Cinematic still-life of a PBX appliance, IP handset and printed quote on a dark desk, deep indigo with red rim light — 1920×900"
        onQuote={openQuote}
      />

      <ClientLogoSlider />

      {/* ---------- Why no sticker price ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal className="lg:col-span-6">
              <span className="bn-eyebrow">Read this first</span>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] bn-display mt-5">
                Anyone quoting a PBX price <span className="bn-display-accent">without asking questions is guessing.</span>
              </h2>
              <div className="flex flex-col gap-4 mt-6 font-dm text-[hsl(var(--bn-ink-soft))] leading-relaxed">
                <p>
                  A PBX quote is a bill of materials, not a product with a shelf price. The same
                  "50-extension system" can differ several times over in cost depending on concurrent
                  calls, handset choice, whether recordings must stay on site, and how much structured
                  cabling the building already has.
                </p>
                <p>
                  So instead of a headline number, this page lays out every driver that moves the
                  figure. Use it to interrogate any quote you receive — including ours — and to spot
                  the costs that tend to appear in year two rather than on the first invoice.
                </p>
                <p>
                  Then send us four numbers and we'll model both an on-premise and a cloud option over
                  five years, itemised line by line.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-6">
              <ImagePlaceholder
                label="Cost Breakdown Infographic"
                hint="Stacked cost bar broken into system, licences, handsets, cabling, installation and maintenance, indigo gradient with red highlight — 1200×900"
                aspect="aspect-[4/3]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------- System types ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Three ways to buy"
            title={<>Analogue PABX, IP PBX, <span className="bn-display-accent">or cloud.</span></>}
            kicker="The system type you choose sets the shape of the cost far more than the brand does."
          />

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
            {systemTypes.map((s) => (
              <StaggerItem key={s.title}>
                <article className="bn-tile p-7 h-full flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                    <s.Icon className="w-7 h-7 text-[hsl(var(--bn-violet-soft))]" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-[hsl(var(--bn-ink))]">{s.title}</h3>
                  <dl className="flex flex-col gap-2 py-3 border-y border-[hsl(var(--bn-line)/0.5)]">
                    <div className="flex flex-col">
                      <dt className="font-dm text-xs uppercase tracking-wide text-[hsl(var(--bn-ink-soft))]">Best for</dt>
                      <dd className="font-dm text-sm text-[hsl(var(--bn-ink))]">{s.who}</dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="font-dm text-xs uppercase tracking-wide text-[hsl(var(--bn-ink-soft))]">Cost shape</dt>
                      <dd className="font-dm text-sm text-[hsl(var(--bn-violet-soft))]">{s.cost}</dd>
                    </div>
                  </dl>
                  <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed flex-1">{s.body}</p>
                  <p className="font-dm text-sm text-[hsl(var(--bn-ink))] italic">{s.verdict}</p>
                  {s.link && (
                    <Link
                      to={s.link}
                      className="font-display font-semibold text-sm text-[hsl(var(--bn-violet-soft))] underline underline-offset-4"
                    >
                      See {s.title} details →
                    </Link>
                  )}
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ComparisonTable
        title={<>Cost shape, <span className="bn-display-accent">side by side.</span></>}
        kicker="How the three system types compare on the dimensions that actually change your budget."
        columns={["Cloud virtual PBX", "Analogue PABX", "On-premise IP PBX"]}
        rows={comparisonRows}
        highlightIndex={2}
        caption="Cost comparison of cloud virtual PBX, analogue PABX and on-premise IP PBX systems in Pakistan"
      />

      <CostDrivers
        eyebrow="Cost drivers"
        title={<>Six things that move <span className="bn-display-accent">the number.</span></>}
        kicker="Check every quote you receive against this list — including the ones that leave items off."
        drivers={drivers}
        imageLabel="Quote Anatomy Visual"
        imageHint="Vertical infographic annotating a PBX quote document with callouts for licences, handsets, cabling and maintenance — 900×1125"
      />

      {/* ---------- Budget bands ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Budgeting by size"
            title={<>What to expect <span className="bn-display-accent">at your scale.</span></>}
            kicker="Where cloud tends to win, where on-premise takes over, and where it genuinely depends."
          />

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
            {budgetBands.map((b) => (
              <StaggerItem key={b.band}>
                <article className="bn-tile p-7 h-full flex flex-col gap-4">
                  <span className="bn-eyebrow">{b.seats}</span>
                  <h3 className="font-display font-semibold text-2xl text-[hsl(var(--bn-ink))]">{b.band}</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <Cloud className="w-5 h-5 mt-0.5 text-[hsl(var(--bn-violet-soft))] shrink-0" />
                      <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))]">{b.cloud}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Server className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                      <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))]">{b.onprem}</p>
                    </div>
                  </div>
                  <p className="font-dm text-sm text-[hsl(var(--bn-ink))] mt-auto pt-3 border-t border-[hsl(var(--bn-line)/0.5)]">
                    {b.note}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABand
        title="Send us four numbers, get an itemised quote."
        body="Extensions, busy-hour concurrent calls, remote staff, and whether recordings must stay on site."
        onQuote={openQuote}
        showWhatsApp
      />

      {/* ---------- What's in a BrainNET quote ---------- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <SectionHeader
            eyebrow="Our quotes"
            title={<>Itemised, <span className="bn-display-accent">with no 'to be advised'.</span></>}
            kicker="Every proposal we issue lists all of the following, so year two holds no surprises."
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              { Icon: Server, t: "System & licences", b: "Appliance, server or cloud tenant plus the exact extension licence band." },
              { Icon: Phone, t: "Handsets & endpoints", b: "Model-by-model handset list, with softphone seats shown as zero-cost alternatives." },
              { Icon: Cable, t: "Cabling & gateways", b: "Structured cabling, PoE switching, UPS sizing and FXO/FXS gateways for legacy lines." },
              { Icon: Wrench, t: "Installation & maintenance", b: "Survey, configuration, rollout, staff training and the annual maintenance contract." },
            ].map((c) => (
              <StaggerItem key={c.t}>
                <article className="bn-tile p-6 h-full flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--bn-red)/0.12)] border border-[hsl(var(--bn-red)/0.35)] flex items-center justify-center">
                    <c.Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[hsl(var(--bn-ink))]">{c.t}</h3>
                  <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{c.b}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <TelephonyFAQ
        id="pbxprice"
        title={<>PBX pricing in Pakistan, <span className="bn-display-accent">answered plainly.</span></>}
        kicker="The questions buyers ask us right before they compare quotes."
        faqs={faqs}
      />

      <RelatedServices currentPath={PATH} />

      <FinalCTASection />
      <Footer />

      <AvailabilityCheckerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
