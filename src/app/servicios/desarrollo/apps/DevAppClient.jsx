"use client";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import CardPacksProduct from "@/components/Cards/CardPacksProduct";
import CTAProducts from "@/components/Cta/CTAProducts";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import Image from "next/image";
import imgAppProduct1 from "@/assets/img/img/services/dev-web/pack-1/imagen-muestra-de-pagina-web.webp";
import imgAppProduct2 from "@/assets/img/img/services/dev-web/pack-2/imagen-muestra-de-pagina-web.webp";
import imgAppProduct3 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import imgAppProduct4 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import "swiper/css";
import "swiper/css/navigation";
import "./DevAppClient.css";

const faqs = [
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

export default function DevAppClient() {
	const products = useMemo(
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
			},
		],
		[]
	);

	// Fragmento enriquecido para SEO
	const productSchema = products.map((product) => ({
		"@context": "https://schema.org/",
		"@type": "Product",
		name: product.name,
		image: product.imageSrc,
		description: product.description,
		sku: product.id,
		offers: {
			"@type": "Offer",
			priceCurrency: product.currency,
			price: product.price,
			availability: "https://schema.org/InStock",
		},
	}));

	const handleWhatsAppRedirect = (productName) => {
		const message = `Hola, estoy interesado en el paquete de aplicación "${productName}". ¿Podrían darme más información?`;
		// Reemplaza con tu número de WhatsApp en formato internacional
		const whatsappLink = `https://wa.me/5215512197135?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappLink, "_blank");
	};
	return (
		<>
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-dev-apps" />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
			/>
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/fondos/Apps.webp"
					alt="Conoce nuestros servicios de desarrollo de aplicaciones móviles de JEG Dev Studios"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<h1 className="display-1 text-center text-white">
					Nuestros servicios de desarrollo de aplicaciones
				</h1>
				<p className="lead w-100 px-3 px-md-5">
					En JEG Dev Studios te ofrecemos paquetes adaptados a tus necesidades y
					presupuesto. Ya sea que estés iniciando con una app sencilla o
					necesites una aplicación móvil completa y escalable, tenemos la
					solución perfecta para ti.
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
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			<FAQ
				faqs={faqs}
				subtitle="Preguntas frecuentes sobre el desarrollo de apps."
			/>
			<CTAProducts />
		</>
	);
}
