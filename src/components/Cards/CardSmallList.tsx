// 1. Definimos la interfaz de las props con TypeScript
interface CardSmallListProps {
  titulo: string;
  subtitulo: string;
  list: string[];
  lastText?: string; // La hacemos opcional
}

export default function CardSmallList({
  titulo,
  subtitulo,
  list,
  lastText,
}: CardSmallListProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none mb-8">
      <div className="flex gap-6 md:gap-8">
        {/* Línea vertical con gradiente */}
        <div className="flex flex-col items-center shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30 z-10">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L12 11L18 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 13L12 18L18 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-1 flex-grow bg-gradient-to-b from-blue-600 to-cyan-500/10 rounded-b-full mt-[-4px] pt-4"></div>
        </div>

        <div className="flex-grow pt-1 pb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {titulo}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {subtitulo}
          </p>

          <ul className="space-y-4">
            {list.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mt-1 shrink-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {lastText && (
        <div className="pl-14 md:pl-20 mt-2">
          <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
            {lastText}
          </p>
        </div>
      )}
    </div>
  );
}
