export const metadata = {
	title: "Desarrollo de Software a Medida | Fábrica de Software | JEG Dev Studios",
	description:
    "Somos una agencia y fábrica de software especializada en desarrollo de software a medida. Transformamos tus ideas en productos de software robustos. Conoce nuestro proceso.",
	keywords:
    "desarrollo de software a medida, fábrica de software, agencia de desarrollo de software, proyectos de desarrollo de software, software personalizado",
	openGraph: {
    title: "Desarrollo de Software a Medida | Fábrica de Software | JEG Dev Studios",
    description:
      "Transformamos tus ideas en productos de software robustos. Conoce nuestro proceso de desarrollo de software a medida.",
		url: "https://www.jegdevstudios.com/servicios/desarrollo",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-serv-desarrollo.webp",
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
