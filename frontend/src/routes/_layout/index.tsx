import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/")({
  // head: () => ({
  //   meta: [
  //     { title: "Brain-Net — Internet, Cloud, Software & SMS Services in Pakistan" },
  //     {
  //       name: "description",
  //       content:
  //         "Brain-Net is Pakistan's enterprise IT group — fiber internet, voice, BrainCLOUD hosting, software services and bulk SMS, backed by 40+ years and 10,000+ B2B customers.",
  //     },
  //     {
  //       property: "og:title",
  //       content: "Brain-Net — Internet, Cloud, Software & SMS Services in Pakistan",
  //     },
  //     {
  //       property: "og:description",
  //       content:
  //         "Fiber internet, enterprise voice, cloud & data center, software services and bulk SMS from Pakistan's longest-running IT group.",
  //     },
  //     { property: "og:type", content: "website" },
  //     { name: "twitter:card", content: "summary_large_image" },
  //   ],
  // }),
  component: () => (
    <PageTransition>
      <Index />
    </PageTransition>
  ),
});
