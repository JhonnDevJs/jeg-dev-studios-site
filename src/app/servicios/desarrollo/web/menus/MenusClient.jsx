// Ruta: /servicios/desarrollo/web/menus/page.jsx
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import CTAProducts from "@/components/Cta/CTAProducts"; // Asumo que tienes un CTA

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

const faqs = [
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
					<h1>Creación de Menús Digitales QR</h1>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Moderniza la experiencia de tus clientes y ahorra costos de
						impresión. Creamos un <strong>menú digital QR</strong> interactivo
						para tu restaurante, bar o cafetería. Es rápido, económico y 100%
						actualizable por ti mismo.
					</p>
				</div>
			</section>

			{/* --- Sección de Paquetes (BOFU) --- */}
			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="mb-4">Nuestros Paquetes de Menú Digital</h2>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Elige la plataforma que mejor se adapte al estilo de tu restaurante.
					</p>

					<div className="row justify-content-center align-items-stretch mt-4 gy-4">
						{/* Opción 1: Google Sites */}
						<div className="col-lg-5">
							<div
								className="card h-100"
								style={{ backgroundColor: "#222", color: "white" }}
							>
								<div className="card-body d-flex flex-column">
									<h3 className="card-title">Menú Web (Google Sites)</h3>
									<p className="fs-2 fw-bold">
										$299 <span className="fs-6 fw-normal">MXN</span>
									</p>
									<p className="card-text">
										Un "mini-sitio" web para tu menú. Ideal para menús extensos
										que necesitan múltiples secciones (Ej. Comida, Bebidas,
										Postres).
									</p>
									<ul
										className="text-start mt-3"
										style={{ paddingLeft: "20px" }}
									>
										<li>Diseño limpio y fácil de navegar</li>
										<li>Estructura multi-página (hasta 5)</li>
										<li>Hosting Gratuito en Google Sites</li>
										<li>Tú mismo puedes editar los precios</li>
									</ul>
									<div className="mt-auto pt-3">
										<Link
											href="/contacto?producto=menu-google-sites"
											className="btn-services"
										>
											Contratar por $299
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* Opción 2: Canva Premium */}
						<div className="col-lg-5">
							<div
								className="card h-100"
								style={{ backgroundColor: "#222", color: "white" }}
							>
								<div className="card-body d-flex flex-column">
									<h3 className="card-title">Menú Premium (Canva)</h3>
									<p className="fs-2 fw-bold">
										$399 <span className="fs-6 fw-normal">MXN</span>
									</p>
									<p className="card-text">
										Un <strong>diseño de menú digital</strong> visualmente
										impactante, con el estilo gráfico de Canva, publicado como
										un sitio web de una sola página.
									</p>
									<ul
										className="text-start mt-3"
										style={{ paddingLeft: "20px" }}
									>
										<li>Diseño gráfico premium</li>
										<li>Formato "One-Page" (una sola página)</li>
										<li>Hosting Gratuito en Canva</li>
										<li>Tú mismo puedes editar los precios</li>
									</ul>
									<div className="mt-auto pt-3">
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
				</div>
			</section>

			{/* --- Sección de Beneficios (MOFU / Informativa) --- */}
			<section className="text-white py-5 gradient-effect-x">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">Ventajas de un Menú Digital QR</h2>
					<p
						className="fs-5 text-center lead"
						style={{ maxWidth: "800px", margin: "auto", marginBottom: "3rem" }}
					>
						Modernizar tu menú no es un gasto, es una inversión. Las ventajas
						principales son:
					</p>
					{/* Asumo un layout de 2 columnas */}
					<div className="row">
						<div className="col-md-6 mb-4">
							<h4>Actualización Instantánea</h4>
							<p className="fs-5">
								¿Cambió el precio de un platillo? ¿Se acabó un ingrediente? No
								hay problema. Puedes actualizar tu menú en segundos sin gastar
								en reimpresiones.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Ecológico y Económico</h4>
							<p className="fs-5">
								Ahorra miles de pesos al año en costos de impresión y diseño.
								Además, reduces tu huella de carbono al eliminar el desperdicio
								de papel.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Experiencia Visual</h4>
							<p className="fs-5">
								Un menú de papel no tienta. Un menú digital te permite mostrar
								fotos de alta calidad de tus platillos, haciendo que tus
								clientes pidan más.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Higiénico y Seguro</h4>
							<p className="fs-5">
								Ofrece una experiencia sin contacto. Tus clientes escanean el QR
								con su propio celular, eliminando la necesidad de manejar menús
								físicos que pasan de mano en mano.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Características Incluidas (MOFU) --- */}
			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container justify-content-center align-items-center" style={{ maxWidth: "1200px" }}>
					<h2>Nuestro Servicio de Menú Digital Incluye</h2>
					<ol
						style={{
							textAlign: "left",
							margin: "2rem auto",
						}}
					>
						<li className="fs-5">
							<p className="fs-5">
								<strong>Diseño y Configuración:</strong> Creamos la página con
								tu logo, colores y platillos.
							</p>
						</li>
						<li className="fs-5">
							<p className="fs-5">
								<strong>Generación de Código QR:</strong> Te entregamos el
								archivo QR listo para imprimir.
							</p>
						</li>
						<li className="fs-5">
							<p className="fs-5">
								<strong>Enlaces Adicionales:</strong> Agregamos botones a tus
								redes sociales o plataformas de domicilio (Rappi, UberEats).
							</p>
						</li>
						<li className="fs-5">
							<p className="fs-5">
								<strong>Mini-Capacitación:</strong> Te mostramos en 5 minutos
								cómo editar tus precios tú mismo.
							</p>
						</li>
					</ol>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ faqs={faqs} title="Preguntas Frecuentes sobre Menús Digitales" />

			{/* --- Sección CTA Final (BOFU) --- */}

			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
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
