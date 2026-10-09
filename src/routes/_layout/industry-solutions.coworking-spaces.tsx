import { createFileRoute } from "@tanstack/react-router";
import CoworkingSpaces from "@/pages/industry-solutions/CoworkingSpaces";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/industry-solutions/coworking-spaces")({
  component: () => (
    <PageTransition>
      <CoworkingSpaces />
    </PageTransition>
  ),
});
