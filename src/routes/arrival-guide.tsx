import { createFileRoute } from "@tanstack/react-router";
import { Arrival } from "@/components/pumi/guides";
export const Route = createFileRoute("/arrival-guide")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Your arrival guide" },
      {
        name: "description",
        content:
          "Your world. Your Unifor. Essential information for international students in Fortaleza.",
      },
      { property: "og:title", content: "DRI Unifor | Your arrival guide" },
      {
        property: "og:description",
        content:
          "Your world. Your Unifor. Essential information for international students in Fortaleza.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content: "/__l5e/assets-v1/6b5ff497-c493-43ef-9510-96ed3117f834/international-students.png",
      },
      {
        name: "twitter:image",
        content: "/__l5e/assets-v1/6b5ff497-c493-43ef-9510-96ed3117f834/international-students.png",
      },
    ],
  }),
  component: Arrival,
});
