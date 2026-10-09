import { Link } from '@tanstack/react-router';
import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Shield, Award, Users, Calendar, ExternalLink, Trophy, Globe, Star, Wifi, Mail, Server, Phone, Brain, Code, Network, Building2, Zap, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import brainFounders1986 from '@/assets/about/brain-founders-1986.webp';
import timeMagazineCover from '@/assets/about/time-magazine-cover.webp';
import fSecureLogo from '@/assets/about/f-secure-logo.webp';
import nortonLogo from '@/assets/about/norton-logo.png';
import startupPakistanLogo from '@/assets/about/startup-pakistan-logo.png';
import ibmLogo from '@/assets/about/ibm-logo.webp';
import trtWorldLogo from '@/assets/about/trt-world-logo.png';
import mediumLogo from '@/assets/about/medium-logo.png';
import timeLogo from '@/assets/about/time-logo.png';
import kasperskyLogo from '@/assets/about/kaspersky-logo.png';
import bbcNewsLogo from '@/assets/about/bbc-news-logo.png';

export default function AboutUs() {
  return (
    <>
      {/* <PageMeta
        title="About BrainTEL | IT Pioneers Since 1986 Pakistan"
        description="40+ years of IT excellence. From creating the world's first virus to leading Pakistan's digital transformation. Discover BrainTEL's story."
      /> */}
      <PageMeta
        title="About BrainTEL | Pakistan’s IT & Telecom Pioneer Since 1982"
        description="Discover BrainTEL’s journey from creating the world’s first PC virus to becoming a leading IT and telecom company in Pakistan offering internet, cloud, telephony, SMS, and AI-driven solutions."
      // ogImage="/favicons/default.png"
      />
      <AboutUsContent />
    </>
  );
}

