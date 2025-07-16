import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="cta-contacto"
      className="bg-transparent text-white py-5 text-center"
    >
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">
          ¿Listo para dar el siguiente paso digital?
        </h2>
        <p className="lead mb-4 mx-auto" style={{ maxWidth: "720px" }}>
          Es momento de convertir tu idea en una solución tecnológica escalable
          y atractiva. Agenda tu consulta gratuita o contáctanos directamente.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <Link
            href="/contacto"
            aria-label="Enlace a página de contacto"
            className="btn btn-light btn-lg px-4"
            role="button"
            title="Enlace a página de contacto"
            tabIndex={0}
          >
            Solicitar una consulta gratuita
          </Link>
          <Link
            href="/servicios"
            aria-label="Enlace a página de servicios"
            className="btn btn-outline-light btn-lg px-4"
            role="button"
            title="Enlace a página de servicios"
            tabIndex={0}
          >
            Ver nuestros servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
