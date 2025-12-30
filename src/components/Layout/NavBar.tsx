"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import iconLogo from "@/assets/img/logo/logo-bg-blue.webp";
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

    <header className="sticky top-0 z-50 flex items-center justify-between bg-background-dark/90 backdrop-blur-md p-4 transition-all duration-300">
      <Link href="/" className="flex items-center gap-3">
        <Image src={iconLogo} className="w-[30px] rounded" alt="logo de la agencia JEG Dev Studios" />
        <h1 className="text-lg font-bold tracking-tight text-white">JEG Dev Studios</h1>
      </Link>
      <button className="hidden md:hidden h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
        className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>menu</span>
      </button>
      <ul
        ref={navRef}
        className={`absolute left-0 top-full z-40 w-full origin-top-right overflow-hidden rounded-b-3xl bg-background-dark/90 py-4 text-white shadow-lg transition-all duration-300 backdrop-blur-md md:relative md:top-auto md:z-0 md:flex md:w-auto md:items-center md:bg-transparent md:py-0 md:shadow-none ${isMenuOpen
          ? "max-h-[100vh] opacity-100 bg-[#101922]"
          : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
          }`}
      >
        <div
          className="md:hidden absolute top-0 left-0 h-2 w-full"
          style={indicatorStyle}
        />
        {navLinks.map(({ href, label, title }) => (
          <li key={href}>
            <Link
              href={href}
              title={title}
              className={`block px-6 py-3 text-base font-medium transition-colors hover:text-blue-500 md:px-3 md:py-2 ${pathname === href
                ? "text-blue-500"
                : ""
                }`}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {label}
            </Link>
          </li>
        ))}
        <div className="md:relative md:order-first md:mx-2">
          <div
            className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-300 md:hidden"
            style={indicatorStyle}
          />
          <div
            className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-300 md:hidden"
            style={indicatorStyle}
          />
        </div>
      </ul>

    </header>
  );
}

export default NavBar;
