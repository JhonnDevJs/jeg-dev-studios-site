export const metadata = {
	title: "Soluciones Digitales: Web, SEO y Diseño | JEG Dev Studios",
	description:
		"Tu agencia de desarrollo digital. Ofrecemos soluciones integrales en desarrollo web, software, posicionamiento SEO y branding para transformar tu negocio.",
	keywords:
		"servicios desarrollo web México, desarrollo aplicaciones móviles México, software empresarial México, agencia desarrollo digital México, desarrollo web profesional, soluciones digitales empresariales, desarrollo software a medida, apps móviles profesionales, diseño web responsivo, desarrollo tecnológico México",
	openGraph: {
		title:
			"JEG Dev Studios: Soluciones Digitales en Desarrollo Web, SEO y Diseño",
		description:
			"Tu agencia de desarrollo digital. Ofrecemos soluciones integrales en desarrollo web, software, posicionamiento SEO y branding para transformar tu negocio.",
		url: "https://www.jegdevstudios.com/servicios",
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
		canonical: "https://www.jegdevstudios.com/servicios",
	},
};

import ServicesClient from "./ServicesClient";

export default function ServicesPage() {
	return <ServicesClient />;
}
