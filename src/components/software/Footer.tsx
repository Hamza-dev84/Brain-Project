import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, X, Send } from 'lucide-react';
import { ScrollReveal } from './animations/ScrollReveal';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/sonner';
import { newsletterSubscriptionApi } from '@/pages/services/footerFormApi';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowErrorMessage] = useState(false);


  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValidEmail = (value: string) => {
      if (!value.trim()) return "Email is required";

      if (/\s/.test(value)) {
        return "Email must not contain spaces";
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Please enter a valid email address";
      }

      return "";
    };
    try {
      const apiResponse = await newsletterSubscriptionApi({ email });
      if (apiResponse.success) {
        toast.success(
          "Request submitted successfully! We will contact you soon.",
        );
        setError("");
        console.log("Newsletter signup:", email);
        setEmail("");
      } else {
        // setError("Something went wrong. Please try again.");
        toast.error("Failed to submit request. Please try again.");
      }
    } catch (error) {
      // setError("Somthing went wrong");
      toast.error("Failed to submit request. Please try again.");
      console.error("Error in catch block of newsletterSubscriptionApi:", error);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', gradient: 'var(--gradient-blue-cyan)' },
    { icon: Twitter, href: '#', gradient: 'var(--gradient-purple-pink)' },
    { icon: Linkedin, href: '#', gradient: 'var(--gradient-orange-red)' },
    { icon: Instagram, href: '#', gradient: 'var(--gradient-indigo-purple)' },
  ];

  return (
    <footer className="flex w-full flex-col items-stretch mt-[80px] px-[98px] py-[60px] max-md:px-5 bg-gradient-to-br from-brand-dark to-brand-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-md:gap-8">
        {/* Company Info */}
        <div className="space-y-6">
          <img loading="lazy" decoding="async"
            src="/img/builder/259128017e1a842f.webp"
            alt="BrainSOFT Logo"
            className="aspect-[5.75] object-contain w-[264px] max-w-full"
          />
          <p className="text-white/90 font-lato text-body-small leading-relaxed">
            BrainSOFT is a software and IT solutions company in Pakistan
            helping businesses build better
            <a
              href="/services/software/web-development-pakistan"
              className="
    text-[#fab152]
    hover:text-[#c88e42]
    active:text-[#966a31]
    transition-colors
  "
            >
              {" "} websites, {" "}
            </a>
            <a
              href="/services/software/erp-software-pakistan"
              className="
    text-[#fab152]
    hover:text-[#c88e42]
    active:text-[#966a31]
    transition-colors
  "
            >
              {" "} digital systems, {" "}
            </a>
            and
            growth-focused online platforms.
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h4 className="text-white font-raleway font-bold">Company</h4>
          <nav className="flex flex-col space-y-3">
            <a
              href="/company/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
            >
              About Us
            </a>
            <a
              href="/services"
              className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
            >
              Services
            </a>
            <a
              href="/services/software/contact-us"
              className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/Careers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
            >
              Careers
            </a>
          </nav>
        </div>

        {/* Services Links */}
        <div className="space-y-4">
          <h4 className="text-white font-raleway font-bold">Services</h4>
          <nav className="flex flex-col space-y-3">
            <a
              href="/services/software/erp-software-pakistan"
              className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
            >
              ERP Software
            </a>
            <a
              href="/services/software/mobile-app-developers-pakistan"
              className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
            >
              Mobile App Development
            </a>
            <a
              href="/services/software/web-development-pakistan"
              className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
            >
              Web Development
            </a>
            <a
              href="/services/software/web-design-services-pakistan"
              className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
            >
              Web Design Services
            </a>
            <a
              href="/services/software/digital-marketing-pakistan"
              className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
            >
              Digital Marketing
            </a>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="text-white font-raleway font-bold">Newsletter</h4>
          <form onSubmit={handleNewsletterSubmit} className="space-y-4">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-secondary font-lato text-body-small"
                required
              />
              <button
                type="submit"
                className="bg-brand-secondary text-brand-dark p-3 rounded-lg hover:scale-110 hover:shadow-lg transition-all duration-300"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/braintelpk"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.x.com/braintelpk"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:scale-110 transition-all duration-300"
              aria-label="Twitter"
            >
              <X className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://pk.linkedin.com/company/braintelpk"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.instagram.com/braintelpk"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/80 font-lato text-body-small text-center mt-12 pt-8 border-t border-white/20">
        <div>
          Copyright © 2025 Brain Telecommunication Ltd, All rights reserved.
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="/privacy-policy"
            className="hover:text-brand-secondary transition-colors"
          >
            Privacy & Policy
          </a>
          <a
            href="/docs/brainteltc.pdf"
            target='_blank'
            className="hover:text-brand-secondary transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="hover:text-brand-secondary transition-colors"
          >
            Sitemap
          </a>
          <a
            href="/company/csr"
            className="hover:text-brand-secondary transition-colors"
          >
            PR & CSR
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
