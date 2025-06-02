import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";

function CardServices({ title, description, url, items = [] }) {
  return (
    <li
      className="card d-block bg-transparent border-1 rounded-5 text-white text-start shadow-md p-0 card-services"
      style={{ width: "25.6rem"}}
    >
      <div className="card-body d-flex flex-column">
        <h3 className="h2 fw-bolder card-title text-start">{title}</h3>
        <p className="fs-5 text-start">{description}</p>
        <Link href={url} className="btn gradient-border">
          <span className="fw-bolder">ver paquetes completos</span>
        </Link>
      </div>
      <div className="card-footer d-flex justify-content-center align-items-center">
        <ul className="list-group list-group-flush w-100">
          {items.map((item, idx) => (
            <li key={idx} className="d-flex justify-content-start align-items-center list-group-item bg-transparent text-white w-100">
              <p className="fs-5 m-0">
                <span className="icon-check-list fs-5 me-2"></span>
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

CardServices.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
};

export default CardServices;
