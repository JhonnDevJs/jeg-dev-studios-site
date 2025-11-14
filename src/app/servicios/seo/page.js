export const metadata = {
	// TÍTULO MEJORADO: Incluye las 2 keywords que pide SEMrush
	title: "Agencia de SEO en México | Servicios de Posicionamiento SEO",

	description:
		"Somos una agencia de SEO en México. Ofrecemos servicios de SEO Web, Local y GEO (Optimización IA) para atraer clientes potenciales y tráfico orgánico. ¡Solicita tu auditoría!",

	// KEYWORDS MEJORADAS: Enriquecidas con los nuevos términos
	keywords:
		"agencia de seo en mexico, servicios de posicionamiento seo, agencia de posicionamiento seo en mexico, consultoría seo, SEO Web, SEO Local, GEO, tráfico orgánico, marketing digital",

	openGraph: {
		// OG MEJORADO
		title: "JEG Dev Studios | Tu Agencia de SEO en México",
		description:
			"Ofrecemos servicios de posicionamiento SEO en México: SEO Web, Local y GEO para generar tráfico orgánico y clientes potenciales.",
		url: "https://www.jegdevstudios.com/servicios/seo",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-serv-seo.webp",
				width: 1200,
				height: 630,
				alt: "Agencia de SEO en México - JEG Dev Studios", // Alt más descriptivo
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
