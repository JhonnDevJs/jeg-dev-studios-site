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
		question: "¿Qué formas de pago y opciones de pago integran?",
		answer:
			"Integramos todas las formas de pago más utilizadas para facilitar tus <strong>ventas online</strong>. Esto incluye <strong>pagos con tarjeta</strong> de débito y crédito (vía Stripe, Mercado Pago), pagos digitales como Apple Pay y Google Pay, transferencias bancarias (SPEI) y opciones de pago en efectivo (OXXO Pay).",
	},
	{
		question: "¿Por qué usan Strapi para el panel de administración?",
		answer:
			"Usamos Strapi porque es un CMS Headless líder. Nos permite darte un panel 100% personalizado, seguro y fácil de usar, que se conecta de forma ultra-rápida a tu tienda online desarrollada en Next.js, dándote el mejor rendimiento posible para <strong>vender por internet</strong>.",
	},
	{
		question: "¿Ustedes gestionan los nombres de dominios y el hosting?",
		answer:
			"Sí, nuestros paquetes de desarrollo de comercio electrónico pueden incluir el registro de tus nombres de dominios y el hosting por el primer año, para que solo te preocupes por <strong>ofrecer productos</strong> y empezar a vender.",
	},
	{
		question:
			"¿Este servicio incluye la estrategia de marketing digital para mi tienda?",
		answer:
			"Este servicio construye la plataforma tecnológica. Una estrategia de marketing completa (SEO, campañas en redes sociales, inbound marketing) es un servicio de Posicionamiento SEO que se contrata por separado y es fundamental para llevar clientes potenciales y brindar una mejor <strong>atención al cliente</strong>.",
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
					priority // Importante para LCP
				/>
			</section>
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container">
					<h1>Desarrollo de Comercio Electrónico: Tu Tienda en Línea</h1>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Lleva tu negocio al siguiente nivel. Nuestro servicio de{" "}
						<strong>venta en línea</strong> está enfocado en la velocidad
						(Next.js), una gestión fácil (Strapi) y una experiencia de compra
						que convierte. Es hora de <strong>empezar a vender online</strong>.
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
						Un Servicio de eCommerce 360°: Más Allá del Carrito
					</h2>
					<p
						className="text-center fs-5 lead"
						style={{
							maxWidth: "800px",
							margin: "auto",
							marginBottom: "3rem",
						}}
					>
						Nuestro servicio de{" "}
						<strong>desarrollo de comercio electrónico</strong> es una solución
						integral. Cubrimos los tres pilares del éxito para los{" "}
						<strong>negocios online</strong>:
					</p>
					<div className="row">
						<div className="col-md-4 mb-4">
							<h4>1. Opciones de Pago Flexibles y Seguras</h4>
							<p className="fs-5">
								No pierdas una venta por no tener la{" "}
								<strong>forma de pago</strong> correcta. Integramos todas las{" "}
								<strong>opciones de pago</strong> más utilizadas:{" "}
								<strong>tarjetas de crédito</strong> y débito (Stripe, Mercado
								Pago), <strong>transferencias bancarias</strong> (SPEI), y{" "}
								<strong>pagos digitales</strong> como{" "}
								<strong>Apple Pay y Google Pay</strong>. También configuramos
								métodos para pagar en efectivo (OXXO Pay).
							</p>
						</div>
						<div className="col-md-4 mb-4">
							<h4>2. Gestión de Contenido con Strapi</h4>
							<p className="fs-5">
								Te entregamos un panel de{" "}
								<strong>administración de contenidos</strong> (CMS) con{" "}
								<strong>Strapi</strong>. Podrás subir fotos de{" "}
								<strong>alta calidad</strong>, editar precios, gestionar
								inventario y cambiar la <strong>descripción de producto</strong>{" "}
								de forma autónoma.
							</p>
						</div>
						<div className="col-md-4 mb-4">
							<h4>3. Múltiples Canales de Venta y Atención</h4>
							<p className="fs-5">
								Tu <strong>tienda online</strong> es el centro de tu ecosistema.
								La integramos con tus <strong>redes sociales</strong> (Instagram
								Shopping, Facebook Shops) y otros{" "}
								<strong>canales de venta</strong>. Además, facilitamos la
								<strong>atención al cliente</strong> mediante chatbots o
								WhatsApp.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Proceso - ACTUALIZADA --- */}
			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container" style={{ maxWidth: "1200px" }}>
					<h2>Nuestro Proceso para Lanzar tu Tienda Online</h2>
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
					title={"¿Listo para Vender en Línea?"}
					paragraph={
						"No dejes que una plataforma limitada frene tu crecimiento. Invierte en una tienda online profesional, rápida y segura con Next.js y Strapi. Hablemos de tu proyecto de comercio electrónico."
					}
					links={[
						{
							label: "Cotizar mi Tienda en Línea",
							link: "/contacto",
							type: "services",
						},
					]}
				/>
			</section>
		</>
	);
}
