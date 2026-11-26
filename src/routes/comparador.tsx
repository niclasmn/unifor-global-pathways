import { createFileRoute } from "@tanstack/react-router";
import { Comparison } from "@/components/pumi/quiz";
export const Route = createFileRoute("/comparador")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Comparador de destinos" },
      { name: "description", content: "Compare caminhos e escolha com clareza." },
      { property: "og:title", content: "DRI Unifor | Comparador de destinos" },
      { property: "og:description", content: "Compare caminhos e escolha com clareza." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Comparison,
});
