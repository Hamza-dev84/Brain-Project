import { createFileRoute } from "@tanstack/react-router";
import SoftwareHouses from "@/pages/industry-solutions/SoftwareHouses";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/industry-solutions/software-houses")({
  component: () => (
    <PageTransition>
      <SoftwareHouses />
    </PageTransition>
  ),
});
