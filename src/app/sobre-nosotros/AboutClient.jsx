"use client";
import Link from "next/link";
import CTA from "@/components/CTA";
import Image from "next/image";
import "./AboutClient.css";

export default function AboutClient() {
	return (
		<>
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/fondos/Nosotros.webp"
					alt="Sobre Nosotros - JEG Dev Studios"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center w-100 p-xl-5 p-3 gradient-effect-y">
				<h2 className="h1 text-white text-center">Sobre Nosotros</h2>
				<p className="text-white text-center">
					Transformamos ideas en soluciones digitales innovadoras y memorables
				</p>
			</section>

			<section className="d-flex flex-column w-100 p-xl-5 p-3 gradient-effect-x">
				<article className="d-flex flex-column w-100 p-0 m-0">
					<h2 className="text-white">Nuestra Historia</h2>
					<p className="text-white">
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
				<article className="d-none flex-column w-100 p-0 m-0 my-4 text-center">
					<h2 className="text-white">Lo que dicen nuestros clientes</h2>
					<div className="text-white fs-4 mt-2">
						<span style={{ color: "#ffc107" }}>★★★★☆</span> 4.9/5
					</div>
					<p className="text-white-50">Basado en 25 reseñas de clientes.</p>
				</article>
				{/* --- FIN DEL BLOQUE --- */}

				<article className="d-flex flex-column w-100 p-0 m-0">
					<h2 className="text-white">Misión y Visión</h2>
					<p className="text-white">
						<strong>Misión:</strong> Crear soluciones digitales que superen las
						expectativas de nuestros clientes mediante innovación, calidad y un
						enfoque centrado en la experiencia de usuario.
					</p>
					<p className="text-white">
						<strong>Visión:</strong> Ser líderes en desarrollo digital a medida,
						ayudando a marcas y empresas a destacar en un mundo cada vez más
						conectado.
					</p>
				</article>

				<article className="d-flex flex-column w-100 p-0 m-0">
					<h2 className="text-white">Nuestra Ideología</h2>
					<p className="text-white">
						<strong>JEG:</strong> Jumpstart Every Goal - Impulsa cada objetivo
					</p>
					<p className="text-white">
						Nuestro lema define nuestra esencia: trabajamos para activar e
						impulsar cada meta de nuestros clientes, utilizando la creatividad y
						tecnología de vanguardia. Desde herramientas empresariales hasta
						soluciones móviles personalizadas, convertimos ideas en realidades
						digitales.
					</p>
				</article>

				<article className="d-flex flex-column w-100 p-0 m-0">
					<h2 className="text-white">Nuestros Valores</h2>
					<ul>
						<li className="text-white">
							<strong>Innovación:</strong> Nos mantenemos a la vanguardia
							tecnológica para ofrecer soluciones frescas, efectivas y
							sostenibles.
						</li>
						<li className="text-white">
							<strong>Calidad:</strong> Garantizamos un alto estándar en cada
							entrega, cuidando los detalles técnicos y visuales.
						</li>
						<li className="text-white">
							<strong>Compromiso:</strong> Cumplimos con lo prometido,
							trabajando de la mano con nuestros clientes en cada etapa del
							desarrollo.
						</li>
						<li className="text-white">
							<strong>Creatividad:</strong> Creamos soluciones únicas,
							personalizadas y funcionales que generan impacto.
						</li>
					</ul>
				</article>

				<article className="d-flex flex-column w-100 p-0 m-0">
					<h2 className="text-white">Nuestro Equipo</h2>
					<p className="text-white">
						En JEG Dev Studios contamos con un equipo multidisciplinario de
						expertos en desarrollo y diseño digital. Nuestra diversidad de
						talentos nos permite abordar cada proyecto desde diferentes
						perspectivas y lograr resultados sobresalientes.
					</p>
					<p className="text-white">
						<strong>Jhonatan Espinal Garcia</strong> – Fundador, CEO y
						Desarrollador
						<br />
						Dirige el estudio con visión estratégica y pasión por la innovación
						digital.
					</p>
					<p className="text-white">
						<strong>Jose Leonardo González</strong> – Cofundador y Desarrollador
						Backend
						<br />
						Responsable de arquitecturas sólidas y eficientes.
					</p>
					<p className="text-white">
						<strong>Fernanda Briseño</strong> – Cofundadora y Diseñadora UX/UI
						<br />
						Líder en la creación de interfaces visuales atractivas y usables.
					</p>
					<p className="text-white">
						<strong>Ricardo Ubaldo González</strong> – Cofundador y
						Desarrollador Frontend
						<br />
						Especialista en desarrollo de interfaces modernas, SEO y rendimiento
						web.
					</p>
				</article>

				<article className="d-flex flex-column w-100 p-0 m-0">
					<h2 className="text-white">Nuestros Servicios</h2>
					<ul>
						<li className="text-white">
							<strong>Desarrollo Web:</strong> Creación de sitios web
							responsivos, seguros y optimizados para motores de búsqueda.
						</li>
						<li className="text-white">
							<strong>Aplicaciones de Escritorio:</strong> Soluciones a medida
							para automatizar procesos empresariales y mejorar la
							productividad.
						</li>
						<li className="text-white">
							<strong>Aplicaciones Móviles:</strong> Apps funcionales y
							atractivas para Android e iOS, diseñadas para usuarios exigentes.
						</li>
						<li className="text-white">
							<strong>Software Empresarial a Medida:</strong> Desarrollo de CRM,
							sistemas de inventario, herramientas de gestión de personal y
							soluciones personalizadas.
						</li>
					</ul>
				</article>

				<article className="d-flex flex-column w-100 p-0 m-0">
					<h2 className="text-white">Contáctanos</h2>
					<p className="text-white">
						¿Estás listo para digitalizar tu negocio o lanzar tu proyecto con
						éxito? Hablemos y encuentra la solución ideal con nosotros.
					</p>
					<div className="d-flex justify-content-start align-items-center gap-4">
						<Link
							href="mailto:jegdevstudioscontact@gmail.com"
							className="fs-1 text-center text-white text-decoration-none"
							tabIndex={0}
							aria-label="Envíar un mensaje por correo electrónico a jegdevstudioscontact@gmail.com"
							title="Envíar un mensaje por correo electrónico a jegdevstudioscontact@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="icon-gmail" aria-hidden="true"></span>
						</Link>
						<Link
							href="https://wa.me/5215512197135"
							className="fs-1 text-center text-white text-decoration-none"
							tabIndex={0}
							aria-label="Envíar un mensaje por WhatsApp +52 55-1219-7135"
							title="Envíar un mensaje por WhatsApp +52 55-1219-7135"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="icon-whatsapp" aria-hidden="true"></span>
						</Link>
					</div>
					<p className="text-white">
						Síguenos en nuestras redes sociales y conoce nuestros últimos
						trabajos, ideas y lanzamientos.
					</p>
				</article>
			</section>
			<CTA />
		</>
	);
}
