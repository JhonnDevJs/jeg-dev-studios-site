
import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/Seo/StructuredData";

export const metadata = {
	title: "Aviso de Privacidad | JEG Dev Studios",
	description:
		"Consulta nuestro Aviso de Privacidad en JEG Dev Studios. Protegemos tus datos personales conforme a la normativa vigente y garantizamos su confidencialidad.",
	keywords:
		"aviso de privacidad, privacidad de datos, protección de datos personales, política de privacidad, JEG Dev Studios, confidencialidad, tratamiento de datos, normativa de privacidad, seguridad digital, derechos ARCO",
	openGraph: {
		title: "Aviso de Privacidad | JEG Dev Studios",
		description:
			"Infórmate sobre cómo protegemos y utilizamos tus datos personales en JEG Dev Studios, de acuerdo con la legislación vigente.",
		url: "https://www.jegdevstudios.com/legal/aviso-de-privacidad",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-home.webp",
				width: 1200,
				height: 630,
				alt: "Aviso de privacidad JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
	},
	alternates: {
		canonical: "https://www.jegdevstudios.com/legal/aviso-de-privacidad",
	},
};

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question: "¿Qué tipo de información personal recopila JEG Dev Studios?",
		answer:
			"Recopilamos datos esenciales para poder ofrecerte nuestros servicios, como tu nombre, correo electrónico, teléfono y detalles sobre tu proyecto. Si requieres factura, también solicitamos datos fiscales como tu RFC.",
	},
	{
		question: "¿Para qué se utilizan mis datos personales?",
		answer:
			"Tus datos se usan principalmente para fines operativos: comunicarnos contigo, generar propuestas, formalizar contratos, facturar y darte soporte. Solo usamos tus datos para fines secundarios, como marketing, si nos das tu consentimiento.",
	},
	{
		question: "¿Mis datos personales se comparten con otras empresas?",
		answer:
			"No. No compartimos tus datos con terceros sin tu consentimiento, excepto cuando es estrictamente necesario para cumplir con obligaciones legales o contractuales, como con proveedores de facturación o pasarelas de pago.",
	},
	{
		question: "¿Cómo puedo solicitar que eliminen mi información?",
		answer:
			"Puedes ejercer tus derechos ARCO (Acceso, Rectificación, Cancelación u Oposición) en cualquier momento. Solo necesitas enviar un correo a contacto@jegdevstudios.com con tu solicitud y nos encargaremos de procesarla.",
	},
];

