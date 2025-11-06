export const metadata = {
	title: "Desarrollo de Software en México | JEG Dev Studios",
	description:
		"Somos una empresa de desarrollo de software en México. Ofrecemos un servicio de software a medida: CRMs, ERPs y sistemas empresariales. Cotiza tu proyecto.",
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
