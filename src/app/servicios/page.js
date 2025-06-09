export const metadata = {
  title: "Servicios de Desarrollo Web y Software | JEG Dev Studios",
  description:
    "Servicios de desarrollo web, apps móviles y software a medida. Soluciones digitales para negocios, tiendas online y landing pages profesionales.",
  keywords:
    "JEG Dev Studios, desarrollo web México, diseño de sitios web, landing pages, tiendas online, aplicaciones móviles, apps personalizadas, software a medida, soluciones digitales, servicios de desarrollo, estudio de desarrollo web, desarrollo de software México, agencia de diseño web",
  openGraph: {
    title: "Servicios de Desarrollo Web y Software | JEG Dev Studios",
    description:
      "Conoce nuestros paquetes de desarrollo web, apps y software. Soluciones digitales innovadoras adaptadas a tus necesidades.",
    url: "https://www.jegdevstudios.com/servicios",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/metabackground.webp",
        width: 1200,
        height: 630,
        alt: "Servicios de JEG Dev Studios",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jegdevstudios.com/servicios",
  },
};

import ServicesClient from "./ServicesClient";
import "./ServicesClient.css"

export default function ServicesPage() {
  return <ServicesClient />;
}