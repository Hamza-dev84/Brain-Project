import SectionHeader from "@/components/internet/home/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import VoIPPlaceholder from "./VoIPPlaceholder";

const useCases = [
  {
    title: "Call centres & BPOs",
    body: "High concurrent-call trunks, predictive-dialer friendly SIP, and per-agent recording for QA scoring.",
    placeholder: "Use-case vignette: call centre floor",
    hint: "Wide shot of agents on headsets, indigo screens, red accent lighting",
  },
  {
    title: "Software houses & IT teams",
    body: "SIP credentials your developers can wire straight into Asterisk, FreePBX, 3CX or a custom stack.",
    placeholder: "Use-case vignette: software house",
    hint: "Engineers at dual monitors, dark room, violet glow",
  },
  {
    title: "Corporate offices",
    body: "One extension plan across floors and branches, with auto attendant and voicemail-to-email for every seat.",
    placeholder: "Use-case vignette: corporate office",
    hint: "Modern Lahore office boardroom, cool indigo daylight",
  },
  {
    title: "Hospitals & education",
    body: "Department routing, emergency hunt groups and after-hours IVR that never drops a critical call.",
    placeholder: "Use-case vignette: hospital reception",
    hint: "Clean reception desk, staff on phone, subtle red accent",
  },
  {
    title: "E-commerce & logistics",
    body: "City DIDs for regional presence, order-status IVR, and call analytics tied to dispatch peaks.",
    placeholder: "Use-case vignette: logistics dispatch",
    hint: "Dispatch desk with route screens, warehouse behind, indigo tone",
  },
];

export const VoIPUseCases = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <SectionHeader
        eyebrow="Who it's for"
        title={<>Built for the businesses that <span className="bn-display-accent">live on the phone.</span></>}
        kicker="From three-line offices to 200-seat contact centres, the same network and the same SLA."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {useCases.map((u) => (
          <StaggerItem key={u.title}>
            <article className="bn-tile overflow-hidden h-full flex flex-col">
              <VoIPPlaceholder label={u.placeholder} hint={u.hint} className="rounded-none border-0 border-b border-dashed" />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))]">{u.title}</h3>
                <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{u.body}</p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default VoIPUseCases;
