import Link from "next/link";

interface CardServicesProps {
  title: string;
  description: string;
  url: string;
  buttonLabel: string;
  items: string[];
}

function CardServices({
  title,
  description,
  buttonLabel,
  url,
  items,
}: CardServicesProps) {
  return (
    <Link
      href={url}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 w-full max-w-[24rem] h-full"
    >
      <div className="relative z-10 flex flex-col flex-grow p-8 gap-6">
        {/* Header */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          {/* Solid blue line instead of gradient */}
          <div className="h-1 w-12 mx-auto bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          <p className="text-base text-center text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 dark:bg-white/10"></div>

        {/* List */}
        <ul className="flex-grow space-y-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm font-medium group/item"
            >
              <span className="flex items-center justify-center shrink-0 mt-0.5 text-blue-600 dark:text-blue-400">
                <svg
                  width="18"
                  height="18"
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
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>

        {/* Auto-width Button */}
        <div className="mt-auto pt-4">
          <span className="flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 text-white font-bold py-3.5 px-6 hover:bg-blue-700 transition-colors duration-300">
            {buttonLabel}
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CardServices;
