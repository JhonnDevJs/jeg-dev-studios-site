// Ruta: /servicios/desarrollo/web/landing-pages/page
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import SectionProcess from "@/components/SectionProcess";
import CardPricing from "@/components/Cards/CardPricing";
import CardInfo from "@/components/Cards/CardInfo";
import AnatomyItem from "@/components/Cards/AnatomyItem";
import ShowcaseSection from "@/components/ShowcaseSection";

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "¿Cuál es la diferencia entre una 'landing page' y un sitio web?",
    answer:
      "Un sitio web tiene múltiples objetivos (informar, contactar, etc.). Una landing page (o página de aterrizaje) tiene UN solo objetivo: que el usuario realice una acción deseada específica. Esto es clave para aumentar las conversiones.",
  },
  {
    question: "¿Qué son las 'páginas de destino'?",
    answer:
      "Páginas de destino y páginas de aterrizaje son lo mismo. Son páginas diseñadas para recibir el tráfico de campañas de marketing (ya sea desde redes sociales, anuncios de Google o un correo electrónico) y convertir a ese visitante en un cliente potencial.",
  },
  {
    question: "¿Cómo miden el éxito de una landing page?",
    answer:
      "Una landing page efectiva se mide por su tasa de conversión (cuántas personas realizan la llamada a la acción) y su tasa de rebote. Nuestro proceso está diseñado para maximizar la primera y minimizar la segunda.",
  },
];

