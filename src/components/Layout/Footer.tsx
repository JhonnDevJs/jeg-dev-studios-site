import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-black text-white w-full p-4" role="contentinfo">
      <p className="text-xl text-white text-center mt-12">
        Ya sea que estés comparando <strong>agencias de diseño</strong> o buscando una <strong>agencia de desarrollo web</strong> que entienda las necesidades de tu negocio, en JEG Dev studios encontrarás una empresa que combina creatividad, tecnología y estrategia.
      </p>
      <div className="flex flex-col xl:flex-row justify-center items-center w-full gap-4 xl:gap-12 my-8">
        <article className="flex flex-col justify-center items-center h-full">
          <Link href="/sobre-nosotros" className="no-underline text-white text-2xl" tabIndex={0} title="Página sobre nosotros y la empresa JEG Dev studios" aria-label="Página sobre nosotros y la empresa JEG Dev studios" aria-labelledby="sobre-nosotros">
            ¿Quiénes somos?
          </Link>
        </article>
        <article className="flex flex-col justify-center items-center h-full">
          <Link
            href="/aviso-de-privacidad"
            className="no-underline text-white text-2xl"
            tabIndex={0}
            title="Aviso de privacidad de JEG Dev studios"
            aria-label="Aviso de privacidad de JEG Dev studios"
            aria-labelledby="aviso-de-privacidad"
          >
            Aviso de privacidad
          </Link>
        </article>
        <article className="flex flex-col justify-center items-center h-full">
          <Link
            href="/terminos-y-condiciones"
            className="no-underline text-white text-2xl"
            tabIndex={0}
            title="Términos y condiciones de JEG Dev studios"
            aria-label="Términos y condiciones de JEG Dev studios"
            aria-labelledby="terminos-y-condiciones"
          >
            Términos y condiciones
          </Link>
        </article>
        <article className="flex flex-col justify-center items-center gap-3">
          <section className="flex flex-col xl:flex-row justify-center items-center xl:items-start w-full h-full gap-2">
            <h2 className="text-white text-2xl">Siguenos</h2>
            <div className="flex justify-center items-center gap-4">
              <Link
                className="flex text-3xl no-underline"
                href="https://www.facebook.com/JEGDevStudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a página de facebook de JEG Dev studios"
                aria-label="Enlace a página de facebook de JEG Dev studios"
                aria-labelledby="facebook"
                tabIndex={0}
              ><span className="icon-facebook __icons-color"></span></Link>
              <Link
                className="flex text-3xl no-underline"
                href="https://instagram.com/jegdevstudios/"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de Instagram de JEG Dev studios"
                aria-label="Enlace a perfil de Instagram de JEG Dev studios"
                aria-labelledby="instagram"
                tabIndex={0}
              ><span className=" icon-instagram __icons-color"></span></Link>
              <Link
                className="flex text-3xl no-underline"
                href="https://www.tiktok.com/@jeg.dev.studios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de TikTok de JEG Dev studios"
                aria-label="Enlace a perfil de TikTok de JEG Dev studios"
                aria-labelledby="TikTok"
                tabIndex={0}
              ><span className=" icon-tiktok __icons-color"></span></Link>
              <Link
                className="flex text-3xl no-underline"
                href="https://www.youtube.com/@jegdevstudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a canal de Youtube de JEG Dev studios"
                aria-label="Enlace a canal de Youtube de JEG Dev studios"
                aria-labelledby="Youtube"
                tabIndex={0}
              ><span className=" icon-youtube __icons-color"></span></Link>
              <Link
                className="flex text-3xl no-underline"
                href="https://linkedin.com/company/jegdevstudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de linkedin de JEG Dev studios"
                aria-label="Enlace a perfil de linkedin de JEG Dev studios"
                aria-labelledby="linkedin"
                tabIndex={0}
              ><span className=" icon-linkedin-no-bg __icons-color"></span></Link>
              <Link
                className="flex text-3xl no-underline"
                href="https://x.com/JEGDevStudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de github de JEG Dev studios"
                aria-label="Enlace a perfil de x (twitter) de JEG Dev studios"
                aria-labelledby="github"
                tabIndex={0}
              ><span className=" icon-x __icons-color"></span></Link>
              <Link
                className="flex text-3xl no-underline"
                href="https://github.com/JEGDevStudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de github de JEG Dev studios"
                aria-label="Enlace a perfil de github de JEG Dev studios"
                aria-labelledby="github"
                tabIndex={0}
              ><span className=" icon-github __icons-color"></span></Link>
            </div>
          </section>
        </article>
      </div>
      <p className="flex justify-center items-center text-center w-full mb-0 mt-4">
        &copy; {new Date().getFullYear()} JEG Dev studios.<br />Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
