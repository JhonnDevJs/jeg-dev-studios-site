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
  title: "JEG Dev Studios | Agencia de desarrollo web, apps y software",
  description:
    "Empresa de desarrollo web en México con servicios digitales personalizados: landing pages, apps multiplataforma y software seguro para empresas modernas.",
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
    title:
      "JEG Dev Studios | Sitios web, PYMES, apps y Software a Medida",
    description:
      "Empresa de desarrollo web en México especializada en soluciones digitales: páginas web, aplicaciones móviles y software a medida para negocios exigentes.",
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
                // Desarrollo Web
                {
                  "@type": "Question",
                  name: "¿Qué incluye el servicio de desarrollo web de JEG Dev Studios?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Incluye la creación de sitios web personalizados, responsivos y adaptados a tu marca, utilizando tecnologías modernas como HTML, CSS, JavaScript, Node.js o Laravel.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Ofrecen dominio y hosting incluido?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, nuestros paquetes incluyen 1 año de dominio personalizado y hosting web, ya sea mediante Hostinger, DonDominio o Google Sites, según el paquete contratado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tecnologías usan para crear sitios web?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dependiendo del paquete, utilizamos HTML, CSS, JavaScript, Bootstrap, Node.js o PHP (Laravel) para el desarrollo del frontend y backend.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puedo solicitar cambios en el diseño del sitio web?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, cada paquete incluye un número específico de cambios permitidos a nivel de secciones del diseño web.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Incluyen optimización SEO en los sitios web?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, todos nuestros paquetes incluyen implementación básica de SEO para mejorar tu visibilidad en buscadores como Google.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto tiempo tarda en entregarse un sitio web?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La entrega depende del paquete. Desde 7 hasta 30 días hábiles, dependiendo de la complejidad y funcionalidades requeridas.",
                  },
                },

                // Desarrollo de Aplicaciones Móviles
                {
                  "@type": "Question",
                  name: "¿Qué tipo de aplicaciones móviles desarrollan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Creamos apps nativas, híbridas y multiplataforma para Android y iOS, según los requerimientos del cliente y el paquete contratado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Publican las apps en la Play Store o App Store?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, la publicación en Google Play o App Store está incluida en todos nuestros paquetes de desarrollo de apps móviles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tecnologías utilizan para las apps móviles?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Trabajamos con tecnologías como React Native, Kotlin Multiplatform, Java para backend, y bases de datos remotas según el nivel del proyecto.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Incluyen base de datos o backend en las apps móviles?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, los paquetes intermedios y avanzados incluyen conexión con bases de datos remotas, backend en Java y funcionalidades como login o almacenamiento.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Incluyen diseño UI/UX personalizado?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, todos nuestros planes ofrecen un diseño responsivo y adaptado a tu marca. Los paquetes más avanzados incluyen navegación fluida y componentes animados.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Pueden desarrollar apps con funcionalidades avanzadas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, como parte del paquete Premium podemos integrar funcionalidades complejas como pagos, geolocalización, cámara, push notifications y paneles administrativos web.",
                  },
                },

                // Software Empresarial
                {
                  "@type": "Question",
                  name: "¿Qué tipo de software empresarial desarrollan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Desarrollamos soluciones personalizadas como sistemas de ventas, inventarios, citas, empleados y más, adaptados a las necesidades de tu negocio.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿El software incluye instalación y soporte?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, todos los paquetes incluyen instalación en uno o más equipos. El paquete Profesional también ofrece soporte técnico durante el primer mes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tipo de base de datos utilizan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Utilizamos bases de datos locales (como SQLite) o en red/nube según el paquete, con estructuras seguras y eficientes para tu operación diaria.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Incluyen funcionalidades como reportes o gráficas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, los paquetes más avanzados incluyen paneles de estadísticas, gráficas, exportación de reportes a Excel/PDF, y herramientas de gestión.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿El software puede ser multiusuario?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, nuestros planes intermedios y avanzados permiten múltiples usuarios con acceso por roles, login y permisos configurables.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Ofrecen soluciones con integración a sistemas externos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, en el paquete Profesional podemos integrar tu software con CRMs, facturación electrónica u otros sistemas empresariales según tus procesos.",
                  },
                },
              ],
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
              "itemListElement": [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://www.jegdevstudios.com/"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Servicios",
                  item: "https://www.jegdevstudios.com/servicios"
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Desarrollo Web",
                  item: "https://www.jegdevstudios.com/servicios/desarrollo-web"
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Aplicaciones Móviles",
                  item: "https://www.jegdevstudios.com/servicios/desarrollo-aplicaciones"
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Software Empresarial",
                  item: "https://www.jegdevstudios.com/servicios/desarrollo-software"
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Sobre Nosotros",
                  item: "https://www.jegdevstudios.com/sobre-nosotros"
                },
                {
                  "@type": "ListItem",
                  position: 7,
                  name: "Blog",
                  item: "https://www.jegdevstudios.com/blog"
                },
                {
                  "@type": "ListItem",
                  position: 8,
                  name: "Contacto",
                  item: "https://www.jegdevstudios.com/contacto"
                },
                {
                  "@type": "ListItem",
                  position: 9,
                  name: "Saber más WebDev",
                  item: "https://www.jegdevstudios.com/saber-mas/web-dev"
                },
                {
                  "@type": "ListItem",
                  position: 10,
                  name: "Saber más SoftDev",
                  item: "https://www.jegdevstudios.com/saber-mas/soft-dev"
                },
                {
                  "@type": "ListItem",
                  position: 11,
                  name: "Saber más AppDev",
                  item: "https://www.jegdevstudios.com/saber-mas/app-dev"
                },
                {
                  "@type": "ListItem",
                  position: 12,
                  name: "Términos y Condiciones",
                  item: "https://www.jegdevstudios.com/terminos-y-condiciones"
                },
                {
                  "@type": "ListItem",
                  position: 13,
                  name: "Aviso de Privacidad",
                  item: "https://www.jegdevstudios.com/aviso-de-privacidad"
                }
              ]
            })
          }}
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased gradiant-effect`}
      >
        <NavBar />
        <main className="container-fluid d-flex flex-column min-vh-100 p-0 m-0" role="main">
          {children}
          <BtnWhats />
        </main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
