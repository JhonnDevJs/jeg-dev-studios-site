export const metadata = {
  // TÍTULO MEJORADO: Fuerte, claro y con la keyword principal
  title: "Creación de Sitios Web Profesionales | JEG Dev Studios",
  
  // DESCRIPCIÓN MEJORADA: Resuelve la intención de búsqueda (paquetes)
  description:
    "Ofrecemos el servicio de desarrollo de sitios web profesionales a medida. Creamos tu sitio web corporativo o para tu pequeña empresa. Cotiza tu proyecto.",
  
  // KEYWORDS MEJORADAS: Enfocadas 100% en esta página
  keywords:
    "creación de sitios web profesionales, servicio de desarrollo de sitios web, web profesional",
  
  alternates: {
    canonical: "https://www.jegdevstudios.com/servicios/desarrollo/web",
  },
  
  openGraph: {
    // OG MEJORADO
    title: "JEG Dev Studios | Creación de Sitios Web Profesionales a Medida",
    description: "Deja atrás a los creadores de sitios web gratis. Ofrecemos un servicio de desarrollo de sitios web profesionales que posicionan en buscadores y funcionan en dispositivos móviles.",
    url: "https://www.jegdevstudios.com/servicios/desarrollo/web/sitios-web",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/og-background-serv-dev-web.webp",
        width: 1200,
        height: 630,
        alt: "Paquetes de Desarrollo de Páginas Web en México",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  // Tu 'twitter' y el resto de 'metadata' están bien
};

import SitiosWebClient from "./SitiosWebClient";

export default function DevWebPage() {
  return <SitiosWebClient />;
}
