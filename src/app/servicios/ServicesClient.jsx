"use client";
import CardServices from "@/components/Cards/CardServices";
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
			"El primer paso es agendar una consulta gratuita. Analizamos tus necesidades, te enviamos una propuesta detallada y, si estás de acuerdo, comenzamos.",
	},
	{
		question: "¿Debo pagar todo de una vez?",
		answer:
			"No. Usualmente trabajamos con un pago inicial del 50% para comenzar y el 50% restante contra entrega o dividido en fases, según el proyecto.",
	},
	{
		question: "¿Trabajan con contratos y garantías?",
		answer:
			"Sí. Todos nuestros proyectos se formalizan con un contrato que especifica alcances y tiempos. Ofrecemos garantía sobre nuestro trabajo para tu total tranquilidad.",
	},
	{
		question: "¿Puedo contratar varios servicios juntos (web + SEO + diseño)?",
		answer:
			"¡Claro! De hecho, lo recomendamos. Crear una estrategia integral desde el inicio garantiza los mejores resultados y ofrecemos planes personalizados.",
	},
];

const services = [
	{
		text: "Soporte técnico, escalabilidad y personalización total",
	},
	{
		text: "Diseños profesionales alineados a tu identidad visual",
	},
	{
		text: "Optimización para buscadores (SEO) desde el inicio",
	},
	{
		text: "Procesos claros de desarrollo (Sprint + feedback continuo)",
	},
	{
		text: "Acompañamiento post-entrega: mantenimiento y soporte",
	},
];
export default function ServicesClient() {
	return (
		<>
			{/* Este componente solo renderiza el schema de FAQ aquí, no en otras páginas */}

			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-services" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-services" />
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Servicios.webp"
					alt="Nuestros servicios en JEG Dev Studios"
					width={2000}
					height={600}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 pb-xl-0 gap-3 gradient-effect-x">
				<h1 className="text-center text-white fw-bold mt-3">
					Agencia de Desarrollo Digital: Soluciones Web, SEO y Diseño
				</h1>
				<p className="lead text-white text-center">
					En JEG Dev Studios, funcionamos como tu socio tecnológico integral.
					Somos una <strong>agencia de desarrollo digital</strong> que unifica
					estrategia, código y creatividad. Ofrecemos{" "}
					<strong>servicios de desarrollo digital</strong> que van desde la
					creación de software a medida hasta el posicionamiento SEO y el diseño
					UX/UI.
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<h2 className="text-center text-white">Nuestras Áreas de Expertise</h2>
				<p className="lead text-white text-center">
					Nuestra metodología se basa en tres pilares fundamentales. Cada
					servicio está diseñado para funcionar en conjunto, creando una
					estrategia digital cohesiva y potente para tu negocio.
				</p>
				<article className="d-flex flex-column justify-content-center align-items-center w-100 p-0 m-0">
					<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
						<CardServices
							title="Desarrollo a Medida: Web, Apps y Software"
							description="Damos vida a tus ideas con tecnología de vanguardia. Desde sitios web que cautivan y desarrollo de aplicaciones móviles que conectan, hasta software empresarial que optimiza tus operaciones."
							url="/servicios/desarrollo"
							buttonLabel="Ver Servicios de Desarrollo"
							items={[
								"Sitios Web Profesionales y E-commerce",
								"Aplicaciones Móviles (iOS/Android)",
								"Software Empresarial a Medida",
							]}
						/>
						<CardServices
							title="Posicionamiento SEO Estratégico"
							description="Hacemos que tus clientes te encuentren. Aumentamos tu visibilidad en Google y en las nuevas respuestas de IA (GEO) con estrategias técnicas, de contenido y locales que atraen tráfico cualificado."
							url="/servicios/seo"
							buttonLabel="Explorar Estrategias SEO"
							items={[
								"Auditoría y Estrategia SEO",
								"SEO Web, Local y GEO",
								"Optimización On-Page y Técnica",
							]}
						/>
						<CardServices
							title="Diseño Gráfico y Digital (UX/UI)"
							description="Creamos identidades visuales memorables y experiencias de usuario que funcionan. Desde un logotipo que define tu marca hasta el <strong>diseño web</strong> e interfaces intuitivas para tus plataformas digitales."
							url="/servicios/diseno"
							buttonLabel="Descubrir Soluciones de Diseño"
							items={[
								"Branding y Diseño de Logotipos",
								"Diseño de Interfaces (UX/UI)",
								"Identidad Visual Corporativa",
							]}
						/>
					</ul>
				</article>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center w-100 gap-3 p-xl-5 p-3 gradient-effect-x">
				<h2 className="display-5 text-center text-white">
					Tu Socio Tecnológico 360° en Ciudad de México
				</h2>
				<p className="fs-4 text-center text-white p-0">
					Entendemos que buscar un <strong>proveedor de servicios</strong>{" "}
					digitales puede ser abrumador. Existen{" "}
					<strong>agencias digitales</strong>,{" "}
					<strong>agencias de marketing digital</strong> y fábricas de software.
					Nosotros integramos lo mejor de todas.
				</p>
				<p className="fs-4 text-center text-white p-0">
					Con <strong>años de experiencia</strong> en la industria, nuestro
					equipo en <strong>Ciudad de México</strong> no solo desarrolla;
					creamos estrategias. Combinamos el <strong>diseño web</strong> de alta
					calidad con el desarrollo de <strong>productos digitales</strong> y el{" "}
					<strong>desarrollo de aplicaciones móviles</strong>, asegurando que tu
					proyecto no solo se vea bien, sino que funcione y escale.
				</p>

				<h3 className="test-center text-white">
					Más Allá del Lanzamiento: Crecimiento Continuo
				</h3>
				<p className="fs-4 text-center text-white p-0">
					Nuestro trabajo no termina con la entrega. A diferencia de otras{" "}
					<strong>agencias digitales</strong>, creemos en el crecimiento a largo
					plazo. Integramos estrategias de <strong>inbound marketing</strong> y{" "}
					<strong>marketing digital</strong> para asegurar que tu sitio web{" "}
					<strong>posiciona orgánicamente</strong>.
				</p>
				<p className="fs-4 text-center text-white p-0">
					Gestionamos tus campañas en <strong>redes sociales</strong> y
					optimizamos tu contenido para que no solo atraigas visitantes, sino
					que los conviertas en clientes leales. Los <strong>servicios</strong>{" "}
					que <strong>ofrecen</strong> nuestros competidores son aislados;
					nosotros ofrecemos un ecosistema completo.
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center w-100 gap-3 p-xl-5 p-3 gradient-effect-y">
				<h2 className="display-5 text-center text-white">
					Beneficios de Elegir a JEG Dev Studios
				</h2>
				<ul className="d-flex flex-wrap justify-content-center align-items-center w-100 gap-2 p-0 m-0 list-unstyled">
					{services.map((service, index) => (
						<li key={index} className="card bg-transparent text-center text-white border border-white rounded-5 shadow-sm p-3">
							<p className="fs-2 m-0">
								{service.text}
							</p>
						</li>
					))}
				</ul>
			</section>
			<FAQ
				faqs={faqs}
				subtitle="Resuelve tus dudas sobre nuestros paquetes, tecnologías, tiempos de entrega y más."
			/>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
				<CTA
					title={"¿Listo para dar el siguiente paso digital?"}
					paragraph={
						"Es momento de convertir tu idea en una solución tecnológica escalable y atractiva. Agenda tu consulta gratuita o contáctanos directamente."
					}
					label={"Solicita tu Auditoría Gratuita"}
					link={"/contacto"}
				/>
			</section>
		</>
	);
}
