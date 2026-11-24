import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL: /cloud/* -> /services/cloud/*
export const Route = createFileRoute("/cloud/$")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: `/services/cloud/${params._splat ?? ""}`.replace(/\/$/, ""), statusCode: 301 });
  },
});
