export const metadata = {
  title: "Servicios de Desarrollo Web y Software | JEG Dev Studios",
  description:
    "Explora nuestros paquetes de servicios personalizados en desarrollo web, aplicaciones móviles y software de escritorio. Calidad, innovación y soluciones digitales a medida para tu negocio.",
  keywords:
    "servicios JEG Dev Studios, desarrollo web profesional, paquetes de desarrollo web, aplicaciones móviles, desarrollo de software, diseño responsivo, soluciones digitales, landing page, páginas corporativas, tiendas online, apps móviles, software personalizado, estudio de desarrollo, agencia de tecnología",
  openGraph: {
    title: "Servicios de Desarrollo Web y Software | JEG Dev Studios",
    description:
      "Conoce nuestros paquetes de desarrollo web, apps y software. Soluciones digitales innovadoras adaptadas a tus necesidades.",
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
};


import ServicesClient from "./ServicesClient";

export default function ServicesPage() {
  return <ServicesClient />;
}