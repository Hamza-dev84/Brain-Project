import { createFileRoute } from "@tanstack/react-router";
import Government from "@/pages/industry-solutions/Government";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/industry-solutions/government")({
  component: () => (
    <PageTransition>
      <Government />
    </PageTransition>
  ),
});
