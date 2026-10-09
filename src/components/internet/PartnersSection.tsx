import React from "react";

const partners = [
  { src: "/img/builder/7d9ec7af2e1278db.webp", alt: "Partner 1" },
  { src: "/img/builder/124a06a7c8f89395.webp", alt: "Partner 2" },
  { src: "/img/builder/d397284fd7a0b3b0.webp", alt: "Partner 3" },
  { src: "/img/builder/08186016f4cdbb03.webp", alt: "Partner 4" },
  { src: "/img/builder/add129df01c281e6.webp", alt: "Partner 5" },
  { src: "/img/builder/74e809f1b569478a.webp", alt: "Partner 6" },
  { src: "/img/builder/97a28f00a3f9d32a.webp", alt: "Partner 7" },
  { src: "/img/builder/97ff916cd14a8259.webp", alt: "Partner 8" },
];

const PartnersSection = () => {
  return (
    <section className="bg-secondary py-10">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="flex gap-20 items-center justify-center overflow-x-auto py-5 max-sm:gap-10">
          {partners.map((partner, index) => (
            <img decoding="async"
              key={index}
              src={partner.src}
              alt={partner.alt}
              loading="lazy"
              className="h-20 w-auto shrink-0 opacity-70 transition-opacity duration-300 hover:opacity-100 max-sm:h-16"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
