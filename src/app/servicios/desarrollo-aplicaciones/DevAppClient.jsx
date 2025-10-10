"use client";
import { useMemo } from "react";
import CardPacksProduct from "@/components/Cards/CardPacksProduct";
import CTAProducts from "@/components/Cta/CTAProducts";
import Image from "next/image";
import imgAppProduct1 from "@/assets/img/img/services/dev-web/pack-1/imagen-muestra-de-pagina-web.webp";
import imgAppProduct2 from "@/assets/img/img/services/dev-web/pack-2/imagen-muestra-de-pagina-web.webp";
import imgAppProduct3 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import imgAppProduct4 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import "./DevAppClient.css";

export default function DevAppClient() {
	const products = useMemo(
		() => [
			{
				id: "app_de_inicio",
				name: "App de Inicio",
				price: 18999,
				currency: "MXN",
				imageSrc: imgAppProduct1.src,
				description:
					"App nativa sencilla para Android o iOS (1 plataforma). Diseño responsivo y minimalista. Hasta 3 pantallas principales (Home, Servicios, Contacto). Sin base de datos ni backend complejo. Publicación en tienda (Google Play o App Store incluida). Manual básico de uso y entrega de APK.",
			},
			{
				id: "app_dual_basica",
				name: "App Dual Básica",
				price: 37999,
				currency: "MXN",
				imageSrc: imgAppProduct2.src,
				description:
					"App para Android e iOS (React Native o Kotlin Multiplatform). Hasta 6 pantallas dinámicas (login, inicio, catálogo, detalles, contacto, perfil). Integración con base de datos remota y backend en Java. Sistema básico de autenticación y almacenamiento de datos. Publicación en ambas tiendas. Diseño adaptado y personalizado con tu identidad visual.",
			},
			{
				id: "app_funcional_pro",
				name: "App Funcional Pro",
				price: 75999,
				currency: "MXN",
				imageSrc: imgAppProduct3.src,
				description:
					"App híbrida o nativa para Android e iOS. Módulos personalizados (usuarios, productos, pedidos, etc.). Backend Java con APIs seguras y escalables. Diseño UI/UX profesional (componentes animados, navegación fluida). Sistema de notificaciones push. Base de datos relacional conectada al backend. Panel de administración web opcional.",
			},
			{
				id: "app_a_medida_premium",
				name: "App a Medida Premium",
				price: 134999,
				currency: "MXN",
				imageSrc: imgAppProduct4.src,
				description:
					"App personalizada desde cero (multiplataforma). Arquitectura avanzada y optimizada. Funcionalidades complejas (geolocalización, pagos, cámara, multimedia, etc.). Backend modular con Java (APIs RESTful seguras). Panel de control con estadísticas y gestión remota. Mantenimiento técnico por 3 meses incluido. Asesoría y soporte para estrategias de publicación y escalabilidad.",
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
				<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
					<CardPacksProduct
						idProduct={"app_de_inicio"}
						dataPrice={18999}
						title="App de Inicio"
						price="18999"
						moneda="MXN"
						imageUrl={imgAppProduct1.src}
						items={[
							"App nativa sencilla para Android o iOS (1 plataforma).",
							"Diseño responsivo y minimalista.",
							"Hasta 3 pantallas principales (Home, Servicios, Contacto).",
							"Sin base de datos ni backend complejo.",
							"Publicación en tienda (Google Play o App Store incluida).",
							"Manual básico de uso y entrega de APK. ",
						]}
						onQuote={() => handleWhatsAppRedirect("App de Inicio")}
					/>
					<CardPacksProduct
						idProduct={"app_dual_basica"}
						dataPrice={37999}
						title="App Dual Básica"
						price="37999"
						moneda="MXN"
						imageUrl={imgAppProduct2.src}
						items={[
							"App para Android e iOS (React Native o Kotlin Multiplatform).",
							"Hasta 6 pantallas dinámicas (login, inicio, catálogo, detalles, contacto, perfil).",
							"Integración con base de datos remota y backend en Java.",
							"Sistema básico de autenticación y almacenamiento de datos.",
							"Publicación en ambas tiendas.",
							"Diseño adaptado y personalizado con tu identidad visual.",
						]}
						onQuote={() => handleWhatsAppRedirect("App Dual Básica")}
					/>
					<CardPacksProduct
						idProduct={"app_funcional_pro"}
						dataPrice={75999}
						title="App Funcional Pro"
						price="75999"
						moneda="MXN"
						imageUrl={imgAppProduct3.src}
						items={[
							"App híbrida o nativa para Android e iOS.",
							"Módulos personalizados (usuarios, productos, pedidos, etc.).",
							"Backend Java con APIs seguras y escalables.",
							"Diseño UI/UX profesional (componentes animados, navegación fluida).",
							"Sistema de notificaciones push.",
							"Base de datos relacional conectada al backend.",
							"Panel de administración web opcional.",
						]}
						onQuote={() => handleWhatsAppRedirect("App Funcional Pro")}
					/>
					<CardPacksProduct
						idProduct={"app_a_medida_premium"}
						dataPrice={134999}
						title="App a Medida Premium"
						price="134999"
						moneda="MXN"
						imageUrl={imgAppProduct4.src}
						items={[
							"App personalizada desde cero (multiplataforma).",
							"Arquitectura avanzada y optimizada.",
							"Funcionalidades complejas (geolocalización, pagos, cámara, multimedia, etc.).",
							"Backend modular con Java (APIs RESTful seguras).",
							"Panel de control con estadísticas y gestión remota.",
							"Mantenimiento técnico por 3 meses incluido.",
							"Asesoría y soporte para estrategias de publicación y escalabilidad.",
						]}
						onQuote={() => handleWhatsAppRedirect("App a Medida Premium")}
					/>
				</ul>
			</section>
			<CTAProducts />
		</>
	);
}
