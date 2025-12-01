import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";

export const metadata = {
	title: "Términos y Condiciones | JEG Dev Studios",
	description:
		"Lee los Términos y Condiciones de uso de los servicios de JEG Dev Studios. Conoce tus derechos, responsabilidades y el alcance de nuestros servicios digitales.",
	keywords:
		"términos y condiciones, políticas de uso, condiciones del servicio, JEG Dev Studios, derechos del usuario, obligaciones del cliente, desarrollo web, aplicaciones móviles, software personalizado, contrato de servicio",
	openGraph: {
		title: "Términos y Condiciones | JEG Dev Studios",
		description:
			"Revisa los Términos y Condiciones que rigen el uso de nuestros servicios digitales en JEG Dev Studios.",
		url: "https://www.jegdevstudios.com/legal/terminos-y-condiciones",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-home.webp",
				width: 1200,
				height: 630,
				alt: "Términos de uso JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
	},
	alternates: {
		canonical: "https://www.jegdevstudios.com/legal/terminos-y-condiciones",
	},
};

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question: "¿Qué pasa si no entrego el material para mi proyecto a tiempo?",
		answer:
			"El tiempo de desarrollo comienza a contar una vez que nos entregas todo el material necesario (textos, logos, imágenes). Si hay retrasos en la entrega de este material, el cronograma del proyecto se ajustará en consecuencia.",
	},
	{
		question: "¿Puedo cancelar mi proyecto una vez que ha comenzado?",
		answer:
			"Puedes decidir no continuar, pero el pago inicial del 50% no es reembolsable, ya que cubre los costos de planificación, diseño y desarrollo inicial en los que incurrimos desde el momento en que se formaliza el proyecto.",
	},
	{
		question:
			"¿El precio de mi paquete de desarrollo web incluye hosting y dominio para siempre?",
		answer:
			"No. Generalmente, los paquetes que incluyen hosting y dominio cubren únicamente el primer año. Después de ese período, la renovación de estos servicios tiene un costo anual que se te notificará con antelación.",
	},
	{
		question:
			"Si contrato un servicio, ¿pueden usar mi proyecto en su portafolio?",
		answer:
			"Sí. Al contratar nuestros servicios, nos autorizas a incluir una muestra de tu proyecto en nuestro portafolio. Nos comprometemos a hacerlo de forma ética y sin revelar información confidencial o estratégica de tu negocio.",
	},
];

