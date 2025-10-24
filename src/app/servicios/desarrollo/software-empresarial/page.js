export const metadata = {
	title: "Servicios de Desarrollo de Software Personalizado | JEG Dev Studios",
	description:
		"Creación de software empresarial a medida — Desarrollo de software adaptado a cada cliente Enfoque personalizado para mejorar procesos",
	keywords:
		"desarrollo de software a medida, software empresarial, soluciones software empresarial, software empresarial de administracion, desarrollo de software personalizado, JEG Dev Studios",
	alternates: {
		canonical:
			"https://www.jegdevstudios.com/servicios/desarrollo/software-empresarial",
	},
	openGraph: {
		title:
			"Servicios de Desarrollo de Software Personalizado | JEG Dev Studios",
		description:
			"Descubre nuestros servicios de desarrollo software empresarial",
		url: "https://www.jegdevstudios.com/servicios/desarrollo/software-empresarial",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-serv-dev-soft.webp",
				width: 1200,
				height: 630,
				alt: "Servicios JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
	},
};

import DevSoftClient from "./DevSoftClient";

export default function DevWebPage() {
	return <DevSoftClient />;
}
