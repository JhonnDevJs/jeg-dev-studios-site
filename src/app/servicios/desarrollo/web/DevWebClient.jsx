"use client";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import CardProduct from "@/components/Cards/CardProduct";
import CardPacksProduct from "@/components/Cards/CardPacksProduct";
import CTAProducts from "@/components/Cta/CTAProducts";
import CardSmallList from "@/components/Cards/CardSmallList";
import CardNestedLists from "@/components/Cards/CardNestedLists";
import CardsProcess from "@/components/Cards/CardsProcess";
import SectionProcess from "@/components/SectionProcess";
import StructuredData from "@/components/Seo/StructuredData";
import FAQ from "@/components/Seo/FAQ";
import Image from "next/image";
import imgWebProduct1 from "@/assets/img/img/services/dev-web/pack-1/imagen-muestra-de-pagina-web.webp";
import imgWebProduct2 from "@/assets/img/img/services/dev-web/pack-2/imagen-muestra-de-pagina-web.webp";
import imgWebProduct3 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";

import "swiper/css";
import "swiper/css/navigation";
import "./DevWebClient.css";

export default function DevWebClient() {
	const products = useMemo(
		() => [
			{
				id: "invitacion-digital",
				type: "product",
				name: "Invitaciones Digitales",
				price: 299,
				currency: "MXN",
				labelBtn: "Contratar ahora",
				isPriceFixed: true,
				description:
					"Lanza tu idea o promociona un servicio específico rápidamente. Una página de aterrizaje optimizada para la conversión, construida sobre una plataforma fiable.",
				imageSrc: imgWebProduct1.src,
				items: [
					"Hasta 5 secciones",
					"Botón de confirmacion de asistencia",
					"Mesa de regalos",
					"Cuenta regresiva",
					"Diseño personalizado",
					"Entrega en 2 a 3 días",
				],
				urlInfo: "/servicios/desarrollo/web/invitaciones",
				buttonLabelInfo: "Conocer más sobre el servicio",
			},
			{
				id: "landing-page-profesional",
				type: "product",
				name: "Landing Page Profesional",
				price: 2999,
				currency: "MXN",
				labelBtn: "Contratar ahora",
				isPriceFixed: true,
				description:
					"Lanza tu idea o promociona un servicio específico rápidamente. Una página de aterrizaje optimizada para la conversión, construida sobre una plataforma fiable.",
				imageSrc: imgWebProduct1.src,
				items: [
					"Dominio personalizado incluido (1 año)",
					"Hosting gratuito mediante Google Sites",
					"Diseño responsivo",
					"Posicionamiento inicial en Google (SEO básico)",
					"Diseño adaptado a la marca del cliente",
					"Hasta 5 secciones para tu página (landing)",
					"Entrega en 3 a 5 días",
				],
				urlInfo: "/servicios/desarrollo/web/landing-pages",
				buttonLabelInfo: "Conocer más sobre el servicio",
			},
			{
				id: "mini-sitio",
				type: "product",
				name: "MINI SITIO",
				price: 3599,
				currency: "MXN",
				labelBtn: "Contratar ahora",
				isPriceFixed: true,
				description:
					"Para emprendedores y negocios que necesitan arrancar ya con una presencia profesional.",
				imageSrc: imgWebProduct1.src,
				items: [
					"5 Páginas (en Google Sites)",
					"Dominio Personalizado (1 Año Gratis)",
					"Hosting Gratuito (en Google Sites)",
					"Diseño Responsivo y adaptado a la marca",
					"SEO Básico (Posicionamiento inicial)",
					"Entrega en 5 a 7 días",
				],
				urlInfo: "/servicios/desarrollo/web/sitios-web",
				buttonLabelInfo: "Conocer más sobre el servicio",
			},
			{
				id: "paquete_sitio_ignite",
				type: "pack",
				name: "SITIO IGNITE",
				price: 17999,
				isPriceFixed: false,
				currency: "MXN",
				labelBtn: "Cotizar Proyecto Ignite",
				description:
					"Para PyMEs que necesitan un sitio corporativo profesional y ultra-rápido.",
				imageSrc: imgWebProduct1.src,
				items: [
					"Desarrollo en Next.js (React)",
					"Performance +90 Garantizado (Core Web Vitals)",
					"De 1 a 5 Secciones (Páginas Reales)",
					"Diseño UI/UX Personalizado (Figma)",
					"CMS Autoadministrable (Headless)",
					"Hosting + Dominio (1 Año GRATIS)",
					"Certificado SSL y Formulario de Contacto",
					"SEO Técnico Básico",
					"3 Rondas de Revisión",
					"Tiempo de entrega: 3 Semanas",
				],
				urlInfo: "/servicios/desarrollo/web/blogs",
				buttonLabelInfo: "Conocer más sobre el servicio",
			},
			{
				id: "paquete_sitio_accelerate",
				type: "pack",
				name: "SITIO ACCELERATE",
				price: 29999,
				isPriceFixed: false,
				labelBtn: "Cotizar Proyecto Accelerate",
				currency: "MXN",
				description:
					"Para Negocios en crecimiento que necesitan SEO y más funciones.",
				imageSrc: imgWebProduct2.src,
				items: [
					'Todo en "Ignite" MÁS:',
					"De 6 a 10 Secciones (Páginas Reales)",
					"Estrategia y SEO On-Page (Avanzado)",
					"Blog Autoadministrable",
					"Formularios Avanzados (con integraciones)",
					"Configuración de Correos Corporativos (Hasta 10)",
					"Mantenimiento y Soporte (6 Meses GRATIS)",
					"Manual de Uso y Capacitación",
					"4 Rondas de Revisión",
					"Tiempo de entrega: 4-5 Semanas",
				],
				urlInfo: "/servicios/desarrollo/web/sitios-web",
				buttonLabelInfo: "Conocer más sobre el servicio",
			},
			{
				id: "paquete_sitio_ultimate",
				type: "pack",
				name: "SITIO ULTIMATE",
				price: 49999,
				isPriceFixed: false,
				labelBtn: "Cotizar Proyecto Ultimate",
				currency: "MXN",
				description:
					'Para empresas establecidas que necesitan una "máquina" de crecimiento.',
				imageSrc: imgWebProduct3.src,
				items: [
					'Todo en "Accelerate" MÁS:',
					"De 11 a 15 Secciones (Páginas Reales)",
					"Automatizaciones (CRM, Email Marketing)",
					"Mantenimiento y Soporte (1 Año GRATIS)",
					"Servicio de Seguridad 365",
					"Configuración de Correos Corporativos (Hasta 20)",
					"Imágenes y Videos de Stock Premium",
					"5 Rondas de Revisión",
					"Tiempo de entrega: 5-6 Semanas",
				],
				urlInfo: "/servicios/desarrollo/web/ecommerce",
				buttonLabelInfo: "Conocer más sobre el servicio",
			},
		],
		[]
	);

	const webServiceInfo = {
		name: "Desarrollo de Páginas Web Profesionales",
		serviceType: "Desarrollo de Páginas Web",
		description:
			"Servicios de desarrollo de páginas web a medida en Next.js. Olvida WordPress. Somos una de las agencias de sitios web que ofrece paquetes con performance +90 garantizado.",
		image:
			"https://www.jegdevstudios.com/img-SEO/og-background-serv-dev-soft.webp",
		ratingValue: "4.8", // <-- NUEVO
		reviewCount: "3",
	};

	const faqs = [
		{
			question:
				"¿Cuál es la diferencia entre el 'Mini Sitio' y el 'Sitio Ignite'?",
			answer:
				'El "Mini Sitio" es una solución de arranque rápido construida en Google Sites, ideal para validar una idea. El "Sitio Ignite" es un desarrollo web profesional en Next.js (React), diseñado para una velocidad superior (+90 en performance) y con un CMS para que puedas autoadministrarlo.',
		},
		{
			question:
				"¿Por qué elegir Next.js en lugar de WordPress como otras agencias de sitios web?",
			answer:
				"Velocidad y Seguridad. Mientras WordPress es lento y vulnerable a plugins, Next.js es una tecnología moderna que crea sitios ultra-rápidos (mejorando tu SEO) y mucho más seguros. Ofrecemos una tecnología de élite a un precio competitivo.",
		},
		{
			question: '¿Qué significa "performance +90 garantizado"?',
			answer:
				'Significa que tu sitio web cargará increíblemente rápido. Usamos herramientas como Google PageSpeed Insights para medir el rendimiento, y garantizamos que tu sitio "Ignite" (o superior) obtendrá una puntuación de más de 90/100, algo crucial para el SEO y la experiencia del usuario.',
		},
		{
			question:
				"Si contrato un paquete, ¿puedo agregar más funcionalidades después?",
			answer:
				'¡Absolutamente! Esa es la belleza de Next.js. A diferencia de las plantillas rígidas, nuestros paquetes "Ignite", "Accelerate" y "Ultimate" están construidos con una arquitectura modular, lo que nos permite añadir nuevas secciones o funciones fácilmente a medida que tu negocio crece.',
		},
	];

	const handleWhatsAppRedirect = (productName) => {
		const message = `Hola, estoy interesado en el paquete de desarrollo web "${productName}". ¿Podrían darme más información?`;
		// Reemplaza con tu número de WhatsApp en formato internacional
		const whatsappLink = `https://wa.me/5215512197135?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappLink, "_blank");
	};

	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-dev-web" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-dev-web" />
			<StructuredData
				data={products}
				type="Product"
				idPage="service-dev-web"
				serviceInfo={webServiceInfo}
			/>
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Web.webp"
					alt="Conoce nuestros servicios de desarrollo web en JEG Dev Studios"
					width={2000}
					height={600}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<h1 className="display-1 text-center text-white">
					Desarrollo de Páginas Web Profesionales en Next.js
				</h1>
				<p className="lead w-100 px-3 px-md-5">
					En JEG Dev Studios, redefinimos el{" "}
					<strong>desarrollo web profesional</strong>. No somos otra de las{" "}
					<strong>agencias de sitios web</strong> que te cobra $20,000 por una
					plantilla de WordPress lenta. Nosotros ofrecemos{" "}
					<strong>creación de sitios web</strong> sobre Next.js (React): la
					tecnología que garantiza un performance de +90 y una velocidad
					superior. Compara nuestros paquetes y descubre por qué una base
					tecnológica sólida es tu mejor ventaja competitiva.
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<h2 className="text-center text-white">
					Paquetes de Desarrollo Web a tu Medida
				</h2>
				<p className="lead w-100 px-3 px-md-5">
					Desde un sitio robusto con tecnología de punta hasta un "Mini Sitio"
					profesional para arrancar. Desliza para explorar la solución perfecta
					para tu negocio.
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
					{products.map((product) => (
						<SwiperSlide
							key={product.id}
							className="d-flex justify-content-center"
						>
							{product.type === "pack" ? (
								<CardPacksProduct
									idProduct={product.id}
									dataPrice={product.price}
									title={product.name}
									price={product.price}
									moneda={product.currency}
									imageUrl={product.imageSrc}
									description={product.description}
									items={product.items}
									isPriceFixed={product.isPriceFixed}
									labelBtn={product.labelBtn}
									onQuote={() => handleWhatsAppRedirect(product.name)}
									urlInfo={product.urlInfo}
									buttonLabelInfo={product.buttonLabelInfo}
								/>
							) : (
								<CardProduct
									idProduct={product.id}
									dataPrice={product.price}
									title={product.name}
									price={product.price}
									moneda={product.currency}
									imageUrl={product.imageSrc}
									description={product.description}
									items={product.items}
									isPriceFixed={product.isPriceFixed}
									labelBtn={product.labelBtn}
									onAdd={() => handleWhatsAppRedirect(product.name)}
									urlInfo={product.urlInfo}
									buttonLabelInfo={product.buttonLabelInfo}
								/>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			<section className="text-white py-5 gradient-effect-x">
				<div className="container text-center" style={{ maxWidth: "900px" }}>
					<h2 className="display-5 fw-bold mb-4">
						Más Allá del Paquete: Un Servicio Web Integral
					</h2>
					<p className="lead mb-5 mx-auto">
						Nuestro servicio de <strong>diseño y desarrollo web</strong> no
						termina con la entrega. Construimos una plataforma integral
						preparada para crecer y competir.
					</p>
					<div className="row text-start justify-content-center">
						<div className="col-md-6 mb-4">
							<h3 className="h5 fw-bold">
								Diseño Web y Experiencia de Usuario
							</h3>
							<p>
								No solo creamos código, creamos experiencias. Cada proyecto
								incluye un <strong>diseño web</strong> enfocado en la{" "}
								<strong>experiencia de usuario</strong> (UX), asegurando que tu
								sitio sea intuitivo y accesible en todos los{" "}
								<strong>dispositivos móviles</strong>.
							</p>
						</div>

						<div className="col-md-6 mb-4">
							<h3 className="h5 fw-bold">Optimización SEO y Estrategia</h3>
							<p>
								Un sitio web debe ser encontrado. Integramos{" "}
								<strong>optimización SEO</strong> técnica desde la base,
								preparando tu sitio para los{" "}
								<strong>motores de búsqueda</strong>. Además, conectamos tu web
								con tus <strong>estrategias de marketing</strong> digital.
							</p>
						</div>

						<div className="col-md-6 mb-4">
							<h3 className="h5 fw-bold">Tecnología Robusta y Escalable</h3>
							<p>
								Nuestros <strong>paquetes de diseño</strong> "Ignite" y
								superiores utilizan una arquitectura moderna que puede escalar a
								una <strong>aplicación web</strong> completa, integrarse con una{" "}
								<strong>base de datos</strong> o conectar con{" "}
								<strong>inteligencia artificial</strong> para funciones
								avanzadas.
							</p>
						</div>

						<div className="col-md-6 mb-4">
							<h3 className="h5 fw-bold">Servicios Integrados</h3>
							<p>
								Ofrecemos una solución de <strong>alta calidad</strong>.
								Gestionamos tus
								<strong>correos electrónicos</strong> corporativos,
								implementamos <strong>accesibilidad web</strong> (WCAG) y te
								capacitamos para usar tu nuevo CMS.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<SectionProcess
					title={"Nuestro Proceso de Desarrollo de Páginas Web"}
					text={
						"En JEG Dev Studios, aplicamos una metodología ágil basada en Scrum, que nos permite trabajar de forma organizada, flexible y transparente, entregando avances constantes a nuestros clientes. Nuestro objetivo es que formes parte activa del desarrollo de tu página web, asegurando que el resultado final supere tus expectativas."
					}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<CardSmallList
					titulo="Descubrimiento y Planificación Inicial"
					subtitulo="Desde el primer contacto, nos enfocamos en comprender tu visión, objetivos y necesidades específicas. ¿Qué hacemos en esta fase?"
					list={[
						" Reunión inicial contigo para entender tu negocio y el propósito del sitio.",
						" Definimos las funcionalidades clave, el diseño deseado y objetivos de cada sección.",
						" Elegimos el paquete de desarrollo más adecuado (Básico, Plus o Pro).",
						" Creamos un Product Backlog, que es la lista de todo lo que tu sitio debe incluir.",
					]}
					lastText="Tecnologías: Según el paquete, usamos stacks modernos como Figma, HTML, JavaScript, Tailwind, Next.js, Bootstrap, Node.js, PHP (Laravel) o Java."
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<CardNestedLists
					titulo="Ciclos de Desarrollo Iterativos (Sprints)"
					subtitulo="Dividimos el proyecto en pequeños ciclos llamados Sprints, de 1 o 2 semanas, en los que desarrollamos y entregamos funcionalidades específicas de tu sitio web. Cada Sprint incluye:"
					list={[
						{
							text: "a. Sprint Planning",
							sublist: [
								"Planificamos qué secciones o funcionalidades vamos a trabajar (por ejemplo, sección de contacto, página de inicio, integración de WhatsApp).",
								"Nos aseguramos de que las tareas estén alineadas a tus prioridades y al paquete que adquiriste.",
							],
						},
						{
							text: "b. Desarrollo y Actualizaciones",
							sublist: [
								" Nuestro equipo trabaja en el desarrollo del contenido acordado.",
								" Usamos frameworks modernos para garantizar velocidad, seguridad y escalabilidad.",
								" Durante el Sprint, mantenemos comunicación constante contigo para resolver dudas o validar avances.",
							],
						},
						{
							text: "c. Entrega Parcial y Feedback",
							sublist: [
								" Al final de cada Sprint, te mostramos un avance funcional real del sitio (por videollamada o enlace privado).",
								" Tú nos das tu feedback y podemos ajustar detalles antes del siguiente Sprint.",
							],
						},
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<CardSmallList
					titulo="Revisión Final y Entrega del Proyecto"
					subtitulo="Una vez terminado el número de Sprints necesarios (dependiendo del paquete elegido), realizamos lo siguiente:"
					list={[
						"Una demostración final del sitio completo.",
						"Una revisión conjunta para asegurarnos de que todo está correcto.",
						"Ajustes finales y optimización.",
						"Publicación en tu dominio con certificado SSL, email corporativo y conexión a redes sociales (según el paquete).",
					]}
				/>
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
				subtitle="Resuelve tus dudas sobre nuestros paquetes de desarrollo web."
			/>
		</>
	);
}
