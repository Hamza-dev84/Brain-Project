import { Outlet, createFileRoute } from "@tanstack/react-router";
import { BrandBar } from "@/components/common/BrandBar";

export const Route = createFileRoute("/services/sms")({
  component: SmsLayout,
});

function SmsLayout() {
  return (
    <div className="brand-sms min-h-screen">
      <BrandBar active="sms" />
      <Outlet />
    </div>
  );
}
