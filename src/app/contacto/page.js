export const metadata = {
  title: "Contáctanos | JEG Dev Studios",
  description:
    "¿Tienes preguntas o necesitas un proyecto digital? Ponte en contacto con JEG Dev Studios. Resolvemos tus dudas y te asesoramos para impulsar tu negocio.",
  keywords:
    "contacto JEG Dev Studios, contactar desarrollador web, asesoría desarrollo web, presupuesto desarrollo, contacto agencia digital, soporte técnico, formulario de contacto",
  openGraph: {
    title: "Contáctanos | JEG Dev Studios",
    description:
      "Comunícate con nosotros para recibir asesoría personalizada sobre desarrollo web, software o soporte.",
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
};


import ContactClient from "./ContactClient";

export default function ContactPage() {
  return <ContactClient />;
}
