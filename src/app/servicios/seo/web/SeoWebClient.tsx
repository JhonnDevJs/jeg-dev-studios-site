// Ruta: /servicios/seo/web/page
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import CTAProducts from "@/components/Cta/CTAProducts"; // Asumo que tienes un CTA

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question: "¿Qué es una 'auditoría SEO' y por qué la necesito?",
		answer:
			"Una auditoría SEO es un diagnóstico completo de tu sitio. Revisamos más de 100 factores técnicos, de contenido y de autoridad para encontrar por qué no estás rankeando. Es el primer paso obligatorio para cualquier estrategia de seo exitosa.",
	},
	{
		question: "¿Son un 'consultor SEO en México' o una 'agencia SEO' completa?",
		answer:
			"Somos una agencia SEO completa. Esto significa que no solo te damos un reporte (como haría un consultor SEO), sino que nuestro equipo especializado implementa los cambios, crea el contenido y ejecuta la estrategia para conseguir resultados.",
	},
	{
		question:
			"¿Este servicio de posicionamiento web incluye la gestión de redes sociales?",
		answer:
			"No directamente. Este servicio se enfoca 100% en el tráfico orgánico desde motores de búsqueda. La gestión de redes sociales es parte de nuestros servicios de marketing digital, aunque el contenido que creamos para SEO puede ser reutilizado en tus perfiles.",
	},
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function SeoWebPage() {
	return (
		<>
			{/* --- INYECCIÓN DE SCHEMAS --- */}
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-seo-web" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-seo-web" />
			{/* (Opcional: puedes crear un schema "Service" para "Consultoría SEO Web") */}

			{/* --- Sección Hero --- */}

			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Seo.webp"
					alt="Nuestros servicios SEO - JEG Dev Studios"
					width={2000}
					height={600}
					className="w-full h-auto"
				/>
			</section>
			<section className="text-white py-12 md:py-20 gradient-effect-x text-center">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-5xl font-bold">Consultoría SEO Web y Servicios On-Page</h1>
					<p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
						Lleva tu <strong>posicionamiento web</strong> al siguiente nivel.
						Nuestra <strong>consultoría SEO</strong> está diseñada para
						e-commerce, blogs y empresas SaaS que compiten a nivel nacional.
						Atraemos <strong>tráfico orgánico</strong> de{" "}
						<strong>alta calidad</strong> optimizando tu sitio para el{" "}
						<strong>motor de búsqueda</strong> (Google).
					</p>
				</div>
			</section>

			{/* --- Sección de Propuesta de Valor (MOFU / Informativa) --- */}
			<section className="text-white py-12 md:py-20 gradient-effect-y">
				<div className="container mx-auto px-4 max-w-4xl">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						¿Qué es el SEO On-Page y por qué es Fundamental?
					</h2>
					<p className="text-center text-lg md:text-xl max-w-3xl mx-auto">
						El <strong>SEO On-Page</strong> (u <strong>"on page"</strong>) es la
						base de todas las <strong>estrategias de seo</strong>. Se refiere a
						la optimización de todo lo que está *dentro* de tu página
						(contenido, imágenes, velocidad) para que Google entienda
						perfectamente de qué tratas y te considere relevante para una{" "}
						<strong>consulta de búsqueda</strong>. Un{" "}
						<strong>diseño web</strong> técnico y una buena arquitectura de{" "}
						<strong>enlaces internos</strong> son el primer paso.
					</p>
				</div>
			</section>

			{/* --- Sección de Características del Servicio (MOFU / Comercial) --- */}
			<section className="text-white py-12 md:py-20 gradient-effect-x">
				<div className="container mx-auto px-4 max-w-4xl">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						Nuestros Servicios de SEO On-Page Incluyen
					</h2>
					<p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12">
						Como tu <strong>agencia SEO</strong>, no dejamos nada al azar.
						Nuestro servicio es un ciclo completo de optimización técnica y
						semántica.
					</p>
					{/* Asumo un layout de 2 columnas */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h4 className="text-xl font-semibold mb-2">Auditoría SEO Completa</h4>
							<p className="text-gray-300">
								Todo proyecto inicia con una <strong>auditoría seo</strong>{" "}
								profunda. Analizamos tu velocidad, indexación, arquitectura de{" "}
								<strong>enlaces internos</strong>, y competencia para crear una
								estrategia ganadora.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Optimización Técnica On-Page</h4>
							<p className="text-gray-300">
								Corregimos el código. Optimizamos tus{" "}
								<strong>etiquetas de encabezado</strong> (H1-H6),{" "}
								<strong>meta descripciones</strong>, y la compresión de imágenes
								para garantizar un performance impecable.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Estrategia de Palabra Clave</h4>
							<p className="text-gray-300">
								Investigamos cada <strong>consulta de búsqueda</strong>{" "}
								relevante. Mapeamos cada <strong>palabra clave</strong> a la{" "}
								<strong>intención de búsqueda</strong> correcta (TOFU, MOFU,
								BOFU) para construir tu embudo.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Optimización de Contenido</h4>
							<p className="text-gray-300">
								Mejoramos tu contenido existente y creamos nuevas piezas. Nos
								aseguramos de que cada página responda a la{" "}
								<strong>intención de búsqueda</strong> del usuario y te
								posicione como una autoridad.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Cross-link (Triaje) --- */}
			<section className="text-white py-12 md:py-20 gradient-effect-y text-center">
				<div className="container mx-auto px-4 max-w-3xl">
					<h2 className="text-3xl md:text-4xl font-bold">¿Tu Negocio es Local?</h2>
					<p className="text-lg md:text-xl mt-4">
						Esta <strong>consultoría seo</strong> se enfoca en el
						posicionamiento nacional. Si tu negocio depende de clientes en tu
						ciudad o colonia (como un restaurante, dentista o tienda), lo que
						necesitas es nuestro servicio especializado de SEO Local.
					</p>
					<nav className="flex justify-center gap-3 mt-4">
						<Link href="/servicios/seo/local" className="btn-services">
							Ver Servicios de SEO Local
						</Link>
					</nav>
				</div>
			</section>

			{/* --- Sección de Proceso (Informativa) --- */}
			<section className="text-white py-12 md:py-20 gradient-effect-x text-center">
				<div className="container mx-auto px-4 max-w-3xl">
					<h2 className="text-3xl md:text-4xl font-bold">De Tráfico Orgánico a Clientes Potenciales</h2>
					<p className="text-lg md:text-xl mt-4">
						Atraer <strong>tráfico orgánico</strong> es solo la mitad del
						trabajo. Nuestra <strong>consultoría seo</strong> se integra con tu{" "}
						<strong>estrategia de marketing digital</strong> general. Analizamos
						el <strong>resultado de búsqueda</strong> y optimizamos la{" "}
						<strong>experiencia de usuario</strong> (UX) para convertir a esos
						visitantes en <strong>clientes potenciales</strong> reales.
					</p>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ faqs={faqs} subtitle="Preguntas Frecuentes sobre Consultoría SEO" />

			{/* --- Sección CTA Final (BOFU) --- */}

			<section className="flex flex-col justify-center items-center text-center text-white w-full p-3 xl:p-20 gap-3">
				<CTAProducts
					title={"¿Listo para Dominar el Resultado de Búsqueda?"}
					paragraph={
						"Deja de perder clientes potenciales frente a tu competencia. Es hora de que tu sitio web tenga una estrategia de seo profesional y domine su sector. Hablemos de tu proyecto."
					}
					links={[
						{
							label: "Solicitar mi Auditoría SEO Web",
							link: "/contacto",
							type: "services", // Puedes usar 'services' o 'outline'
						},
					]}
				/>
			</section>
		</>
	);
}
