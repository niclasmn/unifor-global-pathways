import { createFileRoute } from "@tanstack/react-router";
import { Marketing } from "@/components/pumi/admin";
export const Route = createFileRoute("/marketing")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Revisão editorial Marketing" },
      {
        name: "description",
        content: "Valide e aprove conteúdos institucionais antes de publicar.",
      },
      { property: "og:title", content: "DRI Unifor | Revisão editorial Marketing" },
      {
        property: "og:description",
        content: "Valide e aprove conteúdos institucionais antes de publicar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Marketing,
});
