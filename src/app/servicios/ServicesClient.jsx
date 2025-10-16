"use client";
import { useState } from "react";
import Link from "next/link";
import CardServices from "@/components/Cards/CardServices";
import CardNestedLists from "@/components/Cards/CardNestedLists";
import CardSmallList from "@/components/Cards/CardSmallList";
import FAQ from "@/components/Seo/FAQ";
import CTA from "@/components/Cta/CTA";
import StructuredData from "@/components/Seo/StructuredData"; // Importar el nuevo componente
import Image from "next/image";
import "./ServicesClient.css";

const faqs = [
	// --- Actuales ---
	{
		question: "¿Cómo contrato un servicio con ustedes?",
		answer:
			"Es muy fácil: elige el tipo de proyecto que necesitas (página web, aplicación móvil o software empresarial), revisa nuestros paquetes y contáctanos. Agendamos una videollamada para conocer tu idea y te enviamos una propuesta clara y detallada.",
	},
	{
		question: "¿Debo pagar todo de una vez?",
		answer:
			"No. Trabajamos por etapas: se paga un mínimo del 50% al iniciar y el resto cuando el proyecto esté finalizado y aprobado por ti. Esta modalidad aplica para cualquiera de nuestros servicios.",
	},
	{
		question: "¿Incluye mantenimiento o soporte?",
		answer:
			"Depende del paquete contratado. Algunos incluyen mantenimiento básico por un tiempo limitado. También ofrecemos planes de soporte y mantenimiento personalizados para proyectos a largo plazo.",
	},
	{
		question: "¿Qué necesito para comenzar un proyecto?",
		answer:
			"Solo necesitas tener claro tu objetivo y entregarnos los datos básicos de tu marca: nombre, logotipo, colores y una idea general de lo que deseas lograr. Nosotros te acompañamos en cada paso del proceso.",
	},
	{
		question: "¿Qué tecnologías utilizan?",
		answer:
			"Trabajamos con tecnologías modernas y adaptadas a cada tipo de desarrollo: HTML, CSS, JavaScript, React, Next.js, Node.js, Laravel, Kotlin, Java, Unity, Flutter, entre otras. Elegimos lo más adecuado según tu proyecto.",
	},
	{
		question: "¿Qué sucede si quiero cancelar el proyecto?",
		answer:
			"Puedes hacerlo, pero aplicamos una política de 0 devoluciones del pago inicial, ya que se ha invertido tiempo y recursos en el desarrollo. Esta condición está estipulada en el contrato desde el inicio.",
	},
	{
		question: "¿Puedo ampliar o escalar mi proyecto más adelante?",
		answer:
			"¡Por supuesto! Todos nuestros desarrollos están pensados para crecer. Si inicias con algo básico, puedes agregar nuevas funcionalidades, secciones o módulos en cualquier momento.",
	},
	{
		question: "¿Trabajan con contratos y garantías?",
		answer:
			"Sí. Todos nuestros proyectos están respaldados por un contrato claro y justo. Además, firmamos un documento que confirma que nos entregaste todo lo necesario para iniciar el desarrollo.",
	},

	// --- Nuevas para SEO ---
	{
		question:
			"¿Cuánto tiempo tardan en verse resultados de posicionamiento SEO?",
		answer:
			"Los resultados dependen del estado actual de tu sitio, la competencia y las estrategias aplicadas. En promedio, los avances son visibles entre 3 y 6 meses con nuestros servicios de posicionamiento SEO en México.",
	},
	{
		question: "¿Cuál es la diferencia entre SEO local y SEO web?",
		answer:
			"El SEO local está enfocado en negocios que buscan aparecer en Google Maps o búsquedas cercanas, mientras que el SEO web está orientado a alcanzar visibilidad a nivel nacional o global. Ambos forman parte de nuestros servicios de posicionamiento SEO profesional.",
	},
	{
		question: "¿Qué incluye una auditoría SEO?",
		answer:
			"Nuestra auditoría SEO revisa aspectos técnicos, contenidos, enlaces y usabilidad de tu sitio web. Identificamos oportunidades de mejora y creamos un plan de posicionamiento SEO y estrategias de marketing digital para tu negocio.",
	},

	// --- Nuevas para Diseño Gráfico ---
	{
		question: "¿Qué incluye un servicio de diseño gráfico?",
		answer:
			"Nuestros servicios abarcan logotipos, branding, UX/UI para web, apps y software, diseño editorial, publicidad digital, invitaciones y menús digitales, además de edición fotográfica. Creamos soluciones creativas que fortalecen tu marca.",
	},
	{
		question: "¿Me entregan los archivos editables de los diseños?",
		answer:
			"Sí. Entregamos archivos editables en formatos profesionales como AI, PSD o Figma, además de versiones listas para impresión o uso digital.",
	},
	{
		question:
			"¿Puedo solicitar un portafolio o catálogo de servicios de diseño gráfico?",
		answer:
			"Por supuesto. Puedes solicitarlo en cualquier momento y también contamos con ejemplos de nuestro trabajo en el sitio web para que conozcas la calidad de nuestros servicios de diseño gráfico.",
	},
	{
		question: "¿Ofrecen diseño UX/UI para páginas web, apps y software?",
		answer:
			"Sí. Diseñamos interfaces modernas, funcionales y centradas en el usuario para web, aplicaciones móviles y software, garantizando experiencias digitales intuitivas y efectivas.",
	},

	// --- Nuevas para Desarrollo ---
	{
		question:
			"¿Cuál es el tiempo promedio de entrega de un sitio web, app o software?",
		answer:
			"Depende del tipo de proyecto: una landing page puede tomar 7–10 días, una aplicación móvil 2–4 semanas y un software empresarial hasta 30 días o más según la complejidad.",
	},
	{
		question: "¿Mis proyectos incluyen optimización SEO desde el inicio?",
		answer:
			"Sí, todos los sitios web incluyen optimización SEO básica desde el diseño y desarrollo. También ofrecemos planes de SEO avanzado y estrategias de marketing digital personalizadas.",
	},
	{
		question: "¿Ofrecen publicación de apps en Google Play y App Store?",
		answer:
			"Sí, la publicación en tiendas oficiales está incluida en nuestros paquetes de aplicaciones móviles, cumpliendo con todos los requisitos técnicos y de diseño.",
	},

	// --- Nuevas Comerciales ---
	{
		question:
			"¿Puedo contratar varios servicios juntos (web + SEO + diseño gráfico)?",
		answer:
			"Sí. Ofrecemos soluciones integrales que combinan desarrollo web, posicionamiento SEO y diseño gráfico en un solo paquete, optimizando tu inversión y resultados.",
	},
	{
		question:
			"¿Trabajan solo en México o también con clientes internacionales?",
		answer:
			"Aunque estamos en México, trabajamos con clientes en Latinoamérica y otras partes del mundo. Todos nuestros servicios se adaptan a modalidad remota y seguimos estándares profesionales globales.",
	},
	{
		question:
			"¿Qué beneficios obtengo al contratar desarrollo web, SEO y diseño gráfico con JEG Dev Studios?",
		answer:
			"Obtienes soluciones integrales: sitios web modernos, apps y software a medida, posicionamiento SEO efectivo y diseños gráficos profesionales que fortalecen tu identidad visual, aumentando visibilidad, tráfico y conversiones.",
	},
];

