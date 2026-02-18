// Ruta: /servicios/desarrollo/web/ecommerce/page

// Importa tus componentes
import StructuredData from "@/components/Seo/StructuredData"; // Ajusta esta ruta
import FAQ from "@/components/Seo/FAQ"; // Ajusta esta ruta
import CTAProducts from "@/components/Cta/CTAProducts"; // Asumo que tienes un CTA
import CardSmallList from "@/components/Cards/CardSmallList";
import ShowcaseSection from "@/components/ShowcaseSection";

// --- 2. DATOS PARA LOS COMPONENTES DE SCHEMA (FAQ ACTUALIZADA) ---

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "¿Qué formas de pago y opciones de pago integran?",
    answer:
      "Integramos todas las formas de pago más utilizadas para facilitar tus ventas online. Esto incluye pagos con tarjeta de débito y crédito (vía Stripe, Mercado Pago), pagos digitales como Apple Pay y Google Pay, transferencias bancarias (SPEI) y opciones de pago en efectivo (OXXO Pay).",
  },
  {
    question: "¿Por qué usan Strapi para el panel de administración?",
    answer:
      "Usamos Strapi porque es un CMS Headless líder. Nos permite darte un panel 100% personalizado, seguro y fácil de usar, que se conecta de forma ultra-rápida a tu tienda online desarrollada en Next.js, dándote el mejor rendimiento posible para vender por internet.",
  },
  {
    question: "¿Ustedes gestionan los nombres de dominios y el hosting?",
    answer:
      "Sí, nuestros paquetes de desarrollo de comercio electrónico pueden incluir el registro de tus nombres de dominios y el hosting por el primer año, para que solo te preocupes por ofrecer productos y empezar a vender.",
  },
  {
    question:
      "¿Este servicio incluye la estrategia de marketing digital para mi tienda?",
    answer:
      "Este servicio construye la plataforma tecnológica. Una estrategia de marketing completa (SEO, campañas en redes sociales, inbound marketing) es un servicio de Posicionamiento SEO que se contrata por separado y es fundamental para llevar clientes potenciales y brindar una mejor atención al cliente.",
  },
];

// --- 3. COMPONENTE DE LA PÁGINA ---

