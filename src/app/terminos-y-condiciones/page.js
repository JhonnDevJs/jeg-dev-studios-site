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
  alternates: {
    canonical: "https://www.jegdevstudios.com/terminos-y-condiciones",
  },
};

export default function TermsAndConditions() {
  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center w-100 p-xl-5 p-3 mt-5 gradient-effect-y">
        <h1 className="text-white">Términos y Condiciones de Uso</h1>
        <p className="text-white text-center">
          Consulta los lineamientos legales y condiciones para el uso de los servicios y sitio web de JEG Dev Studios.
        </p>
      </section>

      <section className="d-flex flex-column w-100 p-xl-5 p-3">
        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">I. INTRODUCCIÓN</h2>
          <p className="text-white">
            Al ingresar y utilizar este portal de Internet, cuyo nombre de dominio es{" "}
            <Link href="https://www.jegdevstudios.com" target="_blank" className="text-white text-decoration-underline" title="link del sitio web de dominio jegdevstudios.com" aria-label="link del sitio web de dominio jegdevstudios.com">
              www.jegdevstudios.com
            </Link>, propiedad de JEG Dev Studios (en adelante, &quot;JEG&quot; o &quot;la empresa&quot;), el usuario acepta los presentes Términos y Condiciones de Uso. Esta aceptación se realiza mediante medios electrónicos, en cumplimiento con el artículo 1803 del Código Civil Federal.
          </p>
          <p className="text-white">
            Si el usuario no acepta total y completamente los términos aquí contenidos, deberá abstenerse de utilizar el sitio y los servicios ofrecidos. El uso del sitio implica aceptación plena e incondicional de este acuerdo.
          </p>
          <p className="text-white">
            JEG se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Es responsabilidad del usuario revisarlos periódicamente.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">II. CONVENIO</h2>
          <p className="text-white">
            Convenio de adhesión para el uso del sitio web celebrado entre JEG y el usuario, quien accede de forma voluntaria y se sujeta a las disposiciones aquí establecidas.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">III. LICENCIA</h2>
          <p className="text-white">
            JEG otorga al usuario una licencia no exclusiva, revocable y no transferible para utilizar el sitio y los servicios conforme a estos términos.
          </p>
          <p className="text-white">
            El usuario puede imprimir y/o copiar información del sitio únicamente para uso personal y no comercial.
          </p>
          <p className="text-white">
            Queda prohibida la reproducción, distribución o modificación de cualquier contenido sin autorización expresa y por escrito.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">IV. USO DEL SITIO</h2>
          <ul>
            <li className="text-white">
              <strong>Contenido e información:</strong> Sujeto a cambios sin previo aviso.
            </li>
            <li className="text-white">
              <strong>Opiniones de terceros:</strong> JEG no se responsabiliza por comentarios, consejos o publicaciones de terceros.
            </li>
            <li className="text-white">
              <strong>Contenido bloqueado:</strong> JEG puede eliminar o bloquear contenido ofensivo, ilegal o que infrinja derechos.
            </li>
            <li className="text-white">
              <strong>Confianza en terceros:</strong> El usuario asume el riesgo de confiar en contenido externo.
            </li>
          </ul>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">V. FORMATOS Y DATOS PERSONALES</h2>
          <p className="text-white">
            El usuario garantiza la veracidad de los datos personales proporcionados en formularios o servicios.
          </p>
          <p className="text-white">
            El envío de datos autoriza a JEG a utilizarlos con fines operativos y contractuales, conforme a la legislación vigente y al aviso de privacidad.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">VI. PROPIEDAD INTELECTUAL</h2>
          <p className="text-white">
            Todos los elementos del sitio, incluyendo logotipos, textos, imágenes, diseños y código, son propiedad de JEG o de sus respectivos autores.
          </p>
          <p className="text-white">
            Está prohibido copiar, modificar o utilizar cualquier contenido con fines comerciales sin autorización previa.
          </p>
          <p className="text-white">
            El envío de ideas o materiales por parte del usuario otorga a JEG una licencia mundial, gratuita, no exclusiva y perpetua para su uso, reproducción y distribución.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">VII. SERVICIOS DE DESARROLLO</h2>
          <p className="text-white">
            Al contratar servicios de desarrollo web, software o aplicaciones móviles, el usuario acepta lo siguiente:
          </p>
          <ul>
            <li className="text-white">El cliente deberá pagar al menos el 50% del costo total del proyecto de forma anticipada.</li>
            <li className="text-white">
              Se compromete a entregar el material necesario (logos, textos, imágenes, etc.) en un plazo máximo de 2 semanas desde la firma del contrato.
            </li>
            <li className="text-white">El tiempo de desarrollo inicia una vez entregado todo el material requerido.</li>
            <li className="text-white">Cambios o adiciones posteriores implican ajuste de tiempo y costo.</li>
            <li className="text-white">El desarrollo será sometido a un test final validado por videollamada u otro medio acordado.</li>
            <li className="text-white">El pago final se realiza después de la validación del cliente.</li>
            <li className="text-white">El precio puede incluir servicios como dominio, hosting o base de datos solo si se indica explícitamente en la promoción o paquete contratado.</li>
            <li className="text-white">Si el cliente decide no continuar con el proyecto después del inicio del desarrollo, no se realizarán reembolsos.</li>
            <li className="text-white">Al entregar el material, se firmará un documento anexo que certifica la entrega completa y el inicio formal del desarrollo.</li>
          </ul>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">VIII. PUBLICIDAD Y ENLACES EXTERNOS</h2>
          <p className="text-white">
            JEG puede incluir publicidad o enlaces externos. Estos no implican respaldo. El uso de dichos recursos queda bajo la responsabilidad del usuario.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">IX. AUTORIZACIÓN PARA USO EN PORTAFOLIO</h2>
          <p className="text-white">
            Al contratar los servicios de JEG, el cliente autoriza expresamente a:
          </p>
          <p className="text-white">
            Incluir el proyecto en portafolios de la empresa, colaboradores y canales promocionales.
          </p>
          <p className="text-white">
            Esta autorización no incluye la divulgación de información confidencial o estratégica.
          </p>
          <p className="text-white">
            JEG se compromete a usar el contenido de forma ética, respetuosa y conforme a la legislación vigente.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">X. NUEVO SERVICIO: LANDING PAGE DE $2,999 MXN</h2>
          <p className="text-white">
            Este servicio incluye:
          </p>
          <ul>
            <li className="text-white">
              🌐 Dominio personalizado gratis por 1 año
            </li>
            <li className="text-white">
              ☁️ Hosting gratuito mediante Google Sites
            </li>
            <li className="text-white">
              📱 Diseño responsivo
            </li>
            <li className="text-white">
              🔍 Posicionamiento inicial en Google (SEO básico)
            </li>
            <li className="text-white">
              🛠️ Diseño adaptado a la marca del cliente
            </li>
          </ul>
          <h3 className="text-white mt-3">Proceso del servicio:</h3>
          <ul>
            <li className="text-white">
              El cliente elige hasta 5 secciones de una lista predeterminada.
            </li>
            <li className="text-white">
              Se crea el diseño adaptado a su marca personal o negocio.
            </li>
            <li className="text-white">
              El cliente aprueba el diseño.
            </li>
            <li className="text-white">
              JEG lo publica y configura el dominio y hosting.
            </li>
          </ul>
          <p className="text-white">
            Este servicio no incluye backend personalizado, mantenimiento posterior ni servicios adicionales no especificados.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">XI. LIMITACIÓN DE RESPONSABILIDAD</h2>
          <p className="text-white">
            JEG no garantiza que el sitio esté libre de errores o interrupciones.
          </p>
          <p className="text-white">
            Los servicios y el sitio se ofrecen &quot;tal cual&quot; y &quot;según disponibilidad&quot;.
          </p>
          <p className="text-white">
            JEG no se responsabiliza por daños derivados del uso del sitio o servicios contratados.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">XII. CONTACTO Y RECLAMACIONES</h2>
          <p className="text-white">
            Para dudas o notificaciones relacionadas con propiedad intelectual, uso indebido del sitio o los servicios ofrecidos:
            <br />
            📧 <strong>Email:</strong>{" "}
            <Link href="mailto:jegdevstudioscontact@gmail.com" className="text-white text-decoration-underline" tabIndex={0} title="correo de contacto" aria-label="correo de contacto" >
              jegdevstudioscontact@gmail.com
            </Link>
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">XIII. LEY APLICABLE Y JURISDICCIÓN</h2>
          <p className="text-white">
            Este acuerdo se rige por las leyes aplicables en los Estados Unidos Mexicanos.
          </p>
          <p className="text-white">
            En caso de controversia, ambas partes se someten a la jurisdicción de los tribunales competentes en el Estado de la Ciudad de México, renunciando a cualquier otro fuero.
          </p>
        </article>
      </section>
    </>
  );
}