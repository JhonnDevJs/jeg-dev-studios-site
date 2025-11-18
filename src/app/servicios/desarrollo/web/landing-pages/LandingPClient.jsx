// Ruta: /servicios/desarrollo/web/landing-pages/page.jsx
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import SectionProcess from "@/components/SectionProcess";

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

const faqs = [
	{
		question: "¿Cuál es la diferencia entre una 'landing page' y un sitio web?",
		answer:
			"Un sitio web tiene múltiples objetivos (informar, contactar, etc.). Una <strong>landing page</strong> (o <strong>página de aterrizaje</strong>) tiene UN solo objetivo: que el usuario realice una <strong>acción deseada</strong> específica. Esto es clave para <strong>aumentar las conversiones</strong>.",
	},
	{
		question: "¿Qué son las 'páginas de destino'?",
		answer:
			"<strong>Páginas de destino</strong> y <strong>páginas de aterrizaje</strong> son lo mismo. Son páginas diseñadas para recibir el tráfico de <strong>campañas de marketing</strong> (ya sea desde <strong>redes sociales</strong>, anuncios de Google o un <strong>correo electrónico</strong>) y convertir a ese visitante en un <strong>cliente potencial</strong>.",
	},
	{
		question: "¿Cómo miden el éxito de una landing page?",
		answer:
			"Una <strong>landing page efectiva</strong> se mide por su <strong>tasa de conversión</strong> (cuántas personas realizan la <strong>llamada a la acción</strong>) y su <strong>tasa de rebote</strong>. Nuestro proceso está diseñado para maximizar la primera y minimizar la segunda.",
	},
];

