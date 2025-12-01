export const metadata = {
	// TÍTULO OPTIMIZADO: Ataca 'Agencias' y 'Profesional'
	title: "Agencia de Sitios Web y Desarrollo Web Profesional | JEG Dev Studios",

	// DESCRIPCIÓN OPTIMIZADA: Integra 'desarrollo web en méxico'
	description:
		"¿Buscas desarrollo web profesional? Somos una de las mejores agencias de sitios web. Ofrecemos desarrollo web en México con tecnología Next.js y paquetes a medida.",

	// KEYWORDS SEMÁNTICAS AÑADIDAS
	keywords:
		"agencias de sitios web, desarrollo web profesional, paquetes de desarrollo web, desarrollo web en méxico, full stack, diseño de páginas web, back end, crear sitio web",

	alternates: {
		canonical: "https://www.jegdevstudios.com/servicios/desarrollo/web",
	},
	openGraph: {
		title: "JEG Dev Studios | Desarrollo Web Profesional y Paquetes",
		description:
			"Lleva tu negocio al siguiente nivel con nuestra agencia de sitios web. Desarrollo Full Stack, optimización SEO y tecnología Next.js.",
		url: "https://www.jegdevstudios.com/servicios/desarrollo/web",
		images: [
			{
				url: "/img-SEO/og-background-serv-dev-web.webp",
				width: 1200,
				height: 630,
				alt: "Servicios de Desarrollo Web Profesional en México",
			},
		],
		locale: "es_MX",
		type: "website",
	},
};

import DevWebClient from "./DevWebClient";

export default function DevWebPage() {
	return <DevWebClient />;
}
