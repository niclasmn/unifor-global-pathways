import { createFileRoute } from "@tanstack/react-router";
import { Outbound } from "@/components/pumi/guides";
export const Route = createFileRoute("/guias")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Guia de mobilidade de saída" },
      {
        name: "description",
        content: "Da documentação ao embarque: planeje visto, proficiência e seguros.",
      },
      { property: "og:title", content: "DRI Unifor | Guia de mobilidade de saída" },
      {
        property: "og:description",
        content: "Da documentação ao embarque: planeje visto, proficiência e seguros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Outbound,
});
