export const metadata = {
  title: "Contacto | JEG Dev Studios",
  description:
    "Contáctanos para consultas, soporte o información sobre nuestros servicios de desarrollo web, software, apps y videojuegos.",
  keywords:
    "contacto, soporte, consultas, JEG Dev Studios, desarrollo web, desarrollo de software, desarrollo de apps, desarrollo de videojuegos",
  openGraph: {
    title: "Contacto | JEG Dev Studios",
    description:
      "Contáctanos para consultas, soporte o información sobre nuestros servicios.",
    url: "https://jegdevstudios.com/contact",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/metabackground.webp",
        width: 1200,
        height: 630,
        alt: "Contacto JEG Dev Studios",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

import ContactClient from "./ContactClient";

export default function ContactPage() {
  return <ContactClient />;
}
