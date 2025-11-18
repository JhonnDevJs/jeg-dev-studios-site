export const metadata = {
  title: "Agencia de SEO en México | Servicios de Posicionamiento SEO",
  description:
    "Somos una agencia de SEO en México. Ofrecemos servicios de SEO Web, Local y GEO (Optimización IA) para atraer clientes potenciales y tráfico orgánico.",
  keywords:
    "agencia de seo en mexico, servicios de posicionamiento seo, consultoría seo, seo web, seo local, geo, tráfico orgánico, marketing digital",
  openGraph: {
    title: "Agencia de SEO en México | Servicios de Posicionamiento SEO",
    description:
      "Aumentamos tu visibilidad en Google y en las nuevas respuestas de IA. Conoce nuestros servicios de posicionamiento SEO y GEO.",
    url: "https://www.jegdevstudios.com/servicios/seo",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/og-background-serv-seo.webp",
        width: 1200,
        height: 630,
        alt: "Servicios de SEO en México - JEG Dev Studios",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jegdevstudios.com/servicios/seo",
  },
};

import SeoClient from "./SeoClient";

export default function ServicesPage() {
	return <SeoClient />;
}