export default function EcommerceDevelopmentPage() {
  return (
    <>
      {/* --- INYECCIÓN DE SCHEMAS --- */}
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-ecommerce" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-ecommerce" />

      {/* (Puedes crear un 'serviceInfo' para esta página y pasarlo a tu componente) */}

      {/* --- Sección Hero --- */}

      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 text-center">
        <div className="flex flex-col justify-center items-center mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Desarrollo de Comercio Electrónico: Tu Tienda en Línea
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600 dark:text-white">
            Lleva tu negocio al siguiente nivel. Nuestro servicio de{" "}
            <strong>venta en línea</strong> está enfocado en la velocidad
            (Next.js), una gestión fácil (Strapi) y una experiencia de compra
            que convierte. Es hora de <strong>empezar a vender online</strong>.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN DE MUESTRA VISUAL --- */}
      <ShowcaseSection
        imageSrc="/banners/Christmas/Web.webp"
        alt="Ejemplo de Tienda en Línea Moderna"
        title="Diseño Enfocado en Ventas"
        badgeColor="bg-green-600"
      />

      {/* --- Sección de Propuesta de Valor (MOFU) --- */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4 gradient-effect-y">
        <div
          className="flex flex-col justify-center items-center w-full"
          style={{ maxWidth: "900px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            ¿Por Qué un eCommerce a Medida vs. una Plataforma Genérica?
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-white">
            Mientras otras plataformas te encierran en plantillas, un desarrollo
            a medida te da libertad. Te permite diferenciarte de la competencia
            y escalar tu operación, integrando la logística de tu{" "}
            <strong>tienda física</strong> con tu nueva{" "}
            <strong>tienda online</strong> sin fricción.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Diseño UX/UI de Alta Calidad
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Creamos <strong>experiencias de usuario</strong> (UX) fluidas
                  y una <strong>interfaz de usuario</strong> (UI) atractiva que
                  guía a tus clientes desde la{" "}
                  <strong>descripción de producto</strong> hasta el pago, todo
                  optimizado para <strong>dispositivos móviles</strong>.
                </p>
              </div>
            </div>
            <div>
              <div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Optimización para Motores de Búsqueda
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Una <strong>tienda en línea</strong> debe ser encontrada.
                  Construimos tu eCommerce sobre una base de SEO técnico sólida,
                  optimizando tus <strong>palabras clave</strong>, categorías y
                  productos para los <strong>motores de búsqueda</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN VISUAL: EXPERIENCIA DE COMPRA --- */}
      <section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-green-600 uppercase bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-400">
                Conversión Primero
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Fichas de Producto que Venden
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Diseñamos la página de producto perfecta. Imágenes grandes,
                precios claros, selectores de variantes intuitivos y botones de
                compra que destacan.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Optimizamos la jerarquía visual para reducir la fricción y
                aumentar el ticket promedio.
              </p>
            </div>

            {/* Wireframe Ecommerce */}
            <div className="w-full md:w-1/2 relative perspective-1000">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 overflow-hidden transform -rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-1/2">
                    <div className="w-full aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-1/3 aspect-square bg-gray-100 dark:bg-gray-700 rounded"></div>
                      <div className="w-1/3 aspect-square bg-gray-100 dark:bg-gray-700 rounded"></div>
                      <div className="w-1/3 aspect-square bg-gray-100 dark:bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  {/* Product Details */}
                  <div className="w-1/2 space-y-4">
                    <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div className="w-1/2 h-8 bg-gray-900 dark:bg-white rounded"></div>
                    <div className="w-full h-20 bg-gray-50 dark:bg-gray-700/50 rounded"></div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white shadow-sm"></div>
                      <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white shadow-sm"></div>
                      <div className="w-8 h-8 rounded-full bg-black border-2 border-white shadow-sm"></div>
                    </div>
                    <div className="w-full h-12 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20 flex items-center justify-center text-white font-bold text-sm">
                      Añadir al Carrito
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Sección de Características del Servicio (MOFU) - ACTUALIZADA --- */}
      <section className="flex flex-col justify-center items-center text-gray-900 dark:text-white py-12 md:py-20 px-4">
        <div
          className="flex flex-col justify-center items-center w-full"
          style={{ maxWidth: "900px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Un Servicio de eCommerce 360°: Más Allá del Carrito
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-600 dark:text-white">
            Nuestro servicio de{" "}
            <strong>desarrollo de comercio electrónico</strong> es una solución
            integral. Cubrimos los tres pilares del éxito para los{" "}
            <strong>negocios online</strong>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  1. Opciones de Pago Flexibles y Seguras
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  No pierdas una venta por no tener la{" "}
                  <strong>forma de pago</strong> correcta. Integramos todas las{" "}
                  <strong>opciones de pago</strong> más utilizadas:{" "}
                  <strong>tarjetas de crédito</strong> y débito (Stripe, Mercado
                  Pago), <strong>transferencias bancarias</strong> (SPEI), y{" "}
                  <strong>pagos digitales</strong> como{" "}
                  <strong>Apple Pay y Google Pay</strong>. También configuramos
                  métodos para pagar en efectivo (OXXO Pay).
                </p>
              </div>
            </div>
            <div>
              <div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  2. Gestión de Contenido con Strapi
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Te entregamos un panel de{" "}
                  <strong>administración de contenidos</strong> (CMS) con{" "}
                  <strong>Strapi</strong>. Podrás subir fotos de{" "}
                  <strong>alta calidad</strong>, editar precios, gestionar
                  inventario y cambiar la{" "}
                  <strong>descripción de producto</strong> de forma autónoma.
                </p>
              </div>
            </div>
            <div>
              <div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  3. Múltiples Canales de Venta y Atención
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Tu <strong>tienda online</strong> es el centro de tu
                  ecosistema. La integramos con tus{" "}
                  <strong>redes sociales</strong> (Instagram Shopping, Facebook
                  Shops) y otros <strong>canales de venta</strong>. Además,
                  facilitamos la
                  <strong>atención al cliente</strong> mediante chatbots o
                  WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Sección de Proceso - ACTUALIZADA --- */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <CardSmallList
          titulo="Nuestro Proceso para Lanzar tu Tienda Online"
          subtitulo="Seguimos una metodología probada para asegurar el éxito de tu comercio electrónico, desde la planificación hasta la venta."
          list={[
            "Estrategia de eCommerce: Definimos tu público, productos y estrategia de marketing inicial.",
            "Diseño UX/UI: Creamos una interfaz de usuario atractiva y una ruta de compra sin fricción.",
            "Desarrollo y Configuración: Construimos la tienda en Next.js, conectamos la base de datos de productos, configuramos tu CMS Strapi e integramos los métodos de pago.",
            "Lanzamiento: Te capacitamos y ponemos tu tienda en línea en producción, lista para empezar a vender.",
          ]}
        />
      </section>

      {/* --- Sección de FAQ --- */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <FAQ faqs={faqs} />
      </section>

      {/* --- Sección CTA Final (BOFU) --- */}

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CTAProducts
          title={"¿Listo para Vender en Línea?"}
          paragraph={
            "No dejes que una plataforma limitada frene tu crecimiento. Invierte en una tienda online profesional, rápida y segura con Next.js y Strapi. Hablemos de tu proyecto de comercio electrónico."
          }
          links={[
            {
              label: "Cotizar mi Tienda en Línea",
              link: "/contacto",
              type: "services",
            },
          ]}
        />
      </section>
    </>
  );
}
