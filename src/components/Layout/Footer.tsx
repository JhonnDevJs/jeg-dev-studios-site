import Link from "next/link";
import iconLogo from "@/assets/img/logo/logo-bg-blue.webp";

function Footer() {
  return (
    <>
    
				<footer className="mt-auto border-t border-white/5 bg-[#0B0D10] px-6 py-10">
					<div className="flex flex-col gap-8">
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 shadow-lg shadow-primary/20">
									<span className="material-symbols-outlined text-white" style={{ fontSize: 24 }}>code</span>
								</div>
								<span className="text-xl font-bold tracking-tight text-white">JEG Dev Studios</span>
							</div>
							<p className="text-sm leading-relaxed text-gray-400 max-w-xs">
								Transformando negocios a través de tecnología y estrategia digital.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-8">
							<div className="flex flex-col gap-4">
								<h4 className="text-xs font-bold uppercase tracking-wider text-white/80">Menu</h4>
								<ul className="flex flex-col gap-3">
									<li><Link className="text-sm text-gray-400 hover:text-primary transition-colors" href="/">Inicio</Link></li>
									<li><Link className="text-sm text-gray-400 hover:text-primary transition-colors" href="/servicios">Servicios</Link></li>
									<li><Link className="text-sm text-gray-400 hover:text-primary transition-colors" href="/portafolio">Portafolio</Link></li>
									<li><Link className="text-sm text-gray-400 hover:text-primary transition-colors" href="/sobre-nosotros">Sobre Nosotros</Link></li>
									<li><Link className="text-sm text-gray-400 hover:text-primary transition-colors" href="/contacto">Contacto</Link></li>
								</ul>
							</div>
							<div className="flex flex-col gap-4">
								<h4 className="text-xs font-bold uppercase tracking-wider text-white/80">Contacto</h4>
								<ul className="flex flex-col gap-3">
									<li className="flex items-start gap-2 text-sm text-gray-400">
										<span className="material-symbols-outlined mt-0.5 text-primary shrink-0" style={{ fontSize: 16 }}>location_on</span>
										<span>CDMX, México</span>
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-400">
										<span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 16 }}>mail</span>
										<Link className="hover:text-white transition-colors truncate" href="#">contacto@jegdevstudios.com</Link>
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-400">
										<span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 16 }}>call</span>
										<Link className="hover:text-white transition-colors" href="https://wa.me/message/IFBW3ARPBITWA1">Chat de whatsapp</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex flex-col gap-6 border-t border-white/5 pt-8">
							<div className="flex gap-4">
								<Link className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark border border-white/5 text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all" href="https://linkedin.com/company/jegdevstudios">
									<svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
								</Link>
								<Link className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark border border-white/5 text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all" href="https://x.com/JEGDevStudios">
									<svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
								</Link>
								<Link className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark border border-white/5 text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all" href="https://instagram.com/jegdevstudios/">
									<svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
								</Link>
							</div>
							<div className="flex flex-col gap-3">
								<div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
									<Link className="hover:text-primary transition-colors" href="/aviso-de-privacidad">Política de Privacidad</Link>
									<Link className="hover:text-primary transition-colors" href="/terminos-y-condiciones">Términos y Condiciones</Link>
								</div>
								<p className="text-[10px] text-gray-600">
									© 2024 JEG Dev Studios. Todos los derechos reservados.
								</p>
							</div>
						</div>
					</div>
				</footer>
    <footer className="flex flex-col justify-center items-center bg-black text-white w-full p-4" role="contentinfo">
      <p className="text-xl text-white text-center mt-12">
        Ya sea que estés comparando <strong>agencias de diseño</strong> o buscando una <strong>agencia de desarrollo web</strong> que entienda las necesidades de tu negocio, en JEG Dev studios encontrarás una empresa que combina creatividad, tecnología y estrategia.
      </p>
      <div className="flex flex-col xl:flex-row justify-center items-center w-full gap-4 xl:gap-12 my-8">
        <article className="flex flex-col justify-center items-center h-full">
          <Link href="/sobre-nosotros" className="no-underline text-white text-2xl" tabIndex={0} title="Página sobre nosotros y la empresa JEG Dev studios" aria-label="Página sobre nosotros y la empresa JEG Dev studios" aria-labelledby="sobre-nosotros">
            ¿Quiénes somos?
          </Link>
        </article >
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
        </article >
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
        </article >
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
        </article >
      </div>
      <p className="flex justify-center items-center text-center w-full mb-0 mt-4">
        &copy; {new Date().getFullYear()} JEG Dev studios.<br />Todos los derechos
        reservados.
      </p>
    </footer>
    </>
  );
}

export default Footer;
