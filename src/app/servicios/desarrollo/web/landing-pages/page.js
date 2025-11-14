
// --- 1. METADATOS DE LA PÁGINA ---
export const metadata = {
  title: "Desarrollo de Landing Pages de Alta Conversión | JEG Dev Studios",
  description:
    "Servicio de desarrollo de landing pages (páginas de aterrizaje) enfocadas en una alta tasa de conversión. Optimizamos tu página para captar clientes potenciales.",
  keywords:
    "desarrollo de landing pages, diseño de landing page de alta conversión, creación de páginas de aterrizaje, optimizar landing page, landing page para campañas de marketing, landing page exitosa",
  alternates: {
    canonical:
      "https://www.jegdevstudios.com/servicios/desarrollo/web/landing-pages",
  },
  openGraph: {
    title: "JEG Dev Studios | Desarrollo de Landing Pages Exitosas",
    description:
      "Servicio de desarrollo de páginas de aterrizaje (landing pages) 100% enfocadas en mejorar tu tasa de conversión y captar clientes potenciales.",
    url: "https://www.jegdevstudios.com/servicios/desarrollo/web/landing-pages",
    images: [
      {
        url: "/img-SEO/og-background-serv-landing.webp",
        width: 1200,
        height: 630,
        alt: "Servicio de Desarrollo de Landing Pages de Alta Conversión",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};


import LandingPClient from "./LandingPClient";

export default function DevWebPage() {
  return <LandingPClient />;
}
