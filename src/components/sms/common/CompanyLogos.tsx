import React from "react";

const CompanyLogos: React.FC = () => {
  const logos = [
    {
      src: "/img/builder/c9a005084b8336c2.webp",
      alt: "Company Logo 1",
    },
    {
      src: "/img/builder/05f844f5f1c917a6.webp",
      alt: "Company Logo 2",
    },
    {
      src: "/img/builder/6f8dd4c1360e65aa.webp",
      alt: "Company Logo 3",
    },
    {
      src: "/img/builder/488fa43d64cca4bb.webp",
      alt: "Company Logo 5",
    },
    {
      src: "/img/builder/a8190cbd8bb6738e.webp",
      alt: "Company Logo 6",
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-primary/70 font-body font-medium text-sm uppercase tracking-wider mb-12">
          Trusted and Used by Renowned Enterprises
        </h2>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 py-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 hover-lift"
              >
                <img decoding="async" src={logo.src} alt={logo.alt} className="h-12 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
