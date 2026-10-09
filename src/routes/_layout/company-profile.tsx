import { createFileRoute } from "@tanstack/react-router";
import CompanyProfile from "@/pages/CompanyProfile";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/company-profile")({
  component: () => (
    <PageTransition>
      <CompanyProfile />
    </PageTransition>
  ),
});
