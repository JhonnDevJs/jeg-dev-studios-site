"use client";
import Link from "next/link";
import CTA from "@/components/Cta/CTA";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import Script from "next/script";
import Image from "next/image";
import "./AboutClient.css";

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question: "¿Qué significa 'JEG: Jumpstart Every Goal'?",
		answer:
			"Es nuestra filosofía. Significa 'Impulsa Cada Objetivo'. No solo construimos software, sino que actuamos como el catalizador que impulsa las metas de nuestros clientes, convirtiendo sus ideas en realidades digitales funcionales.",
	},
	{
		question: "¿En qué se especializa el equipo fundador?",
		answer:
			"Nuestro equipo combina experticia en áreas clave: desarrollo Full-Stack y SEO (Jhonatan), diseño de experiencias de usuario UX/UI (Fernanda), desarrollo Backend robusto (Leonardo) y desarrollo Frontend enfocado en rendimiento (Ricardo). Esta diversidad nos permite ofrecer soluciones integrales.",
	},
	{
		question: "¿Dónde se encuentran ubicados?",
		answer:
			"Nuestra sede principal se encuentra en la Ciudad de México (CDMX), pero nuestro modelo de trabajo nos permite colaborar con clientes de todo México y cualquier parte del mundo, adaptándonos a diferentes zonas horarias y necesidades.",
	},
];

