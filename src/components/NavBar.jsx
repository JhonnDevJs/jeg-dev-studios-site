import Link from "next/link";
import Image from "next/image";
import iconLogo from "../assets/img/logo/logo-bg-transparent.webp";

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg align-items-center bg-white fixed-top w-100">
        <div className="container-fluid d-flex align-items-center">
          {/* Logo y Nombre */}
          <Link
            href="/"
            className="navbar-brand d-flex text-black justify-content-center align-items-center text-center p-0 gap-2"
          >
            <Image
              src={iconLogo}
              alt="Logo"
              width={40}
              height={40}
              className="d-inline-block align-text-top rounded-circle"
              loading="lazy"
            />
            <h1 className="m-0 p-0 text-center fs-5">JEG Dev Studios</h1>
          </Link>

          {/* Botón Hamburguesa para móviles */}
          <button
            className="navbar-toggler bg-white border-0"
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> {/* ms-auto alinea el contenido a la derecha */}
              <li className="nav-item ">
                <Link
                  href="/"
                  className="nav-link active text-black"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className="nav-link text-black">
                  Servicios
                </Link>
              </li>
              <li className="nav-item"> {/* Eliminado d-none */}
                <Link
                  href="/proyects"
              className="nav-link d-none text-black" /* Eliminada clase 'disabled' */
                > 
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link text-black">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item"> {/* Eliminado d-none */}
            <Link href="/blog" className="nav-link d-none text-black"> {/* Eliminada clase 'disabled' */}
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link text-black">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
