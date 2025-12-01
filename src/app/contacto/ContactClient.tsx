"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import iconLogo from "@/assets/img/logo/logo-bg-transparent.webp";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import "./contactClient.css";

// Interfaz para las FAQs (buena práctica tenerla aquí o importarla)
interface FaqItem {
	question: string;
	answer: string;
}

// 1. Definimos una interfaz propia para los datos del formulario
interface ContactFormData {
	name: string;
	email: string;
	type: string;
	message: string;
}

const faqs: FaqItem[] = [
	{
		question: "¿En cuánto tiempo responden los mensajes?",
		answer: "Solemos responder en menos de 24 horas hábiles",
	},
	{
		question: "¿Puedo solicitar un presupuesto personalizado?",
		answer:
			"Sí, completa el formulario y cuéntanos tu idea. Te contactaremos con una propuesta adaptada.",
	},
	{
		question: "¿Incluye mantenimiento o soporte?",
		answer:
			"Depende del paquete contratado. Algunos incluyen mantenimiento básico por un tiempo limitado. También ofrecemos planes de soporte y mantenimiento personalizados para proyectos a largo plazo.",
	},
	{
		question: "¿Cuáles son las formas de pago disponibles?",
		answer:
			"Trabajamos con transferencias bancarias, pagos vía PayPal y otros métodos digitales. Te indicamos los pasos según tu ubicación.",
	},
	{
		question: "¿Cuál es el proceso para contratar soporte?",
		answer:
			"Dependiendo del caso puedes contratarlo a través de nuestro portal web, enviando un mensaje por WhatsApp a nuestro equipo de soporte, llenando este formulario seleccionando la opción de soporte o enviando un correo electrónico.",
	},
	{
		question: "¿Cuáles son sus redes sociales oficiales?",
		answer:
			"Puedes encontrarnos en Facebook, Instagram, TikTok, YouTube, LinkedIn, X (antes Twitter) y GitHub como @JEGDevStudios. ¡Síguenos para no perderte ninguna novedad!",
	},
];

export default function ContactClient() {
	const [loading, setLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);

	// 2. Tipamos el estado inicial
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		type: "",
		message: "",
	});

	// 3. Tipamos el evento 'e' para Inputs, Selects y TextAreas
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		// TypeScript necesita saber que copiamos el estado anterior y sobrescribimos una clave
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// 4. Tipamos el evento del formulario (Submit)
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await fetch(
				"https://jegdevstudios.onrender.com/send-email",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				setFormData({
					name: "",
					email: "",
					type: "",
					message: "",
				});
				setShowModal(true);
			} else {
				alert("Error al enviar el correo");
			}
		} catch (error) {
			console.error("Error:", error);
			alert("Error al enviar el correo");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-contact" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-contact" />

			<Script
				id="structured-data-contactpage"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ContactPage",
						name: "Contacto - JEG Dev Studios",
						url: "https://www.jegdevstudios.com/contacto",
						description:
							"Contacta a JEG Dev Studios para agendar una consulta gratuita sobre desarrollo web, software, SEO y diseño.",
						mainEntity: {
							"@type": "ContactPoint",
							telephone: "+525512197135",
							contactType: "Customer Service",
							areaServed: "MX",
							availableLanguage: "es-MX",
							email: "contacto@jegdevstudios.com",
						},
					}),
				}}
			/>
			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Contacto.webp"
					alt="Contacta con nosotros - JEG Dev Studios"
					width={2000}
					height={600}
					className="w-full h-auto"
				/>
			</section>
			<section className="flex flex-col justify-center items-center w-full gradient-effect-x">
				<h1 className="text-6xl md:text-8xl text-center text-white mt-5">Contáctanos</h1>
				<p className="text-xl text-center text-white">
					Escríbenos para recibir asesoría personalizada, resolver dudas o
					solicitar la cotización de tu proyecto.
				</p>
			</section>
			<section className="flex flex-col md:flex-row justify-center items-center w-full p-3 xl:p-5 gap-5 gradient-effect-y">
				<aside className="flex flex-col justify-center items-center w-full h-full gap-4">
					<Image
						src={iconLogo}
						width={164}
						height={164}
						alt="Logo JEG Dev Studios"
						title="Logo JEG Dev Studios"
					></Image>
					<p className="text-xl text-center text-white">
						Estamos aquí para ayudarte. Escríbenos y nuestro equipo te
						responderá lo antes posible.
					</p>
					<div className="flex justify-center items-center gap-4">
						<Link
							href="mailto:contacto@jegdevstudios.com"
							className="text-6xl text-center text-white no-underline"
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
							className="text-6xl text-center text-white no-underline"
							tabIndex={0}
							aria-label="Envíar un mensaje por WhatsApp +52 55-1219-7135"
							title="Envíar un mensaje por WhatsApp +52 55-1219-7135"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="icon-whatsapp" aria-hidden="true"></span>
						</Link>
					</div>
				</aside>
				<article className="flex flex-col justify-center items-center text-center w-full h-full">
					<h2 className="text-white">Contactanos</h2>
					<form
						className="text-xl font-semibold custom-form"
						id="contactForm"
						onSubmit={handleSubmit}
					>
						<input
							type="text"
							name="name"
							placeholder="Nombre completo"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Correo Electrónico"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<label htmlFor="type" className="text-white">
							Tipo de Consulta
						</label>
						<select
							name="type"
							value={formData.type}
							onChange={handleChange}
							required
						>
							<option value="" disabled>
								Selecciona un tipo
							</option>
							<option value="consulta" className="text-black">
								General (Cualquier otra consulta)
							</option>
							<option value="cotizacion" className="text-black">
								Cotización
							</option>
							<option value="soporte" className="text-black">
								Soporte
							</option>
							<option value="facturacion" className="text-black">
								Facturación
							</option>
						</select>
						<textarea
							id="message"
							name="message"
							rows={4}
							placeholder="Escriba su mensaje..."
							value={formData.message}
							onChange={handleChange}
							required
						/>
						<button type="submit" className="text-xl font-bold btn-services">
							{loading ? (
								<div className="flex items-center">
									<strong role="status">Enviando...</strong>
									<div
										className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-auto"
										aria-hidden="true"
									></div>
								</div>
							) : (
								"Enviar"
							)}
						</button>
					</form>
				</article>
			</section>

			{/* Aquí pasamos las props tipadas al componente FAQ */}
			<FAQ faqs={faqs} />

			{showModal && (
				<div className="custom-modal-backdrop">
					<div className="custom-modal-content rounded-2xl bg-black text-white text-center p-4">
						<div className="mb-4">
							<div className="text-xl font-bold">
								Tu mensaje ha sido enviado
								<br />
								exitosamente.
							</div>
							<div className="text-xl mt-2">
								Nos comunicaremos
								<br />
								contigo a la brevedad.
								<br />
								:)
							</div>
						</div>
						<button
							className="btn-services"
							onClick={() => setShowModal(false)}
						>
							Aceptar
						</button>
					</div>
				</div>
			)}
		</>
	);
}