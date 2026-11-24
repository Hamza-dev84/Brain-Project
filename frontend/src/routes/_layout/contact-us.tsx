import { createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { PageTransition } from "@/components/ui/page-transition";

const ContactUs = lazy(() => import("@/pages/ContactUs"));

export const Route = createFileRoute("/_layout/contact-us")({
  component: () => (
    <PageTransition>
      <Suspense
        fallback={
          <div className="py-12 text-center text-neutral-medium">
            Loading Contact page…
          </div>
        }
      >
        <ContactUs />
      </Suspense>
    </PageTransition>
  ),
});
