import { createFileRoute } from "@tanstack/react-router";
import NeuroPlan from "@/components/software/pages/casestudies/NeuroPlan";

const title = "NeuroPlan: Brain Training Platform | BrainSOFT";
const description = "How BrainSOFT built NeuroPlan's cognitive training app with Firebase & AWS. Personalized exercises & scalable health architecture.";

export const Route = createFileRoute("/services/software/case-studies/neuroplan")({
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
  component: NeuroPlan,
});
