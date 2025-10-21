export const metadata = {
	title: "Sobre Nosotros | JEG Dev Studios",
	description:
		"Conoce a JEG Dev Studios: historia, misión, visión y equipo detrás de nuestras soluciones en desarrollo web, apps móviles y software empresarial",
	keywords:
		"sobre nosotros, quiénes somos, historia JEG Dev Studios, misión JEG Dev Studios, visión JEG Dev Studios, valores empresariales, equipo de desarrollo, desarrollo web, aplicaciones móviles, desarrollo de videojuegos, soluciones digitales, estudio de desarrollo, tecnología creativa, JEG Dev Studios México",
	openGraph: {
		title: "Sobre Nosotros | JEG Dev Studios",
		description:
			"Conoce a JEG Dev Studios: nuestra historia, misión, visión, valores, equipo y servicios de desarrollo digital a medida.",
		url: "https://www.jegdevstudios.com/sobre-nosotros",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-home.webp",
				width: 1200,
				height: 630,
				alt: "Equipo y misión de JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
	},
	alternates: {
		canonical: "https://www.jegdevstudios.com/sobre-nosotros",
	},
};

import AboutClient from "./AboutClient";

export default function AboutUs() {
	return <AboutClient />;
}
