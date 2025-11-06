export const metadata = {
	title: "Agencia de SEO en México | Posicionamiento Web y GEO | JEG Dev Studios",
	description:
		"Somos una agencia de SEO en México. Ofrecemos servicios de SEO Web, Local y GEO (Optimización IA) para atraer más clientes a tu negocio. ¡Solicita tu auditoría!",
	keywords:
		"Servicios de posicionamiento SEO, Agencia de posicionamiento SEO en México",
	openGraph: {
		title: "JEG Dev Studios | Agencia de SEO en México: Estrategias Web, Local y GEO",
		description:
			"Aumentamos tu visibilidad en Google y en las nuevas respuestas de IA. Conoce nuestros servicios de posicionamiento SEO y GEO.",
		url: "https://www.jegdevstudios.com/servicios/seo",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-serv-seo.webp",
				width: 1200,
				height: 630,
				alt: "Servicios de JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
	},
	alternates: {
		canonical: "https://www.jegdevstudios.com/servicios/seo",
	},
};

import SeoClient from "./SeoClient";

export default function ServicesPage() {
	return <SeoClient />;
}
