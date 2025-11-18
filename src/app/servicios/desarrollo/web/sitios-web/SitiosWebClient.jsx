"use client";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/Seo/StructuredData";
import FAQ from "@/components/Seo/FAQ";
import SectionProcess from "@/components/SectionProcess";
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

			{/* Puedes añadir un schema de "Service" aquí si lo deseas */}

			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Web.webp"
					alt="Servicio de desarrollo de sitios web profesionales"
					width={2000}
					height={600}
					style={{ width: "100%", height: "auto" }}
					priority
				/>
			</section>

			<section className="text-white py-5 text-center">
				<div className="container">
					{/* H1 OPTIMIZADO con la keyword exacta */}
					<h1>Servicio de Desarrollo de Sitios Web Profesionales</h1>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Tu sitio web es tu carta de presentación digital. En JEG Dev
						Studios, nos especializamos en la
						<strong>creación de sitios web profesionales</strong> que van más
						allá de una simple plantilla. Ofrecemos una{" "}
						<strong>web profesional</strong> construida a medida, enfocada en el
						rendimiento, la seguridad y resultados tangibles para tu negocio.
					</p>
				</div>
			</section>

			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container">
					<h2>¿Por Qué Invertir en un Sitio a Medida?</h2>
					<p className="fs-5" style={{ maxWidth: "800px", margin: "auto" }}>
						Un sitio web genérico te ofrece opciones limitadas. Nosotros te
						damos una solución de negocios. Una plataforma escalable te permite
						mostrar tus productos o servicios de forma única, genera confianza
						en tu marca y, lo más importante, está construida para que se
						posicionen en buscadores como Google.
					</p>
				</div>
			</section>

			{/* NUEVA SECCIÓN INFORMATIVA Y SEMÁNTICA (Video + Keywords difíciles) */}
			<section className="text-white py-5 gradient-effect-y">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						Desarrollo Profesional vs. Constructores "Arrastrar y Soltar"
					</h2>
					<p
						className="text-center fs-5 mb-5"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Muchas plataformas te prometen crear un sitio con solo{" "}
						<strong>arrastrar y soltar</strong> elementos. Aunque parece fácil,
						estas herramientas suelen generar código sucio, lento y difícil de
						posicionar. Mira este video para entender la diferencia.
					</p>

					<div
						className="video-responsive-container mb-5"
						style={{ maxWidth: "700px", margin: "auto" }}
					>
						{/* AQUÍ VA TU VIDEO */}
						{/* <iframe ... /> */}
					</div>

					<div className="row">
						<div className="col-md-6 mb-4">
							<h4>Limitaciones de las Plantillas</h4>
							<p className="fs-5">
								Las herramientas de "arrastrar y soltar" te encierran en un
								diseño predefinido. Si quieres escalar a
								<strong>tiendas en línea</strong> complejas o funciones a
								medida, te encontrarás con muros técnicos.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Ventajas del Código a Medida</h4>
							<p className="fs-5">
								Nuestro <strong>servicio de desarrollo de sitios web</strong> te
								da libertad total. Optimizamos cada línea de código para que tu
								sitio vuele y Google lo ame.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* --- SECCIÓN DE CARACTERÍSTICAS EXTENDIDA (Aumenta volumen de texto) --- */}
			<section className="text-white py-5 gradient-effect-x">
				<div className="container" style={{ maxWidth: "1100px" }}>
					<h2 className="text-center mb-5">
						Un Servicio Integral para tu Presencia Digital
					</h2>
					<div className="row g-4">
						<div className="col-md-6">
							<div className="p-4 h-100 border border-secondary rounded-3 bg-black bg-opacity-25">
								<h3 className="h4 text-primary-light">
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
						<div className="col-md-6">
							<div className="p-4 h-100 border border-secondary rounded-3 bg-black bg-opacity-25">
								<h3 className="h4 text-primary-light">
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
						<div className="col-md-6">
							<div className="p-4 h-100 border border-secondary rounded-3 bg-black bg-opacity-25">
								<h3 className="h4 text-primary-light">
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
						<div className="col-md-6">
							<div className="p-4 h-100 border border-secondary rounded-3 bg-black bg-opacity-25">
								<h3 className="h4 text-primary-light">
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

			{/* SECCIÓN DE CARACTERÍSTICAS EXTENDIDA */}
			<section className="text-white py-5 gradient-effect-y">
				<div className="container" style={{ maxWidth: "1100px" }}>
					<h2 className="text-center mb-5">
						Un Servicio Integral para tu Presencia Digital
					</h2>
					<div className="row g-4">
						<div className="col-md-6">
							<div className="p-4 h-100 border border-secondary rounded-3 bg-black bg-opacity-25">
								<h3 className="h4 text-primary-light">
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
						<div className="col-md-6">
							<div className="p-4 h-100 border border-secondary rounded-3 bg-black bg-opacity-25">
								<h3 className="h4 text-primary-light">
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
						<div className="col-md-6">
							<div className="p-4 h-100 border border-secondary rounded-3 bg-black bg-opacity-25">
								<h3 className="h4 text-primary-light">
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
						<div className="col-md-6">
							<div className="p-4 h-100 border border-secondary rounded-3 bg-black bg-opacity-25">
								<h3 className="h4 text-primary-light">
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
			<section className="text-white py-5 gradient-effect-x">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">¿Este Servicio es Para Ti?</h2>
					<p className="text-center fs-5 mb-5">
						Nuestro servicio de{" "}
						<strong>creación de sitios web profesionales</strong> está diseñado
						para:
					</p>
					<div className="row text-center">
						<div className="col-md-4 mb-3">
							<h4 className="h5 fw-bold">Empresas de Servicios</h4>
							<p className="small">
								Consultoras, despachos legales, arquitectos y agencias que
								necesitan generar confianza y captar leads.
							</p>
						</div>
						<div className="col-md-4 mb-3">
							<h4 className="h5 fw-bold">Startups y PyMEs</h4>
							<p className="small">
								Negocios que buscan una presencia digital sólida para escalar y
								validar su modelo de negocio.
							</p>
						</div>
						<div className="col-md-4 mb-3">
							<h4 className="h5 fw-bold">Marcas Personales</h4>
							<p className="small">
								Profesionales que quieren destacar su portafolio y autoridad en
								su industria.
							</p>
						</div>
					</div>

					<div className="alert alert-dark mt-4 text-center" role="alert">
						<h4 className="alert-heading h6 fw-bold">
							¿Buscas Vender Productos?
						</h4>
						<p className="mb-0 small">
							Si tu objetivo principal es tener un carrito de compras y{" "}
							<strong>comercio electrónico</strong>, te recomendamos visitar
							nuestra sección especializada en{" "}
							<Link
								href="/servicios/desarrollo/web/ecommerce"
								className="text-primary text-decoration-none fw-bold"
							>
								Desarrollo de Tiendas en Línea
							</Link>
							, donde integramos pasarelas de pago y catálogos complejos.
						</p>
					</div>
				</div>
			</section>

			{/* --- SECCIÓN DE PROCESO DETALLADO (Aumenta volumen de texto) --- */}
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<SectionProcess
					title={"Nuestro Proceso de Desarrollo Web"}
					text={
						"No improvisamos. Usamos una metodología probada para asegurar que tu sitio web se entregue a tiempo y supere tus expectativas."
					}
				/>
			</section>

			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<div
					className="container"
					style={{ maxWidth: "800px", textAlign: "left" }}
				>
					<div className="mb-4">
						<h3 className="h5 fw-bold">1. Descubrimiento y Estrategia</h3>
						<p>
							Analizamos tu mercado, tu competencia y tus objetivos. Definimos
							la arquitectura de la información para asegurar que tus usuarios
							encuentren lo que buscan.
						</p>
					</div>
					<div className="mb-4">
						<h3 className="h5 fw-bold">2. Diseño UI/UX y Prototipado</h3>
						<p>
							Creamos wireframes y diseños de alta fidelidad. Podrás ver cómo
							lucirá tu <strong>web profesional</strong> antes de escribir una
							sola línea de código.
						</p>
					</div>
					<div className="mb-4">
						<h3 className="h5 fw-bold">3. Desarrollo y Programación</h3>
						<p>
							Nuestros desarrolladores construyen el sitio usando las mejores
							prácticas de código, asegurando compatibilidad con todos los
							navegadores y dispositivos.
						</p>
					</div>
					<div className="mb-4">
						<h3 className="h5 fw-bold">4. Lanzamiento y Conexión Social</h3>
						<p>
							Configuramos tu dominio, instalamos los certificados de seguridad
							y conectamos tu sitio con tus <strong>redes sociales</strong> y
							herramientas de análisis.
						</p>
					</div>
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
