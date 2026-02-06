// Ruta: /servicios/desarrollo/web/invitaciones/page
import Image from "next/image";
import Link from "next/link";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import CTAProducts from "@/components/Cta/CTAProducts"; // Asumo que tienes un CTA
import CardSmallList from "@/components/Cards/CardSmallList";
import CardPricing from "@/components/Cards/CardPricing";
import ShowcaseSection from "@/components/ShowcaseSection";

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
	const features = [
		{
			icon: "timer",
			title: "Cuenta Regresiva",
			description: "Un contador dinámico que muestra los días, horas y minutos faltantes para tu gran día."
		},
		{
			icon: "location_on",
			title: "Mapas Interactivos",
			description: "Integración con Google Maps para la Ceremonia y la Recepción, para que nadie se pierda."
		},
		{
			icon: "photo_library",
			title: "Galería de Fotos",
			description: "Un espacio para compartir tus fotos favoritas con tus invitados (Ej. \"Mis Recuerdos\")."
		},
		{
			icon: "mark_chat_read",
			title: "Confirmación por WhatsApp (RSVP)",
			description: "Un botón de \"Confirmar Asistencia\" que abre un mensaje de WhatsApp listo para enviarte la confirmación."
		},
		{
			icon: "card_giftcard",
			title: "Código de Vestimenta y Mesa de Regalos",
			description: "Secciones claras para indicar el código de vestimenta (Ej. Formal) y tu enlace a la mesa de regalos (Liverpool, Amazon, etc.)."
		}
	];

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
			<section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 text-center">
				<div className="flex flex-col justify-center items-center mx-auto px-4">
					<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Invitaciones Digitales para tu Ocasión Especial</h1>
					<p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600 dark:text-white">
						Somos expertos en la{" "}
						<strong>creación de invitaciones digitales</strong> interactivas.
						Celebra tu boda, tus <strong>invitaciones para xv años</strong> o
						bautizo con un diseño elegante. Comparte los detalles con tus{" "}
						<strong>amigos y familiares</strong> de forma moderna y ecológica.
					</p>
				</div>
			</section>

			{/* --- SECCIÓN DE MUESTRA VISUAL --- */}
			<ShowcaseSection
				imageSrc="/banners/Christmas/Web.webp"
				alt="Ejemplo de Invitación Digital Interactiva"
				title="Elegancia en Cada Pixel"
				badgeColor="bg-purple-600"
			/>

			{/* --- Sección de Paquetes (BOFU) --- */}
			<section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 gradient-effect-y text-center">
				<div className="flex flex-col justify-center items-center mx-auto px-4" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestros Paquetes de Invitaciones Digitales</h2>
					<p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-600 dark:text-white">
						Elige la plataforma que mejor se adapte a tu estilo y presupuesto.
						Aceptamos un solo método de pago seguro para tu comodidad.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center">
						{/* Opción 1: Google Sites */}
						<CardPricing
							title="Invitación Google Sites"
							price="299"
							currency="MXN"
							description="Un 'mini-sitio' funcional y elegante. Ideal para organizar toda la información de tu evento en varias secciones y un solo enlace."
							features={[
								"Diseño multidispositivo (Responsivo)",
								"Publicación digital con enlace personalizado",
								"Hosting Gratuito en Google Sites",
								"Hasta 5 secciones (Ej. Inicio, Ubicaciones, Galería)",
							]}
							buttonLabel="Contratar por $299"
							buttonLink="/contacto?producto=invitacion-google-sites"
						/>

						{/* Opción 2: Canva Premium */}
						<CardPricing
							title="Invitación Premium (Canva)"
							price="399"
							currency="MXN"
							description="Un diseño premium y animado con el estilo visual de las invitaciones digitales Canva, publicado como un sitio de una sola página."
							features={[
								"Diseño premium con animaciones",
								"Publicación con enlace personalizado",
								"Hosting Gratuito en Canva",
								"Formato 'One-Page' (una sola página larga)",
							]}
							buttonLabel="Contratar por $399"
							buttonLink="/contacto?producto=invitacion-canva"
						/>
					</div>
				</div>
			</section>

			{/* --- SECCIÓN VISUAL: MOBILE FIRST --- */}
			<section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
				<div className="container mx-auto max-w-6xl">
					<div className="flex flex-col md:flex-row gap-12 items-center justify-center">
						{/* Wireframe Mobile Invitation */}
						<div className="w-full md:w-1/3 relative flex justify-center">
							<div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
								{/* Screen Content */}
								<div className="w-full h-full bg-white dark:bg-gray-800 overflow-hidden flex flex-col relative">
									{/* Hero Image */}
									<div className="w-full h-1/2 bg-gray-200 dark:bg-gray-700 relative">
										<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
									</div>
									{/* Content */}
									<div className="p-6 text-center -mt-12 relative z-10 flex flex-col items-center">
										<div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-full shadow-lg mb-4 flex items-center justify-center text-2xl">💍</div>
										<div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
										<div className="w-1/2 h-4 bg-gray-100 dark:bg-gray-700 rounded mb-6"></div>

										{/* Countdown */}
										<div className="flex gap-2 justify-center mb-6 w-full">
											<div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded"></div>
											<div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded"></div>
											<div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded"></div>
										</div>

										<div className="w-full h-10 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center text-white text-xs font-bold animate-pulse">
											Confirmar Asistencia
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="w-full md:w-1/2 text-left">
							<div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-purple-600 uppercase bg-purple-100 rounded-full dark:bg-purple-900/30 dark:text-purple-400">
								Experiencia Móvil
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
								Diseño Perfecto en Cualquier Pantalla
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
								Tus invitados verán la invitación desde su celular. Por eso diseñamos con un enfoque "Mobile First".
							</p>
							<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
								Botones grandes para dedos, mapas que abren la app de GPS directamente y tiempos de carga instantáneos, incluso con datos móviles.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- Sección de Características (MOFU) --- */}
			<section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4">
				<div className="flex flex-col justify-center items-center w-full" style={{ maxWidth: "900px" }}>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
						Características de tu Invitación Digital
					</h2>
					<p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600 dark:text-white">
						Integramos todas las características que tú y tus invitados
						necesitan para esta <strong>ocasión especial</strong>, como{" "}
						<strong>invitaciones para boda</strong> o XV años:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
						{features.map((feature, index) => (
							<div key={index} className="group relative p-8 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 rounded-[2rem] hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-900/20 flex flex-col">
								<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
									<span className="material-symbols-outlined text-8xl text-blue-600 dark:text-blue-400">{feature.icon}</span>
								</div>
								<div className="relative z-10 flex flex-col flex-grow">
									<div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
										<span className="material-symbols-outlined text-3xl text-blue-600 dark:text-blue-400">{feature.icon}</span>
									</div>
									<h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h4>
									<p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* --- SECCIÓN SEMÁNTICA (OPTIMIZADA CON KEYWORDS TÉCNICAS) --- */}
			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
				<CardSmallList
					titulo="Cómo Funciona: Fácil de Crear y Compartir"
					subtitulo="Sigue estos sencillos pasos para tener tu invitación digital lista en poco tiempo."
					list={[
						"Elige tu Paquete: Seleccionas el diseño de Google Sites o Canva. Usamos el mejor creador de invitaciones para tu estilo.",
						"Envíanos tu Info: Nos pasas tus fotos, fechas y direcciones por correo electrónico o WhatsApp.",
						"Recibe tu Enlace: Te entregamos un enlace único. Puedes compartir tu invitación por mensajería o publicarla en tus redes sociales.",
						"Compatibilidad Técnica: Si algún invitado está usando un navegador desactualizado, la información básica se mostrará. Sin embargo, dado que Canva usa la versión más moderna de tecnología web para sus efectos visuales, recomendamos que el usuario actualice su software para seguir disfrutando canva y ver tu invitación en todo su esplendor."
					]}
				/>
			</section>
			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<FAQ faqs={faqs} />
			</section>

			{/* --- Sección CTA Final (BOFU) --- */}

			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
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
