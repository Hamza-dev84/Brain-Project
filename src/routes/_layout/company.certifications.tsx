import { createFileRoute } from "@tanstack/react-router";
import Certifications from "@/pages/company/Certifications";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/company/certifications")({
  component: () => (
    <PageTransition>
      <Certifications />
    </PageTransition>
  ),
});
