import Link from "next/link";

interface CardPricingProps {
  title: string;
  price: string | number;
  currency: string;
  description: string;
  features: string[];
  buttonLabel: string;
  buttonLink: string;
}

export default function CardPricing({
  title,
  price,
  currency,
  description,
  features,
  buttonLabel,
  buttonLink,
}: CardPricingProps) {
  return (
    <div className="flex justify-center h-full">
      <div className="h-full flex flex-col bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-3xl p-6 shadow-lg dark:shadow-none transition-all duration-300 hover:border-blue-500/30 w-full max-w-md">
        <div className="flex-grow">
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-5xl font-bold my-4 text-gray-900 dark:text-white">
            ${price}{" "}
            <span className="text-base font-normal text-gray-600 dark:text-gray-300">
              {currency}
            </span>
          </p>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          <ul className="mt-6 space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-blue-500 shrink-0">
                  check_circle
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto pt-6">
          <Link
            href={buttonLink}
            className="w-full rounded-xl bg-blue-600 text-white hover:bg-blue-700 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 border border-transparent dark:border-white/10 font-bold py-3 px-6 transition-all active:scale-95 block text-center"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}