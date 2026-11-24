import { createFileRoute } from "@tanstack/react-router";
import Resources from "@/pages/Resources";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/resources/")({
  component: () => (
    <PageTransition>
      <Resources />
    </PageTransition>
  ),
});