export default function ServicesClient() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	// Schema ESPECÍFICO para esta página de servicios
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			// Usa las FAQs de ESTA PÁGINA
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};

	return (
		<>
			{/* Este componente solo renderiza el schema de FAQ aquí, no en otras páginas */}

			<StructuredData data={faqSchema} />
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/fondos/Servicios.webp"
					alt="Nuestros servicios en JEG Dev Studios"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 pb-xl-0 gap-3 gradient-effect-x">
				<h1 className="text-center text-white fw-bold mt-3">
					Soluciones de desarrollo digital: sitios web, apps móviles y software
					empresarial en México
				</h1>
				<h2 className="text-white text-center">
					Servicios digitales a la medida de tu empresa
				</h2>
				<p className="lead text-white text-center">
					JEG Dev Studios: tu agencia de desarrollo digital profesional
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<h2 className="text-center text-white">Explora nuestros servicios</h2>
				<article className="d-flex flex-column justify-content-center align-items-center w-100 p-0 m-0">
					<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
						<CardServices
							title="Desarrollo de sitios web"
							description="Desde la estructura visual hasta la funcionalidad interactiva, cada detalle es diseñado para optimizar la navegación y comunicar eficazmente el mensaje de una marca."
							url="/servicios/desarrollo-web"
							buttonLabel="Obtener servicios"
							items={[
								"Landing pages modernas y optimizadas",
								"Sitios empresariales profesionales",
								"Diseño responsivo y optimización SEO",
								"Stacks tecnologicos modernos",
							]}
						/>
						<CardServices
							title="Desarrollo de aplicaciones"
							description="Implementamos lenguajes como Kotlin, React Native, PHP (Laravel) para garantizar compatibilidad, rendimiento y mantenimiento simplificado, asegurando escalabilidad y eficiencia."
							url="/servicios/desarrollo-aplicaciones"
							buttonLabel="Obtener servicios"
							items={[
								"Apps nativas e híbridas",
								"Publicación en tiendas",
								"Integración con bases de datos y backends",
								"Tecnologías: React Native, Java, Kotlin",
							]}
						/>
						<CardServices
							title="Desarrollo de software"
							description="Implementamos estructuras limpias y reutilizables en lenguajes como React Native y Java para garantizar la estabilidad y facilidad de crecimiento a largo plazo de tu proyecto."
							url="/servicios/desarrollo-software"
							buttonLabel="Obtener servicios"
							items={[
								"Sistemas a medida según tu flujo de trabajo",
								"Control de usuarios, reportes, paneles y estadísticas",
								"Interfaces accesibles y seguras",
								"Integraciones con CRMs o facturación electrónica",
							]}
						/>
					</ul>
				</article>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<CardNestedLists
					titulo="¿Qué ofrecemos en desarrollo web personalizado?"
					subtitulo="Para nuestros servicios de desarrollo web planteamos diferentes alternativas y soluciones para nuestros clientes garantizando flexibilidad, escalabilidad, calidad y total control de lo que se nos solicita ajustandonos a cada proyecto."
					list={[
						{
							text: "Landing pages modernas y optimizadas",
							sublist: [
								"Creamos sitios de una sola sección orientados a la conversión, ideales para promocionar servicios o productos específicos.",
							],
						},
						{
							text: "Sitios empresariales profesionales",
							sublist: [
								"Diseños personalizados con navegación clara y estructuras adaptadas a negocios que necesitan presencia sólida en línea.",
							],
						},
						{
							text: "Diseño responsivo y optimización SEO",
							sublist: [
								"Adaptamos cada sitio a todos los dispositivos y aplicamos técnicas básicas de posicionamiento para visibilidad en buscadores.",
							],
						},
						{
							text: "Tecnologías usadas",
							sublist: [
								"Para el desarrollo Frontend de tus sitios utilizamos una variedad de tecnologías como son: HTML, CSS, JAVASCRIPT, REACT, NEXT JS, ANGULAR, BOOTSTRAP CSS Y TAILWIND CSS.",
								"Para el desarrollo Backend de tus webs utilizamos tecnologías de vanguardia como: Node js y PHP (Laravel)",
							],
						},
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<CardNestedLists
					titulo="Desarrollo de aplicaciones móviles Android/iOS"
					subtitulo="Para nuestros servicios de desarrollo web planteamos diferentes alternativas y soluciones para nuestros clientes garantizando flexibilidad, escalabilidad, calidad y total control de lo que se nos solicita ajustandonos a cada proyecto."
					list={[
						{
							text: "Apps nativas e híbridas",
							sublist: [
								"Desarrollo de aplicaciones específicas para iOS o Android, o multiplataforma con tecnologías modernas.",
							],
						},
						{
							text: "Publicación en tiendas",
							sublist: [
								"Subimos tu app a Google Play y/o App Store, cumpliendo con todos los requisitos técnicos y de diseño.",
							],
						},
						{
							text: "Integración con bases de datos y backends",
							sublist: [
								"Conectamos tu app con servidores seguros para almacenar datos, procesar pagos o integrar funcionalidades clave.",
							],
						},
						{
							text: "Tecnologías utilizadas",
							sublist: [
								"React Native, Java, Kotlin, Laravel, Firebase, SQLite.",
							],
						},
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<CardNestedLists
					titulo="Soluciones de software empresarial"
					subtitulo="Para nuestros servicios de desarrollo web planteamos diferentes alternativas y soluciones para nuestros clientes garantizando flexibilidad, escalabilidad, calidad y total control de lo que se nos solicita ajustandonos a cada proyecto."
					list={[
						{
							text: "Sistemas a medida según tu flujo de trabajo",
							sublist: [
								"Diseñamos software que se adapta a los procesos específicos de tu empresa, mejorando eficiencia y control.",
							],
						},
						{
							text: "Control de usuarios, reportes, paneles y estadísticas",
							sublist: [
								"Funcionalidades avanzadas como permisos por rol, paneles de datos y reportes exportables en PDF/Excel.",
							],
						},
						{
							text: "Interfaces accesibles y seguras",
							sublist: [
								"Aplicaciones responsivas, con buen contraste y enfoque UX, incluyendo cifrado de datos y respaldos.",
							],
						},
						{
							text: "Integraciones con CRMs o facturación electrónica",
							sublist: [
								"Conectamos tu sistema con herramientas como Facturama, Salesforce o Zoho según tus necesidades.",
							],
						},
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center w-100 p-xl-5 p-3 text-white text-center gradient-effect-y">
				<h2 className="fw-bold mb-4">Comparativa de paquetes y precios</h2>
				<p className="mb-5 fs-5">
					Paquetes creados para ajustarse a tu necesidad y presupuesto
				</p>

				<article className="row justify-content-center g-4">
					<div className="col-md-4">
						<div
							className="card bg-transparent h-100 text-white shadow rounded-4"
							style={{
								border: "2px solid #7b2cbf",
								boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
								boxSizing: "border-box",
							}}
						>
							<div className="card-body">
								<h3 className="card-title fw-semibold mb-3">🌐 Landing Web</h3>
								<p className="card-text fs-5">
									Desde <strong>$2,999 MXN</strong>
								</p>
								<ul className="list-unstyled text-start ps-3">
									<li>✔ Dominio y hosting incluido</li>
									<li>✔ Diseño responsivo</li>
									<li>✔ SEO básico</li>
									<li>✔ Hasta 5 secciones</li>
								</ul>
								<Link
									href="/saber-mas/web-dev"
									className="btn btn-outline-light mt-3"
									tabIndex={0}
									aria-label="Ver más sobre desarrollo web"
									title="Ver más sobre desarrollo web"
								>
									Ver más
								</Link>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div
							className="card bg-transparent h-100 text-white shadow rounded-4"
							style={{
								border: "2px solid #7b2cbf",
								boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
								boxSizing: "border-box",
							}}
						>
							<div className="card-body">
								<h3 className="card-title fw-semibold mb-3">📱 Apps Móviles</h3>
								<p className="card-text fs-5">
									Desde <strong>$18,999 MXN</strong>
								</p>
								<ul className="list-unstyled text-start ps-3">
									<li>✔ Android o iOS</li>
									<li>✔ Hasta 3 pantallas</li>
									<li>✔ Publicación en tienda</li>
									<li>✔ Diseño limpio y funcional</li>
								</ul>
								<Link
									href="/saber-mas/app-dev"
									className="btn btn-outline-light mt-3"
									tabIndex={0}
									aria-label="Ver más sobre desarrollo de aplicaciones"
									title="Ver más sobre desarrollo de aplicaciones"
								>
									Ver más
								</Link>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div
							className="card bg-transparent h-100 text-white shadow rounded-4"
							style={{
								border: "2px solid #7b2cbf",
								boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
								boxSizing: "border-box",
							}}
						>
							<div className="card-body">
								<h3 className="card-title fw-semibold mb-3">
									💻 Software Empresarial
								</h3>
								<p className="card-text fs-5">
									Desde <strong>$9,499 MXN</strong>
								</p>
								<ul className="list-unstyled text-start ps-3">
									<li>✔ 1 módulo funcional</li>
									<li>✔ Base de datos local</li>
									<li>✔ Manual de usuario</li>
									<li>✔ Instalación incluida</li>
								</ul>
								<Link
									href="/saber-mas/soft-dev"
									className="btn btn-outline-light mt-3"
									tabIndex={0}
									aria-label="Ver más sobre desarrollo de software empresarial"
									title="Ver más"
								>
									Ver más
								</Link>
							</div>
						</div>
					</div>
				</article>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center w-100 gap-3 p-xl-5 p-3 gradient-effect-x">
				<h2 className="display-5 text-center text-white">
					Optimización y Posicionamiento SEO en México
				</h2>
				<p className="fs-4 text-center text-white p-0">
					En JEG Dev Studios ofrecemos servicios de posicionamiento web SEO
					diseñados para que tu página aparezca en los primeros resultados de
					Google y otros buscadores. Nuestro objetivo es impulsar tu objetivo
					comercial, atraer más clientes y aumentar tu visibilidad digital con
					estrategias efectivas.
				</p>
				<CardNestedLists
					titulo="Nuestros Servicios de SEO"
					subtitulo="Trabajamos como una agencia de posicionamiento SEO en México que
					combina la experiencia técnica con estrategias de marketing digital
					adaptadas a cada negocio."
					list={[
						{
							text: "SEO Web",
							sublist: [
								"Optimización de páginas web para buscadores.",
								"Servicios de posicionamiento SEO para páginas web con auditoría técnica y mejora del rendimiento.",
								"Estrategias avanzadas de SEO y SEM para campañas de alto impacto.",
								"Estrategias avanzadas de SEO y SEM para campañas de alto impacto.",
								"Optimización para buscadores tradicionales e integración con IA generativa (SEO para la nueva era de la búsqueda).",
							],
						},
						{
							text: "SEO Local",
							sublist: [
								"Posiciona tu negocio en Google Maps y búsquedas locales.",
								"Estrategias GEO para aparecer cuando tus clientes te busquen cerca.",
								"Servicios de posicionamiento SEO local en México con enfoque en resultados medibles.",
							],
						},
						{
							text: "SEO Estratégico y Consultoría",
							sublist: [
								"Creación de estrategias personalizadas de marketing digital y posicionamiento SEO.",
								"Análisis de competencia con herramientas como SEMrush y Ahrefs.",
								"Reportes mensuales para medir el avance y ROI.",
							],
						},
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center w-100 gap-3 p-xl-5 p-3 gradient-effect-y">
				<CardSmallList
					titulo="¿Por qué elegir JEG Dev Studios como tu agencia SEO en México??"
					subtitulo=""
					list={[
						"Somos más que una agencia, somos una empresa de desarrollo y marketing digital que entiende tu negocio desde la base técnica.",
						"Contamos con expertos en SEO con experiencia en proyectos en México y Latinoamérica.",
						"Implementamos técnicas de optimización web, local y avanzada para IA.",
						"Nos adaptamos a tus necesidades: desde pequeñas empresas locales hasta grandes proyectos digitales",
					]}
					lastText="Si buscas la mejor agencia de SEO en México para tu empresa, en JEG Dev Studios encontrarás un aliado estratégico para alcanzar tus metas digitales."
				/>
				<h2 className="display-5 text-center text-white">
					Solicita tu Auditoría SEO Incluida en cualquier paquete de desarrollo
					web o por separado
				</h2>
				<p className="fs-4 text-white text-center mt-4">
					Antes de comenzar, realizamos una auditoría inicial de tu sitio web
					para identificar oportunidades de crecimiento o de mejora en
					posicionamiento SEO y estrategias de marketing digital.
				</p>
				<p className="fs-4 text-white text-center mt-4">
					Comienza hoy y descubre cómo nuestros servicios de posicionamiento SEO
					en México pueden ayudarte a crecer.
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center w-100 gap-3 p-xl-5 p-3 gradient-effect-x">
				<h2 className="display-5 text-center text-white">
					Servicios de Diseño Gráfico y Digital en México
				</h2>
				<p className="fs-4 text-center text-white p-0">
					Tu marca merece un diseño único: logotipos, branding, UX/UI, editorial
					y más.
				</p>
				<CardNestedLists
					titulo="En JEG Dev Studios ofrecemos servicios de diseño gráfico que ayudan a marcas, negocios y emprendedores a destacar en un mercado cada vez más competitivo."
					subtitulo="Nos especializamos en crear experiencias visuales memorables a través de:"
					list={[
						{
							text: "Logotipos y Branding",
							sublist: ["Identidad sólida y profesional."],
						},
						{
							text: "Diseño UX/UI para Web, Apps y Software",
							sublist: [
								"Interfaces modernas, funcionales y centradas en el usuario.",
							],
						},
						{
							text: "Diseño Editorial",
							sublist: ["Catálogos, revistas, manuales de identidad y más."],
						},
						{
							text: "Publicidad Digital",
							sublist: [
								"Menús, invitaciones y materiales promocionales creativos.",
							],
						},
						{
							text: "Edición Fotográfica y Contenido Visua",
							sublist: ["Para reforzar tu comunicación."],
						},
					]}
				/>
				<p className="fs-4 text-center text-white p-0">
					Somos una de las mejores agencias de diseño gráfico en México, con
					sede en CDMX, listos para convertir tus ideas en realidades visuales
					impactantes.
				</p>
				<p className="fs-4 text-center text-white p-0">
					Ya sea que busques un estudio de diseño gráfico para un proyecto
					puntual o una agencia que te acompañe a largo plazo, en JEG Dev
					Studios encontrarás un equipo creativo y estratégico.
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center w-100 gap-3 p-xl-5 p-3 gradient-effect-y">
				<h2 className="display-5 text-center text-white">
					Beneficios de elegir JEG Dev Studios
				</h2>
				<p className="fs-4 text-center text-white p-0">
					Servicio 100% mexicano, pensado para el mundo. Creamos sitios web,
					aplicaciones y software empresarial con calidad profesional para
					clientes en México y cualquier parte del mundo. Nos diferenciamos por
					nuestra tecnología innovadora, compromiso con la entrega puntual y
					atención personalizada en cada proyecto.
				</p>
				<ul className="d-flex flex-wrap justify-content-center align-items-center w-100 gap-2 p-0 m-0 list-unstyled">
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Soporte técnico, escalabilidad y personalización total
						</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Diseños profesionales alineados a tu identidad visual
						</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<h3 className="fs-2 m-0">
							Entrega rápida, con asesoría estratégica en cada fase
						</h3>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Optimización para buscadores (SEO) desde el inicio
						</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Procesos claros de desarrollo (Sprint + feedback continuo)
						</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<h3 className="fs-2 m-0">
							Tecnología moderna y escalable adaptada a tu negocio
						</h3>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Acompañamiento post-entrega: mantenimiento y soporte
						</p>
					</li>
					<li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
						<p className="fs-2 m-0">
							Soluciones a medida para web, apps y software empresarial
						</p>
					</li>
				</ul>
				<p className="fs-4 text-white text-center mt-4">
					¿Tienes dudas sobre cuál servicio es el ideal para ti? Contáctanos y
					te ayudamos a tomar la mejor decisión.
				</p>
			</section>
			<FAQ
				faqs={faqs}
				subtitle="Resuelve tus dudas sobre nuestros paquetes, tecnologías, tiempos de entrega y más."
			/>
			<CTA />
		</>
	);
}
