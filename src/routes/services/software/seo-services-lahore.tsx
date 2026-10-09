import { createFileRoute } from "@tanstack/react-router";
import SEOServicesLahore from "@/components/software/pages/SEOServicesLahore";

const title = "SEO Services in Lahore That Grow Your Business — Brain Soft";
const description = "Brain Soft is a Lahore-based SEO agency delivering Page 1 rankings through honest, white-hat strategies. Local SEO, on-page, off-page & technical SEO.";

export const Route = createFileRoute("/services/software/seo-services-lahore")({
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
  component: SEOServicesLahore,
});
