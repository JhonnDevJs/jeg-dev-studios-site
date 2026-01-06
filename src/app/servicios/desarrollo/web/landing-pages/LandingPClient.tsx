// Ruta: /servicios/desarrollo/web/landing-pages/page
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import SectionProcess from "@/components/SectionProcess";

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question: "¿Cuál es la diferencia entre una 'landing page' y un sitio web?",
		answer:
			"Un sitio web tiene múltiples objetivos (informar, contactar, etc.). Una landing page (o página de aterrizaje) tiene UN solo objetivo: que el usuario realice una acción deseada específica. Esto es clave para aumentar las conversiones.",
	},
	{
		question: "¿Qué son las 'páginas de destino'?",
		answer:
			"Páginas de destino y páginas de aterrizaje son lo mismo. Son páginas diseñadas para recibir el tráfico de campañas de marketing (ya sea desde redes sociales, anuncios de Google o un correo electrónico) y convertir a ese visitante en un cliente potencial.",
	},
	{
		question: "¿Cómo miden el éxito de una landing page?",
		answer:
			"Una landing page efectiva se mide por su tasa de conversión (cuántas personas realizan la llamada a la acción) y su tasa de rebote. Nuestro proceso está diseñado para maximizar la primera y minimizar la segunda.",
	},
];

