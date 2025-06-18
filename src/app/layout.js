import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Script from "next/script";
import NavBar from "@/components/NavBar.jsx";
import BtnWhats from "@/components/WhatsAppButton.jsx";
import Footer from "@/components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '@/components/BootstrapClient.js'; 

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
  "/contacto": "/fondos/Comunicate_con_Nosotros.webp",
};

export const metadata = {
  metadataBase: new URL("https://www.jegdevstudios.com"),
  title: "JEG Dev Studios | Agencia de desarrollo web Profesional, Software y Apps en México",
  description:
    "En JEG Dev Studios diseñamos sitios web, software y apps móviles a medida que impulsan tu negocio en México y el mundo con tecnología innovadora y soporte experto.",
  keywords:
    "desarrollo web profesional, diseño web responsivo, desarrollo de apps móviles, software empresarial, agencia desarrollo web México, dev studios, jegstudio",
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
    title:
      "JEG Dev Studios | Agencia de desarrollo web",
    description:
      "Transformamos tus ideas en sitios web, software y apps que impulsan tu negocio en México y más allá.",
    url: "https://www.jegdevstudios.com/",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/metabackground.webp",
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
      { url: "/icons-SEO/favicon.ico" },
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
    language: "es-MX",
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
    <html lang="es">
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
              image: "https://www.jegdevstudios.com/logo.webp",
              url: "https://www.jegdevstudios.com/",
              email: "jegdevstudios@outlook.com",
              telephone: "+52 1 5512197135",
              logo: "https://www.jegdevstudios.com/icons-SEO/favicon-32x32.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Álvaro Obregón",
                addressRegion: "CDMX",
                addressCountry: "MX",
              },
              priceRange: "$$$",
              sameAs: ["https://www.facebook.com/jegdevstudios"],
            }),
          }}
        />
        <Script
          id="structured-data-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "LocalBusiness",
              name: "JEG Dev Studios",
              image:
                "https://www.jegdevstudios.com/img-SEO/metabackground.webp",
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
          id="structured-data-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué incluye el servicio de desarrollo web de JEG Dev Studios?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Incluye la creación de sitios web modernos, funcionales y personalizados según tus necesidades, utilizando tecnologías avanzadas como HTML, CSS, JavaScript, React, Tailwind CSS, Astro, Node.js y Express.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Ofrecen sitios web responsivos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, todos nuestros paquetes incluyen diseño responsivo, adaptado a dispositivos móviles, tabletas y computadoras.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tecnologías utilizan en el desarrollo web?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Utilizamos tecnologías modernas como React, Tailwind CSS, Astro, Node.js y Express para desarrollar sitios web rápidos, escalables y eficientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué diferencia hay entre sus paquetes de servicios?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cada paquete varía según el número de páginas, el nivel de personalización, integración de funcionalidades (como formularios avanzados, galerías multimedia, blog, SEO, etc.), y tecnologías aplicadas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tan rápido pueden entregar un sitio web?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dependiendo del paquete elegido, el tiempo de entrega puede variar entre 1 a 4 semanas.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased gradiant-effect`}
      >
        <NavBar />
        <main className="container-fluid d-flex flex-column min-vh-100 p-0 m-0">
          {children}
          <BtnWhats />
        </main>
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
