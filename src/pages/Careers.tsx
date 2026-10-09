import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown, MapPin, Clock, DollarSign, Search, Filter, X, ArrowRight, Play, Trophy, Users, Briefcase, Building2, Eye, Lightbulb, Calendar, Award, Infinity, GraduationCap, User, Mail, Phone, FileText, Upload, Code, ShoppingCart, Headphones, Sparkles, Shield, Wallet, TrendingUp, ShieldCheck, BookOpen, Scale, Quote } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/text-reveal';
import { ImageHover } from '@/components/ui/image-hover';
import { brainTelResumeFormApi } from '@/pages/services/brainTelFormsApi';

// Import all the images
import heroImage from '@/assets/careers/hero-image.webp';
import teamCollaborationImage from '@/assets/careers/team-collaboration-original.webp';
import companyBuildingImage from '@/assets/careers/company-building-original.webp';

// Life at Brain images
import life1 from '@/assets/careers/life-1.webp';
import life2 from '@/assets/careers/life-2.webp';
import life3 from '@/assets/careers/life-3.webp';
import life4 from '@/assets/careers/life-4.webp';
import life5 from '@/assets/careers/life-5.webp';
import life6 from '@/assets/careers/life-6.webp';
import life7 from '@/assets/careers/life-7.webp';
import life8 from '@/assets/careers/life-8.webp';

// Job images
import job1 from '@/assets/careers/job-1.png';
import job2 from '@/assets/careers/job-2.png';
import job3 from '@/assets/careers/job-3.png';
import job4 from '@/assets/careers/job-4.png';
import job5 from '@/assets/careers/job-5.png';
import job6 from '@/assets/careers/job-6.png';

// Form and testimonial images
import formBackground from '@/assets/careers/form-background.webp';
import testimonialImran from '@/assets/careers/testimonial-imran.webp';
import testimonialAnjum from '@/assets/careers/testimonial-anjum.webp';
import testimonialBg from '@/assets/careers/testimonial-bg.webp';
import { toast } from '@/components/software/ui/sonner';

// Benefits data with lucide-react icons
const benefits = [
  {
    icon: Shield,
    title: "Group Life Insurance",
    subtitle: "(GLA)",
    description: "Comprehensive life insurance coverage for you and your family"
  },
  {
    icon: Wallet,
    title: "Pension Scheme",
    subtitle: "(EOBI)",
    description: "Secure your future with our robust pension plan"
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    subtitle: "Annual & Fast track promotions",
    description: "Accelerated growth opportunities based on performance"
  },
  {
    icon: ShieldCheck,
    title: "Social Security",
    subtitle: "(PESSI)",
    description: "Complete social security benefits and protection"
  },
  {
    icon: BookOpen,
    title: "Professional Development",
    subtitle: "Regular On-The-Job Trainings",
    description: "Continuous learning and skill development programs"
  },
  {
    icon: Scale,
    title: "Work-Life Balance",
    subtitle: "32 Annual Paid Leaves",
    description: "Generous time off to recharge and spend with family"
  },
];

// Life at Brain images array
const lifeAtBrainImages = [life1, life2, life3, life4, life5, life6, life7, life8];

