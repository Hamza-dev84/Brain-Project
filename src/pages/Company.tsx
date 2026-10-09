import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CreditCard,
  HelpCircle,
  Users2,
  ShieldCheck,
  HandHeart,
  Handshake,
  Info,
  Briefcase,
  Network,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const company = [
  {
    title: "Our Core Team",
    path: "/company/our-core-team",
    icon: Users2,
    description:
      "Meet the leaders driving innovation, technology, and strategy across BrainTEL and its subdivisions.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Certifications",
    path: "/company/certifications",
    icon: ShieldCheck,
    description:
      "Our credentials and industry-recognized certifications that validate our expertise and commitment to quality.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Corporate Social Responsibility",
    path: "/company/csr",
    icon: HandHeart,
    description:
      "Initiatives and programs reflecting our commitment to community, sustainability, and social impact.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Strategic Corporate Alliances",
    path: "/company/strategic-corporate-alliances",
    icon: Handshake,
    description:
      "Key partnerships and collaborations that enhance our offerings and extend our reach.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "About Us",
    path: "/company/about-us",
    icon: Info,
    description:
      "Discover our mission, vision, and history as a leading technology and communication solutions provider in Pakistan.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Careers",
    path: "/careers",
    icon: Briefcase,
    description:
      "Explore opportunities to grow, contribute, and innovate with BrainTEL.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Our Technology Partners",
    path: "/company/tech-partners",
    icon: Network,
    description:
      "Our technology partners that empower our solutions and services.",
    color: "text-blue-600 dark:text-blue-400",
  },
];

export default function Company() {
  return (
    <>
      <PageMeta
        title="About BrainTEL Pakistan | IT & Telecom Company in Lahore."
        description="Learn about BrainTEL, a leading IT and telecom company in Pakistan. Explore our leadership team, certifications, technology partners, CSR initiatives, careers, and enterprise solutions."
      />
      {/* Breadcrumb */}
      {/* <PageHeader breadcrumbs={[{ label: "Company", path: "/company" }]} /> */}
      <PageHeader
        title="Our Company"
        breadcrumbs={[{ label: "Company" }]}
      />

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* <h1 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg pb-12 text-center">
          Our Company
        </h1> */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {company.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="group transition-all duration-200 hover:scale-[1.02]"
              >
                <Card className="h-full border-2 hover:border-primary hover:shadow-lg transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg bg-accent/50 ${item.color}`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg md:text-2xl mt-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
