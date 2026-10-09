import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Wifi, Shield, Globe, Sparkles, Star, Phone, Quote, CheckCircle, Users, Award, Clock, ThumbsUp, Headphones, MessageSquare, Cloud, Code2, Lightbulb, Target, TrendingUp, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import { FloatingIcons } from '@/components/ui/floating-icons';
import { Ticker } from '@/components/ui/ticker';
import { ContactForm } from '@/components/ui/contact-form';
import { TrustedClients } from '@/components/home/TrustedClients';
import { useTheme } from '@/components/providers/theme-provider';
import { TextReveal } from '@/components/ui/text-reveal';
import { ImageHover } from '@/components/ui/image-hover';
import brainIconBlue from "@/assets/logos/brain-icon-blue.webp";
import brainIconWhite from "@/assets/logos/brain-icon-white.webp";
import brainOnlyWhite from "@/assets/logos/brain-only-white.png";
import pakistanMapNetwork from "@/assets/pakistan-map-network-new.webp";

// Media logos imports
import fSecureLogo from "@/assets/about/f-secure-logo.webp";
import nortonLogo from "@/assets/about/norton-logo.png";
import ibmLogo from "@/assets/about/ibm-logo.webp";
import trtWorldLogo from "@/assets/about/trt-world-logo.png";
import mediumLogo from "@/assets/about/medium-logo.png";
import timeLogo from "@/assets/about/time-logo.png";
import kasperskyLogo from "@/assets/about/kaspersky-logo.png";
import bbcNewsLogo from "@/assets/about/bbc-news-logo.png";
import PageMeta from "@/components/common/PageMeta";
import OrganizationSchema from "@/pages/schemaFiles/brainTel-schema-files/OrganizationSchema";
import SEOSchema from "@/pages/schemaFiles/brainTel-schema-files/SEOSchema";


// Memoized animation variants for performance
const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 1, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }
} as const;

