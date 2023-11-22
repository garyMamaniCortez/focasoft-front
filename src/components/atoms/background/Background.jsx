import "./Background.css";

const Background = ({ children, Tipo }) => {
  return (
    <div
      className={Tipo}
    >
      {children}
    </div>
  );
};

export default Background;
