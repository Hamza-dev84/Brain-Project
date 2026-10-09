import React, { useState, useEffect } from 'react';
import { Link } from '@/lib/router-compat';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/internet/animations/ScrollReveal';
import Terms_and_Conditions from "../../../public/docs/brainteltc.pdf"
import Company_Profile from "../../../public/docs/braintelprofile.pdf"

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const linkColumns = [
    {
      title: 'Services',
      links: [
        { label: 'Home Internet', href: '/services/internet/home-internet', type: 'route' },
        { label: 'Dedicated Internet', href: '/services/internet/business-internet', type: 'route' },
        { label: 'Voice Plans', href: '/services/internet/voice-plans', type: 'route' },
        { label: 'HDTV Bundles', href: '/services/internet/hdtv-bundles', type: 'route' },
      ],
    },
    {
      title: 'Corporate Telephony',
      links: [
        { label: 'VoIP Services', href: '/services/internet/voip-providers-pakistan', type: 'route' },
        { label: 'SIP Trunk', href: '/services/internet/sip-trunk-providers-pakistan', type: 'route' },
        { label: 'IVR Services', href: '/services/internet/ivr-services-pakistan', type: 'route' },
        { label: 'Virtual PBX', href: '/services/internet/virtual-pbx-pakistan', type: 'route' },
        { label: 'IP PBX', href: '/services/internet/ip-pbx-pakistan', type: 'route' },
        { label: 'PBX Price & Systems', href: '/services/internet/pbx-price-in-pakistan', type: 'route' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/company/about-us', type: 'route' },
        { label: 'Careers', href: '/careers' },
        { label: 'Coverage Areas', href: '/services/internet/coverage-area', type: 'route' },
        { label: 'Refer & Earn', href: '/refer-and-earn', type: 'route' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/services/internet/contact-us', type: 'route' },
        { label: 'Privacy Policy', href: '/privacy-policy', type: 'route' },
        // { label: 'Terms & Conditions', href: Terms_and_Conditions, target: "_blank", type: 'file' },
        // { label: 'Company Profile', href: Company_Profile, target: "_blank", type: 'file' },
        { label: 'Terms & Conditions', href: '/docs/brainteltc.pdf', target: '_blank', type: 'file' },
        { label: 'Company Profile', href: '/docs/braintelprofile.pdf', target: '_blank', type: 'file' },
      ],
    },
  ];

  // const socialLinks = [
  //   { icon: Facebook, label: 'Facebook', href: '#' },
  //   { icon: Twitter, label: 'Twitter', href: '#' },
  //   { icon: Instagram, label: 'Instagram', href: '#' },
  //   { icon: Linkedin, label: 'LinkedIn', href: '#' },
  // ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      target: "_blank",
      color: "hover:text-blue-400",
      link: "https://www.facebook.com/braintelpk",
    },
    {
      icon: Instagram,
      label: "Instagram",
      target: "_blank",
      color: "hover:text-pink-400",
      link: "https://www.instagram.com/braintelpk",
    },
    {
      icon: Twitter,
      label: "Twitter",
      target: "_blank",
      color: "hover:text-sky-400",
      link: "https://www.x.com/braintelpk",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      target: "_blank",
      color: "hover:text-blue-500",
      link: "https://pk.linkedin.com/company/braintelpk",
    },
  ];

  return (
    <footer className="relative bn-home overflow-hidden border-t border-[hsl(var(--bn-line)/0.5)]">
      {/* Background effects */}
      <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(var(--bn-violet)/0.2)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--bn-violet))] to-transparent" />

      <div className="relative max-w-screen-xl mx-auto px-5 pt-20 pb-10">
        <ScrollReveal>
          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            {/* Brand */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Link to="/services/internet" className="relative inline-block w-fit group">
                <div className="absolute inset-0 bg-[hsl(var(--bn-violet)/0.3)] blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                <img loading="lazy" decoding="async"
                  src="/img/builder/69304c2be3ec8f25.webp"
                  alt="BrainNET Logo"
                  className="relative w-48 h-auto"
                />
              </Link>
              <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm leading-relaxed max-w-sm">
                Pakistan's leading fiber internet provider — engineered for speed, built for uptime, trusted by hundreds of businesses and homes since 1996.
              </p>

              <ul className="flex flex-col gap-3 font-dm text-sm text-[hsl(var(--bn-ink-soft))]">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[hsl(var(--bn-violet-soft))] flex-shrink-0" />
                  <a href="tel:042111222888" className="hover:text-[hsl(var(--bn-ink))] transition-colors">(042) 111 222 888</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[hsl(var(--bn-violet-soft))] flex-shrink-0" />
                  <a href="mailto:info@brain.net.pk" className="hover:text-[hsl(var(--bn-ink))] transition-colors">info@brain.net.pk</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[hsl(var(--bn-violet-soft))] flex-shrink-0 mt-0.5" />
                  <span>Lahore, Pakistan</span>
                </li>
              </ul>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {linkColumns.map((col) => (
                <div key={col.title} className="flex flex-col gap-4">
                  <h3 className="bn-eyebrow">{col.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {link.type === 'file' ? (
                          <a
                            href={link.href}
                            target={link.target}
                            rel="noopener noreferrer"
                            className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] hover:text-[hsl(var(--bn-ink))] transition-colors group inline-flex items-center"
                          >
                            <span className="relative">
                              {link.label}
                              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[hsl(var(--bn-violet-soft))] group-hover:w-full transition-all duration-300" />
                            </span>
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] hover:text-[hsl(var(--bn-ink))] transition-colors group inline-flex items-center"
                          >
                            <span className="relative">
                              {link.label}
                              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[hsl(var(--bn-violet-soft))] group-hover:w-full transition-all duration-300" />
                            </span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[hsl(var(--bn-line)/0.5)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-dm text-[hsl(var(--bn-ink-soft))] text-xs md:text-sm text-center md:text-left">
            © 2026 BrainNET Fiber. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target={social.target}
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[hsl(var(--bn-violet)/0.1)] border border-[hsl(var(--bn-line)/0.6)] hover:bg-[hsl(var(--bn-violet)/0.25)] hover:border-[hsl(var(--bn-violet)/0.6)] flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4 text-[hsl(var(--bn-ink))]" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Back to top */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-accent text-white p-3 md:p-4 rounded-full shadow-[0_15px_40px_-10px_hsl(var(--bn-red)/0.7)] touch-target"
          aria-label="Scroll back to top of page"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
