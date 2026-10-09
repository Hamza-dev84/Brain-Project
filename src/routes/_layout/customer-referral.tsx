import { createFileRoute } from "@tanstack/react-router";
import CustomerReferral from "@/pages/CustomerReferral";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/customer-referral")({
  component: () => (
    <PageTransition>
      <CustomerReferral />
    </PageTransition>
  ),
});
