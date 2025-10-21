export const metadata = {
	title: "Proyectos | JEG Dev Studios",
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

export default function ProyectsPage() {
	return <ProjectsClient />;
}
