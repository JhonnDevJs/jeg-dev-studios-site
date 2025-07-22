'use client';
import { useEffect, useState } from 'react';

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import { FaGlobe, FaChartLine, FaLock, FaHeadset, FaHandshake, FaFire, FaSearch, FaChartBar, FaAssistiveListeningSystems } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CardServices from "@/components/CardServices";
import TeamCarousel from "@/components/TeamCarousel";
import CTA from "@/components/CTA";
import BlogSection from '@/components/BlogSection';
import CardsProcess from '@/components/CardsProcess';
import CardNestedLists from '@/components/CardNestedLists';
import CardSmallList from '@/components/CardSmallList';
import StructuredData from "@/components/StructuredData";
import AsideAgenciaDigital from "@/assets/img/img/home/agencia-digital.webp";
import "./home.css";

const faqsHome = [
  // Desarrollo Web
  {
    question: "¿Qué incluye el servicio de desarrollo web de JEG Dev Studios?",
    answer: "Incluye la creación de sitios web personalizados, responsivos y adaptados a tu marca, utilizando tecnologías modernas como HTML, CSS, JavaScript, Node.js o Laravel.",
  },
  {
    question: "¿Ofrecen dominio y hosting incluido?",
    answer: "Sí, nuestros paquetes incluyen 1 año de dominio personalizado y hosting web, ya sea mediante Hostinger, DonDominio o Google Sites, según el paquete contratado.",
  },
  {
    question: "¿Qué tecnologías usan para crear sitios web?",
    answer: "Dependiendo del paquete, utilizamos HTML, CSS, JavaScript, Bootstrap, Node.js o PHP (Laravel) para el desarrollo del frontend y backend.",
  },
  {
    question: "¿Puedo solicitar cambios en el diseño del sitio web?",
    answer: "Sí, cada paquete incluye un número específico de cambios permitidos a nivel de secciones del diseño web.",
  },
  {
    question: "¿Incluyen optimización SEO en los sitios web?",
    answer: "Sí, todos nuestros paquetes incluyen implementación básica de SEO para mejorar tu visibilidad en buscadores como Google.",
  },
  {
    question: "¿Cuánto tiempo tarda en entregarse un sitio web?",
    answer: "La entrega depende del paquete. Desde 7 hasta 30 días hábiles, dependiendo de la complejidad y funcionalidades requeridas.",
  },

  // Desarrollo de Aplicaciones Móviles
  {
    question: "¿Qué tipo de aplicaciones móviles desarrollan?",
    answer: "Creamos apps nativas, híbridas y multiplataforma para Android y iOS, según los requerimientos del cliente y el paquete contratado.",
  },
  {
    question: "¿Publican las apps en la Play Store o App Store?",
    answer: "Sí, la publicación en Google Play o App Store está incluida en todos nuestros paquetes de desarrollo de apps móviles.",
  },
  {
    question: "¿Qué tecnologías utilizan para las apps móviles?",
    answer: "Trabajamos con tecnologías como React Native, Kotlin Multiplatform, Java para backend, y bases de datos remotas según el nivel del proyecto.",
  },
  {
    question: "¿Incluyen base de datos o backend en las apps móviles?",
    answer: "Sí, los paquetes intermedios y avanzados incluyen conexión con bases de datos remotas, backend en Java y funcionalidades como login o almacenamiento.",
  },
  {
    question: "¿Incluyen diseño UI/UX personalizado?",
    answer: "Sí, todos nuestros planes ofrecen un diseño responsivo y adaptado a tu marca. Los paquetes más avanzados incluyen navegación fluida y componentes animados.",
  },
  {
    question: "¿Pueden desarrollar apps con funcionalidades avanzadas?",
    answer: "Sí, como parte del paquete Premium podemos integrar funcionalidades complejas como pagos, geolocalización, cámara, push notifications y paneles administrativos web.",
  },

  // Software Empresarial
  {
    question: "¿Qué tipo de software empresarial desarrollan?",
    answer: "Desarrollamos soluciones personalizadas como sistemas de ventas, inventarios, citas, empleados y más, adaptados a las necesidades de tu negocio.",
  },
  {
    question: "¿El software incluye instalación y soporte?",
    answer: "Sí, todos los paquetes incluyen instalación en uno o más equipos. El paquete Profesional también ofrece soporte técnico durante el primer mes.",
  },
  {
    question: "¿Qué tipo de base de datos utilizan?",
    answer: "Utilizamos bases de datos locales (como SQLite) o en red/nube según el paquete, con estructuras seguras y eficientes para tu operación diaria.",
  },
  {
    question: "¿Incluyen funcionalidades como reportes o gráficas?",
    answer: "Sí, los paquetes más avanzados incluyen paneles de estadísticas, gráficas, exportación de reportes a Excel/PDF, y herramientas de gestión.",
  },
  {
    question: "¿El software puede ser multiusuario?",
    answer: "Sí, nuestros planes intermedios y avanzados permiten múltiples usuarios con acceso por roles, login y permisos configurables.",
  },
  {
    question: "¿Ofrecen soluciones con integración a sistemas externos?",
    answer: "Sí, en el paquete Profesional podemos integrar tu software con CRMs, facturación electrónica u otros sistemas empresariales según tus procesos.",
  },
];

