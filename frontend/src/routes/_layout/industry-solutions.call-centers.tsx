import { createFileRoute } from "@tanstack/react-router";
import CallCenters from "@/pages/industry-solutions/CallCenters";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/industry-solutions/call-centers")({
  component: () => (
    <PageTransition>
      <CallCenters />
    </PageTransition>
  ),
});
