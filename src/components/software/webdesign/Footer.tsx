import React, { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="w-full mt-24 px-6 md:px-12 lg:px-16 py-16 bg-gradient-to-br from-brand-dark to-brand-dark/90">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img loading="lazy" decoding="async"
              src="/img/builder/45514559f9134e42.webp"
              alt="BrainSOFT Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="font-lato text-white/80 leading-relaxed">
              BrainSOFT is a division of BrainTEL Group, which is the pioneer of
              the Internet Service industry in Pakistan.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-raleway text-xl font-bold text-white mb-4">
              Company
            </h3>
            <nav className="space-y-2 font-lato text-white/80">
              <a 
                href="https://brain.net.pk/AboutUs"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-brand-secondary transition-colors cursor-pointer"
              >
                About Us
              </a>
              <a 
                href="/#services"
                className="block hover:text-brand-secondary transition-colors cursor-pointer"
              >
                Services
              </a>
              <a 
                href="/services/software/contact-us"
                className="block hover:text-brand-secondary transition-colors cursor-pointer"
              >
                Contact Us
              </a>
              <a 
                href="https://brain.net.pk/Careers"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-brand-secondary transition-colors cursor-pointer"
              >
                Careers
              </a>
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-raleway text-xl font-bold text-white mb-4">
              Services
            </h3>
            <nav className="space-y-2 font-lato text-white/80">
              <a 
                href="/services/software/erp-software-pakistan"
                className="block hover:text-brand-secondary transition-colors cursor-pointer"
              >
                ERP Software
              </a>
              <a 
                href="/services/software/mobile-app-developers-pakistan"
                className="block hover:text-brand-secondary transition-colors cursor-pointer"
              >
                Mobile App Development
              </a>
              <a 
                href="/services/software/web-development-pakistan"
                className="block hover:text-brand-secondary transition-colors cursor-pointer"
              >
                Web Development
              </a>
              <a 
                href="/services/software/web-design-services-pakistan"
                className="block hover:text-brand-secondary transition-colors cursor-pointer"
              >
                Web Design Services
              </a>
              <a 
                href="/services/software/digital-marketing-pakistan"
                className="block hover:text-brand-secondary transition-colors cursor-pointer"
              >
                Digital Marketing
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email here"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white p-3 rounded-lg transition-all hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-brand-secondary/20 hover:bg-brand-secondary flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 font-lato text-sm">
          <p>
            Copyright © 2025 Brain Telecommunication Ltd, All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="hover:text-brand-secondary transition-colors"
            >
              Privacy & Policy
            </a>
            <a
              href="#terms"
              className="hover:text-brand-secondary transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#sitemap"
              className="hover:text-brand-secondary transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
