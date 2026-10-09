import { Outlet, createFileRoute } from "@tanstack/react-router";
import { BrandBar } from "@/components/common/BrandBar";

export const Route = createFileRoute("/services/software")({
  component: SoftwareLayout,
});

function SoftwareLayout() {
  return (
    <div className="brand-software min-h-screen">
      <BrandBar active="software" />
      <Outlet />
    </div>
  );
}
