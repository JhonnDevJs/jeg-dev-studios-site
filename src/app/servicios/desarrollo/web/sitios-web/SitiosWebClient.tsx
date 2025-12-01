"use client";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/Seo/StructuredData";
import FAQ from "@/components/Seo/FAQ";
import SectionProcess from "@/components/SectionProcess";
import CTAProducts from "@/components/Cta/CTAProducts";
import "./SitiosWebClient.css";

export default function DevWebClient() {
	interface FaqItem {
		question: string;
		answer: string;
	}

	const faqs: FaqItem[] = [
		{
			question:
				"¿Este servicio incluye el diseño gráfico y las estrategias de marketing digital?",
			answer:
				"Este servicio incluye todo el diseño web y el diseño gráfico necesarios para tu sitio. Las estrategias de marketing digital, como campañas en redes sociales o inbound marketing, son servicios de diseño y SEO que se cotizan por separado para complementar tu sitio.",
		},
		{
			question: "¿El sitio se conectará a una base de datos?",
			answer:
				"Un sitio web corporativo estándar generalmente no requiere una base de datos compleja, más allá de su CMS. Si tu proyecto requiere una base de datos para gestionar usuarios o productos o servicios dinámicos (como una aplicación web), el proyecto se cotizaría como Software Empresarial.",
		},
		{
			question: "¿Qué tan importante es la optimización SEO?",
			answer:
				"Es fundamental. Un diseño de páginas web atractivo no sirve de nada si nadie lo encuentra. Nuestra optimización SEO base asegura que los motores de búsqueda puedan rastrear e indexar tu sitio correctamente, dándote la base para futuras estrategias de marketing.",
		},
	];

	return (
		<>
			{/* --- INYECCIÓN DE SCHEMAS --- */}
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-sitios-web" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-sitios-web" />

			{/* Puedes añadir un schema de "Service" aquí si lo deseas */}

			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Web.webp"
					alt="Servicio de desarrollo de sitios web profesionales"
					width={2000}
					height={600}
					className="w-full h-auto"
					priority
				/>
			</section>

			<section className="flex flex-col justify-center items-center text-white py-5 text-center">
				<div className="container mx-auto px-4">
					{/* H1 OPTIMIZADO con la keyword exacta */}
					<h1 className="text-4xl md:text-5xl font-bold">Servicio de Desarrollo de Sitios Web Profesionales</h1>
					<p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4">
						Tu sitio web es tu carta de presentación digital. En JEG Dev
						Studios, nos especializamos en la
						<strong>creación de sitios web profesionales</strong> que van más
						allá de una simple plantilla. Ofrecemos una{" "}
						<strong>web profesional</strong> construida a medida, enfocada en el
						rendimiento, la seguridad y resultados tangibles para tu negocio.
					</p>
				</div>
			</section>

			<section className="flex flex-col justify-center items-center text-white py-5 gradient-effect-x text-center">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold">¿Por Qué Invertir en un Sitio a Medida?</h2>
					<p className="text-lg md:text-xl max-w-3xl mx-auto mt-4">
						Un sitio web genérico te ofrece opciones limitadas. Nosotros te
						damos una solución de negocios. Una plataforma escalable te permite
						mostrar tus productos o servicios de forma única, genera confianza
						en tu marca y, lo más importante, está construida para que se
						posicionen en buscadores como Google.
					</p>
				</div>
			</section>

			{/* NUEVA SECCIÓN INFORMATIVA Y SEMÁNTICA (Video + Keywords difíciles) */}
			<section className="flex flex-col justify-center items-center text-white py-5 gradient-effect-y">
				<div className="container max-w-4xl mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						Desarrollo Profesional vs. Constructores "Arrastrar y Soltar"
					</h2>
					<p className="text-lg md:text-xl text-center mb-5 max-w-3xl mx-auto">
						Muchas plataformas te prometen crear un sitio con solo{" "}
						<strong>arrastrar y soltar</strong> elementos. Aunque parece fácil,
						estas herramientas suelen generar código sucio, lento y difícil de
						posicionar. Mira este video para entender la diferencia.
					</p>

					<div className="video-responsive-container mb-5 max-w-3xl mx-auto">
						{/* AQUÍ VA TU VIDEO */}
						{/* <iframe ... /> */}
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="mb-4">
							<h4 className="text-xl font-bold mb-2">Limitaciones de las Plantillas</h4>
							<p className="text-lg">
								Las herramientas de "arrastrar y soltar" te encierran en un
								diseño predefinido. Si quieres escalar a
								<strong>tiendas en línea</strong> complejas o funciones a
								medida, te encontrarás con muros técnicos.
							</p>
						</div>
						<div className="mb-4">
							<h4 className="text-xl font-bold mb-2">Ventajas del Código a Medida</h4>
							<p className="text-lg">
								Nuestro <strong>servicio de desarrollo de sitios web</strong> te
								da libertad total. Optimizamos cada línea de código para que tu
								sitio vuele y Google lo ame.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* --- SECCIÓN DE CARACTERÍSTICAS EXTENDIDA (Aumenta volumen de texto) --- */}
			<section className="flex flex-col justify-center items-center text-white py-5 gradient-effect-x">
				<div className="container max-w-6xl mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
						Un Servicio Integral para tu Presencia Digital
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<div>
							<div className="p-4 h-full border border-gray-700 rounded-lg bg-black/25">
								<h3 className="text-xl font-bold text-cyan-400 mb-2">
									Diseño UI/UX Personalizado
								</h3>
								<p>
									Olvídate de las plantillas que usa tu competencia. Nuestro
									equipo colabora contigo para crear una identidad visual única.
									Diseñamos cada pantalla pensando en la conversión y en
									reflejar la esencia de tu marca, asegurando que tu sitio sea
									memorable.
								</p>
							</div>
						</div>
						<div>
							<div className="p-4 h-full border border-gray-700 rounded-lg bg-black/25">
								<h3 className="text-xl font-bold text-cyan-400 mb-2">
									Velocidad y Rendimiento (Core Web Vitals)
								</h3>
								<p>
									Construimos tu sitio en tecnologías modernas (como Next.js)
									que garantizan una carga ultra-rápida. Un sitio rápido no solo
									mejora la experiencia del usuario, sino que es un factor
									crítico para rankear alto en los motores de búsqueda.
								</p>
							</div>
						</div>
						<div>
							<div className="p-4 h-full border border-gray-700 rounded-lg bg-black/25">
								<h3 className="text-xl font-bold text-cyan-400 mb-2">
									Autoadministrable (CMS Headless)
								</h3>
								<p>
									Te entregamos el control. Implementamos un sistema de gestión
									(CMS) moderno y seguro para que tú mismo puedas actualizar
									textos, subir noticias al blog o cambiar imágenes sin depender
									de un programador y sin riesgo de "romper" el sitio.
								</p>
							</div>
						</div>
						<div>
							<div className="p-4 h-full border border-gray-700 rounded-lg bg-black/25">
								<h3 className="text-xl font-bold text-cyan-400 mb-2">
									Seguridad y Certificados SSL
								</h3>
								<p>
									La seguridad no es opcional. Incluimos la configuración de{" "}
									<strong>certificados SSL</strong> avanzados para encriptar la
									información de tu sitio. Además, gestionamos tu{" "}
									<strong>dominio personalizado</strong> y el hosting en
									servidores de alto rendimiento.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECCIÓN: ¿PARA QUIÉN ES ESTE SERVICIO? */}
			<section className="flex flex-col justify-center items-center text-white py-5 gradient-effect-y">
				<div className="container max-w-4xl mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">¿Este Servicio es Para Ti?</h2>
					<p className="text-lg md:text-xl text-center mb-5">
						Nuestro servicio de{" "}
						<strong>creación de sitios web profesionales</strong> está diseñado
						para:
					</p>
					<div className="grid md:grid-cols-3 gap-8 text-center">
						<div className="mb-3">
							<h4 className="text-lg font-bold mb-2">Empresas de Servicios</h4>
							<p className="text-base">
								Consultoras, despachos legales, arquitectos y agencias que
								necesitan generar confianza y captar leads.
							</p>
						</div>
						<div className="mb-3">
							<h4 className="text-lg font-bold mb-2">Startups y PyMEs</h4>
							<p className="text-base">
								Negocios que buscan una presencia digital sólida para escalar y
								validar su modelo de negocio.
							</p>
						</div>
						<div className="mb-3">
							<h4 className="text-lg font-bold mb-2">Marcas Personales</h4>
							<p className="text-base">
								Profesionales que quieren destacar su portafolio y autoridad en
								su industria.
							</p>
						</div>
					</div>

					<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mt-4 text-center" role="alert">
						<h4 className="text-base font-bold mb-2">
							¿Buscas Vender Productos?
						</h4>
						<p className="mb-0 text-sm">
							Si tu objetivo principal es tener un carrito de compras y{" "}
							<strong>comercio electrónico</strong>, te recomendamos visitar
							nuestra sección especializada en{" "}
							<Link
								href="/servicios/desarrollo/web/ecommerce"
								className="text-cyan-400 no-underline font-bold"
							>
								Desarrollo de Tiendas en Línea
							</Link>
							, donde integramos pasarelas de pago y catálogos complejos.
						</p>
					</div>
				</div>
			</section>

			{/* --- SECCIÓN DE PROCESO DETALLADO (Aumenta volumen de texto) --- */}
			<section className="flex flex-col justify-center items-center text-center text-white w-full p-4 xl:p-20 gap-3 gradient-effect-x">
				<SectionProcess
					title={"Nuestro Proceso de Desarrollo Web"}
					text={
						"No improvisamos. Usamos una metodología probada para asegurar que tu sitio web se entregue a tiempo y supere tus expectativas."
					}
				/>
			</section>

			<section className="flex flex-col justify-center items-center text-white w-full p-4 xl:p-20 gap-3 gradient-effect-y">
				<div className="container max-w-3xl mx-auto">
					<div className="relative pl-8">
						{/* Línea de tiempo vertical */}
						<div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-cyan-400 to-purple-500"></div>

						{/* --- Paso 1 --- */}
						<div className="relative mb-10">
							<div className="absolute left-0 top-0 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gray-800 ring-4 ring-gray-900">
								<div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-sm font-bold text-white">1</div>
							</div>
							<div className="pl-4">
								<h3 className="text-lg font-bold mb-1 text-cyan-300">Descubrimiento y Estrategia</h3>
								<p className="text-gray-300">
									Analizamos tu mercado, tu competencia y tus objetivos. Definimos la arquitectura de la información para asegurar que tus usuarios encuentren lo que buscan.
								</p>
							</div>
						</div>

						{/* --- Paso 2 --- */}
						<div className="relative mb-10">
							<div className="absolute left-0 top-0 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gray-800 ring-4 ring-gray-900">
								<div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-sm font-bold text-white">2</div>
							</div>
							<div className="pl-4">
								<h3 className="text-lg font-bold mb-1 text-cyan-300">Diseño UI/UX y Prototipado</h3>
								<p className="text-gray-300">
									Creamos wireframes y diseños de alta fidelidad. Podrás ver cómo lucirá tu <strong>web profesional</strong> antes de escribir una sola línea de código.
								</p>
							</div>
						</div>

						{/* --- Paso 3 --- */}
						<div className="relative mb-10">
							<div className="absolute left-0 top-0 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gray-800 ring-4 ring-gray-900">
								<div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-sm font-bold text-white">3</div>
							</div>
							<div className="pl-4">
								<h3 className="text-lg font-bold mb-1 text-cyan-300">Desarrollo y Programación</h3>
								<p className="text-gray-300">
									Nuestros desarrolladores construyen el sitio usando las mejores prácticas de código, asegurando compatibilidad con todos los navegadores y dispositivos.
								</p>
							</div>
						</div>

						{/* --- Paso 4 --- */}
						<div className="relative">
							<div className="absolute left-0 top-0 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gray-800 ring-4 ring-gray-900">
								<div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-sm font-bold text-white">4</div>
							</div>
							<div className="pl-4">
								<h3 className="text-lg font-bold mb-1 text-cyan-300">Lanzamiento y Conexión Social</h3>
								<p className="text-gray-300">
									Configuramos tu dominio, instalamos los certificados de seguridad y conectamos tu sitio con tus <strong>redes sociales</strong> y herramientas de análisis.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Sección de FAQ (Requisito de SEMrush) */}
			<FAQ
				faqs={faqs}
				subtitle="Preguntas Frecuentes sobre la Creación de Sitios Web"
			/>

			<section className="flex flex-col justify-center items-center text-center text-white w-full p-4 xl:p-20 gap-3">
				<CTAProducts
					title={"¿Listo para tu Sitio Web Profesional?"}
					paragraph={
						"Deja de pelear con un creador de sitios web lento y limitado. Es hora de tener una web profesional que trabaje para ti. Hablemos de tu proyecto."
					}
					links={[
						{
							label: "Cotizar mi Sitio Web",
							link: "/contacto",
							type: "services", // Puedes usar 'services' o 'outline'
						},
					]}
				/>
			</section>
		</>
	);
}
