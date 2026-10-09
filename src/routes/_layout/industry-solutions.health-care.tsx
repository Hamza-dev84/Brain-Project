import { createFileRoute } from "@tanstack/react-router";
import HealthCare from "@/pages/industry-solutions/HealthCare";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/industry-solutions/health-care")({
  component: () => (
    <PageTransition>
      <HealthCare />
    </PageTransition>
  ),
});
