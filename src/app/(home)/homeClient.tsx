"use client";

import {
	jsxDEV as _jsxDEV,
	Fragment as _Fragment,
} from "react/jsx-dev-runtime";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import StructuredData from "@/components/Seo/StructuredData";
import "./home.css";

export default function HomeClient() {

	interface FaqItem {
		question: string;
		answer: string;
	}

	const faqs: FaqItem[] = [
		// --- Pregunta 1: Optimizada con "agencia de desarrollo de software" y "productos digitales" ---
		{
			question:
				'¿Qué los diferencia de otra "agencia digital" o "agencia web"?',
			answer:
				"Una agencia digital o web a menudo se enfoca en crear sitios de marketing. Nosotros somos una agencia de desarrollo de software. Eso significa que, además de sitios web, construimos productos digitales complejos: aplicaciones, sistemas de gestión interna (CRMs) y plataformas a medida que solucionan problemas reales de negocio.",
		},
		// --- Pregunta 2: Optimizada con "diseño de experiencia" ---
		{
			question: '¿Su "servicio de diseño web en México" incluye UX/UI?',
			answer:
				'Sí. Nuestro servicio de diseño web en México va más allá de lo visual. Somos una "agencia UX UI en México" dedicada. Nuestro equipo de diseño de experiencia (UX/UI) se asegura de que cada pantalla y botón sean intuitivos y accesibles para que tus usuarios logren sus objetivos.',
		},
		// --- Pregunta 3: (Ya estaba optimizada) ---
		{
			question:
				'¿Cómo adaptan los "servicios que ofrecen" a la "necesidad del cliente"?',
			answer:
				"No estandarizamos los servicios que ofrecemos. Nuestro proceso comienza con un análisis profundo para entender la verdadera necesidad del cliente. Investigamos tus objetivos y tu mercado para proponer una solución tecnológica que esté perfectamente alineada con tu negocio, asegurando que no gastes recursos en funciones innecesarias.",
		},
		// --- Pregunta 4: Optimizada con "search engine" ---
		{
			question: '¿Qué es el "desarrollo web profesional" para ustedes?',
			answer:
				"Para nosotros, el desarrollo web profesional significa crear un sitio que funciona en tres niveles. Primero, es rápido y seguro. Segundo, es fácil de usar en móviles y computadoras. Y tercero, está construido desde el código para que el search engine (Google) pueda entenderlo y posicionarlo, lo que llamamos SEO técnico.",
		},
		// --- Pregunta 5: (Ya estaba optimizada) ---
		{
			question: "Trabajo en una startup, ¿su proceso ágil me funciona?",
			answer:
				"Absolutamente. De hecho, nuestro proceso está diseñado para startups. Sabemos que necesitas moverte rápido y validar ideas ante inversionistas. Como agencia de sprints, trabajamos en ciclos cortos para entregarte avances funcionales. Esto te permite probar tu producto, conseguir financiamiento y escalar sin desperdiciar tu inversión inicial.",
		},
		// --- Pregunta 6: NUEVA PREGUNTA (para GEO y keywords semánticas) ---
		{
			question: '¿Qué es "Generative Engine Optimization (GEO)"?',
			answer:
				"Es la nueva frontera del SEO. El SEO tradicional se enfoca en el search engine (motor de búsqueda) clásico. El Generative Engine Optimization (GEO), o la optimización para motores de búsqueda generativos, prepara tu contenido para ser la respuesta de la IA. Preparamos tu web para ser la fuente de autoridad de las nuevas respuestas de IA.",
		},
	];

	return (
		<>
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-home" />
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
			<div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-dark text-white selection:bg-blue-500/30 font-display">

				{/* HERO SECTION */}
				<div className="relative flex flex-col items-center justify-center px-4 py-8">
					<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
						<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background-dark/0 to-background-dark opacity-70"></div>
						<div className="absolute top-20 right-[-20%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
						<div className="absolute top-40 left-[-10%] w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
					</div>
					<div className="relative z-10 flex flex-col items-center max-w-lg text-center">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6 backdrop-blur-sm">
							<span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
							<span className="text-xs font-medium text-gray-300">Agencia Digital #1 en México</span>
						</div>
						<h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
							Impulsamos tu <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 from-blue-500 to-blue-300">Crecimiento Digital.</span>
						</h2>
						<p className="mb-8 text-lg font-normal leading-relaxed text-gray-400 max-w-[90%]">
							Expertos en Desarrollo de Software, SEO y CRO. Convertimos visitantes en clientes para empresas ambiciosas.
						</p>
						<div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
							<button className="flex w-full sm:w-auto h-14 items-center justify-center rounded-full bg-blue-500 px-8 text-base font-bold text-white hover:text-blue-500 shadow-lg shadow-blue-500/25 transition-transform active:scale-95 hover:bg-white">
								Solicitar Auditoría
							</button>
							<button className="flex w-full sm:w-auto h-14 items-center justify-center rounded-full border border-blue-500/50 bg-transparent px-8 text-base font-bold text-blue-500 transition-colors hover:bg-blue-500/10 active:scale-95">
								Ver Servicios
							</button>
						</div>
					</div>
				</div>

				{/* SERVICES SECTION */}
				<section className="relative z-10 px-4 pt-4 pb-8">
					<div className="flex items-center justify-between mb-6">
						<h3 className="text-2xl font-bold text-white">Nuestros Servicios</h3>
						<a className="text-sm font-medium text-blue-500 hover:text-blue-300" href="#">Ver todo</a>
					</div>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<div className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 p-6 hover:border-blue-500/30 transition-all duration-300">
							<div className="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-10px] rounded-full bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-all"></div>
							<div className="relative z-10 flex flex-col h-full">
								<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-blue-500 group-hover:scale-110 transition-transform duration-300">
									<span className="material-symbols-outlined" style={{ fontSize: '32px' }}>terminal</span>
								</div>
								<h4 className="mb-2 text-xl font-bold text-white">Desarrollo de Software</h4>
								<p className="mb-4 text-sm leading-relaxed text-gray-400">
									Soluciones a la medida, escalables y seguras. Desde apps móviles hasta plataformas enterprise.
								</p>
								<a className="mt-auto inline-flex items-center text-sm font-bold text-blue-500 hover:text-white transition-colors gap-1" href="#">
									Saber más
									<span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
								</a>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 p-6 hover:border-blue-500/30 transition-all duration-300">
							<div className="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-10px] rounded-full bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10 transition-all"></div>
							<div className="relative z-10 flex flex-col h-full">
								<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-blue-500 group-hover:scale-110 transition-transform duration-300">
									<span className="material-symbols-outlined" style={{ fontSize: '32px' }}>search_insights</span>
								</div>
								<h4 className="mb-2 text-xl font-bold text-white">Estrategia SEO</h4>
								<p className="mb-4 text-sm leading-relaxed text-gray-400">
									Posicionamiento orgánico que domina los buscadores y genera tráfico altamente cualificado.
								</p>
								<a className="mt-auto inline-flex items-center text-sm font-bold text-blue-500 hover:text-white transition-colors gap-1" href="#">
									Saber más
									<span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
								</a>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 p-6 hover:border-blue-500/30 transition-all duration-300">
							<div className="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-10px] rounded-full bg-green-500/5 blur-2xl group-hover:bg-green-500/10 transition-all"></div>
							<div className="relative z-10 flex flex-col h-full">
								<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-blue-500 group-hover:scale-110 transition-transform duration-300">
									<span className="material-symbols-outlined" style={{ fontSize: '32px' }}>devices</span>
								</div>
								<h4 className="mb-2 text-xl font-bold text-white">Diseño Web &amp; CRO</h4>
								<p className="mb-4 text-sm leading-relaxed text-gray-400">
									Interfaces rápidas optimizadas para la conversión. Convertimos visitas en ventas reales.
								</p>
								<a className="mt-auto inline-flex items-center text-sm font-bold text-blue-500 hover:text-white transition-colors gap-1" href="#">
									Saber más
									<span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* TRUST SECTION */}
				<section className="px-4 py-6">
					<p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Confían en nosotros</p>
					<div className="flex justify-center gap-6 opacity-40 grayscale">
						<div className="h-6 w-20 rounded bg-white/20"></div>
						<div className="h-6 w-20 rounded bg-white/20"></div>
						<div className="h-6 w-20 rounded bg-white/20"></div>
					</div>
				</section>
				<div className="flex flex-col pt-6 pb-2 px-4">
					<h2 className="text-white tracking-tight text-[28px] font-bold leading-tight text-left">
						¿Por qué <span className="text-gradient">JEG Dev Studios?</span>
					</h2>
					<p className="text-[#9cabba] text-sm font-medium pt-2">
						No somos otra agencia más. Somos tu partner técnico.
					</p>
				</div>

				{/* GRID COMPARATIVO (Cards) */}
				<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 px-4 py-4">

					{/* Card JEG (Recomendado) */}
					<div className="relative flex flex-1 flex-col gap-4 rounded-xl border border-blue-500/40 bg-surface-dark p-5 shadow-[0_0_30px_-10px_rgba(37,140,244,0.15)] overflow-hidden">
						<div className="absolute -right-12 -top-12 h-24 w-24 bg-blue-500/20 blur-2xl rounded-full pointer-events-none"></div>
						<div className="flex flex-col gap-1 relative z-10">
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

				{/* SECCIÓN PROCESO */}
				<div className="flex flex-col px-4">
					<div className="flex items-center gap-2 mb-2">
						<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-500 uppercase tracking-wider">Nuestro Proceso</span>
					</div>
					<h2 className="text-white tracking-tight text-[28px] font-bold leading-tight text-left">
						Metodología Ágil
					</h2>
					<p className="text-[#9cabba] text-base font-normal leading-normal pt-2 pb-6">
						Transparencia total. Sin cajas negras. Así llevamos tu idea a producción.
					</p>
				</div>

				{/* TIMELINE */}
				<div className="relative px-4 pb-8">
					<div className="absolute left-[34px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue/50 to-transparent"></div>

					{/* Paso 1 */}
					<div className="relative flex gap-5 mb-10 group">
						<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black border-2 border-blue-500 shadow-[0_0_15px_-3px_rgba(37,140,244,0.4)]">
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
						<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black border-2 border-blue-500/50 shadow-lg shadow-black/50">
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
						<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black border-2 border-blue-500/50 shadow-lg shadow-black/50">
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
						<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 shadow-[0_0_20px_0px_rgba(37,140,244,0.5)]">
							<span className="material-symbols-outlined text-white text-[20px]">rocket_launch</span>
						</div>
						<div className="flex flex-col pt-1">
							<h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">Launch &amp; CRO</h3>
							<p className="text-sm text-[#9cabba] leading-relaxed">
								Despliegue a producción y monitoreo continuo para optimización de conversión (CRO).
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="relative flex flex-col items-center px-4 py-8 flex-grow">
				<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background-dark/0 to-background-dark opacity-70"></div>
					<div className="absolute top-20 right-[-20%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
					<div className="absolute top-40 left-[-10%] w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
				</div>

				<div className="relative z-10 w-full max-w-lg">
					<div className="text-center mb-8">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-4 backdrop-blur-sm">
							<span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
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
								<input className="block w-full rounded-xl border border-white/10 bg-surface-dark p-4 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" id="name" placeholder="Tu nombre completo" type="text" />
								<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" style={{ fontSize: '20px' }}>person</span>
							</div>
						</div>

						<div className="space-y-1">
							<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1" htmlFor="email">Email</label>
							<div className="relative">
								<input className="block w-full rounded-xl border border-white/10 bg-surface-dark p-4 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" id="email" placeholder="tu@empresa.com" type="email" />
								<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" style={{ fontSize: '20px' }}>mail</span>
							</div>
						</div>

						<div className="space-y-1">
							<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1" htmlFor="service">Servicio de interés</label>
							<div className="relative">
								<select className="block w-full rounded-xl border border-white/10 bg-surface-dark p-4 text-white appearance-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-none" id="service">
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
							<textarea className="block w-full rounded-xl border border-white/10 bg-surface-dark p-4 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none" id="message" placeholder="Cuéntanos los detalles..." rows={4}></textarea>
						</div>

						<button className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-transform active:scale-95 hover:brightness-110" type="button">
							Enviar Solicitud
							<span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
						</button>
					</form>

					<div className="mt-8 flex flex-col gap-4 border-t border-white/5 pt-8">
						<div className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark border border-white/5">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
								<span className="material-symbols-outlined" style={{ fontSize: '20px' }}>call</span>
							</div>
							<div>
								<p className="text-xs text-gray-500">Llámanos directamente</p>
								<p className="text-sm font-semibold text-white">+52 55 1234 5678</p>
							</div>
						</div>
						<div className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark border border-white/5">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
								<span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>
							</div>
							<div>
								<p className="text-xs text-gray-500">Escríbenos un correo</p>
								<p className="text-sm font-semibold text-white">contacto@jegdevstudios.com</p>
							</div>
						</div>
					</div>
				</div>
				{/* FAQ SECTION */}
        <section className="flex flex-col gap-6">
          <div className="text-center mb-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-4 backdrop-blur-sm">
              <span className="text-xs font-medium text-blue-500">Dudas Comunes</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Preguntas Frecuentes</h2>
            <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto">
              Resolvemos tus inquietudes sobre desarrollo, SEO y procesos de trabajo.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            {/* Pregunta Abierta */}
            <div className="rounded-2xl bg-surface-dark border border-blue-500/30 p-5 transition-all">
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-bold text-white text-lg">¿Cuánto tarda un desarrollo web?</h3>
                <span className="material-symbols-outlined text-blue-500" style={{ fontSize: '24px' }}>remove</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Depende de la complejidad. Una landing page toma 1-2 semanas, mientras que una plataforma a medida puede tomar de 2 a 4 meses. Entregamos cronogramas detallados antes de iniciar.
              </p>
            </div>

            {/* Preguntas Cerradas */}
            <div className="rounded-2xl bg-surface-dark border border-white/5 p-5 hover:border-white/10 transition-all cursor-pointer">
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-bold text-white text-base">¿Qué incluye la estrategia SEO?</h3>
                <span className="material-symbols-outlined text-gray-500" style={{ fontSize: '24px' }}>add</span>
              </div>
            </div>
            
            <div className="rounded-2xl bg-surface-dark border border-white/5 p-5 hover:border-white/10 transition-all cursor-pointer">
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-bold text-white text-base">¿Ofrecen mantenimiento?</h3>
                <span className="material-symbols-outlined text-gray-500" style={{ fontSize: '24px' }}>add</span>
              </div>
            </div>
            
            <div className="rounded-2xl bg-surface-dark border border-white/5 p-5 hover:border-white/10 transition-all cursor-pointer">
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-bold text-white text-base">¿Cómo se realizan los pagos?</h3>
                <span className="material-symbols-outlined text-gray-500" style={{ fontSize: '24px' }}>add</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-blue-500 to-blue-700 px-6 py-12 text-center shadow-2xl shadow-blue-500/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 -mr-12 -mt-12 h-40 w-40 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-12 -mb-12 h-40 w-40 rounded-full bg-black/20 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
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
			</div>
		</>
	);
}
