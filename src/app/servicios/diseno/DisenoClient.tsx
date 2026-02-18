"use client";
import { useMemo } from "react";
import StructuredData from "@/components/Seo/StructuredData";
import CardServices from "@/components/Cards/CardServices";
import CTAProducts from "@/components/Cta/CTAProducts";
import FAQ from "@/components/Seo/FAQ";
import CardInfo from "@/components/Cards/CardInfo";
import TimelineProcess from "@/components/Cards/TimelineProcess";

export default function DisenoClient() {
  const services = useMemo(
    () => [
      {
        id: "servicio-branding-diseno-logotipos",
        imageSrc: "/img-SEO/og-background-serv-seo.webp",
        title: "Branding y Diseño de Logotipos",
        description:
          "Construimos la base de tu marca. Creamos logotipos y sistemas de identidad visual completos que comunican tus valores, te diferencian de la competencia y generan reconocimiento.",
        price: 1000,
        currency: "MXN",
        url: "/servicios/diseno/branding",
        buttonLabel: "Ver Servicios de Branding",
        items: [
          "Diseño de Logotipos Profesionales",
          "Creación de Manual de Identidad",
          "Estrategia y Consultoría de Branding",
          "Diseño de Papelería Corporativa",
        ],
      },
      {
        id: "servicio-diseno-ux-ui",
        imageSrc: "/img-SEO/og-background-serv-seo.webp",
        title: "Diseño de Experiencia de Usuario (UX/UI)",
        description:
          "Diseñamos plataformas digitales centradas en el usuario. Creamos interfaces intuitivas y atractivas para sitios web, aplicaciones móviles y software, garantizando una navegación fluida que guía al usuario hacia la conversión.",
        price: 1000,
        currency: "MXN",
        url: "/servicios/diseno/ux-ui/web",
        buttonLabel: "Explorar Diseño UX/UI",
        items: [
          "Diseño UX/UI para Sitios Web",
          "Diseño UX/UI para Apps Móviles",
          "Investigación y Pruebas de Usuario",
          "Creación de Prototipos y Wireframes",
        ],
      },
      {
        id: "servicio-diseno-editorial-publicitario",
        imageSrc: "/img-SEO/og-background-serv-seo.webp",
        title: "Diseño Editorial y Publicitario",
        description:
          "Llevamos tu marca al formato físico y digital. Diseñamos desde catálogos y revistas hasta material publicitario para redes sociales, asegurando una comunicación visual coherente y profesional en todos tus canales.",
        price: 1000,
        currency: "MXN",
        url: "/servicios/diseno/publicidad",
        buttonLabel: "Ver Soluciones Editoriales",
        items: [
          "Diseño de Catálogos y Revistas",
          "Material para Publicidad Digital",
          "Edición Fotográfica Profesional",
          "Diseño de Menús e Invitaciones",
        ],
      },
    ],
    [],
  );

  const disenoServiceInfo = {
    name: "Servicios de Diseño Gráfico y Digital en México",
    serviceType: "Servicios de Diseño Gráfico y Digital",
    description:
      "Somos una agencia de diseño gráfico en México. Creamos logotipos, branding y experiencias de usuario (UX/UI) que conectan tu marca con tus clientes.!",
    image: "/img-SEO/og-background-serv-diseno.webp",
    ratingValue: "4.9", // <-- NUEVO
    reviewCount: "17",
  };

  interface FaqItem {
    question: string;
    answer: string;
  }

  const faqs: FaqItem[] = [
    // --- Actuales ---
    {
      question: "¿Qué necesito para empezar un proyecto de diseño de logotipo?",
      answer:
        "Solo necesitamos conocer tu idea de negocio, tus valores y, si tienes, algunos ejemplos de marcas que te gusten. Con eso, nuestro equipo puede empezar a trabajar en las primeras propuestas creativas.",
    },
    {
      question: "¿Me entregan los archivos editables de los diseños?",
      answer:
        "Si. Al finalizar cada proyecto de diseño, te entregamos un paquete completo con los archivos en formatos vectoriales (AI, SVG), de imagen (PNG, JPG) y, según el caso, el manual de identidad para su correcta aplicación.",
    },
    {
      question:
        "¿Puedo contratar solo el diseño UX/UI si ya tengo el desarrollo?",
      answer:
        "Ofrecemos nuestros servicios de diseño UX/UI de forma independiente. Podemos crear todas las interfaces y prototipos para que tu equipo de desarrollo pueda implementarlos.",
    },
    {
      question: "¿Cuál es la diferencia entre branding y solo un logotipo?",
      answer:
        "Un logotipo es la cara de tu marca. El branding es la personalidad completa: incluye el logotipo, los colores, las tipografías y la voz de tu marca, todo trabajando en conjunto para crear una identidad sólida y coherente.",
    },
  ];

  return (
    <>
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-design" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-design" />
      <StructuredData
        data={services}
        type="Product"
        idPage="service-design"
        serviceInfo={disenoServiceInfo}
      />

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mt-3">
          Diseño Gráfico y Digital que Conecta y Convierte
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-4xl">
          En JEG Dev Studios, creemos que un gran diseño es más que una cara
          bonita; es una herramienta estratégica. Como agencia de diseño gráfico
          en México , fusionamos creatividad y funcionalidad para construir
          marcas memorables y experiencias de usuario que funcionen. Damos vida
          a tu identidad visual y nos aseguramos de que cada interacción con tu
          cliente sea impactante.
        </p>
      </section>
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Nuestros Servicios de Diseño Gráfico y Digital
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-4xl">
          Desde la creación de un logotipo que define tu esencia hasta el diseño
          de interfaces que guían a tus usuarios, nuestra área de diseño cubre
          todo el espectro de la comunicación visual. Explora nuestras
          especialidades.
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

      {/* --- SECCIÓN VISUAL: WIREFRAMING Y PROTOTIPADO --- */}
      <section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                Metodología Visual
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Del Boceto a la Realidad: Wireframing y Prototipado
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                No diseñamos a ciegas. Antes de aplicar color, estructuramos la
                información mediante <strong>wireframes</strong> de baja
                fidelidad para validar la experiencia de usuario (UX).
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Utilizamos herramientas líderes como <strong>Figma</strong> para
                crear prototipos interactivos que te permiten visualizar el
                flujo final antes de escribir una sola línea de código.
              </p>
            </div>

            {/* Representación Visual de Wireframe con CSS */}
            <div className="w-full md:w-1/2 relative perspective-1000">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 overflow-hidden transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">
                {/* Header del Wireframe */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                  <div className="w-24 h-6 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="w-16 h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="w-16 h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
                {/* Hero del Wireframe */}
                <div className="flex gap-4 mb-6">
                  <div className="w-2/3 space-y-3">
                    <div className="w-3/4 h-8 bg-gray-200 dark:bg-gray-600 rounded animate-pulse delay-75"></div>
                    <div className="w-full h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="w-full h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="w-32 h-10 bg-blue-100 dark:bg-blue-900/40 rounded mt-4"></div>
                  </div>
                  <div className="w-1/3 h-32 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                </div>
                {/* Grid del Wireframe */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-gray-50 dark:bg-gray-700/50 rounded border border-dashed border-gray-200 dark:border-gray-600"></div>
                  <div className="h-24 bg-gray-50 dark:bg-gray-700/50 rounded border border-dashed border-gray-200 dark:border-gray-600"></div>
                  <div className="h-24 bg-gray-50 dark:bg-gray-700/50 rounded border border-dashed border-gray-200 dark:border-gray-600"></div>
                </div>

                {/* Badge Flotante */}
                <div className="absolute bottom-6 right-6 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10">
                  Figma Prototype
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center text-center w-full gap-3 py-12 md:py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8">
          ¿Por Qué Elegirnos para tu Diseño?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <CardInfo
            title="Logotipos y Branding"
            description="Identidad sólida y profesional. No hacemos dibujos, creamos marcas que perduran."
          />
          <CardInfo
            title="Diseño UX/UI"
            description="Interfaces modernas, funcionales y centradas en el usuario para web y apps."
          />
          <CardInfo
            title="Diseño Editorial"
            description="Catálogos, revistas y manuales de identidad maquetados con precisión."
          />
          <CardInfo
            title="Publicidad Digital"
            description="Creativos para redes sociales y campañas que detienen el scroll."
          />
          <CardInfo
            title="Edición Fotográfica"
            description="Retoque profesional y composición visual para reforzar tu comunicación."
          />
          <CardInfo
            title="Estrategia Visual"
            description="Alineamos cada pixel con los objetivos comerciales de tu negocio."
          />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <div className="container max-w-4xl mx-auto w-full mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestro Proceso Creativo
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-white">
            Nuestro proceso de diseño está pensado para entregar resultados, no
            solo archivos.
          </p>
        </div>
        <TimelineProcess
          steps={[
            {
              title: "Investigación y Estrategia",
              description:
                "Primero, nos sumergimos en tu marca, tu mercado y tu audiencia. Analizamos a fondo tus objetivos para definir una dirección creativa sólida y un plan de acción claro antes de empezar a diseñar.",
            },
            {
              title: "Diseño y Colaboración",
              description:
                "Creamos las propuestas visuales (logotipos, interfaces, etc.) y trabajamos de la mano contigo a través de revisiones. Tu feedback es clave para refinar cada detalle hasta que el resultado sea perfecto.",
            },
            {
              title: "Entrega y Empoderamiento",
              description:
                "Finalmente, te entregamos un paquete completo con todos los archivos editables (AI, SVG, PNG) y las guías de uso necesarias. Te damos todo lo que necesitas para que tengas control total sobre tu nueva identidad visual.",
            },
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CTAProducts
          title={"¿Listo para dar el siguiente paso digital?"}
          paragraph={
            "Es momento de convertir tu idea en una solución tecnológica escalable y atractiva. Agenda tu consulta gratuita o contáctanos directamente."
          }
          links={[
            {
              label: "Solicita tu Auditoría Gratuita",
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
