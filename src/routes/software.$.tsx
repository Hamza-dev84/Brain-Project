import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL: /software/* -> /services/software/*
export const Route = createFileRoute("/software/$")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: `/services/software/${params._splat ?? ""}`.replace(/\/$/, ""), statusCode: 301 });
  },
});
