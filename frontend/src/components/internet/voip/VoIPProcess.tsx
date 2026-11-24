import SectionHeader from "@/components/internet/home/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import VoIPPlaceholder from "./VoIPPlaceholder";

const steps = [
  { n: "01", title: "Requirement call & site survey", body: "We map your seat count, peak concurrent calls, existing PBX and building layout — usually within 48 hours." },
  { n: "02", title: "Numbers & porting", body: "New DIDs are provisioned, or we coordinate porting of your existing numbers with zero-downtime cutover planning." },
  { n: "03", title: "SIP trunk & PBX configuration", body: "Trunk credentials, codecs, dial plans, IVR menus and extensions configured against your hardware or cloud PBX." },
  { n: "04", title: "Testing & staff walkthrough", body: "Load-tested concurrent calls, MOS quality checks, failover verification and a short training session for your team." },
  { n: "05", title: "Go-live & SLA handover", body: "You go live with a signed 99.9% uptime SLA, a named account manager and 24/7 NOC escalation." },
];

export const VoIPProcess = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <SectionHeader
        eyebrow="How it works"
        title={<>From first call to <span className="bn-display-accent">first call.</span></>}
        kicker="A clear path from site survey to SLA handover — typically 5 to 10 working days."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-14 items-start">
        <StaggerContainer className="lg:col-span-7 flex flex-col gap-4">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <article className="bn-tile p-6 flex gap-5 items-start">
                <span className="font-display font-bold text-2xl text-[hsl(var(--bn-violet-soft))] shrink-0 w-12">
                  {s.n}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-semibold text-lg text-[hsl(var(--bn-ink))]">{s.title}</h3>
                  <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{s.body}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-6">
          <VoIPPlaceholder
            label="Process Illustration"
            hint="Neon line-art diagram: handset → SIP trunk → cloud PBX → extensions, indigo on deep navy"
            aspect="aspect-square"
          />
          <VoIPPlaceholder
            label="Client Success Visual"
            hint="Portrait of a BrainNET engineer configuring a PBX rack, red rim light"
            aspect="aspect-[4/3]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default VoIPProcess;
