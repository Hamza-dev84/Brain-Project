// import { createFileRoute } from "@tanstack/react-router";
// import Company from "@/pages/Company";
// import { PageTransition } from "@/components/ui/page-transition";

// export const Route = createFileRoute("/_layout/company")({
//   component: () => (
//     <PageTransition>
//       <Company />
//     </PageTransition>
//   ),
// });


import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/company")({
  component: () => (
    <PageTransition>
      <Outlet />
    </PageTransition>
  ),
});