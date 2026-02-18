// Ruta: /servicios/seo/local/page

// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import CTAProducts from "@/components/Cta/CTAProducts"; // Asumo que tienes un CTA
import CardInfo from "@/components/Cards/CardInfo";
import TimelineProcess from "@/components/Cards/TimelineProcess";

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "¿Qué es Google My Business o Perfil de Google?",
    answer:
      "El Perfil de Google</strong> (antes conocido como Google My Business o GMB) es la herramienta gratuita de empresas de Google que te permite gestionar cómo aparece tu negocio local en Google Maps y en los resultados de búsqueda. Es la piedra angular de cualquier estrategia de posicionamiento local.",
  },
  {
    question: "¿Cuánto tardo en ver resultados en Google Maps?",
    answer:
      "El SEO local suele ser más rápido que el SEO web nacional. Aunque depende de la competencia, generalmente puedes empezar a ver mejoras en tus posiciones en Google y en Google Maps en un plazo de 1 a 3 meses.",
  },
  {
    question: "¿Este servicio incluye Google Ads o gestión de Redes Sociales?",
    answer:
      "No. Este servicio se enfoca 100% en el posicionamiento web orgánico. Google Ads es un servicio de publicidad de pago (SEM) y la gestión de redes sociales es parte de una estrategia de marketing digital más amplia, los cuales podemos cotizar por separado.",
  },
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function SeoLocalPage() {
  return (
    <>
      {/* --- INYECCIÓN DE SCHEMAS --- */}
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-seo-local" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-seo-local" />
      {/* (Opcional: puedes crear un schema "Service" para "SEO Local") */}

      {/* --- Sección Hero --- */}

      <section className="text-gray-900 dark:text-white py-12 md:py-20 px-4 text-center">
        <div className="container mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Agencia de SEO Local: Domina Google Maps
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600 dark:text-white">
            Para un negocio físico, no basta con tener un sitio web. Necesitas
            que te encuentren *en el momento exacto* que un cliente está
            buscándote "cerca de mí". Como <strong>agencia de SEO local</strong>
            , nuestra misión es <strong>aumentar la visibilidad</strong> de tu
            negocio en <strong>Google Maps</strong> y dominar las{" "}
            <strong>búsquedas locales</strong> en tu ciudad o colonia.
          </p>
        </div>
      </section>

      {/* --- Sección de Propuesta de Valor (MOFU / Informativa) --- */}
      <section className="text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y">
        <div className="container mx-auto max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            ¿Por Qué el SEO Local es tu Mejor Inversión?
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-white">
            Mientras el <strong>posicionamiento web</strong> nacional busca
            <strong>palabras claves</strong> genéricas, el{" "}
            <strong>SEO local</strong> captura{" "}
            <strong>clientes potenciales</strong> con la mayor intención de
            compra. Aparecer en el "Map Pack" (el bloque de 3 negocios en{" "}
            <strong>Google Maps</strong>) te pone por delante de tus
            competidores directos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <CardInfo
              title="Atrae Clientes Listos para Comprar"
              description='Las búsquedas locales (ej. "restaurante cerca de mí") tienen una altísima intención transaccional. Estar en las primeras posiciones en Google para esas búsquedas se traduce en llamadas, visitas y ventas.'
            />
            <CardInfo
              title="Construye Confianza y Autoridad Local"
              description="Un Perfil de Google bien optimizado, con reseñas positivas y fotos de calidad, genera más confianza que cualquier anuncio de Google Ads. Te establece como una autoridad en tu zona."
            />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN VISUAL: GOOGLE MAP PACK --- */}
      <section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-red-600 uppercase bg-red-100 rounded-full dark:bg-red-900/30 dark:text-red-400">
                Visibilidad Geográfica
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Aparece Donde Importa: El "Map Pack"
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                El 90% de los clics en búsquedas locales se quedan en los
                primeros 3 resultados del mapa.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Optimizamos tu ficha para que Google te elija a ti sobre tu
                competencia cuando alguien busca tus servicios en tu zona.
              </p>
            </div>

            {/* Wireframe Map Pack */}
            <div className="w-full md:w-1/2 relative perspective-1000">
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 overflow-hidden transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out max-w-sm mx-auto">
                {/* Search Bar */}
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full h-10 mb-4 flex items-center px-4 shadow-inner">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400 mr-2"></div>
                  <div className="w-32 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>

                {/* Map Area */}
                <div className="w-full h-40 bg-gray-200 dark:bg-gray-600 rounded-xl mb-4 relative overflow-hidden">
                  <div className="absolute top-10 left-10 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg animate-bounce"></div>
                  <div className="absolute top-20 right-20 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="absolute bottom-10 left-20 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                </div>

                {/* Results List */}
                <div className="space-y-3">
                  {/* Result 1 (Winner) */}
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30 flex gap-3">
                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-md shrink-0"></div>
                    <div className="flex-grow">
                      <div className="w-3/4 h-4 bg-gray-800 dark:bg-white rounded mb-1"></div>
                      <div className="flex gap-1 mb-1">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div className="w-1/2 h-3 bg-gray-400 dark:bg-gray-500 rounded"></div>
                    </div>
                  </div>
                  {/* Result 2 */}
                  <div className="p-3 rounded-lg flex gap-3 opacity-60">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-md shrink-0"></div>
                    <div className="flex-grow space-y-2">
                      <div className="w-2/3 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      <div className="w-1/2 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Sección de Características del Servicio (MOFU / Comercial) --- */}
      <section className="text-gray-900 dark:text-white py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Nuestra Estrategia de Posicionamiento Local
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-600 dark:text-white">
            No somos una <strong>agencia seo</strong> genérica. Tenemos una
            metodología probada para el <strong>SEO local</strong>, que incluye:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CardInfo
              title="Optimización del Perfil de Google (GMB)"
              description="Auditamos y optimizamos cada sección de tu Perfil de Google (antes Google My Business). Categorías, fotos, servicios, Q&A y publicaciones para dominar el resultado de búsqueda local."
            />
            <CardInfo
              title="Gestión de Citaciones Locales (NAP)"
              description="Aseguramos que tu Nombre, Dirección y Teléfono (NAP) sean consistentes en todos los directorios locales (Sección Amarilla, Yelp, etc.). Esto es vital para que los motores de búsqueda confíen en tu ubicación."
            />
            <CardInfo
              title="SEO On-Page Localizado"
              description='Optimizamos el diseño web y contenido de tu sitio para reflejar tu ubicación. Creamos páginas de "cerca de mí" y optimizamos tus etiquetas de encabezado con keywords locales.'
            />
            <CardInfo
              title="Link Building y Reseñas"
              description="Desarrollamos una estrategia de link building local para obtener enlaces de autoridad en tu ciudad. Además, te damos las herramientas para conseguir y gestionar reseñas positivas de tus clientes."
            />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE PROCESO (TIMELINE) --- */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <div className="container max-w-4xl mx-auto w-full mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestro Proceso de Posicionamiento Local
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-white">
            Un enfoque paso a paso para poner tu negocio en el mapa.
          </p>
        </div>
        <TimelineProcess
          steps={[
            {
              title: "Auditoría y Reclamo de Perfil",
              description:
                "Verificamos el estado actual de tu ficha en Google Maps. Si no tienes acceso, gestionamos la recuperación de la propiedad. Analizamos a tu competencia local.",
            },
            {
              title: "Optimización NAP y Citaciones",
              description:
                "Estandarizamos tu Nombre, Dirección y Teléfono en todo internet. Creamos perfiles en los directorios locales más relevantes para tu ciudad.",
            },
            {
              title: "Contenido Local y GMB",
              description:
                "Publicamos actualizaciones semanales, subimos fotos geoetiquetadas y optimizamos tu sitio web con palabras clave específicas de tu zona.",
            },
            {
              title: "Gestión de Reputación",
              description:
                "Implementamos estrategias para conseguir más reseñas de 5 estrellas y respondemos a los clientes para mejorar tu tasa de interacción.",
            },
          ]}
        />
      </section>

      {/* --- Sección de Video (Requisito de SEMrush) --- */}
      <section className="text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y text-center">
        <div className="container mx-auto max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Cómo Dominar el "Map Pack" de Google
          </h2>
          <p className="text-lg md:text-xl mt-4 text-gray-600 dark:text-white">
            El <strong>posicionamiento SEO</strong> local tiene sus propios
            trucos. Mira este video donde nuestro <strong>consultor SEO</strong>{" "}
            explica 3 factores clave para que tu negocio aparezca en las
            primeras posiciones de <strong>Google Maps</strong>.
          </p>
          <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto mt-8">
            {/* <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/TU_URL_DE_TU_VIDEO" 
                title="Video sobre Cómo Dominar Google Maps" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy">
              </iframe>
              */}
          </div>
        </div>
      </section>

      {/* --- Sección de Cross-link (Triaje) --- */}
      <section className="text-gray-900 dark:text-white py-12 md:py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            ¿Vendes a Nivel Nacional?
          </h2>
          <p className="text-lg md:text-xl mt-4 text-gray-600 dark:text-white">
            El <strong>SEO local</strong> es para negocios con una ubicación
            física. Si tu empresa es un e-commerce o una consultora que vende en
            todo México, lo que necesitas es nuestro servicio de{" "}
            <strong>SEO Web</strong>.
          </p>
          <nav className="flex justify-center gap-3 mt-4">
            <Link
              href="/servicios/seo/web"
              className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 font-bold py-3 px-6 rounded-lg text-lg transition-colors"
            >
              Ver Servicios de SEO Web
            </Link>
          </nav>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <FAQ faqs={faqs} />
      </section>

      {/* --- Sección CTA Final (BOFU) --- */}

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CTAProducts
          title={"¿Listo para Recibir Clientes de tu Zona?"}
          paragraph={
            "Deja de ser invisible para los clientes que están a la vuelta de la esquina. Es hora de que tu negocio domine las búsquedas locales y convierta ese tráfico en clientes potenciales reales."
          }
          links={[
            {
              label: "Solicitar mi Auditoría de SEO Local",
              link: "/contacto",
              type: "services", // Puedes usar 'services' o 'outline'
            },
          ]}
        />
      </section>
    </>
  );
}
