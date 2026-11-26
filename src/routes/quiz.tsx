import { createFileRoute } from "@tanstack/react-router";
import { Quiz } from "@/components/pumi/quiz";
export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Quiz de destinos" },
      {
        name: "description",
        content: "Explore destinos de acordo com seu idioma, orçamento, cultura e objetivos.",
      },
      { property: "og:title", content: "DRI Unifor | Quiz de destinos" },
      {
        property: "og:description",
        content: "Explore destinos de acordo com seu idioma, orçamento, cultura e objetivos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Quiz,
});
