"use client";

// Imports Hooks
import Script from "next/script";

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

			<div className="relative flex flex-col items-center px-4 md:px-16 py-8 flex-grow">
				<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background-dark/0 to-background-dark opacity-70"></div>
					<div className="absolute top-20 right-[-20%] w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
					<div className="absolute top-40 left-[-10%] w-48 h-48 bg-blue-600/30 rounded-full blur-3xl"></div>
				</div>
				<div className="relative z-1 block w-full">
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
					<ContactForm />
				</div>

				{/* Aquí pasamos las props tipadas al componente FAQ */}
				<FAQ faqs={initialFaqs} />
			</div>
		</>
	);
}