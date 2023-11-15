import "./TextInput.css";
import TextInputDinamic from "../TextInputDinamic/TextInputDinamic";

const TextInput = ({
  TipoDeEntrada,
  Identificador,
  ManejarCambio,
  OpcionesDelDesplegable,
  Desactivado,
  Valor,
}) => {
  return (
    <div className="TextInputMap">
      <input
        id={TipoDeEntrada !== "select" ? Identificador : ""}
        name={TipoDeEntrada !== "select" ? Identificador : ""}
        className={`${
          TipoDeEntrada === "text"
            ? "EntradaDeTexto"
            : TipoDeEntrada === "date"
            ? "EntradaDeTexto"
            : TipoDeEntrada === "description"
            ? "EntradaDeTexto"
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
            : TipoDeEntrada === "TextInputDinamic"
            ? "EntradaDeTexto"
            : ""
        }
        `}
        type={`${
          TipoDeEntrada === "text"
            ? "text"
            : TipoDeEntrada === "description"
            ? "text"
            : TipoDeEntrada === "date"
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

        placeholder={`${TipoDeEntrada === "password" ? "contraseña" : 
                        TipoDeEntrada === "User" ? "usuario" : ""}`}

        accept={`${TipoDeEntrada === "file" ? ".jpeg" : ""}`}
        onChange={ManejarCambio}
        disabled={
          Desactivado ? true : TipoDeEntrada === "select" ? true                               
                              : false
        }
        hidden={TipoDeEntrada === "select" ? true 
                : TipoDeEntrada === "TextInputDinamic" ? true
                : false}
        value={
          TipoDeEntrada === "file"
            ? ""
            : TipoDeEntrada === "Select"
            ? ""
            : TipoDeEntrada === "TextInputDinamic"
            ? ""
            : Valor 
        }
      />
      <select
        id={TipoDeEntrada === "select" ? Identificador : ""}
        name={TipoDeEntrada === "select" ? Identificador : ""}
        className="EntradaDeTexto"
        disabled={
          Desactivado ? true : TipoDeEntrada !== "select" ? true 
          : TipoDeEntrada === "TextInputDinamic" ? true
          : false
        }
        onChange={ManejarCambio}
        hidden={TipoDeEntrada !== "select" ? true 
                : TipoDeEntrada === "TextInputDinamic" ? true
                : false}
        value={TipoDeEntrada !== "select" ? "" : Valor}
      >
        {OpcionesDelDesplegable.map((item) => (
          <option value={item.Valor}>{item.Etiqueta}</option>
        ))}
      </select>
      
      <TextInputDinamic
        id={TipoDeEntrada === "TextInputDinamic" ? Identificador : ""}
        name={TipoDeEntrada === "TextInputDinamic" ? Identificador : ""}
        className="EntradaDeTexto"
        disabled={
          Desactivado ? true : TipoDeEntrada !== "TextInputDinamic" ? true : false
        }
        onChange={ManejarCambio}
        hidden={TipoDeEntrada !== "TextInputDinamic" ? true : false}
        value={TipoDeEntrada !== "TextInputDinamic" ? "" : Valor}
      />

    </div>
  );
};

export default TextInput;
