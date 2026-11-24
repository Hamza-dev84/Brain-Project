// import { createFileRoute } from "@tanstack/react-router";
// import IndustrySolutions from "@/pages/IndustrySolutions";
// import { PageTransition } from "@/components/ui/page-transition";

// export const Route = createFileRoute("/_layout/industry-solutions")({
//   component: () => (
//     <PageTransition>
//       <IndustrySolutions />
//     </PageTransition>
//   ),
// });



import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/industry-solutions")({
  component: () => (
    <PageTransition>
      <Outlet />
    </PageTransition>
  ),
});
