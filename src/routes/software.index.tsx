import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL: /software -> /services/software
export const Route = createFileRoute("/software/")({
  beforeLoad: () => {
    throw redirect({ to: "/services/software", statusCode: 301 });
  },
});