export default function PrivacyPolicy() {
	return (
		<>
			<StructuredData
				type="BreadcrumbList"
				idPage="breadcrumbs-notice-privacy"
			/>
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-notice-privacy" />
			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Notice-Privacy.webp"
					alt="Aviso de privacidad - JEG Dev Studios"
					width={2000}
					height={600}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="flex flex-col justify-center items-center w-full p-4 xl:p-20 gradient-effect-y">
				<h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">Aviso de Privacidad</h1>
				<p className="text-lg text-gray-300 text-center mt-4 max-w-3xl">
					En JEG Dev Studios protegemos tu información personal con
					responsabilidad y transparencia.
				</p>
			</section>

			<section className="flex flex-col w-full p-4 md:p-8 xl:p-20 gradient-effect-x">
				<div className="max-w-4xl mx-auto w-full space-y-12">
					<article>
						<h2 className="text-3xl font-bold text-white mb-4">¿Qué datos personales recopilamos?</h2>
						<p className="text-gray-300 leading-relaxed">
							Para prestar nuestros servicios de desarrollo web, software y
							aplicaciones móviles, podemos recopilar los siguientes datos
							personales:
						</p>
						<ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
							<li>Nombre completo</li>
							<li>Correo electrónico</li>
							<li>Número telefónico</li>
							<li>Domicilio</li>
							<li>Nombre comercial o de empresa</li>
							<li>RFC (en caso de requerir factura)</li>
							<li>
								Información relacionada con su proyecto o requerimiento
							</li>
						</ul>
					</article>

					<article className="flex flex-col w-full p-0 m-0">
							<h2 className="text-3xl font-bold text-white mb-4">
								¿Para qué fines utilizamos sus datos personales?
							</h2>
							<h5 className="text-xl font-semibold text-white mt-6 mb-3">Fines primarios:</h5>
							<ul className="list-disc pl-6 space-y-2 text-gray-300">
								<li>Proveer los servicios contratados</li>
								<li>Generar presupuestos y contratos</li>
								<li>Comunicación directa con el cliente</li>
								<li>
									Facturación y seguimiento administrativo
								</li>
								<li>
									Soporte técnico y atención a incidencias
								</li>
								<li>
									Cumplimiento de obligaciones contractuales y legales
								</li>
							</ul>

							<h5 className="text-xl font-semibold text-white mt-6 mb-3">Fines secundarios (opcional):</h5>
							<ul className="list-disc pl-6 space-y-2 text-gray-300">
								<li>
									Envío de promociones o información sobre nuevos servicios
								</li>
								<li>Encuestas de calidad del servicio</li>
								<li>Prospección comercial</li>
							</ul>
							<p className="text-gray-300 leading-relaxed mt-4">
								Si no desea que sus datos sean utilizados para los fines
								secundarios, puede enviar un correo a:
							</p>
							<Link
								href="mailto:contacto@jegdevstudios.com"
								className="text-white underline hover:text-cyan-300 transition-colors my-2 inline-block"
								target="_blank"
								rel="noopener noreferrer"
								tabIndex={0}
								title="Envía un correo a contacto@jegdevstudios.com"
								aria-label="Envía un correo a contacto@jegdevstudios.com"
							>
								contacto@jegdevstudios.com
							</Link>
							<p className="text-gray-300 leading-relaxed">
								Con el asunto: <em className="font-semibold text-white">&quot;Negativa a fines secundarios&quot;</em>
							</p>
					</article>

					<article className="flex flex-col w-full p-0 m-0">
						<h2 className="text-3xl font-bold text-white mb-4">¿Con quién compartimos su información?</h2>
						<p className="text-gray-300 leading-relaxed">
							Sus datos personales no serán compartidos con terceros sin su
							consentimiento, salvo cuando sea estrictamente necesario para el
							cumplimiento de obligaciones legales o contractuales, como el
							procesamiento de pagos o generación de facturas mediante plataformas
							autorizadas.
						</p>
					</article>

					<article className="flex flex-col w-full p-0 m-0">
						<h2 className="text-3xl font-bold text-white mb-4">Derechos ARCO</h2>
						<p className="text-gray-300 leading-relaxed">
							Usted tiene derecho a conocer qué datos tenemos de usted, cómo los
							usamos y las condiciones del uso que les damos. Asimismo, puede
							solicitar:
						</p>
						<ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
							<li>
								La rectificación de su información si está desactualizada o
								incorrecta
							</li>
							<li>
								La cancelación de sus datos si considera que no se requieren para
								alguna finalidad específica
							</li>
							<li>
								La oposición al uso de sus datos para fines específicos
							</li>
						</ul>
						<p className="text-gray-300 leading-relaxed mt-4">
							Para ejercer cualquiera de estos derechos, envíe un correo
							electrónico con el asunto:
						</p>
						<p className="my-2">
							<em className="font-semibold text-white">&quot;Ejercicio de derechos ARCO&quot;</em>
						</p>
						<p className="text-gray-300 leading-relaxed">A la dirección: </p>
						<Link
							href="mailto:contacto@jegdevstudios.com"
							className="text-white underline hover:text-cyan-300 transition-colors my-2 inline-block"
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={0}
							title="Envía un correo a contacto@jegdevstudios.com"
							aria-label="Envía un correo a contacto@jegdevstudios.com"
						>
							contacto@jegdevstudios.com
						</Link>
						<p className="text-gray-300 leading-relaxed mt-2">Incluya:</p>
						<ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
							<li>Nombre completo</li>
							<li>
								Tipo de solicitud (Acceso, Rectificación, Cancelación u Oposición)
							</li>
							<li>
								Descripción clara de los datos sobre los que desea ejercer sus
								derechos
							</li>
							<li>Copia de una identificación oficial</li>
						</ul>
						<p className="text-gray-300 leading-relaxed mt-4">
							Nos comprometemos a responder en un plazo no mayor a 20 días
							hábiles.
						</p>
					</article>

					<article className="flex flex-col w-full p-0 m-0">
						<h2 className="text-3xl font-bold text-white mb-4">Revocación del consentimiento</h2>
						<p className="text-gray-300 leading-relaxed">
							Usted puede revocar su consentimiento para el uso de sus datos
							personales en cualquier momento, enviando un correo con el asunto:{" "}
							<em className="font-semibold text-white">&quot;Revocación de consentimiento&quot;</em> a:
						</p>
						<Link
							href="mailto:contacto@jegdevstudios.com"
							className="text-white underline hover:text-cyan-300 transition-colors my-2 inline-block"
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={0}
							title="Envía un correo a contacto@jegdevstudios.com"
							aria-label="Envía un correo a contacto@jegdevstudios.com"
						>
							contacto@jegdevstudios.com
						</Link>
						<p className="text-gray-300 leading-relaxed">
							Tenga en cuenta que esto podría afectar la prestación de los
							servicios si aún existe una relación contractual activa.
						</p>
					</article>

					<article className="flex flex-col w-full p-0 m-0">
						<h2 className="text-3xl font-bold text-white mb-4">Medidas de seguridad</h2>
						<p className="text-gray-300 leading-relaxed">
							JEG Dev Studios adopta las medidas técnicas, administrativas y
							físicas necesarias para garantizar la seguridad de sus datos
							personales y evitar su daño, pérdida, alteración, destrucción o uso
							no autorizado.
						</p>
					</article>

					<article className="flex flex-col w-full p-0 m-0">
						<h2 className="text-3xl font-bold text-white mb-4">
							Uso de cookies y tecnologías de rastreo
						</h2>
						<p className="text-gray-300 leading-relaxed">
							Actualmente no utilizamos cookies ni tecnologías de rastreo en
							nuestro sitio web. Si en el futuro se llegaran a implementar, se
							notificará mediante el presente aviso y se solicitará el
							consentimiento correspondiente.
						</p>
					</article>

					<article className="flex flex-col w-full p-0 m-0">
						<h2 className="text-3xl font-bold text-white mb-4">Cambios al aviso de privacidad</h2>
						<p className="text-gray-300 leading-relaxed">
							Este aviso puede ser modificado para cumplir con nuevas
							disposiciones legales o políticas internas. Cualquier cambio será
							notificado a través de nuestro sitio web oficial:
						</p>
						<Link
							href="/aviso-de-privacidad"
							className="text-white underline hover:text-cyan-300 transition-colors my-2 inline-block"
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={0}
							title="Visitar nuestra página de aviso de privacidad"
						>
							www.jegdevstudios.com/aviso-de-privacidad
						</Link>
						<p className="text-sm text-gray-400 mt-4">
							Última actualización: 03 de noviembre de 2025
						</p>
					</article>
				</div>
			</section>
		</>
	);
}
