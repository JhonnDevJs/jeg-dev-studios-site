"use client";

// Imports Hooks
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

// Import Custom Hooks


// Imports libs

// Import Types
import { Post } from "@/types";
interface HomeClientProps {
	posts: Post[];
	assets: any;
	initialFaqs: any; // You can replace 'any' with a more specific type if available
}

// Import Components
import BlogSection from "@/components/Blog/BlogSection";
import ContactForm from "@/components/Forms/ContactForm";
import StructuredData from "@/components/Seo/StructuredData";
import FAQ from "@/components/Seo/FAQ";

// Imports Assets


// Import Styles custom

import "./home.css";


export default function HomeClient({ initialFaqs, assets, posts: postsToShow }: HomeClientProps) {

	// Lógica simple para detectar temporada (opcional)
	const date = new Date();
	const month = date.getMonth(); // 0 = Enero, 10 = Noviembre, 11 = Diciembre

	let heroBg = assets?.hero_bg_atemporal?.image_url;

	if (month === 10) { // Noviembre (Día de muertos / Halloween pasado)
		heroBg = assets?.hero_bg_halloween?.image_url || heroBg;
	} else if (month === 11) { // Diciembre (Navidad)
		heroBg = assets?.hero_bg_christmas?.image_url || heroBg;
	}

	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	return (
		<>
			<StructuredData data={initialFaqs} type="FAQPage" idPage="faqs-home" />
			<Script
				id="structured-data-video"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "VideoObject",
						name: "JEG Dev Studios | Agencia de Desarrollo Web y Software en México",
						description:
							"Descubre cómo JEG Dev Studios transforma tus ideas en soluciones digitales robustas",
						thumbnailUrl:
							"https://www.jegdevstudios.com/path/a/miniatura-del-video.jpg",
						uploadDate: "2025-10-16T15:00:00Z",
						duration: "PT1M0S",
						contentUrl: "https://www.youtube.com/watch?v=60pib_g34CA",
						embedUrl:
							"https://www.youtube.com/embed/60pib_g34CA?si=vDoEcQGRUt0iU6YD",
						publisher: {
							"@type": "Organization",
							name: "JEG Dev Studios",
							logo: {
								"@type": "ImageObject",
								url: "https://www.jegdevstudios.com/icons-SEO/logo.webp",
							},
						},
					}),
				}}
			/>

			{/* HERO SECTION */}
			<section className="relative flex flex-col items-center md:items-start justify-center px-4 md:px-16 py-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${heroBg}')` }}>
				<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background-dark/0 to-background-dark opacity-70"></div>
					<div className="absolute top-20 right-[-20%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
					<div className="absolute top-40 left-[-10%] w-48 h-48 bg-blue-600/1 rounded-full blur-3xl"></div>
				</div>
				<div className="relative z-1 flex flex-col items-center md:items-start max-w-lg text-center md:text-left">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6 backdrop-blur-sm">
						<span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
						<span className="text-xs font-medium text-gray-300">Agencia Digital #1 en México</span>
					</div>
					<h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
						Impulsamos tu <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Crecimiento Digital.</span>
					</h2>
					<p className="mb-8 text-lg font-normal leading-relaxed text-gray-100 max-w-[90%]">
						Expertos en Desarrollo de Software, SEO/GEO y Diseño. Convertimos visitantes en clientes para empresas ambiciosas.
					</p>
					<div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
						<Link href={"/contacto"} className="flex w-full sm:w-auto h-14 items-center justify-center rounded-full bg-blue-500 px-8 text-base font-bold text-white hover:text-blue-500 shadow-lg shadow-blue-500/25 transition-transform active:scale-95 hover:bg-white">
							Solicitar Auditoría
						</Link>
						<Link href="/servicios" className="flex w-full sm:w-auto h-14 items-center justify-center rounded-full border border-blue-500/50 bg-transparent px-8 text-base font-bold text-blue-500 transition-colors hover:bg-blue-500/10 active:scale-95">
							Ver Servicios
						</Link>
					</div>
				</div>
			</section>

			<div className="relative flex flex-col items-center px-4 md:px-16 py-8 flex-grow">

				{/* SERVICES SECTION */}
				<section className="relative z-1 pb-16 ">
					<div className="flex items-center justify-between mb-6">
						<h3 className="text-2xl font-bold text-white">Nuestros Servicios</h3>
						<Link href="/servicios" className="text-sm font-medium text-blue-500 hover:text-blue-300">
							Ver todo
						</Link>
					</div>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{/* Card 1: Software */}
						<article className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 p-6 hover:border-blue-500/30 transition-all duration-300 flex flex-col">
							<div className="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-10px] rounded-full bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-all"></div>

							{/* 3. SECCIÓN DESARROLLO (Código) */}
							<section className="flex flex-col gap-5 h-full">
								<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl group">
									<div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent z-1"></div>
									{/* IMAGEN DINÁMICA DE SUPABASE */}
									<div
										className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
										style={{
											backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6CnvFbqMpxRj7hn0k4n9YbiZuNtRx0rD7wVMA7-OluDsgWlWWH8MONL5e2zq2y7Z3uvlHAFq9vatxOllaY_C8IKjC6lxFFFcq_5BydxnGuiKJRezZQk1MDJA8a5QwmHTa0LQIfAE4w-WTF6uy1y13nUUAW460tncmfTQs6j14xIFxVcqEgud8nKFaGf565wCPGk8hsZ9GddOpJFdP4i16YIbAnGo11WgKSHExVqY3EkvX5EbDgJBtAwykTPQ9MxYJl4N9SwtaFhLj')`,
										}}
									></div>
									<div className="absolute bottom-4 left-4 z-2">
										<span className="px-3 py-1 bg-purple-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2 inline-block backdrop-blur-sm">
											Desarrollo App & Web
										</span>
									</div>
								</div>

								<div className="flex flex-col gap-4 flex-grow">
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
									<Link href="/servicios/desarrollo" className="mt-auto inline-flex items-center text-sm font-bold text-purple-400 hover:text-white transition-colors gap-1 pt-2">
										Saber más <span className="material-symbols-outlined text-lg">arrow_forward</span>
									</Link>
								</div>
							</section>
						</article>

						{/* Card 2: SEO */}
						<article className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 p-6 hover:border-blue-500/30 transition-all duration-300 flex flex-col">
							<div className="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-10px] rounded-full bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10 transition-all"></div>
							{/* 2. SECCIÓN SEO & GROWTH (Conectada a Supabase) */}
							<section className="flex flex-col gap-5 h-full">
								<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl group">
									<div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent z-1"></div>
									{/* IMAGEN DINÁMICA DE SUPABASE */}
									<div
										className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
										style={{
											backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS4cyMOiKUDMT7rM4GCbZvrWasa-8UCzBS69LYi3cGXtjc7id67gfuJX28lHCMfic5h1TmDrM5EdQvfHcc2n9Jri-IzHxv3qUpkSef4gYMobYdWcH4loK7yTAFlqWXaAXtfSz3cwxSQ4xYDER96YYawWNM7GPb2LtxogeKlf-5OFDkyBDjgs94I9tjFs2ex4YMu0tbnrTv8AlgCQcu6RXarCx2-ftcrWiVmti4LjW1rGdXnlq61dqFwviJSbbcTyuny0zlJCejN-4_')`,
										}}
									></div>
									<div className="absolute bottom-4 left-4 z-2">
										<span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2 inline-block backdrop-blur-sm">
											SEO & Growth
										</span>
									</div>
								</div>

								<div className="flex flex-col gap-4 flex-grow">
									<h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white">
										Domina los <span className="text-blue-500">Resultados</span> de Búsqueda
									</h2>
									<div className="glass-panel p-5 rounded-2xl border-blue-500/10 bg-blue-500/5">
										<p className="text-slate-300 text-base font-normal leading-relaxed">
											No solo traemos tráfico, traemos clientes cualificados. Nuestras estrategias de SEO técnico y de contenido están diseñadas quirúrgicamente para maximizar tu visibilidad.
										</p>
									</div>

									{/* Lista de beneficios */}
									<div className="flex flex-col gap-3 mt-2">
										{["Investigación de Palabras Clave", "Optimización On-Page Técnica", "Link Building de Alta Autoridad"].map((item, i) => (
											<div key={i} className="flex items-start gap-3">
												<span className="material-symbols-outlined text-blue-500 mt-0.5">check_circle</span>
												<p className="text-slate-200 text-base font-medium">{item}</p>
											</div>
										))}
									</div>
									<Link href="/servicios/seo" className="mt-auto inline-flex items-center text-sm font-bold text-blue-500 hover:text-white transition-colors gap-1 pt-2">
										Saber más <span className="material-symbols-outlined text-lg">arrow_forward</span>
									</Link>
								</div>
							</section>
						</article>

						{/* Card 3: Diseño Web */}
						<article className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 p-6 hover:border-blue-500/30 transition-all duration-300 flex flex-col">
							<div className="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-10px] rounded-full bg-green-500/5 blur-2xl group-hover:bg-green-500/10 transition-all"></div>
							<section className="flex flex-col gap-5 h-full">
								<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl group">
									<div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent z-1"></div>
									{/* IMAGEN DINÁMICA */}
									<div
										className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
										style={{
											backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOruKW6ROXy0XMQNA-o4to_eQFwtAa6wVfhNIfw9EYSb0FDrOFXwoAeprHlJhNTMeXptRARPE4RhlNkOkmRVg-h5PEo6kkeU-NWg-Tb0v0q3fU7_6rOY5nWnRkwi76tvhICTGtJw8DPstRWEjJt1pI-C6ou7WFWlwCPlHvF4KA0-LNL_yKQUfjkKMLY5Rzges6CweEJgD05o0FJq9O7dlYX7zwavWhyZI0GNrQdhbZUgcNfnuYoAS_pzSNDMC7lX33jB_-fGr9DRUt')`,
										}}
									></div>
									<div className="absolute bottom-4 left-4 z-2">
										<span className="px-3 py-1 bg-green-500/90 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2 inline-block backdrop-blur-sm">
											Diseño & Branding
										</span>
									</div>
								</div>

								<div className="flex flex-col gap-4 flex-grow">
									<h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white">
										Diseño que <span className="text-green-400">Enamora</span> y Vende
									</h2>
									<div className="glass-panel p-5 rounded-2xl border-green-500/10 bg-green-500/5">
										<p className="text-slate-300 text-base font-normal leading-relaxed">
											Creamos experiencias visuales memorables. Desde la identidad de tu marca hasta la interfaz de tu producto, cada pixel cuenta para conectar con tu audiencia.
										</p>
									</div>

									<div className="flex flex-col gap-3 mt-2">
										{["Diseño UX/UI Intuitivo", "Branding e Identidad Visual", "Material Publicitario de Alto Impacto"].map((item, i) => (
											<div key={i} className="flex items-start gap-3">
												<span className="material-symbols-outlined text-green-400 mt-0.5">check_circle</span>
												<p className="text-slate-200 text-base font-medium">{item}</p>
											</div>
										))}
									</div>
									<Link href="/servicios/diseno" className="mt-auto inline-flex items-center text-sm font-bold text-green-400 hover:text-white transition-colors gap-1 pt-2">
										Saber más <span className="material-symbols-outlined text-lg">arrow_forward</span>
									</Link>
								</div>
							</section>
						</article>
					</div>
				</section>

				{/* TRUST SECTION */}
				<section className="hidden py-6">
					<p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Confían en nosotros</p>
					<div className="flex justify-center gap-6 opacity-40 grayscale">
						<div className="h-6 w-20 rounded bg-white/20"></div>
						<div className="h-6 w-20 rounded bg-white/20"></div>
						<div className="h-6 w-20 rounded bg-white/20"></div>
					</div>
				</section>

				{/* WHY JEG */}
				<section className="flex flex-col justify-center items-center w-full">
					<div className="flex flex-col pt-6 pb-2">
						<h2 className="text-white tracking-tight text-[28px] font-bold leading-tight text-left">
							¿Por qué <span className="text-gradient">JEG Dev Studios?</span>
						</h2>
						<p className="text-[#9cabba] text-sm font-medium pt-2">
							No somos otra agencia más. Somos tu partner técnico.
						</p>
					</div>
					{/* GRID COMPARATIVO (Cards) */}
					<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] w-full gap-4 py-4 ">

						{/* Card JEG (Recomendado) */}
						<div className="relative flex flex-1 flex-col gap-4 rounded-xl border border-blue-500/40 bg-surface-dark p-5 shadow-[0_0_30px_-10px_rgba(37,140,244,0.15)] overflow-hidden">
							<div className="absolute -right-12 -top-12 h-24 w-24 bg-blue-500/20 blur-2xl rounded-full pointer-events-none"></div>
							<div className="flex flex-col gap-1 relative z-1">
								<div className="flex items-center justify-between">
									<h1 className="text-white text-sm font-bold leading-tight opacity-90">JEG Dev Studios</h1>
									<p className="text-white text-[10px] uppercase font-bold tracking-wider rounded-full bg-blue-500 px-2.5 py-1 text-center shadow-lg shadow-blue-500/20">Recomendado</p>
								</div>
								<p className="flex items-baseline gap-1 text-white mt-1">
									<span className="text-white text-3xl font-black leading-tight tracking-[-0.033em]">Expertos</span>
									<span className="text-white/60 text-sm font-medium leading-tight">/ garantizado</span>
								</p>
							</div>
							<div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent w-full my-1"></div>
							<div className="flex flex-col gap-3">
								{[
									"Carga < 1s (Core Vitals)",
									"Código SEO Nativo",
									"Agile & Transparente",
									"Analytics Custom"
								].map((item, index) => (
									<div key={index} className="text-[14px] font-medium leading-normal flex items-start gap-3 text-white">
										<span className="material-symbols-outlined text-blue-500 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
										<span>{item}</span>
									</div>
								))}
							</div>
						</div>

						{/* Card Otras Agencias */}
						<div className="flex flex-1 flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark/50 p-5 opacity-90 grayscale-[0.3]">
							<div className="flex flex-col gap-1">
								<h1 className="text-[#9cabba] text-sm font-bold leading-tight">Otras Agencias</h1>
								<p className="flex items-baseline gap-1 text-[#9cabba]">
									<span className="text-white/80 text-3xl font-black leading-tight tracking-[-0.033em]">Genéricos</span>
									<span className="text-[#9cabba]/60 text-sm font-medium leading-tight">/ variable</span>
								</p>
							</div>
							<div className="h-px bg-border-dark w-full my-1"></div>
							<div className="flex flex-col gap-3">
								{[
									"Carga > 3s (Lento)",
									"Dependencia de Plugins",
									"Waterfall / Burocracia",
									"Analytics Básicos"
								].map((item, index) => (
									<div key={index} className="text-[14px] font-normal leading-normal flex items-start gap-3 text-[#9cabba]">
										<span className="material-symbols-outlined text-red-500/80 shrink-0">cancel</span>
										<span>{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="h-8"></div>
				</section>

				{/* SECCIÓN PROCESO */}
				<section className="flex flex-col justify-center items-center w-full pb-12">
					<div className="flex items-center gap-2 mb-2">
						<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-500 uppercase tracking-wider">Nuestro Proceso</span>
					</div>
					<h2 className="text-white tracking-tight text-[28px] font-bold leading-tight text-left">
						Metodología Ágil
					</h2>
					<p className="text-[#9cabba] text-base font-normal leading-normal pt-2 pb-6">
						Transparencia total. Sin cajas negras. Así llevamos tu idea a producción.
					</p>
					<div className="flex flex-col md:flex-row w-full gap-4">
						{/* TIMELINE */}
						<article className="relative w-full md:flex-1 px-4 pb-8 md:pb-0">
							<div className="absolute left-[34px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue/50 to-transparent"></div>

							{/* Paso 1 */}
							<div className="relative flex gap-5 mb-10 group">
								<div className="relative z-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black border-2 border-blue-500 shadow-[0_0_15px_-3px_rgba(37,140,244,0.4)]">
									<span className="material-symbols-outlined text-blue-500 text-[20px]">manage_search</span>
								</div>
								<div className="flex flex-col pt-1">
									<h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">Diagnóstico y Estrategia</h3>
									<p className="text-sm text-[#9cabba] leading-relaxed">
										Auditoría técnica inicial y definición de KPIs. Entendemos el problema antes de escribir código.
									</p>
								</div>
							</div>

							{/* Paso 2 */}
							<div className="relative flex gap-5 mb-10 group">
								<div className="relative z-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black border-2 border-blue-500/50 shadow-lg shadow-black/50">
									<span className="material-symbols-outlined text-white text-[20px]">calendar_month</span>
								</div>
								<div className="flex flex-col pt-1">
									<h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">Sprint Planning</h3>
									<p className="text-sm text-[#9cabba] leading-relaxed">
										Roadmap dividido en entregables de 2 semanas. Priorizamos valor comercial inmediato.
									</p>
								</div>
							</div>

							{/* Paso 3 */}
							<div className="relative flex gap-5 mb-10 group">
								<div className="relative z-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black border-2 border-blue-500/50 shadow-lg shadow-black/50">
									<span className="material-symbols-outlined text-white text-[20px]">code_blocks</span>
								</div>
								<div className="flex flex-col pt-1">
									<h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">Desarrollo Iterativo</h3>
									<p className="text-sm text-[#9cabba] leading-relaxed">
										Código limpio y escalable. Reuniones semanales para demo de avances y feedback real.
									</p>
								</div>
							</div>

							{/* Paso 4 */}
							<div className="relative flex gap-5 group">
								<div className="relative z-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 shadow-[0_0_20px_0px_rgba(37,140,244,0.5)]">
									<span className="material-symbols-outlined text-white text-[20px]">rocket_launch</span>
								</div>
								<div className="flex flex-col pt-1">
									<h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">Launch &amp; CRO</h3>
									<p className="text-sm text-[#9cabba] leading-relaxed">
										Despliegue a producción y monitoreo continuo para optimización de conversión (CRO).
									</p>
								</div>
							</div>
						</article>

						{/* 4. SECCIÓN VIDEO (Caso de Éxito) */}
						<article className="flex flex-col w-full md:flex-1 gap-4">
							<div className="flex flex-col gap-1">
								<div className="flex items-center gap-2 mb-2">
									<span className="material-symbols-outlined text-blue-500">play_circle</span>
									<h2 className="text-2xl font-bold text-white">Cómo aumentamos tu ROI</h2>
								</div>
							</div>

							<div className="relative w-full rounded-lg overflow-hidden group shadow-[0_0_40px_-10px_rgba(37,140,244,0.3)] border border-white/10 aspect-video">
								<iframe
									className="w-full h-full"
									src="https://www.youtube.com/embed/60pib_g34CA?si=bDdRfBVO6nFRqdFl&controls=0&showinfo=0&rel=0"
									title="Video de presentación de JEG Dev Studios"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
									loading="lazy"
								></iframe>
							</div>
						</article>
					</div>
				</section>

				{/* CONTACT FORM */}

				<section className="flex flex-col justify-center items-center w-full">
					<div className="text-center mb-8">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-4 backdrop-blur-sm">
							<span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
							<span className="text-xs font-medium text-gray-300">Respuesta en menos de 24h</span>
						</div>
						<h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-3">
							Ponte en Contacto
						</h2>
						<p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
							¿Tienes un proyecto en mente? Escríbenos y hagamos crecer tu negocio digital.
						</p>
					</div>
					<article className="relative flex flex-col justify-center items-center w-full">

						<div className="relative z-1 flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">

							<ContactForm />

							<div className="flex flex-col gap-4 w-full lg:w-80 shrink-0 border-t lg:border-t-0 border-white/5 pt-8 lg:pt-0 mt-8 lg:mt-0">
								<div className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark border border-white/5">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
										<span className="material-symbols-outlined" style={{ fontSize: '20px' }}>message</span>
									</div>
									<div>
										<p className="text-xs text-gray-300">Envíanos un mensaje vía WhatsApp</p>
										<Link href={"https://wa.me/message/IFBW3ARPBITWA1"} className="text-sm font-semibold text-white">Clic aquí para enviar mensaje</Link>
									</div>
								</div>
								<div className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark border border-white/5">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
										<span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>
									</div>
									<div>
										<p className="text-xs text-gray-300">Escríbenos un correo</p>
										<Link href={"mailto:contacto@jegdevstudios.com"} className="text-sm font-semibold text-white">Clic aquí para copiar correo</Link>
									</div>
								</div>
								<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-dark border border-white/5">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
										<span className="material-symbols-outlined" style={{ fontSize: '20px' }}>link</span>
									</div>
									<div>
										<p className="text-xs text-gray-300">Siguenos</p>
										<div className="flex flex-col gap-4 pt-4">

											<Link
												className="flex text-2xl gap-4 no-underline"
												href="https://www.facebook.com/JEGDevStudios"
												target="_blank"
												rel="noopener noreferrer"
												title="Enlace a página de facebook de JEG Dev studios"
												aria-label="Enlace a página de facebook de JEG Dev studios"
												aria-labelledby="facebook"
												tabIndex={0}
											><span className="icon-facebook __icons-color"></span> <span className="text-sm font-semibold text-white">Facebook</span></Link>
											<Link
												className="flex text-2xl gap-4 no-underline"
												href="https://instagram.com/jegdevstudios/"
												target="_blank"
												rel="noopener noreferrer"
												title="Enlace a perfil de Instagram de JEG Dev studios"
												aria-label="Enlace a perfil de Instagram de JEG Dev studios"
												aria-labelledby="instagram"
												tabIndex={0}
											><span className=" icon-instagram __icons-color"></span> <span className="text-sm font-semibold text-white">Instagram</span></Link>
											<Link
												className="flex text-2xl gap-4 no-underline"
												href="https://linkedin.com/company/jegdevstudios"
												target="_blank"
												rel="noopener noreferrer"
												title="Enlace a perfil de linkedin de JEG Dev studios"
												aria-label="Enlace a perfil de linkedin de JEG Dev studios"
												aria-labelledby="linkedin"
												tabIndex={0}
											><span className=" icon-linkedin-no-bg __icons-color"></span> <span className="text-sm font-semibold text-white">LinkedIn</span></Link>
											<Link
												className="flex text-2xl gap-4 no-underline"
												href="https://x.com/JEGDevStudios"
												target="_blank"
												rel="noopener noreferrer"
												title="Enlace a perfil de github de JEG Dev studios"
												aria-label="Enlace a perfil de x (twitter) de JEG Dev studios"
												aria-labelledby="github"
												tabIndex={0}
											><span className=" icon-x __icons-color"></span> <span className="text-sm font-semibold text-white">X (Twitter)</span></Link>
											<Link
												className="flex text-2xl gap-4 no-underline"
												href="https://www.tiktok.com/@jeg.dev.studios"
												target="_blank"
												rel="noopener noreferrer"
												title="Enlace a perfil de TikTok de JEG Dev studios"
												aria-label="Enlace a perfil de TikTok de JEG Dev studios"
												aria-labelledby="TikTok"
												tabIndex={0}
											><span className=" icon-tiktok __icons-color"></span> <span className="text-sm font-semibold text-white">TikTok</span></Link>
											<Link
												className="flex text-2xl gap-4 no-underline"
												href="https://www.youtube.com/@jegdevstudios"
												target="_blank"
												rel="noopener noreferrer"
												title="Enlace a canal de Youtube de JEG Dev studios"
												aria-label="Enlace a canal de Youtube de JEG Dev studios"
												aria-labelledby="Youtube"
												tabIndex={0}
											><span className=" icon-youtube __icons-color"></span> <span className="text-sm font-semibold text-white">Youtube</span></Link>
											<Link
												className="flex text-2xl gap-4 no-underline"
												href="https://github.com/JEGDevStudios"
												target="_blank"
												rel="noopener noreferrer"
												title="Enlace a perfil de github de JEG Dev studios"
												aria-label="Enlace a perfil de github de JEG Dev studios"
												aria-labelledby="github"
												tabIndex={0}
											><span className=" icon-github __icons-color"></span> <span className="text-sm font-semibold text-white">GitHub</span></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</article>
				</section>

				{/* FAQ SECTION */}
				<FAQ
					faqs={initialFaqs}
				/>

				{/* CTA SECTION */}
				<section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-blue-500 to-blue-700 w-full px-6 py-12 mb-12 text-center shadow-2xl shadow-blue-500/20">
					<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-90 mix-blend-overlay"></div>
					<div className="absolute top-0 right-0 -mr-12 -mt-12 h-40 w-40 rounded-full bg-white/35 blur-3xl"></div>
					<div className="absolute bottom-0 left-0 -ml-12 -mb-12 h-40 w-40 rounded-full bg-black/40 blur-3xl"></div>

					<div className="relative z-1 flex flex-col items-center">
						<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md shadow-inner border border-white/20">
							<span className="material-symbols-outlined text-white" style={{ fontSize: '36px' }}>rocket_launch</span>
						</div>
						<h2 className="mb-4 text-3xl font-extrabold text-white leading-tight">
							¿Listo para despegar?
						</h2>
						<p className="mb-8 text-blue-100 font-medium leading-relaxed">
							Agenda una auditoría gratuita y descubre cómo podemos potenciar tu negocio digitalmente.
						</p>
						<button className="w-full rounded-xl bg-white py-4 px-6 text-base font-bold text-blue-500 shadow-xl transition-transform hover:scale-[1.02] active:scale-95">
							Solicitar Cotización Ahora
						</button>
						<p className="mt-4 text-xs text-blue-200/80">
							Respuesta en menos de 24 horas
						</p>
					</div>
				</section>

				{mounted && postsToShow.length > 0 && (
					<BlogSection
						posts={postsToShow
							.map((post: Post) => {
								// Mapeamos las propiedades de Post a BlogPost
								if (post.title && post.link && post.pubDate) {
									return {
										...post, // Pasamos todas las propiedades originales
										title: post.title,
										link: post.link,
										pubDate: post.pubDate,
										contentSnippet: post.excerpt,
										// CORRECCIÓN AQUÍ:
										// Si imageUrl es null, lo convertimos a undefined usando '??'
										imageUrl: post.imageUrl ?? undefined,
									};
								}
								return null;
							})
							.filter((post): post is NonNullable<typeof post> => post !== null)}
					/>
				)}
			</div>

		</>
	);
}
