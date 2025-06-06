"use client"
import PropTypes from "prop-types";

function CardProduct({
  idProduct,
  dataPrice,
  title,
  price,
  moneda,
  items = [],
  onAdd,
}) {
  const handleAddToCart = () => {
    onAdd({ idProduct, title, moneda, dataPrice });
  };

  return (
    <li
      itemScope // Indica que este elemento describe un ítem.
      itemType="http://schema.org/Product" // Especifica que el ítem es un Producto.
      id={idProduct}
      className="card d-block bg-transparent border-1 rounded-5 text-white text-start shadow-md p-0 card-services"
      style={{ width: "25.6rem" }}
      data-price={dataPrice}
    >
      {/* Microdatos para el ID del producto (importante para Facebook) */}
      <meta itemProp="productID" content={idProduct} />
      {/* Podrías añadir una imagen si la tuvieras para el producto */}
      {/* <meta itemProp="image" content="URL_DE_LA_IMAGEN_DEL_PRODUCTO" /> */}

      <div className="card-body d-flex flex-column">
        <h3 itemProp="name" className="h2 fw-bolder card-title text-center">{title}</h3>
        {/* Contenedor para la oferta del producto (precio, moneda, disponibilidad) */}
        <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
          <meta itemProp="priceCurrency" content={moneda} />
          <meta itemProp="price" content={dataPrice.toString()} />
          {/* Para servicios, "InStock" o "AvailableForOrder" suelen ser apropiados */}
          <link itemProp="availability" href="http://schema.org/InStock" />

          <div className="d-flex justify-content-evenly align-items-center">
            <p className="text-lit fw-lighter">Desde: </p>
            <p className="h1 fw-bolder">
              <span className="fw-lighter">$</span>
              {price} {/* Este es el precio formateado para mostrar */}
              <span> {moneda}</span>
            </p>
          </div>
        </div>
        <button className="btn-services" onClick={handleAddToCart}>
          <span className="fw-bolder">Cotizar mi proyecto</span>
        </button>
      </div>
      <div className="card-footer d-flex justify-content-center align-items-center">
        {/* Podrías añadir una descripción del producto aquí con itemProp="description" */}
        <ul className="list-group list-group-flush w-100">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="d-flex justify-content-start align-items-center list-group-item bg-transparent text-white w-100"
            >
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
  idProduct: PropTypes.string.isRequired,
  dataPrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  moneda: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default CardProduct;
