"use client";
import { useMemo } from "react";
import Image from "next/image";
import StructuredData from "@/components/Seo/StructuredData";
import CardNestedLists from "@/components/Cards/CardNestedLists";
import CardServices from "@/components/Cards/CardServices";
import FAQ from "@/components/Seo/FAQ";
import CTA from "@/components/Cta/CTA";

export default function SeoClient() {
	const services = useMemo(
		() => [
			{
				id: "servicio-seo-web-nacional",
				imageSrc: "/img-SEO/og-background-serv-seo.webp",
				title: "SEO Web y Nacional",
				description:
					"Construimos tu autoridad en todo el país. Ideal para e-commerce, empresas SaaS y marcas que buscan una audiencia nacional. Nos enfocamos en las palabras clave de alto volumen y en una estrategia de contenido que te posicione como líder de la industria.",
				price: 1000,
				currency: "MXN",
				url: "/contacto",
				buttonLabel: "Conocer más de SEO Web",
				items: [
					"Auditoría SEO Técnica Completa",
					"Investigación de Palabras Clave (Keyword Research)",
					"Optimización On-Page y de Contenido",
					"Estrategia de Link Building (Construcción de Enlaces)",
				],
			},
			{
				id: "servicio-seo-local-negocios",
				imageSrc: "/img-SEO/og-background-serv-seo.webp",
				title: "SEO Local para Negocios",
				description: `Si tus clientes están en tu ciudad o colonia, este es el servicio para ti. Optimizamos tu presencia digital para que aparezcas en el "Map Pack" de Google y en las búsquedas locales ("cerca de mí"), atrayendo clientes listos para comprar a tu puerta.`,
				price: 1000,
				currency: "MXN",
				url: "/contacto",
				buttonLabel: "Explorar SEO Local",
				items: [
					"Optimización de Google Business Profile (Google Maps)",
					"Estrategia de Citaciones Locales y NAP",
					"Gestión y Estrategia de Reseñas (Reviews)",
					"SEO On-Page enfocado geográficamente",
				],
			},
			{
				id: "servicio-geo-optimization-ai",
				imageSrc: "/img-SEO/og-background-serv-seo.webp",
				title: "GEO (Optimización para IA Generativa)",
				description: `Prepara tu sitio para el futuro de las búsquedas. Optimizamos tu contenido para que sea la fuente elegida por los motores de IA (LLMs). Aseguramos que tu autoridad (E-E-A-T) sea clara para que Google cite tu marca, no la de tu competencia.`,
				price: 1000,
				currency: "MXN",
				url: "/contacto",
				buttonLabel: "Solicitar Consultoría GEO",
				items: [
					"Creación y Optimización de llms.txt",
					"Fortalecimiento de señales E-E-A-T",
					"Estructuración de contenido semántico (Schema)",
					"Optimización para Búsqueda Conversacional",
				],
			},
		],
		[]
	);

	const seoServiceInfo = {
		name: "Servicios de Posicionamiento SEO Web y GEO en México",
		serviceType: "Servicios de Posicionamiento SEO Web y GEO",
		description:
			"Somos una agencia de SEO en México. Ofrecemos servicios de SEO Web, Local y GEO (Optimización IA) para atraer más clientes a tu negocio. ¡Solicita tu auditoría!",
		image: "/img-SEO/og-background-serv-seo.webp",
		ratingValue: "4.5", // <-- NUEVO
		reviewCount: "1",
	};

	const faqs = [
		// --- Actuales ---
		{
			question: "¿Qué incluyen sus servicios de SEO en México?",
			answer:
				"Nuestros servicios de SEO en México son integrales. Incluyen una auditoría técnica, investigación de palabras clave, optimización on-page, creación de contenido estratégico y link building. Dependiendo de tu negocio, nos especializamos en SEO Web (nacional) o SEO Local (para negocios físicos).",
		},
		{
			question: "¿En cuánto tiempo veré resultados con el SEO?",
			answer:
				"El SEO es una estrategia a mediano-largo plazo. Aunque algunas mejoras técnicas pueden dar resultados rápidos, los resultados significativos y sostenibles (como llegar a la primera página para keywords competidas) generalmente comienzan a verse entre los 4 y 6 meses.",
		},
		{
			question: "¿Cuál es la diferencia entre SEO, GEO y SEM?",
			answer:
				"SEO (Search Engine Optimization): Es el proceso orgánico (no pagado) para posicionar tu sitio en los enlaces de búsqueda, SEM (Search Engine Marketing): Es la publicidad de paga (ej. Google Ads) para aparecer al instante en los resultados y GEO (Generative Engine Optimization): Es el nuevo proceso para optimizar tu contenido y que sea usado como fuente en las respuestas generadas por Inteligencia Artificial.",
		},
		{
			question: "¿Por qué elegir a JEG Dev Studios como mi agencia de SEO?",
			answer:
				"Porque somos una agencia de SEO en México con un ADN técnico. A diferencia de las agencias de marketing tradicionales, nosotros nacimos del desarrollo de software. Entendemos el SEO desde el código fuente, la velocidad del servidor y la arquitectura web, lo que nos da una ventaja única para solucionar problemas técnicos complejos que otras agencias no pueden.",
		},
	];

	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-seo" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-seo" />
			<StructuredData
				data={services}
				type="Service"
				idPage="service-dev-web"
				serviceInfo={seoServiceInfo}
			/>
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Seo.webp"
					alt="Nuestros servicios en JEG Dev Studios"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 pb-xl-0 gap-3 gradient-effect-x">
				<h1 className="text-center text-white fw-bold mt-3">
					Agencia de SEO en México: Visibilidad que Genera Negocio
				</h1>
				<p className="lead text-white text-center">
					En JEG Dev Studios, no solo te conseguimos clics; te conseguimos
					clientes. Como agencia de SEO en México líder en estrategia digital,
					entendemos que ser invisible en Google es como no existir. Dejamos
					atrás las métricas de vanidad para enfocarnos en lo único que importa:
					un servicio de SEO que se traduce en más tráfico cualificado, más
					prospectos y un retorno de inversión (ROI) medible.
				</p>
				<h2>Más Allá del SEO Tradicional: Introducimos GEO</h2>
				<p className="lead w-100 px-3 px-md-5">
					El posicionamiento web ha cambiado. Ya no solo compites por un lugar
					en una lista de diez enlaces; ahora compites por ser la respuesta que
					ofrece la Inteligencia Artificial (como en las AI Overviews de
					Google). Nuestra agencia de posicionamiento SEO en México domina todo
					el espectro de la visibilidad:
				</p>

				<ul className="fs-5 text-start mx-auto" style={{ maxWidth: "600px" }}>
					<li className="mb-3">
						<p>
							Posicionamiento SEO Web: Para construir tu autoridad y capturar
							tráfico a nivel nacional.
						</p>
					</li>
					<li className="mb-3">
						<p>
							Posicionamiento SEO Local: Para dominar tu barrio y que los
							clientes te encuentren en Google Maps.
						</p>
					</li>
					<li className="mb-3">
						<p>
							Optimización GEO (Generative Engine Optimization): La nueva
							frontera. Preparamos tu contenido para que sea la fuente principal
							de las respuestas de IA.
						</p>
					</li>
				</ul>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<h2 className="text-center text-white">
					Nuestros Servicios de Posicionamiento SEO
				</h2>
				<p className="lead text-white text-center">
					Ofrecemos una consultoría SEO completa, dividida en tres áreas
					estratégicas. Elige el plan de acción que tu negocio necesita para
					dominar las búsquedas.
				</p>
				<article className="d-flex flex-column justify-content-center align-items-center w-100 p-0 m-0">
					<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
						{services.map((service, index) => (
							<CardServices
								key={index}
								title={service.title}
								description={service.description}
								url={service.url}
								buttonLabel={service.buttonLabel}
								items={service.items}
							/>
						))}
					</ul>
				</article>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center w-100 gap-3 p-xl-5 p-3 gradient-effect-x">
				<h2 className="display-5 text-center text-white">
					Nuestra Metodología SEO: Datos, Estrategia y Transparencia
				</h2>
				<p className="fs-4 text-center text-white p-0">
					En nuestra agencia de SEO en México, no creemos en la magia ni en las
					promesas vacías. El SEO es una ciencia que requiere un proceso
					disciplinado. Nuestro método se basa en un ciclo probado de 4 fases
					para garantizar resultados sostenibles.
				</p>
				<CardNestedLists
					titulo="Auditoría y Diagnóstico Profundo"
					subtitulo="No podemos trazar un mapa sin saber dónde estás."
					list={[
						{
							text: "Análisis Técnico:",
							sublist: [
								"Revisamos la salud de tu sitio: indexación, velocidad de carga (Core Web Vitals), rastreabilidad y arquitectura web.",
							],
						},
						{
							text: "Análisis de Competencia:",
							sublist: [
								"Identificamos qué están haciendo bien tus competidores y dónde están sus debilidades.",
							],
						},
						{
							text: "Análisis de Contenido:",
							sublist: [
								'Auditamos tu contenido existente para encontrar "gaps" y oportunidades de optimización.',
							],
						},
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<CardNestedLists
					titulo="2. Estrategia y Hoja de Ruta (Roadmap)"
					subtitulo="Con los datos en mano, creamos tu plan de acción."
					list={[
						{
							text: "Keyword Research:",
							sublist: [
								"Definimos las palabras clave transaccionales e informativas que tu público objetivo está buscando.",
							],
						},
						{
							text: "Definición de Pilares:",
							sublist: [
								'Creamos una estrategia de "Topic Clusters" (silos de contenido) para construir tu autoridad.',
							],
						},
						{
							text: "Plan de Acción:",
							sublist: [
								"Te entregamos una hoja de ruta mensual con acciones claras y priorizadas.",
							],
						},
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<CardNestedLists
					titulo="3. Implementación y Optimización"
					subtitulo="Aquí es donde ocurre el trabajo pesado."
					list={[
						{
							text: "Optimización On-Page:",
							sublist: [
								"Corregimos todos los errores técnicos, optimizamos metadatos, encabezados, y mejoramos la semántica del contenido.",
							],
						},
						{
							text: "Creación de Contenido:",
							sublist: [
								"Desarrollamos artículos de blog (TOFU), guías (MOFU) y páginas de servicio (BOFU) que responden a la intención de búsqueda de tus usuarios.",
							],
						},
						{
							text: "Link Building:",
							sublist: [
								"Ejecutamos una estrategia de construcción de enlaces éticos para aumentar la autoridad (E-E-A-T) de tu dominio.",
							],
						},
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<CardNestedLists
					titulo="4. Reportes de Valor, no de Vanidad"
					subtitulo="Creemos en la transparencia total."
					list={[
						{
							text: "Dashboard en Tiempo Real:",
							sublist: [
								"Te damos acceso a un panel para que veas el progreso de tus rankings.",
							],
						},
						{
							text: "Reportes Mensuales:",
							sublist: [
								"Recibes un informe que no solo muestra gráficos, sino que te explica qué hicimos, por qué lo hicimos y qué impacto tuvo en tus objetivos de negocio (leads y ventas).",
							],
						},
						{
							text: "Plan de Acción:",
							sublist: [
								"Te entregamos una hoja de ruta mensual con acciones claras y priorizadas.",
							],
						},
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
				<CTA
					title={"¿Listo para Dominar las Búsquedas en Google?"}
					paragraph={
						"Deja de ser invisible para tus clientes. Es hora de que tu negocio obtenga la visibilidad que merece. Agenda una consulta gratuita con nuestro equipo y descubre el potencial de una estrategia SEO profesional."
					}
					label={"Solicita tu Auditoría SEO Gratuita"}
					link={"/contacto"}
				/>
			</section>
			<FAQ faqs={faqs} subtitle="Preguntas Frecuentes sobre SEO" />
		</>
	);
}
