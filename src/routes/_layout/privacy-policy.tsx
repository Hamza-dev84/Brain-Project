import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/privacy-policy")({
  component: () => (
    <PageTransition>
      <PrivacyPolicy />
    </PageTransition>
  ),
});