function AboutUsContent() {
  const companyHighlights = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "ICT Services and Solution Provider",
      description: "Lending extensive technical solutions to businesses all over Pakistan"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "40+ Years of Brilliance",
      description: "Reforming the Tech industry since 1982"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "100% Quality Assurance",
      description: "Delivering Excellent Quality Service"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Round-The-Clock Customer Support",
      description: "24/7/365 support for all our clients"
    }
  ];

  const timeline = [
    {
      year: "1982",
      title: "Brain Computer Services was established",
      icon: <Building2 className="w-6 h-6 text-m3-primary" />,
      color: "from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950",
    },
    {
      year: "1991",
      title:
        "Brain introduced Email & FAX Services for the first time in Pakistan",
      icon: <Mail className="w-6 h-6 text-m3-primary" />,
      color: "from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950",
    },
    {
      year: "1996",
      title: (
        <>
          Brain was the pioneer in introducing
          <a
            href="/services/internet"
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
            {" "}
            internet services{" "}
          </a>
          under the brand name BrainNET
        </>
      ),
      icon: <Globe className="w-6 h-6 text-m3-primary" />,
      color:
        "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950",
    },
    {
      year: "1999",
      title:
        "Brain started laying Optical Fiber Cable for the first time in Pakistan",
      icon: <Network className="w-6 h-6 text-m3-primary" />,
      color: "from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950",
    },
    {
      year: "2004",
      title: (
        <>
          Brain was granted Local Loop Operator (LLO) License and introduced
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
            {" "}
            SIP Based Telephony services{" "}
          </a>
          in Pakistan for the first time under the brand name BrainTEL
        </>
      ),
      icon: <Phone className="w-6 h-6 text-m3-primary" />,
      color:
        "from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950",
    },
    {
      year: "2009",
      title:
        "Brain Computers Pte Ltd served over 20,000+ customers globally with its OTT Services",
      icon: <Users className="w-6 h-6 text-m3-primary" />,
      color: "from-yellow-50 to-lime-50 dark:from-yellow-950 dark:to-lime-950",
    },
    {
      year: "2018",
      title: (
        <>
          Brain started providing
          <a
            href="/services/internet/home-internet"
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
            {" "}
            FTTH for Home Consumers{" "}
          </a>
          after serving the Corporate Sector for many years
        </>
      ),
      icon: <Wifi className="w-6 h-6 text-m3-primary" />,
      color:
        "from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950",
    },
    {
      year: "2019",
      title:
        (
          <>
            Brain revamped its own Data Centers and now provides
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
              {" "} Cloud Hosting Servers {" "}
            </a>
          </>
        ),
      icon: <Server className="w-6 h-6 text-m3-primary" />,
      color: "from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950",
    },
    {
      year: "2024",
      title:
        (
          <>
            BrainTEL now formed as a one-stop shop for all IT and telecom services including internet, SMS, cloud, telephony,
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
              {" "} software solutions, {" "}
            </a>
            and AI-driven solutions
          </>

        ),
      icon: <Zap className="w-6 h-6 text-m3-primary" />,
      color:
        "from-gradient-primary/10 to-gradient-secondary/10 dark:from-gradient-primary/20 dark:to-gradient-secondary/20",
    },
  ];

  const boardOfDirectors = [
    {
      name: "Shahid Farooq Alvi",
      title: "Director",
      description: "Leading Brain's strategic vision and industry partnerships"
    },
    {
      name: "Amjad Farooq Alvi",
      title: "Director",
      description: "Co-founder and technology innovation leader"
    },
    {
      name: "Basit Farooq Alvi",
      title: "Director",
      description: "Driving operational excellence and business growth"
    }
  ];

  const mediaLogos = [
    { name: "F-Secure", logo: fSecureLogo, url: "https://www.youtube.com/watch?v=lnedOWfPKT0" },
    { name: "Norton", logo: nortonLogo, url: "https://us.norton.com/blog/malware/when-were-computer-viruses-first-written-and-what-were-their-original-purposes" },
    { name: "Startup Pakistan", logo: startupPakistanLogo, url: "https://www.facebook.com/StartupPakistanSP/photos/a.1313757702077484/4511976388922250/?type=3&eid=ARBbcn4Rfo8EPtNBFO9Z4otG8naPuTgIYzowkm20DZU8C81NuogOOFml23nkdk02wt1EE7bfZX2_VMmV&paipv=0&eav=AfZ_meamsJrCiVSnsNQOrJ8ixTAZpL7RpGu-W5TpQXuNJJDgimVM4zkia0mNPuIIyT8&_rdr" }
  ];

  const internationalMediaLogos = [
    { name: "IBM", logo: ibmLogo, url: "https://www.ibm.com/think/topics/malware-history" },
    { name: "TRT World", logo: trtWorldLogo, url: "https://www.trtworld.com/magazine/the-making-of-the-first-computer-virus-the-pakistani-brain-32296" },
    { name: "Medium", logo: mediumLogo, url: "https://medium.com/geekculture/brain-the-worlds-first-computer-virus-f3758323d894" },
    { name: "TIME", logo: timeLogo, url: "https://content.time.com/time/subscriber/article/0,33009,968508,00.html" },
    { name: "Kaspersky", logo: kasperskyLogo, url: "https://www.kaspersky.com/resource-center/threats/a-brief-history-of-computer-viruses-and-what-the-future-holds" },
    { name: "BBC News", logo: bbcNewsLogo, url: "https://www.bbc.co.uk/programmes/w3ct4xgf" }
  ];

  return (
    <>
      <PageHeader
        title="About Us"
        description="Pioneers in Pakistan's Internet Services Industry - 37 years of technological innovation and excellence"
        breadcrumbs={[
          { label: 'Company', path: '/company' },
          { label: 'About Us' }
        ]}
      />

      {/* Hero Section with Global Recognition */}
      <section className="relative bg-gradient-to-br from-brand-light via-accent to-brand-tertiary-light py-12 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-6 mb-12">
            <Badge className="mx-auto bg-primary/10 text-primary border-primary/20">
              <Trophy className="w-4 h-4 mr-2" />
              Our History
            </Badge>
            <h1 className="heading-display text-brand-dark leading-tight">
              About Brain Telecommunication
            </h1>
            <p className="text-lead-lg text-neutral-medium max-w-3xl mx-auto">
              Pioneers in Pakistan's technology landscape since 1982, creators of the world's first PC virus, and leaders in telecom innovation
            </p>
          </div>

          {/* Global Recognition Slider - Immediately Visible */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <Badge className="mx-auto bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20 mb-4">
                <Star className="w-4 h-4 mr-2" />
                Featured In
              </Badge>
              <h2 className="heading-lg text-foreground mb-2">
                Global Recognition
              </h2>
              <p className="text-neutral-medium">
                Our historic achievement has been recognized by leading international publications
              </p>
            </div>

            {/* Sliding logos animation */}
            <div className="relative">
              <div className="flex animate-[slide_30s_linear_infinite] space-x-12">
                {[...internationalMediaLogos, ...internationalMediaLogos].map((media, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(media.url, '_blank', 'nofollow')}
                    className="group flex-shrink-0 p-6 bg-white/90 dark:bg-background/90 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-[200px] backdrop-blur-sm"
                  >
                    <div className="h-12 flex items-center justify-center">
                      <img loading="lazy" decoding="async"
                        src={media.logo}
                        alt={`${media.name} logo`}
                        className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </button>
                ))}
              </div>

              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-light/80 to-transparent pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-light/80 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="pt-8 group surface-card bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-0 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Brain className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="heading-lg text-foreground">The Beginning of Computer Security</h2>
                  </div>
                  <p className="text-lead-lg text-neutral-medium leading-relaxed">
                    The journey of BrainTEL was kick-started by two very devoted brothers from Lahore, Pakistan. Amjad and Basit Farooq Alvi together invented the first PC virus — the Brain Virus, in 1986 to infect floppy disks to further infect other computers that could potentially duplicate their medical software. The virus was named "Brain" to honor the two brothers' computer consulting firm — Brain Computing Services.
                  </p>
                </CardContent>
              </Card>

              <Card className=" pt-8 group surface-card bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 border-0 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-foreground">Impact and Legacy</h3>
                  </div>
                  <p className="text-neutral-medium leading-relaxed">
                    The Brain virus would infect the boot sectors of floppy disks, then copy itself to the memory of a computer booted from an infected disk and further infect any inserted floppy disks. Moreover, the virus displayed a message, advising people to beware of the applications they use on their Personal Computers. As time passed, the two brothers developed an antivirus software, which helped in reducing the harm. The Brain virus at the time was the first known Floppy Disk Infecting Malware and alerted the computer industry to introduce better security measures to prevent malware from invading the computer machines.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <img width={500} height={352} loading="lazy" decoding="async"
                  src={brainFounders1986}
                  alt="Brain founders working on early computers in 1986"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium">Brain founders - 1986</p>
                </div>
              </div>

              <div className="relative">
                <img width={500} height={655} loading="lazy" decoding="async"
                  src={timeMagazineCover}
                  alt="TIME Magazine Computer Viruses cover featuring Brain virus"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium">TIME Magazine Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <Badge className="mx-auto bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20">
              <Globe className="w-4 h-4 mr-2" />
              Who We Are
            </Badge>
            <h2 className="heading-xl text-foreground max-w-4xl mx-auto">
              Developers in Pakistan's Internet Services Industry
            </h2>
            <p className="text-lead-lg text-neutral-medium max-w-4xl mx-auto leading-relaxed">
              We are the developers in Pakistan's Internet Services Industry and a Public Limited Telecom Enterprise. Our mission; to serve our people. Brain Telecommunication Limited, previously known as BrainNET, has aided the tech industry for more than three decades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyHighlights.map((highlight, index) => (
              <Card key={index} className="group surface-card hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-background dark:to-muted border-0 shadow-lg hover:shadow-2xl">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="p-4 rounded-2xl bg-primary/10 w-fit mx-auto group-hover:bg-primary/20 transition-colors">
                    {highlight.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-foreground font-semibold">
                      {highlight.title}
                    </h3>
                    <p className="text-neutral-medium">
                      {highlight.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Company Timeline Section */}
      <section className="py-20 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <Badge className="mx-auto bg-primary/10 text-primary border-primary/20">
              <Calendar className="w-4 h-4 mr-2" />
              Our Journey
            </Badge>
            <h2 className="heading-xl text-foreground">
              37 Years of Innovation
            </h2>
            <p className="text-lead-lg text-neutral-medium max-w-3xl mx-auto">
              From pioneering computer services to leading Pakistan's digital transformation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line with progressive draw */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border md:block hidden origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
                  initial={{ opacity: 1, x: index % 2 === 0 ? -60 : 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {/* Enhanced Timeline dot with icon */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full border-4 border-background z-10 md:flex hidden items-center justify-center shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className={`group/card surface-card bg-gradient-to-br ${item.color} border-0 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl`}>
                      <CardContent className="p-8 space-y-6">
                        <div className="flex items-center space-x-4">
                          <Badge className="bg-primary text-white px-6 py-3 text-xl font-bold rounded-full group-hover/card:bg-brand-secondary transition-colors">
                            {item.year}
                          </Badge>
                          <div className="p-2 rounded-full bg-primary/20 group-hover/card:bg-primary/30 transition-colors md:hidden">
                            {item.icon}
                          </div>
                        </div>
                        <p className="text-lead-lg text-foreground leading-relaxed">
                          {item.title}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-br from-primary to-brand-secondary py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center space-y-10 relative z-10">
          <div className="space-y-6">
            {/* <h2 className="heading-xl text-white">
              Ready to Experience 37 Years of Excellence?
            </h2> */}

            <h2 className="heading-xl text-white! bg-none! bg-clip-border! [background-clip:border-box]! [-webkit-text-fill-color:#fff]!">
              Ready to Experience 37 Years of Excellence?
            </h2>

            <p className="text-lead-lg text-white/90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Brain Telecommunication for their technology needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="rounded-full px-12 py-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link to="/contact-us">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outlined"
              asChild
              className="rounded-full px-8 py-4 border-white/30 text-white hover:bg-white/10"
            >
              <Link to="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}