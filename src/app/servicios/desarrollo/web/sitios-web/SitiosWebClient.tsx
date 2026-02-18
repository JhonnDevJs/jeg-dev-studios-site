"use client";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/Seo/StructuredData";
import FAQ from "@/components/Seo/FAQ";
import SectionProcess from "@/components/SectionProcess";
import CTAProducts from "@/components/Cta/CTAProducts";
import CardInfo from "@/components/Cards/CardInfo";
import TimelineProcess from "@/components/Cards/TimelineProcess";
import ShowcaseSection from "@/components/ShowcaseSection";
import "./SitiosWebClient.css";

export default function DevWebClient() {
  interface FaqItem {
    question: string;
    answer: string;
  }

  const faqs: FaqItem[] = [
    {
      question:
        "¿Este servicio incluye el diseño gráfico y las estrategias de marketing digital?",
      answer:
        "Este servicio incluye todo el diseño web y el diseño gráfico necesarios para tu sitio. Las estrategias de marketing digital, como campañas en redes sociales o inbound marketing, son servicios de diseño y SEO que se cotizan por separado para complementar tu sitio.",
    },
    {
      question: "¿El sitio se conectará a una base de datos?",
      answer:
        "Un sitio web corporativo estándar generalmente no requiere una base de datos compleja, más allá de su CMS. Si tu proyecto requiere una base de datos para gestionar usuarios o productos o servicios dinámicos (como una aplicación web), el proyecto se cotizaría como Software Empresarial.",
    },
    {
      question: "¿Qué tan importante es la optimización SEO?",
      answer:
        "Es fundamental. Un diseño de páginas web atractivo no sirve de nada si nadie lo encuentra. Nuestra optimización SEO base asegura que los motores de búsqueda puedan rastrear e indexar tu sitio correctamente, dándote la base para futuras estrategias de marketing.",
    },
  ];

  return (
    <>
      {/* --- INYECCIÓN DE SCHEMAS --- */}
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-sitios-web" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-sitios-web" />

      {/* Puedes añadir un schema de "Service" aquí si lo deseas */}

      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4 text-center">
        <div className="container mx-auto w-full">
          {/* H1 OPTIMIZADO con la keyword exacta */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Servicio de Desarrollo de Sitios Web Profesionales
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-3xl mx-auto mt-4">
            Tu sitio web es tu carta de presentación digital. En JEG Dev
            Studios, nos especializamos en la
            <strong>creación de sitios web profesionales</strong> que van más
            allá de una simple plantilla. Ofrecemos una{" "}
            <strong>web profesional</strong> construida a medida, enfocada en el
            rendimiento, la seguridad y resultados tangibles para tu negocio.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN DE MUESTRA VISUAL --- */}
      <ShowcaseSection
        imageSrc="/banners/Christmas/Web.webp"
        alt="Ejemplo de Sitio Web Profesional"
        title="Calidad Visual Superior"
        badgeColor="bg-indigo-600"
      />
      {/* --- SECCIÓN VISUAL: SITIO CORPORATIVO --- */}
      <section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-400">
                Identidad Corporativa
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Proyección Profesional
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Tu sitio web es tu oficina digital. Diseñamos estructuras que
                transmiten solidez, confianza y autoridad en tu sector.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Equilibrio perfecto entre información corporativa, presentación
                de servicios y captación de leads.
              </p>
            </div>

            {/* Wireframe Corporate Site */}
            <div className="w-full md:w-1/2 relative perspective-1000">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-1 overflow-hidden transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">
                {/* Browser Bar */}
                <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 flex gap-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Site Content */}
                <div className="p-6 space-y-6">
                  {/* Nav */}
                  <div className="flex justify-between items-center">
                    <div className="w-8 h-8 bg-indigo-600 rounded"></div>
                    <div className="flex gap-4">
                      <div className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      <div className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      <div className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  {/* Hero */}
                  <div className="flex gap-6 items-center">
                    <div className="w-1/2 space-y-3">
                      <div className="w-full h-6 bg-gray-800 dark:bg-white rounded"></div>
                      <div className="w-3/4 h-6 bg-gray-800 dark:bg-white rounded"></div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded mt-2"></div>
                      <div className="w-32 h-8 bg-indigo-600 rounded mt-4"></div>
                    </div>
                    <div className="w-1/2 h-32 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                  </div>
                  {/* Services Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-gray-50 dark:bg-gray-700/30 rounded border border-gray-100 dark:border-gray-600"></div>
                    <div className="h-20 bg-gray-50 dark:bg-gray-700/30 rounded border border-gray-100 dark:border-gray-600"></div>
                    <div className="h-20 bg-gray-50 dark:bg-gray-700/30 rounded border border-gray-100 dark:border-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN INFORMATIVA Y SEMÁNTICA (Video + Keywords difíciles) */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y">
        <div className="container max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Desarrollo Profesional vs. Constructores "Arrastrar y Soltar"
          </h2>
          <p className="text-lg md:text-xl text-center mb-5 max-w-3xl mx-auto text-gray-600 dark:text-white">
            Muchas plataformas te prometen crear un sitio con solo{" "}
            <strong>arrastrar y soltar</strong> elementos. Aunque parece fácil,
            estas herramientas suelen generar código sucio, lento y difícil de
            posicionar. Mira este video para entender la diferencia.
          </p>

          <div className="video-responsive-container mb-5 max-w-3xl mx-auto">
            {/* AQUÍ VA TU VIDEO */}
            {/* <iframe ... /> */}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CardInfo
              title="Limitaciones de las Plantillas"
              description='Las herramientas de "arrastrar y soltar" te encierran en un diseño predefinido. Si quieres escalar a tiendas en línea complejas o funciones a medida, te encontrarás con muros técnicos.'
            />
            <CardInfo
              title="Ventajas del Código a Medida"
              description="Nuestro servicio de desarrollo de sitios web te da libertad total. Optimizamos cada línea de código para que tu sitio vuele y Google lo ame."
            />
          </div>
        </div>
      </section>
      {/* --- SECCIÓN DE CARACTERÍSTICAS EXTENDIDA (Aumenta volumen de texto) --- */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4">
        <div className="container max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-900 dark:text-white">
            Un Servicio Integral para tu Presencia Digital
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <CardInfo
              title="Diseño UI/UX Personalizado"
              description="Olvídate de las plantillas que usa tu competencia. Nuestro equipo colabora contigo para crear una identidad visual única. Diseñamos cada pantalla pensando en la conversión y en reflejar la esencia de tu marca, asegurando que tu sitio sea memorable."
            />
            <CardInfo
              title="Velocidad y Rendimiento (Core Web Vitals)"
              description="Construimos tu sitio en tecnologías modernas (como Next.js) que garantizan una carga ultra-rápida. Un sitio rápido no solo mejora la experiencia del usuario, sino que es un factor crítico para rankear alto en los motores de búsqueda."
            />
            <CardInfo
              title="Autoadministrable (CMS Headless)"
              description='Te entregamos el control. Implementamos un sistema de gestión (CMS) moderno y seguro para que tú mismo puedas actualizar textos, subir noticias al blog o cambiar imágenes sin depender de un programador y sin riesgo de "romper" el sitio.'
            />
            <CardInfo
              title="Seguridad y Certificados SSL"
              description="La seguridad no es opcional. Incluimos la configuración de certificados SSL avanzados para encriptar la información de tu sitio. Además, gestionamos tu dominio personalizado y el hosting en servidores de alto rendimiento."
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN: ¿PARA QUIÉN ES ESTE SERVICIO? */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y">
        <div className="container max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            ¿Este Servicio es Para Ti?
          </h2>
          <p className="text-lg md:text-xl text-center mb-5 text-gray-600 dark:text-white">
            Nuestro servicio de{" "}
            <strong>creación de sitios web profesionales</strong> está diseñado
            para:
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <CardInfo
              title="Empresas de Servicios"
              description="Consultoras, despachos legales, arquitectos y agencias que necesitan generar confianza y captar leads."
            />
            <CardInfo
              title="Startups y PyMEs"
              description="Negocios que buscan una presencia digital sólida para escalar y validar su modelo de negocio."
            />
            <CardInfo
              title="Marcas Personales"
              description="Profesionales que quieren destacar su portafolio y autoridad en su industria."
            />
          </div>

          <div
            className="bg-blue-50 dark:bg-gray-800/50 border border-blue-200 dark:border-gray-700 rounded-lg p-6 mt-8 text-center w-full"
            role="alert"
          >
            <h4 className="text-base font-bold mb-2 text-gray-900 dark:text-white">
              ¿Buscas Vender Productos?
            </h4>
            <p className="mb-0 text-sm text-gray-600 dark:text-gray-300">
              Si tu objetivo principal es tener un carrito de compras y{" "}
              <strong>comercio electrónico</strong>, te recomendamos visitar
              nuestra sección especializada en{" "}
              <Link
                href="/servicios/desarrollo/web/ecommerce"
                className="text-cyan-400 no-underline font-bold"
              >
                Desarrollo de Tiendas en Línea
              </Link>
              , donde integramos pasarelas de pago y catálogos complejos.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE PROCESO DETALLADO (Aumenta volumen de texto) --- */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <SectionProcess
          title={"Nuestro Proceso de Desarrollo Web"}
          text={
            "No improvisamos. Usamos una metodología probada para asegurar que tu sitio web se entregue a tiempo y supere tus expectativas."
          }
        />
      </section>

      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <TimelineProcess
          steps={[
            {
              title: "Descubrimiento y Estrategia",
              description:
                "Analizamos tu mercado, tu competencia y tus objetivos. Definimos la arquitectura de la información para asegurar que tus usuarios encuentren lo que buscan.",
            },
            {
              title: "Diseño UI/UX y Prototipado",
              description: (
                <>
                  Creamos wireframes y diseños de alta fidelidad. Podrás ver
                  cómo lucirá tu <strong>web profesional</strong> antes de
                  escribir una sola línea de código.
                </>
              ),
            },
            {
              title: "Desarrollo y Programación",
              description:
                "Nuestros desarrolladores construyen el sitio usando las mejores prácticas de código, asegurando compatibilidad con todos los navegadores y dispositivos.",
            },
            {
              title: "Lanzamiento y Conexión Social",
              description: (
                <>
                  Configuramos tu dominio, instalamos los certificados de
                  seguridad y conectamos tu sitio con tus{" "}
                  <strong>redes sociales</strong> y herramientas de análisis.
                </>
              ),
            },
          ]}
        />
      </section>

      {/* Sección de FAQ (Requisito de SEMrush) */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <FAQ faqs={faqs} />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CTAProducts
          title={"¿Listo para tu Sitio Web Profesional?"}
          paragraph={
            "Deja de pelear con un creador de sitios web lento y limitado. Es hora de tener una web profesional que trabaje para ti. Hablemos de tu proyecto."
          }
          links={[
            {
              label: "Cotizar mi Sitio Web",
              link: "/contacto",
              type: "services", // Puedes usar 'services' o 'outline'
            },
          ]}
        />
      </section>
    </>
  );
}
