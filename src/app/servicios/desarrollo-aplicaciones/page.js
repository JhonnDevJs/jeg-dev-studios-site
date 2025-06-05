export const metadata = {
  title: "Servicios de Desarrollo de Aplicaciones Móviles | JEG Dev Studios",
  description:
    "Contrata servicios de desarrollo de aplicaciones móviles personalizadas: desde apps sencillas hasta soluciones móviles robustas para iOS y Android.",
  keywords: "desarrollo de aplicaciones móviles, crear app móvil, contratar desarrollo de aplicaciones, diseño de apps personalizadas, apps Android y iOS, creación de aplicaciones profesionales, desarrollo de aplicaciones en México, soluciones digitales personalizadas, aplicación empresarial, JEG Dev Studios",
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