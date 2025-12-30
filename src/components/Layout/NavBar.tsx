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
      <button className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors">
        <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>menu</span>
      </button>
    </header>
  );
}

export default NavBar;
