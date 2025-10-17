export const metadata = {
	title: "Servicios de Diseño Gráfico y Digital | JEG Dev Studios México",
	description:
		"Somos una agencia de diseño gráfico en México. Creamos logotipos, branding y experiencias de usuario (UX/UI) que conectan tu marca con tus clientes.",
	keywords:
		"Servicios de diseño gráfico y digital, Agencia de diseño gráfico en México",
	openGraph: {
		title: "Servicios de Diseño Gráfico y Digital | JEG Dev Studios México",
		description:
			"Somos una agencia de diseño gráfico en México. Creamos logotipos, branding y experiencias de usuario (UX/UI) que conectan tu marca con tus clientes.",
		url: "https://www.jegdevstudios.com/servicios/diseno",
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
		canonical: "https://www.jegdevstudios.com/servicios/diseno",
	},
};

import DisenoClient from "./DisenoClient";

export default function ServicesPage() {
	return <DisenoClient />;
}
