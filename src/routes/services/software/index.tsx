import { createFileRoute } from "@tanstack/react-router";
import Index from "@/components/software/pages/Index";

const title = "BrainSOFT | Software Development Services in Pakistan";
const description = "Enterprise-grade AI software development in Pakistan. 30+ global projects delivered. 24/7 support. Web, mobile, ERP & custom solutions.";

export const Route = createFileRoute("/services/software/")({
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
  component: Index,
});
