import aliAkbar from "@/assets/cloud/customers/ali-akbar.webp";
import ygrAsset from "@/assets/cloud/customers/ygr.webp";
import lse from "@/assets/cloud/customers/lse.webp";
import punjabUniversity from "@/assets/cloud/customers/punjab-university.webp";
import smeda from "@/assets/cloud/customers/smeda.png";
import interwood from "@/assets/cloud/customers/interwood.webp";
import avari from "@/assets/cloud/customers/avari.png";
import chughtaiLabAsset from "@/assets/cloud/customers/chughtai-lab.webp";

const LOGOS = [
  { src: aliAkbar, alt: "Ali Akbar Group" },
  { src: ygrAsset, alt: "YGR — Yum Group of Restaurants" },
  { src: lse, alt: "Lahore Stock Exchange" },
  { src: punjabUniversity, alt: "University of the Punjab" },
  { src: smeda, alt: "SMEDA" },
  { src: interwood, alt: "Interwood" },
  { src: avari, alt: "Avari" },
  { src: chughtaiLabAsset, alt: "Chughtai Lab" },
];

export function CustomerMarquee() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
      aria-label="Our customers"
    >
      <div className="flex w-max animate-marquee items-center gap-28 py-2 group-hover:[animation-play-state:paused] sm:gap-32 lg:gap-36">
        {row.map((logo, i) => (
          <img decoding="async"
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="h-16 w-auto shrink-0 object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
}
