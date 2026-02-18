import type { Metadata } from "next";
import PublicidadClient from "./PublicidadClient";

export const metadata: Metadata = {
  title: "Diseño Publicitario y Editorial | Campañas Creativas que Venden",
  description:
    "Diseño gráfico para publicidad, redes sociales, catálogos y material impreso. Creamos piezas visuales que captan la atención y comunican tu mensaje.",
  keywords: [
    "diseño publicitario",
    "diseño editorial",
    "diseño para redes sociales",
    "catálogos digitales",
    "publicidad creativa",
  ],
};

export default function PublicidadPage() {
  return <PublicidadClient />;
}
