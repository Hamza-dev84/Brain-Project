import { createFileRoute } from "@tanstack/react-router";
import StrategicCorporateAlliances from "@/pages/company/StrategicCorporateAlliances";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/company/strategic-corporate-alliances")({
  component: () => (
    <PageTransition>
      <StrategicCorporateAlliances />
    </PageTransition>
  ),
});
