import { createFileRoute } from "@tanstack/react-router";
import FinancialServices from "@/pages/industry-solutions/FinancialServices";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/industry-solutions/financial-services")({
  component: () => (
    <PageTransition>
      <FinancialServices />
    </PageTransition>
  ),
});
