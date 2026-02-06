type CardNestedListsProps = {
  titulo: string;
  subtitulo: string;
  list: {
    text: string;
    sublist: string[];
  }[];
  lastText?: string;
};

export default function CardNestedLists({ titulo, subtitulo, list, lastText }: CardNestedListsProps) {
  return (
    <div
      className="w-11/12 p-1 md:p-2 mb-5 bg-white dark:bg-zinc-800/15 rounded-[18px] border border-gray-200 dark:border-none shadow-[0_4px_32px_0_rgba(0,0,0,0.15)] backdrop-blur-md"
    >
      <div className="flex p-2 md:p-4 items-stretch">
        {/* Línea y círculo con flecha */}
        <div
          className="relative flex flex-col items-center mr-4"
          style={{ width: "32px" }}
        >
          {/* Círculo donde va la flecha */}
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "linear-gradient(to right, #da24bb 30%, #090edb 70%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0px",
              zIndex: 2,
            }}
          >
            {/* Flechas dobles hacia abajo SVG */}
            <svg
              width="24"
              height="24"
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
            style={{
              width: "4px",
              background: "linear-gradient(to bottom, #da24bb, #090edb)",
              flexGrow: 1,
              marginTop: "0px",
              borderRadius: "2px",
              minHeight: `${list.length * 48}px`,
              zIndex: 1,
            }}
          ></div>
        </div>
        <div className="flex-grow flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{titulo}</h2>
          <h3 className="text-xl m-auto mb-2 mt-3 text-start text-gray-700 dark:text-white w-full">
            {subtitulo}
          </h3>
          <ul
            className="pl-1 mt-3 m-auto mb-2 w-full"
            style={{ listStyle: "none", margin: 0 }}
          >
            {list.map((item, idx) => (
              <li
                className="flex flex-col items-start mb-4 text-gray-600 dark:text-white"
                key={idx}
              >
                <div className="flex items-start text-start">
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "linear-gradient(to right, #da24bb, #090edb)",
                      color: "#fff",
                      marginRight: "12px",
                      flexShrink: 0,
                      marginTop: "4px"
                    }}
                  >
                    {/* Palomita SVG */}
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M6.00039 11.1998L2.80039 7.9998L1.86606 8.93314L6.00039 13.0665L15.0004 4.06647L14.0671 3.13314L6.00039 11.1998Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <h4 className="font-bold text-lg m-0">{item.text}</h4>
                </div>
                <ul
                  style={{
                    listStyle: "disc",
                    marginLeft: "3rem",
                    textAlign: "left",
                  }}
                >
                  {item.sublist.map((sub, subIdx) => (
                    <li
                      key={subIdx}
                      style={{ marginBottom: "0.5rem" }}
                      className="text-gray-600 dark:text-white"
                    >
                      <p className="text-left m-0">{sub}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {lastText && (
        <p className="pl-4 text-left text-gray-600 dark:text-white text-xl">{lastText}</p>
      )}
    </div>
  );
}
