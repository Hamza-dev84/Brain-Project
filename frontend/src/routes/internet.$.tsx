import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL: /internet/* -> /services/internet/*
export const Route = createFileRoute("/internet/$")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: `/services/internet/${params._splat ?? ""}`.replace(/\/$/, ""), statusCode: 301 });
  },
});
