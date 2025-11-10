"use client";
import { useMemo } from "react";
import Image from "next/image";
import StructuredData from "@/components/Seo/StructuredData";
import CardNestedLists from "@/components/Cards/CardNestedLists";
import CardServices from "@/components/Cards/CardServices";
import CTA from "@/components/Cta/CTA";
import FAQ from "@/components/Seo/FAQ";

export default function DisenoClient() {
	const services = useMemo(
		() => [
			{
				id: "servicio-branding-diseno-logotipos",
				imageSrc: "/img-SEO/og-background-serv-seo.webp",
				title: "Branding y Diseño de Logotipos",
				description:
					"Construimos la base de tu marca. Creamos logotipos y sistemas de identidad visual completos que comunican tus valores, te diferencian de la competencia y generan reconocimiento.",
				price: 1000,
				currency: "MXN",
				url: "/contacto",
				buttonLabel: "Ver Servicios de Branding",
				items: [
					"Diseño de Logotipos Profesionales",
					"Creación de Manual de Identidad",
					"Estrategia y Consultoría de Branding",
					"Diseño de Papelería Corporativa",
				],
			},
			{
				id: "servicio-diseno-ux-ui",
				imageSrc: "/img-SEO/og-background-serv-seo.webp",
				title: "Diseño de Experiencia de Usuario (UX/UI)",
				description:
					"Diseñamos plataformas digitales centradas en el usuario. Creamos interfaces intuitivas y atractivas para sitios web, aplicaciones móviles y software, garantizando una navegación fluida que guía al usuario hacia la conversión.",
				price: 1000,
				currency: "MXN",
				url: "/contacto",
				buttonLabel: "Explorar Diseño UX/UI",
				items: [
					"Diseño UX/UI para Sitios Web",
					"Diseño UX/UI para Apps Móviles",
					"Investigación y Pruebas de Usuario",
					"Creación de Prototipos y Wireframes",
				],
			},
			{
				id: "servicio-diseno-editorial-publicitario",
				imageSrc: "/img-SEO/og-background-serv-seo.webp",
				title: "Diseño Editorial y Publicitario",
				description:
					"Llevamos tu marca al formato físico y digital. Diseñamos desde catálogos y revistas hasta material publicitario para redes sociales, asegurando una comunicación visual coherente y profesional en todos tus canales.",
				price: 1000,
				currency: "MXN",
				url: "/contacto",
				buttonLabel: "Ver Soluciones Editoriales",
				items: [
					"Diseño de Catálogos y Revistas",
					"Material para Publicidad Digital",
					"Edición Fotográfica Profesional",
					"Diseño de Menús e Invitaciones",
				],
			},
		],
		[]
	);

	const disenoServiceInfo = {
		name: "Servicios de Diseño Gráfico y Digital en México",
		serviceType: "Servicios de Posicionamiento SEO Web y GEO",
		description:
			"Somos una agencia de diseño gráfico en México. Creamos logotipos, branding y experiencias de usuario (UX/UI) que conectan tu marca con tus clientes.!",
		image: "/img-SEO/og-background-serv-diseno.webp",
		ratingValue: "4.9", // <-- NUEVO
		reviewCount: "17",
	};

	const faqs = [
		// --- Actuales ---
		{
			question: "¿Qué necesito para empezar un proyecto de diseño de logotipo?",
			answer:
				"Solo necesitamos conocer tu idea de negocio, tus valores y, si tienes, algunos ejemplos de marcas que te gusten. Con eso, nuestro equipo puede empezar a trabajar en las primeras propuestas creativas.",
		},
		{
			question: "¿Me entregan los archivos editables de los diseños?",
			answer:
				"Si. Al finalizar cada proyecto de diseño, te entregamos un paquete completo con los archivos en formatos vectoriales (AI, SVG), de imagen (PNG, JPG) y, según el caso, el manual de identidad para su correcta aplicación.",
		},
		{
			question:
				"¿Puedo contratar solo el diseño UX/UI si ya tengo el desarrollo?",
			answer:
				"Ofrecemos nuestros servicios de diseño UX/UI de forma independiente. Podemos crear todas las interfaces y prototipos para que tu equipo de desarrollo pueda implementarlos.",
		},
		{
			question: "¿Cuál es la diferencia entre branding y solo un logotipo?",
			answer:
				"Un logotipo es la cara de tu marca. El branding es la personalidad completa: incluye el logotipo, los colores, las tipografías y la voz de tu marca, todo trabajando en conjunto para crear una identidad sólida y coherente.",
		},
	];

	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-design" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-design" />
			<StructuredData
				data={services}
				type="Service"
				idPage="service-dev-web"
				serviceInfo={disenoServiceInfo}
			/>
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Diseno.webp"
					alt="Nuestros servicios en JEG Dev Studios"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 pb-xl-0 gap-3 gradient-effect-x">
				<h1 className="text-center text-white fw-bold mt-3">
					Diseño Gráfico y Digital que Conecta y Convierte
				</h1>
				<p className="lead text-white text-center">
					En JEG Dev Studios, creemos que un gran diseño es más que una cara
					bonita; es una herramienta estratégica. Como agencia de diseño gráfico
					en México , fusionamos creatividad y funcionalidad para construir
					marcas memorables y experiencias de usuario que funcionen. Damos vida
					a tu identidad visual y nos aseguramos de que cada interacción con tu
					cliente sea impactante.
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<h2 className="text-center text-white">
					Nuestros Servicios de Diseño Gráfico y Digital
				</h2>
				<p className="lead text-white text-center">
					Desde la creación de un logotipo que define tu esencia hasta el diseño
					de interfaces que guían a tus usuarios, nuestra área de diseño cubre
					todo el espectro de la comunicación visual. Explora nuestras
					especialidades.
				</p>
				<article className="d-flex flex-column justify-content-center align-items-center w-100 p-0 m-0">
					<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
						{services.map((service, index) => (
							<CardServices
								key={index}
								title={service.title}
								description={service.description}
								url={service.url}
								buttonLabel={service.buttonLabel}
								items={service.items}
							/>
						))}
					</ul>
				</article>
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
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<CardNestedLists
					titulo="Nuestro Proceso Creativo: Estrategia, Diseño y Resultado"
					subtitulo="Nuestro proceso de diseño está pensado para entregar resultados, no solo archivos. Comenzamos con una fase de investigación para entender a fondo tu marca y tu audiencia. Luego, pasamos a la conceptualización y el diseño, trabajando contigo a través de revisión para asegurar que el resultado final sea perfecto. Finalmente, te entregamos todos los archivos editables y guías de uso para que tengas control total sobre tu nueva identidad visual."
					list={[
						{
							text: "1. Investigación y Estrategia:",
							sublist: [
								"Primero, nos sumergimos en tu marca, tu mercado y tu audiencia. Analizamos a fondo tus objetivos para definir una dirección creativa sólida y un plan de acción claro antes de empezar a diseñar.",
							],
						},
						{
							text: "2. Diseño y Colaboración:",
							sublist: [
								"Creamos las propuestas visuales (logotipos, interfaces, etc.) y trabajamos de la mano contigo a través de revisión. Tu feedback es clave para refinar cada detalle hasta que el resultado sea perfecto y cumpla con tus expectativas.",
							],
						},
						{
							text: "3. Entrega y Empoderamiento:",
							sublist: [
								"Finalmente, te entregamos un paquete completo con todos los archivos editables (AI, SVG, PNG) y las guías de uso necesarias. Te damos todo lo que necesitas para que tengas control total sobre tu nueva identidad visual.",
							],
						},
					]}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
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
				subtitle="Resuelve tus dudas sobre nuestros servicios de Diseño Gráfico y digital"
			/>
		</>
	);
}
