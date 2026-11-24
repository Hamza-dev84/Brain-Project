import { createFileRoute } from "@tanstack/react-router";
import MobileAppDevelopersPakistan from "@/components/software/pages/MobileAppDevelopersPakistan";

const title = "Mobile App Developers in Pakistan for iOS & Android - BrainSOFT";
const description = "BrainSOFT: The go-to mobile app development company in Pakistan. 40% cost savings, 100+ apps delivered. Free consultation & post-launch support included.";

export const Route = createFileRoute("/services/software/mobile-app-developers-pakistan")({
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
  component: MobileAppDevelopersPakistan,
});
