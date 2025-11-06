"use client";
import PropTypes from "prop-types";

function CardPacksProduct({
	idProduct,
	dataPrice,
	title,
	price,
	moneda,
	items = [],
	onQuote,
	imageUrl, // Nuevo prop para la URL de la imagen del producto
	description, // Prop para la descripción corta
	isPriceFixed = false, // Prop para definir si el precio es fijo
	labelBtn = "Cotizar mi proyecto", // Prop para el texto del botón
}) {
	const handleQuoteRequest = () => {
		onQuote({ idProduct, title, moneda, dataPrice });
	};

	// Generar una descripción a partir de la lista de items (características)
	const descriptionText = items.join(". ") + ".";

	return (
		<li
			itemScope // Indica que este elemento describe un ítem.
			itemType="http://schema.org/Product" // Especifica que el ítem es un Producto.
			id={idProduct}
			className="card d-block bg-transparent border rounded-5 text-white text-start shadow-md p-0 card-services"
			style={{ width: "22rem" }}
			data-price={dataPrice}
		>
			{/* Microdatos para el ID del producto (importante para Facebook) */}
			<meta itemProp="productID" content={idProduct} />
			{imageUrl && <link itemProp="image" href={imageUrl} />}
			{descriptionText && (
				<meta itemProp="description" content={descriptionText} />
			)}

			<div className="card-body d-flex flex-column">
				<h3 itemProp="name" className="fw-bolder card-title text-center">
					{title}
				</h3>
				{description && (
					<p className="card-text text-white-50 text-center">{description}</p>
				)}
				{/* Contenedor para la oferta del producto (precio, moneda, disponibilidad) */}
				<div itemProp="offers" itemScope itemType="http://schema.org/Offer">
					<meta itemProp="priceCurrency" content={moneda} />
					<meta itemProp="price" content={dataPrice.toString()} />
					{/* Para servicios, "InStock" o "AvailableForOrder" suelen ser apropiados */}
					<link itemProp="availability" href="http://schema.org/InStock" />

					<div className="d-flex justify-content-evenly align-items-center">
						<p className="text-lit fw-lighter m-0">
							{isPriceFixed ? "Precio: " : "Desde: "}
						</p>
						<h4 className="fw-bolder">
							<span className="fw-lighter">$</span>
							{price}
						</h4>
						<p className="m-0">
							<span> {moneda}</span>
						</p>
					</div>
				</div>
				<button className="btn-services" onClick={handleQuoteRequest}>
					<span className="fw-bolder">{labelBtn}</span>
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
							<span className="icon-check-list fs-6 me-2"></span>
							<p className="fs-6 m-0">{item}</p>
						</li>
					))}
				</ul>
			</div>
		</li>
	);
}

// Validación de props
CardPacksProduct.propTypes = {
	idProduct: PropTypes.string.isRequired,
	dataPrice: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	moneda: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.string).isRequired, // Mantener si es correcto
	onQuote: PropTypes.func.isRequired, // Cambiado de onAdd a onQuote
	imageUrl: PropTypes.string, // Es opcional, pero Google lo marca como crítico si falta
	description: PropTypes.string,
	isPriceFixed: PropTypes.bool,
	labelBtn: PropTypes.string,
};

export default CardPacksProduct;
