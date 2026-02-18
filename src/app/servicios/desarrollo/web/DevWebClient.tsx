"use client";
import { useMemo } from "react";
import CTAProducts from "@/components/Cta/CTAProducts";
import CardSmallList from "@/components/Cards/CardSmallList";
import CardNestedLists from "@/components/Cards/CardNestedLists";
import ProductSection from "@/components/Cards/ProductSection";
import StructuredData from "@/components/Seo/StructuredData";
import FAQ from "@/components/Seo/FAQ";
import imgWebProduct1 from "@/assets/img/img/services/dev-web/pack-1/imagen-muestra-de-pagina-web.webp";
import imgWebProduct2 from "@/assets/img/img/services/dev-web/pack-2/imagen-muestra-de-pagina-web.webp";
import imgWebProduct3 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";

import "./DevWebClient.css";

export default function DevWebClient() {
  const products = useMemo(
    () => [
      {
        id: "invitacion-digital",
        type: "product",
        name: "Invitaciones Digitales",
        price: 299,
        currency: "MXN",
        labelBtn: "Contratar ahora",
        isPriceFixed: true,
        description:
          "Invita a tus familiares y amigos a tu evento de una manera original y moderna.",
        imageSrc: imgWebProduct1.src,
        items: [
          "Hasta 5 secciones",
          "Botón de confirmacion de asistencia",
          "Mesa de regalos",
          "Cuenta regresiva",
          "Diseño personalizado",
          "Entrega en 2 a 3 días",
        ],
        urlInfo: "/servicios/desarrollo/web/invitaciones",
        buttonLabelInfo: "Conocer más sobre el servicio",
      },
      {
        id: "landing-page-profesional",
        type: "product",
        name: "Landing Page Profesional",
        price: 2999,
        currency: "MXN",
        labelBtn: "Contratar ahora",
        isPriceFixed: true,
        description:
          "Lanza tu idea o promociona un servicio específico rápidamente. Una página de aterrizaje optimizada para la conversión, construida sobre una plataforma fiable.",
        imageSrc: imgWebProduct1.src,
        items: [
          "Dominio personalizado incluido (1 año)",
          "Hosting gratuito mediante Google Sites",
          "Diseño responsivo",
          "Posicionamiento inicial en Google (SEO básico)",
          "Diseño adaptado a la marca del cliente",
          "Hasta 5 secciones para tu página (landing)",
          "Entrega en 3 a 5 días",
        ],
        urlInfo: "/servicios/desarrollo/web/landing-pages",
        buttonLabelInfo: "Conocer más sobre el servicio",
      },
      {
        id: "mini-sitio",
        type: "product",
        name: "MINI SITIO",
        price: 3599,
        currency: "MXN",
        labelBtn: "Contratar ahora",
        isPriceFixed: true,
        description:
          "Para emprendedores y negocios que necesitan arrancar ya con una presencia profesional.",
        imageSrc: imgWebProduct1.src,
        items: [
          "5 Páginas (en Google Sites)",
          "Dominio Personalizado (1 Año Gratis)",
          "Hosting Gratuito (en Google Sites)",
          "Diseño Responsivo y adaptado a la marca",
          "SEO Básico (Posicionamiento inicial)",
          "Entrega en 5 a 7 días",
        ],
        urlInfo: "/servicios/desarrollo/web/sitios-web",
        buttonLabelInfo: "Conocer más sobre el servicio",
      },
      {
        id: "paquete_sitio_ignite",
        type: "pack",
        name: "SITIO IGNITE",
        price: 17999,
        isPriceFixed: false,
        currency: "MXN",
        labelBtn: "Cotizar Proyecto Ignite",
        description:
          "Para PyMEs que necesitan un sitio corporativo profesional y ultra-rápido.",
        imageSrc: imgWebProduct1.src,
        items: [
          "Desarrollo en Next.js (React)",
          "Performance +90 Garantizado (Core Web Vitals)",
          "De 1 a 5 Secciones (Páginas Reales)",
          "Diseño UI/UX Personalizado (Figma)",
          "CMS Autoadministrable (Headless)",
          "Hosting + Dominio (1 Año GRATIS)",
          "Certificado SSL y Formulario de Contacto",
          "SEO Técnico Básico",
          "3 Rondas de Revisión",
          "Tiempo de entrega: 3 Semanas",
        ],
        urlInfo: "/servicios/desarrollo/web/blogs",
        buttonLabelInfo: "Conocer más sobre el servicio",
      },
      {
        id: "paquete_sitio_accelerate",
        type: "pack",
        name: "SITIO ACCELERATE",
        price: 29999,
        isPriceFixed: false,
        labelBtn: "Cotizar Proyecto Accelerate",
        currency: "MXN",
        description:
          "Para Negocios en crecimiento que necesitan SEO y más funciones.",
        imageSrc: imgWebProduct2.src,
        items: [
          'Todo en "Ignite" MÁS:',
          "De 6 a 10 Secciones (Páginas Reales)",
          "Estrategia y SEO On-Page (Avanzado)",
          "Blog Autoadministrable",
          "Formularios Avanzados (con integraciones)",
          "Configuración de Correos Corporativos (Hasta 10)",
          "Mantenimiento y Soporte (6 Meses GRATIS)",
          "Manual de Uso y Capacitación",
          "4 Rondas de Revisión",
          "Tiempo de entrega: 4-5 Semanas",
        ],
        urlInfo: "/servicios/desarrollo/web/sitios-web",
        buttonLabelInfo: "Conocer más sobre el servicio",
      },
      {
        id: "paquete_sitio_ultimate",
        type: "pack",
        name: "SITIO ULTIMATE",
        price: 49999,
        isPriceFixed: false,
        labelBtn: "Cotizar Proyecto Ultimate",
        currency: "MXN",
        description:
          'Para empresas establecidas que necesitan una "máquina" de crecimiento.',
        imageSrc: imgWebProduct3.src,
        items: [
          'Todo en "Accelerate" MÁS:',
          "De 11 a 15 Secciones (Páginas Reales)",
          "Automatizaciones (CRM, Email Marketing)",
          "Mantenimiento y Soporte (1 Año GRATIS)",
          "Servicio de Seguridad 365",
          "Configuración de Correos Corporativos (Hasta 20)",
          "Imágenes y Videos de Stock Premium",
          "5 Rondas de Revisión",
          "Tiempo de entrega: 5-6 Semanas",
        ],
        urlInfo: "/servicios/desarrollo/web/ecommerce",
        buttonLabelInfo: "Conocer más sobre el servicio",
      },
    ],
    [],
  );

  const webServiceInfo = {
    name: "Desarrollo de Páginas Web Profesionales",
    serviceType: "Desarrollo de Páginas Web",
    description:
      "Servicios de desarrollo de páginas web a medida en Next.js. Olvida WordPress. Somos una de las agencias de sitios web que ofrece paquetes con performance +90 garantizado.",
    image:
      "https://www.jegdevstudios.com/img-SEO/og-background-serv-dev-soft.webp",
    ratingValue: "4.8", // <-- NUEVO
    reviewCount: "3",
  };

  interface FaqItem {
    question: string;
    answer: string;
  }

  const faqs: FaqItem[] = [
    {
      question:
        "¿Cuál es la diferencia entre el 'Mini Sitio' y el 'Sitio Ignite'?",
      answer:
        'El "Mini Sitio" es una solución de arranque rápido construida en Google Sites, ideal para validar una idea. El "Sitio Ignite" es un desarrollo web profesional en Next.js (React), diseñado para una velocidad superior (+90 en performance) y con un CMS para que puedas autoadministrarlo.',
    },
    {
      question:
        "¿Por qué elegir Next.js en lugar de WordPress como otras agencias de sitios web?",
      answer:
        "Velocidad y Seguridad. Mientras WordPress es lento y vulnerable a plugins, Next.js es una tecnología moderna que crea sitios ultra-rápidos (mejorando tu SEO) y mucho más seguros. Ofrecemos una tecnología de élite a un precio competitivo.",
    },
    {
      question: '¿Qué significa "performance +90 garantizado"?',
      answer:
        'Significa que tu sitio web cargará increíblemente rápido. Usamos herramientas como Google PageSpeed Insights para medir el rendimiento, y garantizamos que tu sitio "Ignite" (o superior) obtendrá una puntuación de más de 90/100, algo crucial para el SEO y la experiencia del usuario.',
    },
    {
      question:
        "Si contrato un paquete, ¿puedo agregar más funcionalidades después?",
      answer:
        '¡Absolutamente! Esa es la belleza de Next.js. A diferencia de las plantillas rígidas, nuestros paquetes "Ignite", "Accelerate" y "Ultimate" están construidos con una arquitectura modular, lo que nos permite añadir nuevas secciones o funciones fácilmente a medida que tu negocio crece.',
    },
  ];

  // 1. Añadimos el tipo 'string' al parámetro para eliminar el 'any' implícito
  const handleWhatsAppRedirect = (productName: string) => {
    const message = `Hola, estoy interesado en el paquete de desarrollo web "${productName}". ¿Podrían darme más información?`;
    // Reemplaza con tu número de WhatsApp en formato internacional
    const whatsappLink = `https://wa.me/5215512197135?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-dev-web" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-dev-web" />
      <StructuredData
        data={products}
        type="Product"
        idPage="service-dev-web"
        serviceInfo={webServiceInfo}
      />

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <h1 className="text-6xl md:text-7xl font-bold text-center text-gray-900 dark:text-white">
          Desarrollo de Páginas Web Profesionales en Next.js
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
          En JEG Dev Studios, redefinimos el{" "}
          <strong>desarrollo web profesional</strong>. No somos otra de las{" "}
          <strong>agencias de sitios web</strong> que te cobra $20,000 por una
          plantilla de WordPress lenta. Nosotros ofrecemos{" "}
          <strong>creación de sitios web</strong> sobre Next.js (React): la
          tecnología que garantiza un performance de +90 y una velocidad
          superior. Compara nuestros paquetes y descubre por qué una base
          tecnológica sólida es tu mejor ventaja competitiva.
        </p>
      </section>
      <section className="flex flex-col w-full pb-12 md:pb-20">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Paquetes de Desarrollo Web a tu Medida
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Desde un sitio robusto con tecnología de punta hasta un "Mini Sitio"
            profesional para arrancar. Explora la solución perfecta para tu
            negocio.
          </p>
        </div>

        <div className="w-full flex flex-col">
          {products.map((product, index) => (
            <ProductSection
              key={product.id}
              id={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
              currency={product.currency}
              features={product.items}
              imageSrc={product.imageSrc}
              isReversed={index % 2 !== 0} // Alternating layout
              isRecommended={
                product.type === "pack" &&
                product.price > 10000 &&
                product.price < 30000
              } // Highlight middle pack or similar logic
              isPriceFixed={product.isPriceFixed}
              actionLabel={product.labelBtn}
              onAction={() => handleWhatsAppRedirect(product.name)}
              urlInfo={product.urlInfo}
            />
          ))}
        </div>
      </section>
      {/* --- NUEVA SECCIÓN INFORMATIVA (SEMÁNTICA + LONG FORM) --- */}
      <section className="text-gray-900 dark:text-white py-12 md:py-20">
        <div className="container mx-auto px-4" style={{ maxWidth: "1000px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            ¿Por Qué Elegir un Desarrollo Full Stack en México?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                Más que Diseño de Páginas Web
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Muchas <strong>agencias de diseño web</strong> se enfocan solo
                en lo visual. Nosotros somos expertos en{" "}
                <strong>Full Stack</strong>. Esto significa que dominamos tanto
                el diseño (lo que ves) como el <strong>Back End</strong> (la
                lógica detrás). Esto es crucial si planeas escalar tu sitio a
                una <strong>tienda en línea</strong> o una plataforma compleja
                en el futuro.
              </p>
            </div>
            <div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-black/25 shadow-sm dark:shadow-none">
                <p className="mb-0 text-gray-700 dark:text-gray-300">
                  <em>
                    "Un sitio bonito que no funciona técnicamente es un gasto,
                    no una inversión."
                  </em>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">
                Experiencia Comprobada
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Con <strong>años de experiencia</strong> en el mercado de{" "}
                <strong>desarrollo web en México</strong>, entendemos las
                necesidades locales y globales. Sabemos qué tecnologías
                funcionan para tu mercado.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">
                Servicios Integrales
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                No solo entregamos el código. <strong>Ofrecen servicios</strong>{" "}
                que incluyen hosting, dominio, correos y soporte, para que tú te
                enfoques en tu negocio mientras nosotros cuidamos la tecnología.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">
                Calidad vs. Plantillas
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Evitamos los constructores genéricos. Nuestro código hecho a
                mano garantiza seguridad y velocidad, factores que Google ama
                para el posicionamiento.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- FIN NUEVA SECCIÓN --- */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        {/* 2. Se movió el contenido fuera del componente 'SectionProcess' para evitar el error de tipado,
				   ya que el componente espera props vacías. Lo ideal sería corregir el componente 'SectionProcess' directamente. */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Nuestro Proceso de Desarrollo de Páginas Web
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
          En JEG Dev Studios, aplicamos una metodología ágil basada en Scrum,
          que nos permite trabajar de forma organizada, flexible y transparente,
          entregando avances constantes a nuestros clientes. Nuestro objetivo es
          que formes parte activa del desarrollo de tu página web, asegurando
          que el resultado final supere tus expectativas.
        </p>
      </section>
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CardSmallList
          titulo="Descubrimiento y Planificación Inicial"
          subtitulo="Desde el primer contacto, nos enfocamos en comprender tu visión, objetivos y necesidades específicas. ¿Qué hacemos en esta fase?"
          list={[
            " Reunión inicial contigo para entender tu negocio y el propósito del sitio.",
            " Definimos las funcionalidades clave, el diseño deseado y objetivos de cada sección.",
            " Elegimos el paquete de desarrollo más adecuado (Mini Sitio, Ignite, Accelerate, Ultimate).",
            " Creamos un Product Backlog, que es la lista de todo lo que tu sitio debe incluir.",
          ]}
          lastText="Tecnologías: Usamos Google Sites para el 'Mini Sitio' y Next.js, React, Figma, y CMS Headless para los paquetes profesionales."
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <CardNestedLists
          titulo="Ciclos de Desarrollo Iterativos (Sprints)"
          subtitulo="Dividimos el proyecto en pequeños ciclos llamados Sprints, de 1 o 2 semanas, en los que desarrollamos y entregamos funcionalidades específicas de tu sitio web. Cada Sprint incluye:"
          list={[
            {
              text: "a. Sprint Planning",
              sublist: [
                "Planificamos qué secciones o funcionalidades vamos a trabajar (por ejemplo, sección de contacto, página de inicio, integración de WhatsApp).",
                "Nos aseguramos de que las tareas estén alineadas a tus prioridades y al paquete que adquiriste.",
              ],
            },
            {
              text: "b. Desarrollo y Actualizaciones",
              sublist: [
                " Nuestro equipo trabaja en el desarrollo del contenido acordado.",
                " Usamos frameworks modernos para garantizar velocidad, seguridad y escalabilidad.",
                " Durante el Sprint, mantenemos comunicación constante contigo para resolver dudas o validar avances.",
              ],
            },
            {
              text: "c. Entrega Parcial y Feedback",
              sublist: [
                " Al final de cada Sprint, te mostramos un avance funcional real del sitio (por videollamada o enlace privado).",
                " Tú nos das tu feedback y podemos ajustar detalles antes del siguiente Sprint.",
              ],
            },
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CardSmallList
          titulo="Revisión Final y Entrega del Proyecto"
          subtitulo="Una vez terminado el número de Sprints necesarios (dependiendo del paquete elegido), realizamos lo siguiente:"
          list={[
            "Una demostración final del sitio completo.",
            "Una revisión conjunta para asegurarnos de que todo está correcto.",
            "Ajustes finales y optimización.",
            "Publicación en tu dominio con certificado SSL, email corporativo y conexión a redes sociales (según el paquete).",
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CTAProducts
          title={"¿Ninguno de estos paquetes se ajusta a lo que necesitas?"}
          paragraph={
            "No te preocupes, en JEG Dev Studios desarrollamos soluciones 100% personalizadas. Cuéntanos tu idea y te ayudaremos a crear un proyecto a tu medida, con todo lo que realmente necesitas y nada que no."
          }
          links={[
            {
              label: "Solicita una cotización personalizada",
              link: "/contacto",
              type: "services",
            },
          ]}
        />
      </section>
      <FAQ faqs={faqs} />
    </>
  );
}
