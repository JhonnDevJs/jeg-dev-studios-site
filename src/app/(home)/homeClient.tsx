"use client";
import { useEffect, useState } from "react";

import {
	jsxDEV as _jsxDEV,
	Fragment as _Fragment,
} from "react/jsx-dev-runtime";
import {
	FaGlobe,
	FaChartLine,
	FaLock,
	FaHeadset,
	FaHandshake,
	FaFire,
	FaSearch,
	FaChartBar,
	FaAssistiveListeningSystems,
} from "react-icons/fa";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import CardServices from "@/components/Cards/CardServices";
import TeamCarousel from "@/components/Carousel/Slider";
import CTA from "@/components/Cta/CTA";
import BlogSection from "@/components/Blog/BlogSection";
import CardsProcess from "@/components/Cards/CardsProcess";
import CardTeam from "@/components/Cards/CardTeam";
import CardNestedLists from "@/components/Cards/CardNestedLists";
import CardSmallList from "@/components/Cards/CardSmallList";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import AsideAgenciaDigital from "@/assets/img/img/home/agencia-digital.webp";
import TeamGroup from "@/assets/img/img/home/team-group.webp";
import ferPhoto from "@/assets/img/img/team/fer-briseño.webp";
import leoPhoto from "@/assets/img/img/team/leonardo-gonzalez.webp";
import jhonPhoto from "@/assets/img/img/team/jhonatan-espinal.webp";
import Richi from "@/assets/img/img/team/ricardo.webp";
import "./home.css";
// 1. Define qué propiedades tiene un Post (ajusta esto según tus datos reales)
interface Post {
	slug?: string; // Was missing, now optional
	title?: string;
	date?: string; // Was missing, now optional
	link?: string;
	pubDate?: string;
	imageUrl?: string; // Usaremos imageUrl para consistencia
	excerpt?: string;
}

interface HomeClientProps {
	posts: Post[];
}

