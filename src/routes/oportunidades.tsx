import { createFileRoute } from "@tanstack/react-router";
import { Catalog } from "@/components/pumi/catalog";
export const Route = createFileRoute("/oportunidades")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { tab?: string; country?: string; audience?: string } => ({
    ...(typeof search["tab"] === "string" ? { tab: search["tab"] } : {}),
    ...(typeof search["country"] === "string" ? { country: search["country"] } : {}),
    ...(typeof search["audience"] === "string" ? { audience: search["audience"] } : {}),
  }),
  head: () => ({
    meta: [
      { title: "DRI Unifor | Oportunidades e instituições" },
      {
        name: "description",
        content: "Encontre editais, programas e instituições para a sua jornada internacional.",
      },
      { property: "og:title", content: "DRI Unifor | Oportunidades e instituições" },
      {
        property: "og:description",
        content: "Encontre editais, programas e instituições para a sua jornada internacional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Catalog,
});
