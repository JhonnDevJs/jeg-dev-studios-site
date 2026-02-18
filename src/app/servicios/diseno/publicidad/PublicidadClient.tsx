"use client";
import StructuredData from "@/components/Seo/StructuredData";
import CTAProducts from "@/components/Cta/CTAProducts";
import FAQ from "@/components/Seo/FAQ";
import CardInfo from "@/components/Cards/CardInfo";
import TimelineProcess from "@/components/Cards/TimelineProcess";
import Image from "next/image";

export default function PublicidadClient() {
  const faqs = [
    {
      question: "¿Qué tipo de materiales publicitarios diseñan?",
      answer:
        "Diseñamos tanto para medios digitales (banners, posts para redes sociales, anuncios de Google Ads) como para impresos (folletos, posters, vallas publicitarias, tarjetas de presentación).",
    },
    {
      question: "¿Incluyen la redacción de textos (copywriting)?",
      answer:
        "Podemos incluir el servicio de copywriting creativo si lo requieres. Un buen diseño necesita un buen mensaje para ser efectivo.",
    },
    {
      question: "¿Entregan archivos listos para imprenta?",
      answer:
        "Absolutamente. Si tu proyecto es para impresión, te entregamos los archivos finales con las especificaciones técnicas correctas (CMYK, sangrados, marcas de corte) para que no tengas problemas con tu proveedor de impresión.",
    },
  ];

  return (
    <>
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-publicidad" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-publicidad" />

      {/* HERO SECTION */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mt-3">
          Diseño Publicitario que Detiene el Scroll
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-4xl">
          En un mundo saturado de información, solo lo diferente destaca.
          Creamos piezas gráficas estratégicas diseñadas para captar la atención
          en menos de 3 segundos y comunicar tu oferta con claridad e impacto.
        </p>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-400">
                Comunicación Visual
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Del Arte al Impacto Comercial
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                No hacemos "arte por arte". Diseñamos herramientas de venta.
                Cada color, forma y composición tiene un propósito psicológico:
                guiar la mirada, despertar una emoción y provocar una acción.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Digital
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Redes Sociales, Ads, Email Marketing
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Impreso
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Flyers, Catálogos, Gran Formato
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative perspective-1000">
              {/* Visual abstract representation of Advertising Assets */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out max-w-sm mx-auto">
                <div className="flex flex-col gap-4">
                  {/* Social Post Mockup */}
                  <div className="bg-gray-100 dark:bg-gray-700 aspect-square rounded-lg relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-20"></div>
                    <span className="text-gray-400 text-sm font-semibold">
                      Social Post 1080x1080
                    </span>
                  </div>
                  {/* Banner Mockup */}
                  <div className="bg-gray-100 dark:bg-gray-700 h-24 rounded-lg relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-20"></div>
                    <span className="text-gray-400 text-sm font-semibold">
                      Web Banner
                    </span>
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
          Soluciones Publicitarias
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <CardInfo
            title="Diseño para Redes Sociales"
            description="Packs de contenidos visuales coherentes para Instagram, Facebook y LinkedIn que construyen comunidad."
          />
          <CardInfo
            title="Publicidad Digital (Ads)"
            description="Creatividades optimizadas para campañas de pago (Meta Ads, Google Display) enfocadas en aumentar el CTR."
          />
          <CardInfo
            title="Diseño Editorial"
            description="Maquetación profesional de revistas, libros, reportes anuales y catálogos de productos (digitales o impresos)."
          />
          <CardInfo
            title="Presentaciones Corporativas"
            description="Decks de ventas y presentaciones de impacto para que tus pitchs sean inolvidables."
          />
          <CardInfo
            title="Merchandising y Empaque"
            description="Diseño de packaging y artículos promocionales que llevan tu marca a las manos de tus clientes."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <div className="container max-w-4xl mx-auto w-full mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Creatividad con Estrategia
          </h2>
        </div>
        <TimelineProcess
          steps={[
            {
              title: "Objetivo y Mensaje",
              description:
                "Definimos qué quieres comunicar y qué acción quieres que realice quien vea el diseño.",
            },
            {
              title: "Conceptualización",
              description:
                "Buscamos la metáfora visual o el estilo gráfico que mejor potencie tu mensaje.",
            },
            {
              title: "Diseño y Composición",
              description:
                "Armamos las piezas cuidando la jerarquía visual, la legibilidad y el impacto estético.",
            },
            {
              title: "Adaptación y Entrega",
              description:
                "Adaptamos el diseño maestro a los diferentes formatos que necesites (stories, post, banner web, etc.).",
            },
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <CTAProducts
          title={"¿Necesitas impulsar tus ventas?"}
          paragraph={
            "El buen diseño vende. Hagamos que tu próxima campaña sea un éxito visual."
          }
          links={[
            {
              label: "Solicitar Diseño Publicitario",
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
