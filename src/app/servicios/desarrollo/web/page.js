export const metadata = {
  // TÍTULO MEJORADO: Fuerte, claro y con la keyword principal
  title: "Desarrollo de Páginas Web Profesionales en México | Paquetes",
  
  // DESCRIPCIÓN MEJORADA: Resuelve la intención de búsqueda (paquetes)
  description:
    "Servicios de desarrollo de páginas web a medida. Conoce nuestros paquetes de sitios web profesionales (Ignite, Accelerate) y soluciones de arranque (Mini Sitio).",
  
  // KEYWORDS MEJORADAS: Enfocadas 100% en esta página
  keywords:
    "desarrollo de páginas web, paquetes de desarrollo web, desarrollo web profesional, agencias de sitios web, crear sitio web profesional, sitio web empresarial, servicios de desarrollo web",
  
  alternates: {
    canonical: "https://www.jegdevstudios.com/servicios/desarrollo/web",
  },
  
  openGraph: {
    // OG MEJORADO
    title: "Desarrollo de Páginas Web Profesionales | JEG Dev Studios",
    description: "Ofrecemos paquetes de desarrollo web a medida, desde Mini Sitios hasta soluciones 'Ultimate' en Next.js con performance garantizado.",
    url: "https://www.jegdevstudios.com/servicios/desarrollo/web",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/og-background-serv-dev-web.webp",
        width: 1200,
        height: 630,
        alt: "Paquetes de Desarrollo de Páginas Web en México",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  // Tu 'twitter' y el resto de 'metadata' están bien
};

import DevWebClient from "./DevWebClient";

export default function DevWebPage() {
	return <DevWebClient />;
}
