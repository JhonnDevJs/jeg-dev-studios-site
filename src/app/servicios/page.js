export const metadata = {
  title: "Soluciones de Desarrollo Digital para Empresas | JEG Dev Studios México",
  description:
    "Consultoría y desarrollo digital para empresas en México: creamos sitios web, apps móviles y software empresarial con soluciones modernas y escalables.",
  keywords:
    "servicios desarrollo web México, desarrollo aplicaciones móviles México, software empresarial México, agencia desarrollo digital México, desarrollo web profesional, soluciones digitales empresariales, desarrollo software a medida, apps móviles profesionales, diseño web responsivo, desarrollo tecnológico México",
  openGraph: {
    title: "Desarrollo Digital para Empresas en México | JEG Dev Studios",
    description:
      "Creamos soluciones digitales para empresas: sitios web profesionales, apps móviles y software a medida. Asesoría experta y desarrollo escalable en México.",
    url: "https://www.jegdevstudios.com/servicios",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/metabackground.webp",
        width: 1200,
        height: 630,
        alt: "Servicios de JEG Dev Studios",
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