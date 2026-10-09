import { createFileRoute } from "@tanstack/react-router";
import PaymentGuides from "@/pages/resources/PaymentGuides";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/resources/payment-guides")({
  component: () => (
    <PageTransition>
      <PaymentGuides />
    </PageTransition>
  ),
});
