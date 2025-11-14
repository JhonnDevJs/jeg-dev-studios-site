// --- 1. METADATOS DE LA PÁGINA ---
export const metadata = {
	title: "Creación de Invitaciones Digitales Web | JEG Dev Studios",
	description:
		"Servicio de creación de invitaciones digitales para bodas, XV años y más. Elige entre Google Sites ($299) o Canva ($399). ¡Personaliza tu evento!",
	keywords:
		"creacion de invitaciones digitales, invitaciones web, invitaciones digitales google sites, invitaciones digitales canva, invitaciones para boda, invitaciones para xv años",
	alternates: {
		canonical:
			"https://www.jegdevstudios.com/servicios/desarrollo/web/invitaciones",
	},
	openGraph: {
		title:
			"JEG Dev Studios | Creación de Invitaciones Digitales para tu Evento",
		description:
			"Diseñamos y creamos invitaciones web interactivas para bodas, XV años y más. Opciones en Google Sites y Canva. Haz tu evento inolvidable.",
		url: "https://www.jegdevstudios.com/servicios/desarrollo/web/invitaciones",
		images: [
			{
				url: "/img-SEO/og-background-serv-invitaciones.webp", // <-- DEBES CREAR ESTA IMAGEN OG
				width: 1200,
				height: 630,
				alt: "Servicio de Creación de Invitaciones Digitales Web",
			},
		],
		locale: "es_MX",
		type: "website",
	},
};

import InvitationsClient from "./InvitationsClient";

export default function DevWebPage() {
	return <InvitationsClient />;
}