import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import NavBar from "@/components/Layout/NavBar.jsx";
import BtnWhats from "@/components/Buttons/WhatsAppButton.jsx";
import Footer from "@/components/Layout/Footer.jsx";
import BootstrapClient from "@/lib/BootstrapClient.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const servicePageBackgrounds = {
	"/": "/fondos/backgraund.webp",
	"/servicios": "/fondos/Nuestros_Servicios.webp",
	"/sobre-nosotros": "/fondos/Sobre_Nosotros.webp",
	"/contacto": "/fondos/Nosotros.webp",
};

export const metadata = {
	metadataBase: new URL("https://www.jegdevstudios.com"),
	title: "Agencia de Desarrollo Web y Software en México | JEG Dev Studios",
	description:
		"Ofrecemos servicios de desarrollo web profesional y software a medida. Somos la agencia en México que impulsa tu negocio con Sprints ágiles, SEO y apps. ¡Cotiza tu proyecto!",
	keywords:
		"agencia desarrollo web méxico, desarrollo web profesional, desarrollo de software a medida, aplicaciones móviles para empresas, soluciones digitales personalizadas",
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
		title: "JEG Dev Studios | Sitios web, PYMES, apps y Software a Medida",
		description:
			"Empresa de desarrollo web en México especializada en soluciones digitales: páginas web, aplicaciones móviles y software a medida para negocios exigentes.",
		url: "https://www.jegdevstudios.com/",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-home.webp",
				width: 1200,
				height: 630,
				alt: "JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
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

export default async function RootLayout({ children }) {
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
		<html lang="es-MX">
			<head>
				{imageToPreload && (
					<link
						rel="preload"
						href={imageToPreload}
						as="image"
						type="image/webp"
					/>
				)}
				{/* Structured Data Scripts */}
				<Script
					id="structured-data-organization"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "JEG Dev Studios",
							url: "https://www.jegdevstudios.com/",
							logo: "https://www.jegdevstudios.com/icons-SEO/logo.webp",
							image:
								"https://www.jegdevstudios.com/img-SEO/og-background-home.webp",
							email: "jegdevstudios@outlook.com",
							telephone: "+52 1 5512197135",
							address: {
								"@type": "PostalAddress",
								addressLocality: "Álvaro Obregón",
								addressRegion: "CDMX",
								addressCountry: "MX",
							},
							priceRange: "$$$",
							contactPoint: {
								"@type": "ContactPoint",
								telephone: "+52-55-1219-7135",
								contactType: "Customer Service",
							},
							sameAs: [
								"https://www.facebook.com/JEGDevStudios",
								"https://instagram.com/jegdevstudios/",
								"https://linkedin.com/company/jegdevstudios",
								"https://github.com/JEGDevStudios",
							],
							aggregateRating: {
								"@type": "AggregateRating",
								ratingValue: "4.9",
								bestRating: "5",
								ratingCount: "25",
							},
						}),
					}}
				/>
				<Script
					id="structured-data-website"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							url: "https://www.jegdevstudios.com/",
							potentialAction: {
								"@type": "SearchAction",
								target:
									"https://www.jegdevstudios.com/search?q={search_term_string}",
								"query-input": "required name=search_term_string",
							},
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
							"@type": "LocalBusiness",
							name: "JEG Dev Studios",
							image:
								"https://www.jegdevstudios.com/img-SEO/og-background-home.webp",
							url: "https://www.jegdevstudios.com/",
							telephone: "+52 1 5512197135",
							priceRange: "$$$",
							address: {
								"@type": "PostalAddress",
								addressLocality: "Álvaro Obregón",
								addressRegion: "CDMX",
								addressCountry: "MX",
							},
							geo: {
								"@type": "GeoCoordinates",
								latitude: "19.4326",
								longitude: "-99.1332",
							},
						}),
					}}
				/>
				<Script
					id="structured-data-breadcrumbs"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "BreadcrumbList",
							itemListElement: [
								{
									"@type": "ListItem",
									position: 1,
									name: "Inicio",
									item: "https://www.jegdevstudios.com/",
								},
							],
						}),
					}}
				/>
				<meta name="twitter:site" content="@jegdevstudios" />
				<meta name="twitter:creator" content="@jegdevstudios" />
				<meta
					name="google-adsense-account"
					content="ca-pub-8211604143881682"
				></meta>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<NavBar />
				<main
					className="container-fluid d-flex flex-column min-vh-100 p-0 m-0"
					role="main"
				>
					{children}
					<BtnWhats />
				</main>
				<Footer />
				<BootstrapClient />
				<GoogleAnalytics gaId="G-XR060PKRRT" />
			</body>
		</html>
	);
}
