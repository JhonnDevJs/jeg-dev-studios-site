"use client";
import Image from "next/image";
import StructuredData from "@/components/Seo/StructuredData";
import CardNestedLists from "@/components/Cards/CardNestedLists";
import CardServices from "@/components/Cards/CardServices";
import FAQ from "@/components/Seo/FAQ";
import CTA from "@/components/Cta/CTA";

const faqs = [
	// --- Actuales ---
	{
		question: "¿Cuál es la diferencia entre SEO Web y SEO Local?",
		answer:
			'El SEO Web busca posicionarte a nivel nacional para búsquedas generales (ej. "software de contabilidad"). El SEO Local busca posicionarte en un área geográfica específica para búsquedas locales (ej. "desarrollador de software en CDMX").',
	},
	{
		question: "¿En cuánto tiempo veré resultados con el SEO?",
		answer:
			"El SEO es una estrategia a mediano-largo plazo. Generalmente, los primeros resultados significativos comienzan a verse entre los 3 y 6 meses, dependiendo de la competencia de tu sector y el estado inicial de tu sitio web.",
	},
	{
		question:
			"¿Por qué necesito SEO si mi sitio web ya fue desarrollado por ustedes?",
		answer:
			"El desarrollo optimizado (como el que hacemos) construye una base técnica sólida para el SEO (velocidad, estructura, etc.). El servicio de posicionamiento SEO es el trabajo continuo de crear contenido, construir autoridad y adaptar la estrategia para competir activamente por las primeras posiciones.",
	},
	{
		question: "¿Qué incluye la auditoría SEO inicial?",
		answer:
			"Nuestra auditoría revisa más de 100 puntos, incluyendo la salud técnica de tu sitio (indexación, velocidad), la calidad de tu contenido, tu perfil de enlaces (backlinks) y un análisis competitivo para entender qué están haciendo bien tus rivales.",
	},
];

export default function SeoClient() {
	return (
		<>
			<StructuredData data={faqs} />
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
					Posicionamiento SEO que Genera Resultados de Negocio
				</h1>
				<p className="lead text-white text-center">
					En el mercado digital actual, ser invisible en Google es como no
					existir. Como agencia de posicionamiento SEO en México , nuestro único
					objetivo es poner tu negocio directamente frente a los clientes que te
					están buscando. No nos enfocamos en métricas de vanidad; Creamos
					estrategias SEO que se traducen en más tráfico cualificado, más
					prospectos y más ventas.
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<h2 className="text-center text-white">
					Nuestros Servicios de Posicionamiento SEO
				</h2>
				<p className="lead text-white text-center">
					Entendemos que cada negocio tiene un público diferente. Por eso,
					nuestros servicios de posicionamiento SEO se dividen en dos áreas
					estratégicas para atacar tus objetivos de la manera más eficiente
					posible.
				</p>
				<article className="d-flex flex-column justify-content-center align-items-center w-100 p-0 m-0">
					<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
						<CardServices
							title="SEO Web y Nacional"
							description="Ideal para empresas que venden productos o servicios a nivel nacional. Nos enfocamos en posicionar tu sitio web para palabras clave de alto volumen, construyendo tu autoridad de dominio y atrayendo tráfico de todo el país."
							url="/servicios/seo/web"
							buttonLabel="Ver Estrategias de SEO Web"
							items={[
								"Auditoría SEO Técnica Completa",
								"Investigación de Palabras Clave",
								"Optimización On-Page y de Contenido",
								"Estrategia de Link Building",
							]}
						/>
						<CardServices
							title="SEO Local para Negocios"
							description={`Si tus clientes están en tu ciudad o colonia, este es el servicio para ti. Optimizamos tu presencia para que aparezca en Google Maps y en las búsquedas locales ("cerca de mí"), atrayendo clientes a tu puerta.`}
							url="/servicios/seo/local"
							buttonLabel="Ver Estrategias de SEO Local"
							items={[
								"Optimización del perfil empresarial de Google",
								"Estrategia de Citaciones Locales",
								"Identidad Visual Corporativa",
								"Diseño Editorial y Publicitario",
							]}
						/>
					</ul>
				</article>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<CardNestedLists
					titulo="Nuestra Metodología: Datos, Estrategia y Transparencia"
					subtitulo="El SEO no es magia, es una ciencia. Nuestro proceso se basa en un ciclo probado de análisis y optimización para garantizar los mejores resultados posibles."
					list={[
						{
							text: "1. Auditoría y Diagnóstico:",
							sublist: [
								"Empezamos con un análisis profundo de tu sitio web, tu mercado y tus competidores. Identificamos fortalezas, debilidades y oportunidades de crecimiento.",
							],
						},
						{
							text: "2. Estrategia Personalizada:",
							sublist: [
								"Con los datos en mano, creamos una hoja de ruta (roadmap) a medida. Definimos las palabras clave a atacar, las acciones técnicas a implementar y la estrategia de contenido a seguir.",
							],
						},
						{
							text: "3. Implementación y Optimización:",
							sublist: [
								"Ejecutamos el plan. Optimizamos tu sitio, creamos contenido de valor y construimos tu autoridad en línea, ajustando la estrategia mes a mes según el rendimiento.",
							],
						},
						{
							text: "4. Reportes y Medición:",
							sublist: [
								"Te entregamos reportes mensuales claros y fáciles de entender. Te mostramos el progreso, el retorno de inversión (ROI) y los próximos pasos. Cero jerga técnica, solo resultados.",
							],
						},
					]}
				/>
			</section>
			<FAQ
				faqs={faqs}
				subtitle="Resuelve tus dudas sobre nuestros paquetes, tecnologías, tiempos de entrega y más."
			/>
			<CTA />
		</>
	);
}
