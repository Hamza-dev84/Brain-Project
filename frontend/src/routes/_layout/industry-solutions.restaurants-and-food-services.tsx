import { createFileRoute } from "@tanstack/react-router";
import RestaurantsAndFoodServices from "@/pages/industry-solutions/RestaurantsAndFoodServices";
import { PageTransition } from "@/components/ui/page-transition";

export const Route = createFileRoute("/_layout/industry-solutions/restaurants-and-food-services")({
  component: () => (
    <PageTransition>
      <RestaurantsAndFoodServices />
    </PageTransition>
  ),
});
