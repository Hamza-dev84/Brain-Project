import React, { useState, useEffect } from "react";
import { Link } from "@/lib/router-compat";
import { Menu, X, ArrowLeft } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact Us" },
    { href: "#refer", label: "Refer & Earn" },
  ];

  return (
    <>
      {/* Top Bar - Go to Main Site */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#17164F] to-[#2a2870]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 md:h-12 flex items-center">
            <Link
              to="/services/software"
              className="flex items-center gap-1.5 text-xs md:text-sm font-lato font-semibold text-white hover:text-[#F9B050] transition-all duration-300 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Go to Main Site</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-10 md:top-12 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-effect shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img loading="eager" decoding="async" fetchPriority="high"
                src="/img/builder/a111eebc491916b5.webp"
                alt="BrainSOFT Logo"
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-lato font-semibold text-base text-[#17164F] hover:text-[#F9B050] transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F9B050] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/services/software/contact-us" className="px-6 py-2.5 bg-[#F9B050] text-[#17164F] font-lato font-semibold text-sm rounded-lg hover:bg-[#e6a347] transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Free Consultation
              </Link>
              <button className="px-6 py-2.5 border-2 border-[#17164F] text-[#17164F] font-lato font-semibold text-sm rounded-lg hover:bg-[#17164F] hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                See Our Work
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#17164F] hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 animate-fade-in">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-lato font-semibold text-base text-[#17164F] hover:text-[#F9B050] transition-colors px-2 py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col space-y-3 pt-4">
                  <Link to="/services/software/contact-us" className="px-6 py-2.5 bg-[#F9B050] text-[#17164F] font-lato font-semibold text-sm rounded-lg hover:bg-[#e6a347] transition-all text-center">
                    Free Consultation
                  </Link>
                  <button className="px-6 py-2.5 border-2 border-[#17164F] text-[#17164F] font-lato font-semibold text-sm rounded-lg hover:bg-[#17164F] hover:text-white transition-all">
                    See Our Work
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
