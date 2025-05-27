import PropTypes from "prop-types";
import Image from "next/image";

function CardTeam({ imageUrl, name, functions, position, links }) {
  return (
    <li className="card d-block border-0 p-0" style={{ width: "18rem" }}>
      <div style={{ width: "15rem", height: "15rem", margin: "0 auto" }}>
        <Image
          src={imageUrl}
          className="card-img-top img-fluid rounded-circle"
          alt={`Foto de ${name}`}
          loading="lazy"
          width={240}
          height={240}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="card-body pb-1">
        <h3 className="card-title">{name}</h3>
        <p className="card-text fw-light m-0">{functions}</p>
        <p className="card-text fw-light">{position}</p>
      </div>
      <div className="card-footer d-flex justify-content-center align-items-center bg-transparent text-center pt-0 gap-2">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            title={link.title}
            aria-label={link.title}
            className={`link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ${link.icon} fs-3`}
            style={{ width: "auto", color: "#000" }}
          >
            {/* Si tienes un ícono SVG o imagen, puedes insertarlo aquí */}
          </a>
        ))}
      </div>
    </li>
  );
}

CardTeam.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  functions: PropTypes.string,
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
