"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import iconLogo from "@/assets/img/logo/logo-bg-transparent.webp";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", title: "Página de inicio del sitio web de jeg dev studios" },
    { href: "/servicios", label: "Servicios", title: "Página de nuestros servicios" },
    { href: "/proyectos", label: "Proyectos", title: "Página de nuestros proyectos" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros", title: "Página sobre nosotros y la empresa jeg dev studios" },
    { href: "https://blog.jegdevstudios.com/", label: "Blog", title: "Página del blog de tecnología de jeg dev studios" },
    { href: "/contacto", label: "Contacto", title: "Página de contacto de jeg dev studios" },
  ];

  return (
    <header className="shadow-sm">
      <nav className="fixed top-0 left-0 w-full z-50 header-nav" aria-label="Navegación principal">
        <div className="w-full px-4 flex items-center justify-between lg:justify-center h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex text-white items-center justify-center text-center p-0 gap-2 fixed top-0 left-4 z-10"
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
              priority={true}
            />
          </Link>

          {/* Botón Hamburguesa para móviles */}
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

          {/* Menú */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"
              } lg:block absolute lg:relative top-24 lg:top-auto left-0 w-full lg:w-auto`}
            id="navbarNav"
          >
            <div className="gradient-border max-w-max mx-auto">
              <ul
                className="flex flex-col lg:flex-row items-center mx-auto p-1 bg-black rounded-2xl"
              >
                {navLinks.map((navLink) => (
                  <li key={navLink.href}>
                    <Link
                      href={navLink.href}
                      className={`block text-white nav-efecto px-4 py-2 ${pathname === navLink.href ? "active" : ""
                        }`}
                      aria-current={pathname === navLink.href ? "page" : undefined}
                      title={navLink.title}
                      aria-label={navLink.title}
                      tabIndex={0}
                      onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
                    >
                      {navLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
