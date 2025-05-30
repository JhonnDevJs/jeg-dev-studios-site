import Link from "next/link";

function Footer() {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center bg-black text-white w-100 p-3">
      <div className="d-flex flex-xl-row flex-column justify-content-center align-items-center w-100 gap-xl-5 gap-0">
        <article className="d-flex flex-column justify-content-center align-items-center gap-3">
          <div className="d-flex flex-column justify-content-center align-items-xl-start align-items-start">
            <h2>Contactanos</h2>
            <Link
              href="tel:+525512197135"
              className="text-decoration-none text-white fs-5"
              target="_blank"
              rel="noopener noreferrer"
              title="Enlace a teléfono"
              aria-label="Enlace a teléfono"
              tabIndex={0}
            >
              +52 55 1219 7135
            </Link>
            <Link
              href="mailto:jegdevstudioscontact@gmail.com"
              className="text-decoration-none text-white fs-5"
              target="_blank"
              rel="noopener noreferrer"
              title="Enlace a gmail"
              aria-label="Enlace a gmail"
              tabIndex={0}
            >
              jegdevstudioscontact@gmail.com
            </Link>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-xl-start align-items-center w-100 h-100 gap-3">
            <h2>Siguenos</h2>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <Link
                className="d-flex fs-4 text-decoration-none icon-facebook __icons-color"
                href="https://www.facebook.com/JEGDevStudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a página de facebook"
                aria-label="Enlace a página de facebook"
                tabIndex={0}
              ></Link>
              <Link
                className="d-flex fs-4 text-decoration-none icon-instagram __icons-color"
                href="https://instagram.com/jegdevstudios/"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a página de Instagram"
                aria-label="Enlace a página de Instagram"
                tabIndex={0}
              ></Link>
              <Link
                className="d-flex fs-4 text-decoration-none icon-linkedin-no-bg __icons-color"
                href="https://linkedin.com/company/jegdevstudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a página de linkedin"
                aria-label="Enlace a página de linkedin"
                tabIndex={0}
              ></Link>
              <Link
                className="d-flex fs-4 text-decoration-none icon-github __icons-color"
                href="https://github.com/JEGDevStudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a página de github"
                aria-label="Enlace a página de github"
                tabIndex={0}
              ></Link>
            </div>
          </div>
        </article>
        <article className="d-flex flex-column justify-content-center align-items-center h-100">
          <Link href="/about" className="text-decoration-none text-white fs-4">
            ¿Quiénes somos?
          </Link>
        </article>
        <article className="d-flex flex-column justify-content-center align-items-center h-100">
          <Link
            href="/Politica-de-privacidad"
            className="text-decoration-none text-white fs-4"
          >
            Política de privacidad
          </Link>
        </article>
        <article className="d-flex flex-column justify-content-center align-items-center h-100">
          <Link
            href="/terminos-y-condiciones"
            className="text-decoration-none text-white fs-4"
          >
            Términos y condiciones
          </Link>
        </article>
      </div>
      <p className="d-flex justify-content-center w-100 mb-0 mt-3">
        &copy; {new Date().getFullYear()} JEG Dev Studios. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
