import Link from "next/link";
import Image from "next/image";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ";
import CTAProducts from "@/components/Cta/CTAProducts";

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question: "¿Qué es un CMS o 'sistema de gestión de contenidos'?",
		answer:
			"Un sistema de gestión de contenidos (CMS) es la herramienta que te permite escribir, editar y publicar una entrada de blog sin saber programar. Nosotros te lo entregamos configurado, ya sea WordPress, Blogger o un CMS Headless (como Strapi) para tu blog en Next.js.",
	},
	{
		question: "¿WordPress vs. Next.js: ¿Cuál es mejor para mi blog?",
		answer:
			"Depende. Instalar WordPress es ideal para un blog personal o de Pyme que busca muchas opciones de personalización rápidamente. Un blog en Next.js es una solución premium para empresas que buscan el máximo rendimiento, seguridad y una experiencia de gestión de contenido superior.",
	},
	{
		question: "¿Cómo puedo 'promocionar mi blog' una vez que esté hecho?",
		answer:
			"La promoción es clave. Puedes usar herramientas de marketing como el correo electrónico (email marketing) para tus suscriptores, compartir cada entrada de blog en redes sociales, y por supuesto, la optimización para motores de búsqueda (SEO) que ya incluimos.",
	},
	{
		question: "¿Este servicio incluye métodos de monetización?",
		answer:
			"Nuestro servicio construye la plataforma técnica. Si tu estrategia incluye métodos de monetización (como anuncios de AdSense, venta de infoproductos o contenido bajo un plan de pago), nosotros implementamos las integraciones técnicas necesarias para que puedas hacerlo.",
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

			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Web.webp"
					alt="Conoce nuestros servicios de desarrollo web en JEG Dev Studios"
					width={2000}
					height={600}
					className="w-full h-auto"
				/>
			</section>
			<section className="text-white py-12 md:py-20 gradient-effect-x text-center">
				<div className="container mx-auto px-4">
					{/* H1 ACTUALIZADO con keywords objetivo */}
					<h1 className="text-4xl md:text-5xl font-extrabold">
						Servicio de Desarrollo de Blogs: Crea un Blog para Empresa en
						Next.js
					</h1>
					<p
						className="text-lg md:text-xl mt-4 max-w-3xl mx-auto"
					>
						En la era del contenido, tu blog es tu principal herramienta de
						marketing digital. Es el motor para atraer{" "}
						clientes potenciales (TOFU) y construir confianza.
						Ofrecemos un servicio de desarrollo de blogs para{" "}
						que puedas tener un blog con CMS rápido, seguro y
						fácil de administrar.
					</p>
				</div>
			</section>

			{/* --- Sección de Propuesta de Valor (MOFU / Informativa) --- */}
			<section className="text-white py-12 md:py-20 gradient-effect-y">
				<div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						¿Por Qué un Blog Profesional y no un Blog Gratis?
					</h2>
					<p
						className="text-center text-lg md:text-xl max-w-3xl mx-auto"
					>
						Un blog gratis o un blog personal{" "}
						en una plataforma de blogs genérica limita tu
						crecimiento. Al crear un blog para empresa con un
						dominio personalizado, obtienes ventajas cruciales:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
						<div>
							<h4 className="text-xl font-semibold mb-2">Atrae Tráfico Orgánico (SEO)</h4>
							<p className="text-gray-300">
								Cada entrada de blog es una nueva página que
								los motores de búsqueda pueden indexar. Un blog
								optimizado te permite atraer a tu{" "}
								público objetivo respondiendo sus dudas.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Genera Autoridad y Confianza</h4>
							<p className="text-gray-300">
								Publicar contenido de valor te posiciona como un experto en tu
								industria. Responde dudas, ofrece guías y demuestra por qué eres
								la mejor opción.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Control Total y Personalización</h4>
							<p className="text-gray-300">
								Olvida las limitaciones de un blog gratis. Con
								un blog con CMS propio, tienes 100% de control
								sobre el diseño y las{" "}
								opciones de personalización.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Captura de Clientes Potenciales</h4>
							<p className="text-gray-300">
								Tu blog es la herramienta perfecta para convertir visitantes en
								leads. Integramos llamadas a la acción (CTAs) y formularios de{" "}
								correo electrónico para hacer crecer tu lista.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Paquetes (BOFU) --- */}
			<section className="text-white py-12 md:py-20 gradient-effect-x text-center">
				<div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Soluciones para tu Blog</h2>
					<p
						className="text-lg md:text-xl max-w-3xl mx-auto mb-10"
					>
						Ofrecemos tres planes de pago que se adaptan a tu
						presupuesto y necesidad técnica. Todos incluyen dominio
						personalizado por 1 año.
					</p>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
						{/* Opción 1: Blogger */}
						<div className="flex">
							<div
								className="h-full flex flex-col bg-gray-900/50 border border-gray-700 rounded-lg p-6"
							>
								<div className="flex-grow">
									<h3 className="text-2xl font-bold">Blog Starter (Blogger)</h3>
									<p className="text-5xl font-bold my-4">
										$1,999 <span className="text-base font-normal">MXN</span>
									</p>
									<p className="text-gray-300">
										Ideal para arrancar. Usamos la plataforma de Blogger de
										Google, conectada a tu dominio propio.
									</p>
									<ul className="text-left mt-4 space-y-2 list-disc pl-5 text-gray-300">
										<li>Plataforma: Blogger de Google</li>
										<li>Dominio Personalizado (1 Año)</li>
										<li>Hosting Gratuito de Google</li>
										<li>Plantilla semi-personalizada</li>
										<li>Fácil de usar (gestión de contenido simple)</li>
									</ul>
								</div>
								<div className="mt-auto pt-6">
									<Link
										href="/contacto?producto=blog-blogger"
										className="btn-services"
									>
										Contratar Starter
									</Link>
								</div>
							</div>
						</div>

						{/* Opción 2: WordPress */}
						<div className="flex">
							<div
								className="h-full flex flex-col bg-gray-900/50 border border-gray-700 rounded-lg p-6"
							>
								<div className="flex-grow">
									<h3 className="text-2xl font-bold">Blog Pro (WordPress)</h3>
									<p className="text-5xl font-bold my-4">
										$4,999 <span className="text-base font-normal">MXN</span>
									</p>
									<p className="text-gray-300">
										La plataforma de blogs más popular. Te
										permite instalar WordPress en tu propio
										hosting con miles de opciones de personalización.
									</p>
									<ul className="text-left mt-4 space-y-2 list-disc pl-5 text-gray-300">
										<li>Plataforma: WordPress.org</li>
										<li>Dominio Personalizado (1 Año)</li>
										<li>Requiere Hosting (No incluido)</li>
										<li>Tema premium y plugins SEO</li>
										<li>Máxima personalización y escalabilidad</li>
									</ul>
								</div>
								<div className="mt-auto pt-6">
									<Link
										href="/contacto?producto=blog-wordpress"
										className="btn-services"
									>
										Contratar Pro
									</Link>
								</div>
							</div>
						</div>

						{/* Opción 3: Next.js */}
						<div className="flex">
							<div
								className="h-full flex flex-col bg-gray-900/50 border border-gray-700 rounded-lg p-6"
							>
								<div className="flex-grow">
									<h3 className="text-2xl font-bold">Blog Ultimate (Next.js)</h3>
									<p className="text-5xl font-bold my-4">
										$14,999 <span className="text-base font-normal">MXN</span>
									</p>
									<p className="text-gray-300">
										La solución más rápida y segura. Un{" "}
										blog en Next.js con un{" "}
										blog con CMS Headless (Strapi).
									</p>
									<ul className="text-left mt-4 space-y-2 list-disc pl-5 text-gray-300">
										<li>Plataforma: Next.js + Strapi CMS</li>
										<li>Dominio Personalizado (1 Año)</li>
										<li>Hosting Vercel/Netlify (Incluido)</li>
										<li>Rendimiento y Seguridad Superior</li>
										<li>100% Personalizado a tu marca</li>
									</ul>
								</div>
								<div className="mt-auto pt-6">
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
			</section>

			{/* --- Sección de Video (Requisito de SEMrush) --- */}
			<section className="text-white py-12 md:py-20 gradient-effect-y text-center">
				<div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold">Video: ¿Qué es un Blog con CMS Headless?</h2>
					<p className="text-lg md:text-xl mt-4">
						El futuro de la gestión de contenido es "headless".
						Mira este video donde explicamos por qué un{" "}
						blog en Next.js con un{" "}
						blog con CMS (como Strapi) es técnicamente superior
						a las plataformas tradicionales como WordPress.
					</p>
					<div
						className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto mt-8"
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
			<section className="text-white py-12 md:py-20 gradient-effect-x text-center">
				<div className="container mx-auto px-4" style={{ maxWidth: "800px" }}>
					<h2 className="text-3xl md:text-4xl font-bold">Cómo Promocionar tu Blog</h2>
					<p className="text-lg md:text-xl mt-4">
						Nuestro servicio de desarrollo de blogs te da la
						plataforma. El éxito viene al promociona tu blog.
					</p>
					<ol className="text-left max-w-md mx-auto mt-8 space-y-4 text-gray-300">
						<li>
							Email Marketing: Captura el{" "}
							correo electrónico de tus lectores y envíales
							cada nueva entrada de blog.
						</li>
						<li>
							Redes Sociales:{" "}
							Promociona tu blog en todos tus canales
							sociales (LinkedIn, Instagram, X) para alcanzar a tu{" "}
							público objetivo.
						</li>
						<li>
							Herramientas de Marketing: Integramos tu blog
							con Google Analytics y Search Console para medir tu tráfico y
							encontrar nuevas oportunidades.
						</li>
					</ol>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ faqs={faqs} subtitle="Preguntas Frecuentes sobre Desarrollo de Blogs" />
			<section className="flex flex-col justify-content-center align-items-center text-center text-white w-full p-4 xl:p-20 gap-3">
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
