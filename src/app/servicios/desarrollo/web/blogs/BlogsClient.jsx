import Link from "next/link";
import Image from "next/image";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ";
import CTAProducts from "@/components/Cta/CTAProducts";

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

const faqs = [
	{
		question: "¿No puedo usar una plataforma gratis como Medium o Blogger?",
		answer:
			"Sí, pero tiene desventajas. En esas plataformas, el contenido no es 100% tuyo y el SEO es limitado. Al crear un blog profesional con nosotros, construyes autoridad en tu propio dominio, controlas el diseño y lo integras a tu embudo de ventas.",
	},
	{
		question: "¿Qué es un CMS Autoadministrable?",
		answer:
			"Es un 'Sistema de Gestión de Contenidos' (Headless CMS) que te permite escribir, editar y publicar nuevos artículos fácilmente, sin necesidad de tocar una línea de código. Te capacitamos para que tengas total autonomía sobre tu estrategia de contenidos.",
	},
	{
		question: "¿Este servicio incluye la redacción de los artículos del blog?",
		answer:
			"Este es el servicio de desarrollo de blogs, es decir, la construcción de la plataforma. La redacción de artículos es un servicio de 'Marketing de Contenidos' que forma parte de nuestras estrategias de Posicionamiento SEO. Podemos cotizarlo por separado.",
	},
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function BlogDevelopmentPage() {
	return (
		<>
			{/* --- INYECCIÓN DE SCHEMAS --- */}
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-blogs" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-blogs" />

			{/* Aquí puedes añadir un Schema "Service" si lo deseas, 
          similar al que hicimos para /web, pero enfocado en "Blog Development" */}

			{/* --- Sección Hero --- */}

			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Web.webp"
					alt="Conoce nuestros servicios de desarrollo web en JEG Dev Studios"
					width={2000}
					height={600}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container">
					<h1>Servicio de Creación de Blogs Profesionales</h1>
					<p className="fs-5 lead" style={{ maxWidth: "800px", margin: "auto" }}>
						En la era del contenido, tu blog es tu activo más valioso. Es el
						motor de tu estrategia de marketing (TOFU), tu principal herramienta
						de SEO y la forma más poderosa de construir confianza. En JEG Dev
						Studios, ofrecemos un{" "}
						<strong>servicio de desarrollo de blogs</strong> que va más allá de
						una simple plantilla.
					</p>
				</div>
			</section>

			{/* --- Sección de Propuesta de Valor (TOFU/MOFU) --- */}
			<section className="text-white py-5 gradient-effect-y">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						¿Por Qué tu Empresa Necesita un Blog Profesional?
					</h2>
					<p
						className="text-center fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Un blog es la mejor forma de responder las preguntas de tus clientes
						antes de que las hagan. Un <strong>blog profesional</strong> bien
						ejecutado logra 4 objetivos clave:
					</p>
					<div className="row mt-5">
						<div className="col-md-6 mb-4">
							<h4>Genera Autoridad y Confianza (E-E-A-T)</h4>
							<p className="fs-5">
								Publicar contenido de valor te posiciona como un experto en tu
								industria. Responde dudas, ofrece guías y demuestra por qué eres
								la mejor opción.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Atrae Tráfico Orgánico (SEO)</h4>
							<p className="fs-5">
								Cada artículo es una nueva puerta de entrada a tu sitio. Un blog
								te permite atacar cientos de palabras clave informativas que tus
								páginas de servicio nunca podrían capturar.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Captura Leads Calificados</h4>
							<p className="fs-5">
								Tu blog atrae a usuarios en la etapa TOFU (Top of Funnel). Al
								ofrecerles valor, puedes convertirlos en leads (MOFU) a través
								de llamadas a la acción (CTAs) y suscripciones a tu newsletter.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Es un Activo 100% Tuyo</h4>
							<p className="fs-5">
								A diferencia de las redes sociales, tu blog y su contenido te
								pertenecen. No estás sujeto a cambios de algoritmos,
								prohibiciones o la "renta" de espacio en plataformas de
								terceros.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Características del Servicio (MOFU) --- */}
			<section className="text-white py-5 gradient-effect-x">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						Nuestro Servicio de Desarrollo de Blogs
					</h2>
					<p
						className="text-center fs-5 lead"
						style={{
							maxWidth: "800px",
							margin: "auto",
							marginBottom: "3rem",
						}}
					>
						Creamos la plataforma tecnológica para que tú solo te preocupes por
						lo más importante: escribir. Nuestro{" "}
						<strong>servicio de desarrollo de blogs a medida</strong> incluye:
					</p>
					{/* Asumo un layout de 2 columnas */}
					<div className="row">
						<div className="col-md-6 mb-4">
							<h4>Desarrollo en Next.js</h4>
							<p className="fs-5">
								Construimos tu blog con tecnología de punta (React/Next.js) para
								garantizar tiempos de carga ultra-rápidos (vital para el SEO) y
								una experiencia de usuario fluida.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>CMS Autoadministrable</h4>
							<p className="fs-5">
								Te integramos un CMS Headless (como Strapi o Sanity) para que
								puedas crear, editar y publicar tus artículos de forma intuitiva
								y sin conocimientos técnicos.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Optimización SEO Técnica</h4>
							<p className="fs-5">
								Configuramos todo lo que Google necesita: generación automática
								de sitemap.xml, datos estructurados (Schema) para artículos,
								meta-tags dinámicas y un rendimiento impecable.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Diseño UX/UI Personalizado</h4>
							<p className="fs-5">
								Adaptamos el diseño del blog a tu identidad de marca. Creamos
								una experiencia de lectura limpia, accesible y 100% responsive
								en todos los dispositivos.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Cross-link (Triaje) --- */}
			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container" style={{ maxWidth: "800px" }}>
					<h2>¿Tu Blog es Parte de un Proyecto Más Grande?</h2>
					<p className="fs-5">
						Podemos integrar tu nuevo blog dentro de un sitio web corporativo o
						una plataforma de E-commerce.
					</p>
					<nav className="d-flex justify-content-center gap-3 mt-2">
						<Link
							href="/servicios/desarrollo/web/sitios-web"
							className="btn-services m-2"
						>
							Ver Servicios de Sitios Web
						</Link>
						<Link
							href="/servicios/desarrollo/web/ecommerce"
							className="btn-services m-2"
						>
							Ver Servicios de E-commerce
						</Link>
					</nav>
				</div>
			</section>

			{/* --- Sección de Proceso --- */}
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container" style={{ maxWidth: "1200px" }}>
					<h2>Nuestro Proceso para Crear tu Blog</h2>
					{/* Aquí puedes reusar tu componente de Proceso Scrum 
                o usar una lista simple como esta:
            */}
					<ol
						style={{
							textAlign: "left",
							margin: "2rem auto",
						}}
					>
						<li className="fs-5 m-0">
							<p className="fs-5">
								<strong>Estrategia y Arquitectura:</strong> Definimos la
								estructura de categorías y la arquitectura de la información
								para un SEO óptimo.
							</p>
						</li>
						<li className="fs-5 m-0">
							<p className="fs-5">
								<strong>Diseño UX/UI y Desarrollo:</strong> Diseñamos la
								experiencia de lectura y desarrollamos el blog y su CMS.
							</p>
						</li>
						<li className="fs-5 m-0">
							<p className="fs-5">
								<strong>Capacitación y Lanzamiento:</strong> Te capacitamos para
								usar el CMS y lanzamos tu blog al público.
							</p>
						</li>
					</ol>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ faqs={faqs} title="Preguntas Frecuentes sobre Desarrollo de Blogs" />

			<CTAProducts
				title={"¿Listo para Convertirte en una Autoridad en tu Sector?"}
				paragraph={
					"Deja de publicar en plataformas prestadas. Es hora de construir tu propio motor de contenidos y atraer a tus clientes ideales. Hablemos de tu proyecto."
				}
				links={[
					{
						label: "Solicitar Consultoría para mi Blog",
						link: "/contacto",
						type: "services", // Puedes usar 'services' o 'outline'
					},
				]}
			/>
		</>
	);
}
