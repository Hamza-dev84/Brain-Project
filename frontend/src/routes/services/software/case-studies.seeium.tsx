import { createFileRoute } from "@tanstack/react-router";
import Seeium from "@/components/software/pages/casestudies/Seeium";

const title = "Seeium: AI Travel Planning App | BrainSOFT";
const description = "BrainSOFT built Seeium's AI-powered travel app with React Native & Next.js. Personalized itineraries & seamless cross-device UX.";

export const Route = createFileRoute("/services/software/case-studies/seeium")({
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
  component: Seeium,
});
