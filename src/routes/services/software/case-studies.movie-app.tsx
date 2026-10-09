import { createFileRoute } from "@tanstack/react-router";
import MovieApp from "@/components/software/pages/casestudies/MovieApp";

const title = "Movie App: Film Discovery Platform | BrainSOFT";
const description = "BrainSOFT's React Native movie app with personalized recommendations, reviews & fast cross-platform performance. iOS & Android ready.";

export const Route = createFileRoute("/services/software/case-studies/movie-app")({
  // head: () => ({
  //   meta: [
  //     { title },
  //     { name: "description", content: description },
  //     { property: "og:title", content: title },
  //     { property: "og:description", content: description },
  //     { property: "og:type", content: "website" },
  //     { name: "twitter:card", content: "summary_large_image" },
  //   ],
  // }),
  component: MovieApp,
});
