// Ruta: /servicios/seo/local/page.jsx
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import CTAProducts from "@/components/Cta/CTAProducts"; // Asumo que tienes un CTA

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

const faqs = [
	{
		question: "¿Qué es Google My Business o Perfil de Google?",
		answer:
			"El Perfil de Google</strong> (antes conocido como Google My Business o GMB) es la herramienta gratuita de empresas de Google que te permite gestionar cómo aparece tu negocio local en Google Maps y en los resultados de búsqueda. Es la piedra angular de cualquier estrategia de posicionamiento local.",
	},
	{
		question: "¿Cuánto tardo en ver resultados en Google Maps?",
		answer:
			"El SEO local suele ser más rápido que el SEO web nacional. Aunque depende de la competencia, generalmente puedes empezar a ver mejoras en tus posiciones en Google y en Google Maps en un plazo de 1 a 3 meses.",
	},
	{
		question: "¿Este servicio incluye Google Ads o gestión de Redes Sociales?",
		answer:
			"No. Este servicio se enfoca 100% en el posicionamiento web orgánico. Google Ads es un servicio de publicidad de pago (SEM) y la gestión de redes sociales es parte de una estrategia de marketing digital más amplia, los cuales podemos cotizar por separado.",
	},
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function SeoLocalPage() {
	return (
		<>
			{/* --- INYECCIÓN DE SCHEMAS --- */}
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-seo-local" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-seo-local" />
			{/* (Opcional: puedes crear un schema "Service" para "SEO Local") */}

			{/* --- Sección Hero --- */}

			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Seo.webp"
					alt="Nuestros servicios SEO - JEG Dev Studios"
					width={2000}
					height={600}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container">
					<h1>Agencia de SEO Local: Domina Google Maps</h1>
					<p className="lead" style={{ maxWidth: "800px", margin: "auto" }}>
						Para un negocio físico, no basta con tener un sitio web. Necesitas
						que te encuentren *en el momento exacto* que un cliente está
						buscándote "cerca de mí". Como <strong>agencia de SEO local</strong>
						, nuestra misión es <strong>aumentar la visibilidad</strong> de tu
						negocio en <strong>Google Maps</strong> y dominar las{" "}
						<strong>búsquedas locales</strong> en tu ciudad o colonia.
					</p>
				</div>
			</section>

			{/* --- Sección de Propuesta de Valor (MOFU / Informativa) --- */}
			<section className="text-white py-5 gradient-effect-y">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						¿Por Qué el SEO Local es tu Mejor Inversión?
					</h2>
					<p
						className="text-center lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Mientras el <strong>posicionamiento web</strong> nacional busca
						<strong>palabras claves</strong> genéricas, el{" "}
						<strong>SEO local</strong> captura{" "}
						<strong>clientes potenciales</strong> con la mayor intención de
						compra. Aparecer en el "Map Pack" (el bloque de 3 negocios en{" "}
						<strong>Google Maps</strong>) te pone por delante de tus
						competidores directos.
					</p>
					<div className="row mt-5">
						<div className="col-md-6 mb-4">
							<h4>Atrae Clientes Listos para Comprar</h4>
							<p>
								Las <strong>búsquedas locales</strong> (ej. "restaurante cerca
								de mí") tienen una altísima intención transaccional. Estar en
								las primeras <strong>posiciones en Google</strong> para esas
								búsquedas se traduce en llamadas, visitas y ventas.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Construye Confianza y Autoridad Local</h4>
							<p>
								Un <strong>Perfil de Google</strong> bien optimizado, con
								reseñas positivas y fotos de calidad, genera más confianza que
								cualquier anuncio de <strong>Google Ads</strong>. Te establece
								como una autoridad en tu zona.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Características del Servicio (MOFU / Comercial) --- */}
			<section className="text-white py-5 gradient-effect-x">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						Nuestra Estrategia de Posicionamiento Local
					</h2>
					<p
						className="text-center lead"
						style={{ maxWidth: "800px", margin: "auto", marginBottom: "3rem" }}
					>
						No somos una <strong>agencia seo</strong> genérica. Tenemos una
						metodología probada para el <strong>SEO local</strong>, que incluye:
					</p>
					{/* Asumo un layout de 2 columnas */}
					<div className="row">
						<div className="col-md-6 mb-4">
							<h4>Optimización del Perfil de Google (GMB)</h4>
							<p>
								Auditamos y optimizamos cada sección de tu{" "}
								<strong>Perfil de Google</strong> (antes{" "}
								<strong>Google My Business</strong>). Categorías, fotos,
								servicios, Q&A y publicaciones para dominar el{" "}
								<strong>resultado de búsqueda</strong> local.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Gestión de Citaciones Locales (NAP)</h4>
							<p>
								Aseguramos que tu Nombre, Dirección y Teléfono (NAP) sean
								consistentes en todos los directorios locales (Sección Amarilla,
								Yelp, etc.). Esto es vital para que los{" "}
								<strong>motores de búsqueda</strong> confíen en tu ubicación.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>SEO On-Page Localizado</h4>
							<p>
								Optimizamos el <strong>diseño web</strong> y contenido de tu
								sitio (el <strong>on page</strong>) para reflejar tu ubicación.
								Creamos páginas de "cerca de mí" y optimizamos tus{" "}
								<strong>etiquetas de encabezado</strong> con keywords locales.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Link Building y Reseñas</h4>
							<p>
								Desarrollamos una estrategia de <strong>link building</strong>{" "}
								local para obtener enlaces de autoridad en tu ciudad. Además, te
								damos las herramientas para conseguir y gestionar reseñas
								positivas de tus clientes.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Video (Requisito de SEMrush) --- */}
			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2>Video: Cómo Dominar el "Map Pack" de Google</h2>
					<p>
						El <strong>posicionamiento SEO</strong> local tiene sus propios
						trucos. Mira este video donde nuestro <strong>consultor SEO</strong>{" "}
						explica 3 factores clave para que tu negocio aparezca en las
						primeras posiciones de <strong>Google Maps</strong>.
					</p>
					<div
						className="video-responsive-container"
						style={{ maxWidth: "700px", margin: "2rem auto" }}
					>
						{/* <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/TU_URL_DE_TU_VIDEO" 
                title="Video sobre Cómo Dominar Google Maps" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy">
              </iframe>
              */}
					</div>
				</div>
			</section>

			{/* --- Sección de Cross-link (Triaje) --- */}
			<section className="text-white py-5 gradient-effect-x text-center">
				<div className="container" style={{ maxWidth: "800px" }}>
					<h2>¿Vendes a Nivel Nacional?</h2>
					<p>
						El <strong>SEO local</strong> es para negocios con una ubicación
						física. Si tu empresa es un e-commerce o una consultora que vende en
						todo México, lo que necesitas es nuestro servicio de{" "}
						<strong>SEO Web</strong>.
					</p>
					<nav className="d-flex justify-content-center gap-3 mt-2">
						<Link href="/servicios/seo/web" className="btn-services m-2">
							Ver Servicios de SEO Web
						</Link>
					</nav>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ faqs={faqs} title="Preguntas Frecuentes sobre SEO Local" />

			{/* --- Sección CTA Final (BOFU) --- */}

			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
				<CTAProducts
					title={"¿Listo para Recibir Clientes de tu Zona?"}
					paragraph={
						"Deja de ser invisible para los clientes que están a la vuelta de la esquina. Es hora de que tu negocio domine las búsquedas locales y convierta ese tráfico en clientes potenciales reales."
					}
					links={[
						{
							label: "Solicitar mi Auditoría de SEO Local",
							link: "/contacto",
							type: "services", // Puedes usar 'services' o 'outline'
						},
					]}
				/>
			</section>
		</>
	);
}
