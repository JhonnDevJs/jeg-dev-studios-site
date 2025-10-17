import Link from "next/link";

function Footer() {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center bg-black text-white w-100 p-3" role="contentinfo">
      <p className="fs-5 text-white text-center mt-5">
        Ya sea que estés comparando <strong>agencias de diseño</strong> o buscando una <strong>agencia de desarrollo web</strong> que entienda las necesidades de tu negocio, en JEG Dev studios encontrarás una empresa que combina creatividad, tecnología y estrategia.
      </p>
      <div className="d-flex flex-xl-row flex-column justify-content-center align-items-center w-100 gap-xl-5 gap-3">
        <article className="d-flex flex-column justify-content-center align-items-center h-100">
          <Link href="/sobre-nosotros" className="text-decoration-none text-white fs-4" tabIndex={0} title="Página sobre nosotros y la empresa JEG Dev studios" aria-label="Página sobre nosotros y la empresa JEG Dev studios" aria-labelledby="sobre-nosotros">
            ¿Quiénes somos?
          </Link>
        </article>
        <article className="d-flex flex-column justify-content-center align-items-center h-100">
          <Link
            href="/aviso-de-privacidad"
            className="text-decoration-none text-white fs-4"
            tabIndex={0}
            title="Aviso de privacidad de JEG Dev studios"
            aria-label="Aviso de privacidad de JEG Dev studios"
            aria-labelledby="aviso-de-privacidad"
          >
            Aviso de privacidad
          </Link>
        </article>
        <article className="d-flex flex-column justify-content-center align-items-center h-100">
          <Link
            href="/terminos-y-condiciones"
            className="text-decoration-none text-white fs-4"
            tabIndex={0}
            title="Términos y condiciones de JEG Dev studios"
            aria-label="Términos y condiciones de JEG Dev studios"
            aria-labelledby="terminos-y-condiciones"
          >
            Términos y condiciones
          </Link>
        </article>
        <article className="d-flex flex-column justify-content-center align-items-center gap-3">
          <section className="d-flex flex-xl-row flex-column justify-content-center align-items-xl-start align-items-center w-100 h-100 gap-2">
            <h2 className="text-white fs-4">Siguenos</h2>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <Link
                className="d-flex fs-2 text-decoration-none icon-facebook __icons-color"
                href="https://www.facebook.com/JEGDevStudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a página de facebook de JEG Dev studios"
                aria-label="Enlace a página de facebook de JEG Dev studios"
                aria-labelledby="facebook"
                tabIndex={0}
              ></Link>
              <Link
                className="d-flex fs-2 text-decoration-none icon-instagram __icons-color"
                href="https://instagram.com/jegdevstudios/"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de Instagram de JEG Dev studios"
                aria-label="Enlace a perfil de Instagram de JEG Dev studios"
                aria-labelledby="instagram"
                tabIndex={0}
              ></Link>
              <Link
                className="d-flex fs-2 text-decoration-none icon-tiktok __icons-color"
                href="https://www.tiktok.com/@jeg.dev.studios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de TikTok de JEG Dev studios"
                aria-label="Enlace a perfil de TikTok de JEG Dev studios"
                aria-labelledby="TikTok"
                tabIndex={0}
              ></Link>
              <Link
                className="d-flex fs-2 text-decoration-none icon-youtube __icons-color"
                href="https://www.youtube.com/@jegdevstudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a canal de Youtube de JEG Dev studios"
                aria-label="Enlace a canal de Youtube de JEG Dev studios"
                aria-labelledby="Youtube"
                tabIndex={0}
              ></Link>
              <Link
                className="d-flex fs-2 text-decoration-none icon-linkedin-no-bg __icons-color"
                href="https://linkedin.com/company/jegdevstudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de linkedin de JEG Dev studios"
                aria-label="Enlace a perfil de linkedin de JEG Dev studios"
                aria-labelledby="linkedin"
                tabIndex={0}
              ></Link>
              <Link
                className="d-flex fs-2 text-decoration-none icon-github __icons-color"
                href="https://github.com/JEGDevStudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de github de JEG Dev studios"
                aria-label="Enlace a perfil de github de JEG Dev studios"
                aria-labelledby="github"
                tabIndex={0}
              ></Link>
            </div>
          </section>
        </article>
      </div>
      <p className="d-flex justify-content-center align-items-center text-center w-100 mb-0 mt-3">
        &copy; {new Date().getFullYear()} JEG Dev studios.<br/>Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
