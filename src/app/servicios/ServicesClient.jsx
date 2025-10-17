"use client";
import { useState } from "react";
import CardServices from "@/components/Cards/CardServices";
import FAQ from "@/components/Seo/FAQ";
import CTA from "@/components/Cta/CTA";
import StructuredData from "@/components/Seo/StructuredData"; // Importar el nuevo componente
import Image from "next/image";
import "./ServicesClient.css";

const faqs = [
	// --- Actuales ---
	{
		question: "¿Cómo contrato un servicio con ustedes?",
		answer:
			"El primer paso es agendar una consulta gratuita. Analizamos tus necesidades, te enviamos una propuesta detallada y, si estás de acuerdo, comenzamos.",
	},
	{
		question: "¿Debo pagar todo de una vez?",
		answer:
			"No. Usualmente trabajamos con un pago inicial del 50% para comenzar y el 50% restante contra entrega o dividido en fases, según el proyecto.",
	},
	{
		question: "¿Trabajan con contratos y garantías?",
		answer:
			"Sí. Todos nuestros proyectos se formalizan con un contrato que especifica alcances y tiempos. Ofrecemos garantía sobre nuestro trabajo para tu total tranquilidad.",
	},
	{
		question: "¿Puedo contratar varios servicios juntos (web + SEO + diseño)?",
		answer:
			"¡Claro! De hecho, lo recomendamos. Crear una estrategia integral desde el inicio garantiza los mejores resultados y ofrecemos planes personalizados.",
	},
];

export default function ServicesClient() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	// Schema ESPECÍFICO para esta página de servicios
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			// Usa las FAQs de ESTA PÁGINA
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};

	return (
		<>
			{/* Este componente solo renderiza el schema de FAQ aquí, no en otras páginas */}

			<StructuredData data={faqSchema} />
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/fondos/Servicios.webp"
					alt="Nuestros servicios en JEG Dev Studios"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 pb-xl-0 gap-3 gradient-effect-x">
				<h1 className="text-center text-white fw-bold mt-3">
					Soluciones Digitales a Medida: Desarrollo, SEO y Diseño
				</h1>
				<p className="lead text-white text-center">
					En JEG Dev Studios, creamos ecosistemas digitales completos. Desde el desarrollo de software robusto hasta estrategias SEO que te posicionan en Google y diseños que enamoran a tus usuarios. Explora nuestra gama de servicios de desarrollo digital y descubre cómo podemos impulsar tu negocio.
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<h2 className="text-center text-white">Nuestras Áreas de Expertise</h2>
				<p className="lead text-white text-center">Como agencia de desarrollo digital , ofrecemos soluciones integrales en tres pilares fundamentales. Cada servicio está diseñado para funcionar en conjunto, creando una estrategia digital cohesiva y potente.</p>
				<article className="d-flex flex-column justify-content-center align-items-center w-100 p-0 m-0">
					<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
						<CardServices
							title="Desarrollo a Medida: Web, Apps y Software"
							description="Damos vida a tus ideas con tecnología de vanguardia. Desde sitios web que cautivan y aplicaciones móviles que conectan, hasta software empresarial que optimiza tus operaciones."
							url="/servicios/desarrollo"
							buttonLabel="Ver Servicios de Desarrollo"
							items={[
								"Sitios Web Profesionales",
								"Aplicaciones Móviles (iOS/Android)",
								"Software Empresarial a Medida",
								"Optimización y Rendimiento",
							]}
						/>
						<CardServices
							title="Posicionamiento SEO Estratégico"
							description="Hacemos que tus clientes te encuentren. Aumentamos tu visibilidad en los motores de búsqueda a través de estrategias técnicas, de contenido y locales que atraen tráfico de calidad y convierten."
							url="/servicios/seo"
							buttonLabel="Explorar Estrategias SEO"
							items={[
								"Branding y Diseño de Logotipos",
								"Diseño de Interfaces (UX/UI)",
								"Identidad Visual Corporativa",
								"Diseño Editorial y Publicitario",
							]}
						/>
						<CardServices
							title="Diseño Gráfico y Digital (UX/UI)"
							description="Creamos identidades visuales memorables y experiencias de usuario que funcionan. Desde un logotipo que define tu marca hasta interfaces intuitivas para tus plataformas digitales."
							url="/servicios/diseno"
							buttonLabel="Descubrir Soluciones de Diseño"
							items={[
								"Sistemas a medida según tu flujo de trabajo",
								"Control de usuarios, reportes, paneles y estadísticas",
								"Interfaces accesibles y seguras",
								"Integraciones con CRMs o facturación electrónica",
							]}
						/>
					</ul>
				</article>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center w-100 gap-3 p-xl-5 p-3 gradient-effect-x">
				<h2 className="display-5 text-center text-white">
					Por qué elegir JEG Dev Studios
				</h2>
				<p className="fs-4 text-center text-white p-0">
					Servicio 100% mexicano, pensado para el mundo. Creamos sitios web,
					aplicaciones y software empresarial con calidad profesional para
					clientes en México y cualquier parte del mundo. Nos diferenciamos por
					nuestra tecnología innovadora, compromiso con la entrega puntual y
					atención personalizada en cada proyecto.
				</p>
				<ul className="d-flex flex-wrap justify-content-center align-items-center w-100 gap-2 p-0 m-0 list-unstyled">
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Soporte técnico, escalabilidad y personalización total
						</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Diseños profesionales alineados a tu identidad visual
						</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<h3 className="fs-2 m-0">
							Entrega rápida, con asesoría estratégica en cada fase
						</h3>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Optimización para buscadores (SEO) desde el inicio
						</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Procesos claros de desarrollo (Sprint + feedback continuo)
						</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<h3 className="fs-2 m-0">
							Tecnología moderna y escalable adaptada a tu negocio
						</h3>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Acompañamiento post-entrega: mantenimiento y soporte
						</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Soluciones a medida para web, apps y software empresarial
						</p>
					</li>
				</ul>
				<p className="fs-4 text-white text-center mt-4">
					¿Tienes dudas sobre cuál servicio es el ideal para ti? Contáctanos y
					te ayudamos a tomar la mejor decisión.
				</p>
			</section>
			<FAQ
				faqs={faqs}
				subtitle="Resuelve tus dudas sobre nuestros paquetes, tecnologías, tiempos de entrega y más."
			/>
			<CTA />
		</>
	);
}
