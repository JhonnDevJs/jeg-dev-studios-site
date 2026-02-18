"use client";
import StructuredData from "@/components/Seo/StructuredData";
import CardServices from "@/components/Cards/CardServices";
import FAQ from "@/components/Seo/FAQ";
import CTAProducts from "@/components/Cta/CTAProducts";
import CardInfo from "@/components/Cards/CardInfo";
import TimelineProcess from "@/components/Cards/TimelineProcess";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question:
      "¿Cuál es la diferencia entre desarrollo a medida y una plantilla?",
    answer:
      "Una plantilla te obliga a adaptar tus procesos a una estructura rígida. El desarrollo de software a medida es lo contrario: nosotros creamos software personalizado que se adapta perfectamente a tu flujo de trabajo, garantizando eficiencia y escalabilidad.",
  },
  {
    question: "¿Qué tecnologías se utilizan para el desarrollo?",
    answer:
      "Usamos las mejores tecnologías para cada proyecto. En frontend, React y Next.js; en backend, Node.js y PHP (Laravel). Para móvil, nuestro equipo especializado trabaja con React Native, Java y Kotlin.",
  },
  {
    question: "¿Mi proyecto podrá crecer en el futuro si lo necesito?",
    answer:
      "Sí. La escalabilidad es un pilar de nuestros procesos de desarrollo. Construimos con arquitectura modular y código limpio, permitiendo añadir nuevas funciones o soportar más usuarios en el futuro sin reconstruir todo desde cero.",
  },
  {
    question:
      "¿Qué necesito de mi parte para comenzar un proyecto de desarrollo?",
    answer:
      "Solo necesitamos entender tus necesidades específicas. El primer paso es una consulta gratuita donde escuchamos tu idea, tus objetivos y los problemas que buscas resolver. Con eso, definimos el alcance del proyecto.",
  },
];

