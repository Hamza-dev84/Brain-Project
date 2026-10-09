import React, { useState, useEffect } from "react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/software/ui/button";
import { Menu, X, ArrowLeft } from "lucide-react";

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-10 md:h-12 bg-gradient-to-r from-[#17164F] to-[#2a2870]">
        <div className="flex items-center h-full px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
          <Link
            to="/services/software"
            className="flex items-center gap-2 text-white hover:text-[#F9B050] transition-colors duration-300 font-semibold text-xs md:text-sm group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Go to Main Site</span>
          </Link>
        </div>
      </div>

      <header
        className={`fixed top-10 md:top-12 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glassmorphism shadow-lg py-4" : "bg-white py-6"
        }`}
      >
        <div className="flex w-full items-center justify-between px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
          {/* Logo */}
          <img loading="eager" decoding="async" fetchPriority="high"
            src="/img/builder/a111eebc491916b5.webp"
            alt="BrainSOFT Logo"
            className="h-12 w-auto object-contain cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-raleway font-semibold text-lg text-brand-dark">
            <button
              onClick={() => scrollToSection("services")}
              className="story-link hover:text-brand-secondary transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="story-link hover:text-brand-secondary transition-colors duration-300"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="story-link hover:text-brand-secondary transition-colors duration-300"
            >
              Support
            </button>
            <div className="relative group">
              <button className="story-link hover:text-brand-secondary transition-colors duration-300 flex items-center gap-1">
                Company
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block w-full text-left px-4 py-2 hover:bg-neutral-50 transition-colors"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block w-full text-left px-4 py-2 hover:bg-neutral-50 transition-colors"
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={() => scrollToSection("refer")}
                    className="block w-full text-left px-4 py-2 hover:bg-neutral-50 transition-colors"
                  >
                    Refer & Win
                  </button>
                  <a
                    href="/careers"
                    className="block w-full text-left px-4 py-2 hover:bg-neutral-50 transition-colors"
                  >
                    Careers
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/services/software/contact-us">
              <Button variant="primary">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-dark hover:text-brand-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[120px] md:top-[128px] left-0 right-0 bg-white shadow-xl z-40 lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4 font-raleway font-semibold text-lg text-brand-dark">
          <button
            onClick={() => scrollToSection("services")}
            className="text-left py-3 px-4 hover:bg-neutral-50 rounded-lg transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-left py-3 px-4 hover:bg-neutral-50 rounded-lg transition-colors"
          >
            Case Studies
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-left py-3 px-4 hover:bg-neutral-50 rounded-lg transition-colors"
          >
            Support
          </button>
          <div className="text-left py-3 px-4">
            <div className="font-bold mb-2">Company</div>
            <div className="flex flex-col gap-2 pl-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 hover:text-brand-secondary transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 hover:text-brand-secondary transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={() => scrollToSection("refer")}
                className="text-left py-2 hover:text-brand-secondary transition-colors"
              >
                Refer & Win
              </button>
              <a
                href="/careers"
                className="text-left py-2 hover:text-brand-secondary transition-colors"
              >
                Careers
              </a>
            </div>
          </div>

          <div className="mt-4">
            <Link to="/services/software/contact-us" className="block">
              <Button variant="primary" className="w-full">
                Free Consultation
              </Button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content from going under fixed header and top bar */}
      <div className="h-[120px] md:h-[128px]" />
    </>
  );
};
