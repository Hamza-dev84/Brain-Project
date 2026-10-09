import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PackageCard } from "./PackageCard";
import type { Package } from "@/data/internet/coverageAreas";

interface PackageCarouselProps {
  packages: Package[];
  selectedPackages?: string[];
  onPackageSelect?: (packageId: string) => void;
}

export const PackageCarousel = ({
  packages,
  selectedPackages = [],
  onPackageSelect,
}: PackageCarouselProps) => {
  return (
    <section className="py-20 px-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-primary/30 to-secondary/20" />
      <div className="particles opacity-60" />
      <div className="network-pattern opacity-30" />

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-raleway font-bold text-4xl md:text-5xl text-white mb-4">
            Pakistan's Fastest &amp; Most Reliable Internet!
          </h2>
          <p className="font-lato text-white/80 text-lg md:text-xl">
            Choose a monthly package that suits you
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {packages.map((pkg) => (
              <CarouselItem key={pkg.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <PackageCard
                  badge={pkg.badge}
                  speed={pkg.speed}
                  features={pkg.features}
                  price={pkg.price}
                  taxNote={pkg.taxNote}
                  isSelected={selectedPackages.includes(pkg.id)}
                  onSelect={() => onPackageSelect?.(pkg.id)}
                  showSelectButton={!!onPackageSelect}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
          <CarouselNext className="right-0 translate-x-1/2 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default PackageCarousel;
