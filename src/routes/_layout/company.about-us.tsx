import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "@/pages/company/AboutUs";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/company/about-us")({
  component: () => (
    <PageTransition>
      <AboutUs />
    </PageTransition>
  ),
});
