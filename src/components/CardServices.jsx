import Image from "next/image";
import PropTypes from "prop-types";

function CardServices({ imageUrl, title, url }) {
  return (
    <li className="card d-block p-0" style={{ width: "18rem" }}>
      <div style={{ width: "100%", aspectRatio: "1 / 1", overflow: "hidden" }}>
        <Image
          src={imageUrl}
          className="card-img-top"
          alt="imagen de la tarjeta"
          loading="lazy"
          width={1024}
          height={1024}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="card-body d-flex flex-column ">
        <h3 className="h5 card-title text-center">{title}</h3>
        <a href={url} className="btn btn-dark">
          ver más
        </a>
      </div>
    </li>
  );
}

CardServices.propTypes = {
  imageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CardServices;
