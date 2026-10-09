import { createFileRoute } from "@tanstack/react-router";
import CustomerGuides from "@/pages/resources/CustomerGuides";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/resources/customer-guides")({
  component: () => (
    <PageTransition>
      <CustomerGuides />
    </PageTransition>
  ),
});
