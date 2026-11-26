import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/pumi/info";
export const Route = createFileRoute("/contatos")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Contatos" },
      {
        name: "description",
        content: "Orientação e atendimento da Diretoria de Relações Internacionais.",
      },
      { property: "og:title", content: "DRI Unifor | Contatos" },
      {
        property: "og:description",
        content: "Orientação e atendimento da Diretoria de Relações Internacionais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});
