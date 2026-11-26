import { createFileRoute } from "@tanstack/react-router";
import { Management } from "@/components/pumi/admin";
export const Route = createFileRoute("/gestao")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Gestão DRI" },
      {
        name: "description",
        content: "Prepare conteúdos e acompanhe interesses com governança institucional.",
      },
      { property: "og:title", content: "DRI Unifor | Gestão DRI" },
      {
        property: "og:description",
        content: "Prepare conteúdos e acompanhe interesses com governança institucional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Management,
});
