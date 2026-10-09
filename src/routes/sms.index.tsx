import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL: /sms -> /services/sms
export const Route = createFileRoute("/sms/")({
  beforeLoad: () => {
    throw redirect({ to: "/services/sms", statusCode: 301 });
  },
});
