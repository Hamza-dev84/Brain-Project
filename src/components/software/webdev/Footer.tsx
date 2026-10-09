import React, { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Newsletter subscription:", email);
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  const companyLinks = [
    { name: "About Us", href: "https://brain.net.pk/AboutUs", external: true },
    { name: "Services", href: "/#services", external: false },
    { name: "Contact Us", href: "/contact-us", external: false },
    { name: "Careers", href: "https://brain.net.pk/Careers", external: true },
  ];

  const serviceLinks = [
    { name: "ERP Software", href: "/erp-software-pakistan" },
    { name: "Mobile App Development", href: "/mobile-app-developers-pakistan" },
    { name: "Web Development", href: "/web-development-pakistan" },
    { name: "Web Design Services", href: "/web-design-services-pakistan" },
    { name: "Digital Marketing", href: "/digital-marketing-pakistan" },
  ];

  const footerLinks = [
    { name: "Privacy & Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Sitemap", href: "#" },
    { name: "PR & CSR", href: "#" },
  ];

  const socialIcons = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#17164F] via-[#1a1856] to-[#17164F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img loading="lazy" decoding="async"
              src="/img/builder/45514559f9134e42.webp"
              alt="BrainSOFT Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="font-lato font-medium text-sm text-white/80 leading-relaxed">
              BrainSOFT is a division of BrainTEL Group, which is the pioneer of
              the Internet Service industry in Pakistan.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-raleway font-bold text-xl mb-4">Company</h4>
            <nav className="space-y-3">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="block font-lato font-medium text-sm text-white/80 hover:text-[#F9B050] transition-all hover:translate-x-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-raleway font-bold text-xl mb-4">Services</h4>
            <nav className="space-y-3">
              {serviceLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block font-lato font-medium text-sm text-white/80 hover:text-[#F9B050] transition-all hover:translate-x-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-raleway font-bold text-xl mb-4">
              Stay Updated
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F9B050] focus:border-transparent transition-all font-lato text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#C60F15] text-white rounded-lg hover:bg-[#b01419] transition-all hover:scale-105 active:scale-95"
                  aria-label="Subscribe"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {socialIcons.map((social, index) => {
                const { Icon } = social;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-[#F9B050] transition-all hover:scale-110 hover:-translate-y-1 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-lato font-medium text-sm text-white/70 text-center md:text-left">
            Copyright © 2025 Brain Telecommunication Ltd, All rights reserved.
          </p>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-lato font-medium text-sm text-white/70 hover:text-[#F9B050] transition-colors underline"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
