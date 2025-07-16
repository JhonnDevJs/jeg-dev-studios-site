import Link from "next/link";

export const metadata = {
  title: "Aviso de Privacidad | JEG Dev Studios",
  description:
    "Consulta nuestro Aviso de Privacidad en JEG Dev Studios. Protegemos tus datos personales conforme a la normativa vigente y garantizamos su confidencialidad.",
  keywords:
    "aviso de privacidad, privacidad de datos, protección de datos personales, política de privacidad, JEG Dev Studios, confidencialidad, tratamiento de datos, normativa de privacidad, seguridad digital, derechos ARCO",
  openGraph: {
    title: "Aviso de Privacidad | JEG Dev Studios",
    description:
      "Infórmate sobre cómo protegemos y utilizamos tus datos personales en JEG Dev Studios, de acuerdo con la legislación vigente.",
    url: "https://www.jegdevstudios.com/aviso-de-privacidad",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/metabackground.webp",
        width: 1200,
        height: 630,
        alt: "Aviso de privacidad JEG Dev Studios",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jegdevstudios.com/aviso-de-privacidad",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center w-100 p-xl-5 p-3 mt-5">
        <h1 className="text-white">Aviso de Privacidad</h1>
        <p className="text-white text-center">
          En JEG Dev Studios protegemos tu información personal con responsabilidad y transparencia.
        </p>
      </section>

      <section className="d-flex flex-column w-100 p-xl-5 p-3">
        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">¿Qué datos personales recopilamos?</h2>
          <p className="text-white">
            Para prestar nuestros servicios de desarrollo web, software y aplicaciones móviles, podemos recopilar los siguientes datos personales:
          </p>
          <ul>
            <li className="text-white">Nombre completo</li>
            <li className="text-white">Correo electrónico</li>
            <li className="text-white">Número telefónico</li>
            <li className="text-white">Domicilio</li>
            <li className="text-white">Nombre comercial o de empresa</li>
            <li className="text-white">RFC (en caso de requerir factura)</li>
            <li className="text-white">Información relacionada con su proyecto o requerimiento</li>
          </ul>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">¿Para qué fines utilizamos sus datos personales?</h2>
          <h5 className="text-white">Fines primarios:</h5>
          <ul>
            <li className="text-white">Proveer los servicios contratados</li>
            <li className="text-white">Generar presupuestos y contratos</li>
            <li className="text-white">Comunicación directa con el cliente</li>
            <li className="text-white">Facturación y seguimiento administrativo</li>
            <li className="text-white">Soporte técnico y atención a incidencias</li>
            <li className="text-white">Cumplimiento de obligaciones contractuales y legales</li>
          </ul>

          <h5 className="text-white">Fines secundarios (opcional):</h5>
          <ul>
            <li className="text-white">Envío de promociones o información sobre nuevos servicios</li>
            <li className="text-white">Encuestas de calidad del servicio</li>
            <li className="text-white">Prospección comercial</li>
          </ul>
          <p className="text-white">
            Si no desea que sus datos sean utilizados para los fines secundarios, puede enviar un correo a:
          </p>
          <Link
            href="mailto:jegdevstudioscontact@gmail.com"
            className="text-white text-decoration-underline"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            title="Envía un correo a jegdevstudioscontact@gmail.com"
            aria-label="Envía un correo a jegdevstudioscontact@gmail.com"
          >
            jegdevstudioscontact@gmail.com
          </Link>
          <p className="text-white">Con el asunto: <em>&quot;Negativa a fines secundarios&quot;</em></p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">¿Con quién compartimos su información?</h2>
          <p className="text-white">
            Sus datos personales no serán compartidos con terceros sin su consentimiento, salvo cuando sea estrictamente necesario para el cumplimiento de obligaciones legales o contractuales, como el procesamiento de pagos o generación de facturas mediante plataformas autorizadas.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Derechos ARCO</h2>
          <p className="text-white">
            Usted tiene derecho a conocer qué datos tenemos de usted, cómo los usamos y las condiciones del uso que les damos. Asimismo, puede solicitar:
          </p>
          <ul>
            <li className="text-white">La rectificación de su información si está desactualizada o incorrecta</li>
            <li className="text-white">La cancelación de sus datos si considera que no se requieren para alguna finalidad específica</li>
            <li className="text-white">La oposición al uso de sus datos para fines específicos</li>
          </ul>
          <p className="text-white">Para ejercer cualquiera de estos derechos, envíe un correo electrónico con el asunto:</p>
          <p className="text-white"><em>&quot;Ejercicio de derechos ARCO&quot;</em></p>
          <p className="text-white">A la dirección: </p>
          <Link
            href="mailto:jegdevstudioscontact@gmail.com"
            className="text-white text-decoration-underline"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            title="Envía un correo a jegdevstudioscontact@gmail.com"
            aria-label="Envía un correo a jegdevstudioscontact@gmail.com"
          >
            jegdevstudioscontact@gmail.com
          </Link>
          <p className="text-white">Incluya:</p>
          <ul>
            <li className="text-white">Nombre completo</li>
            <li className="text-white">Tipo de solicitud (Acceso, Rectificación, Cancelación u Oposición)</li>
            <li className="text-white">Descripción clara de los datos sobre los que desea ejercer sus derechos</li>
            <li className="text-white">Copia de una identificación oficial</li>
          </ul>
          <p className="text-white">Nos comprometemos a responder en un plazo no mayor a 20 días hábiles.</p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Revocación del consentimiento</h2>
          <p className="text-white">
            Usted puede revocar su consentimiento para el uso de sus datos personales en cualquier momento, enviando un correo con el asunto: <em>&quot;Revocación de consentimiento&quot;</em> a:
          </p>
          <Link
            href="mailto:jegdevstudioscontact@gmail.com"
            className="text-white text-decoration-underline"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            title="Envía un correo a jegdevstudioscontact@gmail.com"
            aria-label="Envía un correo a jegdevstudioscontact@gmail.com"
          >
            jegdevstudioscontact@gmail.com
          </Link>
          <p className="text-white">
            Tenga en cuenta que esto podría afectar la prestación de los servicios si aún existe una relación contractual activa.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Medidas de seguridad</h2>
          <p className="text-white">
            JEG Dev Studios adopta las medidas técnicas, administrativas y físicas necesarias para garantizar la seguridad de sus datos personales y evitar su daño, pérdida, alteración, destrucción o uso no autorizado.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Uso de cookies y tecnologías de rastreo</h2>
          <p className="text-white">
            Actualmente no utilizamos cookies ni tecnologías de rastreo en nuestro sitio web. Si en el futuro se llegaran a implementar, se notificará mediante el presente aviso y se solicitará el consentimiento correspondiente.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Cambios al aviso de privacidad</h2>
          <p className="text-white">
            Este aviso puede ser modificado para cumplir con nuevas disposiciones legales o políticas internas. Cualquier cambio será notificado a través de nuestro sitio web oficial:
          </p>
          <Link
            href="/aviso-de-privacidad"
            className="text-white text-decoration-underline"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            title="Visitar nuestra página de aviso de privacidad"
          >
            www.jegdevstudios.com/aviso-de-privacidad
          </Link>
          <p className="text-white mt-2">Última actualización: 27 de mayo de 2025</p>
        </article>
      </section>
    </>
  );
}