import { createFileRoute } from "@tanstack/react-router";
import campus from "@/assets/campus.asset.json";
import { Home } from "@/components/pumi/home";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Seu próximo capítulo é internacional" },
      {
        name: "description",
        content:
          "Descubra destinos, oportunidades e orientação para viver a Unifor sem fronteiras.",
      },
      { property: "og:title", content: "DRI Unifor | Internacionalização" },
      {
        property: "og:description",
        content: "De Fortaleza para o mundo: mobilidade acadêmica, pesquisa e cooperação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: campus.url },
      { name: "twitter:image", content: campus.url },
    ],
  }),
  component: Home,
});
