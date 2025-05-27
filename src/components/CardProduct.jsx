import PropTypes from "prop-types";
import Image from "next/image";

function CardProduct({
  dataPrice,
  title,
  text,
  price,
  moneda,
  imageUrl,
  onAdd,
}) {
  const handleAddToCart = () => {
    onAdd({ title, moneda, dataPrice });
  };

  return (
    <div className="card d-block w-100" data-price={dataPrice}>
      <div style={{ width: "100%", aspectRatio: "16 / 9", overflow: "hidden" }}>
        <Image
          src={imageUrl}
          className="card-img-top"
          alt={title}
          loading="lazy"
          width={1080}
          height={607}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text">{text}</p>
        <div className="d-flex flex-column">
          <p className="card-text">
            {price}
            <span> {moneda}</span>
          </p>
          <button className="btn btn-dark" onClick={handleAddToCart}>
            Añadir +
          </button>
        </div>
      </div>
    </div>
  );
}

// Validación de props
CardProduct.propTypes = {
  dataPrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  moneda: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default CardProduct;
