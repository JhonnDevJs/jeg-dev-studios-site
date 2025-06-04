"use client";
import { useState } from "react";
import Link from "next/link";
import CardServices from "@/components/CardServices";
import FAQ from "@/components/FAQ";
import "./services.css";

const faqs = [
  {
    question: "¿Cómo contrato un servicio con ustedes?",
    answer:
      "Es muy fácil: elige el tipo de proyecto que necesitas (página web, aplicación móvil o software empresarial), revisa nuestros paquetes y contáctanos. Agendamos una videollamada para conocer tu idea y te enviamos una propuesta clara y detallada."
  },
  {
    question: "¿Debo pagar todo de una vez?",
    answer:
      "No. Trabajamos por etapas: se paga un mínimo del 50% al iniciar y el resto cuando el proyecto esté finalizado y aprobado por ti. Esta modalidad aplica para cualquiera de nuestros servicios."
  },
  {
    question: "¿Incluye mantenimiento o soporte?",
    answer:
      "Depende del paquete contratado. Algunos incluyen mantenimiento básico por un tiempo limitado. También ofrecemos planes de soporte y mantenimiento personalizados para proyectos a largo plazo."
  },
  {
    question: "¿Qué necesito para comenzar un proyecto?",
    answer:
      "Solo necesitas tener claro tu objetivo y entregarnos los datos básicos de tu marca: nombre, logotipo, colores y una idea general de lo que deseas lograr. Nosotros te acompañamos en cada paso del proceso."
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Trabajamos con tecnologías modernas y adaptadas a cada tipo de desarrollo: HTML, CSS, JavaScript, React, Node.js, Laravel, Flutter, Kotlin, Unity, entre otras. Elegimos lo más adecuado según tu proyecto."
  },
  {
    question: "¿Qué sucede si quiero cancelar el proyecto?",
    answer:
      "Puedes hacerlo, pero aplicamos una política de 0 devoluciones del pago inicial, ya que se ha invertido tiempo y recursos en el desarrollo. Esta condición está estipulada en el contrato desde el inicio."
  },
  {
    question: "¿Puedo ampliar o escalar mi proyecto más adelante?",
    answer:
      "¡Por supuesto! Todos nuestros desarrollos están pensados para crecer. Si inicias con algo básico, puedes agregar nuevas funcionalidades, secciones o módulos en cualquier momento."
  },
  {
    question: "¿Trabajan con contratos y garantías?",
    answer:
      "Sí. Todos nuestros proyectos están respaldados por un contrato claro y justo. Además, firmamos un documento que confirma que nos entregaste todo lo necesario para iniciar el desarrollo."
  }
];

export default function ServicesClient() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
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
      <FAQ faqs={faqs} />
      <section
        id="cta-contacto"
        className="bg-transparent text-white py-5 text-center"
      >
        <div className="container">
          <h2 className="display-5 fw-bold mb-4">
            ¿Listo para dar el siguiente paso digital?
          </h2>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "720px" }}>
            Es momento de convertir tu idea en una solución tecnológica
            escalable y atractiva. Agenda tu consulta gratuita o contáctanos
            directamente.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <Link href="/contact" className="btn btn-light btn-lg px-4">
              Solicitar una consulta gratuita
            </Link>
            <Link
              href="/services"
              className="btn btn-outline-light btn-lg px-4"
            >
              Ver nuestros paquetes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
