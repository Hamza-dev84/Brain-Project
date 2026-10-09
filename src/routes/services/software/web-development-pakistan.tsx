import { createFileRoute } from "@tanstack/react-router";
import WebDevelopmentPakistan from "@/components/software/pages/WebDevelopmentPakistan";

const title = "Website Development Services in Pakistan | CWV & WCAG Ready";
const description = "We offer advanced web development services in Pakistan, building Core Web Vitals–optimized, WCAG-compliant websites that drive growth and performance.";

export const Route = createFileRoute("/services/software/web-development-pakistan")({
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
  component: WebDevelopmentPakistan,
});
