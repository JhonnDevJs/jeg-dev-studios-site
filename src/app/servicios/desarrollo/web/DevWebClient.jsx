"use client";
import { useMemo } from "react";
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
import "./DevWebClient.css";

const faqs = [
	{
		question:
			"¿Cuál es la principal diferencia entre el 'Paquete Básico' y la 'Landing Page Profesional'?",
		answer:
			"La 'Landing Page Profesional' es ideal para un lanzamiento rápido y está construida sobre Google Sites, lo que simplifica el hosting. El 'Paquete Básico' ofrece una solución más robusta con hosting propio (Hostinger), un backend en Node.js y un email corporativo, dándote más control y profesionalismo.",
	},
	{
		question: "¿El hosting y dominio están incluidos para siempre?",
		answer:
			"Incluimos el primer año de hosting y dominio en todos nuestros paquetes. Después del primer año, la renovación tiene un costo anual que te notificaremos con anticipación. Los paquetes de 'Landing Page' y 'Mini Sitio' usan Google Sites, cuyo hosting es gratuito de forma continua.",
	},
	{
		question: "¿Qué significa 'cambios a nivel de sección'?",
		answer:
			"Se refiere a ajustes en el contenido, imágenes o estructura de una de las secciones ya existentes en tu página (ej. 'Nosotros', 'Servicios', 'Contacto'). No incluye la creación de una sección completamente nueva, la cual tendría un costo adicional.",
	},
	{
		question:
			"Si contrato un paquete, ¿puedo agregar más funcionalidades después?",
		answer:
			"¡Por supuesto! Todos nuestros desarrollos son escalables. Si en el futuro necesitas añadir una tienda en línea, un blog o cualquier otra funcionalidad, podemos cotizarla e integrarla a tu sitio web existente sin problemas.",
	},
];

