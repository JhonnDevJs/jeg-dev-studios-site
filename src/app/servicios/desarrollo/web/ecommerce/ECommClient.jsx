// Ruta: /servicios/desarrollo/web/ecommerce/page.jsx
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import CTAProducts from "@/components/Cta/CTAProducts"; // Asumo que tienes un CTA

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA (FAQ ACTUALIZADA) ---

const faqs = [
	{
		question: "¿Qué métodos de pago puedo aceptar en mi tienda online?",
		answer:
			"Integramos los métodos de pago más populares en México. Podemos configurar tu tienda online para estar aceptando pagos con tarjeta de crédito (vía Stripe, Mercado Pago, Conekta) y también pagos en efectivo (OXXO Pay) o transferencias (SPEI).",
	},
	{
		question: "¿Por qué usan Strapi para el panel de administración?",
		answer:
			"Usamos Strapi porque es un CMS Headless líder en el mercado. Nos permite darte un panel 100% personalizado, seguro y fácil de usar, que se conecta de forma ultra-rápida a tu tienda online desarrollada en Next.js, dándote el mejor rendimiento posible.",
	},
	{
		question: "¿Ustedes gestionan los nombres de dominios y el hosting?",
		answer:
			"Sí, nuestros paquetes de desarrollo de comercio electrónico pueden incluir el registro de tus nombres de dominios y el hosting por el primer año, para que solo te preocupes por empezar a vender.",
	},
	{
		question:
			"¿Este servicio incluye la estrategia de marketing digital para mi tienda?",
		answer:
			"Este servicio construye la plataforma tecnológica. Una estrategia de marketing completa (SEO, campañas en redes sociales, inbound marketing) es un servicio de Posicionamiento SEO que se contrata por separado y es fundamental para llevar tráfico a tu tienda en línea.",
	},
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function EcommerceDevelopmentPage() {
	return (
		<>
			{/* --- INYECCIÓN DE SCHEMAS --- */}
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-ecommerce" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-ecommerce" />

			{/* (Puedes crear un 'serviceInfo' para esta página y pasarlo a tu componente) */}

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
					<h1>Desarrollo de eCommerce: Tu Tienda en Línea Profesional</h1>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Lleva tu negocio al siguiente nivel con una plataforma de{" "}
						<strong>comercio electrónico</strong> diseñada a tu medida. Creamos
						tu <strong>tienda en línea</strong> desde cero, enfocándonos en la
						velocidad (Next.js), una gestión fácil (Strapi) y una experiencia de
						compra que convierte visitantes en clientes.
					</p>
				</div>
			</section>

			{/* --- Sección de Propuesta de Valor (MOFU) --- */}
			<section className="text-white py-5 gradient-effect-y">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						¿Por Qué un eCommerce a Medida vs. una Plataforma Genérica?
					</h2>
					<p
						className="text-center fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Mientras otras plataformas te encierran en plantillas, un desarrollo
						a medida te da libertad. Te permite diferenciarte de la competencia
						y escalar tu operación, integrando la logística de tu{" "}
						<strong>tienda física</strong> con tu nueva{" "}
						<strong>tienda online</strong> sin fricción.
					</p>
					<div className="row mt-5">
						<div className="col-md-6 mb-4">
							<h4>Diseño UX/UI de Alta Calidad</h4>
							<p className="fs-5">
								Creamos <strong>experiencias de usuario</strong> (UX) fluidas y
								una <strong>interfaz de usuario</strong> (UI) atractiva que guía
								a tus clientes desde la <strong>descripción de producto</strong>{" "}
								hasta el pago, todo optimizado para{" "}
								<strong>dispositivos móviles</strong>.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Optimización para Motores de Búsqueda</h4>
							<p className="fs-5">
								Una <strong>tienda en línea</strong> debe ser encontrada.
								Construimos tu eCommerce sobre una base de SEO técnico sólida,
								optimizando tus <strong>palabras clave</strong>, categorías y
								productos para los <strong>motores de búsqueda</strong>.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Características del Servicio (MOFU) - ACTUALIZADA --- */}
			<section className="text-white py-5 gradient-effect-x">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						Un Servicio de Comercio Electrónico Completo
					</h2>
					<p
						className="text-center fs-5 lead"
						style={{
							maxWidth: "800px",
							margin: "auto",
							marginBottom: "3rem",
						}}
					>
						Nos encargamos de toda la tecnología para que tú te enfoques en
						vender. Nuestro servicio de{" "}
						<strong>creación de tiendas en línea</strong> cubre:
					</p>
					{/* Asumo un layout de 3 columnas */}
					<div className="row">
						<div className="col-md-4 mb-4">
							<h4>Pasarelas de Pago Seguras</h4>
							<p className="fs-5">
								Integramos los <strong>métodos de pago</strong> que tus clientes
								prefieren: <strong>tarjeta de crédito</strong>, PayPal, OXXO Pay
								y más, garantizando un proceso de{" "}
								<strong>aceptando pagos</strong> seguro y confiable.
							</p>
						</div>
						<div className="col-md-4 mb-4">
							{/* --- CAMBIO AQUÍ --- */}
							<h4>Gestión de Contenido con Strapi</h4>
							<p className="fs-5">
								Te entregamos un panel de{" "}
								<strong>administración de contenidos</strong> (CMS)
								autoadministrable construido con <strong>Strapi</strong>, fácil
								de usar para que puedas subir nuevas fotos de{" "}
								<strong>alta calidad</strong>, editar precios y cambiar la{" "}
								<strong>descripción de producto</strong> sin ayuda.
							</p>
						</div>
						<div className="col-md-4 mb-4">
							<h4>Logística y Atención al Cliente</h4>
							<p className="fs-5">
								Configuramos tu sistema de <strong>pagos y envíos</strong>.
								Además, integramos herramientas de{" "}
								<strong>atención al cliente</strong> como chatbots, WhatsApp y
								formularios de contacto.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Proceso - ACTUALIZADA --- */}
			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container" style={{ maxWidth: "1200px" }}>
					<h2>Nuestro Proceso para Lanzar tu Tienda Online</h2>
					{/* Puedes reusar tu componente de Proceso Scrum aquí */}
					<ol
						style={{
							textAlign: "left",
							margin: "2rem auto",
						}}
					>
						<li className="fs-5 m-0">
							<p className="fs-5">
								<strong>Estrategia de eCommerce:</strong> Definimos tu público,
								productos y <strong>estrategia de marketing</strong> inicial.
							</p>
						</li>
						<li className="fs-5 m-0">
							<p className="fs-5">
								<strong>Diseño UX/UI:</strong> Creamos una{" "}
								<strong>interfaz de usuario</strong> atractiva y una ruta de
								compra sin fricción.
							</p>
						</li>
						<li className="fs-5 m-0">
							<p className="fs-5">
								<strong>Desarrollo y Configuración:</strong> Construimos la
								tienda en Next.js, conectamos la <strong>base de datos</strong>{" "}
								de productos, configuramos tu CMS <strong>Strapi</strong> e
								integramos los <strong>métodos de pago</strong>.
							</p>
						</li>
						<li className="fs-5 m-0">
							<p className="fs-5">
								<strong>Lanzamiento:</strong> Te capacitamos y ponemos tu{" "}
								<strong>tienda en línea</strong> en producción, lista para{" "}
								<strong>empezar a vender</strong>.
							</p>
						</li>
					</ol>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ
				faqs={faqs}
				title="Preguntas Frecuentes sobre Comercio Electrónico"
			/>

			{/* --- Sección CTA Final (BOFU) --- */}

			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
				<CTAProducts
					title={"¿Listo para Abrir tu Tienda al Mundo?"}
					paragraph={
						"No dejes que una plataforma limitada frene tu crecimiento. Invierte en una tienda online profesional, rápida y segura con Next.js y Strapi. Hablemos de tu proyecto de comercio electrónico."
					}
					links={[
						{
							label: "Cotizar mi Tienda en Línea",
							link: "/contacto",
							type: "services", // Puedes usar 'services' o 'outline'
						},
					]}
				/>
			</section>
		</>
	);
}
