import { createFileRoute } from "@tanstack/react-router";
import { Student } from "@/components/pumi/student";
export const Route = createFileRoute("/minha-dri")({
  head: () => ({
    meta: [
      { title: "DRI Unifor | Minha DRI" },
      { name: "description", content: "Acompanhe seus interesses e as orientações da DRI." },
      { property: "og:title", content: "DRI Unifor | Minha DRI" },
      { property: "og:description", content: "Acompanhe seus interesses e as orientações da DRI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Student,
});
