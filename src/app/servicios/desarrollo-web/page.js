export const metadata = {
  title: "Servicios de Desarrollo Web | JEG Dev Studios",
  description:
    "Descubre nuestros servicios de desarrollo web. Soluciones digitales a medida para tu negocio con las mejores tecnologías actuales.",
  keywords:
    "servicios desarrollo web, creacion de sitios web, creacion de landing pages, creacion de e-commerce, adquiere tu sitio web empresarial, soluciones digitales, JEG Dev Studios",
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