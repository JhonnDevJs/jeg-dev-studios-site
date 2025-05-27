export const metadata = {
  title: "Servicios de Desarrollo Web | JEG Dev Studios",
  description:
    "Descubre nuestros servicios de desarrollo web, software, apps y videojuegos. Soluciones digitales a medida para tu negocio.",
  keywords:
    "servicios desarrollo web, desarrollo de software, desarrollo de apps, desarrollo de videojuegos, soluciones digitales, JEG Dev Studios",
  openGraph: {
    title: "Servicios de Desarrollo Web | JEG Dev Studios",
    description:
      "Descubre nuestros servicios de desarrollo web, software, apps y videojuegos.",
    url: "https://jegdevstudios.com/services",
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

import ServicesClient from "./ServicesClient";

export default function ServicesPage() {
  return <ServicesClient />;
}