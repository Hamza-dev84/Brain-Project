import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL: /sms/* -> /services/sms/*
export const Route = createFileRoute("/sms/$")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: `/services/sms/${params._splat ?? ""}`.replace(/\/$/, ""), statusCode: 301 });
  },
});
