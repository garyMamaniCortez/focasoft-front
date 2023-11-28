import "./TextInput.css";

const TextInput = ({
  TipoDeEntrada,
  Identificador,
  ManejarCambio,
  OpcionesDelDesplegable,
  Desactivado,
  Valor,
}) => {
  return (
    <>
      {TipoDeEntrada === "checkbox" ? (
        <input
          id={Identificador}
          name={Identificador}
          className=""
          type="checkbox"
          onChange={ManejarCambio}
          disabled={Desactivado}
        />
      ) : TipoDeEntrada.includes("select") ? (
        <select
          id={Identificador}
          name={Identificador}
          className={`${
            TipoDeEntrada === "selectPequeño"
              ? "EntradaDeTextoPequeño"
              : "EntradaDeTexto"
          }`}
          disabled={Desactivado}
          onChange={ManejarCambio}
        >
          {OpcionesDelDesplegable.map((item) => (
            <option value={item.Valor}>{item.Etiqueta}</option>
          ))}
        </select>
      ) : (
        <input
          id={Identificador}
          name={Identificador}
          className={`${
            (TipoDeEntrada === "text" || TipoDeEntrada === "texto")
              ? "EntradaDeTexto"
              : (TipoDeEntrada === "date" || TipoDeEntrada === "fecha") 
              ? "EntradaDeTexto"
              : TipoDeEntrada === "description"
              ? "Descripcion"
              : TipoDeEntrada === "file"
              ? "EntradaDeTexto"
              : TipoDeEntrada === "select"
              ? "EntradaDeTexto"
              : TipoDeEntrada === "email"
              ? "EntradaDeTexto"
              : TipoDeEntrada === "password"
              ? "Contrasena"
              : TipoDeEntrada === "User"
              ? "User"
              : TipoDeEntrada === "campo"
              ? "EntradaDeNuevoCampo"
              : ""
          }`}
          type={`${
            (TipoDeEntrada === "text" || TipoDeEntrada === "texto")
              ? "text"
              : TipoDeEntrada === "description"
              ? "text"
              : (TipoDeEntrada === "date" || TipoDeEntrada === "fecha") 
              ? "date"
              : TipoDeEntrada === "file"
              ? "file"
              : TipoDeEntrada === "email"
              ? "email"
              : TipoDeEntrada === "password"
              ? "password"
              : TipoDeEntrada === "User"
              ? "text"
              : ""
          }`}
          placeholder={`${
            TipoDeEntrada === "password"
              ? "contraseña"
              : TipoDeEntrada === "User"
              ? "usuario"
              : ""
          }`}
          accept={`${TipoDeEntrada === "file" ? ".jpeg" : ""}`}
          onChange={ManejarCambio}
          disabled={
            Desactivado ? true : TipoDeEntrada === "select" ? true : false
          }
          value={
            TipoDeEntrada === "file"
              ? ""
              : TipoDeEntrada === "Select"
              ? ""
              : Valor
          }
        />
      )}
    </>
  );
};

export default TextInput;
