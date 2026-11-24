import alRaziLogo from "@/assets/internet/clients/al-razi-hospital.webp";
import kiaLogo from "@/assets/internet/clients/kia.png";
import avariLogo from "@/assets/internet/clients/avari-lahore.webp";
import wavesLogo from "@/assets/internet/clients/waves.png";
import punjabFoodLogo from "@/assets/internet/clients/punjab-food-authority.webp";
import lgsLogo from "@/assets/internet/clients/lgs.webp";
import colabsLogo from "@/assets/internet/clients/colabs.png";
import imbcoLogo from "@/assets/internet/clients/imbco.png";
import chamberLogo from "@/assets/internet/clients/chamber-of-commerce.webp";

const clients = [
  { name: "Al Razi Hospital", logo: alRaziLogo },
  { name: "KIA", logo: kiaLogo },
  { name: "Avari Lahore Hotel", logo: avariLogo },
  { name: "Waves", logo: wavesLogo },
  { name: "Punjab Food Authority", logo: punjabFoodLogo },
  { name: "LGS", logo: lgsLogo },
  { name: "Colabs", logo: colabsLogo },
  { name: "IMBCO", logo: imbcoLogo },
  { name: "Chamber of Commerce & Industry Lahore", logo: chamberLogo },
];

export const ClientLogos = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-raleway font-bold text-primary mb-4">Our Customers</h2>
          <p className="text-xl text-primary/70 font-lato">
            From Startups to Enterprises, Discover Our Diverse Clientele
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img loading="lazy" decoding="async" src={client.logo} alt={`${client.name} logo`} className="max-w-full h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
