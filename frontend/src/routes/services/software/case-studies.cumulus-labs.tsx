import { createFileRoute } from "@tanstack/react-router";
import CumulusLabs from "@/components/software/pages/casestudies/CumulusLabs";

const title = "Cumulus Labs: Digital Memorial Platform | BrainSOFT";
const description = "How BrainSOFT built Cumulus Labs' video memorial platform with Next.js, Supabase & AWS. Secure streaming & scalable architecture.";

export const Route = createFileRoute("/services/software/case-studies/cumulus-labs")({
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
  component: CumulusLabs,
});
