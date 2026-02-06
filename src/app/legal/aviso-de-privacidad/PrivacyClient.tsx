"use client";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";

// Import Types
interface PrivacyClientProps {
  initialFaqs: any; // You can replace 'any' with a more specific type if available
}


export default function PrivacyClient({ initialFaqs }: PrivacyClientProps) {

  // Función para volver arriba suavemente
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>

      <StructuredData
        type="BreadcrumbList"
        idPage="breadcrumbs-notice-privacy"
      />
      <StructuredData data={initialFaqs} type="FAQPage" idPage="faqs-notice-privacy" />
      {/* 2. MAIN CONTENT */}

      <main className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased min-h-screen flex flex-col w-full px-4 md:px-16">


        {/* HERO HEADER */}
        <div className="relative px-6 pt-8 pb-6">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>
          <h1 className="relative text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 leading-tight">
            Aviso de <span className="text-blue-500">Privacidad</span>
          </h1>
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-slate-400 text-sm">
              schedule
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Última actualización: 03 de Noviembre, 2025
            </p>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
        </div>

        {/* INTRO */}
        <div className="px-6 mb-6">
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            En <strong className="text-slate-900 dark:text-white font-semibold">JEG Dev Studios</strong>,
            protegemos tu información personal con responsabilidad y transparencia. Este documento detalla qué datos recopilamos y cómo los protegemos.
          </p>
        </div>

        {/* SECTION 1: DATOS RECOPILADOS */}
        <section className="px-4 mb-4">
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 border border-gray-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 text-blue-500">
                <span className="material-symbols-outlined text-lg">database</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                1. ¿Qué datos personales recopilamos?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
              Para prestar nuestros servicios de desarrollo web, software y aplicaciones móviles, podemos recopilar:
            </p>
            <ul className="space-y-3">
              {[
                "Nombre completo",
                "Correo electrónico",
                "Número telefónico",
                "Domicilio",
                "Nombre comercial o de empresa",
                "RFC (en caso de requerir factura)",
                "Información sobre tu proyecto",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-blue-500 text-base pt-0.5">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 2: USO DE INFORMACIÓN */}
        <section className="px-4 mb-4">
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 border border-gray-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 text-blue-500">
                <span className="material-symbols-outlined text-lg">analytics</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                2. ¿Para qué fines utilizamos tus datos?
              </h3>
            </div>

            <div className="space-y-4 pl-2 border-l-2 border-slate-200 dark:border-slate-700 ml-3">
              <div className="pl-3">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Fines Primarios</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Proveer servicios, generar contratos, comunicación, facturación, soporte técnico y cumplimiento legal.
                </p>
              </div>
              <div className="pl-3">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Fines Secundarios (Opcional)</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Envío de promociones, encuestas de calidad y prospección comercial.
                </p>
              </div>
            </div>

            <div className="mt-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              <p className="flex flex-col gap-1">
                <span>Si no deseas que tus datos se usen para fines secundarios, escribe a:</span>
                <a href="mailto:contacto@jegdevstudios.com" className="text-blue-500 font-bold hover:underline">contacto@jegdevstudios.com</a>
                <span>Asunto: "Negativa a fines secundarios"</span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMPARTIR INFORMACIÓN */}
        <section className="px-4 mb-4">
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 border border-gray-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 text-blue-500">
                <span className="material-symbols-outlined text-lg">share</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                3. ¿Con quién compartimos su información?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Sus datos personales <strong>no serán compartidos</strong> con terceros sin su consentimiento, salvo cuando sea estrictamente necesario para el cumplimiento de obligaciones legales o contractuales (ej. procesamiento de pagos o facturación).
            </p>
          </div>
        </section>

        {/* SECTION 4: DERECHOS ARCO (Highlight) */}
        <section className="px-4 mb-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 blur-[40px] rounded-full pointer-events-none"></div>

            <h3 className="text-lg font-bold mb-2 relative z-10">4. Derechos ARCO</h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed relative z-10">
              Usted tiene derecho a <strong>A</strong>cceder, <strong>R</strong>ectificar, <strong>C</strong>ancelar u <strong>O</strong>ponerse al tratamiento de sus datos.
            </p>

            <div className="text-xs text-slate-400 mb-4 relative z-10">
              <p className="mb-1">Para ejercerlos, envíe un correo con copia de su identificación oficial a:</p>
              <a href="mailto:contacto@jegdevstudios.com" className="text-blue-500 font-bold hover:text-white transition-colors">contacto@jegdevstudios.com</a>
            </div>

            <a href="mailto:contacto@jegdevstudios.com?subject=Ejercicio de derechos ARCO" className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-500/20 relative z-10">
              <span className="material-symbols-outlined text-lg">mail</span>
              Ejercer mis derechos
            </a>
          </div>
        </section>

        {/* SECTION 5: SEGURIDAD Y COOKIES */}
        <section className="px-4 mb-6 grid gap-4">
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 border border-gray-200 dark:border-slate-800 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Medidas de Seguridad</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              JEG Dev Studios adopta las medidas técnicas, administrativas y físicas necesarias para garantizar la seguridad de sus datos y evitar su uso no autorizado.
            </p>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 border border-gray-200 dark:border-slate-800 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Cookies</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Actualmente no utilizamos cookies ni tecnologías de rastreo. Si en el futuro se implementan, se notificará mediante este aviso.
            </p>
          </div>
        </section>

        {/* SECTION 6: FAQS (De Supabase) */}

        <FAQ
          faqs={initialFaqs}
        />

        {/* FLOAT BUTTON */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 text-white transition-all transform hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined">arrow_upward</span>
          </button>
        </div>

      </main>

    </>
  );
}