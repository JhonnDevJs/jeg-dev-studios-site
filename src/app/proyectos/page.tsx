// Import Custom Hooks

import { getPageFaqs } from "@/lib/data-service.";

export const metadata = {
	title: "Conoce nuestro portafolio de Proyectos | JEG Dev Studios",
	description:
		"Explora nuestros mejores proyectos web, móviles, de escritorio y videojuegos desarrollados por JEG Dev Studios.",
	keywords:
		"proyectos, desarrollo web, desarrollo móvil, desarrollo de escritorio, videojuegos, JEG Dev Studios",
	openGraph: {
		title: "Proyectos | JEG Dev Studios",
		description:
			"Explora nuestros mejores proyectos desarrollados por JEG Dev Studios.",
		url: "https://www.jegdevstudios.com/proyectos",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-home.webp",
				width: 1200,
				height: 630,
				alt: "Proyectos JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
	},
	alternates: {
		canonical: "https://www.jegdevstudios.com/proyectos",
	},
};

import ProjectsClient from "./ProjectsClient";

export default async function ProyectsPage() {

	const faqs = await getPageFaqs("portafolio")
	return <ProjectsClient initialFaqs={faqs} />;
}
