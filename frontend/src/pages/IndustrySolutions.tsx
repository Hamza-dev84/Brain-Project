import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import {
  Headphones,
  Cpu,
  Building2,
  Package,
  HeartPulse,
  Utensils,
  Landmark,
  Factory,
  Banknote,
  HelpCircle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from "@tanstack/react-router";


const industries = [
  {
    title: "Call Centers",
    path: "/industry-solutions/call-centers",
    icon: Headphones,
    description: "Optimized communication systems and workflow solutions designed to improve call center efficiency and customer satisfaction.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Software Houses",
    path: "/industry-solutions/software-houses",
    icon: Cpu,
    description: "Development and deployment solutions tailored to accelerate software delivery, improve collaboration, and build scalable architectures.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Co-Working Spaces",
    path: "/industry-solutions/coworking-spaces",
    icon: Building2,
    description: "Reliable connectivity, cloud infrastructure, and telephony solutions for modern shared workspaces.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "FMCG",
    path: "/industry-solutions/fmcg",
    icon: Package,
    description: "Integrated IT, cloud, and communication solutions to streamline operations, marketing, and supply chain management.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Healthcare",
    path: "/industry-solutions/health-care",
    icon: HeartPulse,
    description: "Secure, compliant technology solutions to manage patient data, telemedicine, and healthcare workflows.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Restaurants & Food Services",
    path: "/industry-solutions/restaurants-and-food-services",
    icon: Utensils,
    description: "Technology tools for online ordering, customer engagement, and operational efficiency.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Government",
    path: "/industry-solutions/government",
    icon: Landmark,
    description: "Robust and secure infrastructure solutions to support public services, digital governance, and citizen engagement.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Manufacturing",
    path: "/industry-solutions/manufacturing",
    icon: Factory,
    description: "Industrial-grade IT and cloud solutions to optimize production processes, supply chain, and enterprise communication.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Financial Services",
    path: "/industry-solutions/financial-services",
    icon: Banknote,
    description: "Secure, high-performance technology and cloud solutions for banks, fintech firms, and financial institutions.",
    color: "text-blue-600 dark:text-blue-400",
  },
];

export default function IndustrySolutions() {
  return (
    <>
      {/* <PageMeta
        title="Industry IT Solutions Pakistan | BrainTEL"
        description="Tailored IT solutions for healthcare, finance, manufacturing, government & more. BrainTEL's industry-specific connectivity & cloud services."
      /> */}

      <PageMeta
        title="Industry IT Solutions in Pakistan | Enterprise Services - BrainTEL."
        description="Explore BrainTEL industry solutions for healthcare, finance, government, FMCG, software houses, call centers, manufacturing, and more with secure IT, cloud, internet, and communication services in Pakistan."
      />
      
      <PageHeader
        title="Industry Solutions"
        breadcrumbs={[{ label: "Industry Solutions" }]}
      />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg pb-12 text-center">
          Industry Solutions
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => {
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
