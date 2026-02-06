"use client";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import CardPacksProduct from "@/components/Cards/CardPacksProduct";
import CTAProducts from "@/components/Cta/CTAProducts";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import Image from "next/image";
import TimelineProcess from "@/components/Cards/TimelineProcess";
import imgAppProduct1 from "@/assets/img/img/services/dev-web/pack-1/imagen-muestra-de-pagina-web.webp";
import imgAppProduct2 from "@/assets/img/img/services/dev-web/pack-2/imagen-muestra-de-pagina-web.webp";
import imgAppProduct3 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import imgAppProduct4 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import "swiper/css";
import "swiper/css/navigation";
import "./DevAppClient.css";

export default function DevAppClient() {
	const services = useMemo(
		() => [
			{
				id: "app_de_inicio",
				name: "App de Inicio",
				price: 18999,
				currency: "MXN",
				imageSrc: imgAppProduct1.src,
				isPriceFixed: false,
				labelBtn: "Cotizar app",
				description:
					"La forma más rápida de lanzar tu idea en una plataforma móvil.",
				items: [
					"App nativa sencilla para Android o iOS (1 plataforma).",
					"Diseño responsivo y minimalista.",
					"Hasta 3 pantallas principales (Home, Servicios, Contacto).",
					"Sin base de datos ni backend complejo.",
					"Publicación en tienda (Google Play o App Store incluida).",
					"Manual básico de uso y entrega de APK.",
				],
				urlInfo: "",
				buttonLabelInfo: "",
			},
			{
				id: "app_dual_basica",
				name: "App Dual Básica",
				price: 37999,
				currency: "MXN",
				imageSrc: imgAppProduct2.src,
				isPriceFixed: false,
				labelBtn: "Cotizar app",
				description:
					"Llega a todos los usuarios con una app funcional para Android y iOS.",
				items: [
					"App para Android e iOS (React Native o Kotlin Multiplatform).",
					"Hasta 6 pantallas dinámicas (login, inicio, catálogo, detalles, contacto, perfil).",
					"Integración con base de datos remota y backend en Java.",
					"Sistema básico de autenticación y almacenamiento de datos.",
					"Publicación en ambas tiendas.",
					"Diseño adaptado y personalizado con tu identidad visual.",
				],
				urlInfo: "",
				buttonLabelInfo: "",
			},
			{
				id: "app_funcional_pro",
				name: "App Funcional Pro",
				price: 75999,
				currency: "MXN",
				imageSrc: imgAppProduct3.src,
				isPriceFixed: false,
				labelBtn: "Cotizar app",
				description:
					"Una aplicación completa con funcionalidades avanzadas y backend robusto.",
				items: [
					"App híbrida o nativa para Android e iOS.",
					"Módulos personalizados (usuarios, productos, pedidos, etc.).",
					"Backend Java con APIs seguras y escalables.",
					"Diseño UI/UX profesional (componentes animados, navegación fluida).",
					"Sistema de notificaciones push.",
					"Base de datos relacional conectada al backend.",
					"Panel de administración web opcional.",
				],
				urlInfo: "",
				buttonLabelInfo: "",
			},
			{
				id: "app_a_medida_premium",
				name: "App a Medida Premium",
				price: 134999,
				currency: "MXN",
				imageSrc: imgAppProduct4.src,
				isPriceFixed: false,
				labelBtn: "Cotizar app",
				description:
					"La solución definitiva para proyectos complejos que requieren un desarrollo a medida.",
				items: [
					"App personalizada desde cero (multiplataforma).",
					"Arquitectura avanzada y optimizada.",
					"Funcionalidades complejas (geolocalización, pagos, cámara, multimedia, etc.).",
					"Backend modular con Java (APIs RESTful seguras).",
					"Panel de control con estadísticas y gestión remota.",
					"Mantenimiento técnico por 3 meses incluido.",
					"Asesoría y soporte para estrategias de publicación y escalabilidad.",
				],
				urlInfo: "",
				buttonLabelInfo: "",
			},
		],
		[]
	);

	const appsservicesinfo = {
		name: "Desarrollo de Aplicaciones Móviles Profesionales",
		serviceType: "Desarrollo de Aplicaciones móviles",
		description:
			"Somos los expertos en el desarrollo de aplicaciones en México, ofrecemos soluciones personalizadas que impulsan tu proyecto para Android e iOS.",
		image:
			"https://www.jegdevstudios.com/img-SEO/og-background-serv-dev-apps.webp",
		ratingValue: "4.6",
		reviewCount: "1",
	};

	interface FaqItem {
		question: string;
		answer: string;
	}

	const faqs: FaqItem[] = [
		{
			question: "¿Qué es mejor, una app nativa o una multiplataforma?",
			answer:
				"Depende de tu objetivo. Una app nativa (un desarrollo para iOS y otro para Android) ofrece el máximo rendimiento. Una app multiplataforma (con React Native o Kotlin Multiplatform) reduce costos y tiempo de desarrollo al usar una base de código compartida, siendo ideal para la mayoría de los proyectos.",
		},
		{
			question: "¿El precio incluye la publicación en las tiendas de apps?",
			answer:
				"Sí, todos nuestros paquetes incluyen el proceso completo de preparación y publicación tanto en la Google Play Store (Android) como en la App Store (iOS), asegurando que cumpla con todas las normativas.",
		},
		{
			question: "¿Qué es el 'backend' y por qué lo necesito?",
			answer:
				"El backend es el 'cerebro' de tu aplicación. Es un servidor que gestiona los datos, la lógica de negocio y la autenticación de usuarios. Es esencial para apps que necesitan guardar información, tener perfiles de usuario o sincronizar datos entre dispositivos.",
		},
		{
			question:
				"¿Qué tipo de mantenimiento necesita una app después de ser lanzada?",
			answer:
				"Una app requiere mantenimiento para asegurar su compatibilidad con nuevas versiones de iOS y Android, corregir posibles errores y, opcionalmente, añadir nuevas funcionalidades. Ofrecemos planes de mantenimiento para garantizar que tu app siga funcionando perfectamente a largo plazo.",
		},
	];

	const handleWhatsAppRedirect = (productName: string) => {
		const message = `Hola, estoy interesado en el paquete de aplicación "${productName}". ¿Podrían darme más información?`;
		// Reemplaza con tu número de WhatsApp en formato internacional
		const whatsappLink = `https://wa.me/5215512197135?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappLink, "_blank");
	};

	const features = [
		{
			icon: "smartphone",
			title: "Nativa vs. Híbrida",
			description: "Te asesoramos para elegir. Apps Nativas (Swift/Kotlin) para máximo rendimiento o Híbridas (React Native) para un desarrollo ágil en ambas plataformas."
		},
		{
			icon: "dns",
			title: "Backend Robusto",
			description: "El cerebro de tu app. Desarrollamos servidores seguros en Java o Node.js que gestionan tus datos, usuarios y lógica de negocio en la nube."
		},
		{
			icon: "palette",
			title: "Diseño UI/UX Premium",
			description: "No usamos plantillas genéricas. Diseñamos interfaces intuitivas y hermosas en Figma, pensadas para retener a tus usuarios."
		},
		{
			icon: "cloud_done",
			title: "Publicación Garantizada",
			description: "Lidiamos con la burocracia de Apple y Google. Nos encargamos de que tu app cumpla las normativas y sea aprobada en las tiendas."
		},
		{
			icon: "api",
			title: "Integraciones API",
			description: "Conectamos tu app con pasarelas de pago, mapas, redes sociales o tu sistema ERP actual para una operación fluida."
		},
		{
			icon: "support_agent",
			title: "Soporte Continuo",
			description: "La tecnología avanza. Ofrecemos mantenimiento para que tu app siga funcionando con las nuevas versiones de iOS y Android."
		}
	];

	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-dev-apps" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-dev-apps" />
			<StructuredData
				data={services}
				type="Product"
				idPage="service-dev-app"
				serviceInfo={appsservicesinfo}
			/>
			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Apps.webp"
					alt="Conoce nuestros servicios de desarrollo de aplicaciones móviles de JEG Dev Studios"
					width={2000}
					height={600}
					className="w-full h-auto"
				/>
			</section>
			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<h1 className="text-6xl md:text-7xl font-bold text-center text-gray-900 dark:text-white">
					Nuestros servicios de desarrollo de aplicaciones
				</h1>
				<p className="text-lg md:text-xl w-full px-3 md:px-5 max-w-4xl text-gray-600 dark:text-white">
					En JEG Dev Studios te ofrecemos paquetes adaptados a tus necesidades y
					presupuesto. Ya sea que estés iniciando con una app sencilla o
					necesites una aplicación móvil completa y escalable, tenemos la
					solución perfecta para ti.
				</p>
			</section>

			<section className="flex flex-col justify-center items-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4">
				<div className="flex flex-col justify-center items-center w-full max-w-6xl">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
						Todo lo que incluye tu App
					</h2>
					<p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600 dark:text-white">
						Desglosamos la tecnología detrás de nuestros paquetes. Calidad de código, diseño y seguridad en cada entrega.
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

			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
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
						480: { slidesPerView: 1 },
						640: { slidesPerView: 1 },
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

			<section className="flex flex-col justify-center items-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<div className="container max-w-4xl mx-auto w-full mb-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Nuestro Proceso de Desarrollo Móvil
					</h2>
					<p className="text-lg md:text-xl text-gray-600 dark:text-white">
						Desde la idea hasta la tienda de aplicaciones. Un flujo de trabajo transparente y ágil.
					</p>
				</div>
				<TimelineProcess
					steps={[
						{
							title: "Consultoría y Estrategia",
							description: "Definimos el alcance, la tecnología (Nativa vs Híbrida) y el modelo de negocio de tu aplicación."
						},
						{
							title: "Diseño UX/UI (Prototipado)",
							description: "Diseñamos cada pantalla en Figma. Validamos la navegación y la experiencia de usuario antes de programar."
						},
						{
							title: "Desarrollo y Backend",
							description: "Programamos la aplicación y configuramos el servidor (Backend) y la base de datos que la potenciará."
						},
						{
							title: "Testing y QA",
							description: "Pruebas rigurosas en dispositivos reales para asegurar estabilidad y rendimiento."
						},
						{
							title: "Publicación y Lanzamiento",
							description: "Gestionamos el despliegue en Google Play y App Store, asegurando que tu app esté disponible para el mundo."
						}
					]}
				/>
			</section>

			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
				<FAQ faqs={faqs} />
			</section>
			<section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
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
		</>
	);
}
