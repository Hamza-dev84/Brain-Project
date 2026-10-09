import React from "react";
import { Building2, ShoppingCart, Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";

const OTPUseCases = () => {
  const useCases = [
    {
      title: "Banking",
      description:(
        <>
          <a
                href="/industry-solutions/financial-services"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
        {" "} Banks {" "}
        </a>
        rely on OTP verification to confirm transactions and logins. BSMS provides secure SMS OTP verification that protects digital banking systems.
        </>
      ),
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b2daaf627c9803ec89ae619c401a62fbce6d3972?width=680",
      alt: "Hand holding smartphone with secure banking app login featuring lock icon and fingerprint authentication.",
      icon: <Building2 size={32} className="text-accent" />,
    },
    {
      title: "E-Commerce",
      description:
        "Online stores use OTP SMS services to verify customers. This happens during account creation and checkout. This reduces fraud and improves user trust.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b7be440febc1b02d9de070c4bdd623430fd1af75?width=680",
        alt: "Laptop screen displaying online shopping cart with OTP verification popup and secure badge for OTP SMS Service Pakistan.",
      icon: <ShoppingCart size={32} className="text-accent" />,
    },
    {
      title: "Healthcare",
      description:(
        <>
          <a
                href="/industry-solutions/health-care"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
        {" "}Healthcare portals{" "}
        </a>
        and medical systems in Pakistan use OTP codes. These codes verify patient accounts, grant appointment access, and ensure secure record management.
        </>
        ),
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9c96a8d4bd7282a50cdb064a5016860efd4cd9cf?width=680",
      alt: "Doctor holding tablet with secure patient portal login screen and privacy lock overlay in hospital setting for reliable OTP SMS Service Pakistan.",
      icon: <Heart size={32} className="text-accent" />,
    },
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary">
            Enterprise Use Cases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <article
              key={index}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-accent"
            >
              <div className="relative h-56 overflow-hidden">
                <img decoding="async"
                  src={useCase.image}
                  alt={`${useCase.title} use case`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-card">
                  {useCase.icon}
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-heading font-bold text-2xl text-primary mb-3">
                  {useCase.title}
                </h3>
                <p className="font-body text-base text-primary/80 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services/sms/contact">
            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-body font-semibold hover:bg-secondary/80 shadow-lg hover:shadow-xl transition-all">
              Book a Demo for Your Industry →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OTPUseCases;
