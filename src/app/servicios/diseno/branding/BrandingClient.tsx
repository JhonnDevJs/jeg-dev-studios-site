"use client";
import StructuredData from "@/components/Seo/StructuredData";
import CTAProducts from "@/components/Cta/CTAProducts";
import FAQ from "@/components/Seo/FAQ";
import CardInfo from "@/components/Cards/CardInfo";
import TimelineProcess from "@/components/Cards/TimelineProcess";

export default function BrandingClient() {
  const faqs = [
    {
      question: "¿Qué incluye el servicio de diseño de logotipo?",
      answer:
        "Entregamos algo más que un dibujo. Incluimos versiones del logo (horizontal, vertical, isotipo), paleta de colores, tipografías corporativas y una guía básica de uso para asegurar la consistencia de tu marca.",
    },
    {
      question: "¿Qué es un Manual de Identidad Corporativa?",
      answer:
        "Es la 'biblia' de tu marca. Un documento técnico que explica cómo usar (y cómo no usar) tu logotipo, colores, tipografías y elementos gráficos en diferentes soportes, desde tarjetas de presentación hasta rotulación vehicular.",
    },
    {
      question: "¿Cuántas propuestas de diseño presentan?",
      answer:
        "Generalmente presentamos 3 conceptos creativos distintos basados en tu brief. A partir de ahí, trabajamos en rondas de revisiones sobre la opción seleccionada hasta llegar al resultado final.",
    },
  ];

  return (
    <>
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-branding" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-branding" />

      {/* HERO SECTION */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mt-3">
          Diseño de Branding y Logotipos que Perduran
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-4xl">
          Tu marca es el activo más valioso de tu empresa. No se trata solo de
          un logotipo bonito, sino de construir una identidad visual sólida que
          trasmita confianza, profesionalismo y conecte emocionalmente con tu
          audiencia ideal.
        </p>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-purple-600 uppercase bg-purple-100 rounded-full dark:bg-purple-900/30 dark:text-purple-400">
                Identidad Visual
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Más que un Logo, un Sistema Visual
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Creamos sistemas de diseño completos. Definimos cómo habla tu
                marca visual, desde la paleta de colores y la tipografía hasta
                la papelería corporativa y los gráficos para redes sociales.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Logotipos Memorables y Versátiles
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Manuales de Identidad (Brand Guidelines)
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Papelería y Merchandising
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative perspective-1000">
              {/* Visual abstract representation of Branding */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="h-24 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    Logo
                  </div>
                  <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                    Mockup
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                  <div className="flex gap-2 mt-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="flex flex-col justify-center items-center text-center w-full gap-3 py-12 md:py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Soluciones de Branding
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <CardInfo
            title="Diseño de Logotipo"
            description="Creación de la pieza central de tu identidad. Entregamos versiones para web, impresión y redes sociales."
          />
          <CardInfo
            title="Manual de Identidad"
            description="Guía normativa para el uso correcto de tu marca. Asegura que tu imagen sea consistente en todos lados."
          />
          <CardInfo
            title="Rebranding"
            description="¿Tu marca se ve anticuada? Renovamos tu imagen manteniendo la esencia de tu negocio pero proyectándola al futuro."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <div className="container max-w-4xl mx-auto w-full mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cómo Construimos tu Marca
          </h2>
        </div>
        <TimelineProcess
          steps={[
            {
              title: "Briefing y Descubrimiento",
              description:
                "Entendemos tu negocio, tus valores y a quién le quieres vender. Definimos los atributos que tu marca debe proyectar.",
            },
            {
              title: "Bocetaje y Conceptos",
              description:
                "Nuestro equipo creativo explora múltiples direcciones visuales antes de digitalizar las mejores ideas.",
            },
            {
              title: "Desarrollo y Refinamiento",
              description:
                "Presentamos las propuestas y trabajamos contigo para pulir los detalles: color, forma y tipografía.",
            },
            {
              title: "Entrega de Master Files",
              description:
                "Recibes todos los archivos fuente y guías necesarias para aplicar tu nueva marca en el mundo real.",
            },
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CTAProducts
          title={"¿Listo para darle identidad a tu negocio?"}
          paragraph={
            "Una marca fuerte abre puertas. Comencemos a diseñar la imagen que tu empresa merece."
          }
          links={[
            {
              label: "Cotizar mi Branding",
              link: "/contacto",
              type: "services",
            },
          ]}
        />
      </section>
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <FAQ faqs={faqs} />
      </section>
    </>
  );
}