export default function AboutClient() {
	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-about-us" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-about" />
			<Script
				id="structured-data-person"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Jhonatan Espinal",
						url: "https://www.jegdevstudios.com/sobre-nosotros",
						image:
							"https://jhoneg-17.github.io/JhonDev/src/assets/img/fotoperfil/foto-jhonatan-espinal.webp",
						jobTitle: "CEO Fundador y Desarrollador Full-Stack",
						worksFor: {
							"@type": "Organization",
							name: "JEG Dev Studios",
						},
						sameAs: [
							"https://www.linkedin.com/in/jhoneg/",
							"https://jhoneg-17.github.io/JhonDev/",
						],
					}),
				}}
			/>
			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Nosotros.webp"
					alt="Sobre Nosotros - JEG Dev Studios"
					width={2000}
					height={600}
					className="w-full h-auto"
				/>
			</section>
			<section className="flex flex-col justify-center items-center w-full p-3 xl:p-20 gradient-effect-y text-center">
				<h1 className="text-4xl md:text-5xl font-bold text-white">Acerca de JEG Dev Studios</h1>
				<p className="text-lg md:text-xl text-white mt-4 max-w-3xl">
					Transformando ideas en soluciones digitales innovadoras y memorables.
				</p>
			</section>

			<section className="flex flex-col w-full p-3 xl:p-20 gradient-effect-x">
				<div className="max-w-4xl mx-auto w-full space-y-12">
					<article>
						<h2 className="text-3xl font-bold text-white mb-4">Nuestra Historia</h2>
						<p className="text-lg text-gray-300 leading-relaxed">
							JEG Dev Studios fue fundada en mayo de 2024 por Jhonatan Espinal
							Garcia, quien más adelante se unió con Jose Leonardo González,
							Fernanda Briseño y Ricardo Ubaldo González como cofundadores.
							Nuestro objetivo es transformar ideas en experiencias digitales
							inolvidables a través de soluciones tecnológicas personalizadas. Nos
							encontramos en una etapa de crecimiento continuo, con el firme
							propósito de convertirnos en un referente en el desarrollo web,
							aplicaciones móviles y software empresarial.
						</p>
					</article>

					{/* --- AÑADE ESTE BLOQUE PARA MOSTRAR LA CALIFICACIÓN --- */}
					<article className="hidden flex-col w-full p-0 m-0 my-4 text-center">
						<h2 className="text-3xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h2>
						<div className="text-white text-2xl mt-2">
							<span style={{ color: "#ffc107" }}>★★★★☆</span> 4.9/5
						</div>
						<p className="text-gray-400">Basado en 25 reseñas de clientes.</p>
					</article>
					{/* --- FIN DEL BLOQUE --- */}

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">Misión y Visión</h2>
						<p className="text-lg text-gray-300 leading-relaxed">
							<strong>Misión:</strong> Crear soluciones digitales que superen las
							expectativas de nuestros clientes mediante innovación, calidad y un
							enfoque centrado en la experiencia de usuario.
						</p>
						<p className="text-lg text-gray-300 leading-relaxed mt-2">
							<strong>Visión:</strong> Ser líderes en desarrollo digital a medida,
							ayudando a marcas y empresas a destacar en un mundo cada vez más
							conectado.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">Nuestra Ideología</h2>
						<p className="text-lg text-gray-300 leading-relaxed">
							<strong>JEG:</strong> Jumpstart Every Goal - Impulsa cada objetivo
						</p>
						<p className="text-lg text-gray-300 leading-relaxed mt-2">
							Nuestro lema define nuestra esencia: trabajamos para activar e
							impulsar cada meta de nuestros clientes, utilizando la creatividad y
							tecnología de vanguardia. Desde herramientas empresariales hasta
							soluciones móviles personalizadas, convertimos ideas en realidades
							digitales.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">Nuestros Valores</h2>
						<ul className="list-disc pl-6 mt-4 space-y-2 text-lg text-gray-300">
							<li>
								<strong>Innovación:</strong> Nos mantenemos a la vanguardia
								tecnológica para ofrecer soluciones frescas, efectivas y
								sostenibles.
							</li>
							<li>
								<strong>Calidad:</strong> Garantizamos un alto estándar en cada
								entrega, cuidando los detalles técnicos y visuales.
							</li>
							<li>
								<strong>Compromiso:</strong> Cumplimos con lo prometido,
								trabajando de la mano con nuestros clientes en cada etapa del
								desarrollo.
							</li>
							<li>
								<strong>Creatividad:</strong> Creamos soluciones únicas,
								personalizadas y funcionales que generan impacto.
							</li>
						</ul>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">Nuestro Equipo</h2>
						<p className="text-lg text-gray-300 leading-relaxed">
							En JEG Dev Studios contamos con un equipo multidisciplinario de
							expertos en desarrollo y diseño digital. Nuestra diversidad de
							talentos nos permite abordar cada proyecto desde diferentes
							perspectivas y lograr resultados sobresalientes.
						</p>
						<p className="text-lg text-gray-300 leading-relaxed mt-4">
							<strong>Jhonatan Espinal Garcia</strong> – Fundador, CEO y
							Desarrollador
							<br />
							Dirige el estudio con visión estratégica y pasión por la innovación
							digital.
						</p>
						<p className="text-lg text-gray-300 leading-relaxed mt-2">
							<strong>Jose Leonardo González</strong> – Cofundador y Desarrollador
							Backend
							<br />
							Responsable de arquitecturas sólidas y eficientes.
						</p>
						<p className="text-lg text-gray-300 leading-relaxed mt-2">
							<strong>Fernanda Briseño</strong> – Cofundadora y Diseñadora UX/UI
							<br />
							Líder en la creación de interfaces visuales atractivas y usables.
						</p>
						<p className="text-lg text-gray-300 leading-relaxed mt-2">
							<strong>Ricardo Ubaldo González</strong> – Cofundador y
							Desarrollador Frontend
							<br />
							Especialista en desarrollo de interfaces modernas, SEO y rendimiento
							web.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">Nuestros Servicios</h2>
						<ul className="list-disc pl-6 mt-4 space-y-2 text-lg text-gray-300">
							<li>
								<strong>Desarrollo Web:</strong> Creación de sitios web
								responsivos, seguros y optimizados para motores de búsqueda.
							</li>
							<li>
								<strong>Aplicaciones de Escritorio:</strong> Soluciones a medida
								para automatizar procesos empresariales y mejorar la
								productividad.
							</li>
							<li>
								<strong>Aplicaciones Móviles:</strong> Apps funcionales y
								atractivas para Android e iOS, diseñadas para usuarios exigentes.
							</li>
							<li>
								<strong>Software Empresarial a Medida:</strong> Desarrollo de CRM,
								sistemas de inventario, herramientas de gestión de personal y
								soluciones personalizadas.
							</li>
						</ul>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">Contáctanos</h2>
						<p className="text-lg text-gray-300 leading-relaxed">
							¿Estás listo para digitalizar tu negocio o lanzar tu proyecto con
							éxito? Hablemos y encuentra la solución ideal con nosotros.
						</p>
						<div className="flex justify-start items-center gap-4 mt-4">
							<Link
								href="mailto:contacto@jegdevstudios.com"
								className="text-5xl text-center text-white no-underline"
								tabIndex={0}
								aria-label="Envíar un mensaje por correo electrónico a contacto@jegdevstudios.com"
								title="Envíar un mensaje por correo electrónico a contacto@jegdevstudios.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="icon-gmail" aria-hidden="true"></span>
							</Link>
							<Link
								href="https://wa.me/5215512197135"
								className="text-5xl text-center text-white no-underline"
								tabIndex={0}
								aria-label="Envíar un mensaje por WhatsApp +52 55-1219-7135"
								title="Envíar un mensaje por WhatsApp +52 55-1219-7135"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="icon-whatsapp" aria-hidden="true"></span>
							</Link>
						</div>
						<p className="text-lg text-gray-300 leading-relaxed mt-4">
							Síguenos en nuestras redes sociales y conoce nuestros últimos
							trabajos, ideas y lanzamientos.
						</p>
					</article>
				</div>
			</section>
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
				subtitle="Conoce más sobre nuestra filosofía y equipo."
			/>
		</>
	);
}
