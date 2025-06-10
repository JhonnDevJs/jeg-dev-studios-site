export const metadata = {
  title: "Contáctanos | JEG Dev Studios",
  description:
    "Solicita tu presupuesto o asesoría digital. Contáctanos hoy y comencemos a desarrollar tu página web, app o software a medida.",
  keywords:
    "contacto JEG Dev Studios, contratar desarrollador web, agencia de desarrollo en México, presupuesto desarrollo web, formulario de contacto, asesoría digital, contacto agencia digital, soporte técnico, desarrollador freelance México",
  openGraph: {
    title: "Contáctanos | JEG Dev Studios",
    description:
      "¿Listo para impulsar tu negocio? Contáctanos y obtén asesoría para crear tu sitio web, app o solución digital personalizada.",
    url: "https://www.jegdevstudios.com/contacto",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/metabackground.webp",
        width: 1200,
        height: 630,
        alt: "Formulario de Contacto JEG Dev Studios",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jegdevstudios.com/contacto",
  },
};

import ContactClient from "./ContactClient";

export default function ContactPage() {
  return <ContactClient />;
}
