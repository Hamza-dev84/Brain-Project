import { createFileRoute } from "@tanstack/react-router";
import NotFound from "@/pages/NotFound";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/$")({
  component: () => (
    <PageTransition>
      <NotFound />
    </PageTransition>
  ),
});
