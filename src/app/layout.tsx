import { headers } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ReactNode } from "react";
import Script from "next/script";
import NavBar from "@/components/Layout/NavBar";
import BtnWhats from "@/components/Buttons/WhatsAppButton";
import Footer from "@/components/Layout/Footer";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

// Configuración optimizada de la fuente Inter
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter", // Variable CSS para Tailwind
	display: "swap",
});


// Tipamos el objeto de fondos para evitar errores de índice
const servicePageBackgrounds: Record<string, string> = {
	"/": "/fondos/backgraund.webp",
	"/servicios": "/fondos/Nuestros_Servicios.webp",
	"/sobre-nosotros": "/fondos/Sobre_Nosotros.webp",
	"/contacto": "/fondos/Nosotros.webp",
};

export const metadata = {
	metadataBase: new URL("https://www.jegdevstudios.com"),
	title: "Agencia de Desarrollo de Software y UX UI en México | JEG Dev Studios",

	// DESCRIPCIÓN MEJORADA: Incluye ambas keywords y es clara.
	description:
		'Somos una agencia de desarrollo de software y diseño "agencia ux ui méxico". Transformamos tus ideas en software, apps y sitios web de alto rendimiento. ¡Cotiza tu proyecto!',
	keywords:
		'agencia de desarrollo de software, "agencia ux ui méxico", agencia de desarrollo web, "generative engine optimization" "geo", desarrollo web profesional, agencia de sprints seo',
	robots: "index, follow",
	authors: [{ name: "JEG Dev Studios" }],
	applicationName: "JEG Dev Studios",
	appleWebApp: {
		title: "JEG Dev Studios",
	},
	alternates: {
		canonical: "https://www.jegdevstudios.com/",
	},
	formatDetection: {
		telephone: false,
	},
	openGraph: {
		title: "Agencia de Desarrollo de Software y UX UI en México | JEG Dev Studios",
		description:
			'Somos una agencia de desarrollo de software y diseño "agencia ux ui méxico". Transformamos tus ideas en software, apps y sitios web de alto rendimiento.',
		url: "https://www.jegdevstudios.com/",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-home.webp",
				width: 1200,
				height: 630,
				alt: "Agencia de Desarrollo de Software y UX UI en México",
				type: "image/webp",
			},
		],
		locale: "es_MX",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Agencia de Desarrollo Web y Software en México | JEG Dev Studios",
		description:
			"Ofrecemos servicios de desarrollo web profesional y software a medida. Somos la agencia en México que impulsa tu negocio con Sprints ágiles, SEO y apps. ¡Cotiza tu proyecto!",
		images: ["/img-SEO/og-background-home.webp"],
	},
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/icons-SEO/favicon.svg", type: "image/svg+xml" },
			{
				url: "/icons-SEO/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/icons-SEO/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				url: "/icons-SEO/favicon-96x96.png",
				sizes: "96x96",
				type: "image/png",
			},
			{
				url: "/icons-SEO/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				url: "/icons-SEO/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				url: "/icons-SEO/mstile-150x150.png",
				sizes: "150x150",
				type: "image/png",
			},
		],
		apple: [{ url: "/icons-SEO/apple-touch-icon.png", sizes: "180x180" }],
		shortcut: ["/icons-SEO/favicon.ico"],
	},
	manifest: "/manifest.json",
	other: {
		"geo.region": "MX",
		"geo.placename": "Ciudad de México, México",
		"geo.position": "19.4326;-99.1332",
		"msapplication-TileImage": "/icons-SEO/mstile-150x150.png",
		"msapplication-TileColor": "#000000",
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
};

export const themeColor = "#000000";

// Interfaz para las props del Layout
interface RootLayoutProps {
	children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
	const headersList = await headers();
	const pathname = headersList.get("next-url") || "";

	let imageToPreload = null;

	for (const pathPrefix in servicePageBackgrounds) {
		if (pathname.startsWith(pathPrefix)) {
			imageToPreload = servicePageBackgrounds[pathPrefix];
			break;
		}
	}
	return (
		<html lang="es-MX" className={`${inter.variable} dark`}>
			{imageToPreload && (
				<link
					rel="preload"
					href={imageToPreload}
					as="image"
					type="image/webp"
				/>
			)}
			<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
			<meta
				name="google-adsense-account"
				content="ca-pub-8211604143881682"
			></meta>
			<body
				className={`font-display antialiased text-white bg-[#101922] min-h-screen`}
			>
				<NavBar />
				{children}
				<BtnWhats />
				<Footer />
				{/* Structured Data Scripts */}
				<Script
					id="structured-data-website"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "JEG Dev Studios",
							url: "https://www.jegdevstudios.com/",
							inLanguage: "es-MX",
						}),
					}}
				/>
				<Script
					id="structured-data-localbusiness"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org/",
							"@type": "Organization",
							name: "JEG Dev Studios",
							image:
								"https://www.jegdevstudios.com/img-SEO/og-background-home.webp",
							logo: "https://www.jegdevstudios.com/icons-SEO/logo.webp",
							url: "https://www.jegdevstudios.com/",
							telephone: "+52 1 5512197135",
							priceRange: "$$$",
							description:
								"Agencia de Desarrollo Web y Software en México: Soluciones a Medida. En JEG Dev Studios, creamos sitios, aplicaciones móviles y software a medida que conectan con tus clientes y transforman tus ideas en resultados reales.",
							address: {
								"@type": "PostalAddress",
								addressLocality: "Álvaro Obregón",
								addressRegion: "CDMX",
								addressCountry: "MX",
							},
							geo: {
								"@type": "GeoCoordinates",
								latitude: "19.3620",
								longitude: "-99.2044",
							},
							openingHoursSpecification: [
								{
									"@type": "OpeningHoursSpecification",
									dayOfWeek: [
										"Monday",
										"Tuesday",
										"Wednesday",
										"Thursday",
										"Friday",
									],
									opens: "09:00:00",
									closes: "18:00:00",
								},
								{
									"@type": "OpeningHoursSpecification",
									dayOfWeek: "Saturday",
									opens: "10:00:00",
									closes: "14:00:00",
								},
							],
							sameAs: [
								"https://www.facebook.com/JEGDevStudios",
								"https://instagram.com/jegdevstudios/",
								"https://www.tiktok.com/@jeg.dev.studios",
								"https://www.youtube.com/@jegdevstudios",
								"https://linkedin.com/company/jegdevstudios",
								"https://x.com/JEGDevStudios",
								"https://github.com/JEGDevStudios",
							],
						}),
					}}
				/>
				<GoogleAnalytics gaId="G-XR060PKRRT" />
			</body>
		</html>
	);
}
