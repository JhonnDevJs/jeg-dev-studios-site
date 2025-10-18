"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import iconLogo from "@/assets/img/logo/logo-bg-transparent.webp";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import "./contactClient.css";

const faqs = [
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
];

export default function ContactClient() {
	const [loading, setLoading] = useState(false); // Nuevo estado
	const [showModal, setShowModal] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		type: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
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
				setShowModal(true); // Mostrar modal
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
			<StructuredData data={faqs} />
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/fondos/Contacto.webp"
					alt="Conatcta con nosotros - JEG Dev Studios"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center w-100 gradient-effect-x">
				<h1 className="display-1 text-center text-white mt-5">Contáctanos</h1>
				<p className="fs-5 text-center text-white">
					Escríbenos para recibir asesoría personalizada, resolver dudas o
					solicitar la cotización de tu proyecto.
				</p>
			</section>
			<section className="d-flex flex-md-row flex-column justify-content-center align-items-center w-100 p-xl-5 p-3 gap-5 gradient-effect-y">
				<aside className="d-flex flex-column justify-content-center align-items-center w-100 h-100 gap-4">
					<Image
						src={iconLogo}
						width={164}
						height={164}
						alt="Logo JEG Dev Studios"
						title="Logo JEG Dev Studios"
					></Image>
					<p className="fs-3 text-center text-white">
						Estamos aquí para ayudarte. Escríbenos y nuestro equipo te
						responderá lo antes posible.
					</p>
					<div className="d-flex justify-content-center align-items-center gap-4">
						<Link
							href="mailto:contacto@jegdevstudios.com"
							className="fs-1 text-center text-white text-decoration-none"
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
				</aside>
				<article className="d-flex flex-column justify-content-center align-items-center text-center w-100 h-100">
					<h2 className="text-white">Contactanos</h2>
					<form
						className="fs-5 fw-semibold custom-form"
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
						<button type="submit" className="fs-5 fw-bold btn-services">
							{loading ? (
								<div className="d-flex align-items-center">
									<strong role="status">Enviando...</strong>
									<div
										className="spinner-border ms-auto"
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
			<FAQ faqs={faqs} />
			{showModal && (
				<div className="custom-modal-backdrop">
					<div className="custom-modal-content rounded-4 bg-black text-white text-center p-4">
						<div className="mb-4">
							<div className="fs-3 fw-bold">
								Tu mensaje ha sido enviado
								<br />
								exitosamente.
							</div>
							<div className="fs-5 mt-2">
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
