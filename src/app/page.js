import Image from "next/image";
import Link from "next/link";
import iconLogo from "@/assets/img/logo/logo-bg-transparent.webp";
import imgDevWeb from "@/assets/img/img/index/img-services/Desarrollo-web-min.webp";
import imgDevSoft from "@/assets/img/img/index/img-services/desarrollo-software-min.webp";
import imgDevMob from "@/assets/img/img/index/img-services/desarrollo-movil-min.webp";
import imgDevGame from "@/assets/img/img/index/img-services/desarrollo-videojuegos-min.webp";
import ferPhoto from "@/assets/img/img/team/fer-briseño.webp";
//import ricPhoto from "@/assets/img/img/team/ricardo-ubaldo.webp";
import leoPhoto from "@/assets/img/img/team/leonardo-gonzalez.webp";
import jhonPhoto from "@/assets/img/img/team/jhonatan-espinal.webp";
import CardServices from "@/components/CardServices";
import CardTeam from "@/components/CardTeam";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="d-flex flex-md-row flex-column justify-content-xl-start justify-content-center align-items-center w-100 vh-100 p-0 m-0 mt-5 __imageBackground">
        <article className="container justify-content-center align-items-center w-100 gap-5 p-4 m-0" style={{ maxWidth: "46rem"}}>
          <div className="container p-0 m-0">
            <h1 className="display-1 text-light text-shadow">
              JEG Dev Studios
            </h1>
            <p className="fs-1 text-light text-shadow text-brack w-100 w-xl-50">
              No solo creamos páginas web, construimos experiencias digitales.
            </p>
          </div>
          <div className="d-flex flex-column bg-transparent aling-items-center justify-content-start w-100 gap-3">
            <Link
              className="btn text-white gradient-border"
              href="/services"
              style={{ width: "15.3rem" }}
            >
              Ver nuestros servicios
            </Link>
            <Link
              className="btn text-white gradient-border"
              href="/contact"
              style={{ width: "13.4rem" }}
            >
              Solicita una consulta
            </Link>
            <Link
              href="/about"
              className="btn text-white gradient-border"
              style={{ width: "7.8rem" }}
            >
              Nosotros
            </Link>
          </div>
        </article>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center text-center w-100 p-xl-5 p-3 mt-5 __section-team">
        <h2>¿Quiénes somos?</h2>
        <p>
          Nuestro equipo excepcional de desarrolladores, diseñadores y creativos
          trabaja en conjunto para ofrecer soluciones digitales personalizadas
          que se adaptan a las necesidades de cada cliente.
        </p>
        <article className="d-flex justify-content-center align-items-center w-100 p-0 m-0">
          <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-center w-100 h-100 gap-5 p-0 m-0">
            {/*<CardTeam
              imageUrl="https://avatars.githubusercontent.com/u/12345678?v=4"
              name="Ricardo Ubaldo"
              position="Co-Fundador"
              linkedin="https://www.linkedin.com/in/ricardo-ubaldo-gonz%C3%A1lez-4522a5291/"
            />*/}
            <CardTeam
              imageUrl={ferPhoto}
              name="Fernanda Briseño"
              position="Co-Fundador"
              links={[
                {
                  url: "https://www.linkedin.com/in/fernanda-brise%C3%B1o-64b310342/",
                  icon: "icon-linkedin-no-bg",
                  title: "Enlace a perfil de LinkedIn de Fernanda Briseño",
                },
                {
                  url: "https://www.behance.net/karlabriseo1",
                  icon: "icon-behance",
                  title: "Enlace a perfil de Behance de Fernanda Briseño",
                },
              ]}
            />
            <CardTeam
              imageUrl={jhonPhoto}
              name="Jhonatan Espinal"
              position="CEO & Fundador"
              links={[
                {
                  url: "https://www.linkedin.com/in/jhoneg/",
                  icon: "icon-linkedin-no-bg",
                  title: "Enlace a perfil de LinkedIn de Jhonatan Espinal",
                },
                {
                  url: "https://jhoneg-17.github.io/JhonDev/",
                  icon: "icon-link",
                  title: "Enlace a sitio web de Jhonatan Espinal",
                },
              ]}
            />
            <CardTeam
              imageUrl={leoPhoto}
              name="Leonardo Gonzalez"
              position="Co-Fundador"
              links={[
                {
                  url: "https://www.linkedin.com/in/jose-leonardo-gonzalez-valadez-860b012b4/",
                  icon: "icon-linkedin-no-bg",
                  title: "Enlace a perfil de LinkedIn de Leonardo Gonzalez",
                },
              ]}
            />
          </ul>
        </article>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center w-100 p-xl-5 p-3 mt-5">
        <div className="d-flex justify-content-center w-100 p-0 m-0">
          <h2>Sobre lo que hacemos</h2>
        </div>
        <div className="d-flex flex-column text-center justify-content-center w-100 p-0 m-0">
          <h2>Transformamos ideas en experiencias digitales</h2>
          <p>
            En <strong>JEG Dev Studios</strong> convertimos tus ideas en
            proyectos reales. Nuestro equipo desarrolla soluciones digitales
            personalizadas que incluyen{" "}
            <strong>sitios web profesionales</strong>,{" "}
            <strong>aplicaciones móviles</strong>,{" "}
            <strong>software de escritorio</strong> y{" "}
            <strong>videojuegos</strong>.
          </p>

          <p className="w-100">
            En JEG Dev Studios nos encargamos de traer a la realidad tus ideas
            mediante soluciones tecnologicas por eso nos dedicamos al desarrollo
            de sitios web, creacion de aplicaciones moviles y de escritorio
          </p>
        </div>
        <div className="d-flex justify-content-center text-center w-100">
          <h2>consulta mas sobre nuestros servicios aquí</h2>
        </div>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-center w-100 gap-5 p-0 m-0">
          <CardServices
            imageUrl={imgDevWeb}
            title="Desarrollo de sitios web"
            url="/saber-mas/web-dev"
          />
          <CardServices
            imageUrl={imgDevSoft}
            title="Desarrollo de software"
            url="/saber-mas/soft-dev"
          />
          <CardServices
            imageUrl={imgDevMob}
            title="Desarrollo de aplicaciones"
            url="/saber-mas/app-dev"
          />
          <CardServices
            imageUrl={imgDevGame}
            title="Desarrollo de videojuegos"
            url="/saber-mas/games-dev"
          />
        </ul>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center vh-100 text-center w-100 p-xl-5 p-3 mt-5">
        <h2>¿Por qué elegirnos?</h2>
        <ul className="d-flex flex-wrap justify-content-center align-items-center w-100 gap-2 p-0 m-0 list-unstyled">
          <li className="card shadow-sm p-3 text-center">
            <p className="fs-2 m-0">🏆 +5 años de experiencia combinada</p>
          </li>
          <li className="card shadow-sm p-3 text-center">
            <p className="fs-2 m-0">
              💡 Soluciones personalizadas a tu negocio
            </p>
          </li>
          <li className="card shadow-sm p-3 text-center">
            <p className="fs-2 m-0">🤝 Acompañamiento y soporte</p>
          </li>
          <li className="card shadow-sm p-3 text-center">
            <p className="fs-2 m-0">📱 Diseño 100% adaptado a móviles</p>
          </li>
        </ul>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center vh-100 text-center w-100 p-xl-5 p-3 mt-5">
        <h2>¿Tienes un proyecto? Hablemos</h2>
        <p>
          Te ofrecemos una <strong>consulta gratuita</strong> donde analizamos
          tu idea y te damos una guía clara con presupuesto incluido.
        </p>
        <div className="d-flex justify-content-center p-2">
          <Image
            className="img-fluid"
            style={{ width: "16rem" }}
            src={iconLogo}
            alt="logo de la empresa"
            width={256}
            height={256}
            loading="lazy"
          />
        </div>
        <div className="d-flex justify-content-center w-100 pt-2 pb-2">
          <Link className="btn btn-dark" href="/contact">
            Consulta gratuita
          </Link>
        </div>
        <p>Solicita tu consulta gratis ahora</p>
      </section>
    </>
  );
}
