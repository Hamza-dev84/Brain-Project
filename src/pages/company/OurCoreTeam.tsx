import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OurCoreTeam() {
  return (
    <>
      {/* <PageMeta 
        title="Leadership Team | BrainTEL Pakistan Executives"
        description="Meet BrainTEL's leadership team. Industry experts driving innovation in Pakistan's telecommunications and IT services sector."
      /> */}
      <PageMeta
        title="Leadership Team | IT & Telecom Experts in Pakistan | BrainTEL "
        description="Meet the BrainTEL core team driving innovation in Pakistan’s IT and telecom industry with expertise in cloud services, cybersecurity, networking, software development, and enterprise technology."
      // ogImage="/favicons/default.png"
      />
      <OurCoreTeamContent />
    </>
  );
}

function OurCoreTeamContent() {

  const teamMembers = [
    {
      name: "Amjad Farooq Alvi",
      position: "Founding Director",
      bio: "Mr. Amjad Farooq Alvi is the Founder and Director of Brain Telecommunication Ltd. and a pioneer of Pakistan’s IT and telecommunications industry. He is co-creator of the world’s first PC virus, Brain, an innovation that inadvertently marked the birth of the modern cybersecurity era. Since founding BrainTEL in 1982, he has led its evolution from a small computer repair operation into one of Pakistan’s leading next-generation IT and telecom companies. He provides strategic oversight across Finance, Human Resources, and R&D, and is recognized for identifying and commercializing emerging technologies ahead of market adoption. His international experience, including years in Singapore, shaped innovation and business models later implemented successfully in Pakistan. Under his leadership, BrainTEL was restructured into a public limited company in 2001, anticipating telecom deregulation and positioning the company for long-term growth.",
    },
    {
      name: "Dr. Shahid Farooq Alvi",
      position: "Director",
      bio: (
        <>
          Dr. Shahid Farooq Alvi, a pioneering veteran of Pakistan's IT and telecommunications industry, serves as the Founding Director of Brain. With over 40 years of experience, his visionary leadership was instrumental in introducing transformative services such as email, fax, and
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
            {" "} broadband internet {" "}
          </a>
          to the country, as well as deploying Lahore's first
          <a
            href="/services/internet/business-internet"
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
            {" "} fiber-optic network {" "}
          </a>
          in 1999. A respected industry advocate, Dr. Shahid has held key leadership roles, including President of ISPAK (1996–2013) and President of PTAPA (Pakistan Telecommunication Access Providers Association) since 2013. He also serves as a Director on the Board of Ignite and works hand-in-hand with the Ministry of IT & Telecom (MoIT), contributing significantly to national policy frameworks such as the Telecom Policy 2015. His enduring commitment to sector reform and collaboration with government bodies continues to shape the future of telecommunications in Pakistan.
        </>
      ),
    },
    {
      name: "Basit Farooq Alvi",
      position: "Director",
      bio: "Mr. Basit Farooq Alvi is the Co-Founder and Director of Brain Telecommunication Ltd. and a globally recognized technologist. He is co-creator of the world’s first PC virus, Brain, a landmark development that initiated the modern field of cybersecurity and malware research. Since the early 1980s, he has played a central role in shaping BrainTEL’s technical foundation and innovation-driven culture. His work reflects deep expertise in computer systems, network engineering, and cybersecurity. His contributions place him among the earliest pioneers of personal computing worldwide, with lasting influence on how software security is understood and addressed today.",
    },
    {
      name: "Anbrin Qazi",
      position: "Director",
      bio: "Anbrin Qazi is the Human Resources Director at Brain Telecommunication Ltd., with over three decades of professional experience within the Brain Group. She commenced her career in 1992 with Brain Computers Pte Ltd, Singapore, where she enhanced her expertise in accounting and business administration alongside her professional responsibilities. With an academic background in English Literature, she later developed specialization in Strategic Human Resource Management. Having a keen interest in human psychology, she adopts a structured and people-centric approach to HR leadership. She rejoined the Brain Group in 2019 at BrainTEL, Lahore, and has since been instrumental in strengthening HR policies, labor law compliance, and organizational culture. She remains focused on positioning BrainTEL as an exemplary organization through effective governance and sustainable people practices.",
    },

    {
      name: "Sami Alvi",
      position: "Director",
      bio: (
        <>
          Mr. Sami Alvi is a Director at BrainTEL, with leadership spanning product management, enterprise sales, and business transformation. Since 2017, he has served as General Manager Sales & Marketing, driving revenue growth through user-centric product strategies and enterprise customer acquisition. He has led cross-functional teams to launch
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
            {" "} telecom SaaS products, {" "}
          </a>
          translating data, customer insights, and market signals into scalable solutions. His expertise includes product strategy, roadmap execution, Agile delivery, A/B testing, and qualitative and quantitative analysis. With a strong foundation in customer success and digital marketing, he has improved retention, reduced churn, and optimized user journeys. Earlier in his career, he worked as a Business Process Analyst, focusing on process mapping, gap analysis, and operational efficiency.
        </>
      ),
    },
    {
      name: "Danish Alvi",
      position: "Director",
      bio: "Danish Alvi is a non-executive director at Brain, he graduated in Computing Science from the University College London, where he specialized in Computational Finance (models for commodity markets). Danish has pursued post-graduate academic research and work in Mathematics and Physics in the Netherlands, particularly with application in quantum photonics. Danish has since diversified into finance, possessing a number of advanced qualifications in finance from various European and American business schools. Danish is a polyglot and loves learning new languages.",
    },
    {
      name: "Muhammad Alvi",
      position: "Director",
      bio: "Mr. Muhammad Alvi is an MBA from the University of Greater Manchester and a Director and Marketing Manager at BrainTEL, where he leads brand strategy, marketing, and digital experience. Since 2022, he has reshaped and modernized BrainTEL’s brand and marketing discipline, aligning execution directly with measurable revenue outcomes. He led the consolidation of the company’s identity under the BrainTEL name and organized its trademark and brand system across digital and physical touchpoints. He designed and oversaw BrainTEL’s core digital platforms with further platforms in development. His work in SEO and organic growth opened new acquisition channels, contributing to substantial growth in B2B sales. With a background spanning data, systems, and telecom operations, he brings a disciplined, numbers-driven approach to marketing leadership.",
    },
    {
      name: "Muhammad Ehsan Khan Abdali",
      position: "Head of Brain Residential - Strategic Systems Architect",
      bio: "With 30 years of industry-shaping experience, Muhammad Ehsan Khan Abdali leads the design and deployment of next-generation network infrastructures. He possesses a deep mastery of the shift from legacy systems to Modern Cloud-Native architectures echo system, utilizing Docker/Kubernetes for application containerization and pioneering AI Agent Orchestration. His career is defined by the end-to-end delivery of VoIP-based Unified Communications and Triple Play services, ensuring technical excellence from initial sales strategy through to long-term operational support.",
    },
    {
      name: "Suhail Ahmed Qureshi",
      position: "Head of Network Operations Center",
      bio: "Suhail Ahmed Qureshi serves as the Head of the Network Operations Center at Brain Telecommunication Ltd., bringing a decade of expertise in managing high-end IT projects and complex networking systems. A highly versatile professional, he is distinguished by his prestigious CCIE certification and a Master's in Telecommunications. Suhail excels in conceptualizing and supporting critical IT frameworks, managing vendor relations, and driving project implementation from selection to completion. His unique blend of strategic management and deep technical proficiency ensures the resilience and efficiency of the network infrastructure, solidifying Brain's position as an industry leader.",
    },
    {
      name: "Qaisar Mahmood",
      position: "Head of Infrastructure & O&M",
      bio: "Qaisar Mahmood is a seasoned telecom professional with a BS in Electronics and a Post Diploma in Biomedical Technology, along with global certifications including CCNA, PMP, Energy Efficiency Advisor, and eCommerce. As Head of Infrastructure & O&M at BrainNET Fiber, he has spearheaded the design, rollout, and transformation of large-scale fiber optic networks across Pakistan. He is the mind behind the Brain's Metro Fiber Optic Network, Outdoor Metro Cabinet Systems, Cloud Wi-Fi deployments, and the migration of legacy fiber to GPON technology, driving BrainNET Fiber (a Subsidiary of BrainTEL) toward next generation connectivity. He contributes as Chief Engineer at PTAPA, where he actively works with government bodies and LESCO to resolve national level Telecom industry infrastructure challenges. Qaisar's commitment to smart city integration, green telecom infrastructure, and advanced network design fuels his leadership marked by vision, innovation, and excellence in operations.",
    },
    {
      name: "Naveed Ali",
      position: "Head of R&D",
      bio: "Naveed Ali is a seasoned software architect with decades of experience, he possesses a profound, full-stack expertise across a vast spectrum of technologies, from C/C++ and Java to the complete .NET ecosystem and Oracle E-Business Suite. Naveed enjoys a holistic understanding of the entire data lifecycle, from hardware-level interactions to cloud services, and excels at optimizing high-volume systems processing hundreds of millions of records. Currently, he channels this deep technical acumen into implementing Oracle E-Business Suite - Financials, integrating third-party systems, and leading complex data migrations from legacy ERPs, all driven by a relentless passion for research and development.",
    },
    {
      name: "Mubashir Lodhi",
      position: "Manager of Operations & Planning",
      bio: "As Manager of Operations and Planning at Brain Telecommunication Ltd., Mubashir Lodhi leverages over a decade of experience to drive strategic growth and operational excellence. His expertise, certified by CCNA, CCNP, JNCIA, AWS Solutions Architect, and PMP credentials, spans network management, capacity planning, and service quality assurance. Mubashir leads a dedicated team responsible for maintaining our robust ISP infrastructure, ensuring strict SLA adherence, and optimizing resource allocation. His unique blend of technical acumen and business strategy is instrumental in delivering key projects that foster innovation, exceed company objectives, and solidify our position as an industry leader.",
    },
    {
      name: "Ghazanfar Noor",
      position: "Team Lead - BrainSOFT",
      bio: "Ghazanfar Noor is a Team Lead at BrainSOFT with over 5 years of hands-on experience in building and scaling backend systems. He specializes in PHP, Node.js, Laravel, Express.js, and database technologies including MongoDB, MySQL, and Oracle. Ghazanfar has successfully delivered and led complex projects involving payment gateway integrations (MCB, JazzCash, OneLink, BrainCloudPlus), Oracle E-Business Suite integrations, and enterprise-grade branded SMS portals. With strong experience in production deployments across AWS, DigitalOcean, and Brain Cloud, he focuses on building reliable, scalable, and secure systems. As a Team Lead, he plays an active role in mentoring engineers, improving development workflows, and aligning technical execution with business objectives.",
    },

  ];

  return (
    <div>
      <PageHeader
        title="Our Core Team"
        description="Meet the visionary leaders and technical experts driving Brain's innovation and excellence in telecommunications."
        breadcrumbs={[
          { label: 'Company', path: '/company' },
          { label: 'Our Core Team' }
        ]}
      />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-primary group-hover:text-brand-light transition-colors">
                  {member.name}
                </CardTitle>
                <p className="text-lg font-medium text-neutral-medium">
                  {member.position}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed text-justify">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}