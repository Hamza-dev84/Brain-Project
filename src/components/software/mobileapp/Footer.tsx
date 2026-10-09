import React, { useState } from "react";
import { Instagram, Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="w-full bg-gradient-to-br from-primary via-primary-dark to-primary px-6 py-16 max-md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="animate-slide-in-left">
            <div className="mb-6">
              <span className="text-white font-raleway text-[36px] font-bold">
                Brain<span className="text-secondary">SOFT</span>
              </span>
            </div>
            <p className="text-white/80 font-lato font-medium text-[16px] leading-[26px]">
              BrainSOFT is a division of BrainTEL Group, which is the pioneer of
              the Internet Service industry in Pakistan.
            </p>
          </div>

          {/* Company Links */}
          <div className="animate-slide-in-up stagger-1">
            <h4 className="text-white font-raleway text-[24px] leading-[30px] font-bold mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://brain.net.pk/AboutUs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/services/software/contact-us"
                  className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://brain.net.pk/Careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="animate-slide-in-up stagger-2">
            <h4 className="text-white font-raleway text-[24px] leading-[30px] font-bold mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services/software/erp-software-pakistan"
                  className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  ERP Software
                </a>
              </li>
              <li>
                <a
                  href="/services/software/mobile-app-developers-pakistan"
                  className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="/services/software/web-development-pakistan"
                  className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/services/software/web-design-services-pakistan"
                  className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Web Design Services
                </a>
              </li>
              <li>
                <a
                  href="/services/software/digital-marketing-pakistan"
                  className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter and Social */}
          <div className="animate-slide-in-right">
            <h4 className="text-white font-raleway text-[24px] leading-[30px] font-bold mb-6">
              Newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 mb-3">
                <Mail size={20} className="text-white/70" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Here"
                  required
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/60 font-lato text-[16px]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white px-6 py-3 rounded-xl font-raleway font-bold hover:bg-accent/90 hover-scale transition-all duration-300 shadow-lg"
              >
                Subscribe
              </button>
            </form>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#instagram"
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover-scale transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={22} className="text-white" />
              </a>
              <a
                href="#facebook"
                className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover-scale transition-all duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={22} className="text-white" />
              </a>
              <a
                href="#twitter"
                className="w-12 h-12 bg-black rounded-xl flex items-center justify-center hover-scale transition-all duration-300 shadow-lg"
                aria-label="Twitter"
              >
                <Twitter size={22} className="text-white" />
              </a>
              <a
                href="#linkedin"
                className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center hover-scale transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between flex-wrap gap-6 pt-8 mt-8 border-t border-white/20 animate-fade-in-up">
          <div className="text-white/80 font-lato font-medium text-[16px] max-md:text-[14px] max-md:w-full max-md:text-center">
            Copyright © 2025 Brain Telecommunication Ltd, All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 flex-wrap max-md:w-full max-md:justify-center">
            <a
              href="#privacy"
              className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary transition-colors max-md:text-[14px]"
            >
              Privacy & Policy
            </a>
            <a
              href="#terms"
              className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary transition-colors max-md:text-[14px]"
            >
              Terms & Conditions
            </a>
            <a
              href="#sitemap"
              className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary transition-colors max-md:text-[14px]"
            >
              Sitemap
            </a>
            <a
              href="#pr-csr"
              className="text-white/80 font-lato font-medium text-[16px] hover:text-secondary transition-colors max-md:text-[14px]"
            >
              PR & CSR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
