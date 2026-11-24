import { Link } from "@tanstack/react-router";

type BrandKey = "software" | "internet" | "cloud" | "sms";

const BRANDS: { key: BrandKey; label: string; to: string }[] = [
  { key: "internet", label: "BrainNET", to: "/services/internet" },
  { key: "cloud", label: "BrainCLOUD", to: "/services/cloud" },
  { key: "sms", label: "BSMS", to: "/services/sms" },
  { key: "software", label: "BrainSOFT", to: "/services/software" },
];

/**
 * Slim group bar shown at the top of every sub-brand section.
 * Links back to the Brain-Net parent site and across to sibling brands.
 */
export function BrandBar({ active }: { active: BrandKey }) {
  return (
    <div className="w-full border-b border-white/10 bg-neutral-900 text-neutral-300">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-1 px-4 py-2 text-xs">
        <Link to="/" preload="intent" className="font-semibold text-white transition-colors hover:text-white/80">
          Brain Telecommunication
        </Link>
        <span aria-hidden className="hidden h-3 w-px bg-white/20 sm:block" />
        <nav aria-label="Brain-Net group brands" className="flex flex-wrap items-center gap-x-4">
          {BRANDS.map((brand) => (
            <Link
              key={brand.key}
              to={brand.to}
              preload="intent"
              className={
                brand.key === active
                  ? "font-semibold text-white"
                  : "transition-colors hover:text-white"
              }
            >
              {brand.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default BrandBar;
