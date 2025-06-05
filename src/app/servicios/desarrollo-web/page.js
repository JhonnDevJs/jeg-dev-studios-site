export const metadata = {
  title: "Servicios de Desarrollo Web | JEG Dev Studios",
  description:
    "Contrata servicios de desarrollo web profesionales: sitios empresariales, e-commerce y landing pages con diseño moderno y funcional.",
  keywords:
    "contratar desarrollo web, crear sitio web profesional, diseño de páginas web, creación de landing pages, creación de tiendas en línea, desarrollo web en México, soluciones digitales personalizadas, sitio web empresarial, servicios de desarrollo web, JEG Dev Studios",
  alternates: {
    canonical: "https://www.jegdevstudios.com/servicios/desarrollo-web",
  },
  openGraph: {
    title: "Servicios de Desarrollo Web | JEG Dev Studios",
    description: "Descubre nuestros servicios de desarrollo web",
    url: "https://www.jegdevstudios.com/servicios/desarrollo-web",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/metabackground.webp",
        width: 1200,
        height: 630,
        alt: "Servicios JEG Dev Studios",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

import DevWebClient from "./DevWebClient";
import "./DevWebClient.css";

export default function DevWebPage() {
  return <DevWebClient />;
}