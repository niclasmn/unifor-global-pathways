import { createFileRoute } from "@tanstack/react-router";
import { Privacy } from "@/components/pumi/info";
export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Privacidade e dados" },
      {
        name: "description",
        content: "Compromisso institucional com privacidade e indicadores agregados.",
      },
      { property: "og:title", content: "DRI Unifor | Privacidade e dados" },
      {
        property: "og:description",
        content: "Compromisso institucional com privacidade e indicadores agregados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});
