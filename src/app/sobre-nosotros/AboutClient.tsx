"use client";
import Link from "next/link";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import Script from "next/script";
import Image from "next/image";
import "./AboutClient.css";

interface AboutClientProps {
	initialFaqs: any;
}

export default function AboutClient({ initialFaqs }: AboutClientProps) {
	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-about-us" />
			<StructuredData data={initialFaqs} type="FAQPage" idPage="faqs-about" />
			<Script
				id="structured-data-person"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Jhonatan Espinal",
						url: "https://www.jegdevstudios.com/sobre-nosotros",
						image:
							"https://jhoneg-17.github.io/JhonDev/src/assets/img/fotoperfil/foto-jhonatan-espinal.webp",
						jobTitle: "CEO Fundador y Desarrollador Full-Stack",
						worksFor: {
							"@type": "Organization",
							name: "JEG Dev Studios",
						},
						sameAs: [
							"https://www.linkedin.com/in/jhoneg/",
							"https://jhoneg-17.github.io/JhonDev/",
						],
					}),
				}}
			/>
			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Nosotros.webp"
					alt="Sobre Nosotros - JEG Dev Studios"
					width={2000}
					height={600}
					className="w-full h-auto"
				/>
			</section>
			<main className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased min-h-screen flex flex-col w-full px-4 md:px-16">


				{/* 2. HERO SECTION */}
				<section className=" pt-6 pb-4">
					<h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-extrabold leading-tight text-left mb-4">
						Transformando ideas en <span className="text-blue-500 bg-blue-500/10 px-1 rounded-md">Realidades Digitales</span>
					</h1>
					<p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
						Somos <span className="font-bold text-slate-900 dark:text-white">JEG Dev Studios</span>.
						Nuestro objetivo es crear experiencias digitales inolvidables a través de soluciones tecnológicas personalizadas.
					</p>
				</section>

				{/* 3. STATS */}
				<section className="py-4 flex gap-4">
					<div className="flex-1 bg-white dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
						<p className="text-3xl font-bold text-blue-600 dark:text-blue-500">2024</p>
						<p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
							Año de Fundación
						</p>
					</div>
					<div className="flex-1 bg-white dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
						<p className="text-3xl font-bold text-blue-600 dark:text-blue-500">100%</p>
						<p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
							Compromiso
						</p>
					</div>
				</section>

				{/* 4. CAROUSEL (Misión, Visión, Ideología) */}
				<section className="py-6 overflow-hidden">
					<div className="flex items-center justify-between px-4 mb-4">
						<h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">
							Nuestra Esencia
						</h2>
						<div className="md:hidden flex gap-1">
							<span className="block w-2 h-2 rounded-full bg-blue-500"></span>
							<span className="block w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
							<span className="block w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
						</div>
					</div>

					<div className="flex overflow-x-auto no-scrollbar pb-4 gap-4 snap-x snap-mandatory">
						{/* Misión */}
						<div className="flex flex-col min-w-[280px] snap-center bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
							<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
								<span className="material-symbols-outlined text-8xl text-blue-500">flag</span>
							</div>
							<div className="size-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-500">
								<span className="material-symbols-outlined">rocket_launch</span>
							</div>
							<h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Misión</h3>
							<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
								Crear soluciones digitales que superen las expectativas mediante innovación, calidad y un enfoque centrado en la experiencia de usuario.
							</p>
						</div>

						{/* Visión */}
						<div className="flex flex-col min-w-[280px] snap-center bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
							<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
								<span className="material-symbols-outlined text-8xl text-purple-500">visibility</span>
							</div>
							<div className="size-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-500">
								<span className="material-symbols-outlined">lightbulb</span>
							</div>
							<h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Visión</h3>
							<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
								Ser líderes en desarrollo digital a medida, ayudando a marcas y empresas a destacar en un mundo cada vez más conectado.
							</p>
						</div>

						{/* Ideología */}
						<div className="flex flex-col min-w-[280px] snap-center bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
							<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
								<span className="material-symbols-outlined text-8xl text-emerald-500">bolt</span>
							</div>
							<div className="size-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-500">
								<span className="material-symbols-outlined">flash_on</span>
							</div>
							<h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Ideología JEG</h3>
							<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
								<strong>Jumpstart Every Goal:</strong> Trabajamos para activar e impulsar cada meta de nuestros clientes utilizando creatividad y tecnología.
							</p>
						</div>
					</div>
				</section>

				{/* 5. TIMELINE / HISTORIA */}
				<section className="py-6">
					<h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">
						Nuestra Historia
					</h2>
					<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-800 ml-2 space-y-8">
						<div className="relative pl-6">
							<div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white dark:border-background-dark bg-blue-500"></div>
							<p className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-wider mb-1">Mayo 2024</p>
							<h3 className="text-slate-900 dark:text-white font-bold text-base">La Fundación</h3>
							<p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
								Jhonatan Espinal Garcia funda JEG Dev Studios con la visión de transformar ideas en experiencias digitales.
							</p>
						</div>
						<div className="relative pl-6">
							<div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white dark:border-background-dark bg-purple-500"></div>
							<p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-1">2025</p>
							<h3 className="text-slate-900 dark:text-white font-bold text-base">Crecimiento y Alianzas</h3>
							<p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
								Se unen Leonardo Valadez y Fernanda Briseño como cofundadores, fortaleciendo las áreas de Backend y UX/UI.
							</p>
						</div>
						<div className="relative pl-6">
							<div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white dark:border-background-dark bg-gray-400 dark:bg-gray-600"></div>
							<p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-1">Futuro</p>
							<h3 className="text-slate-900 dark:text-white font-bold text-base">Expansión Continua</h3>
							<p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
								Con el propósito firme de convertirnos en un referente en desarrollo web y software empresarial en México.
							</p>
						</div>
					</div>
				</section>

				{/* 6. NUESTROS VALORES */}
				<section className="py-6">
					<h2 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Nuestros Valores</h2>
					<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
						<div className="shrink-0 h-12 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center gap-2">
							<span className="material-symbols-outlined text-blue-500">science</span>
							<span className="text-xs font-bold text-slate-700 dark:text-gray-300">Innovación</span>
						</div>
						<div className="shrink-0 h-12 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center gap-2">
							<span className="material-symbols-outlined text-green-500">verified</span>
							<span className="text-xs font-bold text-slate-700 dark:text-gray-300">Calidad</span>
						</div>
						<div className="shrink-0 h-12 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center gap-2">
							<span className="material-symbols-outlined text-orange-500">handshake</span>
							<span className="text-xs font-bold text-slate-700 dark:text-gray-300">Compromiso</span>
						</div>
						<div className="shrink-0 h-12 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center gap-2">
							<span className="material-symbols-outlined text-purple-500">palette</span>
							<span className="text-xs font-bold text-slate-700 dark:text-gray-300">Creatividad</span>
						</div>
					</div>
				</section>

				{/* 7. EQUIPO */}
				<section className="py-6 px-4 bg-white dark:bg-gray-900/30 rounded-3xl border border-gray-100 dark:border-gray-800">
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-slate-900 dark:text-white text-xl font-bold">Nuestro Equipo</h2>
					</div>
					<div className="flex flex-col md:flex-row gap-6">
						<div className="flex flex-row md:flex-col md:justify-center md:text-center items-center gap-4">
							<div className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-blue-500/20 shrink-0"
								style={{ backgroundImage: `url('https://media.licdn.com/dms/image/v2/D4E03AQHw0Uic_48q2Q/profile-displayphoto-scale_400_400/B4EZsFcwcQGYAg-/0/1765322984034?e=1769040000&v=beta&t=TnSJDPNAaESoZZT0v2CkhLoALPtWHQy14dAM7QpMKZU')` }}></div>
							<div>
								<h3 className="text-sm font-bold text-slate-900 dark:text-white">Jhonatan Espinal</h3>
								<span className="text-xs text-blue-600 dark:text-blue-500 font-medium">Fundador & CEO</span>
								<p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
									Especialista en Frontend, SEO y rendimiento web.
								</p>
							</div>
						</div>
						<div className="flex flex-row md:flex-col md:justify-center md:text-center items-center gap-4">
							<div className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-transparent shrink-0 bg-gray-800"
								style={{ backgroundImage: `url('https://media.licdn.com/dms/image/v2/D4E35AQE_8HQ5Ush2Rg/profile-framedphoto-shrink_400_400/B4EZiFrLIpGwAc-/0/1754589344595?e=1768244400&v=beta&t=xXFEGXnGGMY8Ey35oVgRKlIWYtEE3WWTXk5DMl4j6Ds')` }}></div>
							<div>
								<h3 className="text-sm font-bold text-slate-900 dark:text-white">Leonardo Valadez</h3>
								<span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Cofundador & Backend</span>
								<p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
									Arquitecturas sólidas y eficientes.
								</p>
							</div>
						</div>
						<div className="flex flex-row md:flex-col md:justify-center md:text-center items-center gap-4">
							<div className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-transparent shrink-0 bg-gray-800"
								style={{ backgroundImage: `url('https://media.licdn.com/dms/image/v2/D4E03AQGZnUrySE06lg/profile-displayphoto-shrink_400_400/B4EZWN3c_hGgAo-/0/1741841879421?e=1769040000&v=beta&t=DknIFEk3VXoxgbN54cUwkVcb63ixVdUyd9iAktm2z3A')` }}></div>
							<div>
								<h3 className="text-sm font-bold text-slate-900 dark:text-white">Fernanda Briseño</h3>
								<span className="text-xs text-pink-600 dark:text-pink-400 font-medium">Cofundadora & UX/UI</span>
								<p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
									Interfaces visuales atractivas y usables.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* 8. CERTIFICACIONES (OCULTO POR AHORA) */}
				{/* Para mostrar, elimina la clase 'hidden' en el section de abajo */}
				<section className="py-6 hidden">
					<h2 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Certificaciones</h2>
					<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
						<div className="shrink-0 h-12 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center gap-2">
							<span className="material-symbols-outlined text-orange-500">analytics</span>
							<span className="text-xs font-bold text-slate-700 dark:text-gray-300">Google Analytics</span>
						</div>
						<div className="shrink-0 h-12 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center gap-2">
							<span className="material-symbols-outlined text-blue-500">cloud</span>
							<span className="text-xs font-bold text-slate-700 dark:text-gray-300">AWS Certified</span>
						</div>
						<div className="shrink-0 h-12 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center gap-2">
							<span className="material-symbols-outlined text-green-500">hub</span>
							<span className="text-xs font-bold text-slate-700 dark:text-gray-300">HubSpot Partner</span>
						</div>
					</div>
				</section>

				{/* 9. CTA FINAL */}
				<section className="mt-4 pb-8 pt-4">
					<div className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 p-6 text-center relative overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none">
						<div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
						<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>

						<h2 className="relative text-gray-900 dark:text-white text-xl font-bold mb-2">¿Listo para digitalizar tu negocio?</h2>
						<p className="relative text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-[250px] mx-auto">
							Hablemos y encuentra la solución ideal con nosotros.
						</p>
						<Link href="/contacto">
							<button className="relative w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-full shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
								<span>Contáctanos</span>
								<span className="material-symbols-outlined text-sm">arrow_forward</span>
							</button>
						</Link>
					</div>
				</section>
				<div className="h-8"></div>

				<FAQ
					faqs={initialFaqs}
				/>
			</main>
		</>
	);
}
