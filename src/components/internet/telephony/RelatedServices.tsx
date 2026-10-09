import { Link } from "@/lib/router-compat";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import { telephonyLinks, internetLinks } from "./telephonyLinks";

interface RelatedServicesProps {
  /** Current page path — excluded from the list. */
  currentPath: string;
  title?: string;
  kicker?: string;
  includeInternet?: boolean;
}

export const RelatedServices = ({
  currentPath,
  title = "Explore the rest of the stack.",
  kicker = "Every corporate telephony service we run in Pakistan, on one network and one invoice.",
  includeInternet = true,
}: RelatedServicesProps) => {
  const items = [...telephonyLinks, ...(includeInternet ? internetLinks : [])].filter(
    (l) => l.path !== currentPath,
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-screen-xl mx-auto px-5">
        <SectionHeader eyebrow="Related services" title={title} kicker={kicker} />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {items.map((l) => (
            <StaggerItem key={l.path}>
              <Link to={l.path} className="bn-tile p-6 h-full flex flex-col gap-3 group">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display font-semibold text-lg text-[hsl(var(--bn-ink))] group-hover:text-[hsl(var(--bn-violet-soft))] transition-colors">
                    {l.label}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[hsl(var(--bn-violet-soft))] shrink-0" />
                </div>
                <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{l.blurb}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default RelatedServices;
