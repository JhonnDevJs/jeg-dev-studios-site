import PrivacyClient from "./PrivacyClient";
import { getPageFaqs } from "@/lib/data-service.";

export const metadata = {
	title: "Aviso de Privacidad | JEG Dev Studios",
	description:
		"Consulta nuestro Aviso de Privacidad en JEG Dev Studios. Protegemos tus datos personales conforme a la normativa vigente y garantizamos su confidencialidad.",
	keywords:
		"aviso de privacidad, privacidad de datos, protección de datos personales, política de privacidad, JEG Dev Studios, confidencialidad, tratamiento de datos, normativa de privacidad, seguridad digital, derechos ARCO",
	openGraph: {
		title: "Aviso de Privacidad | JEG Dev Studios",
		description:
			"Infórmate sobre cómo protegemos y utilizamos tus datos personales en JEG Dev Studios, de acuerdo con la legislación vigente.",
		url: "https://www.jegdevstudios.com/legal/aviso-de-privacidad",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-home.webp",
				width: 1200,
				height: 630,
				alt: "Aviso de privacidad JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
	},
	alternates: {
		canonical: "https://www.jegdevstudios.com/legal/aviso-de-privacidad",
	},
};

export default async function PrivacyPage() {
  // Obtenemos las FAQs específicas de privacidad que insertamos en Supabase
  const faqs = await getPageFaqs("aviso-de-privacidad");

  return <PrivacyClient initialFaqs={faqs} />;
}