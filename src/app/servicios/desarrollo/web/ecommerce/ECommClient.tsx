// Ruta: /servicios/desarrollo/web/ecommerce/page
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import CTAProducts from "@/components/Cta/CTAProducts"; // Asumo que tienes un CTA

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA (FAQ ACTUALIZADA) ---

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question: "¿Qué formas de pago y opciones de pago integran?",
		answer:
			"Integramos todas las formas de pago más utilizadas para facilitar tus ventas online. Esto incluye pagos con tarjeta de débito y crédito (vía Stripe, Mercado Pago), pagos digitales como Apple Pay y Google Pay, transferencias bancarias (SPEI) y opciones de pago en efectivo (OXXO Pay).",
	},
	{
		question: "¿Por qué usan Strapi para el panel de administración?",
		answer:
			"Usamos Strapi porque es un CMS Headless líder. Nos permite darte un panel 100% personalizado, seguro y fácil de usar, que se conecta de forma ultra-rápida a tu tienda online desarrollada en Next.js, dándote el mejor rendimiento posible para vender por internet.",
	},
	{
		question: "¿Ustedes gestionan los nombres de dominios y el hosting?",
		answer:
			"Sí, nuestros paquetes de desarrollo de comercio electrónico pueden incluir el registro de tus nombres de dominios y el hosting por el primer año, para que solo te preocupes por ofrecer productos y empezar a vender.",
	},
	{
		question:
			"¿Este servicio incluye la estrategia de marketing digital para mi tienda?",
		answer:
			"Este servicio construye la plataforma tecnológica. Una estrategia de marketing completa (SEO, campañas en redes sociales, inbound marketing) es un servicio de Posicionamiento SEO que se contrata por separado y es fundamental para llevar clientes potenciales y brindar una mejor atención al cliente.",
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

			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Web.webp"
					alt="Conoce nuestros servicios de desarrollo web en JEG Dev Studios"
					width={2000}
					height={600}
					className="w-full h-auto"
					priority // Importante para LCP
				/>
			</section>
			<section className="flex flex-col justify-center items-center text-white py-12 md:py-20 gradient-effect-x text-center">
				<div className="flex flex-col justify-center items-center mx-auto px-4">
					<h1 className="text-4xl md:text-5xl font-extrabold">Desarrollo de Comercio Electrónico: Tu Tienda en Línea</h1>
					<p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
						Lleva tu negocio al siguiente nivel. Nuestro servicio de{" "}
						<strong>venta en línea</strong> está enfocado en la velocidad
						(Next.js), una gestión fácil (Strapi) y una experiencia de compra
						que convierte. Es hora de <strong>empezar a vender online</strong>.
					</p>
				</div>
			</section>

			{/* --- Sección de Propuesta de Valor (MOFU) --- */}
			<section className="flex flex-col justify-center items-center text-white py-12 md:py-20 gradient-effect-y">
				<div className="flex flex-col justify-center items-center" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						¿Por Qué un eCommerce a Medida vs. una Plataforma Genérica?
					</h2>
					<p className="text-center text-lg md:text-xl max-w-3xl mx-auto">
						Mientras otras plataformas te encierran en plantillas, un desarrollo
						a medida te da libertad. Te permite diferenciarte de la competencia
						y escalar tu operación, integrando la logística de tu{" "}
						<strong>tienda física</strong> con tu nueva{" "}
						<strong>tienda online</strong> sin fricción.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
						<div>
							<h4 className="text-xl font-semibold mb-2">Diseño UX/UI de Alta Calidad</h4>
							<p className="text-gray-300">
								Creamos <strong>experiencias de usuario</strong> (UX) fluidas y
								una <strong>interfaz de usuario</strong> (UI) atractiva que guía
								a tus clientes desde la <strong>descripción de producto</strong>{" "}
								hasta el pago, todo optimizado para{" "}
								<strong>dispositivos móviles</strong>.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Optimización para Motores de Búsqueda</h4>
							<p className="text-gray-300">
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
			<section className="flex flex-col justify-center items-center text-white py-12 md:py-20 gradient-effect-x">
				<div className="flex flex-col justify-center items-center" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						Un Servicio de eCommerce 360°: Más Allá del Carrito
					</h2>
					<p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12">
						Nuestro servicio de{" "}
						<strong>desarrollo de comercio electrónico</strong> es una solución
						integral. Cubrimos los tres pilares del éxito para los{" "}
						<strong>negocios online</strong>:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div>
							<h4 className="text-xl font-semibold mb-2">1. Opciones de Pago Flexibles y Seguras</h4>
							<p className="text-gray-300">
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
						<div>
							<h4 className="text-xl font-semibold mb-2">2. Gestión de Contenido con Strapi</h4>
							<p className="text-gray-300">
								Te entregamos un panel de{" "}
								<strong>administración de contenidos</strong> (CMS) con{" "}
								<strong>Strapi</strong>. Podrás subir fotos de{" "}
								<strong>alta calidad</strong>, editar precios, gestionar
								inventario y cambiar la <strong>descripción de producto</strong>{" "}
								de forma autónoma.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">3. Múltiples Canales de Venta y Atención</h4>
							<p className="text-gray-300">
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
			<section className="flex flex-col justify-center items-center text-white py-12 md:py-20 gradient-effect-y text-center">
				<div className="flex flex-col justify-center items-center" style={{ maxWidth: "1200px" }}>
					<h2 className="text-3xl md:text-4xl font-bold">Nuestro Proceso para Lanzar tu Tienda Online</h2>
					<ol className="text-left max-w-2xl mx-auto mt-8 space-y-4 text-gray-300 text-lg">
						<li>
							<strong>Estrategia de eCommerce:</strong> Definimos tu público,
							productos y <strong>estrategia de marketing</strong> inicial.
						</li>
						<li>
							<strong>Diseño UX/UI:</strong> Creamos una{" "}
							<strong>interfaz de usuario</strong> atractiva y una ruta de
							compra sin fricción.
						</li>
						<li>
							<strong>Desarrollo y Configuración:</strong> Construimos la
							tienda en Next.js, conectamos la <strong>base de datos</strong>{" "}
							de productos, configuramos tu CMS <strong>Strapi</strong> e
							integramos los <strong>métodos de pago</strong>.
						</li>
						<li>
							<strong>Lanzamiento:</strong> Te capacitamos y ponemos tu{" "}
							<strong>tienda en línea</strong> en producción, lista para{" "}
							<strong>empezar a vender</strong>.
						</li>
					</ol>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ
				faqs={faqs} subtitle="Preguntas Frecuentes sobre Comercio Electrónico"
			/>

			{/* --- Sección CTA Final (BOFU) --- */}

			<section className="flex flex-col justify-center items-center text-center text-white w-full p-4 xl:p-20 gap-3">
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
