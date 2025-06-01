"use client";
import CardServices from "@/components/CardServices";
import "./services.css";

export default function ServicesClient() {
  return (
    <section className="section d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
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
            description="Implementamos estructuras limpias y reutilizables en lenguajes como Python, JavaScript y C# para garantizar estabilidad y crecimiento a largo plazo."
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
            description="Implementamos desarrollo en lenguajes como Java, Kotlin y React Native para garantizar compatibilidad, rendimiento y mantenimiento simplificado, asegurando escalabilidad y eficiencia."
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
  );
}
