import Link from "next/link";
import Image from "next/image";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ";
import CTAProducts from "@/components/Cta/CTAProducts";

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

const faqs = [
	{
		question: "¿Qué es un CMS o 'sistema de gestión de contenidos'?",
		answer:
			"Un <strong>sistema de gestión de contenidos</strong> (CMS) es la herramienta que te permite escribir, editar y publicar una <strong>entrada de blog</strong> sin saber programar. Nosotros te lo entregamos configurado, ya sea WordPress, Blogger o un CMS Headless (como Strapi) para tu <strong>blog en Next.js</strong>.",
	},
	{
		question: "¿WordPress vs. Next.js: ¿Cuál es mejor para mi blog?",
		answer:
			"Depende. <strong>Instalar WordPress</strong> es ideal para un <strong>blog personal</strong> o de Pyme que busca muchas <strong>opciones de personalización</strong> rápidamente. Un <strong>blog en Next.js</strong> es una solución premium para empresas que buscan el máximo rendimiento, seguridad y una experiencia de <strong>gestión de contenido</strong> superior.",
	},
	{
		question: "¿Cómo puedo 'promocionar mi blog' una vez que esté hecho?",
		answer:
			"La promoción es clave. Puedes usar <strong>herramientas de marketing</strong> como el <strong>correo electrónico</strong> (email marketing) para tus suscriptores, compartir cada <strong>entrada de blog</strong> en redes sociales, y por supuesto, la optimización para <strong>motores de búsqueda</strong> (SEO) que ya incluimos.",
	},
	{
		question: "¿Este servicio incluye métodos de monetización?",
		answer:
			"Nuestro servicio construye la plataforma técnica. Si tu estrategia incluye <strong>métodos de monetización</strong> (como anuncios de AdSense, venta de infoproductos o contenido bajo un <strong>plan de pago</strong>), nosotros implementamos las integraciones técnicas necesarias para que puedas hacerlo.",
	},
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function BlogDevelopmentPage() {
	return (
		<>
			{/* --- INYECCIÓN DE SCHEMAS --- */}
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-blogs" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-blogs" />

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
					{/* H1 ACTUALIZADO con keywords objetivo */}
					<h1>
						Servicio de Desarrollo de Blogs: Crea un Blog para Empresa en
						Next.js
					</h1>
					<p
						className="lead fs-5"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						En la era del contenido, tu blog es tu principal herramienta de
						<strong>marketing digital</strong>. Es el motor para atraer{" "}
						<strong>clientes potenciales</strong> (TOFU) y construir confianza.
						Ofrecemos un <strong>servicio de desarrollo de blogs</strong> para{" "}
						que puedas tener un <strong>blog con CMS</strong> rápido, seguro y
						fácil de administrar.
					</p>
				</div>
			</section>

			{/* --- Sección de Propuesta de Valor (MOFU / Informativa) --- */}
			<section className="text-white py-5 gradient-effect-y">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						¿Por Qué un Blog Profesional y no un Blog Gratis?
					</h2>
					<p
						className="text-center lead fs-5"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Un <strong>blog gratis</strong> o un <strong>blog personal</strong>{" "}
						en una <strong>plataforma de blogs</strong> genérica limita tu
						crecimiento. Al <strong>crear un blog para empresa</strong> con un
						dominio personalizado, obtienes ventajas cruciales:
					</p>
					<div className="row mt-5">
						<div className="col-md-6 mb-4">
							<h4>Atrae Tráfico Orgánico (SEO)</h4>
							<p className="fs-5">
								Cada <strong>entrada de blog</strong> es una nueva página que
								los <strong>motores de búsqueda</strong> pueden indexar. Un blog
								optimizado te permite atraer a tu{" "}
								<strong>público objetivo</strong> respondiendo sus dudas.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Genera Autoridad y Confianza</h4>
							<p className="fs-5">
								Publicar contenido de valor te posiciona como un experto en tu
								industria. Responde dudas, ofrece guías y demuestra por qué eres
								la mejor opción.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Control Total y Personalización</h4>
							<p className="fs-5">
								Olvida las limitaciones de un <strong>blog gratis</strong>. Con
								un <strong>blog con CMS</strong> propio, tienes 100% de control
								sobre el diseño y las{" "}
								<strong>opciones de personalización</strong>.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Captura de Clientes Potenciales</h4>
							<p className="fs-5">
								Tu blog es la herramienta perfecta para convertir visitantes en
								leads. Integramos llamadas a la acción (CTAs) y formularios de{" "}
								<strong>correo electrónico</strong> para hacer crecer tu lista.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Paquetes (BOFU) --- */}
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container" style={{ maxWidth: "1200px" }}>
					<h2 className="mb-4">Nuestras Soluciones para tu Blog</h2>
					<p
						className="lead fs-5"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Ofrecemos tres <strong>planes de pago</strong> que se adaptan a tu
						presupuesto y necesidad técnica. Todos incluyen dominio
						personalizado por 1 año.
					</p>

					<div className="row justify-content-center align-items-stretch mt-4 gy-4">
						{/* Opción 1: Blogger */}
						<div className="col-lg-4">
							<div
								className="card h-100"
								style={{ backgroundColor: "#222", color: "white" }}
							>
								<div className="card-body d-flex flex-column">
									<h3 className="card-title">Blog Starter (Blogger)</h3>
									<p className="fs-2 fw-bold">
										$1,999 <span className="fs-6 fw-normal">MXN</span>
									</p>
									<p className="card-text fs-5">
										Ideal para arrancar. Usamos la plataforma de Blogger de
										Google, conectada a tu dominio propio.
									</p>
									<ul
										className="text-start mt-3"
										style={{ paddingLeft: "20px" }}
									>
										<li className="fs-5">
											<p className="fs-5">Plataforma: Blogger de Google</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">Dominio Personalizado (1 Año)</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">Hosting Gratuito de Google</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">Plantilla semi-personalizada</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">
												Fácil de usar (gestión de contenido simple)
											</p>
										</li>
									</ul>
									<div className="mt-auto pt-3">
										<Link
											href="/contacto?producto=blog-blogger"
											className="btn-services"
										>
											Contratar Starter
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* Opción 2: WordPress */}
						<div className="col-lg-4">
							<div
								className="card h-100"
								style={{ backgroundColor: "#222", color: "white" }}
							>
								<div className="card-body d-flex flex-column">
									<h3 className="card-title">Blog Pro (WordPress)</h3>
									<p className="fs-2 fw-bold">
										$4,999 <span className="fs-6 fw-normal">MXN</span>
									</p>
									<p className="card-text fs-5">
										La <strong>plataforma de blogs</strong> más popular. Te
										permite <strong>instalar WordPress</strong> en tu propio
										hosting con miles de opciones de personalización.
									</p>
									<ul
										className="text-start mt-3"
										style={{ paddingLeft: "20px" }}
									>
										<li className="fs-5">
											<p className="fs-5">Plataforma: WordPress.org</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">Dominio Personalizado (1 Año)</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">Requiere Hosting (No incluido)</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">Tema premium y plugins SEO</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">
												Máxima personalización y escalabilidad
											</p>
										</li>
									</ul>
									<div className="mt-auto pt-3">
										<Link
											href="/contacto?producto=blog-wordpress"
											className="btn-services"
										>
											Contratar Pro
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* Opción 3: Next.js */}
						<div className="col-lg-4">
							<div
								className="card h-100"
								style={{ backgroundColor: "#222", color: "white" }}
							>
								<div className="card-body d-flex flex-column">
									<h3 className="card-title">Blog Ultimate (Next.js)</h3>
									<p className="fs-2 fw-bold">
										$14,999 <span className="fs-6 fw-normal">MXN</span>
									</p>
									<p className="card-text">
										La solución más rápida y segura. Un{" "}
										<strong>blog en Next.js</strong> con un{" "}
										<strong>blog con CMS</strong> Headless (Strapi).
									</p>
									<ul
										className="text-start mt-3"
										style={{ paddingLeft: "20px" }}
									>
										<li className="fs-5">
											<p className="fs-5">Plataforma: Next.js + Strapi CMS</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">Dominio Personalizado (1 Año)</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">Hosting Vercel/Netlify (Incluido)</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">Rendimiento y Seguridad Superior</p>
										</li>
										<li className="fs-5">
											<p className="fs-5">100% Personalizado a tu marca</p>
										</li>
									</ul>
									<div className="mt-auto pt-3">
										<Link
											href="/contacto?producto=blog-nextjs"
											className="btn-services"
										>
											Contratar Ultimate
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Video (Requisito de SEMrush) --- */}
			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2>Video: ¿Qué es un Blog con CMS Headless?</h2>
					<p className="fs-5">
						El futuro de la <strong>gestión de contenido</strong> es "headless".
						Mira este video donde explicamos por qué un{" "}
						<strong>blog en Next.js</strong> con un{" "}
						<strong>blog con CMS</strong> (como Strapi) es técnicamente superior
						a las plataformas tradicionales como WordPress.
					</p>
					<div
						className="video-responsive-container"
						style={{ maxWidth: "700px", margin: "2rem auto" }}
					>
						{/* <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/TU_URL_DE_TU_VIDEO" 
                title="Video sobre CMS Headless vs WordPress" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy">
              </iframe>
              */}
					</div>
				</div>
			</section>

			{/* --- NUEVA SECCIÓN SEMÁNTICA --- */}
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container" style={{ maxWidth: "800px" }}>
					<h2>Cómo Promocionar tu Blog</h2>
					<p className="lead fs-5">
						Nuestro <strong>servicio de desarrollo de blogs</strong> te da la
						plataforma. El éxito viene al <strong>promociona tu blog</strong>.
					</p>
					<ol
						style={{
							textAlign: "left",
							maxWidth: "400px",
							margin: "2rem auto",
						}}
					>
						<li className="fs-5">
							<p className="fs-5">
								<strong>Email Marketing:</strong> Captura el{" "}
								<strong>correo electrónico</strong> de tus lectores y envíales
								cada nueva <strong>entrada de blog</strong>.
							</p>
						</li>
						<li className="fs-5">
							<p className="fs-5">
								<strong>Redes Sociales:</strong>{" "}
								<strong>Promociona tu blog</strong> en todos tus canales
								sociales (LinkedIn, Instagram, X) para alcanzar a tu{" "}
								<strong>público objetivo</strong>.
							</p>
						</li>
						<li className="fs-5">
							<p className="fs-5">
								<strong>Herramientas de Marketing:</strong> Integramos tu blog
								con Google Analytics y Search Console para medir tu tráfico y
								encontrar nuevas oportunidades.
							</p>
						</li>
					</ol>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ title="Preguntas Frecuentes sobre Desarrollo de Blogs" faqs={faqs} />
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
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
			</section>
		</>
	);
}
