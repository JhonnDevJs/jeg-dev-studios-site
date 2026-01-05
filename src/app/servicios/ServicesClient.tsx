"use client";

// Imports Hooks
import Link from "next/link";
import Image from "next/image";

// Import Custom Hooks


// Imports libs

// Import Types

// Import Components
import StructuredData from "@/components/Seo/StructuredData";
import FAQ from "@/components/Seo/FAQ";

// Imports Assets


// Import Styles custom

import "./ServicesClient.css";

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question: "¿Cómo contrato un servicio con ustedes?",
		answer:
			"El primer paso es agendar una consulta gratuita. Analizamos tus necesidades, te enviamos una propuesta detallada y, si estás de acuerdo, comenzamos.",
	},
	{
		question: "¿Debo pagar todo de una vez?",
		answer:
			"No. Usualmente trabajamos con un pago inicial del 50% para comenzar y el 50% restante contra entrega o dividido en fases, según el tamaño del proyecto.",
	},
	{
		question: "¿Trabajan con contratos y garantías?",
		answer:
			"Sí. Todos nuestros proyectos se formalizan con un contrato que especifica alcances y tiempos. Ofrecemos garantía sobre nuestro trabajo para tu total tranquilidad.",
	},
	{
		question: "¿Puedo contratar varios servicios juntos (web + SEO + diseño)?",
		answer:
			"¡Claro! De hecho, lo recomendamos. Crear una estrategia integral desde el inicio garantiza los mejores resultados y ofrecemos planes personalizados.",
	},
];

export default function ServicesClient() {
	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-services" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-services" />

			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Servicios.webp"
					alt="Agencia de Desarrollo Digital - JEG Dev Studios"
					width={2000}
					height={600}
					className="w-full h-auto"
					priority // Importante para LCP
				/>
			</section>
			<div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-white overflow-x-hidden selection:bg-blue-500 selection:text-white px-4 md:px-16">

				<main className="flex-grow flex flex-col gap-8 pb-10">
					<section className="relative flex flex-col items-center justify-center py-16 lg:py-24">
						{/* Background Effects */}
						<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background-dark/0 to-background-dark opacity-70"></div>
							<div className="absolute top-20 right-[-20%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
							<div className="absolute top-40 left-[-10%] w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
						</div>

						<div className="relative z-1 flex flex-col items-center max-w-2xl text-center">
							<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6 backdrop-blur-sm">
								<span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
								<span className="text-xs font-medium text-gray-300">Agencia Digital #1 en México</span>
							</div>
							<h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
								Impulsamos tu <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
									Crecimiento Digital.
								</span>
							</h2>
							<p className="mb-8 text-lg font-normal leading-relaxed text-gray-400 max-w-[90%] mx-auto">
								Expertos en Desarrollo de Software, SEO y CRO. Convertimos visitantes en clientes para empresas ambiciosas.
							</p>
							<div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
								<Link href="/contacto" className="flex w-full sm:w-auto h-14 items-center justify-center rounded-full bg-blue-500 px-8 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-transform active:scale-95 hover:bg-blue-500">
									Solicitar Auditoría
								</Link>
							</div>
						</div>
					</section>
					
					<section>
						{/* Separador */}
						<div className="w-full">
							<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
						</div>

						
						<FAQ
							faqs={faqs}
						/>
					</section>
					<section className="pb-8 mx-auto w-full">
						<div className="relative overflow-hidden rounded-[2rem] bg-surface-dark shadow-xl min-h-[300px] flex items-center justify-center">
							{/* Imagen de fondo dinámica */}
							<div
								className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
								style={{
									backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOruKW6ROXy0XMQNA-o4to_eQFwtAa6wVfhNIfw9EYSb0FDrOFXwoAeprHlJhNTMeXptRARPE4RhlNkOkmRVg-h5PEo6kkeU-NWg-Tb0v0q3fU7_6rOY5nWnRkwi76tvhICTGtJw8DPstRWEjJt1pI-C6ou7WFWlwCPlHvF4KA0-LNL_yKQUfjkKMLY5Rzges6CweEJgD05o0FJq9O7dlYX7zwavWhyZI0GNrQdhbZUgcNfnuYoAS_pzSNDMC7lX33jB_-fGr9DRUt')`,
								}}
							></div>

							{/* Overlays para legibilidad */}
							<div className="absolute inset-0 z-1 bg-gradient-to-t from-black via-[#101922]/80 to-transparent"></div>
							<div className="absolute inset-0 z-1 bg-gradient-to-br from-blue-500/80 to-purple-600/40 mix-blend-overlay"></div>

							<div className="relative z-2 flex flex-col items-center justify-center p-8 text-center gap-6">
								<div className="flex flex-col gap-2">
									<h3 className="text-white text-3xl font-bold leading-tight tracking-tight">
										¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">escalar?</span>
									</h3>
									<p className="text-gray-200 text-base font-medium leading-relaxed max-w-[280px] mx-auto">
										Impulsa tu negocio hoy. Expertos en desarrollo y SEO listos para ayudarte.
									</p>
								</div>
								<Link href="/contacto" className="group relative flex w-full max-w-[280px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-blue-500 px-6 py-4 text-white shadow-[0_0_20px_rgba(37,140,244,0.3)] transition-all hover:bg-blue-600 hover:shadow-[0_0_25px_rgba(37,140,244,0.5)] active:scale-95">
									<span className="text-base font-bold leading-none tracking-wide">
										Cotizar Proyecto
									</span>
									<span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
										arrow_forward
									</span>
								</Link>
							</div>
						</div>
					</section>
				</main>

				{/* 7. FLOATING CTA */}
				<div className="fixed bottom-0 left-0 w-full p-4 z-50 bg-gradient-to-t from-background-dark via-background-dark to-transparent pt-10">
					<Link href="/contacto">
						<button className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all">
							<span>Iniciar Proyecto</span>
							<span className="material-symbols-outlined">rocket_launch</span>
						</button>
					</Link>
				</div>

			</div>

		</>
	);
}