// Ruta: /servicios/desarrollo/software-empresarial/page
"use client";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import CardPacksProduct from "@/components/Cards/CardPacksProduct";
import CardInfo from "@/components/Cards/CardInfo";
import TimelineProcess from "@/components/Cards/TimelineProcess";
import CTAProducts from "@/components/Cta/CTAProducts";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import Image from "next/image";
// Asegúrate de importar tus imágenes correctamente
import imgSoftProduct1 from "@/assets/img/img/services/dev-web/pack-1/imagen-muestra-de-pagina-web.webp";
import imgSoftProduct2 from "@/assets/img/img/services/dev-web/pack-2/imagen-muestra-de-pagina-web.webp";
import imgSoftProduct3 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import imgSoftProduct4 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";

import "swiper/css";
import "swiper/css/navigation";
import "./DevSoftClient.css";

export default function DevSoftClient() {
	const services = useMemo(
		() => [
			// ... (Tus paquetes se mantienen igual, son buenos)
			{
				id: "solucion_basica",
				name: "Solución Básica",
				price: 9499,
				currency: "MXN",
				imageSrc: imgSoftProduct1.src,
				isPriceFixed: false,
				labelBtn: "Cotizar solución",
				description:
					"Ideal para digitalizar una operación clave de tu negocio.",
				items: [
					"1 módulo funcional (ventas, citas, inventario, etc.).",
					"Interfaz gráfica simple y amigable.",
					"Software de escritorio o app web local.",
					"Base de datos local (ej. SQLite).",
					"Manual básico de usuario.",
					"Instalación en un equipo.",
				],
				urlInfo: "",
				buttonLabelInfo: "",
			},
			{
				id: "solucion_estandar",
				name: "Solución Estándar",
				price: 17299,
				currency: "MXN",
				imageSrc: imgSoftProduct2.src,
				isPriceFixed: false,
				labelBtn: "Cotizar solución",
				description: "Perfecto para centralizar varias áreas de tu empresa.",
				items: [
					"Hasta 3 módulos integrados (ej. ventas, productos, clientes).",
					"Sistema multiusuario con login y control de acceso.",
					"Interfaz responsiva (web o escritorio).",
					"Base de datos local o en red.",
					"Exportación de reportes a PDF/Excel.",
					"Instalación en hasta 3 dispositivos.",
				],
				urlInfo: "",
				buttonLabelInfo: "",
			},
			{
				id: "solucion_avanzada",
				name: "Solución Avanzada",
				price: 34499,
				currency: "MXN",
				imageSrc: imgSoftProduct3.src,
				isPriceFixed: false,
				labelBtn: "Cotizar solución",
				description:
					"Una solución robusta para un control total y análisis de datos.",
				items: [
					"Hasta 6 módulos personalizados (ventas, compras, almacén, clientes, empleados, reportes).",
					"Diseño visual adaptado a tu identidad corporativa.",
					"Base de datos en red o en la nube.",
					"Panel de control y estadísticas con gráficas.",
					"Acceso por roles y permisos.",
					"Instalación en red local o servidor.",
					"Capacitación inicial para tu equipo.",
				],
				urlInfo: "",
				buttonLabelInfo: "",
			},
			{
				id: "solucion_profesional",
				name: "Solución Profesional",
				price: 66899,
				currency: "MXN",
				imageSrc: imgSoftProduct4.src,
				isPriceFixed: false,
				labelBtn: "Cotizar solución",
				description:
					"El sistema definitivo para automatizar, integrar y escalar tu operación.",
				items: [
					"Módulos ilimitados según flujo de trabajo personalizado.",
					"Desarrollo basado en análisis detallado de procesos.",
					"Interfaz avanzada y adaptable (modo oscuro, responsiva, accesible).",
					"Control de usuarios y auditoría de acciones.",
					"Integraciones externas (facturación electrónica, CRMs, etc.).",
					"Seguridad avanzada (respaldos automáticos, cifrado de datos).",
					"Capacitación y documentación completa.",
					"Soporte técnico durante el primer mes incluido.",
				],
				urlInfo: "",
				buttonLabelInfo: "",
			},
		],
		[]
	);

	const softServiesInfo = {
		name: "Desarrollo de Software Empresarial",
		serviceType: "Desarrollo de Software Empresarial",
		description:
			"Servicios de desarrollo de software a medida: CRMs, ERPs y sistemas empresariales.",
		image:
			"https://www.jegdevstudios.com/img-SEO/og-background-serv-dev-soft.webp",
		ratingValue: "4.9", // Solo si tienes reseñas reales visibles
		reviewCount: "1",
	};

	interface FaqItem {
		question: string;
		answer: string;
	}

	const faqs: FaqItem[] = [
		{
			question:
				"¿Qué diferencia hay entre ustedes y otra empresa de desarrollo de software en CDMX?",
			answer:
				"Nuestra diferencia es el enfoque ágil y la transparencia. Como una <strong>empresa de desarrollo de software en México</strong> con un proceso basado en Scrum, te involucramos en cada etapa, asegurando soluciones de <strong>alta calidad</strong>.",
		},
		{
			question: "¿Cómo ayudan a reducir los costos operativos?",
			answer:
				"Al implementar <strong>soluciones tecnológicas</strong> a medida, automatizamos tareas repetitivas y optimizamos tus procesos. Esto te permite <strong>reducir los costos</strong> operativos y mejorar la eficiencia general de tu negocio.",
		},
		{
			question:
				"Si empiezo con una 'Solución Básica', ¿puedo mejorarla después?",
			answer:
				"Sí. Todos nuestros desarrollos son modulares. Puedes empezar con un módulo y escalar hacia una <strong>transformación digital</strong> completa, integrando incluso <strong>inteligencia artificial</strong> en el futuro.",
		},
		{
			question: "¿Qué tecnologías avanzadas utilizan?",
			answer:
				"Utilizamos <strong>tecnologías avanzadas</strong> como React, Node.js y bases de datos en la nube para darte una <strong>ventaja competitiva</strong>. También desarrollamos <strong>aplicaciones móviles</strong> complementarias si tu operación lo requiere.",
		},
		{
			question: "¿Ofrecen servicios de soporte y mantenimiento?",
			answer:
				"Sí. <strong>Ofrecemos servicios</strong> de soporte continuo para asegurar que tu software siga funcionando perfectamente y se adapte a los cambios de tu empresa.",
		},
	];

	// 1. Añadimos el tipo 'string' al parámetro para eliminar el 'any' implícito
	const handleWhatsAppRedirect = (productName: string) => {
		const message = `Hola, estoy interesado en la solución de software "${productName}". ¿Podrían darme más información?`;
		const whatsappLink = `https://wa.me/5215512197135?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappLink, "_blank");
	};

	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-dev-soft" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-dev-soft" />
			<StructuredData
				data={services}
				type="Service" // CORREGIDO a Service
				idPage="service-dev-soft"
				serviceInfo={softServiesInfo}
			/>

			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Software.webp"
					alt="Servicio de desarrollo de software empresarial en México"
					width={2000}
					height={600}
					className="w-full h-auto"
					priority
				/>
			</section>

			{/* SECCIÓN H1 OPTIMIZADA */}
			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<h1 className="text-6xl md:text-7xl font-bold text-center text-gray-900 dark:text-white">
					Servicio de Desarrollo de Software Empresarial
				</h1>
				<p className="text-lg md:text-xl w-full px-3 md:px-5 max-w-4xl text-gray-600 dark:text-white">
					En JEG Dev Studios somos una{" "}
					<strong>empresa de desarrollo de software en México</strong>
					con un enfoque 100% a medida. Transformamos tus operaciones con{" "}
					<strong>soluciones tecnológicas</strong>
					que resuelven problemas reales, impulsando tu{" "}
					<strong>transformación digital</strong>.
				</p>
			</section>

			{/* NUEVA SECCIÓN INFORMATIVA (SOLUCIONA CONTENIDO Y SEMÁNTICA) */}
			<section className="text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y">
				<div className="container mx-auto w-full" style={{ maxWidth: "1000px" }}>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
						Impulsa tu Ventaja Competitiva con Software a Medida
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
						<CardInfo
							title="Automatización y Eficiencia"
							description="Nuestras herramientas te permiten automatizar procesos manuales, lo que ayuda a reducir los costos y minimizar errores humanos. Ofrecemos soluciones que trabajan por ti las 24 horas."
						/>
						<CardInfo
							title="Integración de Tecnologías Avanzadas"
							description="No solo creamos bases de datos. Integramos tecnologías avanzadas e inteligencia artificial para analizar tus datos y ayudarte a tomar decisiones estratégicas de alta calidad."
						/>
						<CardInfo
							title="Ecosistema Digital Completo"
							description="Podemos conectar tu software empresarial con aplicaciones móviles para tu fuerza de ventas o con tu tienda en línea, creando un ecosistema unificado."
						/>
						<CardInfo
							title="Escalabilidad Sin Límites"
							description="A diferencia del software enlatado, nuestras soluciones crecen contigo. Te damos una ventaja competitiva al tener una herramienta que se adapta a tu ritmo de innovación."
						/>
					</div>
				</div>
			</section>

			{/* SECCIÓN DE PAQUETES */}
			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
					Paquetes de Software a Medida
				</h2>
				<p className="text-lg md:text-xl w-full px-3 md:px-5 max-w-4xl text-gray-600 dark:text-white">
					Te ofrecemos paquetes adaptados a tus necesidades y presupuesto.{" "}
					<strong>Ofrecemos servicios</strong> flexibles, desde sistemas básicos
					hasta plataformas empresariales completas.
				</p>
				<Swiper
					className="w-full py-12"
					modules={[Navigation, Autoplay]}
					navigation={true}
					spaceBetween={30}
					centeredSlides={true}
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						320: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
				>
					{services.map((service) => (
						<SwiperSlide
							key={service.id}
							className="flex justify-items-center p-12"
						>
							<CardPacksProduct
								idProduct={service.id}
								dataPrice={service.price}
								title={service.name}
								price={service.price}
								moneda={service.currency}
								imageUrl={service.imageSrc}
								description={service.description}
								items={service.items}
								isPriceFixed={service.isPriceFixed}
								labelBtn={service.labelBtn}
								onQuote={() => handleWhatsAppRedirect(service.name)}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<section className="flex flex-col justify-center items-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
				<div className="container max-w-4xl mx-auto w-full mb-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Nuestro Proceso de Desarrollo de Software
					</h2>
					<p className="text-lg md:text-xl text-gray-600 dark:text-white">
						En JEG Dev Studios, aplicamos una metodología ágil basada en Scrum. Trabajamos de forma organizada y transparente, entregando avances constantes para que el resultado supere tus expectativas.
					</p>
				</div>
				<TimelineProcess
					steps={[
						{
							title: "Descubrimiento y Planificación Inicial",
							description: "Desde el primer contacto, nos enfocamos en comprender tu visión. Definimos los módulos clave, el diseño y creamos un Product Backlog detallado con todo lo que tu sistema debe incluir."
						},
						{
							title: "Ciclos de Desarrollo Iterativos (Sprints)",
							description: "Dividimos el proyecto en Sprints de 1 o 2 semanas. Planificamos qué módulos trabajar, desarrollamos con código seguro y te mostramos avances funcionales al final de cada ciclo para recibir tu feedback."
						},
						{
							title: "Revisión Final, Despliegue y Capacitación",
							description: "Realizamos una demostración final del software completo. Una vez aprobado, lo instalamos en tus servidores (locales o nube) y capacitamos a tu equipo para que puedan utilizar el nuevo sistema sin problemas."
						}
					]}
				/>
			</section>

			<section className="flex flex-col justify-center items-center text-center w-full py-12 md:py-20 px-4 gap-3">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Compromiso con la Excelencia</h2>
				<p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-4xl">
					Cada línea de código que escribimos refleja nuestro compromiso con la{" "}
					<strong>alta calidad</strong>. Nos enfocamos en que tu software sea
					útil, estable y seguro. No desarrollamos software genérico:
					desarrollamos soluciones que resuelven problemas reales.
				</p>
				<p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-4xl">
					Tu empresa merece una herramienta que trabaje por ella. Nosotros la
					creamos.
				</p>
			</section>

			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<CTAProducts
					title={"¿Ninguno de estos paquetes se ajusta a lo que necesitas?"}
					paragraph={
						"No te preocupes, desarrollamos soluciones 100% personalizadas. Cuéntanos tu idea y te ayudaremos a crear un proyecto a tu medida."
					}
					links={[
						{
							label: "Solicita una cotización personalizada",
							link: "/contacto",
							type: "services",
						},
					]}
				/>
			</section>
			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<FAQ faqs={faqs} />
			</section>
		</>
	);
}
