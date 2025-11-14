"use client";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/Seo/StructuredData";
import FAQ from "@/components/Seo/FAQ";
import CTAProducts from "@/components/Cta/CTAProducts";
import "./SitiosWebClient.css";

export default function DevWebClient() {
	const faqs = [
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

			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Web.webp"
					alt="Conoce nuestros servicios de desarrollo web en JEG Dev Studios"
					width={2000}
					height={600}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			{/* Asumo que tienes un componente Hero o Banner similar al de las otras páginas */}
			<section className="text-white py-5 text-center">
				<div className="container">
					<h1>Servicio de Creación de Sitios Web Profesionales</h1>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Tu sitio web es tu principal vendedor digital, 24/7. Pero existe una
						gran diferencia entre un <strong>sitio web gratis</strong> hecho con
						un <strong>creador de páginas web</strong> y una{" "}
						<strong>web profesional</strong> construida a medida. En JEG Dev
						Studios, ofrecemos un{" "}
						<strong>servicio de desarrollo de sitios web</strong> enfocado en el
						rendimiento, un <strong>diseño web</strong> de{" "}
						<strong>alta calidad</strong> y resultados tangibles para tu
						negocio.
					</p>
				</div>
			</section>

			{/* Sección de Propuesta de Valor */}
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container">
					<h2>
						¿Por Qué Invertir en un Sitio Web Profesional y no en un Creador
						Gratuito?
					</h2>
					<p className="fs-5" style={{ maxWidth: "800px", margin: "auto" }}>
						Un <strong>creador de sitios web</strong> te ofrece una plantilla
						limitada. Nosotros te damos una solución de negocios. Un{" "}
						<strong>sitio web profesional</strong> te permite mostrar tus{" "}
						<strong>productos o servicios</strong> de forma única, genera
						confianza en tu marca y, lo más importante, está construido para que
						se <strong>posicionen en buscadores</strong> como Google. Están
						diseñados para escalar y adaptarse a tus necesidades, algo que las
						opciones gratuitas no pueden ofrecer.
					</p>
				</div>
			</section>

			{/* Sección de Características del Servicio */}
			<section className="text-white py-5 gradient-effect-y">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						Nuestro Servicio de Desarrollo de Sitios Web: Una Solución Integral
					</h2>
					<p className="fs-5" style={{ maxWidth: "800px", margin: "auto" }}>
						Entendemos que una <strong>pequeña empresa</strong> necesita más que
						un folleto digital. Nuestros <strong>servicios de diseño</strong> y
						desarrollo cubren todo el ciclo de vida de tu proyecto.
					</p>
					{/* Asumo que usas un layout de 2 columnas para esta lista */}
					<div className="row mt-5">
						<div className="col-md-6 mb-4">
							<h4>Diseño UI/UX Personalizado</h4>
							<p className="fs-5">
								No usamos plantillas. Nuestro equipo de{" "}
								<strong>diseño gráfico</strong> colabora contigo para crear un{" "}
								<strong>diseño de páginas web</strong> único que refleje tu
								marca y mejore la <strong>experiencia de usuario</strong>.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Desarrollo de Alto Rendimiento</h4>
							<p className="fs-5">
								Construimos tu sitio en tecnologías modernas (como Next.js) que
								garantizan velocidad y una perfecta adaptación a todos los{" "}
								<strong>dispositivos móviles</strong>.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Sistema de Administración de Contenidos (CMS)</h4>
							<p className="fs-5">
								Te entregamos un sistema (CMS Headless) para que tú mismo puedas
								gestionar la <strong>administración de contenidos</strong> de tu
								blog o secciones de noticias.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Dominio y Hosting Incluidos</h4>
							<p className="fs-5">
								Nos encargamos de todo. Tu servicio incluye tu{" "}
								<strong>dominio personalizado</strong> y el hosting por 1 año
								para que puedas <strong>publicar tu sitio web</strong> sin
								preocupaciones.
							</p>
						</div>
						<div className="col-md-12 text-center">
							<h4>Optimización SEO Base</h4>
							<p className="fs-5">
								Preparamos tu sitio para los{" "}
								<strong>motores de búsqueda</strong> desde el día uno, aplicando
								las mejores prácticas de SEO técnico y{" "}
								<strong>accesibilidad web</strong>.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Sección de Video (Requisito de SEMrush) */}
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2>La Diferencia: Plantilla vs. Desarrollo a Medida (Video)</h2>
					<p className="fs-5">
						Muchos <strong>paquetes de diseño</strong> se centran solo en lo
						visual. Nuestro enfoque se centra en la tecnología que impulsa tu
						crecimiento. Mira este video donde explicamos por qué un sitio a
						medida es una inversión más inteligente que una plantilla para una{" "}
						<strong>pequeña empresa</strong>.
					</p>
					{/* Componente de Video: 
              Inserta aquí tu iframe de YouTube/Vimeo. 
            */}
					<div
						className="video-responsive-container"
						style={{ maxWidth: "700px", margin: "auto" }}
					>
						{/* <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/TU_URL_DE_TU_VIDEO" 
                title="Video sobre Plantilla vs. Desarrollo a Medida" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy">
              </iframe>
              */}
					</div>
				</div>
			</section>

			{/* Sección de Cross-link (Triaje) */}
			<section className="text-white py-5 gradient-effect-y">
				<div className="container text-center" style={{ maxWidth: "800px" }}>
					<h2>¿Buscas una Tienda Online o una Aplicación Web?</h2>
					<p className="fs-5">
						Este servicio es ideal para sitios corporativos, portafolios y
						sitios informativos.
					</p>
					<ul
						className="mb-3"
						style={{
							textAlign: "left",
						}}
					>
						<li>
							<p className="fs-5">
								Si tu objetivo principal es <strong>vender productos</strong> en
								línea, lo que necesitas es el desarrollo de una{" "}
								<strong>tienda online</strong> (eCommerce).
							</p>
						</li>
						<li>
							<p className="fs-5">
								Si necesitas una <strong>aplicación web</strong> con lógica de
								negocio compleja, tu proyecto podría ser de Software
								Empresarial.
							</p>
						</li>
					</ul>
					<nav className="d-flex justify-content-center gap-3 mt-2">
						<Link
							href="/servicios/desarrollo/web/ecommerce"
							className="btn-services m-2"
						>
							Conocer servicios de eCommerce
						</Link>
						<Link
							href="/servicios/desarrollo/software-empresarial"
							className="btn-services m-2"
						>
							Ver soluciones de Software
						</Link>
					</nav>
				</div>
			</section>

			{/* Sección de Proceso */}
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container" style={{ maxWidth: "1200px" }}>
					<h2>Nuestro Proceso al Desarrollar Sitios Web</h2>
					<p className="fs-5">
						Usamos un proceso ágil (Scrum) al estar{" "}
						<strong>desarrollando sitios web</strong>. Esto nos permite ser
						transparentes, eficientes y entregarte valor en cada etapa.
					</p>
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
								<strong>Descubrimiento y Estrategia:</strong> Analizamos tus
								metas y las de tu <strong>pequeña empresa</strong>.
							</p>
						</li>
						<li className="fs-5 m-0">
							<p className="fs-5">
								<strong>Diseño y Desarrollo:</strong> Nuestro equipo de{" "}
								<strong>diseño gráfico</strong> y desarrollo crea el sitio.
							</p>
						</li>
						<li className="fs-5 m-0">
							<p className="fs-5">
								<strong>Entrega y Publicación:</strong> Hacemos las pruebas
								finales y te ayudamos a <strong>publicar tu sitio web</strong>.
							</p>
						</li>
					</ol>
				</div>
			</section>

			{/* Sección de FAQ (Requisito de SEMrush) */}
			{/* Asumiendo que tienes un componente <FAQ> que acepta el array 'faqs' */}
			<FAQ
				faqs={faqs}
				title="Preguntas Frecuentes sobre la Creación de Sitios Web"
			/>

			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
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
