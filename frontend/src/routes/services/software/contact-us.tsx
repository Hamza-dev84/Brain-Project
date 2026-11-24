import { createFileRoute } from "@tanstack/react-router";
import ContactUs from "@/components/software/pages/ContactUs";

const title = "Contact BrainSOFT | Get Your Free Consultation";
const description = "Get in touch with BrainSOFT for software development inquiries. Free consultation, 2-hour response time. Call (042) 111 222 888 today.";

export const Route = createFileRoute("/services/software/contact-us")({
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
  component: ContactUs,
});
