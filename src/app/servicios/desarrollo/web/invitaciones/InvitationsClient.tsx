// Ruta: /servicios/desarrollo/web/invitaciones/page
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
		question:
			"¿Cuál es la diferencia entre la invitación de Google Sites y la de Canva?",
		answer:
			"La invitación de Google Sites ($299) es un 'mini-sitio' funcional y fácil de navegar, ideal para organizar mucha información. Las invitaciones digitales Canva ($399) se enfocan más en un diseño visual premium, con animaciones y un estilo de 'una sola página'.",
	},
	{
		question: "¿En cuánto tiempo entregan la invitación digital?",
		answer:
			"Una vez que nos entregas toda la información (fotos, direcciones, fechas) y confirmas tu método de pago, nuestro tiempo de entrega estándar es de 2 a 3 días hábiles.",
	},
	{
		question: "¿Cómo puedo compartir mi invitación?",
		answer:
			"Te entregamos un enlace único. Puedes compartir tu invitación fácilmente por WhatsApp, correo electrónico, o publicarla en tus redes sociales para todos tus amigos y familiares.",
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
					<h1 className="text-4xl md:text-5xl font-extrabold">Invitaciones Digitales para tu Ocasión Especial</h1>
					<p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
						Somos expertos en la{" "}
						<strong>creación de invitaciones digitales</strong> interactivas.
						Celebra tu boda, tus <strong>invitaciones para xv años</strong> o
						bautizo con un diseño elegante. Comparte los detalles con tus{" "}
						<strong>amigos y familiares</strong> de forma moderna y ecológica.
					</p>
				</div>
			</section>

			{/* --- Sección de Paquetes (BOFU) --- */}
			<section className="flex flex-col justify-center items-center text-white py-12 md:py-20 gradient-effect-y text-center">
				<div className="flex flex-col justify-center items-center mx-auto px-4" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Paquetes de Invitaciones Digitales</h2>
					<p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
						Elige la plataforma que mejor se adapte a tu estilo y presupuesto.
						Aceptamos un solo método de pago seguro para tu comodidad.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center">
						{/* Opción 1: Google Sites */}
						<div className="flex justify-center">
							<div
								className="h-full flex flex-col bg-gray-900/50 border border-gray-700 rounded-lg p-6 max-w-md"
							>
								<div className="flex-grow">
									<h3 className="text-2xl font-bold">Invitación Google Sites</h3>
									<p className="text-5xl font-bold my-4">
										$299 <span className="text-base font-normal">MXN</span>
									</p>
									<p className="text-gray-300">
										Un "mini-sitio" funcional y elegante. Ideal para organizar
										toda la información de tu evento en varias secciones y un
										solo enlace.
									</p>
									<ul className="text-left mt-4 space-y-2 list-disc pl-5 text-gray-300">
										<li>Diseño multidispositivo (Responsivo)</li>
										<li>Publicación digital con enlace personalizado</li>
										<li>Hosting Gratuito en Google Sites</li>
										<li>
											Hasta 5 secciones (Ej. Inicio, Ubicaciones, Galería)
										</li>
									</ul>
								</div>
								<div className="mt-auto pt-6">
									<Link
										href="/contacto?producto=invitacion-google-sites"
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
									<h3 className="text-2xl font-bold">Invitación Premium (Canva)</h3>
									<p className="text-5xl font-bold my-4">
										$399 <span className="text-base font-normal">MXN</span>
									</p>
									<p className="text-gray-300">
										Un diseño premium y animado con el estilo visual de las{" "}
										<strong>invitaciones digitales Canva</strong>, publicado
										como un sitio de una sola página.
									</p>
									<ul className="text-left mt-4 space-y-2 list-disc pl-5 text-gray-300">
										<li>Diseño premium con animaciones</li>
										<li>Publicación con enlace personalizado</li>
										<li>Hosting Gratuito en Canva</li>
										<li>Formato "One-Page" (una sola página larga)</li>
									</ul>
								</div>
								<div className="mt-auto pt-6">
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
			</section>

			{/* --- Sección de Características (MOFU) --- */}
			<section className="flex flex-col justify-center items-center text-white py-12 md:py-20 gradient-effect-x">
				<div className="flex flex-col justify-center items-center" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						Características de tu Invitación Digital
					</h2>
					<p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
						Integramos todas las características que tú y tus invitados
						necesitan para esta <strong>ocasión especial</strong>, como{" "}
						<strong>invitaciones para boda</strong> o XV años:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h4 className="text-xl font-semibold mb-2">Cuenta Regresiva</h4>
							<p className="text-gray-300">
								Un contador dinámico que muestra los días, horas y minutos
								faltantes para tu gran día.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Mapas Interactivos</h4>
							<p className="text-gray-300">
								Integración con Google Maps para la Ceremonia y la Recepción,
								para que nadie se pierda.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Galería de Fotos</h4>
							<p className="text-gray-300">
								Un espacio para compartir tus fotos favoritas con tus invitados
								(Ej. "Mis Recuerdos").
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Confirmación por WhatsApp (RSVP)</h4>
							<p className="text-gray-300">
								Un botón de "Confirmar Asistencia" que abre un mensaje de
								WhatsApp listo para enviarte la confirmación.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2">Código de Vestimenta y Mesa de Regalos</h4>
							<p className="text-gray-300">
								Secciones claras para indicar el código de vestimenta (Ej.
								Formal) y tu enlace a la mesa de regalos (Liverpool, Amazon,
								etc.).
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- SECCIÓN SEMÁNTICA (OPTIMIZADA CON KEYWORDS TÉCNICAS) --- */}
			<section className="flex flex-col justify-center items-center text-white py-12 md:py-20 gradient-effect-y text-center">
				<div className="flex flex-col justify-center items-center" style={{ maxWidth: "800px" }}>
					<h2 className="text-3xl md:text-4xl font-bold">Cómo Funciona: Fácil de Crear y Compartir</h2>
					<ol className="text-left max-w-2xl mx-auto mt-8 space-y-4 text-gray-300 text-lg">
						<li>
							<strong>Elige tu Paquete:</strong> Seleccionas el diseño de
							Google Sites o Canva. Usamos el mejor{" "}
							<strong>creador de invitaciones</strong> para tu estilo.
						</li>
						<li>
							<strong>Envíanos tu Info:</strong> Nos pasas tus fotos, fechas y
							direcciones por <strong>correo electrónico</strong> o WhatsApp.
						</li>
						<li>
							<strong>Recibe tu Enlace:</strong> Te entregamos un enlace
							único. Puedes <strong>comparte tu invitación</strong> por
							mensajería o publicarla en tus <strong>redes sociales</strong>.
						</li>
						<li>
							{/* AJUSTE AQUÍ: Integración de las keywords semánticas "difíciles" de forma natural */}
							<strong>Compatibilidad Técnica:</strong> Si algún invitado está{" "}
							<strong>usando un navegador</strong> desactualizado, la
							información básica se mostrará. Sin embargo, dado que{" "}
							<strong>Canva usa la versión</strong> más moderna de tecnología
							web para sus efectos visuales, recomendamos que el usuario
							actualice su software para{" "}
							<strong>seguir disfrutando canva</strong> y ver tu invitación en
							todo su esplendor.
						</li>
					</ol>
				</div>
			</section>

			{/* --- Sección de FAQ --- */}
			<FAQ faqs={faqs} subtitle="Preguntas Frecuentes sobre Invitaciones Digitales" />

			{/* --- Sección CTA Final (BOFU) --- */}

			<section className="flex flex-col justify-center items-center text-center text-white w-full p-4 xl:p-20 gap-3">
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
