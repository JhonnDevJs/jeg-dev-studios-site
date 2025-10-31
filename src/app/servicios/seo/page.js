export const metadata = {
	title: "Agencia de Posicionamiento SEO en México | JEG Dev Studios México",
	description:
		"Consultoría y desarrollo digital para empresas en México: sitios web, apps móviles y software empresarial con soluciones modernas y escalables.",
	keywords:
		"Servicios de posicionamiento SEO, Agencia de posicionamiento SEO en México",
	openGraph: {
		title: "Agencia de Posicionamiento SEO en México | JEG Dev Studios",
		description:
			"Creamos soluciones digitales para empresas: sitios web profesionales, apps móviles y software a medida. Asesoría experta y desarrollo escalable en México.",
		url: "https://www.jegdevstudios.com/servicios/seo",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-serv-seo.webp",
				width: 1200,
				height: 630,
				alt: "Servicios de JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
	},
	alternates: {
		canonical: "https://www.jegdevstudios.com/servicios/seo",
	},
};

import SeoClient from "./SeoClient";

export default function ServicesPage() {
	return <SeoClient />;
}