export default function DevWebClient() {
	const products = useMemo(
		() => [
			{
				id: "paquete_basico",
				name: "Paquete Básico",
				price: 5799,
				currency: "MXN",
				imageSrc: imgWebProduct1.src,
				description:
					"1 año de Hosting y dominio (con hostinger). Certificado SSL. Email corporativo. Diseño responsivo (optimizado para móviles). Cambios en el diseño: 2 a nivel de sección. 4 Secciones dentro del layout/landing page. Integración de botón de WhatsApp. Implementación básica de SEO. Stack tecnológico: Frontend: HTML, CSS, JAVASCRIPT Backend: Node js. Tiempo de entrega: 7 a 10 días hábiles.",
			},
			{
				id: "paquete_plus",
				name: "Paquete Plus",
				price: 17299,
				currency: "MXN",
				imageSrc: imgWebProduct2.src,
				description:
					"1 año de Hosting y dominio (a elegir Hostinger ó Dondominio). Certificado SSL. Email corporativo. Diseño responsivo (optimizado para móviles). Cambios en el diseño: 4 (a nivel de sección). 4 Secciones dentro del layout/landing page. Integración básica de redes sociales (Botón de WhatsApp, Facebook). Implementación básica de SEO. 1 Mantenimiento gratuito a los 6 meses. Stack tecnológico: Frontend: HTML, Bootstrap CSS, JAVASCRIPT Backend: PHP (Laravel). Tiempo de entrega: 10 a 15 días hábiles.",
			},
			{
				id: "paquete_pro",
				name: "Paquete Pro",
				price: 28799,
				currency: "MXN",
				imageSrc: imgWebProduct3.src,
				description:
					"1 año de Hosting y dominio (con dondominio). Certificado SSL. Email corporativo. Diseño responsivo (optimizado para móviles). Cambios en el diseño: 8 (a nivel de sección). Hasta 10 landing pages/layouts. 4 Secciones dentro del layout/landing page. Integración completa de redes sociales (Facebook, Instagram, X (Twitter), WhatsApp). Implementación básica de SEO. 2 días Mantenimiento gratuitos 1 cada 6 meses. Stack tecnológico: Frontend: HTML, Bootstrap CSS, JAVASCRIPT Backend: PHP (Laravel) ó Node js. Tiempo de entrega: 15 a 30 días hábiles.",
			},
			{
				id: "landing-page-profesional",
				name: "Landing Page Profesional",
				price: 2999,
				currency: "MXN",
				imageSrc: imgWebProduct1.src,
				description:
					"Dominio personalizado incluido (1 año), Hosting gratuito mediante Google Sites, Diseño responsivo, Posicionamiento inicial en Google (SEO básico), Diseño adaptado a la marca del cliente, Hasta 5 secciones para tu página (landing)",
			},
			{
				id: "mini-sitio",
				name: "Mini Sitio",
				price: 3500,
				currency: "MXN",
				imageSrc: imgWebProduct1.src,
				description:
					"Dominio personalizado incluido (1 año), Hosting gratuito mediante Google Sites, Diseño responsivo, Posicionamiento inicial en Google (SEO básico), Diseño adaptado a la marca del cliente, Hasta 5 paginas (landings), 5 secciones por página (landing)",
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
		const message = `Hola, estoy interesado en el paquete de desarrollo web "${productName}". ¿Podrían darme más información?`;
		// Reemplaza con tu número de WhatsApp en formato internacional
		const whatsappLink = `https://wa.me/5215512197135?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappLink, "_blank");
	};

	return (
		<>
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-dev-web" />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
			/>
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/fondos/Web.webp"
					alt="Conoce nuestros servicios de desarrollo web en JEG Dev Studios"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<h1 className="display-1 text-center text-white">
					Desarrollo de Páginas Web: Paquetes y Soluciones a Medida
				</h1>
				<p className="lead w-100 px-3 px-md-5">
					En JEG Dev Studios, nos especializamos en el desarrollo de páginas web que convierten. Te ofrecemos paquetes adaptados a tus necesidades y presupuesto. Ya sea que estés comenzando con una landing page o necesites un sitio más robusto, tenemos la solución profesional para ti.
				</p>
				<h2>¿Qué Incluye Nuestro Servicio de Desarrollo de Páginas Web?</h2>
				<p className="lead w-100 px-3 px-md-5">
					Nuestro servicio va más allá de un simple diseño. Entendemos que el desarrollo de páginas web es la base de tu estrategia digital. Por eso, cada proyecto que entregamos está enfocado en tres pilares: un diseño atractivo que captura a tu cliente, un código limpio optimizado para SEO, y una arquitectura escalable que crece con tu negocio. Todos nuestros paquetes, desde el Básico hasta el Pro, están diseñados con esta filosofía.
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<h2 className="text-center text-white mb-xl-5 ">Paquetes de Desarrollo Web</h2>
				<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
					<CardPacksProduct
						idProduct="paquete_basico"
						dataPrice={5799}
						title="Paquete Básico"
						price="5799"
						moneda="MXN"
						imageUrl={imgWebProduct1.src}
						items={[
							"1 año de Hosting y dominio (con hostinger)",
							"Certificado SSL",
							"Email corporativo",
							"Diseño responsivo (optimizado para móviles)",
							"Cambios en el diseño: 2 a nivel de sección)",
							"4 Secciones dentro del layout/landing page",
							"Integración de botón de WhatsApp",
							"Implementación básica de SEO",
							"Stack tecnológico: Frontend: HTML, CSS, JAVASCRIPT Backend: Node js",
							"Tiempo de entrega: 7 a 10 días hábiles",
						]}
						onQuote={() => handleWhatsAppRedirect("Paquete Básico")}
					/>
					<CardPacksProduct
						idProduct={"paquete_plus"}
						dataPrice={17299}
						title="Paquete Plus"
						price="17299"
						moneda="MXN"
						imageUrl={imgWebProduct2.src}
						items={[
							"1 año de Hosting y dominio (a elegir Hostinger ó Dondominio)",
							"Certificado SSL",
							"Email corporativo",
							"Diseño responsivo (optimizado para móviles)",
							" Cambios en el diseño: 4 (a nivel de sección)",
							"4 Secciones dentro del layout/landing page",
							"Integración básica de redes sociales (Botón de WhatsApp, Facebook)",
							"Implementación básica de SEO",
							"1 Mantenimiento gratuito a los 6 meses",
							"Stack tecnológico: Frontend: HTML, Bootstrap CSS, JAVASCRIPT Backend: PHP (Laravel)",
							"Tiempo de entrega: 10 a 15 días hábiles.",
						]}
						onQuote={() => handleWhatsAppRedirect("Paquete Plus")}
					/>
					<CardPacksProduct
						idProduct={"paquete_pro"}
						dataPrice={28799}
						title="Paquete Pro"
						price="28799"
						moneda="MXN"
						imageUrl={imgWebProduct3.src}
						items={[
							"1 año de Hosting y dominio (con dondominio)",
							"Certificado SSL",
							"Email corporativo",
							"Diseño responsivo (optimizado para móviles)",
							"Cambios en el diseño: 8 (a nivel de sección)",
							"Hasta 10 landing pages/layouts",
							"4 Secciones dentro del layout/landing page",
							"Integración completa de redes sociales (Facebook, Instagram, X (Twitter), WhatsApp).",
							"Implementación básica de SEO",
							"2 días Mantenimiento gratuitos 1 cada 6 meses",
							"Stack tecnológico: Frontend: HTML, Bootstrap CSS, JAVASCRIPT Backend: PHP (Laravel) ó Node js",
							"Tiempo de entrega: 15 a 30 días hábiles.",
						]}
						onQuote={() => handleWhatsAppRedirect("Paquete Pro")}
					/>
				</ul>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<h2>
					Soluciones Web Rápidas y Profesionales
				</h2>
				<p className="lead w-100 px-3 px-md-5">
					¿Necesitas un sitio web especifico y secillo pero profesional para iniciar en tu negocio? En JEG Dev Studios tenemos la solución perfecta para ti. Adquiere tu sitio web personalizado y profesional en solo un par de clicks.
				</p>
				<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
					<CardProduct
						idProduct="landing-page-profesional"
						dataPrice={2999}
						title="Landing Page Profesional"
						price="2999"
						moneda="MXN"
						imageUrl={imgWebProduct1.src}
						items={[
							"Dominio personalizado incluido (1 año)",
							"Hosting gratuito mediante Google Sites",
							"Diseño responsivo",
							"Posicionamiento inicial en Google (SEO básico)",
							"Diseño adaptado a la marca del cliente",
							"Escoge 5 secciones para tu página",
						]}
						onAdd={() => handleWhatsAppRedirect("Landing Page Profesional")}
					/>
					<CardProduct
						idProduct="mini-sitio"
						dataPrice={3500}
						title="Mini Sitio"
						price="3500"
						moneda="MXN"
						imageUrl={imgWebProduct1.src}
						items={[
							"Dominio personalizado incluido (1 año)",
							"Hosting gratuito mediante Google Sites",
							"Diseño responsivo",
							"Posicionamiento inicial en Google (SEO básico)",
							"Diseño adaptado a la marca del cliente",
							"Hasta 5 paginas (landings)",
							"5 secciones por página (landing)",
						]}
						onAdd={() => handleWhatsAppRedirect("Mini Sitio")}
					/>
				</ul>
			</section>
			<SectionProcess
				title={"Nuestro Proceso de Desarrollo de Páginas Web"}
				text={
					"En JEG Dev Studios, aplicamos una metodología ágil basada en Scrum, que nos permite trabajar de forma organizada, flexible y transparente, entregando avances constantes a nuestros clientes. Nuestro objetivo es que formes parte activa del desarrollo de tu página web, asegurando que el resultado final supere tus expectativas."
				}
			/>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
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
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
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
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
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
			<section className="container-fluid text-center text-white py-5 gradient-effect-x">
				<div className="row justify-content-center g-4">
					<div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
						<CardsProcess
							number="1"
							titulo="Paquete Básico"
							list={[
								"Duración estimada: 7 - 10 días hábiles",
								"Tecnologías: Figma, HTML, CSS, JS, Node.js",
								"Entregas por Sprint: 1-2 entregas",
							]}
						/>
					</div>
					<div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
						<CardsProcess
							number="2"
							titulo="Paquete Plus"
							list={[
								"Duración estimada: 10 - 15 días hábiles",
								"Tecnologías: Figma, HTML, Bootstrap, JS, Php (Laravel)",
								"Entregas por Sprint: 1-2 entregas",
							]}
						/>
					</div>
					<div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
						<CardsProcess
							number="3"
							titulo="Paquete Pro"
							list={[
								"Duración estimada: 15 - 30 días hábiles",
								"Tecnologías: Figma, Next.js, Tailwind CSS, Php (Laravel) o Node.js",
								"Entregas por Sprint: 3-5 entregas",
							]}
						/>
					</div>
				</div>
			</section>
			<CTAProducts />
			<FAQ
				faqs={faqs}
				subtitle="Resuelve tus dudas sobre nuestros paquetes de desarrollo web."
			/>
		</>
	);
}
