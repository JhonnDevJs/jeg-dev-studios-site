"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import iconLogo from "@/assets/img/logo/logo-bg-transparent.webp";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

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

  // Efecto para actualizar el indicador de la navegación de escritorio
  useEffect(() => {
    const updateIndicator = () => {
      if (navRef.current) {
        const activeButton = navRef.current.querySelector<HTMLElement>(
          `a[aria-current="page"]`
        );
        if (activeButton) {
          setIndicatorStyle({
            width: activeButton.offsetWidth,
            height: activeButton.offsetHeight,
            transform: `translateX(${activeButton.offsetLeft}px)`,
          });
        }
      }
    };
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [pathname]);

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
      <nav className="w-full px-4 flex items-center justify-between h-20 max-w-7xl mx-auto" aria-label="Navegación principal">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 text-white flex items-center justify-center"
          aria-label="Logo JEG Dev Studios"
          title="Logo JEG Dev Studios"
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

        {/* Contenedor del menú (escritorio) */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul
            ref={navRef}
            className="relative flex items-center bg-black/70 p-1 rounded-full"
          >
            {/* Indicador para escritorio */}
            <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-in-out" style={indicatorStyle} />

            {navLinks.map((navLink) => (
              <li key={navLink.href}>
                <Link
                  href={navLink.href}
                  className={`relative z-10 block nav-efecto px-4 py-2 text-base rounded-full transition-colors duration-300 ${pathname === navLink.href ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  aria-current={pathname === navLink.href ? "page" : undefined}
                  title={navLink.title}
                >
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón Hamburguesa para móviles */}
        <div className="lg:hidden">
          <button
            className="ml-4 text-white border-0 bg-transparent"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>

        {/* Menú Móvil (Overlay y Contenido) */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            ></div>
            <div
              className="fixed top-0 right-0 h-full w-full max-w-xs z-50 flex flex-col bg-black transition-transform duration-300 ease-in-out transform translate-x-0"
              id="navbarNav"
            >
              <div className="flex justify-end p-4">
                <button onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú" className="text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              <ul className="flex flex-col items-center justify-start pt-8">
                {navLinks.map((navLink) => (
                  <li key={navLink.href} className="w-full">
                    <Link
                      href={navLink.href}
                      className={`block px-4 py-4 text-2xl text-center ${pathname === navLink.href ? "text-blue-400" : "text-white"}`}
                      title={navLink.title}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {navLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
