"use client";

import Link from "next/link";
import Image from "next/image";
import iconLogo from "../assets/img/logo/logo-bg-transparent.webp";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();

  return (
    <header className="shadow-sm">
      <nav className="navbar navbar-expand-lg align-items-center fixed-top w-100 header-nav" aria-label="Navegación principal">
        <div className="container-fluid d-flex align-items-center">
          {/* Logo y Nombre */}
          <Link
            href="/"
            className="navbar-brand d-flex text-white justify-content-center align-items-center text-center p-0 gap-2"
            style={{ position: "fixed", top: "0rem", left: "3rem" }}
          >
            <Image
              src={iconLogo}
              alt="Logo JEG Dev Studios"
              width={70}
              height={70}
              className="d-inline-block align-text-top rounded-circle"
              loading="lazy"
            />
          </Link>

          {/* Botón Hamburguesa para móviles */}
          <button
            className="navbar-toggler bg-transparent text-white border-0 ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Menú */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <div className="gradient-border">
              <ul
                className="navbar-nav mx-auto p-1"
                style={{ background: "#000", borderRadius: "0.95rem" }}
              >
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link text-white nav-efecto${
                      pathname === "/" ? " active" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/servicios"
                    className={`nav-link text-white nav-efecto${
                      pathname === "/servicios" ? " active" : ""
                    }`}
                  >
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/proyectos"
                    className={`nav-link d-none text-white nav-efecto${
                      pathname === "/proyectos" ? " active" : ""
                    }`}
                  >
                    Proyectos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/sobre-nosotros"
                    className={`nav-link text-white nav-efecto${
                      pathname === "/sobre-nosotros" ? " active" : ""
                    }`}
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/blog"
                    className={`nav-link text-white nav-efecto${
                      pathname === "/blog" ? " active" : ""
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/contacto"
                    className={`nav-link text-white nav-efecto${
                      pathname === "/contacto" ? " active" : ""
                    }`}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
