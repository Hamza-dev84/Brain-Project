import { createFileRoute } from "@tanstack/react-router";
import TelephoneServices from "@/pages/services/TelephoneServices";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/services/telephone")({
  component: () => (
    <PageTransition>
      <TelephoneServices />
    </PageTransition>
  ),
});
