import { getPageFaqs } from "@/lib/data-service.";

import TermsClient from "./TermsClient";

export const metadata = {
	title: "Términos y Condiciones | JEG Dev Studios",
	description:
		"Lee los Términos y Condiciones de uso de los servicios de JEG Dev Studios. Conoce tus derechos, responsabilidades y el alcance de nuestros servicios digitales.",
	keywords:
		"términos y condiciones, políticas de uso, condiciones del servicio, JEG Dev Studios, derechos del usuario, obligaciones del cliente, desarrollo web, aplicaciones móviles, software personalizado, contrato de servicio",
	openGraph: {
		title: "Términos y Condiciones | JEG Dev Studios",
		description:
			"Revisa los Términos y Condiciones que rigen el uso de nuestros servicios digitales en JEG Dev Studios.",
		url: "https://www.jegdevstudios.com/legal/terminos-y-condiciones",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-home.webp",
				width: 1200,
				height: 630,
				alt: "Términos de uso JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
	},
	alternates: {
		canonical: "https://www.jegdevstudios.com/legal/terminos-y-condiciones",
	},
};

export default async function TermsAndConditions() {
	// Obtenemos las FAQs con el slug 'terminos'
  const faqs = await getPageFaqs("terminos");

  // Pasamos 'faqs' al componente cliente, aunque en el diseño 
  // actual de TermsClient no tenías una sección de FAQs al final.
  // Si quieres agregarlas, deberás actualizar TermsClient para recibirlas.
  return <TermsClient initialFaqs={faqs} />;
}