export default function HomeClient({ posts: postsToShow }) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	const faqSchemaHome = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": faqsHome.map(faq => ({
			"@type": "Question",
			"name": faq.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.answer
			}
		}))
	};

  return (
		<>
			<StructuredData data={faqSchemaHome} />
			<section className="section d-flex flex-md-row flex-column justify-content-xl-start justify-content-center align-items-center w-100 vh-100 p-0 m-0 __imageBackground">
				<article
					className="container justify-content-center align-items-center w-100 gap-5 p-4 m-0"
					style={{ maxWidth: "47rem" }}
				>
					<div className="container p-0 m-0">
						<h1 className="text-white text-shadow">
							Empresa de Desarrollo Web en México: Soluciones Digitales para tu Negocio
						</h1>
						<p className="fs-xl-1 fs-5 text-light text-shadow text-brack">
							En JEG Dev Studios creamos sitios web, software y apps móviles a
							medida, que conectan con tus clientes y transforman tus ideas en
							resultados reales.
						</p>
					</div>
					<div className="d-flex flex-column bg-transparent align-items-xl-start align-items-center justify-content-start w-100 gap-3">
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
			<section id="beneficios" className="bg-transparent text-white py-5">
				<div className="container text-center">
					<h2 className="display-5 fw-bold mb-4">
						Más que servicios, te ofrecemos resultados tangibles
					</h2>
					<p className="lead mb-5 mx-auto" style={{ maxWidth: "800px" }}>
						En JEG Dev Studios nos enfocamos en ofrecer soluciones digitales
						personalizadas que impulsan tu negocio. Desde diseño web profesional
						hasta desarrollo de software a medida, cada proyecto que creamos
						está alineado con tus metas y diseñado para lograr impacto.
					</p>

					<div className="row text-start justify-content-center">
						<div className="col-md-6 col-lg-5 mb-4 d-flex">
							<div className="me-3 fs-3 text-white">
								<FaGlobe />
							</div>
							<div>
								<h3 className="h5 fw-bold">Mejora tu presencia en línea</h3>
								<p className="mb-0">
									Diseños atractivos que comunican tu propuesta de valor desde
									el primer clic.
								</p>
							</div>
						</div>

						<div className="col-md-6 col-lg-5 mb-4 d-flex">
							<div className="me-3 fs-3 text-white">
								<FaChartLine />
							</div>
							<div>
								<h3 className="h5 fw-bold">Aumenta tu alcance</h3>
								<p className="mb-0">
									Sitios responsivos y optimizados para buscadores que generan
									tráfico de calidad.
								</p>
							</div>
						</div>

						<div className="col-md-6 col-lg-5 mb-4 d-flex">
							<div className="me-3 fs-3 text-white">
								<FaLock />
							</div>
							<div>
								<h3 className="h5 fw-bold">Procesos seguros y escalables</h3>
								<p className="mb-0">
									Arquitectura moderna con buenas prácticas de seguridad y
									crecimiento.
								</p>
							</div>
						</div>

						<div className="col-md-6 col-lg-5 mb-4 d-flex">
							<div className="me-3 fs-3 text-white">
								<FaHeadset />
							</div>
							<div>
								<h3 className="h5 fw-bold">Soporte personalizado</h3>
								<p className="mb-0">
									Acompañamiento profesional antes, durante y después del
									desarrollo.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
				<h2>Nuestros Servicios</h2>
				<p className="text-white fs-5 mb-4">
					Nuestros servicios no se limitan al desarrollo técnico. Como parte de nuestras soluciones digitales, también <strong>ofrecemos servicios</strong> relacionados como asesoría, branding, UX/UI y soporte post-lanzamiento, buscando superar a las mejores <strong>agencias de diseño</strong> y desarrollo del país.
				</p>
				<article className="d-flex justify-content-center align-items-center w-100 p-0 m-0">
					<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
						<CardServices
							title="Desarrollo de sitios web"
							description="Desde la estructura visual hasta la funcionalidad interactiva, cada detalle es diseñado para optimizar la navegación y comunicar eficazmente el mensaje de una marca."
							url="/servicios/desarrollo-web"
							buttonLabel="Obtener servicios"
							items={[
								"Páginas Web Profesionales",
								"Ecommerce y Tiendas en Línea",
								"Aplicaciones Web",
								"Diseño UX/UI y Branding Digital",
								"Hosting, Dominios y Mantenimiento Web",
							]}
						/>
						<CardServices
							title="Desarrollo de aplicaciones"
							description="Implementamos lenguajes como Kotlin, React Native, PHP (Laravel) para garantizar compatibilidad, rendimiento y mantenimiento simplificado, asegurando escalabilidad y eficiencia."
							url="/servicios/desarrollo-aplicaciones"
							buttonLabel="Obtener servicios"
							items={[
								"Código Modular y Escalable",
								"Optimización de Algoritmos",
								"Interfaces API y Microservicios",
								"Seguridad y Cifrado Avanzado",
							]}
						/>
						<CardServices
							title="Desarrollo de software"
							description="Implementamos estructuras limpias y reutilizables en lenguajes como React Native y Java para garantizar la estabilidad y facilidad de crecimiento a largo plazo de tu proyecto."
							url="/servicios/desarrollo-software"
							buttonLabel="Obtener servicios"
							items={[
								"Clean Code",
								"Optimización del Rendimiento",
								"Seguridad a Nivel DevSecOps",
								"Optimización para Dispositivos Móviles",
							]}
						/>
					</ul>
				</article>
			</section>
			<section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
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
			<section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center w-100 gap-3 p-xl-5 p-3">
				<h2 className="display-5 text-center text-white">
					¿Por qué elegirnos como tu empresa de desarrollo web?
				</h2>
				<p className="fs-4 text-center text-white p-0">
					Servicio 100% mexicano, pensado para el mundo. Creamos sitios web con
					calidad profesional para clientes en México y cualquier parte del
					mundo. Nos diferenciamos por nuestra tecnología innovadora, compromiso
					con la entrega puntual y atención personalizada en cada proyecto.
				</p>
				<ul className="d-flex flex-wrap justify-content-center align-items-center w-100 gap-2 p-0 m-0 list-unstyled">
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">Profesionalismo</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">Soluciones personalizadas a tu negocio</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<h3 className="fs-2 m-0">Desarrollo 100% Personalizado</h3>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">+5 años de experiencia combinada</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">Acompañamiento y soporte 24/7</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<h3 className="fs-2 m-0">Soporte Local y Atención en Español</h3>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">Diseño 100% adaptado a móviles</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">Compromiso y responsabilidad</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<h3 className="fs-2 m-0">Optimización SEO y alto rendimiento</h3>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">Entrega puntual garantizada</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">Comunicación transparente</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">Garantía de satisfacción</p>
					</li>
				</ul>
			</section>
			<section className="section-agencia-digital-full d-flex flex-column flex-md-row align-items-stretch justify-content-center bg-black w-100" style={{ minHeight: "100vh", position: "relative" }}>
				<div className="container-agencia-digital d-flex flex-column flex-md-row align-items-center justify-content-center w-100 h-100 position-relative">
					{/* Imagen */}
					<div className="agencia-img-container-full position-relative flex-shrink-0">
						<Image
							loading="lazy"
							src={AsideAgenciaDigital}
							alt="Agencia digital JEG Dev Studios"
							fill
							style={{ objectFit: "cover" }}
							className="w-100 h-100"
						/>
					</div>
					{/* Texto */}
					<div className="agencia-text-container-full d-flex flex-column justify-content-center align-items-center align-items-md-start text-white p-4 flex-grow-1 position-relative">
						<h2 className="display-6 fw-bold mb-4">Más que una agencia digital común</h2>
						<p className="fs-5 mb-4">
							A diferencia de muchas agencias de diseño o agencias de desarrollo que solo ofrecen servicios técnicos, en JEG Dev Studios alineamos cada solución con el <strong>objetivo comercial</strong> de nuestros clientes.
						</p>
						<p className="fs-5 mb-3">
							Como <strong>empresa de desarrollo web</strong> con enfoque estratégico, creamos soluciones que combinan <strong>diseño de páginas web</strong>, experiencia de usuario, programación moderna y <strong>estrategias de marketing digital</strong> para lograr resultados reales.
						</p>
						<p className="fs-5">
							Si estás buscando una <strong>agencia de diseño web</strong> que entienda tu negocio y no solo escriba código, estás en el lugar correcto.
						</p>
					</div>
				</div>
			</section>
			<section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
				<CardNestedLists
					titulo="Cómo trabajamos tu sitio web"
					subtitulo="Dividimos el proyecto en pequeños ciclos llamados Sprints, de 1 o 2 semanas, en los que desarrollamos y entregamos funcionalidades específicas de tu sitio web. Cada Sprint incluye:"
					list={[
						{
							text: "Evaluamos tu negocio",
							sublist: [
								"Analizamos tus necesidades y objetivos.",
							],
						},
						{
							text: "Definimos objetivos digitales",
							sublist: [
								"Creamos un plan personalizado y claro.",
							],
						},
						{
							text: "Elegimos el paquete de desarrollo más adecuado (Básico, Plus o Pro).",
							sublist: [
								"Desarrollamos con calidad y comunicación constante.",
							],
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
							sublist: [
								"Revisamos resultados y optimizamos para ti.",
							],
						},
					]}
				/>
				<p className="fs-5 text-white mt-3">
					Nuestro enfoque nos permite trabajar como las <strong>agencias de desarrollo</strong> más ágiles, entregando valor tangible y medible en cada fase.
				</p>
			</section>
			<section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
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
			<section className="bg-transparent text-white py-5 text-center px-3 px-md-5">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="display-6 fw-bold mb-4">
						Un equipo humano detrás de la tecnología
					</h2>
					<p className="fs-5 mb-4">
						En JEG Dev Studios creemos que la tecnología es para las personas.
						Por eso:
					</p>
					<ul
						className="list-unstyled fs-5 text-start mx-auto"
						style={{ maxWidth: "600px" }}
					>
						<li className="d-flex align-items-start mb-3">
							<div className="me-3 mt-1 fs-3 text-white" >
								<FaHandshake/>
							</div>
							<p>
								Estamos comprometidos con la innovación y la creatividad en cada
								proyecto.
							</p>
						</li>
						<li className="d-flex align-items-start mb-3">
							<div className="me-3 mt-1 fs-3 text-white">
								<FaAssistiveListeningSystems />
							</div>
							<p>
								Escuchamos a nuestros clientes para construir soluciones que
								realmente funcionen.
							</p>
						</li>
						<li className="d-flex align-items-start mb-3">
							<div className="me-3 mt-1 fs-3 text-white">
								<FaFire />
							</div>
							<p>
								Tenemos pasión por la tecnología y el desarrollo de soluciones
								reales y efectivas.
							</p>
						</li>
					</ul>
				</div>
			</section>
			<section
				className="section d-flex flex-column bg-black justify-content-center align-items-center w-100 gap-3 p-xl-5 p-3 mt-5"
				style={{ minHeight: "553px" }}
			>
				<h2 className="text-center text-white">
					Somos un equipo experto en SEO, diseño, desarrollo web, software y
					apps móviles.
				</h2>
				<TeamCarousel />
			</section>
			<section className="bg-transparent text-white py-5 text-center px-3 px-md-5">
				<div className="container" style={{ maxWidth: "900px" }}>
					<h2 className="display-6 fw-bold mb-4">
						Optimización para crecer en buscadores
					</h2>
					<p className="fs-5 mb-4">
						Además de un diseño atractivo y funcional, garantizamos que tu
						proyecto tenga el mejor posicionamiento con:
					</p>
					<ul
						className="list-unstyled fs-5 text-start mx-auto"
						style={{ maxWidth: "600px" }}
					>
						<li className="d-flex align-items-start mb-3">
							<div className="me-3 mt-1 fs-3 text-white">
								<FaSearch />
							</div>
							<p>Diseños y desarrollos 100% optimizados para SEO.</p>
						</li>
						<li className="d-flex align-items-start mb-3">
							<div className="me-3 mt-1 fs-3 text-white">
								<FaChartLine />
							</div>
							<p>
								Estrategias para maximizar tu visibilidad en buscadores y atraer
								tráfico de calidad.
							</p>
						</li>
						<li className="d-flex align-items-start mb-3">
							<div className="me-3 mt-1 fs-3 text-white">
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
			<section className="container py-5" id="web-pricing">
				<div className="text-center mb-5">
					<h2 className="fw-bold text-white">¿Cuánto cuesta una página web en México?</h2>
					<p className="text-white">Conoce los paquetes y qué influye en su precio</p>
				</div>

				<div className="row">
					{/* Paquetes según el tipo de negocio */}
					<div className="col-md-6 mb-4">
						<h3 className="h5 fw-semibold text-center text-white">Paquetes según el tipo de negocio</h3>
						<ul className="list-group list-group-flush bg-transparent">
							<li className="list-group-item bg-transparent text-white">Landing page para emprendedores</li>
							<li className="list-group-item bg-transparent text-white">Sitio web corporativo</li>
							<li className="list-group-item bg-transparent text-white">Tienda en línea con pasarela de pagos</li>
							<li className="list-group-item bg-transparent text-white">Plataformas personalizadas o portales web</li>
						</ul>
					</div>

					{/* Factores que determinan el precio */}
					<div className="col-md-6 mb-4">
						<h3 className="h5 fw-semibold text-center text-white">Factores que determinan el precio</h3>
						<ul className="list-group list-group-flush bg-transparent">
							<li className="list-group-item bg-transparent text-white">Cantidad de secciones o páginas</li>
							<li className="list-group-item bg-transparent text-white">Diseño personalizado vs plantilla</li>
							<li className="list-group-item bg-transparent text-white">Funciones específicas (formularios, reservas, etc.)</li>
							<li className="list-group-item bg-transparent text-white">Integraciones externas (WhatsApp, pagos, CRM...)</li>
							<li className="list-group-item bg-transparent text-white">Optimización SEO y velocidad</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="container-fluid bg-transparent text-center text-white py-5">
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
			{mounted && <BlogSection posts={postsToShow} />}
			<CTA />
		</>
	);
}