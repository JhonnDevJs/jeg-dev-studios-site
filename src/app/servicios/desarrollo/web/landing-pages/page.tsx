export const metadata = {
	title: "Diseño de Landing Page de Alta Conversión | JEG Dev Studios",
	description:
		"Servicio de creación de páginas de aterrizaje (landing pages). Nos enfocamos en optimizar tu landing page para aumentar las conversiones de tus campañas de marketing.",
	keywords:
		"diseño de landing page de alta conversión, creación de páginas de aterrizaje, optimizar landing page, landing page para campañas de marketing, captar clientes potenciales, desarrollo de landing pages",
	alternates: {
		canonical:
			"https://www.jegdevstudios.com/servicios/desarrollo/web/landing-pages",
	},
	openGraph: {
		title: "JEG Dev Studios | Diseño de Landing Pages de Alta Conversión",
		description:
			"Servicio de creación de páginas de aterrizaje 100% enfocadas en mejorar tu tasa de conversión y captar clientes potenciales.",
		url: "https://www.jegdevstudios.com/servicios/desarrollo/web/landing-pages",
		images: [
			{
				url: "/img-SEO/og-background-serv-landing.webp",
				width: 1200,
				height: 630,
				alt: "Servicio de Diseño de Landing Page de Alta Conversión",
			},
		],
		locale: "es_MX",
		type: "website",
	},
};

import LandingPClient from "./LandingPClient";

export default function DevWebPage() {
	return <LandingPClient />;
}
