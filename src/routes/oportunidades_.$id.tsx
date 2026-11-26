import { createFileRoute } from "@tanstack/react-router";
import { Detail } from "@/components/pumi/detail";
export const Route = createFileRoute("/oportunidades_/$id")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Detalhe da oportunidade" },
      {
        name: "description",
        content: "Confira o edital, os critérios preliminares e registre seu interesse.",
      },
      { property: "og:title", content: "DRI Unifor | Detalhe da oportunidade" },
      {
        property: "og:description",
        content: "Confira o edital, os critérios preliminares e registre seu interesse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Detail,
});
