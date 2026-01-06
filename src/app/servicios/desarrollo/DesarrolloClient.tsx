"use client";
import Image from "next/image";
import StructuredData from "@/components/Seo/StructuredData";
import CardSmallList from "@/components/Cards/CardSmallList";
import CardServices from "@/components/Cards/CardServices";
import FAQ from "@/components/Seo/FAQ";
import CTA from "@/components/Cta/CTA";

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question:
			"¿Cuál es la diferencia entre desarrollo a medida y una plantilla?",
		answer:
			"Una plantilla te obliga a adaptar tus procesos a una estructura rígida. El desarrollo de software a medida es lo contrario: nosotros creamos software personalizado que se adapta perfectamente a tu flujo de trabajo, garantizando eficiencia y escalabilidad.",
	},
	{
		question: "¿Qué tecnologías se utilizan para el desarrollo?",
		answer:
			"Usamos las mejores tecnologías para cada proyecto. En frontend, React y Next.js; en backend, Node.js y PHP (Laravel). Para móvil, nuestro equipo especializado trabaja con React Native, Java y Kotlin.",
	},
	{
		question: "¿Mi proyecto podrá crecer en el futuro si lo necesito?",
		answer:
			"Sí. La escalabilidad es un pilar de nuestros procesos de desarrollo. Construimos con arquitectura modular y código limpio, permitiendo añadir nuevas funciones o soportar más usuarios en el futuro sin reconstruir todo desde cero.",
	},
	{
		question:
			"¿Qué necesito de mi parte para comenzar un proyecto de desarrollo?",
		answer:
			"Solo necesitamos entender tus necesidades específicas. El primer paso es una consulta gratuita donde escuchamos tu idea, tus objetivos y los problemas que buscas resolver. Con eso, definimos el alcance del proyecto.",
	},
];

