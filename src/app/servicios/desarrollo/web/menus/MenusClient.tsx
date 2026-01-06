// Ruta: /servicios/desarrollo/web/menus/page
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import CTAProducts from "@/components/Cta/CTAProducts"; // Asumo que tienes un CTA

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
			<section className="flex flex-col justify-center items-center text-white py-12 md:py-20 gradient-effect-x text-center">
				<div className="flex flex-col justify-center items-center mx-auto px-4">
					<h1 className="text-4xl md:text-5xl font-extrabold">Creación de Menús Digitales QR</h1>
					<p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
						Moderniza la experiencia de tus clientes y ahorra costos de
						impresión. Creamos un <strong>menú digital QR</strong> interactivo
						para tu restaurante, bar o cafetería. Es rápido, económico y 100%
						actualizable por ti mismo.
					</p>
				</div>
			</section>

			{/* --- Sección de Paquetes (BOFU) --- */}
			<section className="flex flex-col justify-center items-center text-white py-12 md:py-20 gradient-effect-y text-center">
				<div className="flex flex-col justify-center items-center mx-auto px-4" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Paquetes de Menú Digital</h2>
					<p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
						Elige la plataforma que mejor se adapte al estilo de tu restaurante.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center">
						{/* Opción 1: Google Sites */}
						<div className="flex justify-center">
							<div
								className="h-full flex flex-col bg-gray-900/50 border border-gray-700 rounded-lg p-6 max-w-md"
							>
								<div className="flex-grow">
									<h3 className="text-2xl font-bold">Menú Web (Google Sites)</h3>
									<p className="text-5xl font-bold my-4">
										$299 <span className="text-base font-normal">MXN</span>
									</p>
									<p className="text-gray-300">
										Un "mini-sitio" web para tu menú. Ideal para menús extensos
										que necesitan múltiples secciones (Ej. Comida, Bebidas,
										Postres).
									</p>
									<ul className="text-left mt-4 space-y-2 list-disc pl-5 text-gray-300">
										<li>Diseño limpio y fácil de navegar</li>
										<li>Estructura multi-página (hasta 5)</li>
										<li>Hosting Gratuito en Google Sites</li>
										<li>Tú mismo puedes editar los precios</li>
									</ul>
								</div>
								<div className="mt-auto pt-6">
									<Link
										href="/contacto?producto=menu-google-sites"
										className="btn-services"
									>
										Contratar por $299
									</Link>
								</div>
							</div>
						</div>

						{/* Opción 2: Canva Premium */}
						<div className="flex justify-center">
							<div
								className="h-full flex flex-col bg-gray-900/50 border border-gray-700 rounded-lg p-6 max-w-md"
							>
								<div className="flex-grow">
									<h3 className="text-2xl font-bold">Menú Premium (Canva)</h3>
									<p className="text-5xl font-bold my-4">
										$399 <span className="text-base font-normal">MXN</span>
									</p>
									<p className="text-gray-300">
										Un <strong>diseño de menú digital</strong> visualmente
										impactante, con el estilo gráfico de Canva, publicado como
										un sitio web de una sola página.
									</p>
									<ul className="text-left mt-4 space-y-2 list-disc pl-5 text-gray-300">
										<li>Diseño gráfico premium</li>
										<li>Formato "One-Page" (una sola página)</li>
										<li>Hosting Gratuito en Canva</li>
										<li>Tú mismo puedes editar los precios</li>
									</ul>
								</div>
								<div className="mt-auto pt-6">
									<Link
										href="/contacto?producto=menu-canva"
										className="btn-services"
									>
										Contratar por $399
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Beneficios (MOFU / Informativa) --- */}
			<section className="flex flex-col justify-center items-center text-white py-12 md:py-20 gradient-effect-x">
				<div className="flex flex-col justify-center items-center mx-auto px-4" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Ventajas de un Menú Digital QR</h2>
					<p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
						Modernizar tu menú no es un gasto, es una inversión. Las ventajas
						principales son:
					</p>
					{/* Asumo un layout de 2 columnas */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h4 className="text-xl font-semibold mb-2">Actualización Instantánea</h4>
							<p className="text-gray-300">
								¿Cambió el precio de un platillo? ¿Se acabó un ingrediente? No
								hay problema. Puedes actualizar tu menú en segundos sin gastar
								en reimpresiones.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Ecológico y Económico</h4>
							<p className="text-gray-300">
								Ahorra miles de pesos al año en costos de impresión y diseño.
								Además, reduces tu huella de carbono al eliminar el desperdicio
								de papel.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Experiencia Visual</h4>
							<p className="text-gray-300">
								Un menú de papel no tienta. Un menú digital te permite mostrar
								fotos de alta calidad de tus platillos, haciendo que tus
								clientes pidan más.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Higiénico y Seguro</h4>
							<p className="text-gray-300">
								Ofrece una experiencia sin contacto. Tus clientes escanean el QR
								con su propio celular, eliminando la necesidad de manejar menús
								físicos que pasan de mano en mano.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Características Incluidas (MOFU) --- */}
			<section className="flex flex-col justify-center items-center text-white py-12 md:py-20 gradient-effect-y text-center">
				<div className="flex flex-col justify-center items-center mx-auto px-4 flex flex-col justify-center items-center" style={{ maxWidth: "1200px" }}>
					<h2 className="text-3xl md:text-4xl font-bold">Nuestro Servicio de Menú Digital Incluye</h2>
					<ol className="text-left max-w-2xl mx-auto mt-8 space-y-4 text-gray-300 text-lg">
						<li>
							<strong>Diseño y Configuración:</strong> Creamos la página con
							tu logo, colores y platillos.
						</li>
						<li>
							<strong>Generación de Código QR:</strong> Te entregamos el
							archivo QR listo para imprimir.
						</li>
						<li>
							<strong>Enlaces Adicionales:</strong> Agregamos botones a tus
							redes sociales o plataformas de domicilio (Rappi, UberEats).
						</li>
						<li>
							<strong>Mini-Capacitación:</strong> Te mostramos en 5 minutos
							cómo editar tus precios tú mismo.
						</li>
					</ol>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ faqs={faqs} />

			{/* --- Sección CTA Final (BOFU) --- */}

			<section className="flex flex-col justify-center items-center text-center text-white w-full p-4 xl:p-20 gap-3">
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
