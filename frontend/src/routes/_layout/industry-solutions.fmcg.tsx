import { createFileRoute } from "@tanstack/react-router";
import FMCG from "@/pages/industry-solutions/FMCG";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/industry-solutions/fmcg")({
  component: () => (
    <PageTransition>
      <FMCG />
    </PageTransition>
  ),
});
