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
		"Somos una agencia en México que ofrece servicios de desarrollo web profesional, software y apps a medida con Sprints ágiles, SEO y diseño a medida. ¡Cotiza ya!",
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
			{imageToPreload && (
				<link
					rel="preload"
					href={imageToPreload}
					as="image"
					type="image/webp"
				/>
			)}
			<meta
				name="google-adsense-account"
				content="ca-pub-8211604143881682"
			></meta>
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
