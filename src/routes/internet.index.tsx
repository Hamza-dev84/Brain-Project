import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL: /internet -> /services/internet
export const Route = createFileRoute("/internet/")({
  beforeLoad: () => {
    throw redirect({ to: "/services/internet", statusCode: 301 });
  },
});
