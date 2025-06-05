export const metadata = {
  title: "Servicios de Desarrollo Web | JEG Dev Studios",
  description:
    "Contrata servicios de desarrollo web profesionales: sitios empresariales, e-commerce y landing pages con diseño moderno y funcional.",
  keywords:
    "contratar desarrollo de aplicaciones, crear aplicación profesional, diseño de aplicaciones, creación de apps, creación de aplicaciones de tiendas, desarrollo de aplicaciones en México, soluciones digitales personalizadas, aplicación empresarial, servicios de desarrollo de apps, JEG Dev Studios",
  alternates: {
    canonical: "https://www.jegdevstudios.com/servicios/desarrollo-aplicaciones",
  },
  openGraph: {
    title: "Servicios de Desarrollo Web | JEG Dev Studios",
    description: "Descubre nuestros servicios de desarrollo web",
    url: "https://www.jegdevstudios.com/servicios/desarrollo-aplicaciones",
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

import DevAppClient from "./DevAppClient";
import "./DevAppClient.css";

export default function DevWebPage() {
  return <DevAppClient />;
}