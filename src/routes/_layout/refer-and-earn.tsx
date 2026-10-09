import { createFileRoute } from "@tanstack/react-router";
import ReferAndEarn from "@/pages/ReferAndEarn";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/refer-and-earn")({
  component: () => (
    <PageTransition>
      <ReferAndEarn />
    </PageTransition>
  ),
});
