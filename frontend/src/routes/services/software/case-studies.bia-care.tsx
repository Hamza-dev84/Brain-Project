import { createFileRoute } from "@tanstack/react-router";
import BiaCare from "@/components/software/pages/casestudies/BiaCare";

const title = "Bia Care: Online Menopause Clinic | BrainSOFT";
const description = "How BrainSOFT built Bia Care's menopause clinic with React Native & Next.js. Real-time chat, symptom tracking & secure health data.";

export const Route = createFileRoute("/services/software/case-studies/bia-care")({
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
  component: BiaCare,
});
