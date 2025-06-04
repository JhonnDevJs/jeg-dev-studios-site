import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones | JEG Dev Studios",
  description:
    "Lee los Términos y Condiciones de uso de los servicios de JEG Dev Studios. Conoce tus derechos, responsabilidades y el alcance de nuestros servicios digitales.",
  keywords:
    "términos y condiciones, políticas de uso, condiciones del servicio, JEG Dev Studios, derechos del usuario, obligaciones del cliente, desarrollo web, aplicaciones móviles, software personalizado, contrato de servicio",
  openGraph: {
    title: "Términos y Condiciones | JEG Dev Studios",
    description:
      "Revisa los Términos y Condiciones que rigen el uso de nuestros servicios digitales en JEG Dev Studios.",
    url: "https://www.jegdevstudios.com/terminos-y-condiciones",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/metabackground.webp",
        width: 1200,
        height: 630,
        alt: "Términos de uso JEG Dev Studios",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function TermsAndConditions() {
  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center w-100 p-xl-5 p-3 mt-5">
        <h1 className="text-white">Términos y Condiciones de Uso</h1>
        <p className="text-white text-center">
          Consulta los lineamientos legales y condiciones para el uso de los servicios y sitio web de JEG Dev Studios.
        </p>
      </section>

      <section className="d-flex flex-column w-100 p-xl-5 p-3">
        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">I. Introducción</h2>
          <p className="text-white">
            Al ingresar y utilizar este portal de Internet, cuyo nombre de dominio es{" "}
              <Link href="https://www.jegdevstudios.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-underline">
                https://www.jegdevstudios.com
              </Link>, propiedad de JEG Dev Studios (en adelante "JEG" o "la empresa"), el usuario está aceptando los presentes Términos y Condiciones de Uso, y declara expresamente su aceptación mediante medios electrónicos, en cumplimiento con el artículo 1803 del Código Civil Federal.
            </p>
          <p className="text-white">
            Si el usuario no acepta total y completamente estos términos, deberá abstenerse de utilizar el sitio web y sus servicios. El uso del sitio constituye una aceptación plena e incondicional del presente acuerdo.
          </p>
          <p className="text-white">
            JEG se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Es responsabilidad del usuario revisar periódicamente esta sección.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">II. Convenio</h2>
          <p className="text-white">
            Convenio de adhesión para el uso del sitio web{" "}
            <Link href="https://www.jegdevstudios.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-underline">
              https://www.jegdevstudios.com
            </Link>, celebrado entre JEG y el usuario, quien accede voluntariamente y se sujeta a lo dispuesto en este documento.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">III. Licencia</h2>
          <p className="text-white">
            JEG otorga al usuario una licencia no exclusiva, revocable y no transferible para utilizar el sitio y los servicios ofrecidos, conforme a estos términos. El usuario puede imprimir y/o copiar información del sitio únicamente para uso personal y no comercial.
          </p>
          <p className="text-white">
            La reproducción, distribución o modificación de cualquier contenido sin autorización expresa por escrito de JEG está estrictamente prohibida.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">IV. Uso del Sitio</h2>
          <ul>
            <li className="text-white">
              <strong>Contenido e información:</strong> Toda la información del sitio es generada por JEG o sus proveedores y puede cambiar sin previo aviso.
            </li>
            <li className="text-white">
              <strong>Opiniones de terceros:</strong> JEG no se responsabiliza por opiniones o consejos de terceros. Verifique con profesionales si necesita certeza técnica o legal.
            </li>
            <li className="text-white">
              <strong>Derecho a bloquear contenido:</strong> JEG puede eliminar contenido ofensivo, ilegal o que infrinja derechos de terceros.
            </li>
            <li className="text-white">
              <strong>Contenido de terceros:</strong> JEG no tiene control editorial sobre dicho contenido; el usuario acepta los riesgos al confiar en él.
            </li>
          </ul>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">V. Formatos y Datos Personales</h2>
          <p className="text-white">
            El usuario garantiza la veracidad de los datos personales proporcionados al utilizar servicios de contacto o formularios. Al enviarlos, autoriza a JEG a utilizarlos con fines operativos y contractuales conforme a la legislación vigente y al aviso de privacidad.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">VI. Propiedad Intelectual</h2>
          <p className="text-white">
            Todos los elementos del sitio (logotipos, textos, imágenes, software, etc.) son propiedad de JEG o sus respectivos autores, protegidos por la Ley Federal del Derecho de Autor y tratados internacionales.
          </p>
          <p className="text-white">
            Se prohíbe copiar, modificar o usar cualquier contenido con fines comerciales sin autorización escrita.
          </p>
          <p className="text-white">
            El envío de ideas, sugerencias o recursos por parte del usuario otorga a JEG una licencia mundial, perpetua, gratuita y no exclusiva para su uso y modificación.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">VII. Servicios de Desarrollo</h2>
          <ul>
            <li className="text-white">El cliente deberá pagar al menos el 50% del costo total del proyecto de forma anticipada para iniciar el desarrollo.</li>
            <li className="text-white">El cliente se compromete a entregar el material necesario (logotipos, textos, imágenes, etc.) en un plazo no mayor a 2 semanas desde la firma del contrato.</li>
            <li className="text-white">El tiempo de desarrollo inicia una vez recibido todo el material solicitado.</li>
            <li className="text-white">Cualquier cambio o adición implicará modificaciones en tiempo y costo del proyecto.</li>
            <li className="text-white">El desarrollo se validará mediante un test final presentado por videollamada u otro medio acordado.</li>
            <li className="text-white">El pago final se realiza tras la validación y conformidad del cliente.</li>
            <li className="text-white">El costo de servicios como hosting y dominio está incluido solo si lo especifica el paquete contratado.</li>
            <li className="text-white">No habrá reembolsos si el cliente decide no continuar con el proyecto tras iniciar el desarrollo.</li>
            <li className="text-white">Al entregar el material requerido, se firmará un documento anexo que certifique dicha entrega y el inicio formal del desarrollo.</li>
          </ul>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">VIII. Publicidad y Enlaces Externos</h2>
          <p className="text-white">
            JEG puede mostrar publicidad o enlaces a sitios de terceros. Estos no forman parte del contenido de JEG ni implican su respaldo. El uso de estos recursos es bajo la responsabilidad del usuario.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">IX. Autorización para Uso en Portafolio</h2>
          <p className="text-white">
            Al contratar los servicios de JEG Dev Studios, el cliente autoriza expresamente que JEG, sus fundadores y colaboradores puedan declarar públicamente su participación en el proyecto. Esto incluye mostrar el proyecto en portafolios profesionales y redes sociales.
          </p>
          <p className="text-white">
            Esta autorización no permite divulgar información confidencial. JEG se compromete a proteger la integridad y seguridad del proyecto.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">X. Limitación de Responsabilidad</h2>
          <p className="text-white">
            JEG no garantiza que el sitio esté libre de errores o interrupciones. El sitio y sus servicios se ofrecen "tal cual" y "según disponibilidad".
          </p>
          <p className="text-white">
            JEG no será responsable por daños directos o indirectos derivados del uso o imposibilidad de uso del sitio o los servicios.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">XI. Contacto y Reclamaciones</h2>
          <p className="text-white">
            Para dudas o notificaciones sobre propiedad intelectual, uso indebido del sitio o servicios, puede contactar a:
            <br />
            <strong>Email:</strong>{" "}
            <Link href="mailto:jegdevstudioscontact@gmail.com" className="text-white text-decoration-underline">
              jegdevstudioscontact@gmail.com
            </Link>
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">XII. Ley Aplicable y Jurisdicción</h2>
          <p className="text-white">
            Este acuerdo se rige por las leyes aplicables en los Estados Unidos Mexicanos. En caso de controversia, las partes se someten a la jurisdicción de los tribunales de [tu ciudad o estado], renunciando a cualquier otra jurisdicción que pudiera corresponder.
          </p>
        </article>
      </section>
    </>
  );
}