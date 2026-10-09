import { createFileRoute } from "@tanstack/react-router";
import OurCoreTeam from "@/pages/company/OurCoreTeam";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/company/our-core-team")({
  component: () => (
    <PageTransition>
      <OurCoreTeam />
    </PageTransition>
  ),
});
