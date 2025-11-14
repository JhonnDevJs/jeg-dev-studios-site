// Ruta: /servicios/desarrollo/web/invitaciones/page.jsx
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import CTAProducts from "@/components/Cta/CTAProducts"; // Asumo que tienes un CTA

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

const faqs = [
	{
		question:
			"¿Cuál es la diferencia entre la invitación de Google Sites y la de Canva?",
		answer:
			"La invitación de <strong>Google Sites ($299)</strong> es un 'mini-sitio' web funcional y fácil de navegar, ideal para organizar mucha información. La invitación de <strong>Canva ($399)</strong> se enfoca más en un diseño visual premium, con animaciones y un estilo de 'una sola página' publicado como web.",
	},
	{
		question: "¿En cuánto tiempo entregan la invitación digital?",
		answer:
			"Una vez que nos entregas toda la información (fotos, direcciones, fechas), nuestro tiempo de entrega estándar es de 2 a 3 días hábiles.",
	},
	{
		question: "¿El servicio incluye la confirmación de asistencia (RSVP)?",
		answer:
			"¡Sí! Todas nuestras invitaciones web incluyen un botón de <strong>'Confirmar Asistencia'</strong>  que se enlaza directamente a tu WhatsApp, facilitando que tus invitados te confirmen al instante.",
	},
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function InvitacionesPage() {
	return (
		<>
			{/* --- INYECCIÓN DE SCHEMAS --- */}
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-invitaciones" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-invitaciones" />
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
					<h1>Creación de Invitaciones Digitales Web</h1>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Dale a tu evento la presentación que se merece. Creamos invitaciones
						web interactivas para Bodas, XV Años, Bautizos y más. Son modernas,
						ecológicas y la forma más fácil de compartir todos los detalles con
						tus invitados en un solo enlace.
					</p>
				</div>
			</section>

			{/* --- Sección de Paquetes (BOFU) --- */}
			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="mb-4">Nuestros Paquetes de Invitaciones Digitales</h2>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Elige la plataforma que mejor se adapte a tu estilo y presupuesto.
					</p>

					<div className="row justify-content-center align-items-stretch mt-4 gy-4">
						{/* Opción 1: Google Sites */}
						<div className="col-lg-5">
							<div
								className="card h-100"
								style={{ backgroundColor: "#222", color: "white" }}
							>
								<div className="card-body d-flex flex-column">
									<h3 className="card-title">Invitación Web (Google Sites)</h3>
									<p className="fs-2 fw-bold">
										$299 <span className="fs-6 fw-normal">MXN</span>
									</p>
									<p className="card-text">
										Un "mini-sitio" web funcional y elegante. Ideal para
										organizar toda la información de tu evento en varias
										secciones y un solo enlace.
									</p>
									<ul
										className="text-start mt-3"
										style={{ paddingLeft: "20px" }}
									>
										<li>Diseño multidispositivo (Responsivo)</li>
										<li>Publicación web con enlace personalizado</li>
										<li>Hosting Gratuito en Google Sites</li>
										<li>
											Hasta 5 secciones (Ej. Inicio, Ubicaciones, Galería)
										</li>
									</ul>
									<div className="mt-auto pt-3">
										<Link
											href="/contacto?producto=invitacion-google-sites"
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
									<h3 className="card-title">Invitación Premium (Canva)</h3>
									<p className="fs-2 fw-bold">
										$399 <span className="fs-6 fw-normal">MXN</span>
									</p>
									<p className="card-text">
										Un diseño premium y animado con el estilo visual de Canva,
										entregado como un sitio web interactivo de una sola página
										(one-page).
									</p>
									<ul
										className="text-start mt-3"
										style={{ paddingLeft: "20px" }}
									>
										<li>Diseño premium con animaciones</li>
										<li>Publicación web con enlace personalizado</li>
										<li>Hosting Gratuito en Canva</li>
										<li>Formato "One-Page" (una sola página larga)</li>
									</ul>
									<div className="mt-auto pt-3">
										<Link
											href="/contacto?producto=invitacion-canva"
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

			{/* --- Sección de Características (MOFU / Informativa) --- */}
			<section className="text-white py-5 gradient-effect-x">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="text-center mb-4">
						Todas Nuestras Invitaciones Incluyen
					</h2>
					<p
						className="fs-5 text-center lead"
						style={{ maxWidth: "800px", margin: "auto", marginBottom: "3rem" }}
					>
						Basado en los elementos más importantes para un evento exitoso,
						integramos todas las características que tú y tus invitados
						necesitan:
					</p>
					{/* Asumo un layout de 2 columnas */}
					<div className="row">
						<div className="col-md-6 mb-4">
							<h4>Cuenta Regresiva</h4>
							<p className="fs-5">
								Un contador dinámico que muestra los días, horas y minutos
								faltantes para tu gran día.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Mapas Interactivos</h4>
							<p className="fs-5">
								Integración con Google Maps para la Ceremonia y la
								Recepción, para que nadie se pierda.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Galería de Fotos</h4>
							<p className="fs-5">
								Un espacio para compartir tus fotos favoritas con tus invitados
								(Ej. "Mis Recuerdos").
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Confirmación por WhatsApp (RSVP)</h4>
							<p className="fs-5">
								Un botón de "Confirmar Asistencia" que abre un mensaje de
								WhatsApp listo para enviarte la confirmación.
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Código de Vestimenta</h4>
							<p className="fs-5">
								Una sección clara para indicar el código de vestimenta (Ej.
								Formal, Etiqueta).
							</p>
						</div>
						<div className="col-md-6 mb-4">
							<h4>Mesa de Regalos</h4>
							<p className="fs-5">
								Espacio para tu enlace a Liverpool, Amazon, o indicar "Lluvia de
								Sobres".
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ
				faqs={faqs}
				title="Preguntas Frecuentes sobre Invitaciones Digitales"
			/>

			{/* --- Sección CTA Final (BOFU) --- */}

			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
				<CTAProducts
					title={"¿Listo para tu Evento?"}
					paragraph={
						"Deja atrás el papel y las invitaciones estáticas. Elige tu paquete y comparte tu evento de forma elegante e interactiva."
					}
					links={[
						{
							label: "Solicitar mi Invitación Digital",
							link: "/contacto",
							type: "services", // Puedes usar 'services' o 'outline'
						},
					]}
				/>
			</section>
		</>
	);
}