// Job data
const jobsData = [
  {
    image: job1,
    title: "Software Engineer",
    department: "Engineering",
    location: "Karachi",
    type: "Full-time",
    experience: "Mid Level",
    salary: "Market Competitive",
    description: "Join our development team and build innovative solutions that power our telecommunications infrastructure.",
    skills: ["React", "Node.js", "Python", "AWS"]
  },
  {
    image: job2,
    title: "Product Manager",
    department: "Engineering",
    location: "Lahore",
    type: "Full-time",
    experience: "Senior Level",
    salary: "Market Competitive",
    description: "Lead product strategy and work with cross-functional teams to deliver exceptional user experiences.",
    skills: ["Product Strategy", "Analytics", "Leadership", "Agile"]
  },
  {
    image: job3,
    title: "Sales Executive",
    department: "Sales",
    location: "Islamabad",
    type: "Full-time",
    experience: "Entry Level",
    salary: "Base + Commission",
    description: "Drive revenue growth by building relationships with enterprise clients and identifying new opportunities.",
    skills: ["Sales", "Communication", "CRM", "Networking"]
  },
  {
    image: job4,
    title: "Customer Support Specialist",
    department: "Customer Service",
    location: "Remote",
    type: "Full-time",
    experience: "Entry Level",
    salary: "Market Competitive",
    description: "Provide exceptional support to our customers and help them maximize the value of our services.",
    skills: ["Customer Service", "Problem Solving", "Communication", "Technical Support"]
  },
  {
    image: job5,
    title: "Network Engineer",
    department: "Operations",
    location: "Karachi",
    type: "Full-time",
    experience: "Mid Level",
    salary: "Market Competitive",
    description: "Design, implement, and maintain our network infrastructure to ensure optimal performance and reliability.",
    skills: ["Networking", "Cisco", "Troubleshooting", "Security"]
  },
  {
    image: job6,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Lahore",
    type: "Full-time",
    experience: "Senior Level",
    salary: "Market Competitive",
    description: "Develop and execute marketing strategies to promote our brand and drive customer acquisition.",
    skills: ["Digital Marketing", "Brand Management", "Analytics", "Strategy"]
  },
];

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
    resume: null as File | null,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponseError, setApiResponseError] = useState("");
  const resumeInputRef = useRef<HTMLInputElement>(null);


  const handleInputChange = (
    field: keyof typeof formData,
    value: string | File | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.position ||
      !formData.resume
    ) {
      toast.error("Please fill all fields and upload your resume.");
      return;
    }

    try {
      setIsSubmitting(true);

      const apiResponse = await brainTelResumeFormApi(formData);

      if (apiResponse.success) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          coverLetter: "",
          resume: null,
        });
        toast.success("Application submitted successfully.");
      } else {
        setIsSubmitting(false);
        toast.error(apiResponse.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Career form submission error:", error);
      setIsSubmitting(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Filter jobs based on search and filters
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !selectedDepartment || job.department === selectedDepartment;
    const matchesLocation = !selectedLocation || job.location === selectedLocation;
    const matchesExperience = !selectedExperience || job.experience === selectedExperience;

    return matchesSearch && matchesDepartment && matchesLocation && matchesExperience;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* <PageMeta
        title="Careers at BrainTEL | Join Pakistan's IT Pioneers"
        description="Build your IT career with BrainTEL. Explore openings in software, networking, cloud & telecom. Competitive benefits, growth opportunities."
      /> */}
      <PageMeta
        title="Careers at BrainTEL | IT & Telecom Jobs in Pakistan"
        description="Explore career opportunities at BrainTEL, a leading IT and telecom company in Pakistan. Apply for jobs in software development, networking, sales, customer support, and operations in Lahore."
      // ogImage="/favicons/default.png"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light to-accent py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img width={1920} height={760} loading="lazy" decoding="async" src={heroImage} alt="Career opportunities at Brain" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 1, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="heading-display font-bold">
                  <TextReveal type="words" immediate={true}>
                    Join the Best IT and Telecom Company in Pakistan
                  </TextReveal>
                </h1>
              </div>

              <p className="text-lead-lg text-neutral-medium leading-relaxed">
                Join a team of innovators & industry leaders. <span className="text-primary font-medium">Competitive salary</span> & career growth opportunities.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  magnetic
                  onClick={() => document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-filled cursor-pointer bg-primary text-primary-foreground hover:elevated-2 px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
                >
                  Explore Opportunities <ArrowRight className="w-4 h-4" />
                </Button>
                <Button magnetic variant="outlined" asChild className="btn-outlined border-primary text-primary px-6 py-3 rounded-full flex items-center gap-2">
                  <Link to="/company/about-us">
                    <Play className="w-4 h-4" /> Learn More
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="heading-xl font-bold text-primary">40+</div>
                  <div className="text-neutral-medium">Years Excellence</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Users className="w-8 h-8 text-brand-secondary mx-auto mb-2" />
                  <div className="heading-xl font-bold text-brand-secondary">500+</div>
                  <div className="text-neutral-medium">Team Members</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Briefcase className="w-8 h-8 text-brand-tertiary mx-auto mb-2" />
                  <div className="heading-xl font-bold text-brand-tertiary">100+</div>
                  <div className="text-neutral-medium">Opportunities</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 1, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-primary to-brand-secondary rounded-full p-8 elevated-3">
                <img width={1920} height={760} loading="lazy" decoding="async"
                  src={heroImage}
                  alt="Professional team members"
                  className="w-full h-auto rounded-full"
                />
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-light rounded-2xl opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-2xl opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-6 border-2 border-primary rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 1, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageHover type="lift">
                <img width={1324} height={1108} loading="lazy" decoding="async"
                  src={teamCollaborationImage}
                  alt="Team collaboration and innovation at Brain Telecommunication"
                  className="w-full h-auto rounded-xl elevated-2"
                />
              </ImageHover>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 1, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-block">
                <span className="px-4 py-2 bg-brand-light text-brand-dark rounded-full font-medium">
                  Our Journey
                </span>
              </div>

              <h2 className="heading-xl font-semibold text-foreground">
                Company Story
              </h2>

              <p className="text-lead-lg text-neutral-medium leading-relaxed">
                Learn about the journey and motivations behind
                <a
                  href="/company/about-us"
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
                  {" "} Brain Telecommunication's foundation {" "}
                </a>
                and our commitment to excellence.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Established Excellence</h4>
                  </div>
                  <p className="text-neutral-medium">40+ years of industry leadership and innovation</p>
                </motion.div>
                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-brand-secondary" />
                    <h4 className="font-semibold text-foreground">Strong Team</h4>
                  </div>
                  <p className="text-neutral-medium">500+ dedicated professionals working together</p>
                </motion.div>
                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-brand-tertiary" />
                    <h4 className="font-semibold text-foreground">Clear Vision</h4>
                  </div>
                  <p className="text-neutral-medium">Committed to telecommunications advancement</p>
                </motion.div>
                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Innovation First</h4>
                  </div>
                  <p className="text-neutral-medium">Pioneering solutions for tomorrow's challenges</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Our Story Card */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-xl p-8 elevated-1 hover:elevated-2 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img width={200} height={201} loading="lazy" decoding="async"
                    src={companyBuildingImage}
                    alt="Brain Telecommunication company building and team"
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary mb-2">Our Story</h3>
                  <p className="text-neutral-medium leading-relaxed">
                    Brain Telecommunication was founded with a vision to revolutionize the telecommunication industry through innovation and excellence. Over four decades, we've built a legacy of trust, innovation, and exceptional service.
                  </p>
                </div>
                <Button variant="ghost" asChild className="text-primary flex items-center gap-2 state-layer">
                  <Link to="/company/about-us">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Why Choose Us
              </span>
            </div>
            <h2 className="heading-xl font-semibold mb-4 text-foreground">
              Employee Benefits
            </h2>
            <p className="text-lead-lg text-neutral-medium max-w-2xl mx-auto">
              Discover the comprehensive perks and value propositions we offer to our employees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl p-8 text-center elevated-1 hover:elevated-3 state-layer transition-all duration-300"
                  initial={{ opacity: 1, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-brand-secondary font-medium mb-4">{benefit.subtitle}</p>
                  <p className="text-neutral-medium">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button variant="outlined" asChild className="btn-outlined border-primary text-primary px-6 py-3 rounded-full">
              <Link to="/company/about-us">View All Benefits</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Life At Brain Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-brand-tertiary-light text-brand-tertiary-foreground rounded-full font-medium">
                Culture & Environment
              </span>
            </div>
            <h2 className="heading-xl font-semibold mb-4 text-foreground">
              Life at Brain
            </h2>
            <p className="text-lead-lg text-neutral-medium max-w-2xl mx-auto">
              Take a glimpse into the vibrant and proactive life at Brain over 40 years of excellence!
            </p>
          </motion.div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {lifeAtBrainImages.map((photo, index) => (
              <motion.div
                key={index}
                className="aspect-square relative group overflow-hidden rounded-xl elevated-1 hover:elevated-3"
                initial={{ opacity: 1, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img loading="lazy" decoding="async"
                  src={photo}
                  alt={`Life at Brain ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-overlay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="heading-xl font-bold text-primary mb-2">40+</div>
              <div className="font-semibold text-foreground mb-1">Years of Excellence</div>
              <p className="text-neutral-medium">Four decades of innovation and leadership in telecommunications</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-10 h-10 text-brand-secondary mx-auto mb-3" />
              <div className="heading-xl font-bold text-brand-secondary mb-2">500+</div>
              <div className="font-semibold text-foreground mb-1">Team Members</div>
              <p className="text-neutral-medium">Diverse professionals working together towards common goals</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-10 h-10 text-brand-tertiary mx-auto mb-3" />
              <div className="heading-xl font-bold text-brand-tertiary mb-2">100+</div>
              <div className="font-semibold text-foreground mb-1">Achievements</div>
              <p className="text-neutral-medium">Industry awards and recognitions for excellence</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Infinity className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="heading-xl font-bold text-primary mb-2">∞</div>
              <div className="font-semibold text-foreground mb-1">Opportunities</div>
              <p className="text-neutral-medium">Endless possibilities for growth and development</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="current-openings" className="py-20 bg-background scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-xl font-semibold mb-4 text-foreground">Current Openings</h2>
            <p className="text-lead-lg text-neutral-medium">Find your perfect role and join our team</p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            className="mb-12 bg-card p-6 rounded-xl elevated-1"
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-medium" />
                <Input
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background border-border text-foreground"
                />
              </div>
              <Button
                variant="outlined"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 btn-outlined border-neutral-400 text-foreground"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <motion.div
                className="mt-6 p-4 bg-neutral-light rounded-lg"
                initial={{ opacity: 1, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 1, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-medium text-foreground mb-2">Department</label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                    >
                      <option value="">All Departments</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Sales">Sales</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Customer Service">Customer Service</option>
                      <option value="Operations">Operations</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-foreground mb-2">Location</label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                    >
                      <option value="">All Locations</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-foreground mb-2">Experience</label>
                    <select
                      value={selectedExperience}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                    >
                      <option value="">All Levels</option>
                      <option value="Entry Level">Entry Level</option>
                      <option value="Mid Level">Mid Level</option>
                      <option value="Senior Level">Senior Level</option>
                    </select>
                  </div>
                </div>
                {(selectedDepartment || selectedLocation || selectedExperience) && (
                  <motion.div
                    className="mt-4 flex flex-wrap gap-2"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {selectedDepartment && (
                      <Badge variant="secondary" className="flex items-center gap-1 bg-accent text-accent-foreground">
                        {selectedDepartment}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedDepartment('')} />
                      </Badge>
                    )}
                    {selectedLocation && (
                      <Badge variant="secondary" className="flex items-center gap-1 bg-accent text-accent-foreground">
                        {selectedLocation}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedLocation('')} />
                      </Badge>
                    )}
                    {selectedExperience && (
                      <Badge variant="secondary" className="flex items-center gap-1 bg-accent text-accent-foreground">
                        {selectedExperience}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedExperience('')} />
                      </Badge>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Job Listings */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card rounded-xl elevated-1 hover:elevated-3 state-layer transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16">
                        {/* <img loading="lazy" decoding="async" src={job.image} alt={job.title} className="w-full h-full object-contain" /> */}
                      </div>
                      <Badge className="bg-brand-tertiary-light text-brand-tertiary-foreground">{job.type}</Badge>
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-neutral-medium mb-4">
                      <span className="flex items-center gap-1">
                        {job.department === 'Engineering' && <Code className="h-4 w-4" />}
                        {job.department === 'Sales' && <ShoppingCart className="h-4 w-4" />}
                        {job.department === 'Customer Service' && <Headphones className="h-4 w-4" />}
                        {job.department === 'Operations' && <Building2 className="h-4 w-4" />}
                        {job.department === 'Marketing' && <Sparkles className="h-4 w-4" />}
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <GraduationCap className="h-4 w-4" />
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {job.salary}
                      </span>
                    </div>
                    <p className="text-neutral-medium mb-6">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="border-neutral-400 text-neutral-medium">{skill}</Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="w-full btn-filled bg-primary text-primary-foreground hover:elevated-2 transition-all duration-300"
                    >
                      <a
                        href={`mailto:careers@brain.net.pk?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                        aria-label={`Apply for ${job.title}`}
                      >
                        Apply Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 px-4 bg-neutral-light relative" style={{
        backgroundImage: `url(${formBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="bg-card/95 backdrop-blur-sm p-8 rounded-xl elevated-3"
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="heading-xl font-semibold mb-4 text-foreground">Ready to Join Us?</h2>
              <p className="text-lead-lg text-neutral-medium">Send us your resume and we'll be in touch</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-foreground mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <Input
                    placeholder="Your full name"
                    className="bg-background border-border text-foreground"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-medium text-foreground mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background border-border text-foreground"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-foreground mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  {/* <Input placeholder="+92 300 1234567" className="bg-background border-border text-foreground" /> */}
                  <Input
                    placeholder="+92 300 1234567"
                    className="bg-background border-border text-foreground"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-medium text-foreground mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Position
                  </label>
                  <Select value={formData.position} onValueChange={(value) => handleInputChange('position', value)}>
                    <SelectTrigger className="bg-background border-border text-foreground">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-engineer">Software Engineer</SelectItem>
                      <SelectItem value="product-manager">Product Manager</SelectItem>
                      <SelectItem value="sales-executive">Sales Executive</SelectItem>
                      <SelectItem value="customer-support">Customer Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-foreground mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Cover Letter
                </label>
                <Textarea
                  className="w-full h-32 bg-background border-border text-foreground"
                  placeholder="Tell us why you want to join Brain..."
                  value={formData.coverLetter}
                  onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                />
              </div>

              <div>
                <label className="block m3-body-medium font-medium text-m3-on-surface mb-2 flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Resume
                </label>

                {/* Hidden input */}
                <input
                  ref={resumeInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  hidden
                  onChange={handleFileChange}
                />

                <div
                  className="border-2 border-dashed border-m3-outline-variant rounded-lg p-6 text-center bg-m3-surface-container/50 hover:bg-m3-surface-container transition-colors duration-200 m3-state-layer cursor-pointer"
                  onClick={() => resumeInputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files?.[0];
                    if (file) {
                      handleInputChange("resume", file);
                    }
                  }}
                >
                  {!formData.resume ? (
                    <>
                      <Upload className="w-8 h-8 text-m3-primary mx-auto mb-2" />
                      <p className="text-m3-on-surface-variant">
                        Click to upload or drag and drop your resume
                      </p>
                      <p className="m3-body-small text-m3-on-surface-variant mt-1">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                    </>
                  ) : (
                    <>
                      <FileText className="w-8 h-8 text-m3-primary mx-auto mb-2" />
                      <p className="text-m3-on-surface font-medium truncate">
                        {formData.resume.name}
                      </p>
                      <p className="m3-body-small text-m3-on-surface-variant mt-1">
                        {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </>
                  )}
                </div>

                {apiResponseError && (
                  <p className="text-red-500 text-sm mt-1">
                    {apiResponseError}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full btn-filled bg-primary text-primary-foreground hover:elevated-2 py-3 transition-all duration-300 cursor-pointer">
                Submit Application
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative" style={{
        backgroundImage: `url(${testimonialBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="heading-xl font-semibold mb-4 text-primary-foreground">What Our Team Says</h2> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold heading-solid-white pb-4">
              What Our Team Says
            </h2>
            <p className="text-lead-lg text-primary-foreground/90">Hear from our amazing team members</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-card/95 backdrop-blur-sm p-8 rounded-xl elevated-3"
              initial={{ opacity: 1, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-10 h-10 text-primary/40 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground text-lead-lg leading-relaxed mb-4">
                    "Working at Brain has been an incredible journey. The company culture promotes innovation and personal growth.
                    I've learned so much and grown both professionally and personally."
                  </p>
                  <div className="flex items-center gap-4">
                    <img width={346} height={445} loading="lazy" decoding="async" src={testimonialImran} alt="Imran Ahmed" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-foreground">Imran Ahmed</h4>
                      <p className="text-neutral-medium">Senior Software Engineer</p>
                    </div>
                  </div>
                </div>
                <Quote className="w-10 h-10 text-primary/40 flex-shrink-0 rotate-180" />
              </div>
            </motion.div>

            <motion.div
              className="bg-card/95 backdrop-blur-sm p-8 rounded-xl elevated-3"
              initial={{ opacity: 1, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-10 h-10 text-primary/40 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground text-lead-lg leading-relaxed mb-4">
                    "The diversity and inclusion at Brain is remarkable. I feel valued and supported in my role.
                    The company truly cares about its employees' well-being and career development."
                  </p>
                  <div className="flex items-center gap-4">
                    <img width={344} height={445} loading="lazy" decoding="async" src={testimonialAnjum} alt="Anjum Fatima" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-foreground">Anjum Fatima</h4>
                      <p className="text-neutral-medium">Product Manager</p>
                    </div>
                  </div>
                </div>
                <Quote className="w-10 h-10 text-primary/40 flex-shrink-0 rotate-180" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}