import { Outlet, createFileRoute } from "@tanstack/react-router";
import { BrandBar } from "@/components/common/BrandBar";

export const Route = createFileRoute("/services/cloud")({
  component: CloudLayout,
});

function CloudLayout() {
  return (
    <div className="brand-cloud min-h-screen">
      <BrandBar active="cloud" />
      <Outlet />
    </div>
  );
}
