export const metadata = {
  title: "Servicio de desarrollo de aplicaciones modernas | JEG Dev Studios",
  description:
    "Somos los expertos en el desarrollo deaplicaciones en México, ofrecemos soluciones personalizadas que impulsan tu proyecto para Android e iOS.",
  keywords: "desarrollo de aplicaciones móviles, crear app móvil, contratar desarrollo de aplicaciones, diseño de apps personalizadas, apps Android y iOS, creación de aplicaciones profesionales, desarrollo de aplicaciones en México, soluciones digitales personalizadas, aplicación empresarial, JEG Dev Studios",
  alternates: {
    canonical: "https://www.jegdevstudios.com/servicios/desarrollo-aplicaciones",
  },
  openGraph: {
    title: "Servicio de desarrollo de aplicaciones modernas | JEG Dev Studios",
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

export default function DevWebPage() {
  return <DevAppClient />;
}