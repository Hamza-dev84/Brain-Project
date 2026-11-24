import { createFileRoute } from "@tanstack/react-router";
import Manufacturing from "@/pages/industry-solutions/Manufacturing";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/industry-solutions/manufacturing")({
  component: () => (
    <PageTransition>
      <Manufacturing />
    </PageTransition>
  ),
});
