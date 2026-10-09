import { createFileRoute } from "@tanstack/react-router";
import Careers from "@/pages/Careers";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/careers")({
  component: () => (
    <PageTransition>
      <Careers />
    </PageTransition>
  ),
});
