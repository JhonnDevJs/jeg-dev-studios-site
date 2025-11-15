// Ruta: /servicios/desarrollo/web/landing-pages/page.jsx
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
// Importa la imagen de tu producto
// import imgWebProduct1 from "@/assets/img/img/services/dev-web/pack-1/imagen-muestra-de-pagina-web.webp";

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

const faqs = [
	{
		question:
			"¿Cuál es la diferencia entre una 'landing page o página' y un sitio web?",
		answer:
			"Un sitio web tiene múltiples páginas y objetivos (informar, contactar, etc.). Una landing page (o página de aterrizaje) tiene UN solo objetivo: que el usuario realice una acción deseada específica, como registrarse o comprar. Esto maximiza la tasa de conversión.",
	},
	{
		question: "¿Qué son las 'páginas de destino'?",
		answer:
			"Páginas de destino y páginas de aterrizaje son lo mismo. Son páginas diseñadas específicamente para recibir el tráfico de campañas de marketing (ya sea desde redes sociales, anuncios de Google o un correo electrónico) y convertir a ese visitante en un cliente potencial.",
	},
	{
		question: "¿Cómo miden el éxito de una landing page?",
		answer:
			"Una landing page exitosa se mide por su tasa de conversión (cuántas personas realizan la llamada a la acción) y su tasa de rebote (cuántas personas se van sin interactuar). Nuestras páginas están optimizadas para maximizar la primera y minimizar la segunda.",
	},
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function LandingPageDevelopmentPage() {
	return (
		<>
			{/* --- INYECCIÓN DE SCHEMAS --- */}
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-landing" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-landing" />
			{/* Aquí deberías implementar tu schema de "Service" 
        pasando los dos paquetes (el de Google Sites y el de Next.js) 
        como "offers".
      */}

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
					<h1>Diseño de Landing Page de Alta Conversión</h1>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						¿Inviertes en <strong>campañas de marketing</strong> pero no ves
						resultados? El problema podría no ser tu anuncio, sino tu{" "}
						<strong>página de aterrizaje</strong>. Ofrecemos un servicio experto
						de <strong>creación de páginas de aterrizaje</strong> enfocado en
						una sola cosa: <strong>aumentar las conversiones</strong> y capturar
						más <strong>clientes potenciales</strong>.
					</p>
				</div>
			</section>

			{/* --- Sección de Propuesta de Valor (MOFU / Informativa) --- */}
			<section className="text-white py-5 gradient-effect-y">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						La Diferencia: Un Creador Gratuito vs. un Diseño Optimizado
					</h2>
					<p
						className="fs-5 text-center lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Un <strong>creador de landing page</strong> genérico es rápido, pero
						te limita a plantillas lentas que aumentan tu{" "}
						<strong>tasa de rebote</strong>. Un desarrollo a medida te da una
						ventaja competitiva:
					</p>
					<div className="row mt-5">
						<div className="col-md-6 mb-4">
							<h4>Velocidad Extrema (Bajo Rebote)</h4>
							<p className="fs-5">
								Construimos tu <strong>landing page</strong> con tecnología
								moderna (Next.js) que carga al instante. Menos espera significa
								una menor <strong>tasa de rebote</strong> y más conversiones.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Diseño Único y Persuasivo</h4>
							<p className="fs-5">
								No te encerramos en una plantilla. Creamos un diseño que hace
								que tus <strong>productos o servicios</strong>{" "}
								<strong>llamen la atención</strong> y guíe al usuario hacia la{" "}
								<strong>llamada a la acción</strong> (CTA) principal.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Optimización SEO</h4>
							<p className="fs-5">
								Una <strong>landing page</strong> también puede posicionar. La
								optimizamos para tus <strong>palabras claves</strong>{" "}
								principales, asegurando que sea amigable para los{" "}
								<strong>motores de búsqueda</strong>.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Perfecta en Dispositivos Móviles</h4>
							<p className="fs-5">
								La mayoría del tráfico de <strong>redes sociales</strong> y{" "}
								<strong>correo electrónico</strong> es móvil. Garantizamos una
								experiencia perfecta en <strong>dispositivos móviles</strong>.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="mb-4">La Anatomía de una Landing Page Efectiva</h2>
					<p className="lead" style={{ maxWidth: "800px", margin: "auto" }}>
						Para <strong>optimizar una landing page</strong>, no basta con un
						diseño bonito. Aplicamos una estructura probada, diseñada para{" "}
						<strong>captar la atención</strong> de tu{" "}
						<strong>público objetivo</strong> y guiarlo hacia la{" "}
						<strong>toma de decisiones</strong>.
					</p>
					<div className="row mt-5 text-start">
						<div className="col-md-6 mb-3">
							<h4>1. Título de Impacto (Hook)</h4>
							<p>
								El primer mensaje que ve tu <strong>público objetivo</strong>.
								Debe ser claro, conciso y prometer la solución a su problema
								inmediatamente.
							</p>
						</div>
						<div className="col-md-6 mb-3">
							<h4>2. Descripción Clara de Beneficios</h4>
							<p>
								No listamos características, vendemos beneficios. Explicamos
								cómo tu <strong>producto o servicio</strong> mejora la vida del
								cliente, ayudándolo a <strong>tomar decisiones</strong>.
							</p>
						</div>
						<div className="col-md-6 mb-3">
							<h4>3. Un Único "Call to Action" (CTA)</h4>
							<p>
								Una <strong>landing page efectiva</strong> tiene UN solo{" "}
								<strong>call to action</strong> (llamada a la acción). Ya sea
								"Comprar", "Registrarse" o "Descargar", todos los elementos de
								la página apuntan a esta única acción.
							</p>
						</div>
						<div className="col-md-6 mb-3">
							<h4>4. Prueba Social (Confianza)</h4>
							<p>
								Integramos testimonios, reseñas o logos de clientes para
								construir confianza. Esto reduce la fricción y es clave para{" "}
								<strong>aumentar las conversiones</strong>.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Video (Requisito de SEMrush) --- */}
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2>Cómo Optimizar tu Landing Page</h2>
					<p className="fs-5">
						Creamos <strong>páginas de destino</strong> que siguen una
						estructura probada para convertir. Mira este video donde explicamos
						los 5 elementos clave que usamos para{" "}
						<strong>optimizar una landing page</strong>.
					</p>
					<div
						className="video-responsive-container"
						style={{ maxWidth: "700px", margin: "2rem auto" }}
					>
						{/* <iframe ... (tu video aquí) ... /> */}
					</div>
				</div>
			</section>

			{/* --- NUEVA Sección de Paquetes (BOFU) --- */}
			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="mb-4">Nuestras Soluciones de Landing Page</h2>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Ofrecemos dos caminos para tu{" "}
						<strong>landing page para campañas de marketing</strong>,
						dependiendo de tu necesidad y presupuesto.
					</p>

					<div className="row justify-content-center align-items-stretch mt-4 gy-4">
						{/* Opción 1: Paquete Google Sites */}
						<div className="col-lg-5">
							<div
								className="card h-100"
								style={{ backgroundColor: "#222", color: "white" }}
							>
								<div className="card-body d-flex flex-column">
									<h3 className="card-title">Landing Page Profesional</h3>
									<p className="fs-2 fw-bold">
										$2,999 <span className="fs-6 fw-normal">MXN</span>
									</p>
									<p className="card-text">
										Lanza tu idea o promociona un servicio específico
										rápidamente. Una página de aterrizaje optimizada para la
										conversión, construida sobre Google Sites.
									</p>
									<ul
										className="text-start mt-3"
										style={{ paddingLeft: "20px" }}
									>
										<li>Dominio personalizado incluido (1 año)</li>
										<li>Hosting gratuito mediante Google Sites</li>
										<li>Diseño responsivo</li>
										<li>Posicionamiento inicial en Google (SEO básico)</li>
										<li>Diseño adaptado a la marca del cliente</li>
										<li>Hasta 5 secciones para tu página</li>
									</ul>
									<div className="mt-auto pt-3">
										<Link
											href="/contacto?producto=landing-page-profesional"
											className="btn-services"
										>
											Contratar ahora
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* Opción 2: Paquete Premium Next.js */}
						<div className="col-lg-5">
							<div
								className="card h-100"
								style={{ backgroundColor: "#222", color: "white" }}
							>
								<div className="card-body d-flex flex-column">
									<h3 className="card-title">
										Landing Page de Alto Rendimiento
									</h3>
									<p className="fs-2 fw-bold">
										Desde $17,999 <span className="fs-6 fw-normal">MXN</span>
									</p>
									<p className="card-text">
										La solución definitiva en{" "}
										<strong>diseño de landing page de alta conversión</strong>.
										Desarrollada en Next.js con performance +90 garantizado.
									</p>
									<ul
										className="text-start mt-3"
										style={{ paddingLeft: "20px" }}
									>
										<li>Performance +90 Garantizado (Core Web Vitals)</li>
										<li>Desarrollo en Next.js (Ultra-rápida)</li>
										<li>Diseño UI/UX Personalizado (Figma)</li>
										<li>Formularios Avanzados con Integraciones</li>
										<li>Pruebas A/B y Mapas de Calor</li>
										<li>Hosting + Dominio (1 Año GRATIS)</li>
									</ul>
									<div className="mt-auto pt-3">
										<Link
											href="/contacto?producto=landing-page-performance"
											className="btn-services"
										>
											Cotizar Proyecto
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ faqs={faqs} title="Preguntas Frecuentes sobre Páginas de Destino" />
		</>
	);
}
