"use client";

// Imports Hooks
import Image from "next/image";

// Import Custom Hooks


// Imports libs

// Import Types

// Import Components
import StructuredData from "@/components/Seo/StructuredData";
import CardServices from "@/components/Cards/CardServices";
import CTA from "@/components/Cta/CTA";
import FAQ from "@/components/Seo/FAQ";
import CardInfo from "@/components/Cards/CardInfo";
import TimelineProcess from "@/components/Cards/TimelineProcess";

// Imports Assets


// Import Styles custom

import "./ServicesClient.css";

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question: "¿Cómo contrato un servicio con ustedes?",
		answer:
			"El primer paso es agendar una consulta gratuita. Analizamos tus necesidades, te enviamos una propuesta detallada y, si estás de acuerdo, comenzamos.",
	},
	{
		question: "¿Debo pagar todo de una vez?",
		answer:
			"No. Usualmente trabajamos con un pago inicial del 50% para comenzar y el 50% restante contra entrega o dividido en fases, según el tamaño del proyecto.",
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
	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-services" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-services" />

			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Servicios.webp"
					alt="Agencia de Desarrollo Digital - JEG Dev Studios"
					width={2000}
					height={600}
					className="w-full h-auto"
					priority // Importante para LCP
				/>
			</section>

			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mt-3">
					Agencia de Desarrollo Digital: Soluciones Web, SEO y Diseño
				</h1>
				<p className="text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-4xl">
					En JEG Dev Studios, funcionamos como tu socio tecnológico integral.
					Somos una <strong>agencia de desarrollo digital</strong> que unifica
					estrategia, código y creatividad. Ofrecemos{" "}
					<strong>servicios de desarrollo digital</strong> que van desde la
					creación de software a medida hasta el posicionamiento SEO y el diseño
					UX/UI.
				</p>
			</section>

			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">Nuestras Áreas de Expertise</h2>
				<p className="text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-3xl">
					Nuestra metodología se basa en tres pilares fundamentales. Cada
					servicio está diseñado para funcionar en conjunto, creando una
					estrategia digital cohesiva y potente para tu negocio.
				</p>
				<article className="flex flex-col justify-center items-center w-full p-0 m-0">
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch w-full h-full gap-5 p-0 m-0">
						<CardServices
							title="Desarrollo a Medida: Web, Apps y Software"
							description="Damos vida a tus ideas con tecnología de vanguardia. Desde sitios web que cautivan y desarrollo de aplicaciones móviles que conectan, hasta software empresarial que optimiza tus operaciones."
							url="/servicios/desarrollo"
							buttonLabel="Ver Servicios de Desarrollo"
							items={[
								"Sitios Web Profesionales y E-commerce",
								"Aplicaciones Móviles (iOS/Android)",
								"Software Empresarial a Medida",
							]}
						/>
						<CardServices
							title="Posicionamiento SEO Estratégico"
							description="Hacemos que tus clientes te encuentren. Aumentamos tu visibilidad en Google y en las nuevas respuestas de IA (GEO) con estrategias técnicas, de contenido y locales que atraen tráfico cualificado."
							url="/servicios/seo"
							buttonLabel="Explorar Estrategias SEO"
							items={[
								"Auditoría y Estrategia SEO",
								"SEO Web, Local y GEO",
								"Optimización On-Page y Técnica",
							]}
						/>
						<CardServices
							title="Diseño Gráfico y Digital (UX/UI)"
							description="Creamos identidades visuales memorables y experiencias de usuario que funcionan. Desde un logotipo que define tu marca hasta el diseño web e interfaces intuitivas para tus plataformas digitales."
							url="/servicios/diseno"
							buttonLabel="Descubrir Soluciones de Diseño"
							items={[
								"Branding y Diseño de Logotipos",
								"Diseño de Interfaces (UX/UI)",
								"Identidad Visual Corporativa",
							]}
						/>
					</ul>
				</article>
			</section>

			{/* --- SECCIÓN VISUAL: ECOSISTEMA DIGITAL --- */}
			<section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
				<div className="container mx-auto max-w-6xl">
					<div className="flex flex-col md:flex-row gap-12 items-center">
						<div className="w-full md:w-1/2 text-left">
							<div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-400">
								Visión 360°
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
								Un Ecosistema Digital Integrado
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
								No entregamos piezas sueltas. Construimos sistemas donde tu sitio web, tu SEO y tu identidad visual trabajan en sincronía.
							</p>
							<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
								Monitoreamos el rendimiento y optimizamos cada componente para maximizar el retorno de tu inversión digital.
							</p>
						</div>

						{/* Wireframe Dashboard */}
						<div className="w-full md:w-1/2 relative perspective-1000">
							<div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 overflow-hidden transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">
								{/* Header */}
								<div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
									<div className="w-32 h-6 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
									<div className="flex gap-2">
										<div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
										<div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full"></div>
									</div>
								</div>
								{/* Main Graph */}
								<div className="w-full h-40 bg-gray-50 dark:bg-gray-700/30 rounded-xl mb-6 relative flex items-end justify-around px-4 pb-0 overflow-hidden border border-gray-100 dark:border-gray-600">
									<div className="w-8 h-16 bg-blue-300 dark:bg-blue-800 rounded-t"></div>
									<div className="w-8 h-24 bg-blue-400 dark:bg-blue-700 rounded-t"></div>
									<div className="w-8 h-20 bg-blue-300 dark:bg-blue-800 rounded-t"></div>
									<div className="w-8 h-32 bg-blue-500 dark:bg-blue-600 rounded-t shadow-lg shadow-blue-500/20"></div>
									<div className="w-8 h-28 bg-blue-400 dark:bg-blue-700 rounded-t"></div>
									{/* Trend Line */}
									<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
										<svg className="w-full h-full" preserveAspectRatio="none">
											<path d="M0 100 C 50 80, 100 90, 150 40 S 250 20, 350 10" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
										</svg>
									</div>
								</div>
								{/* Modules Grid */}
								<div className="grid grid-cols-3 gap-4">
									<div className="h-20 bg-gray-50 dark:bg-gray-700/50 rounded border border-dashed border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center p-2">
										<div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full flex items-center justify-center mb-2 font-bold text-xs">SEO</div>
										<div className="w-12 h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
									</div>
									<div className="h-20 bg-gray-50 dark:bg-gray-700/50 rounded border border-dashed border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center p-2">
										<div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-2 font-bold text-xs">DEV</div>
										<div className="w-12 h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
									</div>
									<div className="h-20 bg-gray-50 dark:bg-gray-700/50 rounded border border-dashed border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center p-2">
										<div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center mb-2 font-bold text-xs">UX</div>
										<div className="w-12 h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECCIÓN SEMÁNTICA MEJORADA */}
			<section className="flex flex-col justify-center items-center text-center w-full gap-3 py-12 md:py-20 px-4">
				<h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
					Tu Socio Tecnológico 360° en Ciudad de México
				</h2>
				<div className="max-w-4xl">
					<p className="text-xl text-center text-gray-600 dark:text-white mb-4">
						Entendemos que buscar un <strong>proveedor de servicios</strong>{" "}
						digitales puede ser abrumador. Existen{" "}
						<strong>agencias digitales</strong>,{" "}
						<strong>agencias de marketing digital</strong> y fábricas de
						software. Nosotros integramos lo mejor de todas.
					</p>
					<p className="text-xl text-center text-gray-600 dark:text-white mb-5">
						Con <strong>años de experiencia</strong> en la industria, nuestro
						equipo en <strong>Ciudad de México</strong> no solo desarrolla;
						creamos estrategias. Combinamos el <strong>diseño web</strong> de
						alta calidad con el desarrollo de{" "}
						<strong>productos digitales</strong> y el{" "}
						<strong>desarrollo de aplicaciones móviles</strong>, asegurando que
						tu proyecto no solo se vea bien, sino que funcione y escale.
					</p>

					<h3 className="text-2xl text-center text-gray-900 dark:text-white font-bold mb-3">
						Más Allá del Lanzamiento: Crecimiento Continuo
					</h3>
					<p className="text-xl text-center text-gray-600 dark:text-white mb-3">
						Nuestro trabajo no termina con la entrega. A diferencia de otras{" "}
						<strong>agencias digitales</strong>, creemos en el crecimiento a
						largo plazo. Integramos estrategias de{" "}
						<strong>inbound marketing</strong> y{" "}
						<strong>marketing digital</strong> para asegurar que tu sitio web{" "}
						<strong>posiciona orgánicamente</strong>.
					</p>
					<p className="text-xl text-center text-gray-600 dark:text-white">
						Gestionamos tus campañas en <strong>redes sociales</strong> y
						optimizamos tu contenido para que no solo atraigas visitantes, sino
						que los conviertas en clientes leales. Los{" "}
						<strong>servicios</strong> que <strong>ofrecen</strong> nuestros
						competidores son aislados; nosotros ofrecemos un ecosistema
						completo.
					</p>
				</div>
			</section>

			{/* --- SECCIÓN DE PROCESO (TIMELINE) --- */}
			<section className="flex flex-col justify-center items-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
				<div className="container max-w-4xl mx-auto w-full mb-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Cómo Trabajamos Contigo
					</h2>
					<p className="text-lg md:text-xl text-gray-600 dark:text-white">
						Una metodología probada para llevar tu proyecto del concepto a la realidad.
					</p>
				</div>
				<TimelineProcess
					steps={[
						{
							title: "Consultoría y Estrategia",
							description: "No empezamos a ciegas. Analizamos tu negocio, tu competencia y tus objetivos para definir la mejor ruta tecnológica y creativa."
						},
						{
							title: "Diseño y Prototipado",
							description: "Creamos la estructura visual y funcional. Validamos la experiencia de usuario (UX) antes de escribir una sola línea de código."
						},
						{
							title: "Desarrollo Ágil",
							description: "Construimos tu solución con las mejores tecnologías (Next.js, React, Node.js). Te mostramos avances constantes para recibir tu feedback."
						},
						{
							title: "Lanzamiento y Crecimiento",
							description: "Desplegamos tu proyecto, aseguramos su rendimiento y te acompañamos con estrategias de SEO y mantenimiento para que siga creciendo."
						}
					]}
				/>
			</section>

			<section className="flex flex-col justify-center items-center text-center w-full gap-3 py-12 md:py-20 px-4 gradient-effect-y">
				<h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8">
					Beneficios de Elegir a JEG Dev Studios
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
					<CardInfo title="Soporte Técnico 24/7" description="No te dejamos solo. Ofrecemos acompañamiento post-entrega para garantizar la estabilidad de tu proyecto." />
					<CardInfo title="Diseño 100% a Medida" description="Sin plantillas genéricas. Cada solución se diseña específicamente para reflejar la identidad de tu marca." />
					<CardInfo title="SEO Nativo" description="Desarrollamos pensando en Google. Tu sitio nace optimizado para posicionarse desde el primer día." />
					<CardInfo title="Metodología Ágil" description="Procesos transparentes con entregas parciales (Sprints) para que siempre tengas control del avance." />
					<CardInfo title="Tecnología de Vanguardia" description="Usamos el stack tecnológico más moderno (Next.js, React) para garantizar velocidad y seguridad." />
					<CardInfo title="Enfoque en Resultados" description="No solo hacemos cosas bonitas; creamos herramientas digitales diseñadas para vender y convertir." />
				</div>
			</section>

			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<FAQ faqs={faqs} />
			</section>

			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<CTA
					title={"¿Listo para dar el siguiente paso digital?"}
					paragraph={
						"Es momento de convertir tu idea en una solución tecnológica escalable y atractiva. Agenda tu consulta gratuita o contáctanos directamente."
					}
					label={"Solicita tu Auditoría Gratuita"}
					link={"/contacto"}
				/>
			</section>
		</>
	);
}