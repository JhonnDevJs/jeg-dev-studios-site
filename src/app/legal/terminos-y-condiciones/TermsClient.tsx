import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";

interface TermsClientProps {
  initialFaqs: any;
}

export default function TermsClient({ initialFaqs }: TermsClientProps) {
  const terms = [
    {
      id: "intro",
      title: "I. Introducción",
      icon: "gavel",
      content: (
        <>
          <p className="mb-3">
            Al ingresar y utilizar este portal de Internet, cuyo nombre de
            dominio es <strong>www.jegdevstudios.com</strong>, propiedad de JEG
            Dev Studios (en adelante, "JEG" o "la empresa"), el usuario acepta
            los presentes Términos y Condiciones de Uso. Esta aceptación se
            realiza mediante medios electrónicos, en cumplimiento con el
            artículo 1803 del Código Civil Federal.
          </p>
          <p>
            Si el usuario no acepta total y completamente los términos aquí
            contenidos, deberá abstenerse de utilizar el sitio y los servicios
            ofrecidos. El uso del sitio implica aceptación plena e incondicional
            de este acuerdo.
          </p>
        </>
      ),
    },
    {
      id: "convenio",
      title: "II. Convenio",
      icon: "handshake",
      content: (
        <p>
          Convenio de adhesión para el uso del sitio web celebrado entre JEG y
          el usuario, quien accede de forma voluntaria y se sujeta a las
          disposiciones aquí establecidas.
        </p>
      ),
    },
    {
      id: "licencia",
      title: "III. Licencia",
      icon: "verified_user",
      content: (
        <>
          <p className="mb-2">
            JEG otorga al usuario una licencia no exclusiva, revocable y no
            transferible para utilizar el sitio y los servicios conforme a estos
            términos.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-gray-400">
            <li>
              El usuario puede imprimir y/o copiar información del sitio
              únicamente para uso personal y no comercial.
            </li>
            <li>
              Queda prohibida la reproducción, distribución o modificación de
              cualquier contenido sin autorización expresa y por escrito.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "uso",
      title: "IV. Uso del Sitio",
      icon: "web",
      content: (
        <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-gray-400">
          <li>
            <strong>Contenido e información:</strong> Sujeto a cambios sin
            previo aviso.
          </li>
          <li>
            <strong>Opiniones de terceros:</strong> JEG no se responsabiliza por
            comentarios, consejos o publicaciones de terceros.
          </li>
          <li>
            <strong>Contenido bloqueado:</strong> JEG puede eliminar o bloquear
            contenido ofensivo, ilegal o que infrinja derechos.
          </li>
        </ul>
      ),
    },
    {
      id: "datos",
      title: "V. Datos Personales",
      icon: "badge",
      content: (
        <p>
          El usuario garantiza la veracidad de los datos personales
          proporcionados en formularios o servicios. El envío de datos autoriza
          a JEG a utilizarlos con fines operativos y contractuales, conforme a
          la legislación vigente y al aviso de privacidad.
        </p>
      ),
    },
    {
      id: "propiedad",
      title: "VI. Propiedad Intelectual",
      icon: "copyright",
      content: (
        <p>
          Todos los elementos del sitio, incluyendo logotipos, textos, imágenes,
          diseños y código, son propiedad de JEG o de sus respectivos autores.
          Está prohibido copiar, modificar o utilizar cualquier contenido con
          fines comerciales sin autorización previa.
        </p>
      ),
    },
    {
      id: "desarrollo",
      title: "VII. Servicios de Desarrollo",
      icon: "code",
      content: (
        <>
          <p className="mb-3 font-semibold text-slate-800 dark:text-white">
            Al contratar servicios de desarrollo web, software o apps, aceptas:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-gray-400">
            <li>
              El cliente deberá pagar al menos el <strong>50%</strong> del costo
              total del proyecto de forma anticipada.
            </li>
            <li>
              Se compromete a entregar el material necesario en un plazo máximo
              de <strong>2 semanas</strong> desde la firma.
            </li>
            <li>
              El tiempo de desarrollo inicia una vez entregado todo el material
              requerido.
            </li>
            <li>
              Cambios o adiciones posteriores implican ajuste de tiempo y costo.
            </li>
            <li>
              Si el cliente decide no continuar con el proyecto después del
              inicio, <strong>no se realizarán reembolsos</strong>.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "portafolio",
      title: "IX. Autorización Portafolio",
      icon: "folder_special",
      content: (
        <p>
          Al contratar los servicios de JEG, el cliente autoriza expresamente a
          incluir el proyecto en portafolios de la empresa y canales
          promocionales. Esta autorización no incluye la divulgación de
          información confidencial o estratégica.
        </p>
      ),
    },
    {
      id: "landing",
      title: "X. Servicio Landing Page ($2,999)",
      icon: "rocket_launch",
      content: (
        <>
          <p className="mb-2">Este servicio específico incluye:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-gray-400 mb-3">
            <li>Dominio personalizado gratis por 1 año.</li>
            <li>Hosting gratuito mediante Google Sites.</li>
            <li>Diseño responsivo adaptado a la marca.</li>
            <li>Posicionamiento inicial en Google (SEO básico).</li>
          </ul>
          <p className="text-xs text-slate-500 italic">
            *No incluye backend personalizado ni mantenimiento posterior.
          </p>
        </>
      ),
    },
    {
      id: "responsabilidad",
      title: "XI. Limitación de Responsabilidad",
      icon: "shield",
      content: (
        <p>
          JEG no garantiza que el sitio esté libre de errores o interrupciones.
          Los servicios y el sitio se ofrecen "tal cual". JEG no se
          responsabiliza por daños derivados del uso del sitio o servicios
          contratados.
        </p>
      ),
    },
    {
      id: "jurisdiccion",
      title: "XIII. Ley y Jurisdicción",
      icon: "balance",
      content: (
        <p>
          Este acuerdo se rige por las leyes aplicables en los Estados Unidos
          Mexicanos. En caso de controversia, ambas partes se someten a la
          jurisdicción de los tribunales competentes en la{" "}
          <strong>Ciudad de México</strong>.
        </p>
      ),
    },
  ];

  return (
    <>

      <main className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased min-h-screen flex flex-col w-full px-4 md:px-16">

        {/* HERO TITLE */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="material-symbols-outlined text-blue-500 text-[18px]">
              verified_user
            </span>
            <span className="text-blue-500 text-xs font-semibold uppercase tracking-wide">
              Legal
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
            Términos y Condiciones
          </h1>
          <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400 text-sm">
            <span className="material-symbols-outlined text-[18px]">
              schedule
            </span>
            <p>Última actualización: Enero 2026</p>
          </div>
        </div>

        {/* INTRO TEXT */}
        <div className="mb-8">
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Bienvenido a JEG Dev Studios. Estos términos rigen el uso de
            nuestra aplicación y los servicios de desarrollo de software, SEO
            y CRO que ofrecemos. Al utilizar nuestros servicios, usted acepta
            cumplir con estos acuerdos.
          </p>
        </div>

        {/* 3. ACORDEÓN DINÁMICO (Términos) */}
        <div className="flex flex-col gap-4">
          {terms.map((term, index) => (
            <details
              key={term.id}
              className="group rounded-xl bg-surface-dark border border-slate-200 dark:border-slate-800 open:border-blue-500/50 dark:open:border-blue-500/50 transition-all duration-300"
              open={index === 0} // El primero abierto por defecto
            >
              <summary className="flex w-full cursor-pointer items-center justify-between p-4 md:p-5 select-none">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <span className="material-symbols-outlined text-[20px]">
                      {term.icon}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                    {term.title}
                  </h3>
                </div>
                <span className="material-symbols-outlined text-slate-400 transition-transform duration-300 group-open:-rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-5 pb-5 pt-0">
                <div className="h-px w-full bg-slate-100 dark:bg-slate-700 mb-4"></div>
                <div className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                  {term.content}
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* 4. CTA CONTACTO */}
        <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-600/10 p-6 border border-blue-500/20">
          <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">
            ¿Tienes dudas sobre los términos?
          </h4>
          <p className="text-slate-600 dark:text-gray-400 text-sm mb-4">
            Nuestro equipo legal y de soporte está disponible para aclarar
            cualquier punto antes de comenzar tu proyecto.
          </p>
          <a href="mailto:contacto@jegdevstudios.com">
            <button className="w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">
                mail
              </span>
              Contactar Soporte
            </button>
          </a>
        </div>
        <FAQ
          faqs={initialFaqs}
        />
      </main>
    </>
  );
}