export default function HomeClient({ posts: postsToShow }: HomeClientProps) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	interface FaqItem {
		question: string;
		answer: string;
	}

	const faqs: FaqItem[] = [
		// --- Pregunta 1: Optimizada con "agencia de desarrollo de software" y "productos digitales" ---
		{
			question:
				'¿Qué los diferencia de otra "agencia digital" o "agencia web"?',
			answer:
				"Una agencia digital o web a menudo se enfoca en crear sitios de marketing. Nosotros somos una agencia de desarrollo de software. Eso significa que, además de sitios web, construimos productos digitales complejos: aplicaciones, sistemas de gestión interna (CRMs) y plataformas a medida que solucionan problemas reales de negocio.",
		},
		// --- Pregunta 2: Optimizada con "diseño de experiencia" ---
		{
			question: '¿Su "servicio de diseño web en México" incluye UX/UI?',
			answer:
				'Sí. Nuestro servicio de diseño web en México va más allá de lo visual. Somos una "agencia UX UI en México" dedicada. Nuestro equipo de diseño de experiencia (UX/UI) se asegura de que cada pantalla y botón sean intuitivos y accesibles para que tus usuarios logren sus objetivos.',
		},
		// --- Pregunta 3: (Ya estaba optimizada) ---
		{
			question:
				'¿Cómo adaptan los "servicios que ofrecen" a la "necesidad del cliente"?',
			answer:
				"No estandarizamos los servicios que ofrecemos. Nuestro proceso comienza con un análisis profundo para entender la verdadera necesidad del cliente. Investigamos tus objetivos y tu mercado para proponer una solución tecnológica que esté perfectamente alineada con tu negocio, asegurando que no gastes recursos en funciones innecesarias.",
		},
		// --- Pregunta 4: Optimizada con "search engine" ---
		{
			question: '¿Qué es el "desarrollo web profesional" para ustedes?',
			answer:
				"Para nosotros, el desarrollo web profesional significa crear un sitio que funciona en tres niveles. Primero, es rápido y seguro. Segundo, es fácil de usar en móviles y computadoras. Y tercero, está construido desde el código para que el search engine (Google) pueda entenderlo y posicionarlo, lo que llamamos SEO técnico.",
		},
		// --- Pregunta 5: (Ya estaba optimizada) ---
		{
			question: "Trabajo en una startup, ¿su proceso ágil me funciona?",
			answer:
				"Absolutamente. De hecho, nuestro proceso está diseñado para startups. Sabemos que necesitas moverte rápido y validar ideas ante inversionistas. Como agencia de sprints, trabajamos en ciclos cortos para entregarte avances funcionales. Esto te permite probar tu producto, conseguir financiamiento y escalar sin desperdiciar tu inversión inicial.",
		},
		// --- Pregunta 6: NUEVA PREGUNTA (para GEO y keywords semánticas) ---
		{
			question: '¿Qué es "Generative Engine Optimization (GEO)"?',
			answer:
				"Es la nueva frontera del SEO. El SEO tradicional se enfoca en el search engine (motor de búsqueda) clásico. El Generative Engine Optimization (GEO), o la optimización para motores de búsqueda generativos, prepara tu contenido para ser la respuesta de la IA. Preparamos tu web para ser la fuente de autoridad de las nuevas respuestas de IA.",
		},
	];

	const cardServices = [
		{
			title: "Desarrollo a Medida: Web, Apps y Software",
			description:
				"Construimos el motor digital de tu negocio. Desde sitios web profesionales y tiendas en línea que convierten, hasta aplicaciones móviles que conectan y software a medida que optimiza tus operaciones con código limpio y escalable.",
			url: "/servicios/desarrollo",
			buttonLabel: "Ver servicios de desarrollo",
			items: [
				"Sitios Web y E-commerce de Alto Rendimiento",
				"Aplicaciones Móviles (iOS/Android)",
				"Software Empresarial a Medida",
				"Arquitectura Escalable y Segura",
			],
		},
		{
			title: "Posicionamiento SEO Estratégico",
			description:
				"Hacemos que tus clientes te encuentren en Google. Aumentamos tu visibilidad con estrategias de posicionamiento SEO, GEO y AIO técnicas, de contenido y locales que atraen tráfico cualificado y generan ventas.",
			url: "/servicios/seo",
			buttonLabel: "Explorar servicios de SEO",
			items: [
				"Auditoría y Estrategia SEO",
				"Optimización On-Page y Técnica",
				"SEO Local para Negocios",
				"Reportes de Rendimiento",
			],
		},
		{
			title: "Diseño Gráfico y Digital (UX/UI)",
			description:
				"Creamos identidades visuales memorables y experiencias de usuario que funcionan. Desde un logotipo que define tu marca hasta interfaces intuitivas para tus plataformas digitales.",
			url: "/servicios/diseno",
			buttonLabel: "Descubrir Soluciones de Diseño",
			items: [
				"Branding y Diseño de Logotipos",
				"Diseño de Interfaces (UX/UI)",
				"Aplicaciones Web",
				"Diseño Editorial y Publicitario",
			],
		},
	];

	const teamData = [
		{
			name: "Jhonatan Espinal",
			position: "CEO Fundador y Desarrollador",
			description:
				"Como fundador de JEG Dev Studios, transformo ideas complejas en soluciones digitales de alto rendimiento. Me especializo en desarrollo full-stack con React y Next.js, y en la optimización SEO técnica para garantizar que cada proyecto alcance su máxima visibilidad y resultados de negocio.",
			links: [
				{
					url: "https://www.linkedin.com/in/JhonEG",
					title: "LinkedIn de Jhonatan Espinal Garcia",
					icon: "icon-linkedin-no-bg",
				},
				{
					url: "https://github.com/JhonEG-17",
					title: "GitHub de Jhonatan Espinal Garcia",
					icon: "icon-github",
				},
				{
					url: "https://jhoneg-17.github.io/JhonDev/",
					title: "Portafolio web de Jhonatan Espinal Garcia",
					icon: "icon-link",
				},
			],
			imageUrl: jhonPhoto,
		},
		{
			name: "Fernanda Briseño",
			position: "Co-Fundadora y Diseñadora web",
			description:
				"Soy Fernanda Briseño, Diseñadora UX/UI. Mejoro mis habilidades en experiencia de usuario e interfaces, creando diseños funcionales gracias a mi conocimiento en desarrollo web.",
			links: [
				{
					url: "https://www.linkedin.com/in/fernanda-brise%C3%B1o-64b310342/",
					title: "LinkedIn de Fernanda Briseño",
					icon: "icon-linkedin-no-bg",
				},
				{
					url: "https://www.behance.net/karlabriseo1",
					title: "Behance de Fernanda Briseño",
					icon: "icon-behance",
				},
			],
			imageUrl: ferPhoto,
		},
		{
			name: "Leonardo González",
			position: "Co-Fundador y Desarrollador.",
			description:
				"Soy un programador versátil con conocimientos en diversos lenguajes de programación. Me especializo en el desarrollo frontend, creando interfaces de usuario atractivas y funcionales. Mi pasión por la tecnología me impulsa a seguir aprendiendo y mejorando constantemente. Me estaco por mi gran capacidad de realizar analisis para la resolución efectiva de los problemas.",
			links: [
				{
					url: "https://www.linkedin.com/in/jose-leonardo-gonzalez-valadez-860b012b4/",
					title: "LinkedIn de Leonardo González",
					icon: "icon-linkedin-no-bg",
				},
			],
			imageUrl: leoPhoto,
		},
		{
			name: "Ricardo Ubaldo",
			position: "Co-Fundador y Desarrollador.",
			description:
				"Desarrollador Frontend experto en maquetación web. Con amplia experiencia en frameworks como Bootstrap, convierte diseños en interfaces de usuario pixel-perfect, responsivas y altamente optimizadas para todos los dispositivos.",
			links: [
				{
					url: "https://www.linkedin.com/in/ricardo-ubaldo-gonz%C3%A1lez-4522a5291/",
					title: "LinkedIn de Ricardo Ubaldo",
					icon: "icon-linkedin-no-bg",
				},
			],
			imageUrl: Richi,
		},
	];

	const cardsProcess = [
		{
			number: "1",
			title: "SITIO IGNITE",
			list: [
				"Duración estimada: 3 Semanas",
				"Tecnologías: Figma, Next js",
				"Entregas por Sprint: 1-2 entregas",
			],
		},
		{
			number: "2",
			title: "SITIO ACCELERATE",
			list: [
				"Duración estimada: 4 - 5 Semanas",
				"Tecnologías: Figma, Next js, Tailwind, Php (Laravel)",
				"Entregas por Sprint: 2-3 entregas",
			],
		},
		{
			number: "3",
			title: "SITIO ULTIMATE",
			list: [
				"Duración estimada: 5 - 6 Semanas",
				"Tecnologías: Figma, Next.js, Tailwind CSS, Php (Laravel) o Node.js",
				"Entregas por Sprint: 3-5 entregas",
			],
		},
	];

	return (
		<>
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-home" />
			<Script
				id="structured-data-video"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "VideoObject",
						name: "JEG Dev Studios | Agencia de Desarrollo Web y Software en México",
						description:
							"Descubre cómo JEG Dev Studios transforma tus ideas en soluciones digitales robustas",
						thumbnailUrl:
							"https://www.jegdevstudios.com/path/a/miniatura-del-video.jpg",
						uploadDate: "2025-10-16T15:00:00Z",
						duration: "PT1M0S",
						contentUrl: "https://www.youtube.com/watch?v=60pib_g34CA",
						embedUrl:
							"https://www.youtube.com/embed/60pib_g34CA?si=vDoEcQGRUt0iU6YD",
						publisher: {
							"@type": "Organization",
							name: "JEG Dev Studios",
							logo: {
								"@type": "ImageObject",
								url: "https://www.jegdevstudios.com/icons-SEO/logo.webp",
							},
						},
					}),
				}}
			/>
			<section className="section flex flex-col md:flex-row justify-center xl:justify-start items-center w-full min-h-screen p-0 m-0 __imageBackground bg-fixed-cover">
				<article
					className="container flex flex-col justify-center items-center w-full gap-5 p-4 m-0"
					style={{ maxWidth: "47rem" }}
				>
					<div className="container mx-auto p-0 m-0">
						<h1 className="text-2xl md:text-3xl lg:text-4xl text-white text-shadow">
							Agencia de Desarrollo Web y Software en México: Soluciones a
							Medida
						</h1>
						<p className="text-lg xl:text-xl text-gray-200 text-shadow text-brack">
							En JEG Dev Studios, como{" "}
							<strong>agencia de desarrollo web</strong> y{" "}
							<strong>software líder</strong>, creamos sitios, aplicaciones
							móviles y software a medida que conectan con tus clientes y
							transforman tus ideas en resultados reales.
						</p>
					</div>
					<div className="flex flex-col bg-transparent items-center xl:items-start justify-start w-full gap-3">
						<Link
							className="btn-services"
							href="/servicios"
							style={{ maxWidth: "15.3rem" }}
						>
							<span className="btn-text">Ver nuestros servicios</span>
						</Link>
						<Link
							className="btn-services"
							href="/contacto"
							style={{ maxWidth: "13.4rem" }}
						>
							<span className="btn-text">Solicitar consulta gratis</span>
						</Link>
						<Link
							href="/sobre-nosotros"
							className="btn-services"
							style={{ maxWidth: "7.8rem" }}
						>
							<span className="btn-text">Nosotros</span>
						</Link>
					</div>
				</article>
			</section>
			<section id="beneficios" className="text-white py-16 gradient-effect-x">
				<div className="container mx-auto text-center">
					<h2 className="text-5xl font-bold mb-4">
						Más que servicios, creamos soluciones integrales
					</h2>
					<p className="text-xl mb-5 mx-auto" style={{ maxWidth: "800px" }}>
						En JEG Dev Studios, esta{" "}
						<strong>empresa de desarrollo de software</strong> se enfoca en
						ofrecer soluciones digitales personalizadas que impulsan tu negocio.
						Desde un <strong>diseño y desarrollo web profesional</strong> hasta
						software a medida, cada proyecto que creamos está alineado con tus
						metas y diseñado para lograr un impacto medible.
					</p>

					<div className="flex flex-wrap text-left justify-center">
						<div className="w-full md:w-1/2 lg:w-5/12 mb-4 flex">
							<div className="mr-3 text-lg text-white">
								<FaGlobe />
							</div>
							<div>
								<h3 className="text-xl font-bold">Mejora tu presencia en línea</h3>
								<p className="mb-0">
									Diseños atractivos que comunican tu propuesta de valor desde
									el primer clic.
								</p>
							</div>
						</div>

						<div className="w-full md:w-1/2 lg:w-5/12 mb-4 flex">
							<div className="mr-3 text-lg text-white">
								<FaChartLine />
							</div>
							<div>
								<h3 className="text-xl font-bold">Aumenta tu alcance</h3>
								<p className="mb-0">
									Sitios responsivos y optimizados para buscadores que generan
									tráfico de calidad.
								</p>
							</div>
						</div>

						<div className="w-full md:w-1/2 lg:w-5/12 mb-4 flex">
							<div className="mr-3 text-lg text-white">
								<FaLock />
							</div>
							<div>
								<h3 className="text-xl font-bold">Procesos seguros y escalables</h3>
								<p className="mb-0">
									Arquitectura moderna con buenas prácticas de seguridad y
									crecimiento.
								</p>
							</div>
						</div>

						<div className="w-full md:w-1/2 lg:w-5/12 mb-4 flex">
							<div className="mr-3 text-lg text-white">
								<FaHeadset />
							</div>
							<div>
								<h3 className="text-xl font-bold">Soporte personalizado</h3>
								<p className="mb-0">
									Acompañamiento profesional antes, durante y después del
									desarrollo.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col justify-center items-center text-center text-white w-full p-3 xl:p-20 gap-3 gradient-effect-y">
				<h2 className="text-5xl font-bold mb-4">Nuestros Servicios Principales</h2>
				<p className="text-white text-lg mb-4">
					Te ofrecemos soluciones digitales integrales, divididas en tres áreas
					de expertise. Cada servicio está diseñado para funcionar en conjunto,
					creando una estrategia digital cohesiva y potente para tu negocio.
				</p>				<p className="text-white text-lg mb-4">
					Incluimos asesoría estratégica,{" "}
					<strong>desarrollo de aplicaciones móviles</strong>, branding,{" "}
					<strong>diseño UX/UI</strong>, estrategias de{" "}
					<strong>marketing digital</strong> y{" "}
					<strong>soporte post-lanzamiento</strong>, buscando superar a las
					mejores <strong>agencias de diseño web</strong> del país.
				</p>
				<article className="flex justify-center items-center w-full p-0 m-0">
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch w-full h-full gap-5 p-0 m-0">
						{cardServices.map((card, index) => (
							<CardServices
								key={index}
								title={card.title}
								description={card.description}
								buttonLabel={card.buttonLabel}
								url={card.url}
								items={card.items}
							/>
						))}
					</ul>
				</article>
			</section>
			<section
				className="section-agencia-digital-full flex flex-col md:flex-row items-stretch justify-center bg-black w-full"
				style={{ minHeight: "100vh", position: "relative" }}
			>
				<div className="container-agencia-digital flex flex-col md:flex-row items-center justify-center w-full h-full relative">
					{/* Imagen */}
					<div className="agencia-img-container-full relative flex-shrink-0">
						<Image
							loading="lazy"
							src={AsideAgenciaDigital}
							alt="Agencia digital JEG Dev Studios"
							fill
							sizes="(max-width: 767px) 100vw, 600px"
							style={{ objectFit: "cover" }} // object-cover
							className="w-full h-full"
						/>
					</div>
					{/* Texto */}
					<div className="agencia-text-container-full flex flex-col justify-center items-center xl:items-start text-white p-4 flex-grow relative">
						<h2 className="text-4xl font-bold mb-4 text-center">
							Más que una Agencia de Desarrollo Web común
						</h2>
						<p className="text-lg md:text-xl mb-4">
							A diferencia de muchas agencias, en JEG Dev Studios alineamos cada
							solución con el objetivo comercial de nuestros clientes. Somos una{" "}
							<strong>empresa de desarrollo web</strong>. Creamos soluciones que
							logran resultados reales. Para lograrlo, combinamos un{" "}
							<strong>diseño de páginas web</strong> impactante, una gran
							experiencia de usuario y un potente{" "}
							<strong>posicionamiento SEO</strong>.Todo respaldado por
							programación moderna y <strong>marketing digital</strong>.
						</p>
						<p className="text-lg md:text-xl">
							Si estás buscando una <strong>agencia de diseño web</strong> que
							entienda tu negocio y no solo escriba código, esta es la empresa
							correcta.
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col justify-center items-center text-center text-white w-full p-3 xl:p-20 gap-3 gradient-effect-x">
				<CardSmallList
					titulo="¿Qué podemos hacer por tu negocio?"
					subtitulo="Desde el primer contacto, nos enfocamos en comprender tu visión, objetivos y necesidades específicas. ¿Qué hacemos en esta fase?"
					list={[
						"Desarrollo y diseño de páginas web enfocados en tu propuesta de valor",
						"Estrategias de marketing digital integradas desde el primer Sprint",
						"Posicionamiento SEO optimizado en estructura, contenido y velocidad",
						"Servicios relacionados como integración con CRMs, pasarelas y analítica",
						"Acompañamiento estratégico para cumplir tu objetivo comercial",
					]}
					lastText="Nuestro objetivo siempre sera entregarles la mejor experiencia de desarrollo a nuestros clientes."
				/>
			</section>
			<section className="flex flex-col justify-center items-center text-center w-full gap-3 p-3 xl:p-20 gradient-effect-y">
				<h2 className="text-5xl text-center text-white">
					¿Por qué elegirnos como tu empresa de desarrollo web en México?
				</h2>
				<p className="text-2xl text-center text-white p-0">
					Somos una agencia de desarrollo de software 100% mexicana, pensada
					para el mundo. Creamos sitios web con calidad profesional para
					clientes en México y en todo el mundo. Nos diferenciamos por nuestra
					tecnología innovadora y nuestro compromiso con la entrega puntual.
					Además, te ofrecemos atención personalizada en cada proyecto.
				</p>
				<ul className="flex flex-wrap justify-center items-center w-full gap-2 p-0 m-0 list-none">
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<p className="text-3xl m-0">Profesionalismo</p>
					</li>
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<p className="text-3xl m-0">Soluciones personalizadas a tu negocio</p>
					</li>
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<h3 className="text-3xl m-0">Desarrollo 100% Personalizado</h3>
					</li>
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<p className="text-3xl m-0">+5 años de experiencia combinada</p>
					</li>
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<p className="text-3xl m-0">Acompañamiento y soporte 24/7</p>
					</li>
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<h3 className="text-3xl m-0">Soporte Local y Atención en Español</h3>
					</li>
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<p className="text-3xl m-0">Garantía de satisfacción</p>
					</li>
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<p className="text-3xl m-0">Entrega puntual garantizada</p>
					</li>
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<p className="text-3xl m-0">Comunicación transparente</p>
					</li>
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<p className="text-3xl m-0">Diseño 100% adaptado a móviles</p>
					</li>
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<p className="text-3xl m-0">Compromiso y responsabilidad</p>
					</li>
					<li className="bg-transparent text-center text-white border border-white rounded-full shadow-sm p-3">
						<h3 className="text-3xl m-0">
							Optimización y Posicionamiento SEO de alto rendimiento
						</h3>
					</li>
				</ul>
			</section>
			<section className="flex flex-col justify-center items-center text-center text-white w-full p-3 xl:p-20 gap-3 gradient-effect-x">
				<h2 className="text-5xl font-bold text-white">Cómo trabajamos tu sitio web</h2>
				<p className="text-lg text-white mt-3">
					Nuestro enfoque nos permite trabajar como las{" "}
					<strong>agencias de desarrollo</strong> más ágiles, entregando valor
					tangible y medible en cada fase.
				</p>
				<CardNestedLists
					titulo="Cómo trabajamos tu sitio web"
					subtitulo="Dividimos el proyecto en pequeños ciclos llamados Sprints, de 1 o 2 semanas, en los que desarrollamos y entregamos funcionalidades específicas de tu sitio web."
					list={[
						{
							text: "Evaluamos tu negocio",
							sublist: ["Analizamos tus necesidades y objetivos."],
						},
						{
							text: "Definimos objetivos digitales",
							sublist: ["Creamos un plan personalizado y claro."],
						},
						{
							text: "Elegimos el paquete de desarrollo más adecuado (Básico, Plus o Pro).",
							sublist: ["Desarrollamos con calidad y comunicación constante."],
						},
						{
							text: "Diseñamos y desarrollamos.",
							sublist: [
								" Al final de cada Sprint, te mostramos un avance funcional real del sitio (por videollamada o enlace privado).",
								" Tú nos das tu feedback y podemos ajustar detalles antes del siguiente Sprint.",
							],
						},
						{
							text: "Medimos resultados y optimizamos",
							sublist: ["Revisamos resultados y optimizamos para ti."],
						},
					]}
				/>
			</section>
			<section className="flex flex-col justify-center items-center text-center text-white w-full p-3 xl:p-20 gap-3 gradient-effect-y">
				<div className="video-responsive-container">
					<iframe
						className="video-responsive-iframe"
						src="https://www.youtube.com/embed/60pib_g34CA?si=bDdRfBVO6nFRqdFl&controls=0&showinfo=0&rel=0"
						title="Video de presentación de JEG Dev Studios"
						allow=""
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						loading="lazy"
					></iframe>
				</div>
				<p className="text-white mt-3">
					Conoce más sobre nuestra forma de trabajo y cómo podemos ayudarte a
					crecer.
				</p>
			</section>
			<section className="flex flex-col justify-center items-center text-center text-white w-full p-3 xl:p-20 gap-3 gradient-effect-x">
				<CardSmallList
					titulo="Más que desarrollo, valor añadido"
					subtitulo="Desde el primer contacto, nos enfocamos en comprender tu visión, objetivos y necesidades específicas. ¿Qué hacemos en esta fase?"
					list={[
						"Capacitación para el uso de tu nuevo sistema o sitio web",
						"Integración con herramientas de marketing digital y CRM",
						"Actualizaciones tecnológicas continuas para mantener tu proyecto vigente",
						"Consultoría estratégica para impulsar el crecimiento digital de tu negocio",
					]}
					lastText="En JEG Dev Studios no solo entregamos soluciones, sino que te
						acompañamos en todo el camino para que aproveches al máximo tu
						inversión tecnológica."
				/>
			</section>
			<section className="flex flex-col items-center justify-center text-white py-16 text-center px-3 md:px-10 gradient-effect-y">
				<div className="flex flex-col items-center justify-center text-center" style={{ maxWidth: "1200px" }}>
					<h2 className="text-4xl font-bold mb-4">
						Soluciones Tecnológicas Completas: Nuestro Alcance
					</h2>
					<p className="text-lg mb-4">
						Creemos en las soluciones integrales. Cuando contratas un proyecto
						con nosotros, no solo obtienes código; obtienes una arquitectura
						completa pensada para funcionar y crecer.
					</p>
					<h3 className="text-2xl font-bold mb-4">
						Arquitectura Full-Stack y Tecnologías Modernas
					</h3>
					<p className="text-lg mb-4">
						Manejamos tu proyecto de inicio a fin. Desarrollamos tanto el
						frontend (lo que ves) como el backend y las bases de datos (lo que
						no ves). Para sitios web, usamos tecnologías de vanguardia como
						React, Next.js, Node.js y PHP (Laravel). Para aplicaciones móviles,
						nos especializamos en React Native, Java y Kotlin.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
						<div className="text-left">
							<h4 className="text-2xl font-bold mb-4">Funcionalidad Avanzada y Sin Límites</h4>
							<p className="text-lg mb-4">
								Tu software debe adaptarse a tu negocio, no al revés. Creamos las
								características que tu operación requiere, incluyendo:
							</p>
							<ul className="text-lg text-left list-disc pl-5 space-y-2">
								<li className="mb-3">
									<p>Sistemas multiusuario con diferentes roles y permisos.</p>
								</li>
								<li className="mb-3">
									<p>Paneles de control con reportes y gráficas personalizadas.</p>
								</li>
								<li className="mb-3">
									<p>
										Integraciones con sistemas externos como CRMs, pasarelas de pago
										o facturación electrónica.
									</p>
								</li>
							</ul>
						</div>
						<div className="text-left">
							<h4 className="text-2xl font-bold mb-4">Un Servicio de Principio a Fin</h4>
							<p className="text-lg mb-4">
								Nos encargamos de todo el proceso para que no tengas que preocuparte
								por los detalles técnicos.
							</p>
							<ul className="text-lg text-left list-disc pl-5 space-y-2">
								<li className="mb-3">
									Gestionamos la publicación de tus apps en la Play Store y App
									Store.
								</li>
								<li className="mb-3">
									Podemos incluir servicios de dominio, hosting e instalación.
								</li>
								<li className="mb-3">
									Todos nuestros desarrollos web incluyen optimización SEO técnica
									desde la base.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section
				className="section-agencia-digital-full flex flex-col md:flex-row items-stretch justify-center w-full gradient-effect-x"
				style={{ minHeight: "100vh", position: "relative" }}
			>
				<div
					className="container-agencia-digital flex flex-col md:flex-row items-center justify-evenly w-full h-full relative"
					style={{ maxWidth: "1200px" }}
				>
					{/* Texto */}
					<div className="agencia-text-container-full flex flex-col justify-center items-center xl:items-start text-white xl:p-20 xl:pr-0 p-3 flex-grow relative">
						<h2 className="text-4xl font-bold mb-4">
							Un equipo humano detrás de la tecnología
						</h2>
						<p className="text-lg mb-4">
							En JEG Dev Studios creemos que la tecnología es para las personas.
							Por eso:
						</p>
						<ul className="flex flex-col justify-start list-none text-lg text-left">
							<li className="flex items-start mb-3">
								<div className="mr-3 mt-1 text-lg text-white">
									<FaHandshake />
								</div>
								<p>
									Estamos comprometidos con la innovación y la creatividad en
									cada proyecto.
								</p>
							</li>
							<li className="flex items-start mb-3">
								<div className="mr-3 mt-1 text-lg text-white">
									<FaAssistiveListeningSystems />
								</div>
								<p>
									Escuchamos a nuestros clientes para construir soluciones que
									realmente funcionen.
								</p>
							</li>
							<li className="flex items-start mb-3">
								<div className="mr-3 mt-1 text-lg text-white">
									<FaFire />
								</div>
								<p>
									Tenemos pasión por la tecnología y el desarrollo de soluciones
									reales y efectivas.
								</p>
							</li>
						</ul>
					</div>
					{/* Imagen */}
					<div className="agencia-img-container-full relative flex-shrink-0">
						<Image
							loading="lazy"
							src={TeamGroup}
							alt="Imagen del equipo de JEG Dev Studios"
							fill
							sizes="(max-width: 767px) 100vw, 600px"
							style={{ objectFit: "cover" }} // object-cover
							className="w-full h-full"
						/>
					</div>
				</div>
			</section>
			<section
				className="section flex flex-col bg-black justify-center items-center w-full gap-3 p-3 xl:p-20 m-0 gradient-effect-y"
				style={{ minHeight: "553px" }}
			>
				<h2 className="text-center text-white">
					Somos un equipo experto en SEO, diseño, desarrollo web, software y
					apps móviles.
				</h2>
				<TeamCarousel>
					{teamData.map((teamItem, index) => (
						<CardTeam
							key={index}
							imageUrl={teamItem.imageUrl}
							name={teamItem.name}
							position={teamItem.position}
							description={teamItem.description}
							links={teamItem.links}
						/>
					))}
				</TeamCarousel>
			</section>
			<section className="flex flex-col justify-center items-center text-white py-16 text-center px-3 md:px-10 gradient-effect-x">
				<div className="flex flex-col justify-center items-center" style={{ maxWidth: "900px" }}>
					<h2 className="text-4xl font-bold mb-4">
						Optimización para crecer en buscadores
					</h2>
					<p className="text-lg mb-4">
						Además de un diseño atractivo y funcional, garantizamos que tu
						proyecto tenga el mejor posicionamiento con:
					</p>
					<ul
						className="list-none text-lg text-left mx-auto"
						style={{ maxWidth: "600px" }}
					>
						<li className="flex items-start mb-3">
							<div className="mr-3 mt-1 text-lg text-white">
								<FaSearch />
							</div>
							<p>Diseños y desarrollos 100% optimizados para SEO.</p>
						</li>
						<li className="flex items-start mb-3">
							<div className="mr-3 mt-1 text-lg text-white">
								<FaChartLine />
							</div>
							<p>
								Estrategias para maximizar tu visibilidad en buscadores y atraer
								tráfico de calidad.
							</p>
						</li>
						<li className="flex items-start mb-3">
							<div className="mr-3 mt-1 text-lg text-white">
								<FaChartBar />
							</div>
							<p>
								Análisis continuo y seguimiento para mejorar tu posicionamiento
								digital.
							</p>
						</li>
					</ul>
				</div>
			</section>
			<section
				className="flex flex-col justify-center items-center w-full py-16 __bg-image-pricing bg-fixed-cover"
				id="web-pricing"
			>
				<div className="text-center mb-5">
					<h2 className="font-bold text-white text-4xl">
						¿Cuánto cuesta una página web en México?
					</h2>
					<p className="text-white text-lg">
						Conoce los paquetes y qué influye en su precio
					</p>
				</div>

				<div className="flex flex-wrap w-full p-1 xl:p-20">
					{/* Paquetes según el tipo de negocio */}
					<div className="w-full md:w-1/2 mb-4">
						<h3 className="text-xl font-semibold text-center text-white">
							Paquetes según el tipo de negocio
						</h3>
						<ul className="bg-transparent list-none p-0">
							<li className="bg-transparent text-white py-2 border-b border-gray-700">
								<p>Landing page para emprendedores</p>
							</li>
							<li className="bg-transparent text-white py-2 border-b border-gray-700">
								<p>Sitio web corporativo</p>
							</li>
							<li className="bg-transparent text-white py-2 border-b border-gray-700">
								<p>Tienda en línea con pasarela de pagos</p>
							</li>
							<li className="bg-transparent text-white py-2">
								<p>Plataformas personalizadas o portales web</p>
							</li>
						</ul>
					</div>

					{/* Factores que determinan el precio */}
					<div className="w-full md:w-1/2 mb-4">
						<h3 className="text-xl font-semibold text-center text-white shadow-lg">
							Factores que determinan el precio
						</h3>
						<ul className="bg-transparent list-none p-0">
							<li className="bg-transparent text-white py-2 border-b border-gray-700">
								<p>Cantidad de secciones o páginas</p>
							</li>
							<li className="bg-transparent text-white py-2 border-b border-gray-700">
								<p>Diseño personalizado vs plantilla</p>
							</li>
							<li className="bg-transparent text-white py-2 border-b border-gray-700">
								<p>Funciones específicas (formularios, reservas, etc.)</p>
							</li>
							<li className="bg-transparent text-white py-2 border-b border-gray-700">
								<p>Integraciones externas (WhatsApp, pagos, CRM...)</p>
							</li>
							<li className="bg-transparent text-white py-2">
								<p>Optimización SEO y velocidad</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="w-full text-center text-white py-16 gradient-effect-y px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
					{cardsProcess.map((card, index) => (
						<CardsProcess
							key={index}
							number={card.number}
							titulo={card.title}
							list={card.list}
						/>
					))}
				</div>
			</section>
			{mounted && postsToShow.length > 0 && (
				<BlogSection
					posts={postsToShow
						.map((post) => {
							// Mapeamos las propiedades de Post a BlogPost
							if (post.title && post.link && post.pubDate) {
								return {
									...post, // Pasamos todas las propiedades originales
									title: post.title,
									link: post.link,
									pubDate: post.pubDate,
									contentSnippet: post.excerpt, // Renombramos excerpt a contentSnippet
									// El resto de propiedades como 'content' y 'categories' se pasarán con el ...post
								};
							}
							return null;
						})
						.filter((post): post is NonNullable<typeof post> => post !== null)}
				/>
			)}

			<section className="flex flex-col justify-center items-center text-center text-white w-full p-3 xl:p-20 gap-3 gradient-effect-y">
				<CTA
					title={"¿Listo para dar el siguiente paso digital?"}
					paragraph={
						"Es momento de convertir tu idea en una solución tecnológica escalable y atractiva. Agenda tu consulta gratuita o contáctanos directamente."
					}
					label={"Solicita tu Auditoría Gratuita"}
					link={"/contacto"}
				/>
			</section>
			<FAQ
				faqs={faqs}
				subtitle="Resuelve tus dudas sobre nuestros servicios de desarollo, diseño y posicionamiento SEO."
			/>
		</>
	);
}
