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
  onQuote: (details: {
    idProduct: string;
    title: string;
    moneda: string;
    dataPrice: number;
  }) => void;
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
  imageUrl,
  description,
  isPriceFixed = false,
  labelBtn = "Cotizar mi proyecto",
  urlInfo,
  buttonLabelInfo,
}: CardPacksProductProps) {
  const handleQuoteRequest = () => {
    onQuote({ idProduct, title, moneda, dataPrice });
  };

  const descriptionText = items.join(". ") + ".";

  return (
    <div
      itemScope
      itemType="http://schema.org/Product"
      id={idProduct}
      className="relative flex flex-col w-full max-w-[22rem] bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-300 group h-full"
      data-price={dataPrice}
    >
      <meta itemProp="productID" content={idProduct} />
      {imageUrl && <link itemProp="image" href={imageUrl} />}
      {descriptionText && (
        <meta itemProp="description" content={descriptionText} />
      )}

      {/* Premium Badge */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500"></div>

      <div className="flex flex-col p-8 gap-6 h-full">
        <div className="text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            Paquete Recomendado
          </div>
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
        <div className="flex flex-col items-center justify-center py-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">
            {isPriceFixed ? "Inversión única" : "Desde"}
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
            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight">
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
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
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
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3.5 px-6 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn"
            onClick={handleQuoteRequest}
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

export default CardPacksProduct;