export default function LandingPageDevelopmentPage() {
  return (
    <>
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-landing" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-landing" />

      {/* --- HERO SECTION --- */}

      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4 text-center">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Diseño de Landing Page de Alta Conversión
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-4xl mx-auto mt-4">
            ¿Inviertes en <strong>campañas de marketing</strong> pero no ves
            resultados? El problema podría no ser tu anuncio, sino tu{" "}
            <strong>página de aterrizaje</strong>. Ofrecemos un servicio experto
            de <strong>creación de páginas de aterrizaje</strong> enfocado en
            una sola cosa: <strong>aumentar las conversiones</strong> y capturar
            más <strong>clientes potenciales</strong>.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN DE MUESTRA VISUAL --- */}
      <ShowcaseSection
        imageSrc="/banners/Christmas/Web.webp"
        alt="Ejemplo de Landing Page de Alta Conversión"
        title="Estructura que Convierte"
        badgeColor="bg-orange-600"
      />

      {/* --- SECCIÓN NUEVA: CASOS DE USO (Aumenta Contenido Informativo) --- */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y">
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-900 dark:text-white">
            ¿Cuándo es Indispensable una Landing Page?
          </h2>
          <p className="text-lg md:text-xl text-center mb-5 max-w-4xl mx-auto text-gray-600 dark:text-white">
            No siempre necesitas un sitio web completo. Una{" "}
            <strong>landing page para campañas de marketing</strong>
            es la herramienta correcta cuando tienes un objetivo específico y
            necesitas enfocar la atención de tu
            <strong>público objetivo</strong> sin distracciones.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <CardInfo
              title="Lanzamiento de Producto"
              description="Si vas a lanzar un nuevo producto al mercado, necesitas una página dedicada que explique sus beneficios, muestre videos y guíe al usuario a comprar o reservarlo. Una landing page exitosa elimina el menú de navegación para evitar que el usuario se vaya a otras secciones."
            />
            <CardInfo
              title="Campañas de Google Ads y Redes Sociales"
              description="Nunca envíes tráfico de pago a tu página de inicio (Home). Debes enviarlos a una página de destino que coincida exactamente con lo que prometió el anuncio. Esto mejora tu Nivel de Calidad en Google y reduce tu costo por clic."
            />
            <CardInfo
              title="Captación de Leads (Lead Magnets)"
              description="Si ofreces un ebook, un webinar o una consulta gratuita, necesitas una página sencilla con un formulario claro. El objetivo es intercambiar valor por el correo electrónico del visitante para nutrirlo después."
            />
            <CardInfo
              title="Eventos y Webinars"
              description="Para registrar asistentes, necesitas una página que genere urgencia, muestre la agenda y tenga un call to action (CTA) irresistible."
            />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN VISUAL: ESTRUCTURA DE ALTA CONVERSIÓN --- */}
      <section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-400">
                Anatomía de Ventas
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Estructura Psicológica Persuasiva
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Cada píxel tiene un propósito. Eliminamos distracciones (como
                menús de navegación) y enfocamos todo en la llamada a la acción.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Utilizamos patrones de lectura en "F" y "Z" para guiar el ojo
                del usuario directamente hacia el botón de conversión.
              </p>
            </div>

            {/* Wireframe Landing Page */}
            <div className="w-full md:w-1/2 relative perspective-1000">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 overflow-hidden transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out h-[400px] flex flex-col">
                {/* Hero Section */}
                <div className="w-full h-1/2 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center space-y-2 z-10">
                    <div className="w-48 h-4 bg-gray-300 dark:bg-gray-600 rounded mx-auto"></div>
                    <div className="w-32 h-3 bg-gray-200 dark:bg-gray-600/50 rounded mx-auto"></div>
                    <div className="w-24 h-8 bg-orange-500 rounded mx-auto mt-4 shadow-lg shadow-orange-500/30"></div>
                  </div>
                  {/* Abstract shapes */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                </div>
                {/* Social Proof */}
                <div className="flex justify-center gap-4 mb-4 opacity-50">
                  <div className="w-12 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="w-12 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="w-12 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 flex-grow">
                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded p-2">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded p-2">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/50 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE ANATOMÍA (Optimizada Semánticamente) --- */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4">
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            La Anatomía de una Landing Page Efectiva
          </h2>
          <p className="text-lg md:text-xl text-center mb-5 max-w-4xl mx-auto text-gray-600 dark:text-white">
            Para <strong>optimizar una landing page</strong>, no basta con un
            diseño bonito. Aplicamos una estructura probada para{" "}
            <strong>captar la atención</strong> y guiar hacia la{" "}
            <strong>toma de decisiones</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 text-left w-full mt-8">
            <AnatomyItem
              number="1"
              title="Título de Impacto (Hook)"
              description="El primer mensaje que ve tu usuario. Debe ser claro y prometer la solución a su problema en menos de 3 segundos."
            />
            <AnatomyItem
              number="2"
              title="Beneficios, no Características"
              description="Explicamos cómo tu producto mejora la vida del cliente. Usamos listas con viñetas para facilitar la lectura rápida."
            />
            <AnatomyItem
              number="3"
              title="Un Único 'Call to Action'"
              description="Eliminamos fugas. Ya sea 'Comprar', 'Registrarse' o 'Descargar', todos los botones de la página tienen el mismo objetivo."
            />
            <AnatomyItem
              number="4"
              title="Prueba Social (Confianza)"
              description="Integramos testimonios y logos de clientes. Esto reduce la fricción y es clave para aumentar las conversiones."
            />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN VIDEO (Requisito SEMrush) --- */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y text-center">
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Cómo Optimizar tu Landing Page
          </h2>
          <p className="text-lg md:text-xl mb-4 text-gray-600 dark:text-white">
            Creamos <strong>páginas de destino</strong> que siguen una
            estructura probada. Mira este video donde explicamos los 5 elementos
            clave para <strong>optimizar una landing page</strong>.
          </p>
          <div className="video-responsive-container max-w-3xl mx-auto">
            {/* AQUÍ VA TU VIDEO */}
            {/* <iframe ... /> */}
          </div>
        </div>
      </section>

      {/* --- NUEVA SECCIÓN: COMPARATIVA TÉCNICA (Aumenta volumen y autoridad) --- */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4">
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-900 dark:text-white">
            Tecnología: Creador Gratuito vs. Desarrollo a Medida
          </h2>
          <div className="w-full overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl bg-white dark:bg-surface-dark">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="text-center border-b border-gray-200 dark:border-white/10">
                  <th
                    scope="col"
                    className="text-lg p-6 font-extrabold text-gray-900 dark:text-white bg-gray-50 dark:bg-white/5 w-1/3"
                  >
                    Característica
                  </th>
                  <th
                    scope="col"
                    className="text-lg p-6 font-bold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-white/5 w-1/3"
                  >
                    Creador Genérico{" "}
                    <span className="block text-sm font-normal opacity-80">
                      (Wix, etc.)
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="text-lg p-6 font-extrabold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 w-1/3 relative"
                  >
                    <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-sm">
                      RECOMENDADO
                    </span>
                    Desarrollo a Medida{" "}
                    <span className="block text-sm font-normal opacity-80">
                      (Next.js)
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="align-middle">
                <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="font-bold p-6 border-b border-gray-100 dark:border-white/5 text-gray-900 dark:text-white">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-400">
                        speed
                      </span>
                      Velocidad de Carga
                    </div>
                  </td>
                  <td className="p-6 border-b border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 text-center">
                    Lenta{" "}
                    <span className="text-sm opacity-75 block">
                      (mucho código basura)
                    </span>
                  </td>
                  <td className="p-6 border-b border-gray-100 dark:border-white/5 text-gray-900 dark:text-white font-bold bg-blue-50/30 dark:bg-blue-900/10 text-center">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <span className="material-symbols-outlined">bolt</span>
                      Extrema (Código optimizado)
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="font-bold p-6 border-b border-gray-100 dark:border-white/5 text-gray-900 dark:text-white">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-400">
                        palette
                      </span>
                      Personalización
                    </div>
                  </td>
                  <td className="p-6 border-b border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 text-center">
                    Limitada a la plantilla
                  </td>
                  <td className="p-6 border-b border-gray-100 dark:border-white/5 text-gray-900 dark:text-white font-bold bg-blue-50/30 dark:bg-blue-900/10 text-center">
                    <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      100% Total (Pixel Perfect)
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="font-bold p-6 border-b border-gray-100 dark:border-white/5 text-gray-900 dark:text-white">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-400">
                        trending_up
                      </span>
                      Tasa de Rebote
                    </div>
                  </td>
                  <td className="p-6 border-b border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 text-center">
                    Alta{" "}
                    <span className="text-sm opacity-75 block">
                      (por lentitud)
                    </span>
                  </td>
                  <td className="p-6 border-b border-gray-100 dark:border-white/5 text-gray-900 dark:text-white font-bold bg-blue-50/30 dark:bg-blue-900/10 text-center">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <span className="material-symbols-outlined">
                        arrow_downward
                      </span>
                      Mínima (Carga instantánea)
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="font-bold p-6 text-gray-900 dark:text-white">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-400">
                        search
                      </span>
                      SEO Técnico
                    </div>
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400 text-center">
                    Básico
                  </td>
                  <td className="p-6 text-gray-900 dark:text-white font-bold bg-blue-50/30 dark:bg-blue-900/10 text-center">
                    <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                      <span className="material-symbols-outlined">
                        verified
                      </span>
                      Avanzado (Core Web Vitals)
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Un desarrollo a medida reduce la <strong>tasa de rebote</strong> y
            mejora la experiencia en
            <strong>dispositivos móviles</strong>, factores que Google ama.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN DE PAQUETES (BOFU) --- */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y text-center">
        <div className="flex flex-col justify-center items-center max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Nuestras Soluciones de Landing Page
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-4xl mx-auto">
            Ofrecemos dos caminos para tu{" "}
            <strong>landing page para campañas de marketing</strong>,
            dependiendo de tu necesidad y presupuesto.
          </p>

          <div className="flex flex-wrap justify-center items-stretch mt-5 gap-8">
            {/* Opción 1: Google Sites */}
            <CardPricing
              title="Landing Page Profesional"
              price="2,999"
              currency="MXN"
              description="Solución rápida y económica en Google Sites. Ideal para validar ideas o negocios que empiezan."
              features={[
                "Dominio personalizado incluido (1 año)",
                "Hosting gratuito (Google Sites)",
                "Diseño responsivo básico",
                "Hasta 5 secciones",
              ]}
              buttonLabel="Contratar ahora"
              buttonLink="/contacto?producto=landing-page-profesional"
            />

            {/* Opción 2: Next.js */}
            <CardPricing
              title="Landing de Alto Rendimiento"
              price="4,999"
              currency="MXN"
              description="La solución definitiva para campañas serias. Desarrollada en Next.js para máxima velocidad y SEO."
              features={[
                "Performance +90 Garantizado",
                "Diseño UI/UX en Figma (A medida)",
                "Formularios avanzados con integraciones",
                "Hosting y Dominio incluidos (1 año)",
              ]}
              buttonLabel="Cotizar Proyecto"
              buttonLink="/contacto?producto=landing-page-performance"
            />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE PROCESO DETALLADO --- */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <SectionProcess
          title={"Nuestro Proceso de Optimización (CRO)"}
          text={
            "No solo diseñamos, optimizamos. Nuestro proceso de Conversion Rate Optimization (CRO) asegura que tu inversión en publicidad rinda frutos."
          }
        />
      </section>
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <FAQ faqs={faqs} />
      </section>
    </>
  );
}
