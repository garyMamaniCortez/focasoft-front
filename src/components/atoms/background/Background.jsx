import "./Background.css";

const Background = ({ children, Tipo }) => {
  return (
    <div
      className={`${
        Tipo === "FondoEvento"
          ? "FondoEvento"
          : Tipo === "FondoAtributo1"
          ? "FondoAtributo1"
          : Tipo === "FondoAtributo2"
          ? "FondoAtributo2"
          : Tipo === "FondoSesion"
          ? "FondoSesion"
          : "Predeterminado"
          
          
      }
        `}
    >
      {children}
    </div>
  );
};

export default Background;
