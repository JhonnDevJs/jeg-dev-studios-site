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
			"La invitación de <strong>Google Sites ($299)</strong> es un 'mini-sitio' web funcional y fácil de navegar, ideal para organizar mucha información. Las <strong>invitaciones digitales Canva ($399)</strong> se enfocan más en un diseño visual premium, con animaciones y un estilo de 'una sola página' publicado como web.",
	},
	{
		question: "¿En cuánto tiempo entregan la invitación digital?",
		answer:
			"Una vez que nos entregas toda la información (fotos, direcciones, fechas) y confirmas tu <strong>método de pago</strong>, nuestro tiempo de entrega estándar es de 2 a 3 días hábiles.",
	},
	{
		question: "¿Cómo puedo compartir mi invitación?",
		answer:
			"Te entregamos un enlace web único. Puedes <strong>compartir tu invitación</strong> fácilmente por WhatsApp, <strong>correo electrónico</strong>, o publicarla en tus <strong>redes sociales</strong> para todos tus <strong>amigos y familiares</strong>.",
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
					<h1>Invitaciones Digitales para tu Ocasión Especial</h1>
					<p
						className="fs-5 lead"
						style={{ maxWidth: "800px", margin: "auto" }}
					>
						Celebra tu <strong>ocasión especial</strong> con una invitación
						digital interactiva. Creamos <strong>invitaciones para boda</strong>
						, <strong>invitaciones para xv años</strong>, bautizos y más.
						Comparte tu evento con <strong>amigos y familiares</strong> de forma
						elegante, moderna y ecológica.
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
						Aceptamos un solo <strong>método de pago</strong> seguro
						(Transferencia o Mercado Pago) para tu comodidad.
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

						{/* Opción 2: Canva Premium (ACTUALIZADA) */}
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
										Un diseño premium y animado con el estilo visual de las{" "}
										<strong>invitaciones digitales Canva</strong>, publicado
										como un sitio web de una sola página.
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
						Características de tu Invitación Digital
					</h2>
					<p
						className="fs-5 text-center lead"
						style={{ maxWidth: "800px", margin: "auto", marginBottom: "3rem" }}
					>
						Integramos todas las características que tú y tus invitados
						necesitan para esta <strong>ocasión especial</strong>:
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
								Integración con Google Maps para la Ceremonia y la Recepción,
								para que nadie se pierda.
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
							<h4>Código de Vestimenta y Mesa de Regalos</h4>
							<p className="fs-5">
								Secciones claras para indicar el código de vestimenta (Ej.
								Formal) y tu enlace a la mesa de regalos (Liverpool, Amazon,
								etc.).
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="text-white py-5 gradient-effect-y text-center">
				<div className="container" style={{ maxWidth: "800px" }}>
					<h2>Cómo Funciona: Fácil de Crear y Compartir</h2>
					<ol
						style={{
							textAlign: "left",
							maxWidth: "500px",
							margin: "2rem auto",
							paddingLeft: "40px",
						}}
					>
						<li className="fs-5 mb-3">
							<p className="fs-5">
							<strong>Elige tu Paquete:</strong> Seleccionas el diseño de Google
							Sites o Canva. Usamos el mejor{" "}
							<strong>creador de invitaciones</strong> para tu estilo.</p>
						</li>
						<li className="fs-5 mb-3">
							<p className="fs-5">
							<strong>Envíanos tu Info:</strong> Nos pasas tus fotos, fechas y
							direcciones.</p>
						</li>
						<li className="fs-5 mb-3">
							<p className="fs-5">
							<strong>Recibe tu Enlace:</strong> Te entregamos un enlace web
							único. Puedes <strong>compartir tu invitación</strong> por
							WhatsApp, <strong>correo electrónico</strong> o{" "}
							<strong>redes sociales</strong>.</p>
						</li>
						<li className="fs-5 mb-3">
							<p className="fs-5">
								<strong>Optimizado para Todos:</strong> Nuestras{" "}
								<strong>invitaciones web</strong> son visibles en cualquier
								dispositivo. Si detectamos un{" "}
								<strong>navegador que no es compatible</strong> (o una{" "}
								<strong>versión desactualizada del navegador</strong>), la
								invitación se mostrará igualmente. Para las animaciones de
								Canva, siempre recomendamos que el usuario{" "}
								<strong>actualiza tu navegador</strong> a la{" "}
								<strong>versión más reciente</strong> de Chrome o Safari para{" "}
								<strong>seguir disfrutando</strong> de la experiencia completa para esa ocasión especial.
							</p>
						</li>
					</ol>
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
