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

			<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

				<main className="relative flex flex-col items-center px-4 py-8 flex-grow">
					<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
						<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background-dark/0 to-background-dark opacity-70"></div>
						<div className="absolute top-20 right-[-20%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
						<div className="absolute top-40 left-[-10%] w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
					</div>

					<div className="relative z-10 w-full max-w-lg">
						<div className="text-center mb-8">
							<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-4 backdrop-blur-sm">
								<span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
								<span className="text-xs font-medium text-gray-300">Respuesta en &lt; 24h</span>
							</div>
							<h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-3">
								Ponte en Contacto
							</h2>
							<p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
								¿Tienes un proyecto en mente? Escríbenos y hagamos crecer tu negocio digital.
							</p>
						</div>

						<form className="flex flex-col gap-5">
							<div className="space-y-1">
								<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1" htmlFor="name">Nombre</label>
								<div className="relative">
									<input className="block w-full rounded-xl border border-white/10 bg-surface-dark p-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="name" placeholder="Tu nombre completo" type="text" />
									<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" style={{ fontSize: '20px' }}>person</span>
								</div>
							</div>

							<div className="space-y-1">
								<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1" htmlFor="email">Email</label>
								<div className="relative">
									<input className="block w-full rounded-xl border border-white/10 bg-surface-dark p-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="email" placeholder="tu@empresa.com" type="email" />
									<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" style={{ fontSize: '20px' }}>mail</span>
								</div>
							</div>

							<div className="space-y-1">
								<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1" htmlFor="service">Servicio de interés</label>
								<div className="relative">
									<select className="block w-full rounded-xl border border-white/10 bg-surface-dark p-4 text-white appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-none" id="service">
										<option className="bg-surface-dark">Desarrollo de Software</option>
										<option className="bg-surface-dark">SEO y Posicionamiento</option>
										<option className="bg-surface-dark">Diseño Web &amp; CRO</option>
										<option className="bg-surface-dark">Otro</option>
									</select>
									<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" style={{ fontSize: '20px' }}>expand_more</span>
								</div>
							</div>

							<div className="space-y-1">
								<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1" htmlFor="message">Mensaje</label>
								<textarea className="block w-full rounded-xl border border-white/10 bg-surface-dark p-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" id="message" placeholder="Cuéntanos los detalles..." rows={4}></textarea>
							</div>

							<button className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-transform active:scale-95 hover:brightness-110" type="button">
								Enviar Solicitud
								<span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
							</button>
						</form>

						<div className="mt-8 flex flex-col gap-4 border-t border-white/5 pt-8">
							<div className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark border border-white/5">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-blue-500">
									<span className="material-symbols-outlined" style={{ fontSize: '20px' }}>call</span>
								</div>
								<div>
									<p className="text-xs text-gray-500">Llámanos directamente</p>
									<p className="text-sm font-semibold text-white">+52 55 1234 5678</p>
								</div>
							</div>
							<div className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark border border-white/5">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-blue-500">
									<span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>
								</div>
								<div>
									<p className="text-xs text-gray-500">Escríbenos un correo</p>
									<p className="text-sm font-semibold text-white">contacto@jegdevstudios.com</p>
								</div>
							</div>
						</div>
					</div>
				</main>

				<footer className="mt-auto border-t border-white/5 bg-[#0B0D10] px-6 py-10">
					<div className="flex flex-col gap-8">
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 shadow-lg shadow-primary/20">
									<span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>code</span>
								</div>
								<span className="text-xl font-bold tracking-tight text-white">JEG Dev Studios</span>
							</div>
							<p className="text-sm leading-relaxed text-gray-400 max-w-xs">
								Transformando negocios a través de tecnología y estrategia digital.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-8">
							<div className="flex flex-col gap-4">
								<h4 className="text-xs font-bold uppercase tracking-wider text-white/80">Menu</h4>
								<ul className="flex flex-col gap-3">
									<li><a className="text-sm text-gray-400 hover:text-blue-500 transition-colors" href="#">Inicio</a></li>
									<li><a className="text-sm text-gray-400 hover:text-blue-500 transition-colors" href="#">Servicios</a></li>
									<li><a className="text-sm text-gray-400 hover:text-blue-500 transition-colors" href="#">Portafolio</a></li>
									<li><a className="text-sm text-gray-400 hover:text-blue-500 transition-colors" href="#">Sobre Nosotros</a></li>
									<li><a className="text-sm text-gray-400 hover:text-blue-500 transition-colors" href="#">Contacto</a></li>
								</ul>
							</div>
							<div className="flex flex-col gap-4">
								<h4 className="text-xs font-bold uppercase tracking-wider text-white/80">Contacto</h4>
								<ul className="flex flex-col gap-3">
									<li className="flex items-start gap-2 text-sm text-gray-400">
										<span className="material-symbols-outlined mt-0.5 text-blue-500 shrink-0" style={{ fontSize: '16px' }}>location_on</span>
										<span>CDMX, México</span>
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-400">
										<span className="material-symbols-outlined text-blue-500 shrink-0" style={{ fontSize: '16px' }}>mail</span>
										<a className="hover:text-white transition-colors truncate" href="#">contacto@jegdevstudios.com</a>
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-400">
										<span className="material-symbols-outlined text-blue-500 shrink-0" style={{ fontSize: '16px' }}>call</span>
										<a className="hover:text-white transition-colors" href="#">+52 55 1234 5678</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex flex-col gap-6 border-t border-white/5 pt-8">
							<div className="flex gap-4">
								<a className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark border border-white/5 text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
									<svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
								</a>
								<a className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark border border-white/5 text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
									<svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
								</a>
								<a className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark border border-white/5 text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
									<svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
								</a>
							</div>
							<div className="flex flex-col gap-3">
								<div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
									<a className="hover:text-blue-500 transition-colors" href="#">Política de Privacidad</a>
									<a className="hover:text-blue-500 transition-colors" href="#">Términos y Condiciones</a>
								</div>
								<p className="text-[10px] text-gray-600">
									© 2024 JEG Dev Studios. Todos los derechos reservados.
								</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
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