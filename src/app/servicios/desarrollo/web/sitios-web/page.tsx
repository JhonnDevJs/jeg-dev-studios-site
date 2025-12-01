export const metadata = {
	// Título ajustado para incluir la keyword exacta que pide SEMrush
	title: "Servicio de Desarrollo de Sitios Web Profesionales | JEG Dev Studios",
	description:
		"Ofrecemos el servicio de desarrollo de sitios web corporativos y empresariales a medida. Creamos una web profesional y robusta, optimizada para SEO.",
	// Keywords ajustadas
	keywords:
		"servicio de desarrollo de sitios web, creación de sitios web profesionales, web profesional, sitios web corporativos, desarrollo web a medida",
	alternates: {
		canonical:
			"https://www.jegdevstudios.com/servicios/desarrollo/web/sitios-web",
	},
	openGraph: {
		title:
			"JEG Dev Studios | Servicio de Desarrollo de Sitios Web Profesionales",
		description:
			"Ofrecemos un servicio de desarrollo de sitios web para empresas, enfocados en rendimiento, SEO y un diseño de alta calidad.",
		url: "https://www.jegdevstudios.com/servicios/desarrollo/web/sitios-web",
		images: [
			{
				url: "/img-SEO/og-background-serv-sitios-web.webp",
				width: 1200,
				height: 630,
				alt: "Servicio de Desarrollo de Sitios Web Profesionales",
			},
		],
		locale: "es_MX",
		type: "website",
	},
};

import SitiosWebClient from "./SitiosWebClient";

export default function DevWebPage() {
	return <SitiosWebClient />;
}
