import Link from "next/link";
import Image from "next/image";
// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ";
import CTAProducts from "@/components/Cta/CTAProducts";
import CardSmallList from "@/components/Cards/CardSmallList";
import CardPricing from "@/components/Cards/CardPricing";
import ShowcaseSection from "@/components/ShowcaseSection";

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA ---

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "¿Qué es un CMS o 'sistema de gestión de contenidos'?",
    answer:
      "Un sistema de gestión de contenidos (CMS) es la herramienta que te permite escribir, editar y publicar una entrada de blog sin saber programar. Nosotros te lo entregamos configurado, ya sea WordPress, Blogger o un CMS Headless (como Strapi) para tu blog en Next.js.",
  },
  {
    question: "¿WordPress vs. Next.js: ¿Cuál es mejor para mi blog?",
    answer:
      "Depende. Instalar WordPress es ideal para un blog personal o de Pyme que busca muchas opciones de personalización rápidamente. Un blog en Next.js es una solución premium para empresas que buscan el máximo rendimiento, seguridad y una experiencia de gestión de contenido superior.",
  },
  {
    question: "¿Cómo puedo 'promocionar mi blog' una vez que esté hecho?",
    answer:
      "La promoción es clave. Puedes usar herramientas de marketing como el correo electrónico (email marketing) para tus suscriptores, compartir cada entrada de blog en redes sociales, y por supuesto, la optimización para motores de búsqueda (SEO) que ya incluimos.",
  },
  {
    question: "¿Este servicio incluye métodos de monetización?",
    answer:
      "Nuestro servicio construye la plataforma técnica. Si tu estrategia incluye métodos de monetización (como anuncios de AdSense, venta de infoproductos o contenido bajo un plan de pago), nosotros implementamos las integraciones técnicas necesarias para que puedas hacerlo.",
  },
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function BlogDevelopmentPage() {
  return (
    <>
      {/* --- INYECCIÓN DE SCHEMAS --- */}
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-blogs" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-blogs" />

      {/* --- Sección Hero --- */}

      <section className="text-gray-900 dark:text-white py-12 md:py-20 text-center">
        <div className="container mx-auto px-4">
          {/* H1 ACTUALIZADO con keywords objetivo */}
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Servicio de Desarrollo de Blogs: Crea un Blog para Empresa en
            Next.js
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600 dark:text-white">
            En la era del contenido, tu blog es tu principal herramienta de
            marketing digital. Es el motor para atraer clientes potenciales
            (TOFU) y construir confianza. Ofrecemos un servicio de desarrollo de
            blogs para que puedas tener un blog con CMS rápido, seguro y fácil
            de administrar.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN DE MUESTRA VISUAL --- */}
      <ShowcaseSection
        imageSrc="/banners/Christmas/Web.webp"
        alt="Ejemplo de Blog Corporativo Optimizado"
        title="Experiencia de Lectura Inmersiva"
        badgeColor="bg-blue-600"
      />

      {/* --- Sección de Propuesta de Valor (MOFU / Informativa) --- */}
      <section className="text-gray-900 dark:text-white py-12 md:py-20 gradient-effect-y">
        <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            ¿Por Qué un Blog Profesional y no un Blog Gratis?
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-white">
            Un blog gratis o un blog personal en una plataforma de blogs
            genérica limita tu crecimiento. Al crear un blog para empresa con un
            dominio personalizado, obtienes ventajas cruciales:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Atrae Tráfico Orgánico (SEO)
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Cada entrada de blog es una nueva página que los motores de
                  búsqueda pueden indexar. Un blog optimizado te permite atraer
                  a tu público objetivo respondiendo sus dudas.
                </p>
              </div>
            </div>
            <div>
              <div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Genera Autoridad y Confianza
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Publicar contenido de valor te posiciona como un experto en tu
                  industria. Responde dudas, ofrece guías y demuestra por qué
                  eres la mejor opción.
                </p>
              </div>
            </div>
            <div>
              <div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Control Total y Personalización
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Olvida las limitaciones de un blog gratis. Con un blog con CMS
                  propio, tienes 100% de control sobre el diseño y las opciones
                  de personalización.
                </p>
              </div>
            </div>
            <div>
              <div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Captura de Clientes Potenciales
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Tu blog es la herramienta perfecta para convertir visitantes
                  en leads. Integramos llamadas a la acción (CTAs) y formularios
                  de correo electrónico para hacer crecer tu lista.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN VISUAL: ESTRUCTURA DE UN BLOG OPTIMIZADO --- */}
      <section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                Arquitectura de Contenido
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Diseñado para la Lectura y el SEO
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                No es solo texto. Estructuramos cada entrada de blog para
                maximizar la retención del lector y la indexación en Google.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Encabezados claros, tablas de contenido, bloques de código y
                llamadas a la acción estratégicas integradas en el diseño.
              </p>
            </div>

            {/* Wireframe Blog */}
            <div className="w-full md:w-1/2 relative perspective-1000">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 overflow-hidden transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                  <div className="w-24 h-6 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                </div>
                {/* Title & Meta */}
                <div className="mb-6 space-y-3">
                  <div className="w-3/4 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="flex gap-2">
                    <div className="w-20 h-4 bg-blue-100 dark:bg-blue-900/40 rounded"></div>
                    <div className="w-20 h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
                {/* Content Body */}
                <div className="flex gap-6">
                  <div className="w-2/3 space-y-4">
                    <div className="w-full h-32 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                    <div className="w-full h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="w-full h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="w-5/6 h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  {/* Sidebar */}
                  <div className="w-1/3 space-y-4">
                    <div className="w-full h-20 bg-gray-50 dark:bg-gray-700/50 rounded border border-dashed border-gray-200 dark:border-gray-600"></div>
                    <div className="w-full h-40 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-800/30 flex items-center justify-center">
                      <div className="w-20 h-8 bg-blue-600 rounded text-xs text-white flex items-center justify-center">
                        CTA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Sección de Paquetes (BOFU) --- */}
      <section className="text-gray-900 dark:text-white py-12 md:py-20 text-center">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestras Soluciones para tu Blog
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-600 dark:text-white">
            Ofrecemos tres planes de pago que se adaptan a tu presupuesto y
            necesidad técnica. Todos incluyen dominio personalizado por 1 año.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Opción 1: Blogger */}
            <CardPricing
              title="Blog Starter (Blogger)"
              price="1,999"
              currency="MXN"
              description="Ideal para arrancar. Usamos la plataforma de Blogger de Google, conectada a tu dominio propio."
              features={[
                "Plataforma: Blogger de Google",
                "Dominio Personalizado (1 Año)",
                "Hosting Gratuito de Google",
                "Plantilla semi-personalizada",
                "Fácil de usar (gestión simple)",
              ]}
              buttonLabel="Contratar Starter"
              buttonLink="/contacto?producto=blog-blogger"
            />

            {/* Opción 2: WordPress */}
            <CardPricing
              title="Blog Pro (WordPress)"
              price="4,999"
              currency="MXN"
              description="La plataforma de blogs más popular. Te permite instalar WordPress en tu propio hosting con miles de opciones de personalización."
              features={[
                "Plataforma: WordPress.org",
                "Dominio Personalizado (1 Año)",
                "Requiere Hosting (No incluido)",
                "Tema premium y plugins SEO",
                "Máxima personalización",
              ]}
              buttonLabel="Contratar Pro"
              buttonLink="/contacto?producto=blog-wordpress"
            />

            {/* Opción 3: Next.js */}
            <CardPricing
              title="Blog Ultimate (Next.js)"
              price="14,999"
              currency="MXN"
              description="La solución más rápida y segura. Un blog en Next.js con un blog con CMS Headless (Strapi)."
              features={[
                "Plataforma: Next.js + Strapi CMS",
                "Dominio Personalizado (1 Año)",
                "Hosting Vercel/Netlify (Incluido)",
                "Rendimiento y Seguridad Superior",
                "100% Personalizado a tu marca",
              ]}
              buttonLabel="Contratar Ultimate"
              buttonLink="/contacto?producto=blog-nextjs"
            />
          </div>
        </div>
      </section>

      {/* --- Sección de Video (Requisito de SEMrush) --- */}
      <section className="text-gray-900 dark:text-white py-12 md:py-20 gradient-effect-y text-center">
        <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Qué es un Blog con CMS Headless?
          </h2>
          <p className="text-lg md:text-xl mt-4 text-gray-600 dark:text-white">
            El futuro de la gestión de contenido es "headless". Mira este video
            donde explicamos por qué un blog en Next.js con un blog con CMS
            (como Strapi) es técnicamente superior a las plataformas
            tradicionales como WordPress.
          </p>
          <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto mt-8">
            {/* <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/TU_URL_DE_TU_VIDEO" 
                title="Video sobre CMS Headless vs WordPress" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy">
              </iframe>
              */}
          </div>
        </div>
      </section>

      {/* --- NUEVA SECCIÓN SEMÁNTICA --- */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CardSmallList
          titulo="Cómo Promocionar tu Blog"
          subtitulo="Nuestro servicio de desarrollo de blogs te da la plataforma. El éxito viene al promocionar tu blog mediante estrategias efectivas."
          list={[
            "Email Marketing: Captura el correo electrónico de tus lectores y envíales cada nueva entrada de blog.",
            "Redes Sociales: Promociona tu blog en todos tus canales sociales (LinkedIn, Instagram, X) para alcanzar a tu público objetivo.",
            "Herramientas de Marketing: Integramos tu blog con Google Analytics y Search Console para medir tu tráfico y encontrar nuevas oportunidades.",
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <FAQ faqs={faqs} />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CTAProducts
          title={"¿Listo para Convertirte en una Autoridad en tu Sector?"}
          paragraph={
            "Deja de publicar en plataformas prestadas. Es hora de construir tu propio motor de contenidos y atraer a tus clientes ideales. Hablemos de tu proyecto."
          }
          links={[
            {
              label: "Solicitar Consultoría para mi Blog",
              link: "/contacto",
              type: "services", // Puedes usar 'services' o 'outline'
            },
          ]}
        />
      </section>
    </>
  );
}
