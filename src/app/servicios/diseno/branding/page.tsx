import type { Metadata } from "next";
import BrandingClient from "./BrandingClient";

export const metadata: Metadata = {
  title: "Agencia de Branding y Diseño de Logotipos | JEG Dev Studios",
  description:
    "Diseñamos la identidad de tu marca. Creación de logotipos, manuales de identidad y estrategia de branding para empresas que buscan destacar.",
  keywords: [
    "diseño de logotipos",
    "agencia de branding",
    "identidad corporativa",
    "manual de marca",
    "diseño gráfico méxico",
  ],
};

export default function BrandingPage() {
  return <BrandingClient />;
}
