"use client";
import Link from "next/link";
import ButtonsSocial from "@/components/ButtonsSocial";

export default function AboutClient() {
  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center w-100 p-xl-5 p-3 mt-5">
        <h2 className="h1 text-white text-center">Sobre Nosotros</h2>
        <p className="text-white text-center">
          Transformamos ideas en soluciones digitales innovadoras y memorables
        </p>
      </section>

      <section className="d-flex flex-column w-100 p-xl-5 p-3">
        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Nuestra Historia</h2>
          <p className="text-white">
            JEG Dev Studios fue fundada en mayo de 2024 por Jhonatan Espinal
            García, quien más adelante se unió con Jose Leonardo González,
            Fernanda Briseño y Ricardo Ubaldo González como cofundadores.
            Nuestro objetivo es transformar ideas en experiencias digitales
            inolvidables a través de soluciones tecnológicas personalizadas. Nos
            encontramos en una etapa de crecimiento continuo, con el firme
            propósito de convertirnos en un referente en el desarrollo web,
            aplicaciones móviles y software empresarial.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Misión y Visión</h2>
          <p className="text-white">
            <strong>Misión:</strong> Crear soluciones digitales que superen las
            expectativas de nuestros clientes mediante innovación, calidad y un
            enfoque centrado en la experiencia de usuario.
          </p>
          <p className="text-white">
            <strong>Visión:</strong> Ser líderes en desarrollo digital a medida,
            ayudando a marcas y empresas a destacar en un mundo cada vez más
            conectado.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Nuestra Ideología</h2>
          <p className="text-white">
            <strong>JEG:</strong> Jumpstart Every Goal - Impulsa cada objetivo
          </p>
          <p className="text-white">
            Nuestro lema define nuestra esencia: trabajamos para activar e
            impulsar cada meta de nuestros clientes, utilizando la creatividad y
            tecnología de vanguardia. Desde herramientas empresariales hasta
            soluciones móviles personalizadas, convertimos ideas en realidades
            digitales.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Nuestros Valores</h2>
          <ul>
            <li className="text-white">
              <strong>Innovación:</strong> Nos mantenemos a la vanguardia
              tecnológica para ofrecer soluciones frescas, efectivas y
              sostenibles.
            </li>
            <li className="text-white">
              <strong>Calidad:</strong> Garantizamos un alto estándar en cada
              entrega, cuidando los detalles técnicos y visuales.
            </li>
            <li className="text-white">
              <strong>Compromiso:</strong> Cumplimos con lo prometido,
              trabajando de la mano con nuestros clientes en cada etapa del
              desarrollo.
            </li>
            <li className="text-white">
              <strong>Creatividad:</strong> Creamos soluciones únicas,
              personalizadas y funcionales que generan impacto.
            </li>
          </ul>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Nuestro Equipo</h2>
          <p className="text-white">
            En JEG Dev Studios contamos con un equipo multidisciplinario de
            expertos en desarrollo y diseño digital. Nuestra diversidad de
            talentos nos permite abordar cada proyecto desde diferentes
            perspectivas y lograr resultados sobresalientes.
          </p>
          <p className="text-white">
            <strong>Jhonatan Espinal García</strong> – Fundador, CEO y
            Desarrollador
            <br />
            Dirige el estudio con visión estratégica y pasión por la innovación
            digital.
          </p>
          <p className="text-white">
            <strong>Jose Leonardo González</strong> – Cofundador y Desarrollador
            Backend
            <br />
            Responsable de arquitecturas sólidas y eficientes.
          </p>
          <p className="text-white">
            <strong>Fernanda Briseño</strong> – Cofundadora y Diseñadora UX/UI
            <br />
            Líder en la creación de interfaces visuales atractivas y usables.
          </p>
          <p className="text-white">
            <strong>Ricardo Ubaldo González</strong> – Cofundador y
            Desarrollador Frontend
            <br />
            Especialista en desarrollo de interfaces modernas, SEO y rendimiento
            web.
          </p>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Nuestros Servicios</h2>
          <ul>
            <li className="text-white">
              <strong>Desarrollo Web:</strong> Creación de sitios web
              responsivos, seguros y optimizados para motores de búsqueda.
            </li>
            <li className="text-white">
              <strong>Aplicaciones de Escritorio:</strong> Soluciones a medida
              para automatizar procesos empresariales y mejorar la
              productividad.
            </li>
            <li className="text-white">
              <strong>Aplicaciones Móviles:</strong> Apps funcionales y
              atractivas para Android e iOS, diseñadas para usuarios exigentes.
            </li>
            <li className="text-white">
              <strong>Software Empresarial a Medida:</strong> Desarrollo de CRM,
              sistemas de inventario, herramientas de gestión de personal y
              soluciones personalizadas.
            </li>
          </ul>
        </article>

        <article className="d-flex flex-column w-100 p-0 m-0">
          <h2 className="text-white">Contáctanos</h2>
          <p className="text-white">
            ¿Estás listo para digitalizar tu negocio o lanzar tu proyecto con
            éxito? Hablemos y encuentra la solución ideal con nosotros.
          </p>
          <Link
            href="tel:+525512197135"
            className="text-decoration-none text-white fs-5"
            target="_blank"
            rel="noopener noreferrer"
            title="Llámanos"
            aria-label="Llámanos"
            tabIndex={0}
          >
            +52 55 1219 7135
          </Link>
          <Link
            href="mailto:jegdevstudioscontact@gmail.com"
            className="text-decoration-none text-white fs-5"
            target="_blank"
            rel="noopener noreferrer"
            title="Envíanos un correo"
            aria-label="Envíanos un correo"
            tabIndex={0}
          >
            jegdevstudioscontact@gmail.com
          </Link>
          <p className="text-white">
            Síguenos en nuestras redes sociales y conoce nuestros últimos
            trabajos, ideas y lanzamientos.
          </p>
        </article>
      </section>

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
            <Link href="/contacto" className="btn btn-light btn-lg px-4">
              Solicitar una consulta gratuita
            </Link>
            <Link
              href="/servicios"
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
