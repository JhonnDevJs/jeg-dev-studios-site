"use client";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import CardPacksProduct from "@/components/Cards/CardPacksProduct";
import CardSmallList from "@/components/Cards/CardSmallList";
import CardNestedLists from "@/components/Cards/CardNestedLists";
import SectionProcess from "@/components/SectionProcess";
import CTAProducts from "@/components/Cta/CTAProducts";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import Image from "next/image";
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
		ratingValue: "4.9", // <-- NUEVO
		reviewCount: "1",
	};

	const faqs = [
		{
			question:
				"¿Qué diferencia hay entre ustedes y otra empresa de desarrollo de software en CDMX?",
			answer:
				"Nuestra diferencia es el enfoque ágil y la transparencia. Como una empresa de desarrollo de software en CDMX con un proceso basado en Scrum, te involucramos en cada etapa. Ves avances funcionales cada dos semanas, asegurando que el producto final es exactamente lo que tu operación necesita.",
		},
		{
			question:
				"¿Cuál es la diferencia entre 'Software de escritorio' y 'App web local'?",
			answer:
				"El software de escritorio se instala y ejecuta directamente en un ordenador (Windows, macOS). La app web local funciona desde un navegador dentro de tu red interna, sin necesidad de internet, lo que facilita el acceso desde varios dispositivos conectados a la misma red.",
		},
		{
			question:
				"Si empiezo con una 'Solución Básica', ¿puedo mejorarla después?",
			answer:
				"Sí. Todos nuestros desarrollos son modulares y escalables. Puedes empezar con un módulo y, a medida que tu negocio crezca, podemos añadir más funcionalidades, integrar más usuarios o migrar tu sistema a la nube sin problemas.",
		},
		{
			question:
				"¿Qué significa 'integraciones externas' en la Solución Profesional?",
			answer:
				"Significa que podemos conectar tu software con otras herramientas que ya uses, como sistemas de facturación electrónica (SAT), plataformas de pago, CRMs (como Salesforce), o cualquier otra API que necesites para centralizar tus operaciones.",
		},
		{
			question: "¿Ofrecen capacitación y soporte para el software?",
			answer:
				"Sí. Los paquetes más avanzados incluyen capacitación inicial para tu equipo. Además, todos los paquetes cuentan con garantía y ofrecemos planes de soporte y mantenimiento post-entrega para asegurar el funcionamiento continuo de tu sistema.",
		},
	];

	const handleWhatsAppRedirect = (productName) => {
		const message = `Hola, estoy interesado en la solución de software "${productName}". ¿Podrían darme más información?`;
		// Reemplaza con tu número de WhatsApp en formato internacional
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
				type="Product"
				idPage="service-dev-soft"
				serviceInfo={softServiesInfo}
			/>
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Software.webp"
					alt="Conoce nuestros servicios de desarrollo de software empresarial"
					width={2000}
					height={600}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<h1 className="display-1 text-center text-white">
					Tu Empresa de Desarrollo de Software Empresarial en México
				</h1>
				<p className="lead w-100 px-3 px-md-5">
					En JEG Dev Studios somos una empresa de desarrollo de software en
					México con un enfoque 100% a medida. Transformamos tus operaciones con
					un servicio de desarrollo de software que resuelve problemas reales,
					desde sistemas de inventario hasta CRMs y ERPs robustos diseñados para
					tu flujo de trabajo.
				</p>
				<h2 className="text-center text-white">
					¿Qué Hace una Empresa de Desarrollo de Software?
				</h2>
				<p className="lead w-100 px-3 px-md-5">
					A diferencia de un software "enlatado" que te obliga a cambiar tus
					procesos, una fábrica de software como JEG Dev Studios crea soluciones
					desde cero. No te adaptas al software; el software se adapta a ti.
					¿Buscas empresa de software ejemplos o fábrica de software ejemplos?
					Creamos:
				</p>
				<ul className="fs-5 text-start mx-auto" style={{ maxWidth: "600px" }}>
					<li className="mb-3">
						<p>Sistemas de Gestión de Clientes (CRM) personalizados.</p>
					</li>
					<li className="mb-3">
						<p>Plataformas de Planificación de Recursos (ERP) a medida.</p>
					</li>
					<li className="mb-3">
						<p>Software de control de inventarios, almacén y logística.</p>
					</li>
					<li>
						<p>Sistemas de facturación y puntos de venta (POS).</p>
					</li>
					<li>
						<p>
							Paneles de análisis de datos (Dashboards) que se integran con tus
							herramientas actuales.
						</p>
					</li>
				</ul>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<h2 className="text-center text-white">
					Paquetes de Software a Medida
				</h2>
				<p className="lead w-100 px-3 px-md-5">
					Te ofrecemos paquetes adaptados a tus necesidades y presupuesto. Ya
					sea que estés comenzando con un sistema de inventarios o necesites un
					software más robusto, tenemos la solución perfecta para ti.
				</p>
				<Swiper
					className="w-100 py-5"
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
						480: { slidesPerView: 1 },
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
				>
					{services.map((service) => (
						<SwiperSlide
							key={service.id}
							className="d-flex justify-content-center"
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
			<SectionProcess
				title={"Nuestro Proceso de Desarrollo de Software"}
				text={
					"En JEG Dev Studios, aplicamos una metodología ágil basada en Scrum para el desarrollo de software. Esto nos permite trabajar de forma organizada, flexible y transparente, entregando avances constantes. Nuestro objetivo es que formes parte activa del desarrollo de tu sistema, asegurando que el resultado final supere tus expectativas."
				}
			/>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<CardSmallList
					titulo="Descubrimiento y Planificación Inicial"
					subtitulo="Desde el primer contacto, nos enfocamos en comprender tu visión, objetivos y necesidades específicas."
					list={[
						"Reunión inicial para entender tu negocio y el propósito del software.",
						"Definimos los módulos clave, el diseño y los objetivos de cada función.",
						"Elegimos el paquete de desarrollo más adecuado (Básica, Estándar, Avanzada o Pro).",
						"Creamos un Product Backlog: la lista detallada de todo lo que tu sistema debe incluir.",
					]}
					lastText="Tecnologías: Según el proyecto, usamos stacks robustos como Figma, React, Node.js, PHP (Laravel) o Java."
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<CardNestedLists
					titulo="Ciclos de Desarrollo Iterativos (Sprints)"
					subtitulo="Dividimos el proyecto en Sprints de 1 o 2 semanas, donde desarrollamos y entregamos módulos o funcionalidades específicas."
					list={[
						{
							text: "a. Sprint Planning",
							sublist: [
								"Planificamos qué módulos vamos a trabajar (ej. módulo de clientes, dashboard de reportes, integración con facturación).",
							],
						},
						{
							text: "b. Desarrollo y Actualizaciones",
							sublist: [
								"Nuestro equipo trabaja en el desarrollo del software acordado, garantizando velocidad y seguridad.",
							],
						},
						{
							text: "c. Entrega Parcial y Feedback",
							sublist: [
								"Al final de cada Sprint, te mostramos un avance funcional real del sistema. Tú nos das tu feedback y podemos ajustar detalles.",
							],
						},
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<CardSmallList
					titulo="Revisión Final, Despliegue y Capacitación"
					subtitulo="Una vez terminados los Sprints, realizamos lo siguiente:"
					list={[
						"Una demostración final del software completo.",
						"Una revisión conjunta para asegurarnos de que todo funciona correctamente.",
						"Instalación y despliegue en tus servidores (locales o en la nube).",
						"Capacitación a tu equipo para que puedan utilizar el nuevo sistema sin problemas.",
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<h2 className="text-white">Compromiso con la exelencia</h2>
				<p className="text-white fs-4">
					Cada línea de código que escribimos en JEG Dev Studios refleja nuestro
					compromiso con la calidad, la funcionalidad y la innovación. Nos
					enfocamos en que tu software sea útil, estable, seguro y fácil de
					usar. No desarrollamos software genérico: desarrollamos soluciones que
					resuelven problemas reales. Tu empresa merece una herramienta que
					trabaje por ella. Nosotros la creamos.
				</p>
				<p className="text-white fs-4">
					Tu empresa merece una herramienta que trabaje por ella. Nosotros la
					creamos
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
				<CTAProducts
					title={"¿Ninguno de estos paquetes se ajusta a lo que necesitas?"}
					paragraph={
						"No te preocupes, en JEG Dev Studios desarrollamos soluciones 100% personalizadas. Cuéntanos tu idea y te ayudaremos a crear un proyecto a tu medida, con todo lo que realmente necesitas y nada que no."
					}
					links={[
						{
							label: "Solicita una cotización personalizada",
							link: "/contacto",
							type: "services", // Puedes usar 'services' o 'outline'
						},
					]}
				/>
			</section>
			<FAQ
				faqs={faqs}
				subtitle="Preguntas Frecuentes sobre nuestro Servicio de Desarrollo de Software"
			/>
		</>
	);
}