export default function DesarrolloClient() {
	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-development" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-development" />
			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Development.webp"
					alt="Nuestros servicios en JEG Dev Studios"
					width={2000}
					height={600}
					className="w-full h-auto"
					priority
				/>
			</section>

			<section className="flex flex-col justify-center items-center text-center text-white w-full p-3 xl:p-20 pb-0 xl:pb-0 gap-3 gradient-effect-x">
				<h1 className="text-4xl md:text-5xl font-bold text-center text-white mt-3">
					Desarrollo de Software a Medida: Tu Fábrica de Software
				</h1>
				<p className="text-lg md:text-xl text-white text-center max-w-4xl">
					En JEG Dev Studios, funcionamos como tu socio tecnológico personal. No
					solo escribimos código; creamos soluciones. Como{" "}
					<strong>agencia de desarrollo de software</strong>, transformamos tus
					ideas en <strong>productos de software</strong> digitales que son
					robustos, escalables y seguros. Nuestro enfoque se centra en entender
					tus desafíos únicos para construir la solución perfecta.
				</p>

				<h2 className="text-3xl md:text-4xl font-bold text-center text-white">
					Nuestras Especialidades en Desarrollo
				</h2>
				<p className="text-lg md:text-xl text-white text-center max-w-4xl">
					Cada proyecto digital tiene un objetivo diferente. Por eso, hemos
					perfeccionado nuestra experiencia en tres áreas clave del{" "}
					<strong>desarrollo de software a medida</strong>. Elige la solución
					que mejor se adapta a tu visión.
				</p>
			</section>

			<section className="flex flex-col justify-center items-center text-center text-white w-full p-3 xl:p-20 gap-3 gradient-effect-y">
				<article className="flex flex-col justify-center items-center w-full p-0 m-0">
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch w-full h-full gap-5 p-0 m-0">
						<CardServices
							title="Desarrollo Web Profesional"
							description="Creamos tu presencia en internet. Desde páginas corporativas y blogs hasta complejas tiendas en línea."
							url="/servicios/desarrollo/web"
							buttonLabel="Conocer más sobre Desarrollo Web"
							items={[
								"Sitios Web Corporativos y Blogs",
								"Tiendas en Línea (E-commerce)",
								"Optimización SEO desde el Código",
								"Diseño Responsivo y Rápido",
							]}
						/>
						<CardServices
							title="Desarrollo de Aplicaciones Móviles"
							description="Conecta con tus usuarios dondequiera que estén. Desarrollamos aplicaciones nativas e híbridas para iOS y Android."
							url="/servicios/desarrollo/apps"
							buttonLabel="Explorar Desarrollo de Apps"
							items={[
								"Aplicaciones Nativas (iOS/Android)",
								"Desarrollo Multiplataforma Híbrido",
								"Interfaces de Usuario Intuitivas (UX/UI)",
								"Integración con Backend y API",
							]}
						/>
						<CardServices
							title="Desarrollo de Software Empresarial"
							description="Optimiza y automatiza tus operaciones. Creamos sistemas a medida (CRMs, ERPs, etc.) que se adaptan a tu flujo de trabajo."
							url="/servicios/desarrollo/software-empresarial"
							buttonLabel="Ver Soluciones de Software"
							items={[
								"Sistemas a Medida (CRM, ERP)",
								"Automatización de Procesos Internos",
								"Paneles de Control y Reportería",
								"Integración con Sistemas Existentes",
							]}
						/>
					</ul>
				</article>
			</section>

			{/* --- NUEVA SECCIÓN DE CONTENIDO INFORMATIVO (SOLUCIONA SEMÁNTICA Y LONGITUD) --- */}
			<section className="text-white py-12 md:py-20 gradient-effect-x">
				<div className="container mx-auto px-4" style={{ maxWidth: "1000px" }}>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
						¿Por Qué Elegir una Solución a Medida?
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="mb-4">
							<h3 className="text-xl font-semibold mb-2">
								Adaptación Total a tu Modelo de Negocio
							</h3>
							<p className="text-gray-300">
								Una <strong>solución genérica</strong> te obliga a cambiar cómo
								trabajas. Una <strong>solución personalizada</strong>
								está diseñada específicamente para{" "}
								<strong>satisfacer las necesidades</strong> únicas de tu
								empresa. Entendemos tu <strong>modelo de negocio</strong> y
								creamos herramientas que lo potencian, no que lo limitan.
							</p>
						</div>
						<div className="mb-4">
							<h3 className="text-xl font-semibold mb-2">Ventaja Competitiva Real</h3>
							<p className="text-gray-300">
								Usar el mismo software que tu competencia no te diferencia. Al
								invertir en <strong>proyectos de software</strong> propios,
								creas una propiedad intelectual única. Esta{" "}
								<strong>ventaja competitiva</strong> te permite innovar más
								rápido y ofrecer servicios que otros no pueden.
							</p>
						</div>
						<div className="mb-4">
							<h3 className="text-xl font-semibold mb-2">
								Inversión Inteligente a Largo Plazo
							</h3>
							<p className="text-gray-300">
								Aunque la <strong>inversión inicial</strong> puede ser mayor que
								una licencia mensual, el <strong>software personalizado</strong>
								elimina costos recurrentes de licencias y problemas de
								escalabilidad. Es un activo que crece con tu empresa.
							</p>
						</div>
						<div className="mb-4">
							<h3 className="text-xl font-semibold mb-2">Solución a Medida vs. Paquetes</h3>
							<p className="text-gray-300">
								Ya sea que necesites una integración compleja o una interfaz
								específica, una <strong>solución a medida</strong>
								garantiza que cada función tenga un propósito. Evitas pagar por
								características que no usas y obtienes exactamente lo que
								necesitas para operar eficientemente.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* --- FIN NUEVA SECCIÓN --- */}
			<section className="flex flex-col justify-center items-center text-center text-white w-full p-3 xl:p-20 gap-3 gradient-effect-y">
				<CardSmallList
					titulo="Nuestro Proceso: Calidad, Agilidad y Transparencia"
					subtitulo="El éxito de los proyectos de desarrollo de software depende de procesos de desarrollo claros. Nuestro método ágil (Scrum) se enfoca en la transparencia y la entrega de valor constante, cubriendo todo el ciclo de vida del desarrollo."
					list={[
						"1. Consultoría y Estrategia: Todo comienza por entender tus necesidades específicas. Nos reunimos contigo para analizar tus objetivos y definir el alcance del proyecto. Nuestro equipo especializado te asesora sobre la mejor solución tecnológica.",
						"2. Diseño y Arquitectura (UX/UI): Diseñamos el flujo de usuario y las interfaces (UX/UI) para crear productos de software intuitivos. Definimos la arquitectura tecnológica (frontend, backend, bases de datos) asegurando que la solución sea escalable y segura.",
						'3. Desarrollo Ágil (Sprints): Aquí es donde nuestra fábrica de software cobra vida. Dividimos el proyecto en "Sprints" (ciclos de 1-2 semanas) donde nuestro equipo especializado desarrolla, prueba y te presenta módulos funcionales.',
						"4. Pruebas, Despliegue y Soporte: Cubrimos todo el ciclo de vida del desarrollo. Realizamos pruebas de calidad (QA), desplegamos la solución en tu servidor y te acompañamos con soporte para asegurar un lanzamiento exitoso.",
					]}
					lastText=""
				/>
			</section>

			<FAQ faqs={faqs}/>

			<section className="flex flex-col justify-center items-center text-center text-white w-full p-3 xl:p-20 gap-3">
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
