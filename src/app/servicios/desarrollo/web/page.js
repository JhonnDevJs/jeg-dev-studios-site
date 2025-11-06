export const metadata = {
	title: "Desarrollo de Páginas Web en México | Paquetes | JEG Dev Studios",
	description:
		"Servicios de desarrollo de páginas web en Next.js. Olvida WordPress. Somos una de las agencias de sitios web que ofrece paquetes con performance +90 garantizado.",
	keywords:
		"contratar desarrollo web, crear sitio web profesional, diseño de páginas web, creación de landing pages, creación de tiendas en línea, desarrollo web en México, soluciones digitales personalizadas, sitio web empresarial, servicios de desarrollo web, JEG Dev Studios",
	alternates: {
		canonical: "https://www.jegdevstudios.com/servicios/desarrollo/web",
	},
	openGraph: {
		title: "Servicios de Desarrollo de Sitios Web | JEG Dev Studios",
		description: "Descubre nuestros servicios de desarrollo web",
		url: "https://www.jegdevstudios.com/servicios/desarrollo/web",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-serv-dev-web.webp",
				width: 1200,
				height: 630,
				alt: "Servicios JEG Dev Studios",
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
