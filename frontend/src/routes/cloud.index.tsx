import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL: /cloud -> /services/cloud
export const Route = createFileRoute("/cloud/")({
  beforeLoad: () => {
    throw redirect({ to: "/services/cloud", statusCode: 301 });
  },
});
