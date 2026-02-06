"use client";

// Imports Hooks
import Script from "next/script";
import Link from "next/link";

// Import Custom Hooks


// Imports libs


// Import Types
interface ContactClientProps {
	initialFaqs: any; // You can replace 'any' with a more specific type if available
}


// Import Components
import ContactForm from "@/components/Forms/ContactForm";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";

// Imports Assets

// Import Styles custom
import "./contactClient.css";


export default function ContactClient({ initialFaqs }: ContactClientProps) {

	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-contact" />
			<StructuredData data={initialFaqs} type="FAQPage" idPage="faqs-contact" />
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

			<div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-blue-500 selection:text-white min-h-screen flex flex-col overflow-x-hidden px-4 md:px-16">
				<div className="flex-1 overflow-y-auto pb-0">

					{/* 2. HERO TITLE */}
					<div className="px-5 pt-6 pb-2 mx-auto">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
							<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
							<span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">SEO & Software</span>
						</div>
						<h1 className="text-slate-900 dark:text-white tracking-tight text-[36px] font-extrabold leading-[1.1] text-left mb-3">
							Hablemos de tu <span className="gradient-text">próximo éxito</span>
						</h1>
						<p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
							Cuéntanos sobre tus necesidades de desarrollo o SEO. Nuestro equipo en México está listo para potenciar tu negocio.
						</p>
					</div>

					<div className="relative z-1 flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">

						{/* 3. FORMULARIO */}

						<ContactForm />

						{/* 4. CONTACTO DIRECTO GRID */}
						<div className="flex flex-col gap-4 w-full lg:w-80 shrink-0 border-t lg:border-t-0 border-white/5 pt-8 lg:pt-0 mt-8 lg:mt-0">

							<div className="px-5 pb-6 max-w-lg mx-auto w-full">
								<h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4 px-2">Contacto Directo</h3>
								<div className="grid grid-cols-3 gap-3">
									<Link href="tel:+525512197135" className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors group">
										<div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
											<span className="material-symbols-outlined">call</span>
										</div>
										<span className="text-xs font-medium text-slate-600 dark:text-slate-300">Llamar</span>
									</Link>
									<Link href="mailto:contacto@jegdevstudios.com" className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors group">
										<div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
											<span className="material-symbols-outlined">mail</span>
										</div>
										<span className="text-xs font-medium text-slate-600 dark:text-slate-300">Email</span>
									</Link>
									<Link href="https://wa.me/message/IFBW3ARPBITWA1" className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors group">
										<div className="size-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
											<span className="material-symbols-outlined">chat</span>
										</div>
										<span className="text-xs font-medium text-slate-600 dark:text-slate-300">WhatsApp</span>
									</Link>
								</div>
							</div>
							{/* 5. MAPA (Imagen Dinámica) */}
							<div className="px-5 pb-10 max-w-lg mx-auto w-full">
								<div className="relative w-full h-48 rounded-[2rem] overflow-hidden group shadow-lg">
									{/* IMAGEN DE SUPABASE */}
									<div
										className="w-full h-full bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-500"
										style={{
											backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKexHxtrtjMMzfzpTxtc5gRluLIor3fwrJufE6hfHdN1HqS4I7rFQhH61Nsd635NjgfIN7GVJRiH9DZIjduu2xaacsnteJ0f5-fUuR1PQ8K3l0nZs59KBuxNUjbzMea6uVJBV42UPaJHqvFgRKfwiUCcmgcIYUQw3qB9iFroX6QJg45JFQ0rraNFRck6DlPysEtULmEm3JNaX1zOzD4YACdZ9fhrTPmjWGZ--x_hTh8OtATTvltIjT7xSHSvxJxqNXY4lhRxBQiHBJ')`
										}}
									></div>
									<div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
									<div className="absolute bottom-0 left-0 w-full p-5">
										<div className="flex items-start gap-3">
											<div className="size-10 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
												<span className="material-symbols-outlined">location_on</span>
											</div>
											<div>
												<h4 className="text-white font-bold text-base">Ciudad de México</h4>
												<p className="text-slate-300 text-sm leading-snug">Av. Reforma 222, Cuauhtémoc,<br />06600 CDMX, México</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>



					{/* Aquí pasamos las props tipadas al componente FAQ */}
					<FAQ faqs={initialFaqs} />
				</div>
			</div>
		</>
	);
}