export default function DesarrolloClient() {
  return (
    <>
      <StructuredData type="BreadcrumbList" idPage="breadcrumbs-development" />
      <StructuredData data={faqs} type="FAQPage" idPage="faqs-development" />

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mt-3">
          Desarrollo de Software a Medida: Tu Fábrica de Software
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-4xl">
          En JEG Dev Studios, funcionamos como tu socio tecnológico personal. No
          solo escribimos código; creamos soluciones. Como{" "}
          <strong>agencia de desarrollo de software</strong>, transformamos tus
          ideas en <strong>productos de software</strong> digitales que son
          robustos, escalables y seguros. Nuestro enfoque se centra en entender
          tus desafíos únicos para construir la solución perfecta.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Nuestras Especialidades en Desarrollo
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-4xl">
          Cada proyecto digital tiene un objetivo diferente. Por eso, hemos
          perfeccionado nuestra experiencia en tres áreas clave del{" "}
          <strong>desarrollo de software a medida</strong>. Elige la solución
          que mejor se adapta a tu visión.
        </p>
      </section>

      {/* --- SECCIÓN VISUAL: ARQUITECTURA DE SOFTWARE --- */}
      <section className="w-full py-12 md:py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                Control Total
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Tu Centro de Comando Digital
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Diseñamos interfaces administrativas (Dashboards) que te dan
                visibilidad completa de tu negocio en tiempo real.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Datos centralizados, reportes automáticos y gestión de usuarios
                en una plataforma segura y escalable.
              </p>
            </div>

            {/* Wireframe Dashboard */}
            <div className="w-full md:w-1/2 relative perspective-1000">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 overflow-hidden transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">
                {/* Sidebar & Content Layout */}
                <div className="flex h-64">
                  {/* Sidebar */}
                  <div className="w-16 bg-gray-50 dark:bg-gray-700/50 border-r border-gray-100 dark:border-gray-600 flex flex-col items-center py-4 gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </div>
                  {/* Main Content */}
                  <div className="flex-1 p-4 space-y-4">
                    {/* Header */}
                    <div className="flex justify-between">
                      <div className="w-32 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                    </div>
                    {/* Stats Row */}
                    <div className="flex gap-4">
                      <div className="flex-1 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30 p-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-full mb-2"></div>
                        <div className="w-16 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      </div>
                      <div className="flex-1 h-20 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-600 p-3">
                        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full mb-2"></div>
                        <div className="w-16 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      </div>
                    </div>
                    {/* Chart Area */}
                    <div className="h-24 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-600 relative overflow-hidden flex items-end px-2 gap-2">
                      <div className="w-full h-1/3 bg-blue-500/20 rounded-t"></div>
                      <div className="w-full h-2/3 bg-blue-500/40 rounded-t"></div>
                      <div className="w-full h-1/2 bg-blue-500/30 rounded-t"></div>
                      <div className="w-full h-3/4 bg-blue-500/60 rounded-t"></div>
                      <div className="w-full h-full bg-blue-500 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Nuestras Especialidades en Desarrollo
        </h2>
        <article className="flex flex-col justify-center items-center w-full p-0 m-0">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch w-full h-full gap-5 p-0 m-0">
            <CardServices
              title="Desarrollo Web Profesional"
              description="Creamos tu presencia en internet. Desde páginas corporativas y blogs hasta complejas tiendas en línea."
              url="/servicios/desarrollo/web"
              buttonLabel="Conocer más sobre Desarrollo Web"
              items={[
                "Sitios Web Corporativos y Blogs",
                "Tiendas en Línea (E-commerce)",
                "Optimización SEO desde el Código",
                "Diseño Responsivo y Rápido",
              ]}
            />
            <CardServices
              title="Desarrollo de Aplicaciones Móviles"
              description="Conecta con tus usuarios dondequiera que estén. Desarrollamos aplicaciones nativas e híbridas para iOS y Android."
              url="/servicios/desarrollo/apps"
              buttonLabel="Explorar Desarrollo de Apps"
              items={[
                "Aplicaciones Nativas (iOS/Android)",
                "Desarrollo Multiplataforma Híbrido",
                "Interfaces de Usuario Intuitivas (UX/UI)",
                "Integración con Backend y API",
              ]}
            />
            <CardServices
              title="Desarrollo de Software Empresarial"
              description="Optimiza y automatiza tus operaciones. Creamos sistemas a medida (CRMs, ERPs, etc.) que se adaptan a tu flujo de trabajo."
              url="/servicios/desarrollo/software-empresarial"
              buttonLabel="Ver Soluciones de Software"
              items={[
                "Sistemas a Medida (CRM, ERP)",
                "Automatización de Procesos Internos",
                "Paneles de Control y Reportería",
                "Integración con Sistemas Existentes",
              ]}
            />
          </ul>
        </article>
      </section>

      {/* --- NUEVA SECCIÓN DE CONTENIDO INFORMATIVO (SOLUCIONA SEMÁNTICA Y LONGITUD) --- */}
      <section className="text-gray-900 dark:text-white py-12 md:py-20 px-4">
        <div
          className="container mx-auto w-full"
          style={{ maxWidth: "1000px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            ¿Por Qué Elegir una Solución a Medida?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CardInfo
              title="Adaptación Total a tu Modelo de Negocio"
              description="Una solución genérica te obliga a cambiar cómo trabajas. Una solución personalizada está diseñada específicamente para satisfacer las necesidades únicas de tu empresa. Entendemos tu modelo de negocio y creamos herramientas que lo potencian."
            />
            <CardInfo
              title="Ventaja Competitiva Real"
              description="Usar el mismo software que tu competencia no te diferencia. Al invertir en proyectos de software propios, creas una propiedad intelectual única. Esta ventaja competitiva te permite innovar más rápido y ofrecer servicios que otros no pueden."
            />
            <CardInfo
              title="Inversión Inteligente a Largo Plazo"
              description="Aunque la inversión inicial puede ser mayor que una licencia mensual, el software personalizado elimina costos recurrentes de licencias y problemas de escalabilidad. Es un activo que crece con tu empresa."
            />
            <CardInfo
              title="Solución a Medida vs. Paquetes"
              description="Ya sea que necesites una integración compleja o una interfaz específica, una solución a medida garantiza que cada función tenga un propósito. Evitas pagar por características que no usas y obtienes exactamente lo que necesitas."
            />
          </div>
        </div>
      </section>
      {/* --- FIN NUEVA SECCIÓN --- */}
      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3 gradient-effect-y">
        <div className="container max-w-4xl mx-auto w-full mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestro Proceso: Calidad, Agilidad y Transparencia
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-white">
            El éxito de los proyectos de desarrollo de software depende de
            procesos claros. Nuestro método ágil (Scrum) se enfoca en la
            transparencia y la entrega de valor constante.
          </p>
        </div>
        <TimelineProcess
          steps={[
            {
              title: "Consultoría y Estrategia",
              description:
                "Todo comienza por entender tus necesidades específicas. Nos reunimos contigo para analizar tus objetivos y definir el alcance del proyecto. Nuestro equipo especializado te asesora sobre la mejor solución tecnológica.",
            },
            {
              title: "Diseño y Arquitectura (UX/UI)",
              description:
                "Diseñamos el flujo de usuario y las interfaces (UX/UI) para crear productos de software intuitivos. Definimos la arquitectura tecnológica (frontend, backend, bases de datos) asegurando que la solución sea escalable y segura.",
            },
            {
              title: "Desarrollo Ágil (Sprints)",
              description:
                'Aquí es donde nuestra fábrica de software cobra vida. Dividimos el proyecto en "Sprints" (ciclos de 1-2 semanas) donde nuestro equipo especializado desarrolla, prueba y te presenta módulos funcionales.',
            },
            {
              title: "Pruebas, Despliegue y Soporte",
              description:
                "Cubrimos todo el ciclo de vida del desarrollo. Realizamos pruebas de calidad (QA), desplegamos la solución en tu servidor y te acompañamos con soporte para asegurar un lanzamiento exitoso.",
            },
          ]}
        />
      </section>

      <section className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-white w-full py-12 md:py-20 px-4 gap-3">
        <FAQ faqs={faqs} />
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
    </>
  );
}
