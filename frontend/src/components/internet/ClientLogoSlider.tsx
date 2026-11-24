import alRaziHospital from "@/assets/internet/clients/al-razi-hospital.webp";
import avariLahore from "@/assets/internet/clients/avari-lahore.webp";
import chamberOfCommerce from "@/assets/internet/clients/chamber-of-commerce.webp";
import colabs from "@/assets/internet/clients/colabs.png";
import imbco from "@/assets/internet/clients/imbco.png";
import kia from "@/assets/internet/clients/kia.png";
import lgs from "@/assets/internet/clients/lgs.webp";
import punjabFoodAuthority from "@/assets/internet/clients/punjab-food-authority.webp";
import waves from "@/assets/internet/clients/waves.png";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";

const clients = [
  { name: "Al-Razi Hospital", logo: alRaziHospital },
  { name: "Avari Lahore", logo: avariLahore },
  { name: "Chamber of Commerce", logo: chamberOfCommerce },
  { name: "Colabs", logo: colabs },
  { name: "IMBCO", logo: imbco },
  { name: "KIA", logo: kia },
  { name: "LGS", logo: lgs },
  { name: "Punjab Food Authority", logo: punjabFoodAuthority },
  { name: "Waves", logo: waves },
];

export const ClientLogoSlider = () => {
  const duplicatedLogos = [...clients, ...clients];

  return (
    <ScrollReveal>
      <section className="relative py-20 md:py-24 overflow-hidden bn-home">
        <div className="absolute inset-0 bg-[hsl(var(--bn-bg-deep))]" />
        <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[hsl(var(--bn-violet)/0.15)] blur-3xl pointer-events-none" />

        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[hsl(var(--bn-bg-deep))] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[hsl(var(--bn-bg-deep))] to-transparent z-20 pointer-events-none" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="bn-eyebrow mb-4 inline-flex">Our Clients</span>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-tight mt-4">
              <span className="bn-display">Trusted by leading</span>{" "}
              <span className="bn-display-accent">organizations.</span>
            </h2>
            <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-base md:text-lg mt-4 max-w-xl mx-auto">
              Powering success across industries with reliable fiber connectivity.
            </p>
          </div>

          <div className="bn-logo-slider-container">
            <div className="bn-logo-slider-track">
              {duplicatedLogos.map((client, index) => (
                <div key={`${client.name}-${index}`} className="bn-logo-slide">
                  <div className="bn-logo-tile">
                    <img decoding="async"
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-14 md:h-16 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .bn-logo-slider-container { width: 100%; overflow: hidden; position: relative; }
          .bn-logo-slider-track {
            display: flex; gap: 1.5rem; animation: bn-logo-scroll 35s linear infinite; width: fit-content;
          }
          .bn-logo-slider-track:hover { animation-play-state: paused; }
          .bn-logo-slide { flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
          .bn-logo-tile {
            background: #ffffff; border-radius: 1rem; padding: 1.25rem 2rem; min-width: 180px; height: 110px;
            display: flex; align-items: center; justify-content: center;
            border: 1px solid hsl(var(--bn-violet) / 0.25);
            box-shadow: 0 10px 30px -10px hsl(var(--bn-violet) / 0.35);
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          }
          .bn-logo-tile:hover {
            transform: translateY(-4px);
            border-color: hsl(var(--bn-red) / 0.5);
            box-shadow: 0 18px 40px -10px hsl(var(--bn-red) / 0.4);
          }
          @keyframes bn-logo-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @media (prefers-reduced-motion: reduce) { .bn-logo-slider-track { animation: none; } }
        `}</style>
      </section>
    </ScrollReveal>
  );
};

export default ClientLogoSlider;
