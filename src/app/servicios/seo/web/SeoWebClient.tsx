// Ruta: /servicios/seo/web/page

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
    question: "¿Qué es una 'auditoría SEO' y por qué la necesito?",
    answer:
      "Una auditoría SEO es un diagnóstico completo de tu sitio. Revisamos más de 100 factores técnicos, de contenido y de autoridad para encontrar por qué no estás rankeando. Es el primer paso obligatorio para cualquier estrategia de seo exitosa.",
  },
  {
    question: "¿Son un 'consultor SEO en México' o una 'agencia SEO' completa?",
    answer:
      "Somos una agencia SEO completa. Esto significa que no solo te damos un reporte (como haría un consultor SEO), sino que nuestro equipo especializado implementa los cambios, crea el contenido y ejecuta la estrategia para conseguir resultados.",
  },
  {
    question:
      "¿Este servicio de posicionamiento web incluye la gestión de redes sociales?",
    answer:
      "No directamente. Este servicio se enfoca 100% en el tráfico orgánico desde motores de búsqueda. La gestión de redes sociales es parte de nuestros servicios de marketing digital, aunque el contenido que creamos para SEO puede ser reutilizado en tus perfiles.",
  },
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function SeoWebPage() {
  return (
    <>
      {/* --- INYECCIÓN DE SCHEMAS --- */}
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-seo-web" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-seo-web" />
      {/* (Opcional: puedes crear un schema "Service" para "Consultoría SEO Web") */}

      {/* --- Sección Hero --- */}

      <section className="text-gray-900 dark:text-white py-12 md:py-20 px-4 text-center">
        <div className="container mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Consultoría SEO Web y Servicios On-Page
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600 dark:text-white">
            Lleva tu <strong>posicionamiento web</strong> al siguiente nivel.
            Nuestra <strong>consultoría SEO</strong> está diseñada para
            e-commerce, blogs y empresas SaaS que compiten a nivel nacional.
            Atraemos <strong>tráfico orgánico</strong> de{" "}
            <strong>alta calidad</strong> optimizando tu sitio para el{" "}
            <strong>motor de búsqueda</strong> (Google).
          </p>
        </div>
      </section>

      {/* --- Sección de Propuesta de Valor (MOFU / Informativa) --- */}
      <section className="text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y">
        <div className="container mx-auto max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            ¿Qué es el SEO On-Page y por qué es Fundamental?
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-white">
            El <strong>SEO On-Page</strong> (u <strong>"on page"</strong>) es la
            base de todas las <strong>estrategias de seo</strong>. Se refiere a
            la optimización de todo lo que está *dentro* de tu página
            (contenido, imágenes, velocidad) para que Google entienda
            perfectamente de qué tratas y te considere relevante para una{" "}
            <strong>consulta de búsqueda</strong>. Un{" "}
            <strong>diseño web</strong> técnico y una buena arquitectura de{" "}
            <strong>enlaces internos</strong> son el primer paso.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN VISUAL: SERP DOMINATION --- */}
      <section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                Resultados de Búsqueda
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Destaca en la Primera Página
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                No basta con aparecer. Tu resultado debe ser irresistible.
                Optimizamos títulos, meta descripciones y datos estructurados
                (Rich Snippets).
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Logramos que tu sitio ocupe más espacio visual en Google,
                aumentando drásticamente tu tasa de clics (CTR).
              </p>
            </div>

            {/* Wireframe SERP */}
            <div className="w-full md:w-1/2 relative perspective-1000">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 overflow-hidden transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">
                {/* Search Bar */}
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                  <div className="w-24 h-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                  <div className="w-full h-8 bg-gray-100 dark:bg-gray-700 rounded-full shadow-inner"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  {/* Result 1 (Competitor) */}
                  <div className="opacity-50">
                    <div className="w-32 h-3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="w-3/4 h-5 bg-blue-300 dark:bg-blue-900/50 rounded mb-2"></div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>

                  {/* Result 2 (Optimized - Winner) */}
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30 relative">
                    <div className="absolute -left-2 top-4 w-1 h-12 bg-blue-500 rounded-r-full"></div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div className="w-40 h-3 bg-gray-400 dark:bg-gray-500 rounded"></div>
                    </div>
                    <div className="w-5/6 h-6 bg-blue-600 dark:bg-blue-400 rounded mb-3 shadow-sm"></div>
                    <div className="w-full h-3 bg-gray-500 dark:bg-gray-400 rounded mb-2"></div>
                    <div className="w-2/3 h-3 bg-gray-500 dark:bg-gray-400 rounded mb-3"></div>
                    {/* Rich Snippets */}
                    <div className="flex gap-2">
                      <div className="w-16 h-4 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-200 dark:border-yellow-800/50"></div>
                      <div className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                  </div>

                  {/* Result 3 */}
                  <div className="opacity-50">
                    <div className="w-32 h-3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="w-2/3 h-5 bg-blue-300 dark:bg-blue-900/50 rounded mb-2"></div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
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
            Nuestros Servicios de SEO On-Page Incluyen
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-600 dark:text-white">
            Como tu <strong>agencia SEO</strong>, no dejamos nada al azar.
            Nuestro servicio es un ciclo completo de optimización técnica y
            semántica.
          </p>
          {/* Asumo un layout de 2 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CardInfo
              title="Auditoría SEO Completa"
              description="Todo proyecto inicia con una auditoría seo profunda. Analizamos tu velocidad, indexación, arquitectura de enlaces internos, y competencia para crear una estrategia ganadora."
            />
            <CardInfo
              title="Optimización Técnica On-Page"
              description="Corregimos el código. Optimizamos tus etiquetas de encabezado (H1-H6), meta descripciones, y la compresión de imágenes para garantizar un performance impecable."
            />
            <CardInfo
              title="Estrategia de Palabra Clave"
              description="Investigamos cada consulta de búsqueda relevante. Mapeamos cada palabra clave a la intención de búsqueda correcta (TOFU, MOFU, BOFU) para construir tu embudo."
            />
            <CardInfo
              title="Optimización de Contenido"
              description="Mejoramos tu contenido existente y creamos nuevas piezas. Nos aseguramos de que cada página responda a la intención de búsqueda del usuario y te posicione como una autoridad."
            />
          </div>
        </div>
      </section>

      {/* --- Sección de Cross-link (Triaje) --- */}
      <section className="text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y text-center">
        <div className="container mx-auto max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            ¿Tu Negocio es Local?
          </h2>
          <p className="text-lg md:text-xl mt-4 text-gray-600 dark:text-white">
            Esta <strong>consultoría seo</strong> se enfoca en el
            posicionamiento nacional. Si tu negocio depende de clientes en tu
            ciudad o colonia (como un restaurante, dentista o tienda), lo que
            necesitas es nuestro servicio especializado de SEO Local.
          </p>
          <nav className="flex justify-center gap-3 mt-4">
            <Link
              href="/servicios/seo/local"
              className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 font-bold py-3 px-6 rounded-lg text-lg transition-colors"
            >
              Ver Servicios de SEO Local
            </Link>
          </nav>
        </div>
      </section>

      {/* --- Sección de Proceso (Informativa) --- */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <div className="container max-w-4xl mx-auto w-full mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            De Tráfico Orgánico a Clientes Potenciales
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-white">
            Nuestra metodología convierte visitantes en ventas.
          </p>
        </div>
        <TimelineProcess
          steps={[
            {
              title: "Diagnóstico y Auditoría",
              description:
                "Analizamos el estado actual de tu sitio web, identificando errores técnicos, problemas de indexación y oportunidades de mejora inmediata.",
            },
            {
              title: "Investigación de Palabras Clave",
              description:
                "Descubrimos qué busca exactamente tu cliente ideal. Seleccionamos las keywords con mayor potencial de tráfico y conversión para tu nicho.",
            },
            {
              title: "Optimización On-Page",
              description:
                "Mejoramos la estructura, el contenido y el código de tu sitio. Optimizamos títulos, meta descripciones y velocidad de carga para que Google te ame.",
            },
            {
              title: "Autoridad y Link Building",
              description:
                "Construimos la reputación de tu dominio mediante una estrategia de enlaces de calidad y marketing de contenidos que te posiciona como líder.",
            },
          ]}
        />
      </section>
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <FAQ faqs={faqs} />
      </section>

      {/* --- Sección CTA Final (BOFU) --- */}

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CTAProducts
          title={"¿Listo para Dominar el Resultado de Búsqueda?"}
          paragraph={
            "Deja de perder clientes potenciales frente a tu competencia. Es hora de que tu sitio web tenga una estrategia de seo profesional y domine su sector. Hablemos de tu proyecto."
          }
          links={[
            {
              label: "Solicitar mi Auditoría SEO Web",
              link: "/contacto",
              type: "services", // Puedes usar 'services' o 'outline'
            },
          ]}
        />
      </section>
    </>
  );
}
