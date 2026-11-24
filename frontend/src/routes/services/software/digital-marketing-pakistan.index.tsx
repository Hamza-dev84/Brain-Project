import { createFileRoute } from "@tanstack/react-router";
import DigitalMarketingPakistan from "@/components/software/pages/DigitalMarketingPakistan";

const title = "Digital Marketing Services in Pakistan - BrainSOFT";
const description = "Grow your business online with Brain Soft, a digital marketing agency in Lahore. SEO, social media, PPC & content strategy to turn traffic into real customers.";

export const Route = createFileRoute("/services/software/digital-marketing-pakistan/")({
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
  component: DigitalMarketingPakistan,
});
