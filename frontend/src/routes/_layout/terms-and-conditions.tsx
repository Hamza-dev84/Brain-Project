import { createFileRoute } from "@tanstack/react-router";
import TermsAndConditions from "@/pages/TermsAndConditions";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/terms-and-conditions")({
  component: () => (
    <PageTransition>
      <TermsAndConditions />
    </PageTransition>
  ),
});
