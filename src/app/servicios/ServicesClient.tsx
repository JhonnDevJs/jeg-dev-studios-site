"use client";

// Imports Hooks
import Link from "next/link";
import Image from "next/image";

// Import Custom Hooks


// Imports libs

// Import Types

// Import Components
import StructuredData from "@/components/Seo/StructuredData";
import CardServices from "@/components/Cards/CardServices";
import FAQ from "@/components/Seo/FAQ";
import CTA from "@/components/Cta/CTA";

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

const services = [
	{ text: "Soporte técnico, escalabilidad y personalización total" },
	{ text: "Diseños profesionales alineados a tu identidad visual" },
	{ text: "Optimización para buscadores (SEO) desde el inicio" },
	{ text: "Procesos claros de desarrollo (Sprint + feedback continuo)" },
	{ text: "Acompañamiento post-entrega: mantenimiento y soporte" },
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
			<div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-white overflow-x-hidden selection:bg-primary selection:text-white">

				<main className="flex-grow flex flex-col gap-8 pb-10">
					<section className="relative flex flex-col items-center justify-center px-4 py-16 lg:py-24">
						{/* Background Effects */}
						<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background-dark/0 to-background-dark opacity-70"></div>
							<div className="absolute top-20 right-[-20%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
							<div className="absolute top-40 left-[-10%] w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
						</div>

						<div className="relative z-10 flex flex-col items-center max-w-2xl text-center">
							<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6 backdrop-blur-sm">
								<span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
								<span className="text-xs font-medium text-gray-300">Agencia Digital #1 en México</span>
							</div>
							<h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
								Impulsamos tu <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
									Crecimiento Digital.
								</span>
							</h2>
							<p className="mb-8 text-lg font-normal leading-relaxed text-gray-400 max-w-[90%] mx-auto">
								Expertos en Desarrollo de Software, SEO y CRO. Convertimos visitantes en clientes para empresas ambiciosas.
							</p>
							<div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
								<Link href="/contacto" className="flex w-full sm:w-auto h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-transform active:scale-95 hover:bg-blue-500">
									Solicitar Auditoría
								</Link>
								<Link href="/servicios" className="flex w-full sm:w-auto h-14 items-center justify-center rounded-full border border-primary/50 bg-transparent px-8 text-base font-bold text-primary transition-colors hover:bg-primary/10 active:scale-95">
									Ver Servicios
								</Link>
							</div>
						</div>
					</section>
					<section className="relative z-10 px-4 pt-4 pb-16 container mx-auto">
						<div className="flex items-center justify-between mb-6">
							<h3 className="text-2xl font-bold text-white">Nuestros Servicios</h3>
							<Link href="/servicios" className="text-sm font-medium text-primary hover:text-blue-300">
								Ver todo
							</Link>
						</div>

						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{/* Card 1: Software */}
							<article className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 p-6 hover:border-primary/30 transition-all duration-300">
								<div className="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-10px] rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all"></div>

								{/* 3. SECCIÓN DESARROLLO (Código) */}
								<section className="flex flex-col gap-5 px-4">
									<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl group">
										<div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent z-10"></div>
										{/* IMAGEN DINÁMICA DE SUPABASE */}
										<div
											className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
											style={{
												backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6CnvFbqMpxRj7hn0k4n9YbiZuNtRx0rD7wVMA7-OluDsgWlWWH8MONL5e2zq2y7Z3uvlHAFq9vatxOllaY_C8IKjC6lxFFFcq_5BydxnGuiKJRezZQk1MDJA8a5QwmHTa0LQIfAE4w-WTF6uy1y13nUUAW460tncmfTQs6j14xIFxVcqEgud8nKFaGf565wCPGk8hsZ9GddOpJFdP4i16YIbAnGo11WgKSHExVqY3EkvX5EbDgJBtAwykTPQ9MxYJl4N9SwtaFhLj')`,
											}}
										></div>
										<div className="absolute bottom-4 left-4 z-20">
											<span className="px-3 py-1 bg-purple-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2 inline-block backdrop-blur-sm">
												Desarrollo App & Web
											</span>
										</div>
									</div>

									<div className="flex flex-col gap-4">
										<h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white">
											Código que <span className="text-purple-400">Escala</span> y Convierte
										</h2>
										<div className="glass-panel p-5 rounded-2xl border-purple-500/10 bg-purple-500/5">
											<p className="text-slate-300 text-base font-normal leading-relaxed">
												Desarrollamos soluciones robustas utilizando Next.js y Supabase. Priorizamos la velocidad, la seguridad y una arquitectura limpia.
											</p>
										</div>

										<div className="flex flex-col gap-3 mt-2">
											<div className="flex items-start gap-3">
												<span className="material-symbols-outlined text-purple-400 mt-0.5">terminal</span>
												<p className="text-slate-200 text-base font-medium">Arquitectura Limpia & Escalable</p>
											</div>
											<div className="flex items-start gap-3">
												<span className="material-symbols-outlined text-purple-400 mt-0.5">speed</span>
												<p className="text-slate-200 text-base font-medium">Core Web Vitals +90</p>
											</div>
										</div>
									</div>
								</section>
								<div className="relative z-10 flex flex-col h-full">
									<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform duration-300">
										<span className="material-symbols-outlined text-3xl">terminal</span>
									</div>
									<h4 className="mb-2 text-xl font-bold text-white">Desarrollo de Software</h4>
									<p className="mb-4 text-sm leading-relaxed text-gray-400">
										Soluciones a la medida, escalables y seguras. Desde apps móviles hasta plataformas enterprise.
									</p>
									<Link href="/servicios/desarrollo" className="mt-auto inline-flex items-center text-sm font-bold text-primary hover:text-white transition-colors gap-1">
										Saber más <span className="material-symbols-outlined text-lg">arrow_forward</span>
									</Link>
								</div>
							</article>

							{/* Card 2: SEO */}
							<article className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 p-6 hover:border-primary/30 transition-all duration-300">
								<div className="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-10px] rounded-full bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10 transition-all"></div>
								{/* 2. SECCIÓN SEO & GROWTH (Conectada a Supabase) */}
								<section className="flex flex-col gap-5 px-4 pt-6">
									<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl group">
										<div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent z-10"></div>
										{/* IMAGEN DINÁMICA DE SUPABASE */}
										<div
											className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
											style={{
												backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS4cyMOiKUDMT7rM4GCbZvrWasa-8UCzBS69LYi3cGXtjc7id67gfuJX28lHCMfic5h1TmDrM5EdQvfHcc2n9Jri-IzHxv3qUpkSef4gYMobYdWcH4loK7yTAFlqWXaAXtfSz3cwxSQ4xYDER96YYawWNM7GPb2LtxogeKlf-5OFDkyBDjgs94I9tjFs2ex4YMu0tbnrTv8AlgCQcu6RXarCx2-ftcrWiVmti4LjW1rGdXnlq61dqFwviJSbbcTyuny0zlJCejN-4_')`,
											}}
										></div>
										<div className="absolute bottom-4 left-4 z-20">
											<span className="px-3 py-1 bg-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2 inline-block backdrop-blur-sm">
												SEO & Growth
											</span>
										</div>
									</div>

									<div className="flex flex-col gap-4">
										<h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white">
											Domina los <span className="text-primary">Resultados</span> de Búsqueda
										</h2>
										<div className="glass-panel p-5 rounded-2xl">
											<p className="text-slate-300 text-base font-normal leading-relaxed">
												No solo traemos tráfico, traemos clientes cualificados. Nuestras estrategias de SEO técnico y de contenido están diseñadas quirúrgicamente para maximizar tu visibilidad.
											</p>
										</div>

										{/* Lista de beneficios */}
										<div className="flex flex-col gap-3 mt-2">
											{["Investigación de Palabras Clave", "Optimización On-Page Técnica", "Link Building de Alta Autoridad"].map((item, i) => (
												<div key={i} className="flex items-start gap-3">
													<span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
													<p className="text-slate-200 text-base font-medium">{item}</p>
												</div>
											))}
										</div>
									</div>
								</section>
								<div className="relative z-10 flex flex-col h-full">
									<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:scale-110 transition-transform duration-300">
										<span className="material-symbols-outlined text-3xl">search_insights</span>
									</div>
									<h4 className="mb-2 text-xl font-bold text-white">Estrategia SEO</h4>
									<p className="mb-4 text-sm leading-relaxed text-gray-400">
										Posicionamiento orgánico que domina los buscadores y genera tráfico altamente cualificado.
									</p>
									<Link href="/servicios/seo" className="mt-auto inline-flex items-center text-sm font-bold text-purple-400 hover:text-white transition-colors gap-1">
										Saber más <span className="material-symbols-outlined text-lg">arrow_forward</span>
									</Link>
								</div>
							</article>

							{/* Card 3: Diseño Web */}
							<article className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 p-6 hover:border-primary/30 transition-all duration-300">
								<div className="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-10px] rounded-full bg-green-500/5 blur-2xl group-hover:bg-green-500/10 transition-all"></div>
								<div className="relative z-10 flex flex-col h-full">
									<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-green-400 group-hover:scale-110 transition-transform duration-300">
										<span className="material-symbols-outlined text-3xl">devices</span>
									</div>
									<h4 className="mb-2 text-xl font-bold text-white">Diseño Web & CRO</h4>
									<p className="mb-4 text-sm leading-relaxed text-gray-400">
										Interfaces rápidas optimizadas para la conversión. Convertimos visitas en ventas reales.
									</p>
									<Link href="/servicios/desarrollo/web" className="mt-auto inline-flex items-center text-sm font-bold text-green-400 hover:text-white transition-colors gap-1">
										Saber más <span className="material-symbols-outlined text-lg">arrow_forward</span>
									</Link>
								</div>
							</article>
						</div>
					</section>
					<section>
						{/* Separador */}
						<div className="w-full px-4">
							<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
						</div>

						{/* 4. SECCIÓN VIDEO (Caso de Éxito) */}
						<article className="flex flex-col px-4 gap-4">
							<div className="flex flex-col gap-1">
								<div className="flex items-center gap-2 mb-2">
									<span className="material-symbols-outlined text-primary">play_circle</span>
									<span className="text-primary text-sm font-bold uppercase tracking-wider">Caso de Éxito</span>
								</div>
								<h2 className="text-2xl font-bold text-white">Cómo aumentamos tu ROI</h2>
							</div>

							<div className="relative w-full rounded-lg overflow-hidden group shadow-[0_0_40px_-10px_rgba(37,140,244,0.3)] border border-white/10 aspect-video">
								{/* Aquí iría tu miniatura de video o iframe */}
								<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
									style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('${assets?.video_thumb?.image_url || "/placeholder-video.jpg"}')` }}>
								</div>
								<div className="absolute inset-0 flex items-center justify-center z-20">
									<button className="relative group/btn">
										<div className="absolute inset-0 bg-primary/50 blur-xl rounded-full scale-75 group-hover/btn:scale-110 transition-transform duration-300"></div>
										<div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover/btn:scale-105 transition-transform duration-300 border-2 border-white/20">
											<span className="material-symbols-outlined text-white text-3xl fill-1">play_arrow</span>
										</div>
									</button>
								</div>
							</div>
						</article>

						{/* 5. FAQs (Renderizadas desde Supabase) */}
						{faqs && faqs.length > 0 && (
							<article className="px-4 gap-4 flex flex-col">
								<h2 className="text-2xl font-bold text-white mb-2">Preguntas Frecuentes</h2>
								{faqs.map((faq, index) => (
									<div key={index} className="glass-panel p-4 rounded-xl">
										<h3 className="text-white font-bold mb-2">{faq.question}</h3>
										<p className="text-slate-400 text-sm">{faq.answer}</p>
									</div>
								))}
							</article>
						)}
					</section>
					<FAQ
						faqs={faqs}
					/>
				</main>

				{/* 7. FLOATING CTA */}
				<div className="fixed bottom-0 left-0 w-full p-4 z-50 bg-gradient-to-t from-background-dark via-background-dark to-transparent pt-10">
					<Link href="/contacto">
						<button className="w-full bg-primary hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transition-all">
							<span>Iniciar Proyecto</span>
							<span className="material-symbols-outlined">rocket_launch</span>
						</button>
					</Link>
				</div>

			</div>

		</>
	);
}