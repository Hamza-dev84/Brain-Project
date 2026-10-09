import { createFileRoute } from "@tanstack/react-router";
import Octilearn from "@/components/software/pages/casestudies/Octilearn";

const title = "Octilearn: AI E-Learning Platform | BrainSOFT";
const description = "BrainSOFT transformed Octilearn's IGCSE platform with AI-powered adaptive learning, improved performance & enhanced security on AWS.";

export const Route = createFileRoute("/services/software/case-studies/octilearn")({
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
  component: Octilearn,
});