export default function LandingPageDevelopmentPage() {
	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-landing" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-landing" />

			{/* --- HERO SECTION --- */}
			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Web.webp"
					alt="Desarrollo de Landing Pages de Alta Conversión"
					width={2000}
					height={600}
					className="w-full h-auto"
				/>
			</section>

			<section className="flex flex-col justify-center items-center text-white py-5 gradient-effect-x text-center">
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-4xl md:text-5xl font-bold">Diseño de Landing Page de Alta Conversión</h1>
					<p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mt-4">
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
			<section className="flex flex-col justify-center items-center text-white py-5 gradient-effect-y">
				<div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
						¿Cuándo es Indispensable una Landing Page?
					</h2>
					<p className="text-lg md:text-xl text-center mb-5 max-w-4xl mx-auto">
						No siempre necesitas un sitio web completo. Una{" "}
						<strong>landing page para campañas de marketing</strong>
						es la herramienta correcta cuando tienes un objetivo específico y
						necesitas enfocar la atención de tu
						<strong>público objetivo</strong> sin distracciones.
					</p>

					<div className="grid md:grid-cols-2 gap-4">
						<div>
							<div className="p-4 border border-gray-700 rounded-lg bg-black/25 h-full">
								<h3 className="text-xl font-bold text-cyan-400 mb-2">
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
						<div>
							<div className="p-4 border border-gray-700 rounded-lg bg-black/25 h-full">
								<h3 className="text-xl font-bold text-cyan-400 mb-2">
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
						<div>
							<div className="p-4 border border-gray-700 rounded-lg bg-black/25 h-full">
								<h3 className="text-xl font-bold text-cyan-400 mb-2">
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
						<div>
							<div className="p-4 border border-gray-700 rounded-lg bg-black/25 h-full">
								<h3 className="text-xl font-bold text-cyan-400 mb-2">Eventos y Webinars</h3>
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
			<section className="flex flex-col justify-center items-center text-white py-5 gradient-effect-x">
				<div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						La Anatomía de una Landing Page Efectiva
					</h2>
					<p className="text-lg md:text-xl text-center mb-5 max-w-4xl mx-auto">
						Para <strong>optimizar una landing page</strong>, no basta con un
						diseño bonito. Aplicamos una estructura probada para{" "}
						<strong>captar la atención</strong> y guiar hacia la{" "}
						<strong>toma de decisiones</strong>.
					</p>

					<div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-left">
						<div className="mb-4">
							<h4 className="text-lg font-bold">1. Título de Impacto (Hook)</h4>
							<p>
								El primer mensaje que ve tu usuario. Debe ser claro y prometer
								la solución a su problema en menos de 3 segundos.
							</p>
						</div>
						<div className="mb-4">
							<h4 className="text-lg font-bold">2. Beneficios, no Características</h4>
							<p>
								Explicamos cómo tu producto mejora la vida del cliente. Usamos
								listas con viñetas para facilitar la lectura rápida.
							</p>
						</div>
						<div className="mb-4">
							<h4 className="text-lg font-bold">3. Un Único "Call to Action"</h4>
							<p>
								Eliminamos fugas. Ya sea "Comprar", "Registrarse" o "Descargar",
								todos los botones de la página tienen el mismo objetivo.
							</p>
						</div>
						<div className="mb-4">
							<h4 className="text-lg font-bold">4. Prueba Social (Confianza)</h4>
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
			<section className="flex flex-col justify-center items-center text-white py-5 gradient-effect-y text-center">
				<div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold">Cómo Optimizar tu Landing Page</h2>
					<p className="text-lg md:text-xl mb-4">
						Creamos <strong>páginas de destino</strong> que siguen una
						estructura probada. Mira este video donde explicamos los 5 elementos
						clave para <strong>optimizar una landing page</strong>.
					</p>
					<div className="video-responsive-container max-w-3xl mx-auto">
						{/* AQUÍ VA TU VIDEO */}
						{/* <iframe ... /> */}
					</div>
				</div>
			</section>

			{/* --- NUEVA SECCIÓN: COMPARATIVA TÉCNICA (Aumenta volumen y autoridad) --- */}
			<section className="flex flex-col justify-center items-center text-white py-5 gradient-effect-x">
				<div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
						Tecnología: Creador Gratuito vs. Desarrollo a Medida
					</h2>
					<div className="table-responsive">
						<table className="w-full text-left border-collapse">
							<thead>
								<tr className="text-center">
									<th scope="col" className="text-lg p-2 border border-gray-700">
										Característica
									</th>
									<th scope="col" className="text-lg p-2 border border-gray-700 text-gray-400">
										Creador Genérico (Wix, etc.)
									</th>
									<th scope="col" className="text-lg p-2 border border-gray-700 text-cyan-400">
										Desarrollo a Medida (Next.js)
									</th>
								</tr>
							</thead>
							<tbody className="align-middle">
								<tr className="bg-white/5">
									<td className="font-bold p-2 border border-gray-700">Velocidad de Carga</td>
									<td className="p-2 border border-gray-700">Lenta (mucho código basura)</td>
									<td className="text-cyan-400 font-bold p-2 border border-gray-700">
										Extrema (Código optimizado)
									</td>
								</tr>
								<tr>
									<td className="font-bold p-2 border border-gray-700">Personalización</td>
									<td className="p-2 border border-gray-700">Limitada a la plantilla</td>
									<td className="text-cyan-400 font-bold p-2 border border-gray-700">
										100% Total (Pixel Perfect)
									</td>
								</tr>
								<tr className="bg-white/5">
									<td className="font-bold p-2 border border-gray-700">Tasa de Rebote</td>
									<td className="p-2 border border-gray-700">Alta (por lentitud)</td>
									<td className="text-cyan-400 font-bold p-2 border border-gray-700">
										Mínima (Carga instantánea)
									</td>
								</tr>
								<tr>
									<td className="font-bold p-2 border border-gray-700">SEO Técnico</td>
									<td className="p-2 border border-gray-700">Básico</td>
									<td className="text-cyan-400 font-bold p-2 border border-gray-700">
										Avanzado (Core Web Vitals)
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p className="text-center mt-4 text-lg">
						Un desarrollo a medida reduce la <strong>tasa de rebote</strong> y
						mejora la experiencia en
						<strong>dispositivos móviles</strong>, factores que Google ama.
					</p>
				</div>
			</section>

			{/* --- SECCIÓN DE PAQUETES (BOFU) --- */}
			<section className="flex flex-col justify-center items-center text-white py-5 gradient-effect-y text-center">
				<div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Soluciones de Landing Page</h2>
					<p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
						Ofrecemos dos caminos para tu{" "}
						<strong>landing page para campañas de marketing</strong>,
						dependiendo de tu necesidad y presupuesto.
					</p>

					<div className="flex flex-wrap justify-center items-stretch mt-5 gap-8">
						{/* Opción 1: Google Sites */}
						<div className="w-full lg:w-5/12">
							<div className="bg-[#222] text-white rounded-lg h-full flex flex-col p-6">
								<div className="flex-grow">
									<h3 className="text-2xl font-bold">Landing Page Profesional</h3>
									<p className="text-4xl font-bold my-2">
										$2,999 <span className="text-base font-normal">MXN</span>
									</p>
									<p>
										Solución rápida y económica en Google Sites. Ideal para
										validar ideas o negocios que empiezan.
									</p>
									<ul className="text-left mt-3 list-disc list-inside space-y-2">
										<li>Dominio personalizado incluido (1 año)</li>
										<li>Hosting gratuito (Google Sites)</li>
										<li>Diseño responsivo básico</li>
										<li>Hasta 5 secciones</li>
									</ul>
								</div>
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

						{/* Opción 2: Next.js */}
						<div className="w-full lg:w-5/12">
							<div className="bg-[#1a1a1a] text-white rounded-lg border border-cyan-500 h-full flex flex-col p-6">
								<div className="flex-grow">
									<div className="bg-cyan-500 text-black text-sm font-bold px-2 py-1 rounded-full inline-block mb-2">
										Recomendado
									</div>
									<h3 className="text-2xl font-bold">Landing de Alto Rendimiento</h3>
									<p className="text-4xl font-bold my-2">
										Desde $4,999 <span className="text-base font-normal">MXN</span>
									</p>
									<p>
										La solución definitiva para campañas serias. Desarrollada en
										Next.js para máxima velocidad y SEO.
									</p>
									<ul className="text-left mt-3 list-disc list-inside space-y-2">
										<li>Performance +90 Garantizado</li>
										<li>Diseño UI/UX en Figma (A medida)</li>
										<li>Formularios avanzados con integraciones</li>
										<li>Hosting y Dominio incluidos (1 año)</li>
									</ul>
								</div>
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
			</section>

			{/* --- SECCIÓN DE PROCESO DETALLADO --- */}
			<section className="flex flex-col justify-center items-center text-center text-white w-full p-4 xl:p-20 gap-3 gradient-effect-x">
				<SectionProcess
					title={"Nuestro Proceso de Optimización (CRO)"}
					text={
						"No solo diseñamos, optimizamos. Nuestro proceso de Conversion Rate Optimization (CRO) asegura que tu inversión en publicidad rinda frutos."
					}
				/>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ faqs={faqs} />
		</>
	);
}
