// --- 1. METADATOS DE LA PÁGINA ---
export const metadata = {
	title: "Creación de Menús Digitales QR | JEG Dev Studios",
	description:
		"Servicio de creación de menús digitales QR para restaurantes. Opciones en Google Sites ($299) y Canva ($399). Actualiza tus platillos y precios al instante.",
	keywords:
		"creación de menús digitales QR, servicio de menú digital para restaurante, diseño de menú digital, menú QR para restaurante, menu digital google sites, menu digital canva",
	alternates: {
		canonical: "https://www.jegdevstudios.com/servicios/desarrollo/web/menus",
	},
	openGraph: {
		title: "JEG Dev Studios | Menús Digitales QR para Restaurantes y Bares",
		description:
			"Moderniza tu restaurante. Ofrecemos diseño y creación de menús digitales QR en Google Sites o Canva. Fáciles de actualizar y 100% interactivos.",
		url: "https://www.jegdevstudios.com/servicios/desarrollo/web/menus",
		images: [
			{
				url: "/img-SEO/og-background-serv-menus.webp", // <-- DEBES CREAR ESTA IMAGEN OG
				width: 1200,
				height: 630,
				alt: "Servicio de Creación de Menús Digitales QR",
			},
		],
		locale: "es_MX",
		type: "website",
	},
};

import MenusClient from "./MenusClient";

export default function DevWebPage() {
	return <MenusClient />;
}