export default function TermsAndConditions() {
	return (
		<>
			<StructuredData
				type="BreadcrumbList"
				idPage="breadcrumbs-terms-and-conditions"
			/>
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-terminos" />
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Terms-Conditions.webp"
					alt="Térrminos y Condiciones - JEG Dev Studios"
					width={2000}
					height={600}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="flex flex-col justify-center items-center w-full p-4 xl:p-20 gradient-effect-y">
				<h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">Términos y Condiciones de Uso</h1>
				<p className="text-lg text-gray-300 text-center mt-4 max-w-3xl">
					Consulta los lineamientos legales y condiciones para el uso de los
					servicios y sitio web de JEG Dev Studios.
				</p>
			</section>

			<section className="flex flex-col w-full p-4 md:p-8 xl:p-20 gradient-effect-x">
				<div className="max-w-4xl mx-auto w-full space-y-12">
					<article>
						<h2 className="text-3xl font-bold text-white mb-4">I. INTRODUCCIÓN</h2>
						<p className="text-gray-300 leading-relaxed">
							Al ingresar y utilizar este portal de Internet, cuyo nombre de
							dominio es{" "}
							<Link
								href="https://www.jegdevstudios.com"
								target="_blank"
								className="text-white underline hover:text-cyan-300 transition-colors"
								title="link del sitio web de dominio jegdevstudios.com"
								aria-label="link del sitio web de dominio jegdevstudios.com"
							>
								www.jegdevstudios.com
							</Link>
							, propiedad de JEG Dev Studios (en adelante, &quot;JEG&quot; o
							&quot;la empresa&quot;), el usuario acepta los presentes Términos y
							Condiciones de Uso. Esta aceptación se realiza mediante medios
							electrónicos, en cumplimiento con el artículo 1803 del Código Civil
							Federal.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Si el usuario no acepta total y completamente los términos aquí
							contenidos, deberá abstenerse de utilizar el sitio y los servicios
							ofrecidos. El uso del sitio implica aceptación plena e incondicional
							de este acuerdo.
						</p>
						<p className="text-gray-300 leading-relaxed">
							JEG se reserva el derecho de modificar estos términos y condiciones
							en cualquier momento. Es responsabilidad del usuario revisarlos
							periódicamente.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">II. CONVENIO</h2>
						<p className="text-gray-300 leading-relaxed">
							Convenio de adhesión para el uso del sitio web celebrado entre JEG y
							el usuario, quien accede de forma voluntaria y se sujeta a las
							disposiciones aquí establecidas.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">III. LICENCIA</h2>
						<p className="text-gray-300 leading-relaxed">
							JEG otorga al usuario una licencia no exclusiva, revocable y no
							transferible para utilizar el sitio y los servicios conforme a estos
							términos.
						</p>
						<p className="text-gray-300 leading-relaxed">
							El usuario puede imprimir y/o copiar información del sitio
							únicamente para uso personal y no comercial.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Queda prohibida la reproducción, distribución o modificación de
							cualquier contenido sin autorización expresa y por escrito.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">IV. USO DEL SITIO</h2>
						<ul className="list-disc pl-6 space-y-2 text-gray-300">
							<li>
								<strong>Contenido e información:</strong> Sujeto a cambios sin
								previo aviso.
							</li>
							<li>
								<strong>Opiniones de terceros:</strong> JEG no se responsabiliza
								por comentarios, consejos o publicaciones de terceros.
							</li>
							<li>
								<strong>Contenido bloqueado:</strong> JEG puede eliminar o
								bloquear contenido ofensivo, ilegal o que infrinja derechos.
							</li>
							<li>
								<strong>Confianza en terceros:</strong> El usuario asume el riesgo
								de confiar en contenido externo.
							</li>
						</ul>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">V. FORMATOS Y DATOS PERSONALES</h2>
						<p className="text-gray-300 leading-relaxed">
							El usuario garantiza la veracidad de los datos personales
							proporcionados en formularios o servicios.
						</p>
						<p className="text-gray-300 leading-relaxed">
							El envío de datos autoriza a JEG a utilizarlos con fines operativos
							y contractuales, conforme a la legislación vigente y al aviso de
							privacidad.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">VI. PROPIEDAD INTELECTUAL</h2>
						<p className="text-gray-300 leading-relaxed">
							Todos los elementos del sitio, incluyendo logotipos, textos,
							imágenes, diseños y código, son propiedad de JEG o de sus
							respectivos autores.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Está prohibido copiar, modificar o utilizar cualquier contenido con
							fines comerciales sin autorización previa.
						</p>
						<p className="text-gray-300 leading-relaxed">
							El envío de ideas o materiales por parte del usuario otorga a JEG
							una licencia mundial, gratuita, no exclusiva y perpetua para su uso,
							reproducción y distribución.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">VII. SERVICIOS DE DESARROLLO</h2>
						<p className="text-gray-300 leading-relaxed">
							Al contratar servicios de desarrollo web, software o aplicaciones
							móviles, el usuario acepta lo siguiente:
						</p>
						<ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
							<li>
								El cliente deberá pagar al menos el 50% del costo total del
								proyecto de forma anticipada.
							</li>
							<li>
								Se compromete a entregar el material necesario (logos, textos,
								imágenes, etc.) en un plazo máximo de 2 semanas desde la firma del
								contrato.
							</li>
							<li>
								El tiempo de desarrollo inicia una vez entregado todo el material
								requerido.
							</li>
							<li>
								Cambios o adiciones posteriores implican ajuste de tiempo y costo.
							</li>
							<li>
								El desarrollo será sometido a un test final validado por
								videollamada u otro medio acordado.
							</li>
							<li>
								El pago final se realiza después de la validación del cliente.
							</li>
							<li>
								El precio puede incluir servicios como dominio, hosting o base de
								datos solo si se indica explícitamente en la promoción o paquete
								contratado.
							</li>
							<li>
								Si el cliente decide no continuar con el proyecto después del
								inicio del desarrollo, no se realizarán reembolsos.
							</li>
							<li>
								Al entregar el material, se firmará un documento anexo que
								certifica la entrega completa y el inicio formal del desarrollo.
							</li>
						</ul>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">VIII. PUBLICIDAD Y ENLACES EXTERNOS</h2>
						<p className="text-gray-300 leading-relaxed">
							JEG puede incluir publicidad o enlaces externos. Estos no implican
							respaldo. El uso de dichos recursos queda bajo la responsabilidad
							del usuario.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">
							IX. AUTORIZACIÓN PARA USO EN PORTAFOLIO
						</h2>
						<p className="text-gray-300 leading-relaxed">
							Al contratar los servicios de JEG, el cliente autoriza expresamente
							a:
						</p>
						<p className="text-gray-300 leading-relaxed">
							Incluir el proyecto en portafolios de la empresa, colaboradores y
							canales promocionales.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Esta autorización no incluye la divulgación de información
							confidencial o estratégica.
						</p>
						<p className="text-gray-300 leading-relaxed">
							JEG se compromete a usar el contenido de forma ética, respetuosa y
							conforme a la legislación vigente.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">
							X. NUEVO SERVICIO: LANDING PAGE DE $2,999 MXN
						</h2>
						<p className="text-gray-300 leading-relaxed">Este servicio incluye:</p>
						<ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
							<li>
								Dominio personalizado gratis por 1 año
							</li>
							<li>
								Hosting gratuito mediante Google Sites
							</li>
							<li>Diseño responsivo</li>
							<li>
								Posicionamiento inicial en Google (SEO básico)
							</li>
							<li>
								Diseño adaptado a la marca del cliente
							</li>
						</ul>
						<h3 className="text-xl font-semibold text-white mt-6 mb-3">Proceso del servicio:</h3>
						<ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
							<li>
								El cliente elige hasta 5 secciones de una lista predeterminada.
							</li>
							<li>
								Se crea el diseño adaptado a su marca personal o negocio.
							</li>
							<li>El cliente aprueba el diseño.</li>
							<li>
								JEG lo publica y configura el dominio y hosting.
							</li>
						</ul>
						<p className="text-gray-300 leading-relaxed mt-4">
							Este servicio no incluye backend personalizado, mantenimiento
							posterior ni servicios adicionales no especificados.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">XI. LIMITACIÓN DE RESPONSABILIDAD</h2>
						<p className="text-gray-300 leading-relaxed">
							JEG no garantiza que el sitio esté libre de errores o
							interrupciones.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Los servicios y el sitio se ofrecen &quot;tal cual&quot; y
							&quot;según disponibilidad&quot;.
						</p>
						<p className="text-gray-300 leading-relaxed">
							JEG no se responsabiliza por daños derivados del uso del sitio o
							servicios contratados.
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">XII. CONTACTO Y RECLAMACIONES</h2>
						<p className="text-gray-300 leading-relaxed">
							Para dudas o notificaciones relacionadas con propiedad intelectual,
							uso indebido del sitio o los servicios ofrecidos:
							<br />
							<strong>Email:</strong>{" "}
							<Link
								href="mailto:contacto@jegdevstudios.com"
								className="text-white underline hover:text-cyan-300 transition-colors"
								tabIndex={0}
								title="correo de contacto"
								aria-label="correo de contacto"
							>
								contacto@jegdevstudios.com
							</Link>
						</p>
					</article>

					<article>
						<h2 className="text-3xl font-bold text-white mb-4">XIII. LEY APLICABLE Y JURISDICCIÓN</h2>
						<p className="text-gray-300 leading-relaxed">
							Este acuerdo se rige por las leyes aplicables en los Estados Unidos
							Mexicanos.
						</p>
						<p className="text-gray-300 leading-relaxed">
							En caso de controversia, ambas partes se someten a la jurisdicción
							de los tribunales competentes en el Estado de la Ciudad de México,
							renunciando a cualquier otro fuero.
						</p>
					</article>
				</div>
			</section>

			<FAQ
				faqs={faqs}
				subtitle="Conoce más sobre nuestros terminos y condiciones de servicio."
			/>
		</>
	);
}
