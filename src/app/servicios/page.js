export const metadata = {
  // TÍTULO MEJORADO: Alineado con SEMrush
  title: "Agencia de Desarrollo Digital en México | Servicios Web, SEO y Diseño",
  // DESCRIPCIÓN MEJORADA: Fuerte y clara
  description:
    "Somos una agencia de desarrollo digital en México. Ofrecemos servicios integrales de desarrollo de software, posicionamiento SEO, GEO y diseño UX/UI. Cotiza tu proyecto.",
  keywords:
    "agencia de desarrollo digital, servicios de desarrollo digital, agencia de software, agencia de seo, agencia de diseño ux ui, soluciones digitales",
  openGraph: {
    // OG MEJORADO
    title: "JEG Dev Studios | Tu Agencia de Desarrollo Digital en México",
    description:
      "Ofrecemos servicios integrales de desarrollo web, software, posicionamiento SEO, GEO y diseño UX/UI.",
    url: "https://www.jegdevstudios.com/servicios",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/og-background-servicios.webp",
        width: 1200,
        height: 630,
        alt: "Agencia de Desarrollo Digital en México - JEG Dev Studios",
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

export default function ServicesPage() {
	return <ServicesClient />;
}
