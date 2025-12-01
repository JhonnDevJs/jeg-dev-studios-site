
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
      className="w-11/12 p-1 md:p-2 mb-5"
      style={{
        background: "rgba(33, 37, 41, 0.15)", // Tailwind: bg-gray-800 bg-opacity-15 (aproximado)
        borderRadius: "18px",
        border: "none",
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.15)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="flex p-2 md:p-4" style={{ alignItems: "stretch" }}>
        {/* Línea y círculo con flecha */}
        <div
          className="vertical-bar-arrow"
          style={{
            position: "relative",
            width: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: "16px",
          }}
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
        <div className="flex-grow-1 d-flex flex-column justify-content-center">
          <h2 className="card-title text-white">{titulo}</h2>
          <h3 className="card-subtitle m-auto mb-2 mt-3 text-start text-white">
            {subtitulo}
          </h3>
          <ul
            className="ps-1 mt-3 m-auto mb-2 col-12"
            style={{ listStyle: "none", margin: 0 }}
          >
            {list.map((item, idx) => (
              <li
                className="flex flex-col items-start mb-4 text-white"
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
                  <h4>{item.text}</h4>
                </div>
                <ul
                  style={{
                    listStyle: "disc",
                    color: "#fff",
                    marginLeft: "3rem",
                    textAlign: "left",
                  }}
                >
                  {item.sublist.map((sub, subIdx) => (
                    <li
                      key={subIdx}
                      style={{ color: "#fff", marginBottom: "0.5rem" }}
                    >
                      <p className="text-left">{sub}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {lastText && (
        <p className="pl-4 text-left text-white text-xl">{lastText}</p>
      )}
    </div>
  );
}
