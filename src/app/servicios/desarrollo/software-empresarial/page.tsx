// --- METADATOS OPTIMIZADOS ---
export const metadata = {
	title: "Empresa de Desarrollo de Software en México | Servicio Empresarial",
	description:
		"Somos una empresa de desarrollo de software en México. Ofrecemos un servicio de desarrollo de software empresarial a medida: CRMs, ERPs y soluciones tecnológicas avanzadas.",
	keywords:
		"empresa de desarrollo de software en méxico, servicio de desarrollo de software empresarial, soluciones tecnológicas, transformación digital, inteligencia artificial, reducción de costos, desarrollo de software a medida",
	alternates: {
		canonical:
			"https://www.jegdevstudios.com/servicios/desarrollo/software-empresarial",
	},
	openGraph: {
		title: "Empresa de Desarrollo de Software en México | JEG Dev Studios",
		description:
			"Transformamos tu negocio con soluciones tecnológicas a medida. CRMs, ERPs y software empresarial de alta calidad.",
		url: "https://www.jegdevstudios.com/servicios/desarrollo/software-empresarial",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-serv-dev-soft.webp",
				width: 1200,
				height: 630,
				alt: "Servicio de Desarrollo de Software Empresarial",
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
