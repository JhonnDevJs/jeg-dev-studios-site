export const metadata = {
	title: "Desarrollo de Software a Medida | JEG Dev Studios México",
	description:
		"Somos una agencia de desarrollo de software. Creamos soluciones web, apps móviles y sistemas empresariales a medida para optimizar tus procesos y resultados.",
	keywords:
		"Desarrollo de software a medida, Agencia de desarrollo de software",
	openGraph: {
		title: "Desarrollo Digital para Empresas en México | JEG Dev Studios",
		description:
			"Creamos soluciones digitales para empresas: sitios web profesionales, apps móviles y software a medida. Asesoría experta y desarrollo escalable en México.",
		url: "https://www.jegdevstudios.com/servicios/desarrollo",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-home.webp",
				width: 1200,
				height: 630,
				alt: "Servicios de JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
	},
	alternates: {
		canonical: "https://www.jegdevstudios.com/servicios/desarrollo",
	},
};

import DesarrolloClient from "./DesarrolloClient";

export default function ServicesPage() {
	return <DesarrolloClient />;
}
