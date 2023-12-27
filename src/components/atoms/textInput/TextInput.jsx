import "./TextInput.css";
import TextInputDinamic from "../TextInputDinamic/TextInputDinamic";
import React, { useEffect, useState } from "react";

const TextInput = ({
  TipoDeEntrada,
  Identificador,
  ManejarCambio,
  OpcionesDelDesplegable,
  Desactivado,
  Valor,
}) => {
  const [valorList, setValorList] = useState([]);
  
  const handleAdd = (value) => {
    setValorList([...valorList, value]);
  };
  const handleRemove = () => {
    setValorList(valorList.slice(0, -1));
  };

  useEffect(() => {
    if(TipoDeEntrada === "TextInputDinamic"){
      ManejarCambio({target: {name: Identificador, value: valorList}});
    }
  }, [valorList]);

  return (
    <>
      {TipoDeEntrada === "checkbox" ? (
        <input
          id={Identificador}
          name={Identificador}
          className="widthAuto"
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
    ) : TipoDeEntrada === "TextInputDinamic" ? (

      <TextInputDinamic
        id="TextInputDinamic"
        name="TextInputDinamic"
        className="EntradaDeTexto"
        disabled={
          Desactivado ? true : TipoDeEntrada !== "TextInputDinamic" ? true : false
        }
        lista= {valorList}
        agregar={handleAdd}
        remover={handleRemove} 
        ManejarCambio = {ManejarCambio}
      />

    ) : (

      <input
        id={Identificador}
        name={Identificador}
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
            : TipoDeEntrada === "texto" ||
                TipoDeEntrada === "fecha_AFA" ||
                TipoDeEntrada === "telefono" ||
                TipoDeEntrada === "email" ||
                TipoDeEntrada === "nombre"
            ? "EntradaDeTexto"
            : ""
        }
        `}
          type={`${
              TipoDeEntrada === "text"||
              TipoDeEntrada === "texto" ||
              TipoDeEntrada === "telefono" ||
              TipoDeEntrada === "nombre"
              ? "text"
              : TipoDeEntrada === "description"
              ? "text"
              : TipoDeEntrada === "date" || TipoDeEntrada === "fecha_AFA"
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
              ? "Contraseña"
              : TipoDeEntrada === "User"
              ? "Usuario"
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
