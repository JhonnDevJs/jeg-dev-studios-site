"use client";
import Link from "next/link";

// 1. Definimos la interfaz de las props con TypeScript
interface CardProductProps {
  idProduct: string;
  dataPrice: number;
  title: string;
  price: number; // Cambiado a number para consistencia
  moneda: string;
  items?: string[];
  onAdd: (details: {
    idProduct: string;
    title: string;
    moneda: string;
    dataPrice: number;
    urlInfo?: string;
    buttonLabelInfo?: string;
  }) => void;
  imageUrl?: string;
  description?: string;
  isPriceFixed?: boolean;
  labelBtn?: string;
  urlInfo?: string;
  buttonLabelInfo?: string;
}

function CardProduct({
  idProduct,
  dataPrice,
  title,
  price,
  moneda,
  items = [],
  onAdd,
  imageUrl,
  description,
  isPriceFixed = false,
  labelBtn = "Contratar servicio",
  urlInfo,
  buttonLabelInfo,
}: CardProductProps) {
  const handleAddToCart = () => {
    onAdd({ idProduct, title, moneda, dataPrice, urlInfo, buttonLabelInfo });
  };

  const descriptionText = items.join(". ") + ".";

  return (
    <div
      itemScope
      itemType="http://schema.org/Product"
      id={idProduct}
      className="relative flex flex-col w-full max-w-[22rem] bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 group h-full"
      data-price={dataPrice}
    >
      <meta itemProp="productID" content={idProduct} />
      {imageUrl && <meta itemProp="image" content={imageUrl} />}
      {descriptionText && (
        <meta itemProp="description" content={descriptionText} />
      )}

      <div className="flex flex-col p-8 gap-6 h-full">
        <div className="text-center space-y-4">
          <h3
            itemProp="name"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 min-h-[3rem]">
              {description}
            </p>
          )}
        </div>

        {/* Price Section */}
        <div className="flex flex-col items-center justify-center py-4 border-t border-b border-gray-100 dark:border-white/5">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
            {isPriceFixed ? "Precio Único" : "Desde"}
          </p>
          <div
            className="flex items-baseline gap-1"
            itemProp="offers"
            itemScope
            itemType="http://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content={moneda} />
            <meta itemProp="price" content={dataPrice.toString()} />
            <link itemProp="availability" href="http://schema.org/InStock" />

            <span className="text-lg text-gray-500 font-medium">$</span>
            <span className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              {price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 font-medium">{moneda}</span>
          </div>
        </div>

        <ul className="flex-1 space-y-4 my-2">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 shrink-0 mt-0.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-4 pt-4">
          <button
            className="w-full rounded-xl bg-blue-600 text-white font-bold py-3.5 px-6 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn"
            onClick={handleAddToCart}
          >
            <span>{labelBtn}</span>
            <svg
              className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          {urlInfo && buttonLabelInfo && (
            <Link
              href={urlInfo}
              className="block text-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              aria-label={buttonLabelInfo}
            >
              Más información
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
