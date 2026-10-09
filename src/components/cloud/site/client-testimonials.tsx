import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/cloud/site/primitives";
import { cn } from "@/lib/utils";
import aliAkbarLogo from "@/assets/cloud/customers/ali-akbar.webp";
import fortressSquareLogo from "@/assets/cloud/customers/fortress-square.webp";
import lseLogo from "@/assets/cloud/customers/lse.webp";

/* ============================================================
 * ClientTestimonials — shared single-slide carousel of customer
 * proof. Each slide matches the size/shape of the original
 * VpsTestimonial card. Used across home, VPS, Dedicated,
 * and Colocation pages.
 * ============================================================ */

type Item = {
  quote: React.ReactNode;
  name: string;
  role: string;
  company: string;
  logo: string;
  metric: { value: string; label: string };
};

const ITEMS: Item[] = [
  {
    quote: (
      <>
        "Our ERP system was slow on our old dedicated server abroad. After
        switching to BrainCLOUD's Dedicated Server Hosting in Pakistan, our
        database query response time dropped from{" "}
        <span className="text-green">4.2s to 320ms</span> and we finally cleared
        our month-end reporting backlog without overtime."
      </>
    ),
    name: "Mr. Awais",
    role: "IT Manager",
    company: "Ali Akbar Group",
    logo: aliAkbarLogo,
    metric: { value: "−92%", label: "Query response time vs prior host" },
  },
  {
    quote: (
      <>
        "Our POS terminals across 60+ retail outlets were disconnecting during
        peak hours because of high latency to our foreign VPS. After moving to
        BrainCLOUD's
        <a
          href="/services/cloud/vps-hosting-pakistan"
          className="
    text-[#15803d]
    hover:text-[#166534]
    active:text-[#14532D]
    transition-colors
  "
        >
          {" "}
          VPS Hosting in Pakistan,{" "}
        </a>
        transaction sync went from{" "}
        <span className="text-green">6s to 200ms</span> and we stopped losing
        sales data on weekends."
      </>
    ),
    name: "Abdul Khaliq Maani",
    role: "IT Manager",
    company: "Fortress Square Mall",
    logo: fortressSquareLogo,
    metric: { value: "−97%", label: "Sync latency vs prior host" },
  },
  {
    quote: (
      <>
        "Our trading platform's ticker data feed was facing delays, often routing through servers abroad. After deploying on BrainCLOUD's low-latency backbone, our market data delivery speeds increased, and our broker clients stopped complaining about stale prices."
      </>
    ),
    name: "Mr. Aitzaz",
    role: "IT Manager",
    company: "Lahore Stock Exchange",
    logo: lseLogo,
    metric: { value: "−94%", label: "Data feed latency vs prior host" },
  },
];

function TestimonialSlide({ item }: { item: Item }) {
  return (
    <figure className="relative grid gap-8 rounded-[var(--radius-card)] border border-hairline bg-white p-8 shadow-[var(--shadow-card)] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
      <div>
        <svg
          aria-hidden
          viewBox="0 0 32 32"
          className="h-7 w-7 text-green"
          fill="currentColor"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1-4 4-4V8h-2Zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1-4 4-4V8h-2Z" />
        </svg>
        <blockquote className="mt-4 font-display text-xl font-bold leading-snug text-navy sm:text-2xl">
          {item.quote}
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-4">
          <span
            className="flex h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-full border border-hairline bg-white"
            aria-hidden
          >
            <img decoding="async"
              src={item.logo}
              alt=""
              className="h-full w-full object-contain p-1"
              loading="lazy"
            />
          </span>
          <span className="text-sm leading-tight">
            <span className="block font-display font-extrabold text-navy">
              {item.name}
            </span>
            <span className="block text-navy/55">
              {item.role} · {item.company}
            </span>
          </span>
        </figcaption>
      </div>
      <div className="flex flex-col items-start border-l-2 border-green pl-6 lg:items-end lg:pl-8 lg:text-right">
        <span className="font-display text-4xl font-extrabold leading-none text-navy sm:text-5xl">
          {item.metric.value}
        </span>
        <span className="mt-2 max-w-[10rem] text-[11px] font-extrabold uppercase tracking-[0.14em] text-navy/55">
          {item.metric.label}
        </span>
      </div>
    </figure>
  );
}

export function ClientTestimonials({
  tone = "surface",
  eyebrow = "Client testimonials",
  title = (
    <>
      Trusted by teams who measure{" "}
      <span className="text-green">every millisecond.</span>
    </>
  ),
  lede = "Real outcomes from Pakistani businesses that moved their critical workloads to BrainCLOUD's infrastructure.",
  className,
}: {
  tone?: "surface" | "white" | "tint";
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = React.useState(0);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelected(emblaApi.selectedScrollSnap());
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <Section tone={tone} className={className}>
      <div className="mb-12 max-w-3xl sm:mb-14">
        <span className="text-eyebrow text-navy/60">{eyebrow}</span>
        <h2 className="mt-4 font-display text-h2 font-extrabold tracking-[-0.015em] text-navy">
          {title}
        </h2>
        {lede && (
          <p className="mt-5 text-lede text-charcoal">{lede}</p>
        )}
      </div>


      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {ITEMS.map((item) => (
              <div key={item.name} className="min-w-0 flex-[0_0_100%] pr-0">
                <TestimonialSlide item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 sm:mt-8">
          <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
            {ITEMS.map((item, i) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={selected === i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-200",
                  selected === i
                    ? "w-8 bg-green"
                    : "w-2 bg-navy/20 hover:bg-navy/40",
                )}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-navy transition-colors hover:border-green hover:text-green disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-navy transition-colors hover:border-green hover:text-green disabled:opacity-40"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
