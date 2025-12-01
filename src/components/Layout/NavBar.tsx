"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import iconLogo from "@/assets/img/logo/logo-bg-transparent.webp";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Función para cerrar el menú si la ventana se redimensiona a escritorio
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Deshabilita el scroll del body cuando el menú está abierto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Función de limpieza
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home", title: "Página de inicio del sitio web de jeg dev studios" },
    { href: "/servicios", label: "Servicios", title: "Página de nuestros servicios" },
    { href: "/proyectos", label: "Proyectos", title: "Página de nuestros proyectos" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros", title: "Página sobre nosotros y la empresa jeg dev studios" },
    { href: "https://blog.jegdevstudios.com/", label: "Blog", title: "Página del blog de tecnología de jeg dev studios" },
    { href: "/contacto", label: "Contacto", title: "Página de contacto de jeg dev studios" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm bg-black/50 backdrop-blur md:bg-transparent md:backdrop-blur-none">
      <nav className="w-full px-4 flex items-center justify-between lg:justify-center h-20" aria-label="Navegación principal">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex text-white items-center justify-center text-center p-0 gap-2"
            aria-label="Logo JEG Dev Studios"
            title="Logo JEG Dev Studios"
            tabIndex={0}
          >
            <Image
              src={iconLogo}
              alt="Logo JEG Dev Studios"
              title="JEG Dev Studios Logo Home"
              width={70}
              height={70}
              className="inline-block align-top rounded-circle"
              priority
            />
          </Link>

          {/* Botón Hamburguesa para móviles */}
          <div className="lg:hidden">
            <button
              className="lg:hidden ml-auto text-white border-0 bg-transparent"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-controls="navbarNav"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>

          {/* Menú */}
          {/* Overlay para el menú móvil */}
          <div
            className={`fixed inset-0 top-0 left-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-10" : "opacity-0 pointer-events-none"
              }`}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          ></div>

          {/* Contenido del Menú */}
          <div
            className={`fixed top-0 right-0 h-full w-full max-w-xs z-50 flex flex-col bg-black transition-transform duration-300 ease-in-out lg:static lg:h-auto lg:w-auto lg:max-w-none lg:bg-transparent lg:transform-none lg:flex-row ${isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            id="navbarNav"
          >
            {/* Botón de cierre para móvil */}
            <div className="flex justify-end p-4 lg:hidden">
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
                className="text-white"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Lista de enlaces */}
            <ul className="flex flex-col items-center pt-16 lg:pt-0 lg:h-auto lg:flex-row lg:p-1 bg-black lg:rounded-2xl lg:gradient-border">
              {navLinks.map((navLink) => (
                <li key={navLink.href} className="w-full lg:w-auto">
                  <Link
                    href={navLink.href}
                    className={`block text-white nav-efecto px-4 py-4 text-2xl text-center lg:text-base lg:py-2 ${pathname === navLink.href ? "active" : ""
                      }`}
                    aria-current={pathname === navLink.href ? "page" : undefined}
                    title={navLink.title}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {navLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav >
    </header>
  );
}

export default NavBar;
