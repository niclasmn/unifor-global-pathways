import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/pumi/info";
export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Sobre a DRI" },
      {
        name: "description",
        content: "Agir local. Pensar global. Conheça a Diretoria de Relações Internacionais.",
      },
      { property: "og:title", content: "DRI Unifor | Sobre a DRI" },
      {
        property: "og:description",
        content: "Agir local. Pensar global. Conheça a Diretoria de Relações Internacionais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});
