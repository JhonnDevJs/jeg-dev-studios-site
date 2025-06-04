export const metadata = {
  title: "Sobre Nosotros | JEG Dev Studios",
  description:
    "Descubre quiénes somos en JEG Dev Studios: nuestra historia, misión, visión, valores, equipo y los servicios que ofrecemos en desarrollo web, apps y videojuegos.",
  keywords:
    "sobre nosotros, quiénes somos, historia JEG Dev Studios, misión JEG Dev Studios, visión JEG Dev Studios, valores empresariales, equipo de desarrollo, desarrollo web, aplicaciones móviles, desarrollo de videojuegos, soluciones digitales, estudio de desarrollo, tecnología creativa, JEG Dev Studios México",
  openGraph: {
    title: "Sobre Nosotros | JEG Dev Studios",
    description:
      "Conoce a JEG Dev Studios: nuestra historia, misión, visión, valores, equipo y servicios de desarrollo digital a medida.",
    url: "https://www.jegdevstudios.com/about",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/metabackground.webp",
        width: 1200,
        height: 630,
        alt: "Equipo y misión de JEG Dev Studios",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};


import AboutClient from "./AboutClient";

export default function AboutUs() {
  return <AboutClient />;
}
