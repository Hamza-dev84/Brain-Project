import { createFileRoute } from "@tanstack/react-router";
import Company from "@/pages/Company";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/company/")({
  component: () => (
    <PageTransition>
      <Company />
    </PageTransition>
  ),
});