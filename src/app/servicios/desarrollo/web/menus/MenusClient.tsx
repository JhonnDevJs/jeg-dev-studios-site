// Ruta: /servicios/desarrollo/web/menus/page
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import CTAProducts from "@/components/Cta/CTAProducts"; // Asumo que tienes un CTA
import CardPricing from "@/components/Cards/CardPricing";
import CardSmallList from "@/components/Cards/CardSmallList";
import ShowcaseSection from "@/components/ShowcaseSection";

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question: "¿Si cambio un precio o un platillo, tengo que pagar de nuevo?",
		answer:
			"¡No! Esa es la principal ventaja. Tanto en Google Sites como en Canva, te damos acceso para que tú mismo puedas editar los textos y precios de forma súper sencilla, en cualquier momento y sin costo adicional.",
	},
	{
		question: "¿Qué necesitan de mi parte para crear el menú?",
		answer:
			"Solo necesitamos tu menú en un formato de texto (Word, PDF, o incluso un mensaje) y las fotos de tus platillos en la mejor calidad posible. Nosotros nos encargamos del resto.",
	},
	{
		question: "¿El servicio incluye el código QR?",
		answer:
			"¡Por supuesto! Te entregamos el código QR en alta resolución (formato PNG y SVG) listo para que lo imprimas y lo coloques en tus mesas.",
	},
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function MenusPage() {
	return (
		<>
			{/* --- INYECCIÓN DE SCHEMAS --- */}
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-menus" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-menus" />
			{/* (Opcional: puedes crear un schema "Service" con las dos "offers" de $299 y $399) */}

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
			<section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4 text-center">
				<div className="flex flex-col justify-center items-center w-full">
					<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Creación de Menús Digitales QR</h1>
					<p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600 dark:text-white">
						Moderniza la experiencia de tus clientes y ahorra costos de
						impresión. Creamos un <strong>menú digital QR</strong> interactivo
						para tu restaurante, bar o cafetería. Es rápido, económico y 100%
						actualizable por ti mismo.
					</p>
				</div>
			</section>

			{/* --- SECCIÓN DE MUESTRA VISUAL --- */}
			<ShowcaseSection
				imageSrc="/banners/Christmas/Web.webp"
				alt="Ejemplo de Menú Digital QR"
				title="Navegación Intuitiva"
				badgeColor="bg-red-600"
			/>

			{/* --- Sección de Paquetes (BOFU) --- */}
			<section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y text-center">
				<div className="flex flex-col justify-center items-center w-full" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Nuestros Paquetes de Menú Digital</h2>
					<p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-600 dark:text-white">
						Elige la plataforma que mejor se adapte al estilo de tu restaurante.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center">
						{/* Opción 1: Google Sites */}
						<CardPricing
							title="Menú Web (Google Sites)"
							price="299"
							currency="MXN"
							description='Un "mini-sitio" web para tu menú. Ideal para menús extensos que necesitan múltiples secciones (Ej. Comida, Bebidas, Postres).'
							features={[
								"Diseño limpio y fácil de navegar",
								"Estructura multi-página (hasta 5)",
								"Hosting Gratuito en Google Sites",
								"Tú mismo puedes editar los precios",
							]}
							buttonLabel="Contratar por $299"
							buttonLink="/contacto?producto=menu-google-sites"
						/>

						{/* Opción 2: Canva Premium */}
						<CardPricing
							title="Menú Premium (Canva)"
							price="399"
							currency="MXN"
							description="Un diseño de menú digital visualmente impactante, con el estilo gráfico de Canva, publicado como un sitio web de una sola página."
							features={[
								"Diseño gráfico premium",
								'Formato "One-Page" (una sola página)',
								"Hosting Gratuito en Canva",
								"Tú mismo puedes editar los precios",
							]}
							buttonLabel="Contratar por $399"
							buttonLink="/contacto?producto=menu-canva"
						/>
					</div>
				</div>
			</section>

			{/* --- SECCIÓN VISUAL: INTERFAZ DE MENÚ --- */}
			<section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
				<div className="container mx-auto max-w-6xl">
					<div className="flex flex-col md:flex-row-reverse gap-12 items-center justify-center">
						{/* Wireframe Menu Mobile */}
						<div className="w-full md:w-1/3 relative flex justify-center">
							<div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
								<div className="w-full h-full bg-white dark:bg-gray-800 overflow-y-auto no-scrollbar relative">
									{/* Header */}
									<div className="sticky top-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-10 p-4 border-b border-gray-100 dark:border-gray-700">
										<div className="w-24 h-6 bg-gray-200 dark:bg-gray-600 rounded mx-auto"></div>
									</div>
									{/* Categories */}
									<div className="flex gap-2 p-4 overflow-x-auto no-scrollbar">
										<div className="w-20 h-8 bg-black dark:bg-white rounded-full shrink-0"></div>
										<div className="w-20 h-8 bg-gray-100 dark:bg-gray-700 rounded-full shrink-0"></div>
										<div className="w-20 h-8 bg-gray-100 dark:bg-gray-700 rounded-full shrink-0"></div>
									</div>
									{/* Items */}
									<div className="p-4 space-y-4">
										{[1, 2, 3].map((i) => (
											<div key={i} className="flex gap-3">
												<div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg shrink-0"></div>
												<div className="flex-grow space-y-2">
													<div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
													<div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded"></div>
													<div className="w-1/3 h-4 bg-green-100 dark:bg-green-900/30 rounded text-green-600 text-[10px] flex items-center px-1 font-bold">$</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>

						<div className="w-full md:w-1/2 text-left">
							<div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-red-600 uppercase bg-red-100 rounded-full dark:bg-red-900/30 dark:text-red-400">
								Apetito Visual
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
								Menús que Provocan Hambre
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
								La fotografía es clave. Diseñamos interfaces limpias donde tus platillos son los protagonistas.
							</p>
							<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
								Categorización inteligente para que el cliente encuentre rápido lo que busca, aumentando la rotación de mesas.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Beneficios (MOFU / Informativa) --- */}
			<section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4">
				<div className="flex flex-col justify-center items-center w-full" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Ventajas de un Menú Digital QR</h2>
					<p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600 dark:text-white">
						Modernizar tu menú no es un gasto, es una inversión. Las ventajas
						principales son:
					</p>
					{/* Asumo un layout de 2 columnas */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
								<h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Actualización Instantánea</h4>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									¿Cambió el precio de un platillo? ¿Se acabó un ingrediente? No
									hay problema. Puedes actualizar tu menú en segundos sin gastar
									en reimpresiones.
								</p>
							</div>
						</div>
						<div>
							<div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
								<h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Ecológico y Económico</h4>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									Ahorra miles de pesos al año en costos de impresión y diseño.
									Además, reduces tu huella de carbono al eliminar el desperdicio
									de papel.
								</p>
							</div>
						</div>
						<div>
							<div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
								<h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Experiencia Visual</h4>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									Un menú de papel no tienta. Un menú digital te permite mostrar
									fotos de alta calidad de tus platillos, haciendo que tus
									clientes pidan más.
								</p>
							</div>
						</div>
						<div>
							<div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
								<h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Higiénico y Seguro</h4>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									Ofrece una experiencia sin contacto. Tus clientes escanean el QR
									con su propio celular, eliminando la necesidad de manejar menús
									físicos que pasan de mano en mano.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Características Incluidas (MOFU) --- */}
			<section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y text-center">
				<CardSmallList
					titulo="Nuestro Servicio de Menú Digital Incluye"
					subtitulo="Todo lo que necesitas para digitalizar tu oferta gastronómica."
					list={[
						"Diseño y Configuración: Creamos la página con tu logo, colores y platillos.",
						"Generación de Código QR: Te entregamos el archivo QR listo para imprimir.",
						"Enlaces Adicionales: Agregamos botones a tus redes sociales o plataformas de domicilio (Rappi, UberEats).",
						"Mini-Capacitación: Te mostramos en 5 minutos cómo editar tus precios tú mismo.",
					]}
				/>
			</section>
			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<FAQ faqs={faqs} />
			</section>

			{/* --- Sección CTA Final (BOFU) --- */}

			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<CTAProducts
					title={"Moderniza tu Restaurante Hoy Mismo"}
					paragraph={
						"Deja atrás los menús de papel costosos y difíciles de actualizar. Ofrece a tus clientes una experiencia moderna e interactiva por un pago único."
					}
					links={[
						{
							label: "Solicitar mi Menú Digital",
							link: "/contacto",
							type: "services", // Puedes usar 'services' o 'outline'
						},
					]}
				/>
			</section>
		</>
	);
}
