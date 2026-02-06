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
			className="flex flex-col bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-3xl text-gray-900 dark:text-white text-left shadow-md p-1 transition-all duration-300"
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
					<h3 itemProp="name" className="text-4xl font-extrabold text-center text-gray-900 dark:text-white">
						{title}
					</h3>
					{description && (
						<p className="text-gray-600 dark:text-white/50 text-center">{description}</p>
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
						<p className="font-light m-0 text-gray-600 dark:text-gray-300">
							{isPriceFixed ? "Precio: " : "Desde: "}
						</p>
						<h4 className="font-bold text-xl text-gray-900 dark:text-white">
							<span className="font-light">$</span>
							{price}
						</h4>
						<p className="m-0 text-gray-600 dark:text-gray-300">
							<span> {moneda}</span>
						</p>
					</div>
				</div>
				<button className="mt-4 w-full rounded-xl bg-blue-600 text-white hover:bg-blue-700 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 border border-transparent dark:border-white/10 font-bold py-3 px-6 transition-all active:scale-95 my-auto" onClick={handleQuoteRequest}>
					<span className="font-bold">{labelBtn}</span>
				</button>

				{/* Podrías añadir una descripción del producto aquí con itemProp="description" */}

				<ul className="list-none p-0 mx-auto w-full mt-4">
					{items.map((item, idx) => (
						<li
							key={idx}
							className={`flex items-center bg-transparent text-gray-700 dark:text-white py-2 ${idx < items.length - 1 ? "border-b border-gray-200 dark:border-white/50" : ""
								}`}
						>
							<span className="material-symbols-outlined text-blue-500 mr-2">check_circle</span>
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
							className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
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
