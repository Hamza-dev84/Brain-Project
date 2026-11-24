import { createFileRoute } from "@tanstack/react-router";
import TechPartners from "@/pages/company/TechPartners";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/company/tech-partners")({
  component: () => (
    <PageTransition>
      <TechPartners />
    </PageTransition>
  ),
});
