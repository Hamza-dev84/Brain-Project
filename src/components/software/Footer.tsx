import React, { useState } from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Clock,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from '@tanstack/react-router';
import { ScrollReveal } from './animations/ScrollReveal';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/sonner';
import { newsletterSubscriptionApi } from '@/pages/services/footerFormApi';
import BrainSoft_White_Logo from "@/assets/software/icons/BrainSoft White logo.svg";

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


  return (
    <footer className="flex w-full flex-col items-stretch mt-[80px] px-[98px] py-[60px] max-md:px-5 bg-gradient-to-br from-brand-dark to-brand-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-md:gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link
              to="/services/software"
              className="hover:opacity-80 transition-opacity"
              aria-label="Brain Telecommunication Ltd. Home"
            >
              <img
                src={BrainSoft_White_Logo}
                alt="BrainSOFT White Logo"
                className="aspect-[5.75] object-contained w-full -ml-16"
              />
            </Link>
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
                href="/services/software/contact-us"
                className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
              >
                Careers
              </a>
              <a
                href='/docs/braintelprofile.pdf'
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
              >
                Company Profile
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
                href="/services/software/seo-services-lahore"
                className="text-white/90 font-lato text-body-small hover:text-brand-secondary transition-colors"
              >
                SEO Services
              </a>
            </nav>
          </div>

          {/* Newsletter Form */}
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
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/braintelpk"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.x.com/braintelpk"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://pk.linkedin.com/company/braintelpk"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Cards (replace inside footer grid where appropriate) */}
        <div
          className="
    grid grid-cols-1 sm:grid-cols-2 lg:flex 
    lg:flex-nowrap lg:items-stretch lg:gap-4
    gap-4 mb-4 text-white/90
  "
        >
          {/* Phone */}
          <div className="flex gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition lg:flex-shrink-0 lg:min-w-[260px]">
            <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-white" />
            <div className="space-y-1">
              <a href="tel:042111222888" className="block">
                <strong className="text-white">UAN:</strong>{" "}
                <span className="hover:underline">(042) 111 222 888</span>
              </a>
              <a href="tel:04232100000" className="block">
                <strong className="text-white">Phone:</strong>{" "}
                <span className="hover:underline">(042) 32100000</span>
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition lg:flex-shrink-0 lg:min-w-[240px]">
            <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-white" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@brain.net.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              support@brain.net.pk
            </a>
          </div>

          {/* Address */}
          <div className="flex gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition lg:flex-shrink-0 lg:min-w-[300px]">
            <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-white" />
            <a
              href="https://maps.app.goo.gl/rwFjoFNkDDi6Dv8a6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              730, Nizam Block Allama Iqbal Town, Lahore, 54570, Pakistan.
            </a>
          </div>

          {/* Working Hours */}
          <div className="flex gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition lg:flex-shrink-0 lg:min-w-[220px]">
            <Clock className="h-4 w-4 mt-1 flex-shrink-0 text-white" />
            <span>Mon–Sat, 9:00 AM – 5:30 PM</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/80 font-lato text-body-small text-center mt-2 pt-8 border-t border-white/20">
          <div>
            Copyright © 2026 Brain Telecommunication Ltd, All rights reserved.
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="/company/csr"
              className="hover:text-brand-secondary transition-colors"
            >
              PR & CSR
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
