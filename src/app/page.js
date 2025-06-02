import Link from "next/link";
import CardServices from "@/components/CardServices";
import TeamCarousel from "@/components/TeamCarousel";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="section d-flex flex-md-row flex-column justify-content-xl-start justify-content-center align-items-center w-100 vh-100 p-0 m-0 __imageBackground">
        <article
          className="container justify-content-center align-items-center w-100 gap-5 p-4 m-0"
          style={{ maxWidth: "46rem" }}
        >
          <div className="container p-0 m-0">
            <h2 className="display-1 h1 text-light text-shadow">
              JEG Dev Studios
            </h2>
            <p className="fs-1 text-light text-shadow text-brack w-100 w-xl-50">
              No solo creamos páginas web, construimos experiencias digitales.
            </p>
          </div>
          <div className="d-flex flex-column bg-transparent aling-items-center justify-content-start w-100 gap-3">
            <Link
              className="btn-services"
              href="/services"
              style={{ maxWidth: "15.3rem" }}
            >
              <span className="btn-text">Ver nuestros servicios</span>
            </Link>
            <Link
              className="btn-services"
              href="/contact"
              style={{ maxWidth: "13.4rem" }}
            >
              <span className="btn-text">Solicita una consulta</span>
            </Link>
            <Link
              href="/about"
              className="btn-services"
              style={{ maxWidth: "7.8rem" }}
            >
              <span className="btn-text">Nosotros</span>
            </Link>
          </div>
        </article>
      </section>
      <section className="d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
        <h2>Nuestros Servicios</h2>
        <article className="d-flex justify-content-center align-items-center w-100 p-0 m-0">
          <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
            <CardServices
              title="Desarrollo de sitios web"
              description="Desde la estructura visual hasta la funcionalidad interactiva, cada detalle es diseñado para optimizar la navegación y comunicar eficazmente el mensaje de una marca."
              url="/services/desarrollo-web"
              items={[
                "Diseño Responsivo",
                "SEO Optimizado",
                "Seguridad y Rendimiento",
                "Experiencia Intuitiva",
              ]}
            />
            <CardServices
              title="Desarrollo de aplicaciones"
              description="Implementamos lenguajes como Kotlin, React Native, PHP (Laravel) para garantizar compatibilidad, rendimiento y mantenimiento simplificado, asegurando escalabilidad y eficiencia."
              url="/services/desarrollo-movil"
              items={[
                "Código Modular y Escalable",
                "Optimización de Algoritmos",
                "Interfaces API y Microservicios",
                "Seguridad y Cifrado Avanzado",
              ]}
            />
            <CardServices
              title="Desarrollo de software"
              description="Implementamos estructuras limpias y reutilizables en lenguajes como React Native y Java para garantizar estabilidad y crecimiento a largo plazo."
              url="/services/desarrollo-software"
              items={[
                "Clean Code",
                "Optimización del Rendimiento",
                "Seguridad a Nivel Backend y DevSecOps",
                "Optimización para Dispositivos Móviles",
              ]}
            />
          </ul>
        </article>
      </section>
      <section
        className="section d-flex flex-column bg-black justify-content-center align-items-center w-100 gap-3 p-xl-5 p-3 mt-5"
        style={{ minHeight: "553px" }}
      >
        <h2 className="text-center text-white">
          Nuestro equipo excepcional de desarrolladores y diseñadores trabaja en
          conjunto para ofrecer soluciones digitales personalizadas que se
          adaptan a las necesidades de cada cliente.
        </h2>
        <TeamCarousel />
      </section>
      <section className="d-flex flex-column bg-transparent justify-content-center align-items-start text-center w-100 gap-3 p-xl-5 p-3">
        <h2 className="display-1 text-white">¿Por qué elegirnos?</h2>
        <ul className="d-flex flex-wrap justify-content-center align-items-center w-100 gap-2 p-0 m-0 list-unstyled">
          <li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
            <p className="fs-2 m-0">Profesionalismo</p>
          </li>
          <li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
            <p className="fs-2 m-0">
              Soluciones personalizadas a tu negocio
            </p>
          </li>
          <li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
            <p className="fs-2 m-0">Responsabilidad</p>
          </li>
          <li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
            <p className="fs-2 m-0">+5 años de experiencia combinada</p>
          </li>
          <li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
            <p className="fs-2 m-0">Soluciones personalizadas a tu negocio</p>
          </li>
          <li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
            <p className="fs-2 m-0">Acompañamiento y soporte</p>
          </li>
          <li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
            <p className="fs-2 m-0">Diseño 100% adaptado a móviles</p>
          </li>
          <li className="card bg-transparent text-center text-white border-1 border-white rounded-5 shadow-sm p-3">
            <p className="fs-2 m-0">Compromiso</p>
          </li>
        </ul>
      </section>
    </>
  );
}
