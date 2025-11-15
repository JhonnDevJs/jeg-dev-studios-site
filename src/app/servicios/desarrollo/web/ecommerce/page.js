export const metadata = {
	title:
		"Desarrollo de Comercio Electrónico y Tiendas en Línea | JEG Dev Studios",
	description:
		"Servicio de desarrollo de comercio electrónico a medida (Next.js y Strapi). Creamos tu tienda en línea profesional, optimizada para SEO y con múltiples formas de pago para empezar a vender online.",
	keywords:
		"desarrollo de ecommerce, creación de tiendas en línea, desarrollo de comercio electrónico, empezar a vender online, vender en línea, opciones de pago, pagos digitales, negocios online, desarrollo ecommerce con strapi",
	alternates: {
		canonical:
			"https://www.jegdevstudios.com/servicios/desarrollo/web/ecommerce",
	},
	openGraph: {
		title:
			"JEG Dev Studios | Desarrollo de eCommerce y Tiendas Online a Medida",
		description:
			"Lleva tu tienda física al mundo digital. Ofrecemos desarrollo de comercio electrónico con Next.js, Strapi, y todas las opciones de pago.",
		url: "https://www.jegdevstudios.com/servicios/desarrollo/web/ecommerce",
		images: [
			{
				url: "/img-SEO/og-background-serv-ecommerce.webp",
				width: 1200,
				height: 630,
				alt: "Servicio de Desarrollo de eCommerce y Tiendas en Línea",
			},
		],
		locale: "es_MX",
		type: "website",
	},
};

import ECommClient from "./ECommClient";

export default function DevWebPage() {
	return <ECommClient />;
}
