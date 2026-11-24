import React, { useState, useEffect } from "react";
import { Link } from "@/lib/router-compat";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-10 md:top-12 left-0 right-0 z-40 flex w-full items-center gap-[40px_100px] text-brand-dark font-semibold capitalize justify-between flex-wrap px-[60px] h-20 max-md:px-5 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <img loading="eager" decoding="async" fetchPriority="high"
        src="/img/builder/a111eebc491916b5.webp"
        alt="BrainSOFT Logo"
        className="aspect-[1.05] object-contain w-[79px] shrink-0"
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-[25px] text-nav text-center flex-wrap">
        <a
          href="#services"
          className="hover:text-brand-secondary transition-colors duration-300 font-lato font-semibold"
        >
          Services
        </a>
        <a
          href="#about"
          className="hover:text-brand-secondary transition-colors duration-300 font-lato font-semibold"
        >
          About Us
        </a>
        <a
          href="#contact"
          className="hover:text-brand-secondary transition-colors duration-300 font-lato font-semibold"
        >
          Contact Us
        </a>
        <a
          href="#refer"
          className="hover:text-brand-secondary transition-colors duration-300 font-lato font-semibold"
        >
          Refer & Earn
        </a>
      </nav>

      {/* Desktop CTAs */}
      <div className="hidden md:flex items-center gap-4 text-button">
        <Link to="/services/software/contact-us" className="bg-brand-secondary text-brand-dark flex items-center gap-2.5 justify-center p-[13px] rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 font-lato font-semibold">
          <span>Free Consultation</span>
        </Link>
        <button className="flex items-center gap-2.5 justify-center p-[13px] rounded-lg border-2 border-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300 font-lato font-semibold">
          <span>See Our Work</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 hover:bg-neutral-light rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden animate-fade-in">
          <nav className="flex flex-col p-5 gap-4">
            <a
              href="#services"
              className="py-3 px-4 hover:bg-neutral-light rounded-lg transition-colors font-lato font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="py-3 px-4 hover:bg-neutral-light rounded-lg transition-colors font-lato font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="py-3 px-4 hover:bg-neutral-light rounded-lg transition-colors font-lato font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
            <a
              href="#refer"
              className="py-3 px-4 hover:bg-neutral-light rounded-lg transition-colors font-lato font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Refer & Earn
            </a>
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/services/software/contact-us" className="bg-brand-secondary text-brand-dark p-3 rounded-lg font-lato font-semibold hover:scale-105 transition-transform text-center">
                Free Consultation
              </Link>
              <button className="border-2 border-brand-dark p-3 rounded-lg font-lato font-semibold hover:bg-brand-dark hover:text-white transition-colors">
                See Our Work
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