// Services data with logos
const SERVICES = [{
  id: 'internet',
  title: 'Internet Services',
  subtitle: 'BrainNET Fiber',
  icon: Wifi,
  logo: '/src/assets/logos/brainnet-fiber.svg',
  description: 'Ultra-fast fiber optic internet up to 1Gbps with 99.9% uptime guarantee and 24/7 technical support.',
  buttonText: 'Explore Plans',
  buttonVariant: 'default' as const
}, {
  id: 'sms',
  title: 'SMS Services',
  subtitle: 'BSMS',
  icon: MessageSquare,
  logo: '/src/assets/logos/bsms.svg',
  // description: 'Bulk SMS solutions with API integration, delivery reports, and competitive rates for marketing campaigns.',
  description: (
    <>
      <a
        href="/services/sms"
        className="
     text-[#2563EB]
    hover:text-[#1D4ED8]
    active:text-[#1E3A8A]

    dark:text-[#60A5FA]
    dark:hover:text-[#93C5FD]
    dark:active:text-[#BFDBFE]

    transition-colors
  "
      >
        Bulk SMS solutions with API integration,
      </a>{" "}
      delivery reports, and competitive rates for marketing campaigns.
    </>
  ),
  buttonText: 'Get Started',
  buttonVariant: 'outlined' as const
}, {
  id: 'cloud',
  title: 'Cloud Services',
  subtitle: 'BrainCLOUD Plus',
  icon: Cloud,
  logo: '/src/assets/logos/braincloud-plus.svg',
  // description: 'Scalable Tier III Compliant Cloud Infrastructure with automated backups, disaster recovery, and enterprise-grade security.',
  description: (
    <>
      <a
        href="/services/cloud"
        className="
    text-[#2563EB]
    hover:text-[#1D4ED8]
    active:text-[#1E3A8A]

    dark:text-[#60A5FA]
    dark:hover:text-[#93C5FD]
    dark:active:text-[#BFDBFE]

    transition-colors
  "
      >
        Scalable Tier III Compliant Cloud Infrastructure
      </a>{" "}
      with automated backups, disaster recovery, and enterprise-grade
      security.",
    </>
  ),
  buttonText: 'View Solutions',
  buttonVariant: 'default' as const
}, {
  id: 'telephone',
  title: 'Telephone Services',
  subtitle: 'BrainTELEPHONY',
  icon: Phone,
  logo: '/src/assets/logos/braintel.svg',
  // description: 'VoIP and traditional telephone systems with call forwarding, conferencing, and unified communications.',
  description: (
    <>
      <a
        href="/services/internet/telephony"
        className="
     text-[#2563EB]
    hover:text-[#1D4ED8]
    active:text-[#1E3A8A]

    dark:text-[#60A5FA]
    dark:hover:text-[#93C5FD]
    dark:active:text-[#BFDBFE]

    transition-colors
  "
      >
        VoIP and modern telephone systems
      </a>{" "}
      with multiple call features including call recording and more!,
    </>
  ),
  buttonText: 'Learn More',
  buttonVariant: 'outlined' as const
}, {
  id: 'software',
  title: 'Software Services',
  subtitle: 'BrainSOFT',
  icon: Code2,
  logo: '/src/assets/logos/brainsoft.svg',
  // description: 'Custom software development, web/mobile apps, ERP implementation, Enterprise integration solutions, cybersecurity services, and more!',
  description: (
    <>
      <a
        href="/services/software"
        className="
     text-[#2563EB]
    hover:text-[#1D4ED8]
    active:text-[#1E3A8A]

    dark:text-[#60A5FA]
    dark:hover:text-[#93C5FD]
    dark:active:text-[#BFDBFE]

    transition-colors
  "
      >
        Custom software development,
      </a>{" "}
      web/mobile apps, ERP implementation, Enterprise integration solutions,
      cybersecurity services, and more!,
    </>
  ),
  buttonText: 'Start Project',
  buttonVariant: 'default' as const
}] as const;

// Hero badges with custom icons
const HERO_BADGES = [{
  text: '40+ Value-Added Services',
  icon: Star,
  color: 'text-yellow-500'
}, {
  text: '4.0 ★ Rating on Google',
  icon: Award,
  color: 'text-orange-500'
}, {
  text: '10,000+ B2B Customers',
  icon: Users,
  color: 'text-blue-500'
}, {
  text: '40+ Years',
  icon: Clock,
  color: 'text-green-500'
}, {
  text: 'True 24/7 Support',
  icon: Headphones,
  color: 'text-purple-500'
}] as const;

// Why Choose Us data
const WHY_CHOOSE_US_DATA = [{
  title: 'Experience You Can Trust',
  description: 'With 40+ Years Of Service, We\'ve Earned Trust By Delivering Reliable IT And Telecom Solutions Across Pakistan In The B2B And B2C Sector.',
  icon: ThumbsUp,
  bgColor: 'bg-white dark:bg-background',
  textColor: 'text-foreground',
  titleColor: "text-m3-on-surface",
}, {
  title: 'We\'ve Got You Covered!',
  description: 'From Internet Services To AI-Agentic Automation, We Are A One-Stop Shop Of All Modern IT Solutions In Pakistan Designed To Help Businesses Thrive In The Digital Era.',
  icon: Target,
  bgColor: 'bg-[#17164f]',
  textColor: 'text-white',
  titleColor: "heading-solid-white",
},
// {
//   title: 'Local Expertise',
//   description: 'We Operate & Maintain Our Own Locally Hosted Tier III Compliant Data Centers, Which Gives Greater Speed, Control, And Security.',
//   icon: Lightbulb,
//   bgColor: 'bg-[#17164f]',
//   textColor: 'text-white',
//   titleColor: "heading-solid-white",
// }, 
{
  title: "Local Expertise",
  description: (
    <>
      We Operate & Maintain Our Own
      <a
        href="/services/cloud/data-center-solutions-pakistan"
        className="
    text-[#60A5FA]
    hover:text-[#93C5FD]
    active:text-[#BFDBFE]

    transition-colors"
      >
        {" "}
        Locally Hosted Tier III Compliant Data Centers,
      </a>{" "}
      Which Gives Greater Speed, Control, And Security.
    </>
  ),
  icon: Lightbulb,
  bgColor: "bg-[#17164f]",
  titleColor: "heading-solid-white",
  textColor: "text-white",
},
{
  title: 'Expanding Horizons',
  description: 'From Dial-Up Internet To Pioneering In Multiple Tech Landscapes, BrainNET Has Now Been Transformed Into BrainTEL Group With 5 Subsidiaries.',
  icon: TrendingUp,
  bgColor: 'bg-white dark:bg-background',
  textColor: 'text-foreground'
}] as const;
const Index = memo(() => {
  const { theme } = useTheme();
  const resolvedTheme = theme === 'system'
    ? (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;
  return (
    <>
      <PageMeta
        title="BrainTEL Pakistan | IT & Telecom Services for Businesses"
        description="BrainTEL provides business internet, cloud infrastructure, SMS, VoIP, managed IT support, and software services in Pakistan. Trusted by 10,000+ businesses with 24/7 support and 99.9% uptime."
      // ogImage="/favicons/default.png"
      />
      {/* Skip to Content Link for Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <OrganizationSchema />
      <SEOSchema />

      <main id="main-content" className="min-h-screen">
        {/* Ticker */}
        <Ticker />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-neutral-100 py-16 sm:py-24 lg:py-32" style={{
          background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--brand-navy) / 0.05) 50%, hsl(var(--brand-blue) / 0.1) 100%)'
        }}>
          {/* Floating Icons Animation */}
          <FloatingIcons />

          {/* Optimized Background Pattern with GPU acceleration */}
          <div className="absolute inset-0 opacity-10 will-change-transform">
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{
              animationDelay: '0.2s'
            }}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-tertiary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{
              animationDelay: '0.4s'
            }}></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            {/* Two-column grid layout for desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

              {/* Left Column - Content */}
              <motion.div className="text-center lg:text-left" initial="initial" animate="animate" variants={ANIMATION_VARIANTS.staggerContainer}>
                <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />
                  <span className="inline-block bg-neutral-100 text-foreground px-4 py-2 rounded-full text-sm font-medium">We're Back — Smarter. Faster. Better.</span>
                </motion.div>

                <h1 className="heading-display text-foreground mb-6 font-heading leading-tight">
                  <TextReveal type="words" immediate={true}>
                    Transforming Enterprises with World-Class IT Services in Pakistan
                  </TextReveal>
                </h1>

                <motion.p variants={ANIMATION_VARIANTS.fadeInUp} className="text-xl md:text-2xl text-neutral-medium mb-4 font-heading flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2">
                  <span>Where Winners Always Use Their</span>
                  <img loading="lazy" decoding="async" src={resolvedTheme === 'dark' ? brainOnlyWhite : brainIconBlue} alt="Brain Company Logo" className="h-10 md:h-14" />
                </motion.p>

                {/* Hero Badges */}
                <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
                  {HERO_BADGES.map((badge, index) => {
                    const IconComponent = badge.icon;
                    return <motion.span
                      key={index}
                      initial={{ opacity: 1, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className="inline-flex items-center gap-2 bg-card text-foreground px-3 py-2 rounded-full text-xs sm:text-sm font-medium border border-border hover:shadow-md transition-all duration-300"
                    >
                      <IconComponent className={`w-4 h-4 ${badge.color}`} />
                      {badge.text}
                    </motion.span>;
                  })}
                </motion.div>

                <motion.div
                  initial={{ opacity: 1, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                >
                  <Button asChild magnetic size="lg" className="min-w-[200px] bg-primary text-primary-foreground hover:bg-brand-primary shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => document.getElementById('contact-form')?.scrollIntoView({
                    behavior: 'smooth'
                  })}>
                    <a href="#contact-form" className="inline-flex items-center">
                      <Quote className="mr-2 h-5 w-5" aria-hidden="true" />
                      Request a Quote
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild magnetic variant="outlined" size="lg" className="min-w-[180px] border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => document.getElementById('services-section')?.scrollIntoView({
                    behavior: 'smooth'
                  })}>
                    <a href="#services-section" className="inline-flex items-center">
                      Explore Services
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Pakistan Map Visual */}
              <motion.div
                className="relative hidden lg:flex items-center justify-center"
                initial={{ opacity: 1, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Multi-layered glow backgrounds */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-brand-secondary/20 to-brand-tertiary/30 blur-[100px] rounded-full scale-125 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-brand-tertiary/20 via-transparent to-primary/20 blur-[80px] rounded-full scale-110"></div>

                {/* Map container with enhanced animations and 3D effect */}
                <motion.div
                  className="relative z-10 w-full max-w-lg perspective-1000"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Gradient border wrapper */}
                  <ImageHover type="tilt" tiltIntensity={10}>
                    <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary via-brand-secondary to-brand-tertiary">
                      <div className="bg-card rounded-3xl p-6">
                        {/* Pakistan map with enhanced styling */}
                        <img
                          loading="eager"
                          decoding="async"
                          fetchPriority="high"
                          width={532}
                          height={550}
                          src={pakistanMapNetwork}
                          alt="Pakistan Map Showing Nationwide Connectivity for IT Services in Pakistan"
                          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(79,70,229,0.4)] filter brightness-110 contrast-105"
                        />
                      </div>
                    </div>
                  </ImageHover>

                  {/* Pulsing connection nodes overlay */}
                  <motion.div
                    className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute top-1/3 right-1/4 w-3 h-3 bg-brand-secondary rounded-full shadow-lg shadow-brand-secondary/50"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-brand-tertiary rounded-full shadow-lg shadow-brand-tertiary/50"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.div>

                {/* Decorative corner accents */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand-secondary/30 rounded-bl-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Recognition Section */}
        <section className="py-16 px-4 md:px-6 bg-card overflow-hidden">
          <div className="container mx-auto">
            <motion.div className="text-center mb-12" initial={{
              opacity: 1,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true,
              margin: "-100px"
            }}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500 fill-current" aria-hidden="true" />
                <span className="text-sm font-medium text-neutral-medium">Featured In</span>
              </div>
              <h2 className="heading-lg text-foreground mb-2 font-heading leading-tight">
                <TextReveal type="words" delay={0.2}>
                  Global Recognition
                </TextReveal>
              </h2>
              <p className="text-lg text-neutral-medium max-w-2xl mx-auto">Our historic achievement has been recognized by leading international publications</p>
            </motion.div>

            {/* Sliding logos animation */}
            <div className="relative">
              <div className="flex animate-[slide_30s_linear_infinite] space-x-12">
                {[{
                  name: "F-Secure",
                  logo: fSecureLogo,
                  url: "https://www.youtube.com/watch?v=lnedOWfPKT0"
                }, {
                  name: "Norton",
                  logo: nortonLogo,
                  url: "https://us.norton.com/blog/malware/when-were-computer-viruses-first-written-and-what-were-their-original-purposes"
                }, {
                  name: "IBM",
                  logo: ibmLogo,
                  url: "https://www.ibm.com/think/topics/malware-history"
                }, {
                  name: "TRT World",
                  logo: trtWorldLogo,
                  url: "https://www.trtworld.com/magazine/the-making-of-the-first-computer-virus-the-pakistani-brain-32296"
                }, {
                  name: "Medium",
                  logo: mediumLogo,
                  url: "https://medium.com/geekculture/brain-the-worlds-first-computer-virus-f3758323d894"
                }, {
                  name: "TIME",
                  logo: timeLogo,
                  url: "https://content.time.com/time/subscriber/article/0,33009,968508,00.html"
                }, {
                  name: "Kaspersky",
                  logo: kasperskyLogo,
                  url: "https://www.kaspersky.com/resource-center/threats/a-brief-history-of-computer-viruses-and-what-the-future-holds"
                }, {
                  name: "BBC News",
                  logo: bbcNewsLogo,
                  url: "https://www.bbc.co.uk/programmes/w3ct4xgf"
                }, {
                  name: "F-Secure",
                  logo: fSecureLogo,
                  url: "https://www.youtube.com/watch?v=lnedOWfPKT0"
                }, {
                  name: "Norton",
                  logo: nortonLogo,
                  url: "https://us.norton.com/blog/malware/when-were-computer-viruses-first-written-and-what-were-their-original-purposes"
                }, {
                  name: "IBM",
                  logo: ibmLogo,
                  url: "https://www.ibm.com/think/topics/malware-history"
                }].map((logo, index) => <button key={index} onClick={() => window.open(logo.url, '_blank')} className="flex-shrink-0 h-16 px-8 flex items-center justify-center bg-white dark:bg-neutral-100 rounded-lg hover:shadow-lg transition-shadow cursor-pointer border border-border" aria-label={`Visit ${logo.name}`}>
                  <img src={logo.logo} alt={`${logo.name} - Recognized our achievement`} className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" loading="lazy" decoding="async" />
                </button>)}
              </div>

              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-card to-transparent pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-card to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Trusted Clients Section */}
        <TrustedClients />

        {/* Complete IT Services Section */}
        <section id="services-section" className="py-20 sm:py-28 bg-neutral-light dark:bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div className="text-center mb-20" initial={{
              opacity: 1,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true,
              margin: "-100px"
            }}>
              <motion.div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-primary/20" whileHover={{
                scale: 1.05
              }}>
                <Network className="w-4 h-4" aria-hidden="true" />
                <span>Our Services</span>
              </motion.div>

              <h2 className="heading-lg mb-6 font-heading leading-tight">
                <span className="text-primary">
                  Comprehensive IT Solutions
                </span>
                {' '}
                <span className="text-foreground dark:text-foreground">in Pakistan by Brain</span>
              </h2>

              <p className="text-lg md:text-xl text-neutral-medium max-w-4xl mx-auto leading-relaxed">From providing high-speed fiber internet to enterprise AI software solutions, we cover a broad and comprehensive range of IT and telecom services in Pakistan for businesses of all sizes, outperforming all other IT solution providers in Pakistan.</p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" initial="initial" whileInView="animate" variants={ANIMATION_VARIANTS.staggerContainer} viewport={{
              once: true,
              margin: "-100px"
            }}>
              {SERVICES.map((service, index) => {
                const IconComponent = service.icon;
                return <motion.div
                  key={service.id}
                  initial={{ opacity: 1, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{
                    y: -8
                  }}
                >
                  <Card tilt className="h-full relative overflow-hidden border border-border dark:border-neutral-400 shadow-lg hover:shadow-lg transition-all duration-200 hover:scale-[1.02] group bg-card dark:bg-neutral-100">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-brand-secondary to-brand-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    <div className="relative pt-10 pb-6">
                      {/* Icon with subtle background */}
                      <motion.div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center relative bg-primary/10 dark:bg-primary/20 shadow-md group-hover:shadow-lg transition-shadow duration-300" aria-hidden="true" whileHover={{
                        rotate: 5,
                        scale: 1.1
                      }} transition={{
                        type: "spring",
                        stiffness: 300
                      }}>
                        <IconComponent className="h-10 w-10 text-primary relative z-10" aria-hidden="true" />
                      </motion.div>

                      <h3 className="font-raleway text-2xl text-center font-bold pb-4">
                        {service.title}
                      </h3>

                      <p className="text-center text-base leading-relaxed min-h-[80px] text-neutral-medium dark:text-neutral-medium px-2">
                        {service.description}
                      </p>
                    </div>

                    <div className="relative pb-8 px-6">
                      <Button magnetic asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 h-12 text-base font-semibold group/btn">
                        <Link to={`/services/${service.id}`} className="flex items-center justify-center gap-2">
                          <span>{service.buttonText}</span>
                          <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>;
              })}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div className="text-center mb-16" initial={{
              opacity: 1,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true,
              margin: "-100px"
            }}>
              <h2 className="heading-lg text-[#17164f] mb-8 font-heading leading-tight">
                Why Choose Us?
              </h2>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial="initial" whileInView="animate" variants={ANIMATION_VARIANTS.staggerContainer} viewport={{
              once: true,
              margin: "-100px"
            }}>
              {WHY_CHOOSE_US_DATA.map((item, index) => {
                const IconComponent = item.icon;
                return <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Card tilt className={`${item.bgColor} ${item.textColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[250px] flex flex-col justify-between`}>
                    <div>
                      <IconComponent className="w-16 h-16 mb-6 opacity-90" aria-hidden="true" />
                      {/* <h3 className="text-2xl font-bold mb-4">{item.title}</h3> */}
                      <h3 className={`font-raleway text-2xl font-bold mb-4 ${item.titleColor}`}>{item.title}</h3>
                      <p className="text-base leading-relaxed opacity-90">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>;
              })}
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 sm:py-24 bg-neutral-light dark:bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <motion.div className="text-center mb-12" initial={{
              opacity: 1,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }}>
              <h2 className="heading-lg text-foreground mb-4 font-heading leading-tight">Get in Touch</h2>
              <p className="text-lg text-neutral-medium">Let's discuss how we can help transform your business</p>
            </motion.div>

            <motion.div initial={{
              opacity: 1,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-primary via-brand-secondary to-brand-tertiary relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div className="text-center max-w-3xl mx-auto" initial={{
              opacity: 1,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
              {/* <h2 className="text-white mb-6 font-heading leading-tight">Ready to Elevate Your Business?</h2> */}
              <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold heading-solid-white pb-4">
                Ready to Elevate Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-10">Join thousands of businesses across Pakistan that trust BrainTEL for their IT infrastructure</p>

              <motion.div whileHover={{
                scale: 1.05
              }} transition={{
                type: "spring",
                stiffness: 300
              }}>
                <Button magnetic size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-xl" onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}>
                  Start Your Journey Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
});

Index.displayName = 'Index';

export default Index;