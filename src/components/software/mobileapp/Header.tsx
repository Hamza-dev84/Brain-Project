import React, { useState, useEffect } from "react";
import { Link } from "@/lib/router-compat";
import { Phone, Eye, Menu, X, ArrowLeft } from "lucide-react";

const Header: React.FC = () => {
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
    <>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-10 md:h-12 bg-gradient-to-r from-[#17164F] to-[#2a2870] flex items-center px-10 max-md:px-5">
        <a
          href="/services/software"
          className="flex items-center gap-2 text-white hover:text-[#F9B050] transition-colors duration-300 font-semibold text-xs md:text-sm group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <span>Go to Main Site</span>
        </a>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-10 md:top-12 left-0 right-0 z-50 flex w-full items-center justify-between text-primary font-raleway font-semibold py-4 px-10 transition-all duration-300 max-md:px-5 ${
          isScrolled ? "glassmorphism shadow-lg" : "bg-white"
        }`}
      >
        <img loading="eager" decoding="async" fetchPriority="high"
          src="/img/builder/a111eebc491916b5.webp"
          alt="BrainSOFT Logo"
          className="aspect-[1.05] object-contain w-[79px] shrink-0"
        />

        <nav className="flex items-center gap-8 font-lato font-semibold text-[20px] max-md:hidden">
          <a
            href="#services"
            className="relative hover:text-secondary transition-colors group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative hover:text-secondary transition-colors group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative hover:text-secondary transition-colors group"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#refer"
            className="relative hover:text-secondary transition-colors group"
          >
            Refer & Earn
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4 font-lato font-semibold text-[18px] max-md:hidden">
          <Link to="/services/software/contact-us" className="bg-secondary text-secondary-foreground flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-secondary/90 hover-glow transition-all duration-300">
            <Phone size={18} />
            <span>Free Consultation</span>
          </Link>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale transition-all duration-300">
            <Eye size={18} />
            <span>See Our Work</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden animate-fade-in-up">
            <nav className="flex flex-col p-6 gap-4 font-lato font-semibold text-[18px]">
              <a
                href="#services"
                className="hover:text-secondary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="hover:text-secondary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="hover:text-secondary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
              <a
                href="#refer"
                className="hover:text-secondary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Refer & Earn
              </a>
              <div className="flex flex-col gap-3 mt-4">
                <Link to="/services/software/contact-us" className="bg-secondary text-secondary-foreground flex items-center justify-center gap-2 px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors">
                  <Phone size={18} />
                  <span>Free Consultation</span>
                </Link>
                <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Eye size={18} />
                  <span>See Our Work</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
