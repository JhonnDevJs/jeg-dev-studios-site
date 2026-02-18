"use client";
import StructuredData from "@/components/Seo/StructuredData";
import CTAProducts from "@/components/Cta/CTAProducts";
import FAQ from "@/components/Seo/FAQ";
import CardInfo from "@/components/Cards/CardInfo";
import TimelineProcess from "@/components/Cards/TimelineProcess";

export default function UxUiWebClient() {
  const faqs = [
    {
      question: "¿Qué es la diferencia entre UX y UI?",
      answer:
        "UX (Experiencia de Usuario) se enfoca en cómo funciona el producto y cómo se siente al usarlo (flujos, arquitectura de información). UI (Interfaz de Usuario) se enfoca en cómo se ve (colores, tipografías, botones). Combinamos ambos para crear productos digitales completos.",
    },
    {
      question: "¿Entregan el diseño listo para programar?",
      answer:
        "Sí. Usamos Figma para entregar archivos ordenados, con sistemas de diseño, guías de estilo y assets exportables listos para que cualquier equipo de desarrollo (o nosotros mismos) pueda implementarlos fielmente.",
    },
    {
      question: "¿Hacen pruebas con usuarios reales?",
      answer:
        "Dependiendo del alcance del proyecto, implementamos pruebas de usabilidad (testing) con prototipos interactivos para validar decisiones de diseño antes de pasar a la etapa de código.",
    },
  ];

  return (
    <>
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-uxui" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-uxui" />

      {/* HERO SECTION */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mt-3">
          Diseño UX/UI: Interfaces que Enamoran y Convierten
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-4xl">
          El éxito de un producto digital no es casualidad; es diseño. Creamos
          interfaces intuitivas, accesibles y estéticamente impactantes que
          guían a tus usuarios sin fricción hacia sus objetivos (y los tuyos).
        </p>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                Diseño Centrado en el Humano
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Validar antes de Programar
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Reducimos el riesgo de desarrollo. Prototipamos la experiencia
                completa en alta fidelidad para que veas, toques y pruebes tu
                producto antes de invertir en código.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative perspective-1000">
              {/* Visual abstract representation of UI Mockup */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out max-w-sm mx-auto">
                <div className="w-full bg-gray-100 dark:bg-gray-900 h-64 rounded-xl mb-4 relative overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-8 bg-white dark:bg-gray-800 rounded shadow-sm flex items-center px-2 space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="absolute top-16 left-4 w-1/2 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="absolute top-24 left-4 right-4 grid grid-cols-2 gap-2">
                    <div className="h-20 bg-blue-100 dark:bg-blue-900/20 rounded"></div>
                    <div className="h-20 bg-blue-100 dark:bg-blue-900/20 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
                    UI
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="flex flex-col justify-center items-center text-center w-full gap-3 py-12 md:py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Nuestras Especialidades en UX/UI
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <CardInfo
            title="Diseño de Sitios Web y Landing Pages"
            description="Estructuras optimizadas para la conversión. Diseñamos pensando en SEO, velocidad y retención de usuarios."
          />
          <CardInfo
            title="Diseño de Aplicaciones Móviles (iOS/Android)"
            description="Interfaces nativas o híbridas que respetan las guías de diseño de Apple y Google para una experiencia familiar y fluida."
          />
          <CardInfo
            title="Diseño de Sistemas (Design Systems)"
            description="Creamos bibliotecas de componentes reutilizables para garantizar la consistencia visual y acelerar el desarrollo futuro."
          />
          <CardInfo
            title="Auditoría de UX"
            description="Analizamos tu producto actual para identificar puntos de dolor, fricciones y oportunidades de mejora en la usabilidad."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <div className="container max-w-4xl mx-auto w-full mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Diseño Basado en Datos y Usuarios
          </h2>
        </div>
        <TimelineProcess
          steps={[
            {
              title: "Investigación (Research)",
              description:
                "Analizamos a tu competencia y entrevistamos a usuarios potenciales para entender qué necesitan realmente.",
            },
            {
              title: "Arquitectura de Información y Wireframes",
              description:
                "Organizamos el contenido y definimos los flujos de navegación en baja fidelidad (bocetos).",
            },
            {
              title: "Diseño UI (Alta Fidelidad)",
              description:
                "Aplicamos la capa visual: colores, tipografía, imágenes e interacciones para dar vida al producto.",
            },
            {
              title: "Prototipado y Entrega",
              description:
                "Conectamos las pantallas para simular el funcionamiento real y preparamos todos los assets para los desarrolladores.",
            },
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CTAProducts
          title={"¿Tienes una idea de app o web?"}
          paragraph={
            "No empieces a programar sin un plano. Diseñemos primero la experiencia perfecta para tus usuarios."
          }
          links={[
            {
              label: "Iniciar Diseño UX/UI",
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
