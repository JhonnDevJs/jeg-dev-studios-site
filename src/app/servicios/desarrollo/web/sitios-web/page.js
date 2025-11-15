export const metadata = {
  title: "Desarrollo de Sitios Web Corporativos | JEG Dev Studios",
  description:
    "Servicio de desarrollo de sitios web corporativos y empresariales a medida. Creamos una presencia digital robusta para tu negocio, optimizada para SEO y escalable.",
  keywords:
    "desarrollo de sitios web corporativos, servicio de desarrollo de sitios web, sitio web empresarial, creación de sitios web profesionales, web profesional",
  alternates: {
    canonical:
      "https://www.jegdevstudios.com/servicios/desarrollo/web/sitios-web",
  },
  openGraph: {
    title: "JEG Dev Studios | Desarrollo de Sitios Web Corporativos a Medida",
    description:
      "Ofrecemos un servicio de desarrollo de sitios web para empresas, enfocados en rendimiento, SEO y un diseño de alta calidad que genera confianza.",
    url: "https://www.jegdevstudios.com/servicios/desarrollo/web/sitios-web",
    images: [
      {
        url: "/img-SEO/og-background-serv-sitios-web.webp", // <-- RECOMENDADO: Crear una imagen OG para esta página
        width: 1200,
        height: 630,
        alt: "Servicio de Desarrollo de Sitios Web Corporativos",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

import SitiosWebClient from "./SitiosWebClient";

export default function DevWebPage() {
  return <SitiosWebClient />;
}
