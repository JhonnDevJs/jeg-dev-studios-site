"use client";
import Link from "next/link";

// 1. Definimos la interfaz de las props con TypeScript
interface CardPacksProductProps {
	idProduct: string;
	dataPrice: number;
	title: string;
	price: number; // Cambiado a number para consistencia
	moneda: string;
	items?: string[];
	onQuote: (details: { idProduct: string; title: string; moneda: string; dataPrice: number }) => void;
	imageUrl?: string;
	description?: string;
	isPriceFixed?: boolean;
	labelBtn?: string;
	urlInfo?: string;
	buttonLabelInfo?: string;
}

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
	urlInfo,
	buttonLabelInfo,
}: CardPacksProductProps) {
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
			className="block bg-transparent border rounded-3xl text-white text-left shadow-md p-0 card-services"
			style={{ width: "22rem" }}
			data-price={dataPrice}
		>
			{/* Microdatos para el ID del producto (importante para Facebook) */}
			<meta itemProp="productID" content={idProduct} />
			{imageUrl && <link itemProp="image" href={imageUrl} />}
			{descriptionText && (
				<meta itemProp="description" content={descriptionText} />
			)}

			<div className="flex flex-col justify-evenly flex-grow p-4">
				<h3 itemProp="name" className="text-4xl font-extrabold text-center">
					{title}
				</h3>
				{description && (
					<p className="text-white/50 text-center">{description}</p>
				)}
			</div>
			<div className="flex flex-col p-4">
				{/* Contenedor para la oferta del producto (precio, moneda, disponibilidad) */}
				<div itemProp="offers" itemScope itemType="http://schema.org/Offer">
					<meta itemProp="priceCurrency" content={moneda} />
					<meta itemProp="price" content={dataPrice.toString()} />
					{/* Para servicios, "InStock" o "AvailableForOrder" suelen ser apropiados */}
					<link itemProp="availability" href="http://schema.org/InStock" />

					<div className="flex justify-evenly items-center">
						<p className="font-light m-0">
							{isPriceFixed ? "Precio: " : "Desde: "}
						</p>
						<h4 className="font-bold text-xl">
							<span className="font-light">$</span>
							{price}
						</h4>
						<p className="m-0">
							<span> {moneda}</span>
						</p>
					</div>
				</div>
				<button className="btn-services my-auto" onClick={handleQuoteRequest}>
					<span className="font-bold">{labelBtn}</span>
				</button>

				{/* Podrías añadir una descripción del producto aquí con itemProp="description" */}

				<ul className="list-none p-0 mx-auto w-full">
					{items.map((item, idx) => (
						<li
							key={idx}
							className={`flex items-center bg-transparent text-white py-2 ${idx < items.length - 1 ? "border-b border-white/50" : ""
								}`}
						>
							<span className="icon-check-list text-xl mr-2"></span>
							<p className="flex-1 text-xl m-0">{item}</p>
						</li>
					))}
				</ul>
			</div>

			<div className="flex flex-col justify-center items-center p-4">
				<div className="flex justify-center items-end mt-auto pt-3">
					{urlInfo && buttonLabelInfo && (
						<Link
							href={urlInfo}
							className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
							role="button"
							aria-label={buttonLabelInfo}
							title={buttonLabelInfo}
							target="_blank"
							tabIndex={0}
						>
							Saber más
						</Link>
					)}
				</div>
			</div>
		</li>
	);
}

export default CardPacksProduct;
