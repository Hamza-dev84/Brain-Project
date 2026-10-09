import { createFileRoute } from "@tanstack/react-router";
import Support from "@/components/software/pages/Support";

const title = "Technical Support & Help Center | BrainSOFT";
const description = "BrainSOFT support hub: report issues, billing help, project updates & general inquiries. Prioritized triage and 24/7 assistance.";

export const Route = createFileRoute("/services/software/support")({
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
  component: Support,
});
