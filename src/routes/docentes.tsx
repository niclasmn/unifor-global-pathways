import { createFileRoute } from "@tanstack/react-router";
import { Faculty } from "@/components/pumi/faculty";
export const Route = createFileRoute("/docentes")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Docentes e pesquisa" },
      {
        name: "description",
        content: "Conhecimento sem fronteiras. Cooperação e publicação científica internacional.",
      },
      { property: "og:title", content: "DRI Unifor | Docentes e pesquisa" },
      {
        property: "og:description",
        content: "Conhecimento sem fronteiras. Cooperação e publicação científica internacional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faculty,
});