export default function LandingPageDevelopmentPage() {
	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-landing" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-landing" />

			{/* --- HERO SECTION --- */}
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Web.webp"
					alt="Desarrollo de Landing Pages de Alta Conversión"
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

			{/* --- SECCIÓN NUEVA: CASOS DE USO (Aumenta Contenido Informativo) --- */}
			<section className="text-white py-5 gradient-effect-y">
				<div className="container" style={{ maxWidth: "1000px" }}>
					<h2 className="text-center mb-5">
						¿Cuándo es Indispensable una Landing Page?
					</h2>
					<p
						className="text-center fs-5 mb-5"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						No siempre necesitas un sitio web completo. Una{" "}
						<strong>landing page para campañas de marketing</strong>
						es la herramienta correcta cuando tienes un objetivo específico y
						necesitas enfocar la atención de tu
						<strong>público objetivo</strong> sin distracciones.
					</p>

					<div className="row g-4">
						<div className="col-md-6">
							<div className="p-4 border border-secondary rounded bg-black bg-opacity-25 h-100">
								<h3 className="h4 text-primary-light">
									Lanzamiento de Producto
								</h3>
								<p>
									Si vas a lanzar un nuevo producto al mercado, necesitas una
									página dedicada que explique sus beneficios, muestre videos y
									guíe al usuario a comprar o reservarlo. Una{" "}
									<strong>landing page exitosa</strong> elimina el menú de
									navegación para evitar que el usuario se vaya a otras
									secciones.
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="p-4 border border-secondary rounded bg-black bg-opacity-25 h-100">
								<h3 className="h4 text-primary-light">
									Campañas de Google Ads y Redes Sociales
								</h3>
								<p>
									Nunca envíes tráfico de pago a tu página de inicio (Home).
									Debes enviarlos a una <strong>página de destino</strong>
									que coincida exactamente con lo que prometió el anuncio. Esto
									mejora tu Nivel de Calidad en Google y reduce tu costo por
									clic.
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="p-4 border border-secondary rounded bg-black bg-opacity-25 h-100">
								<h3 className="h4 text-primary-light">
									Captación de Leads (Lead Magnets)
								</h3>
								<p>
									Si ofreces un ebook, un webinar o una consulta gratuita,
									necesitas una página sencilla con un formulario claro. El
									objetivo es intercambiar valor por el{" "}
									<strong>correo electrónico</strong> del visitante para
									nutrirlo después.
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="p-4 border border-secondary rounded bg-black bg-opacity-25 h-100">
								<h3 className="h4 text-primary-light">Eventos y Webinars</h3>
								<p>
									Para registrar asistentes, necesitas una página que genere
									urgencia, muestre la agenda y tenga un
									<strong>call to action</strong> (CTA) irresistible.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- SECCIÓN DE ANATOMÍA (Optimizada Semánticamente) --- */}
			<section className="text-white py-5 gradient-effect-x">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						La Anatomía de una Landing Page Efectiva
					</h2>
					<p
						className="text-center fs-5 mb-5"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Para <strong>optimizar una landing page</strong>, no basta con un
						diseño bonito. Aplicamos una estructura probada para{" "}
						<strong>captar la atención</strong> y guiar hacia la{" "}
						<strong>toma de decisiones</strong>.
					</p>

					<div className="row text-start">
						<div className="col-md-6 mb-4">
							<h4 className="h5 fw-bold">1. Título de Impacto (Hook)</h4>
							<p>
								El primer mensaje que ve tu usuario. Debe ser claro y prometer
								la solución a su problema en menos de 3 segundos.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4 className="h5 fw-bold">2. Beneficios, no Características</h4>
							<p>
								Explicamos cómo tu producto mejora la vida del cliente. Usamos
								listas con viñetas para facilitar la lectura rápida.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4 className="h5 fw-bold">3. Un Único "Call to Action"</h4>
							<p>
								Eliminamos fugas. Ya sea "Comprar", "Registrarse" o "Descargar",
								todos los botones de la página tienen el mismo objetivo.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4 className="h5 fw-bold">4. Prueba Social (Confianza)</h4>
							<p>
								Integramos testimonios y logos de clientes. Esto reduce la
								fricción y es clave para{" "}
								<strong>aumentar las conversiones</strong>.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- SECCIÓN VIDEO (Requisito SEMrush) --- */}
			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2>Cómo Optimizar tu Landing Page (Video)</h2>
					<p className="fs-5 mb-4">
						Creamos <strong>páginas de destino</strong> que siguen una
						estructura probada. Mira este video donde explicamos los 5 elementos
						clave para <strong>optimizar una landing page</strong>.
					</p>
					<div
						className="video-responsive-container"
						style={{ maxWidth: "700px", margin: "auto" }}
					>
						{/* AQUÍ VA TU VIDEO */}
						{/* <iframe ... /> */}
					</div>
				</div>
			</section>

			{/* --- NUEVA SECCIÓN: COMPARATIVA TÉCNICA (Aumenta volumen y autoridad) --- */}
			<section className="text-white py-5 gradient-effect-x">
				<div className="container" style={{ maxWidth: "1000px" }}>
					<h2 className="text-center mb-5">
						Tecnología: Creador Gratuito vs. Desarrollo a Medida
					</h2>
					<div className="table-responsive">
						<table className="table table-dark table-striped table-bordered align-middle">
							<thead>
								<tr className="text-center">
									<th scope="col" className="fs-5">
										Característica
									</th>
									<th scope="col" className="fs-5 text-secondary">
										Creador Genérico (Wix, etc.)
									</th>
									<th scope="col" className="fs-5 text-primary">
										Desarrollo a Medida (Next.js)
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="fw-bold">Velocidad de Carga</td>
									<td>Lenta (mucho código basura)</td>
									<td className="text-primary fw-bold">
										Extrema (Código optimizado)
									</td>
								</tr>
								<tr>
									<td className="fw-bold">Personalización</td>
									<td>Limitada a la plantilla</td>
									<td className="text-primary fw-bold">
										100% Total (Pixel Perfect)
									</td>
								</tr>
								<tr>
									<td className="fw-bold">Tasa de Rebote</td>
									<td>Alta (por lentitud)</td>
									<td className="text-primary fw-bold">
										Mínima (Carga instantánea)
									</td>
								</tr>
								<tr>
									<td className="fw-bold">SEO Técnico</td>
									<td>Básico</td>
									<td className="text-primary fw-bold">
										Avanzado (Core Web Vitals)
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p className="text-center mt-4 fs-5">
						Un desarrollo a medida reduce la <strong>tasa de rebote</strong> y
						mejora la experiencia en
						<strong>dispositivos móviles</strong>, factores que Google ama.
					</p>
				</div>
			</section>

			{/* --- SECCIÓN DE PAQUETES (BOFU) --- */}
			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container" style={{ maxWidth: "1100px" }}>
					<h2 className="mb-4">Nuestras Soluciones de Landing Page</h2>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Ofrecemos dos caminos para tu{" "}
						<strong>landing page para campañas de marketing</strong>,
						dependiendo de tu necesidad y presupuesto.
					</p>

					<div className="row justify-content-center align-items-stretch mt-5 gy-4">
						{/* Opción 1: Google Sites */}
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
										Solución rápida y económica en Google Sites. Ideal para
										validar ideas o negocios que empiezan.
									</p>
									<ul
										className="text-start mt-3"
										style={{ paddingLeft: "20px" }}
									>
										<li>Dominio personalizado incluido (1 año)</li>
										<li>Hosting gratuito (Google Sites)</li>
										<li>Diseño responsivo básico</li>
										<li>Hasta 5 secciones</li>
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

						{/* Opción 2: Next.js */}
						<div className="col-lg-5">
							<div
								className="card h-100 border-primary"
								style={{ backgroundColor: "#1a1a1a", color: "white" }}
							>
								<div className="card-body d-flex flex-column">
									<div className="badge bg-primary align-self-start mb-2">
										Recomendado
									</div>
									<h3 className="card-title">Landing de Alto Rendimiento</h3>
									<p className="fs-2 fw-bold">
										Desde $4,999 <span className="fs-6 fw-normal">MXN</span>
									</p>
									<p className="card-text">
										La solución definitiva para campañas serias. Desarrollada en
										Next.js para máxima velocidad y SEO.
									</p>
									<ul
										className="text-start mt-3"
										style={{ paddingLeft: "20px" }}
									>
										<li>Performance +90 Garantizado</li>
										<li>Diseño UI/UX en Figma (A medida)</li>
										<li>Formularios avanzados con integraciones</li>
										<li>Hosting y Dominio incluidos (1 año)</li>
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

			{/* --- SECCIÓN DE PROCESO DETALLADO --- */}
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<SectionProcess
					title={"Nuestro Proceso de Optimización (CRO)"}
					text={
						"No solo diseñamos, optimizamos. Nuestro proceso de Conversion Rate Optimization (CRO) asegura que tu inversión en publicidad rinda frutos."
					}
				/>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ faqs={faqs} title="Preguntas Frecuentes sobre Páginas de Destino" />
		</>
	);
}
