import { createFileRoute } from "@tanstack/react-router";
import WebDesignServicesPakistan from "@/components/software/pages/WebDesignServicesPakistan";

const title = "Reliable Web Design Services in Pakistan | BrainSOFT";
const description = "BrainSOFT is a Leading Web Design Company in Pakistan Offering Creative, Responsive, and WCAG-Based Scalable Web Design Solutions.";

export const Route = createFileRoute("/services/software/web-design-services-pakistan")({
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
  component: WebDesignServicesPakistan,
});
