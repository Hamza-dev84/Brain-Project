import React, { useState, useEffect } from 'react';
import { Link } from '@/lib/router-compat';
import { Menu, X, ChevronDown, Code, Smartphone, Settings, Palette, Calendar, Building2, Mail, Briefcase, Gift, CreditCard, Megaphone, Banknote, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const services = [
    {
      name: "Web Development",
      description: "Full-stack web applications with modern technologies",
      // href: "/web-development-pakistan",
      href: "/services/software/web-development-pakistan",
      icon: Code
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile solutions",
      // href: "/mobile-app-developers-pakistan",
      href: "/services/software/mobile-app-developers-pakistan",
      icon: Smartphone
    },
    {
      name: "ERP Software",
      description: "Enterprise resource planning systems",
      // href: "/erp-software-pakistan",
      href: "/services/software/erp-software-pakistan",
      icon: Settings
    },
    {
      name: "Web Design Services",
      description: "Creative UI/UX and responsive designs",
      // href: "/web-design-services-pakistan",
      href: "/services/software/web-design-services-pakistan",
      icon: Palette
    },
    {
      name: "Digital Marketing Services",
      description: "Strategic digital marketing solutions",
      // href: "/digital-marketing-pakistan",
      href: "/services/software/digital-marketing-pakistan",
      icon: Megaphone
    },
    {
      name: "SEO Services Lahore",
      description: "Rank higher and grow organic traffic",
      // href: "/seo-services-lahore",
      href: "/services/software/seo-services-lahore",
      icon: Search
    }
  ];

  const companyLinks = [
    {
      name: "About Us",
      description: "Learn about our story and mission",
      // href: "https://brain.net.pk/about-us",
      href: "/company/about-us",
      icon: Building2
    },
    {
      name: "Contact Us",
      description: "Get in touch with our team",
      href: "/services/software/contact-us",
      icon: Mail
    },
    {
      name: "Careers",
      description: "Join our growing team",
      // href: "https://brain.net.pk/careers",
      href: "/careers",
      icon: Briefcase
    },
    {
      name: "Refer & Earn",
      description: "Earn rewards by referring clients",
      // href: "https://brain.net.pk/refer-and-win",
      href: "/refer-and-earn",
      icon: Gift
    },
    {
      name: "Payment Guides",
      description: "Secure payment methods and guides",
      href: "/resources/payment-guides",
      icon: CreditCard
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'top-0 bg-white/60 backdrop-blur-md shadow-lg'
        : 'top-10 md:top-12 bg-white shadow-sm'
        }`}
    >

      <div className="flex w-full items-center gap-[40px] justify-between px-[60px] py-4 max-md:px-5">
        <Link to="/services/software" className="hover:opacity-80 transition-opacity">
          <img loading="eager" decoding="async" fetchPriority="high"
            src="/img/builder/a111eebc491916b5.webp"
            alt="BrainSOFT Logo"
            className="aspect-[1.05] object-contain w-[79px] shrink-0"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[25px] nav-text">
          <div className="relative group">
            <button className="text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors animated-underline flex items-center gap-2 whitespace-nowrap">
              <span>Services</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            {/* Services Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[hsl(var(--neutral-border))]">
              <div className="py-2">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-[hsl(var(--neutral-light))] transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
                    >
                      <Icon className="w-5 h-5 text-[hsl(var(--brand-dark))] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-lato font-semibold text-base text-[hsl(var(--brand-dark))]">
                          {service.name}
                        </div>
                        <div className="font-lato text-sm text-[hsl(var(--neutral-medium))] mt-0.5">
                          {service.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors animated-underline flex items-center gap-2 whitespace-nowrap">
              <span>Company</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            {/* Company Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[hsl(var(--neutral-border))]">
              <div className="py-2">
                {companyLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isInternalLink = link.href.startsWith('/');
                  return isInternalLink ? (
                    <Link
                      key={index}
                      to={link.href}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-[hsl(var(--neutral-light))] transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
                    >
                      <Icon className="w-5 h-5 text-[hsl(var(--brand-dark))] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-lato font-semibold text-base text-[hsl(var(--brand-dark))]">
                          {link.name}
                        </div>
                        <div className="font-lato text-sm text-[hsl(var(--neutral-medium))] mt-0.5">
                          {link.description}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-[hsl(var(--neutral-light))] transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
                    >
                      <Icon className="w-5 h-5 text-[hsl(var(--brand-dark))] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-lato font-semibold text-base text-[hsl(var(--brand-dark))]">
                          {link.name}
                        </div>
                        <div className="font-lato text-sm text-[hsl(var(--neutral-medium))] mt-0.5">
                          {link.description}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <Link to="/services/software/support" className="text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors animated-underline">
            Support
          </Link>
          <Link to="/services/software/case-studies" className="text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors animated-underline">
            Case Studies
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 btn-text">
          <Link to="/services/software/contact-us" className="bg-[hsl(var(--brand-secondary))] text-[hsl(var(--brand-dark))] px-6 py-3 rounded-lg hover-scale hover:shadow-[var(--shadow-glow)] transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Free Consultation</span>
          </Link>
          <a href="https://pay.brain.net.pk" target="_blank" rel="noopener noreferrer" className="bg-[hsl(var(--brand-dark))] text-white px-6 py-3 rounded-lg hover-scale hover:shadow-xl transition-all flex items-center gap-2 border-2 border-[hsl(var(--brand-dark))]">
            <Banknote className="w-4 h-4" />
            <span>Pay Your Bill</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[hsl(var(--brand-dark))] p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-effect border-t border-border animate-slide-up">
          <nav className="flex flex-col gap-4 px-[60px] py-6 max-md:px-5">
            <div className="border-b border-[hsl(var(--neutral-border))] pb-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full nav-text text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors py-2"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 animate-slide-up">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                        className="flex items-center gap-2 py-2 text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-base">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="border-b border-[hsl(var(--neutral-border))] pb-2">
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className="flex items-center justify-between w-full nav-text text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors py-2"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCompanyOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCompanyOpen && (
                <div className="pl-4 mt-2 space-y-2 animate-slide-up">
                  {companyLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isInternalLink = link.href.startsWith('/');
                    return isInternalLink ? (
                      <Link
                        key={index}
                        to={link.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsCompanyOpen(false);
                        }}
                        className="flex items-center gap-2 py-2 text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-base">{link.name}</span>
                      </Link>
                    ) : (
                      <a
                        key={index}
                        href={link.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsCompanyOpen(false);
                        }}
                        className="flex items-center gap-2 py-2 text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-base">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <Link to="/services/software/support" onClick={() => setIsMobileMenuOpen(false)} className="nav-text text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors">
              Support
            </Link>
            <Link to="/services/software/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="nav-text text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors">
              Case Studies
            </Link>

            <div className="flex flex-col gap-3 mt-4">
              <Link to="/services/software/contact-us" className="bg-[hsl(var(--brand-secondary))] text-[hsl(var(--brand-dark))] btn-text px-6 py-3 rounded-lg flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Free Consultation</span>
              </Link>
              <a href="https://pay.brain.net.pk" target="_blank" rel="noopener noreferrer" className="bg-[hsl(var(--brand-dark))] text-white btn-text px-6 py-3 rounded-lg flex items-center justify-center gap-2 border-2 border-[hsl(var(--brand-dark))]">
                <Banknote className="w-4 h-4" />
                <span>Pay Your Bill</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>


    // <header
    //   className={`fixed top-10 md:top-12 left-0 right-0 z-50 transition-all duration-300 
    //     ${isScrolled
    //       ? 'glass-effect shadow-lg'
    //       : 'bg-white'
    //     }`
    //   }
    // >
    //   <div className="flex w-full items-center gap-[40px] justify-between px-[60px] py-4 max-md:px-5">
    //     <Link to="/services/software" className="hover:opacity-80 transition-opacity">
    //       <img loading="eager" decoding="async" fetchPriority="high"
    //         src="/img/builder/a111eebc491916b5.webp"
    //         alt="BrainSOFT Logo"
    //         className="aspect-[1.05] object-contain w-[79px] shrink-0"
    //       />
    //     </Link>

    //     {/* Desktop Navigation */}
    //     <nav className="hidden lg:flex items-center gap-[25px] nav-text">
    //       <div className="relative group">
    //         <button className="text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors animated-underline flex items-center gap-2 whitespace-nowrap">
    //           <span>Services</span>
    //           <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
    //         </button>

    //         {/* Services Dropdown Menu */}
    //         <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[hsl(var(--neutral-border))]">
    //           <div className="py-2">
    //             {services.map((service, index) => {
    //               const Icon = service.icon;
    //               return (
    //                 <Link
    //                   key={index}
    //                   to={service.href}
    //                   className="flex items-start gap-3 px-4 py-3 hover:bg-[hsl(var(--neutral-light))] transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
    //                 >
    //                   <Icon className="w-5 h-5 text-[hsl(var(--brand-dark))] mt-0.5 flex-shrink-0" />
    //                   <div>
    //                     <div className="font-lato font-semibold text-base text-[hsl(var(--brand-dark))]">
    //                       {service.name}
    //                     </div>
    //                     <div className="font-lato text-sm text-[hsl(var(--neutral-medium))] mt-0.5">
    //                       {service.description}
    //                     </div>
    //                   </div>
    //                 </Link>
    //               );
    //             })}
    //           </div>
    //         </div>
    //       </div>

    //       <div className="relative group">
    //         <button className="text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors animated-underline flex items-center gap-2 whitespace-nowrap">
    //           <span>Company</span>
    //           <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
    //         </button>

    //         {/* Company Dropdown Menu */}
    //         <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[hsl(var(--neutral-border))]">
    //           <div className="py-2">
    //             {companyLinks.map((link, index) => {
    //               const Icon = link.icon;
    //               const isInternalLink = link.href.startsWith('/');
    //               return isInternalLink ? (
    //                 <Link
    //                   key={index}
    //                   to={link.href}
    //                   className="flex items-start gap-3 px-4 py-3 hover:bg-[hsl(var(--neutral-light))] transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
    //                 >
    //                   <Icon className="w-5 h-5 text-[hsl(var(--brand-dark))] mt-0.5 flex-shrink-0" />
    //                   <div>
    //                     <div className="font-lato font-semibold text-base text-[hsl(var(--brand-dark))]">
    //                       {link.name}
    //                     </div>
    //                     <div className="font-lato text-sm text-[hsl(var(--neutral-medium))] mt-0.5">
    //                       {link.description}
    //                     </div>
    //                   </div>
    //                 </Link>
    //               ) : (
    //                 <a
    //                   key={index}
    //                   href={link.href}
    //                   className="flex items-start gap-3 px-4 py-3 hover:bg-[hsl(var(--neutral-light))] transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
    //                 >
    //                   <Icon className="w-5 h-5 text-[hsl(var(--brand-dark))] mt-0.5 flex-shrink-0" />
    //                   <div>
    //                     <div className="font-lato font-semibold text-base text-[hsl(var(--brand-dark))]">
    //                       {link.name}
    //                     </div>
    //                     <div className="font-lato text-sm text-[hsl(var(--neutral-medium))] mt-0.5">
    //                       {link.description}
    //                     </div>
    //                   </div>
    //                 </a>
    //               );
    //             })}
    //           </div>
    //         </div>
    //       </div>

    //       <Link to="/services/software/support" className="text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors animated-underline">
    //         Support
    //       </Link>
    //       <Link to="/services/software/case-studies" className="text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors animated-underline">
    //         Case Studies
    //       </Link>
    //     </nav>

    //     {/* Desktop CTA */}
    //     <div className="hidden lg:flex items-center gap-3 btn-text">
    //       <Link to="/services/software/contact-us" className="bg-[hsl(var(--brand-secondary))] text-[hsl(var(--brand-dark))] px-6 py-3 rounded-lg hover-scale hover:shadow-[var(--shadow-glow)] transition-all flex items-center gap-2">
    //         <Calendar className="w-4 h-4" />
    //         <span>Free Consultation</span>
    //       </Link>
    //       <a href="https://pay.brain.net.pk" target="_blank" rel="noopener noreferrer" className="bg-[hsl(var(--brand-dark))] text-white px-6 py-3 rounded-lg hover-scale hover:shadow-xl transition-all flex items-center gap-2 border-2 border-[hsl(var(--brand-dark))]">
    //         <Banknote className="w-4 h-4" />
    //         <span>Pay Your Bill</span>
    //       </a>
    //     </div>

    //     {/* Mobile Menu Button */}
    //     <button
    //       onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    //       className="lg:hidden text-[hsl(var(--brand-dark))] p-2"
    //       aria-label="Toggle mobile menu"
    //     >
    //       {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
    //     </button>
    //   </div>

    //   {/* Mobile Menu */}
    //   {isMobileMenuOpen && (
    //     <div className="lg:hidden glass-effect border-t border-border animate-slide-up">
    //       <nav className="flex flex-col gap-4 px-[60px] py-6 max-md:px-5">
    //         <div className="border-b border-[hsl(var(--neutral-border))] pb-2">
    //           <button
    //             onClick={() => setIsServicesOpen(!isServicesOpen)}
    //             className="flex items-center justify-between w-full nav-text text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors py-2"
    //           >
    //             <span>Services</span>
    //             <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
    //           </button>

    //           {isServicesOpen && (
    //             <div className="pl-4 mt-2 space-y-2 animate-slide-up">
    //               {services.map((service, index) => {
    //                 const Icon = service.icon;
    //                 return (
    //                   <Link
    //                     key={index}
    //                     to={service.href}
    //                     onClick={() => {
    //                       setIsMobileMenuOpen(false);
    //                       setIsServicesOpen(false);
    //                     }}
    //                     className="flex items-center gap-2 py-2 text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors"
    //                   >
    //                     <Icon className="w-4 h-4" />
    //                     <span className="text-base">{service.name}</span>
    //                   </Link>
    //                 );
    //               })}
    //             </div>
    //           )}
    //         </div>

    //         <div className="border-b border-[hsl(var(--neutral-border))] pb-2">
    //           <button
    //             onClick={() => setIsCompanyOpen(!isCompanyOpen)}
    //             className="flex items-center justify-between w-full nav-text text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors py-2"
    //           >
    //             <span>Company</span>
    //             <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCompanyOpen ? 'rotate-180' : ''}`} />
    //           </button>

    //           {isCompanyOpen && (
    //             <div className="pl-4 mt-2 space-y-2 animate-slide-up">
    //               {companyLinks.map((link, index) => {
    //                 const Icon = link.icon;
    //                 const isInternalLink = link.href.startsWith('/');
    //                 return isInternalLink ? (
    //                   <Link
    //                     key={index}
    //                     to={link.href}
    //                     onClick={() => {
    //                       setIsMobileMenuOpen(false);
    //                       setIsCompanyOpen(false);
    //                     }}
    //                     className="flex items-center gap-2 py-2 text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors"
    //                   >
    //                     <Icon className="w-4 h-4" />
    //                     <span className="text-base">{link.name}</span>
    //                   </Link>
    //                 ) : (
    //                   <a
    //                     key={index}
    //                     href={link.href}
    //                     onClick={() => {
    //                       setIsMobileMenuOpen(false);
    //                       setIsCompanyOpen(false);
    //                     }}
    //                     className="flex items-center gap-2 py-2 text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors"
    //                   >
    //                     <Icon className="w-4 h-4" />
    //                     <span className="text-base">{link.name}</span>
    //                   </a>
    //                 );
    //               })}
    //             </div>
    //           )}
    //         </div>

    //         <Link to="/services/software/support" onClick={() => setIsMobileMenuOpen(false)} className="nav-text text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors">
    //           Support
    //         </Link>
    //         <Link to="/services/software/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="nav-text text-[hsl(var(--brand-dark))] hover:text-[hsl(var(--brand-dark))] transition-colors">
    //           Case Studies
    //         </Link>

    //         <div className="flex flex-col gap-3 mt-4">
    //           <Link to="/services/software/contact-us" className="bg-[hsl(var(--brand-secondary))] text-[hsl(var(--brand-dark))] btn-text px-6 py-3 rounded-lg flex items-center justify-center gap-2">
    //             <Calendar className="w-4 h-4" />
    //             <span>Free Consultation</span>
    //           </Link>
    //           <a href="https://pay.brain.net.pk" target="_blank" rel="noopener noreferrer" className="bg-[hsl(var(--brand-dark))] text-white btn-text px-6 py-3 rounded-lg flex items-center justify-center gap-2 border-2 border-[hsl(var(--brand-dark))]">
    //             <Banknote className="w-4 h-4" />
    //             <span>Pay Your Bill</span>
    //           </a>
    //         </div>
    //       </nav>
    //     </div>
    //   )}
    // </header>
  );
};

export default Header;
