export const metadata = {
  title: "Sobre Nosotros | JEG Dev Studios",
  description:
    "Conoce la historia, misión, visión y valores de JEG Dev Studios. Transformamos ideas en experiencias digitales inolvidables.",
  keywords:
    "sobre nosotros, quiénes somos, historia, misión, visión, valores, JEG Dev Studios, desarrollo digital",
  openGraph: {
    title: "Sobre Nosotros | JEG Dev Studios",
    description:
      "Conoce la historia, misión, visión y valores de JEG Dev Studios.",
    url: "https://www.jegdevstudios.com/about",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/metabackground.webp",
        width: 1200,
        height: 630,
        alt: "Sobre Nosotros JEG Dev Studios",
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
