import CardTeam from "@/components/CardTeam";
import ferPhoto from "@/assets/img/img/team/fer-briseño.webp";
import leoPhoto from "@/assets/img/img/team/leonardo-gonzalez.webp";
import jhonPhoto from "@/assets/img/img/team/jhonatan-espinal.webp";
import Richi from "@/assets/img/img/team/ricardo.webp";

export default function TeamCarousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div
        className="carousel-inner"
        style={{ maxWidth: "77.5rem", minHeight: "14.25rem" }}
      >
        <div className="carousel-item active">
          <CardTeam
            imageUrl={jhonPhoto}
            name="Jhonatan Espinal"
            position="CEO Fundador y Desarrollador"
            description="Soy Jhonatan Espinal García, desde niño me apasiona la tecnología, desde los microcircuitos hasta la programación. En 2024 fundé JEG Dev Studios, donde creamos soluciones digitales innovadoras como apps, sitios web y videojuegos."
            links={[
              {
                url: "https://linkedin.com/in/jhonneg",
                title: "LinkedIn",
                icon: "icon-linkedin-no-bg",
              },
              {
                url: "https://github.com/jhonatanespinal",
                title: "GitHub",
                icon: "icon-github",
              },
              {
                url: "https://jhoneg-17.github.io/JhonDev/",
                title: "Portafolio web de Jhonatan",
                icon: "icon-link",
              },
            ]}
          />
        </div>
        <div className="carousel-item">
          <CardTeam
            imageUrl={ferPhoto}
            name="Fernando Briseño"
            position="Diseñadora web y Co-Fundadora"
            description="Soy Fernanda Briseño, Diseñadora UX/UI. Mejoro mis habilidades en experiencia de usuario e interfaces, creando diseños funcionales gracias a mi conocimiento en desarrollo web."
            links={[
              {
                url: "https://www.linkedin.com/in/fernanda-brise%C3%B1o-64b310342/",
                title: "LinkedIn de Fernanda",
                icon: "icon-linkedin-no-bg",
              },
              {
                url: "https://www.behance.net/karlabriseo1",
                title: "Behance de Fernanda",
                icon: "icon-behance",
              },
            ]}
          />
        </div>
        <div className="carousel-item">
          <CardTeam
            imageUrl={leoPhoto}
            name="Leonardo González"
            position="Co-Fundador y Desarrollador."
            description="Soy un programador versátil con conocimientos en diversos lenguajes de programación. Me especializo en el desarrollo frontend, creando interfaces de usuario atractivas y funcionales. Mi pasión por la tecnología me impulsa a seguir aprendiendo y mejorando constantemente. Me estaco por mi gran capacidad de realizar analisis para la resolución efectiva de los problemas."
            links={[
              {
                url: "https://www.linkedin.com/in/jose-leonardo-gonzalez-valadez-860b012b4/",
                title: "LinkedIn",
                icon: "icon-linkedin-no-bg",
              }
            ]}
          />
        </div>
        <div className="carousel-item">
          <CardTeam
            imageUrl={Richi}
            name="Ricardo Ubaldo"
            position="Co-Fundador y Desarrollador."
            description="Con una alta experiencia en SEO y su calidad en el desarrollo Frontend de cada proyecto realiza y garantiza una excelente optimización y posicionamiento de los proyectos."
            links={[
              {
                url: "https://www.linkedin.com/in/ricardo-ubaldo-gonz%C3%A1lez-4522a5291/",
                title: "LinkedIn",
                icon: "icon-linkedin-no-bg",
              }
            ]}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        style={{ left: "-4rem", width: "4rem" }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        style={{ right: "-4rem", width: "4rem" }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}