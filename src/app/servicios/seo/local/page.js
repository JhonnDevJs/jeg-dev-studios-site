
// --- 1. METADATOS DE LA PÁGINA ---
export const metadata = {
  title: "Agencia de SEO Local en México | Posicionamiento Google Maps",
  description:
    "Somos una agencia de SEO local. Optimizamos tu Perfil de Google (Google My Business) para dominar las búsquedas locales en Google Maps y atraer clientes.",
  keywords:
    "agencia de seo local, seo local, posicionamiento en google maps, optimización google business profile, seo local en méxico, google my business",
  alternates: {
    canonical: "https://www.jegdevstudios.com/servicios/seo/local",
  },
  openGraph: {
    title: "JEG Dev Studios | Agencia de SEO Local en México",
    description:
      "Aumenta la visibilidad de tu negocio físico. Dominamos el SEO Local y Google Maps para que los clientes te encuentren en tu ciudad.",
    url: "https://www.jegdevstudios.com/servicios/seo/local",
    images: [
      {
        url: "/img-SEO/og-background-serv-seo-local.webp", // <-- DEBES CREAR ESTA IMAGEN OG
        width: 1200,
        height: 630,
        alt: "Servicio de Agencia de SEO Local en México",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

import SeoLocalClient from "./SeoLocalClient";

export default function SeoLocal() {
  return <SeoLocalClient />;
}