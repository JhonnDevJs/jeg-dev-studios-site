"use client";
import Image from "next/image";
import Link from "next/link";

interface ProductSectionProps {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  imageSrc?: string;
  isReversed?: boolean; // To alternate text/image positions
  onAction: () => void;
  actionLabel: string;
  isPriceFixed?: boolean;
  isRecommended?: boolean; // For "Pack" highlighting
  urlInfo?: string;
}

export default function ProductSection({
  id,
  title,
  description,
  price,
  currency,
  features,
  imageSrc,
  isReversed = false,
  onAction,
  actionLabel,
  isPriceFixed = false,
  isRecommended = false,
  urlInfo,
}: ProductSectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full py-16 md:py-24 px-4 ${
        isRecommended
          ? "bg-gray-50 dark:bg-white/5"
          : "bg-white dark:bg-zinc-900"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`flex flex-col gap-12 lg:gap-20 items-center ${
            isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Image / Visual Column */}
          <div className="w-full lg:w-1/2">
            {imageSrc ? (
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ${
                  isRecommended
                    ? "shadow-blue-900/10"
                    : "shadow-gray-200 dark:shadow-none"
                }`}
              >
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="aspect-video w-full bg-gray-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">No Image Available</span>
              </div>
            )}
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              {isRecommended && (
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                  Recomendado
                </span>
              )}
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {title}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Price Block */}
            <div className="flex items-baseline gap-2 pb-6 border-b border-gray-200 dark:border-white/10">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                {isPriceFixed ? "Inversión:" : "Desde:"}
              </span>
              <span className="text-5xl font-bold text-gray-900 dark:text-white">
                ${price.toLocaleString()}
              </span>
              <span className="text-xl font-medium text-gray-500">
                {currency}
              </span>
            </div>

            {/* Features List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onAction}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
              >
                {actionLabel}
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              {urlInfo && (
                <Link
                  href={urlInfo}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-xl transition-colors"
                >
                  Más información
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
