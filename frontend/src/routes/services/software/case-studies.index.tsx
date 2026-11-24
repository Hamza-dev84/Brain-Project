import { createFileRoute } from "@tanstack/react-router";
import CaseStudies from "@/components/software/pages/CaseStudies";

const title = "Our Portfolio & Case Studies | BrainSOFT Projects";
const description = "Explore BrainSOFT's delivered projects: EdTech, HealthTech, Enterprise & Social platforms. Real results from 30+ global clients.";

export const Route = createFileRoute("/services/software/case-studies/")({
  // head: () => ({
  //   meta: [
  //     { title },
  //     { name: "description", content: description },
  //     { property: "og:title", content: title },
  //     { property: "og:description", content: description },
  //     { property: "og:type", content: "website" },
  //     { name: "twitter:card", content: "summary_large_image" },
  //   ],
  // }),
  component: CaseStudies,
});
