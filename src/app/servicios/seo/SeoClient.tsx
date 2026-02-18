"use client";
import { useMemo } from "react";
import StructuredData from "@/components/Seo/StructuredData";
import CardNestedLists from "@/components/Cards/CardNestedLists";
import CardServices from "@/components/Cards/CardServices";
import FAQ from "@/components/Seo/FAQ";
import CTA from "@/components/Cta/CTA";

export default function SeoClient() {
  const services = useMemo(
    () => [
      {
        id: "servicio-seo-web-nacional",
        imageSrc: "/img-SEO/og-background-serv-seo.webp",
        title: "SEO Web y Nacional",
        description:
          "Construimos tu autoridad en todo el país. Ideal para e-commerce, empresas SaaS y marcas que buscan una audiencia nacional. Nos enfocamos en las palabras clave de alto volumen y en una estrategia de contenido que te posicione como líder de la industria.",
        price: 1000,
        currency: "MXN",
        url: "/servicios/seo/web",
        buttonLabel: "Conocer más de SEO Web",
        items: [
          "Auditoría SEO Técnica Completa",
          "Investigación de Palabras Clave (Keyword Research)",
          "Optimización On-Page y de Contenido",
          "Estrategia de Link Building (Construcción de Enlaces)",
        ],
      },
      {
        id: "servicio-seo-local-negocios",
        imageSrc: "/img-SEO/og-background-serv-seo.webp",
        title: "SEO Local para Negocios",
        description: `Si tus clientes están en tu ciudad o colonia, este es el servicio para ti. Optimizamos tu presencia digital para que aparezcas en el "Map Pack" de Google y en las búsquedas locales ("cerca de mí"), atrayendo clientes listos para comprar a tu puerta.`,
        price: 1000,
        currency: "MXN",
        url: "/servicios/seo/local",
        buttonLabel: "Explorar SEO Local",
        items: [
          "Optimización de Google Business Profile (Google Maps)",
          "Estrategia de Citaciones Locales y NAP",
          "Gestión y Estrategia de Reseñas (Reviews)",
          "SEO On-Page enfocado geográficamente",
        ],
      },
      {
        id: "servicio-geo-optimization-ai",
        imageSrc: "/img-SEO/og-background-serv-seo.webp",
        title: "GEO (Optimización para IA Generativa)",
        description: `Prepara tu sitio para el futuro de las búsquedas. Optimizamos tu contenido para que sea la fuente elegida por los motores de IA (LLMs). Aseguramos que tu autoridad (E-E-A-T) sea clara para que Google cite tu marca, no la de tu competencia.`,
        price: 1000,
        currency: "MXN",
        url: "/contacto",
        buttonLabel: "Solicitar Consultoría GEO",
        items: [
          "Creación y Optimización de llms.txt",
          "Fortalecimiento de señales E-E-A-T",
          "Estructuración de contenido semántico (Schema)",
          "Optimización para Búsqueda Conversacional",
        ],
      },
    ],
    [],
  );

  const seoServiceInfo = {
    name: "Servicios de Posicionamiento SEO Web y GEO en México",
    serviceType: "Servicios de Posicionamiento SEO Web y GEO",
    description:
      "Somos una agencia de SEO en México. Ofrecemos servicios de SEO Web, Local y GEO (Optimización IA) para atraer más clientes a tu negocio. ¡Solicita tu auditoría!",
    image: "/img-SEO/og-background-serv-seo.webp",
    ratingValue: "4.5", // <-- NUEVO
    reviewCount: "1",
  };

  interface FaqItem {
    question: string;
    answer: string;
  }

  const faqs: FaqItem[] = [
    // --- Actuales ---
    {
      question: "¿Qué incluyen sus servicios de SEO en México?",
      answer:
        "Nuestros servicios de SEO en México son integrales. Incluyen una auditoría técnica, investigación de palabras clave, optimización on-page, creación de contenido estratégico y link building. Dependiendo de tu negocio, nos especializamos en SEO Web (nacional) o SEO Local (para negocios físicos).",
    },
    {
      question: "¿En cuánto tiempo veré resultados con el SEO?",
      answer:
        "El SEO es una estrategia a mediano-largo plazo. Aunque algunas mejoras técnicas pueden dar resultados rápidos, los resultados significativos y sostenibles (como llegar a la primera página para keywords competidas) generalmente comienzan a verse entre los 4 y 6 meses.",
    },
    {
      question: "¿Cuál es la diferencia entre SEO, GEO y SEM?",
      answer:
        "SEO (Search Engine Optimization): Es el proceso orgánico (no pagado) para posicionar tu sitio en los enlaces de búsqueda, SEM (Search Engine Marketing): Es la publicidad de paga (ej. Google Ads) para aparecer al instante en los resultados y GEO (Generative Engine Optimization): Es el nuevo proceso para optimizar tu contenido y que sea usado como fuente en las respuestas generadas por Inteligencia Artificial.",
    },
    {
      question: "¿Por qué elegir a JEG Dev Studios como mi agencia de SEO?",
      answer:
        "Porque somos una agencia de SEO en México con un ADN técnico. A diferencia de las agencias de marketing tradicionales, nosotros nacimos del desarrollo de software. Entendemos el SEO desde el código fuente, la velocidad del servidor y la arquitectura web, lo que nos da una ventaja única para solucionar problemas técnicos complejos que otras agencias no pueden.",
    },
  ];

  return (
    <>
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-seo" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-seo" />
      {/* CORRECCIÓN: Usar type="Service" en lugar de "Product" */}
      <StructuredData
        data={services}
        type="Service"
        idPage="service-seo"
        serviceInfo={seoServiceInfo}
      />

      {/* SECCIÓN H1 Y SEMÁNTICA */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mt-3">
          Agencia de SEO en México: Visibilidad que Genera Negocio
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-4xl">
          En JEG Dev Studios, no solo te conseguimos clics; te conseguimos
          clientes. Como <strong>agencia de SEO en México</strong> líder en
          estrategia digital, entendemos que ser invisible en Google es como no
          existir. Ofrecemos un
          <strong>servicio de SEO</strong> que se traduce en más{" "}
          <strong>tráfico orgánico</strong>, más
          <strong>clientes potenciales</strong> y un retorno de inversión (ROI)
          medible.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
          Más Allá del SEO Tradicional: Introducimos GEO
        </h2>
        <p className="text-lg md:text-xl max-w-4xl text-gray-600 dark:text-white">
          El posicionamiento web ha cambiado. Ya no solo compites por los
          primeros
          <strong>resultados de búsqueda</strong>; ahora compites por ser la
          respuesta que ofrece la Inteligencia Artificial. Nuestra{" "}
          <strong>agencia de posicionamiento SEO en México</strong> domina todo
          el espectro del <strong>marketing digital</strong> para los{" "}
          <strong>motores de búsqueda</strong>:
        </p>

        <ul className="text-lg text-left mx-auto max-w-2xl text-gray-600 dark:text-white">
          <li className="mb-3">
            <p>
              Posicionamiento SEO Web: Para construir tu autoridad y capturar
              tráfico a nivel nacional.
            </p>
          </li>
          <li className="mb-3">
            <p>
              Posicionamiento SEO Local: Para dominar tu barrio y que los
              clientes te encuentren en Google Maps.
            </p>
          </li>
          <li className="mb-3">
            <p>
              Optimización GEO (Generative Engine Optimization): La nueva
              frontera. Preparamos tu contenido para que sea la fuente principal
              de las respuestas de IA.
            </p>
          </li>
        </ul>
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Nuestros Servicios de Posicionamiento SEO
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-3xl">
          La consultoría SEO es uno de los principales{" "}
          <strong>servicios</strong> que <strong>ofrece</strong> nuestra
          agencia. Está dividida en tres áreas estratégicas para dominar los{" "}
          <strong>resultados de búsqueda</strong>. Elige el plan de acción que
          tu negocio necesita.
        </p>
        <article className="flex flex-col justify-center items-center w-full p-0 m-0">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch w-full h-full gap-5 p-0 m-0">
            {services.map((service, index) => (
              <CardServices
                key={index}
                title={service.title}
                description={service.description}
                url={service.url}
                buttonLabel={service.buttonLabel}
                items={service.items}
              />
            ))}
          </ul>
        </article>
      </section>

      <section className="flex flex-col justify-center items-center text-center w-full gap-3 py-12 md:py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
          Nuestra Metodología SEO: Datos, Estrategia y Transparencia
        </h2>
        <p className="text-xl md:text-2xl text-center text-gray-600 dark:text-white p-0 max-w-4xl">
          En nuestra <strong>agencia de SEO en México</strong>, no creemos en la
          magia. El SEO es una ciencia que combina un{" "}
          <strong>diseño web</strong> técnico con{" "}
          <strong>marketing digital</strong> y un proceso disciplinado de 4
          fases para garantizar resultados sostenibles.
        </p>

        {/* FASE 1 */}
        <CardNestedLists
          titulo="1. Auditoría y Diagnóstico Profundo"
          subtitulo="No podemos trazar un mapa sin saber dónde estás."
          list={[
            {
              text: "Análisis Técnico:",
              sublist: [
                "Revisamos la salud de tu sitio: indexación, velocidad de carga (Core Web Vitals), rastreabilidad y arquitectura web.",
              ],
            },
            {
              text: "Análisis de Competencia:",
              sublist: [
                "Identificamos qué están haciendo bien tus competidores y dónde están sus debilidades.",
              ],
            },
            {
              text: "Análisis de Contenido:",
              sublist: [
                'Auditamos tu contenido existente para encontrar "gaps" y oportunidades de optimización.',
              ],
            },
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <CardNestedLists
          titulo="2. Estrategia y Hoja de Ruta (Roadmap)"
          subtitulo="Con los datos en mano, creamos tu plan de acción."
          list={[
            {
              text: "Keyword Research:",
              sublist: [
                "Definimos las palabras clave transaccionales e informativas que tu público objetivo está buscando.",
              ],
            },
            {
              text: "Definición de Pilares:",
              sublist: [
                'Creamos una estrategia de "Topic Clusters" (silos de contenido) para construir tu autoridad.',
              ],
            },
            {
              text: "Plan de Acción:",
              sublist: [
                "Te entregamos una hoja de ruta mensual con acciones claras y priorizadas.",
              ],
            },
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CardNestedLists
          titulo="3. Implementación y Optimización"
          subtitulo="Aquí es donde ocurre el trabajo pesado."
          list={[
            {
              text: "Optimización On-Page:",
              sublist: [
                "Corregimos todos los errores técnicos, optimizamos metadatos, encabezados, y mejoramos la semántica del contenido.",
              ],
            },
            {
              text: "Creación de Contenido:",
              sublist: [
                "Desarrollamos artículos de blog (TOFU), guías (MOFU) y páginas de servicio (BOFU). Es una estrategia completa de <strong>contenidos y optimización</strong> que responde a la intención de búsqueda.",
              ],
            },
            {
              text: "Link Building:",
              sublist: [
                "Ejecutamos una estrategia de construcción de enlaces éticos para aumentar la autoridad (E-E-A-T) de tu dominio.",
              ],
            },
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <CardNestedLists
          titulo="4. Reportes de Valor, no de Vanidad"
          subtitulo="Creemos en la transparencia total."
          list={[
            {
              text: "Dashboard en Tiempo Real:",
              sublist: [
                "Te damos acceso a un panel para que veas el progreso de tus rankings.",
              ],
            },
            {
              text: "Reportes Mensuales:",
              sublist: [
                "Recibes un informe que no solo muestra gráficos, sino que te explica qué hicimos, por qué lo hicimos y qué impacto tuvo en tus objetivos de negocio (leads y ventas).",
              ],
            },
            {
              text: "Plan de Acción:",
              sublist: [
                "Te entregamos una hoja de ruta mensual con acciones claras y priorizadas.",
              ],
            },
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CTA
          title={"¿Listo para Dominar las Búsquedas en Google?"}
          paragraph={
            "Deja de ser invisible para tus clientes. Es hora de que tu negocio obtenga la visibilidad que merece. Agenda una consulta gratuita con nuestro equipo y descubre el potencial de una estrategia SEO profesional."
          }
          label={"Solicita tu Auditoría SEO Gratuita"}
          link={"/contacto"}
        />
      </section>
      <FAQ faqs={faqs} />
    </>
  );
}
