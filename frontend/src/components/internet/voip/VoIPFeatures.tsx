import {
  PhoneCall,
  ListTree,
  Mic,
  BarChart3,
  Shuffle,
  ShieldCheck,
  Smartphone,
  Globe2,
} from "lucide-react";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import VoIPPlaceholder from "./VoIPPlaceholder";

const features = [
  {
    Icon: ListTree,
    title: "IVR & auto attendant",
    body: "Multi-level menus route callers to the right department before a human picks up — no missed enquiries at peak hours.",
  },
  {
    Icon: Mic,
    title: "Call recording & storage",
    body: "Record inbound and outbound calls for quality assurance, training and dispute resolution, with searchable retention.",
  },
  {
    Icon: BarChart3,
    title: "Live call analytics",
    body: "Concurrent-call load, answer rates, abandoned calls and agent performance in one dashboard.",
  },
  {
    Icon: Shuffle,
    title: "Number porting & DIDs",
    body: "Keep the numbers your customers already dial, or add new city DIDs for Lahore, Karachi and Islamabad presence.",
  },
  {
    Icon: PhoneCall,
    title: "HD voice codecs",
    body: "G.722 / Opus wideband audio over our own fiber — no jitter, no clipping, no 'can you hear me now'.",
  },
  {
    Icon: Smartphone,
    title: "Softphone & mobile apps",
    body: "Desk phones, desktop softphones and mobile apps share one extension so staff stay reachable off-site.",
  },
  {
    Icon: ShieldCheck,
    title: "Fraud & toll protection",
    body: "Rate limiting, IP whitelisting and encrypted SIP signalling protect your trunk from toll fraud.",
  },
  {
    Icon: Globe2,
    title: "International termination",
    body: "Competitive per-minute rates to 200+ destinations with transparent, itemised billing.",
  },
];

export const VoIPFeatures = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <SectionHeader
        eyebrow="Features & benefits"
        title={<>Everything a business phone system needs. <span className="bn-display-accent">Nothing you don't.</span></>}
        kicker="Our VoIP services in Pakistan ship with enterprise call handling as standard — not as paid extras."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14">
        <div className="lg:col-span-4">
          <VoIPPlaceholder
            label="Feature Illustration 1"
            hint="3D isometric IP desk phone with indigo/red rim light, glass reflection"
            aspect="aspect-[4/5]"
            className="h-full"
          />
        </div>

        <StaggerContainer className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <article className="bn-tile p-6 h-full flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                  <f.Icon className="w-6 h-6 text-[hsl(var(--bn-violet-soft))]" />
                </div>
                <h3 className="font-display font-semibold text-lg text-[hsl(var(--bn-ink))]">{f.title}</h3>
                <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{f.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  </section>
);

export default VoIPFeatures;
