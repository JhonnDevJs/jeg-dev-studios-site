
// --- 1. METADATOS DE LA PÁGINA ---
export const metadata = {
	title: "Consultoría SEO Web y Servicios On-Page | JEG Dev Studios",
	description:
		"Ofrecemos servicios de consultoría SEO web. Realizamos una auditoría SEO y optimizamos tu sitio (on-page) para generar tráfico orgánico y clientes potenciales.",
	keywords:
		"consultoría seo web, servicios de seo on page, auditoría seo, seo on page, estrategias de seo, tráfico orgánico, posicionamiento web, consultor seo en méxico, agencia seo",
	alternates: {
		canonical: "https://www.jegdevstudios.com/servicios/seo/web",
	},
	openGraph: {
		title: "JEG Dev Studios | Consultoría SEO Web y Estrategias On-Page",
		description:
			"Servicios de posicionamiento web a nivel nacional. Optimizamos tu sitio para dominar el resultado de búsqueda y atraer tráfico orgánico de alta calidad.",
		url: "https://www.jegdevstudios.com/servicios/seo/web",
		images: [
			{
				url: "/img-SEO/og-background-serv-seo-web.webp", // <-- DEBES CREAR ESTA IMAGEN OG
				width: 1200,
				height: 630,
				alt: "Servicios de Consultoría SEO Web y On-Page",
			},
		],
		locale: "es_MX",
		type: "website",
	},
};

import SeoWebClient from "./SeoWebClient";

export default function SeoWebPage() {
	return <SeoWebClient />;
}