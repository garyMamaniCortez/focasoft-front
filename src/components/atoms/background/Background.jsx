import "./Background.css";

const Background = ({ children, Tipo }) => {
  return (
    <div
      className={`${
        Tipo === "FondoAtributo"
          ? "FondoAtributo"
          : Tipo === "FondoEvento"
          ? "FondoEvento"
          : "Predeterminado"
      }
        `}
    >
      {children}
    </div>
  );
};

export default Background;
