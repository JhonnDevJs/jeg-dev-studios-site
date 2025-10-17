"use client";
import Image from "next/image";
import StructuredData from "@/components/Seo/StructuredData";
import CardNestedLists from "@/components/Cards/CardNestedLists";
import CardServices from "@/components/Cards/CardServices";
import FAQ from "@/components/Seo/FAQ";
import CTA from "@/components/Cta/CTA";

const faqs = [
	{
		question: "¿Cuál es la diferencia entre desarrollo a medida y una plantilla?",
		answer:
			"Una plantilla te obliga a adaptar tus procesos a una estructura rígida y limitada. El desarrollo a medida es lo contrario: creamos una solución de software que se adapta perfectamente a tu flujo de trabajo, garantizando máxima eficiencia, seguridad y escalabilidad a largo plazo.",
	},
	{
		question: "¿Qué tecnologías se utilizan para el desarrollo?",
		answer:
			"Seleccionamos las mejores tecnologías según las necesidades de tu proyecto. Para el frontend usamos frameworks modernos como React y Next.js , y para el backend trabajamos con plataformas robustas como Node.js y PHP (Laravel) . En el móvil, nos especializamos en React Native, Java y Kotlin .",
	},
	{
		question: "¿Mi proyecto podrá crecer en el futuro si lo necesito?",
		answer:
			"Sí, absolutamente. La escalabilidad es un pilar de nuestro proceso de desarrollo. Construimos todas nuestras soluciones con una arquitectura modular y código limpio, lo que permite agregar nuevas funcionalidades o soportar un mayor número de usuarios en el futuro sin necesidad de reconstruir todo desde cero.",
	},
	{
		question: "¿Qué necesito de mi parte para comenzar un proyecto de desarrollo?",
		answer:
			"Para comenzar, solo necesitamos tener una conversación contigo. El primer paso es una consulta gratuita donde escuchamos tu idea, tus objetivos y los problemas que buscas resolver. Con esa información, definimos un alcance y te presentamos una propuesta estratégica sin compromiso.",
	},
];

export default function DesarrolloClient() {
	return (
		<>
			<StructuredData data={faqs} />
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
					Desarrollo de Software a Medida: Del Concepto al Código
				</h1>
				<p className="lead text-white text-center">
					En JEG Dev Studios, no solo escribimos código; creamos soluciones.
					Como agencia de desarrollo de software , transformamos tus ideas en
					herramientas digitales robustas, escalables y seguras. Nuestro enfoque
					se centra en entender tus desafíos únicos para construir la solución
					perfecta, ya sea un sitio web, una aplicación móvil o un sistema
					empresarial completo.
				</p>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<h2 className="text-center text-white">Nuestras Especialidades en Desarrollo</h2>
				<p className="lead text-white text-center">
					Cada proyecto digital tiene un objetivo diferente. Por eso, hemos perfeccionado nuestra experiencia en tres áreas clave del desarrollo de software a medida . Elige la solución que mejor se adapta a tu visión.
				</p>
				<article className="d-flex flex-column justify-content-center align-items-center w-100 p-0 m-0">
					<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
						<CardServices
							title="Desarrollo Web Profesional"
							description="Creamos tu presencia en internet. Desde páginas corporativas y blogs hasta complejas tiendas en línea, construimos sitios web rápidos, optimizados para SEO y diseñados para convertir visitantes en clientes."
							url="/servicios/desarrollo/web"
							buttonLabel="Conocer más sobre Desarrollo Web"
							items={[
								"Sitios Web Corporativos y Blogs",
								"Tiendas en Línea (Comercio electrónico)",
								"Optimización SEO desde el Código",
								"Diseño Responsivo y Rápido",
							]}
						/>
						<CardServices
							title="Desarrollo de Aplicaciones Móviles"
							description="Conecta con tus usuarios dondequiera que estén. Desarrollamos aplicaciones nativas e híbridas para iOS y Android, enfocadas en una experiencia de usuario impecable y un rendimiento excepcional."
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
							description="Optimiza y automatiza tus operaciones. Creamos sistemas a medida (CRMs, ERPs, etc.) que se adaptan a tu flujo de trabajo, mejorando la eficiencia, la toma de decisiones y el control de tu negocio."
							url="/servicios/desarrollo/software-empresarial"
							buttonLabel="Ver Soluciones de Software"
							items={[
								"Sistemas de medición (CRM, ERP)",
								"Automatización de Procesos Internos",
								"Paneles de Control y Reportería",
								"Integración con Sistemas Existentes",
							]}
						/>
					</ul>
				</article>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<CardNestedLists
					titulo="Nuestro Proceso: Calidad, Agilidad y Transparencia"
					subtitulo="Creemos en un desarrollo inteligente. Nuestro proceso se basa en la metodología ágil (Sprints), lo que te permite ver avances funcionales cada dos semanas. Escribimos código limpio, aplicamos prácticas de seguridad (DevSecOps) y construimos arquitecturas escalables para que tu inversión tecnológica crezca contigo."
					list={[
						{
							text: "Beneficios Clave:",
							sublist: [
								"Código 100% Personalizado: Sin plantillas ni limitaciones.",
								"Arquitectura Escalable: Preparada para el crecimiento futuro.",
								"Propiedad Intelectual: El código fuente es tuyo.",
								"Seguridad Integrada: Protegemos tus datos desde el día uno.",
							],
						},
					]}
				/>
			</section>
			<FAQ
				faqs={faqs}
				subtitle="Resuelve tus dudas sobre nuestros servicios de desarrollo digital"
			/>
			<CTA />
		</>
	);
}
