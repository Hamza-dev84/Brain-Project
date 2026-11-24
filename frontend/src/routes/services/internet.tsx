import { Outlet, createFileRoute } from "@tanstack/react-router";
import { BrandBar } from "@/components/common/BrandBar";
import { SignupModalProvider } from "@/components/internet/SignupModalProvider";

export const Route = createFileRoute("/services/internet")({
  component: InternetLayout,
});

function InternetLayout() {
  return (
    <div className="brand-internet min-h-screen">
      <BrandBar active="internet" />
      <SignupModalProvider>
        <Outlet />
      </SignupModalProvider>
    </div>
  );
}
