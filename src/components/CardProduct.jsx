"use client"
import PropTypes from "prop-types";

function CardProduct({
  dataPrice,
  title,
  price,
  moneda,
  items = [],
  onAdd,
}) {
  const handleAddToCart = () => {
    onAdd({ title, moneda, dataPrice });
  };

  return (
    <li
      className="card d-block bg-transparent border-1 rounded-5 text-white text-start shadow-md p-0 card-services"
      style={{ width: "25.6rem"}}
      data-price={dataPrice}
    >
      <div className="card-body d-flex flex-column">
        <h3 className="h2 fw-bolder card-title text-center">{title}</h3>
        <div className="d-flex justify-content-evenly align-items-center">
          <p className="text-lit fw-lighter">Desde: </p>
          <p className="h1 fw-bolder">
            <span className="fw-lighter">$</span>
            {price}
            <span> {moneda}</span>
          </p>
        </div>
        <button className="btn-services" onClick={handleAddToCart}>
          <span className="fw-bolder">Cotizar mi proyecto</span>
        </button>
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

// Validación de props
CardProduct.propTypes = {
  dataPrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  moneda: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default CardProduct;
