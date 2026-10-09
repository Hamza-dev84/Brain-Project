import { createFileRoute } from "@tanstack/react-router";
import ERPSoftwarePakistan from "@/components/software/pages/ERPSoftwarePakistan";

const title = "Leading ERP Software in Pakistan | Local Support & Scalable";
const description = "Designed for Pakistani industries. Discover the best ERP software in Pakistan to automate core processes, ensure compliance, and reduce operational costs.";

export const Route = createFileRoute("/services/software/erp-software-pakistan")({
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
  component: ERPSoftwarePakistan,
});
