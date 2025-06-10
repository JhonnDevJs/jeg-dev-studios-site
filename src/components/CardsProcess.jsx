import React from "react";

function CardsProcess({ number, titulo, list }) {
  return (
    <div
      className="card-process"
      style={{
        padding: "20px",
        borderRadius: "20px 80px 20px 20px",
        background: "transparent",
        color: "white",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        border: "2px solid #7b2cbf",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        width: "100%",
        maxWidth: "400px", 
        minWidth: "250px",
        height: "auto", 
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #270cd2, #7b2cbf)",
          color: "white",
          fontWeight: "bold",
          padding: "8px 18px",
          borderRadius: "6px",
          position: "absolute",
          top: "15px",
          left: "20px",
          fontSize: "24px",
        }}
      >
        {number}
      </div>
      <div style={{ paddingTop: "70px", textAlign: "start" }}>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "12px",
            wordBreak: "break-word",
          }}
        >
          {titulo}
        </p>
        <ul
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginTop: "10px",
            paddingLeft: "0",
            listStyleType: "none",
          }}
        >
          {Array.isArray(list) &&
            list.map((item, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default CardsProcess;

// Valores por defecto en caso de que no se pasen props
CardsProcess.defaultProps = {
  titulo: "",
  list: [],
};
