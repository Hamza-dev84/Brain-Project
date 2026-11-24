import { createFileRoute } from "@tanstack/react-router";
import Zensory from "@/components/software/pages/casestudies/Zensory";

const title = "The Zensory: Mental Health App | BrainSOFT";
const description = "BrainSOFT developed The Zensory mindfulness platform with React Native & Firebase. Personalized sensory experiences for relaxation.";

export const Route = createFileRoute("/services/software/case-studies/zensory")({
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
  component: Zensory,
});
