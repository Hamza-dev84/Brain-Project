
import React, { useState, useEffect } from 'react';
import { Link } from '@/lib/router-compat';
import { ChevronDown, Phone, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  React.useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileOpen]);

  const homeMenu = [
    { label: 'Home Internet', href: '/services/internet/home-internet' },
    { label: 'Voice Plans', href: '/services/internet/voice-plans' },
    { label: 'HDTV Bundles', href: '/services/internet/hdtv-bundles' },
  ];

  const businessGroups = [
    {
      title: 'Corporate Telephony',
      items: [
        { label: 'SIP Trunk', href: '/services/internet/sip-trunk-providers-pakistan' },
        { label: 'IVR Services', href: '/services/internet/ivr-services-pakistan' },
        { label: 'VoIP', href: '/services/internet/voip-providers-pakistan' },
        { label: 'Virtual PBX', href: '/services/internet/virtual-pbx-pakistan' },
        { label: 'IP PBX', href: '/services/internet/ip-pbx-pakistan' },
        { label: 'PBX Price & Systems', href: '/services/internet/pbx-price-in-pakistan' },
      ],
    },
    {
      title: 'Dedicated Internet',
      items: [{ label: 'Dedicated Internet', href: '/services/internet/business-internet' }],
    },
  ];

  const resourcesMenu = [
    { label: 'About Us', href: '/company/about-us' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/services/internet/contact-us' },
    { label: 'Refer & Earn', href: '/refer-and-earn' },
  ];

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      <header
        className={`w-full sticky top-0 z-[1000] transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
          } ${isScrolled
            ? 'bg-[hsl(var(--bn-bg-deep)/0.85)] backdrop-blur-xl border-b border-[hsl(var(--bn-line)/0.5)] shadow-[0_8px_40px_-10px_hsl(var(--bn-bg-deep)/0.8)]'
            : 'bg-[hsl(var(--bn-bg-deep)/0.6)] backdrop-blur-md border-b border-transparent'
          }`}
      >
        {/* Subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--bn-violet)/0.6)] to-transparent" />

        <div className="max-w-screen-xl mx-auto px-5">
          {/* Top utility bar */}
          <div className="flex justify-between items-center py-2 border-b border-[hsl(var(--bn-line)/0.4)] font-dm text-[12px]">
            <a href="tel:042111222888" className="flex items-center gap-2 text-[hsl(var(--bn-ink-soft))] hover:text-[hsl(var(--bn-ink))] transition-colors">
              <Phone className="w-3 h-3 text-[hsl(var(--bn-violet-soft))]" />
              <span>(042) 111 222 888</span>
            </a>
            <button className="flex items-center gap-2 text-[hsl(var(--bn-ink-soft))] hover:text-accent transition-colors">
              <User className="w-3.5 h-3.5" />
              <span>My Brain</span>
            </button>
          </div>

          {/* Main nav */}
          <div className="relative flex justify-between items-center py-3 max-md:py-2">
            <Link to="/services/internet" preload="intent" className="relative group">
              <div className="absolute inset-0 bg-[hsl(var(--bn-violet)/0.3)] blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img loading="eager" decoding="async" fetchPriority="high"
                src="/img/builder/0b017720db24d714.webp"
                alt="BrainNET Logo"
                className="relative w-[120px] h-[60px] max-md:w-[90px] max-md:h-[45px] object-contain"
              />
            </Link>

            <nav className="flex gap-1 items-center max-lg:gap-0 max-md:hidden font-display">
              {[{ key: 'home', label: 'Home', items: homeMenu }].map((group) => (
                <div
                  key={group.key}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(group.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-[hsl(var(--bn-ink))] text-sm font-medium rounded-full hover:bg-[hsl(var(--bn-violet)/0.15)] transition-colors whitespace-nowrap">
                    <span>{group.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === group.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === group.key && (
                    <div className="absolute top-full left-0 pt-2 w-60 z-50 animate-scale-in">
                      <div className="bn-tile p-2 backdrop-blur-xl">
                        {group.items.map((item, index) => (
                          <Link
                            key={index}
                            to={item.href}
                            preload="intent"
                            className="block px-3 py-2.5 text-[hsl(var(--bn-ink))] text-sm rounded-lg hover:bg-[hsl(var(--bn-violet)/0.2)] hover:text-white transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Business mega flyout */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('business')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-[hsl(var(--bn-ink))] text-sm font-medium rounded-full hover:bg-[hsl(var(--bn-violet)/0.15)] transition-colors whitespace-nowrap">
                  <span>Business</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'business' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'business' && (
                  <div className="absolute top-full left-0 pt-2 w-[520px] z-50 animate-scale-in">
                    <div className="bn-tile p-5 backdrop-blur-xl grid grid-cols-2 gap-6">
                      {businessGroups.map((col) => (
                        <div key={col.title} className="flex flex-col gap-1">
                          <span className="bn-eyebrow mb-2">{col.title}</span>
                          {col.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              preload="intent"
                              className="block px-3 py-2 text-[hsl(var(--bn-ink))] text-sm rounded-lg hover:bg-[hsl(var(--bn-violet)/0.2)] hover:text-white transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/services/internet/contact-us" preload="intent" className="px-4 py-2 text-[hsl(var(--bn-ink))] text-sm font-medium rounded-full hover:bg-[hsl(var(--bn-violet)/0.15)] transition-colors whitespace-nowrap">
                Support
              </Link>
              <Link to="/services/internet/coverage-area" preload="intent" className="px-4 py-2 text-[hsl(var(--bn-ink))] text-sm font-medium rounded-full hover:bg-[hsl(var(--bn-violet)/0.15)] transition-colors whitespace-nowrap">
                Coverage Areas
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('resources')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-[hsl(var(--bn-ink))] text-sm font-medium rounded-full hover:bg-[hsl(var(--bn-violet)/0.15)] transition-colors whitespace-nowrap">
                  <span>Company</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'resources' && (
                  <div className="absolute top-full left-0 pt-2 w-60 z-50 animate-scale-in">
                    <div className="bn-tile p-2 backdrop-blur-xl">
                      {resourcesMenu.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          preload="intent"
                          className="block px-3 py-2.5 text-[hsl(var(--bn-ink))] text-sm rounded-lg hover:bg-[hsl(var(--bn-violet)/0.2)] hover:text-white transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="ml-3 bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_10px_30px_-8px_hsl(var(--bn-red)/0.6)] hover:shadow-[0_15px_40px_-8px_hsl(var(--bn-red)/0.8)] transition-all hover:translate-y-[-1px] whitespace-nowrap max-lg:px-4">
                Pay Your Bill
              </button>
            </nav>

            <button
              className="md:hidden text-[hsl(var(--bn-ink))] p-2 rounded-lg hover:bg-[hsl(var(--bn-violet)/0.15)] transition-colors"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((v) => !v)}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {isMobileOpen && (
              <div
                className="fixed inset-0 bg-[hsl(var(--bn-bg-deep)/0.8)] backdrop-blur-sm z-[999] md:hidden"
                onClick={() => setIsMobileOpen(false)}
                aria-hidden="true"
              />
            )}

            {isMobileOpen && (
              <div className="md:hidden fixed left-0 right-0 top-full bg-[hsl(var(--bn-bg-deep)/0.95)] backdrop-blur-xl border-t border-[hsl(var(--bn-line)/0.5)] shadow-2xl z-[1000] animate-slide-in-right max-h-[calc(100vh-120px)] overflow-y-auto">
                <nav className="flex flex-col gap-1 p-4 font-display">
                  <div className="bn-eyebrow px-3 pt-2">Home</div>
                  {homeMenu.map((item, idx) => (
                    <Link key={`m-h-${idx}`} to={item.href} onClick={() => setIsMobileOpen(false)} className="touch-target px-3 py-3 rounded-lg text-[hsl(var(--bn-ink))] text-sm hover:bg-[hsl(var(--bn-violet)/0.2)] transition-colors">
                      {item.label}
                    </Link>
                  ))}

                  {businessGroups.map((col) => (
                    <div key={col.title} className="flex flex-col">
                      <div className="bn-eyebrow px-3 pt-3 pb-1">{col.title}</div>
                      {col.items.map((item) => (
                        <Link key={item.href} to={item.href} onClick={() => setIsMobileOpen(false)} className="touch-target px-3 py-3 rounded-lg text-[hsl(var(--bn-ink))] text-sm hover:bg-[hsl(var(--bn-violet)/0.2)] transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}

                  <div className="border-t border-[hsl(var(--bn-line)/0.5)] my-2" />

                  <Link to="/services/internet/contact-us" onClick={() => setIsMobileOpen(false)} className="touch-target px-3 py-3 rounded-lg text-[hsl(var(--bn-ink))] text-sm hover:bg-[hsl(var(--bn-violet)/0.2)] transition-colors">
                    Support
                  </Link>
                  <Link to="/services/internet/coverage-area" onClick={() => setIsMobileOpen(false)} className="touch-target px-3 py-3 rounded-lg text-[hsl(var(--bn-ink))] text-sm hover:bg-[hsl(var(--bn-violet)/0.2)] transition-colors">
                    Coverage Areas
                  </Link>

                  <div className="bn-eyebrow px-3 pt-3">Company</div>
                  {resourcesMenu.map((item, idx) => (
                    <Link key={`m-r-${idx}`} to={item.href} onClick={() => setIsMobileOpen(false)} className="touch-target px-3 py-3 rounded-lg text-[hsl(var(--bn-ink))] text-sm hover:bg-[hsl(var(--bn-violet)/0.2)] transition-colors">
                      {item.label}
                    </Link>
                  ))}

                  <button onClick={() => setIsMobileOpen(false)} className="mt-4 bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-[0_10px_30px_-8px_hsl(var(--bn-red)/0.6)] transition-all touch-target">
                    Pay Your Bill
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;