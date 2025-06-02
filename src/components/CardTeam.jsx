import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

function CardTeam({ imageUrl, name, position, description, links }) {
  return (
    <div
      // Se eliminó el style={{ width: "77.5rem" }} para permitir que la tarjeta sea responsiva dentro del carrusel.
      className="card d-block bg-black border-1 rounded-5 text-white text-start shadow-md p-3 card-services w-100" // Añadido w-100 para ocupar el ancho del contenedor del carrusel
    >
      <div className="d-flex justify-content-start align-items-center">
        <Image
          src={imageUrl}
          className="card-img-top img-fluid rounded-circle"
          alt={`Foto de ${name}`}
          loading="lazy"
          width={44}
          height={44}
          style={{ width: "2.75rem", height: "2.75rem", objectFit: "cover" }}
        />
        <div className="card-body pb-1">
          <div className="d-flex justify-content-between text-white align-items-center">
            <h3 className="card-title">{name}</h3>
            <div className="d-flex gap-2">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                  title={link.title}
                  aria-label={link.title}
                  className={`link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ${link.icon} fs-3 __icons-color`}
                ></Link>
              ))}
            </div>
          </div>
          <p className="text-light fst-italic m-0">{position}</p>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

CardTeam.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardTeam;
