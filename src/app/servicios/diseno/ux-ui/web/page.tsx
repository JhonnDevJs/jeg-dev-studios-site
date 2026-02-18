import type { Metadata } from "next";
import UxUiWebClient from "./UxUiWebClient";

export const metadata: Metadata = {
  title: "Diseño UX/UI Web y Móvil | Interfaces Centradas en el Usuario",
  description:
    "Diseño de interfaces web y aplicaciones móviles con enfoque en experiencia de usuario (UX/UI). Prototipado en Figma y diseño de sistemas visuales.",
  keywords: [
    "diseño ux ui",
    "diseño de interfaces",
    "diseño web centrado en el usuario",
    "prototipado figma",
    "diseño de aplicaciones móviles",
  ],
};

export default function UxUiWebPage() {
  return <UxUiWebClient />;
}
