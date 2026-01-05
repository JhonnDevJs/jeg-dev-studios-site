// Imports Hooks
import Link from "next/link";
import Image from "next/image";

// Imports Components

import Logo from "./Logo";

export default async function Footer() {
  return (
    <>

      <footer className="mt-auto border-t border-white/5 bg-[#0B0D10] px-6 py-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="text-xl font-bold tracking-tight text-white">JEG Dev Studios</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Ya sea que estés comparando <strong>agencias de diseño</strong> o buscando una <strong>agencia de desarrollo web</strong> en JEG Dev studios encontrarás una empresa que combina creatividad, tecnología y estrategia.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/80">Menu</h4>
              <ul className="flex flex-col gap-3">
                <li><Link className="text-sm text-gray-400 hover:text-blue-500 transition-colors" href="/">Inicio</Link></li>
                <li><Link className="text-sm text-gray-400 hover:text-blue-500 transition-colors" href="/servicios">Servicios</Link></li>
                <li><Link className="text-sm text-gray-400 hover:text-blue-500 transition-colors" href="/portafolio">Portafolio</Link></li>
                <li><Link className="text-sm text-gray-400 hover:text-blue-500 transition-colors" href="/sobre-nosotros">Sobre Nosotros</Link></li>
                <li><Link className="text-sm text-gray-400 hover:text-blue-500 transition-colors" href="/contacto">Contacto</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/80">Contacto</h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="material-symbols-outlined mt-0.5 text-blue-500 shrink-0" style={{ fontSize: 16 }}>location_on</span>
                  <span>CDMX, México</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="material-symbols-outlined text-blue-500 shrink-0" style={{ fontSize: 16 }}>mail</span>
                  <Link className="hover:text-white transition-colors truncate" href="#">contacto@jegdevstudios.com</Link>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="material-symbols-outlined text-blue-500 shrink-0" style={{ fontSize: 16 }}>call</span>
                  <Link className="hover:text-white transition-colors" href="https://wa.me/message/IFBW3ARPBITWA1">Chat de whatsapp</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 border-t border-white/5 pt-8">
            <div className="flex gap-4">

              <Link
                className="flex text-2xl no-underline"
                href="https://www.facebook.com/JEGDevStudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a página de facebook de JEG Dev studios"
                aria-label="Enlace a página de facebook de JEG Dev studios"
                aria-labelledby="facebook"
                tabIndex={0}
              ><span className="icon-facebook __icons-color"></span></Link>
              <Link
                className="flex text-2xl no-underline"
                href="https://instagram.com/jegdevstudios/"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de Instagram de JEG Dev studios"
                aria-label="Enlace a perfil de Instagram de JEG Dev studios"
                aria-labelledby="instagram"
                tabIndex={0}
              ><span className=" icon-instagram __icons-color"></span></Link>
              <Link
                className="flex text-2xl no-underline"
                href="https://www.tiktok.com/@jeg.dev.studios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de TikTok de JEG Dev studios"
                aria-label="Enlace a perfil de TikTok de JEG Dev studios"
                aria-labelledby="TikTok"
                tabIndex={0}
              ><span className=" icon-tiktok __icons-color"></span></Link>
              <Link
                className="flex text-2xl no-underline"
                href="https://www.youtube.com/@jegdevstudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a canal de Youtube de JEG Dev studios"
                aria-label="Enlace a canal de Youtube de JEG Dev studios"
                aria-labelledby="Youtube"
                tabIndex={0}
              ><span className=" icon-youtube __icons-color"></span></Link>
              <Link
                className="flex text-2xl no-underline"
                href="https://linkedin.com/company/jegdevstudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de linkedin de JEG Dev studios"
                aria-label="Enlace a perfil de linkedin de JEG Dev studios"
                aria-labelledby="linkedin"
                tabIndex={0}
              ><span className=" icon-linkedin-no-bg __icons-color"></span></Link>
              <Link
                className="flex text-2xl no-underline"
                href="https://x.com/JEGDevStudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de github de JEG Dev studios"
                aria-label="Enlace a perfil de x (twitter) de JEG Dev studios"
                aria-labelledby="github"
                tabIndex={0}
              ><span className=" icon-x __icons-color"></span></Link>
              <Link
                className="flex text-2xl no-underline"
                href="https://github.com/JEGDevStudios"
                target="_blank"
                rel="noopener noreferrer"
                title="Enlace a perfil de github de JEG Dev studios"
                aria-label="Enlace a perfil de github de JEG Dev studios"
                aria-labelledby="github"
                tabIndex={0}
              ><span className=" icon-github __icons-color"></span></Link>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
                <Link className="hover:text-blue-500 transition-colors" href="/aviso-de-privacidad">Política de Privacidad</Link>
                <Link className="hover:text-blue-500 transition-colors" href="/terminos-y-condiciones">Términos y Condiciones</Link>
              </div>
              <p className="text-[10px] text-gray-600">
                &copy; {new Date().getFullYear()} JEG Dev Studios. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}