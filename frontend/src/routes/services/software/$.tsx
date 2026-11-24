import { createFileRoute } from "@tanstack/react-router";
import NotFound from "@/components/software/pages/NotFound";

export const Route = createFileRoute("/services/software/$")({
  head: () => ({
    meta: [
      { title: "Page Not Found | BrainSOFT" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFound,
});
