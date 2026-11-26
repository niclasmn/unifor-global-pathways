import { createFileRoute } from "@tanstack/react-router";
import { AccessibilityPage } from "@/components/pumi/info";
export const Route = createFileRoute("/acessibilidade")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Acessibilidade" },
      { name: "description", content: "Leitura e navegação acessíveis no portal DRI Unifor." },
      { property: "og:title", content: "DRI Unifor | Acessibilidade" },
      {
        property: "og:description",
        content: "Leitura e navegação acessíveis no portal DRI Unifor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccessibilityPage,
});
