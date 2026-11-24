import { createFileRoute } from "@tanstack/react-router";
import RecruitmentPortal from "@/components/software/pages/casestudies/RecruitmentPortal";

const title = "Recruitment Portal: Automated HR System | BrainSOFT";
const description = "BrainSOFT's recruitment portal with Zoho integration. Automated applicant tracking, real-time updates & email notifications.";

export const Route = createFileRoute("/services/software/case-studies/recruitment-portal")({
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
  component: RecruitmentPortal,
});
