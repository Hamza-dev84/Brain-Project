import { createFileRoute } from "@tanstack/react-router";
import CSR from "@/pages/company/CSR";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/company/csr")({
  component: () => (
    <PageTransition>
      <CSR />
    </PageTransition>
  ),
});
