// 1. Definimos la interfaz de las props con TypeScript
interface CardSmallListProps {
  titulo: string;
  subtitulo: string;
  list: string[];
  lastText?: string; // La hacemos opcional
}

function CardSmallList({ titulo, subtitulo, list, lastText }: CardSmallListProps) {
  return (
    <div
      // 1. Contenedor principal con clases de Tailwind
      className="w-11/12 p-2 mb-5 bg-white dark:bg-zinc-800/15 rounded-2xl border border-gray-200 dark:border-none shadow-[0_4px_32px_0_rgba(0,0,0,0.15)] backdrop-blur"
    >
      <div className="flex p-4 items-stretch">
        {/* Línea y círculo con flecha */}
        <div
          // 2. Barra lateral decorativa
          className="relative w-[30px] flex flex-col items-center mr-4"
        >
          {/* Círculo donde va la flecha */}
          <div
            className="w-8 h-8 rounded-full bg-gradient-to-r from-[#da24bb] to-[#090edb] flex items-center justify-center z-1"
          >
            {/* Flechas dobles hacia abajo SVG */}
            <svg
              className="w-6 h-6"
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
          {/* Barra vertical */}
          <div
            className="w-1 bg-gradient-to-b from-[#da24bb] to-[#090edb] grow rounded-sm"
            style={{ minHeight: `${list.length * 48}px` }} // Se mantiene el estilo dinámico
          ></div>
        </div>

        <div className="grow flex flex-col justify-center text-left">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{titulo}</h2>
          <h3 className="text-xl m-auto mb-2 mt-3 text-left text-gray-700 dark:text-white w-full">
            {subtitulo}
          </h3>
          <ul
            className="pl-1 mt-3 m-auto mb-2 w-full"
            style={{ listStyle: "none", margin: 0 }}
          >
            {list.map((item, idx) => (
              <li
                // 3. Elementos de la lista
                className="flex items-start mb-4 text-gray-600 dark:text-white text-left"
                key={idx}
              >
                <span
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#da24bb] to-[#090edb] text-white mr-3 shrink-0 mt-1"
                >
                  {/* Palomita SVG */}
                  <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6.00039 11.1998L2.80039 7.9998L1.86606 8.93314L6.00039 13.0665L15.0004 4.06647L14.0671 3.13314L6.00039 11.1998Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p className="m-0">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {lastText && (
        <p className="pl-4 text-left text-gray-600 dark:text-white text-xl">{lastText}</p> // Se mantiene igual, ya usa clases de Tailwind
      )}
    </div>
  );
}

export default CardSmallList;
