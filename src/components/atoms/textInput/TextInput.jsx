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


  return (
    <>
    {TipoDeEntrada === "select" ? (      
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
      value={TipoDeEntrada !== "select" ? "" : Valor}
    >
      {OpcionesDelDesplegable.map((item) => (
        <option value={item.Valor}>{item.Etiqueta}</option>
      ))}                            
    </select>
    ) : TipoDeEntrada === "TextInputDinamic" ? (

      <TextInputDinamic
        id={TipoDeEntrada === "TextInputDinamic" ? Identificador : ""}
        name={TipoDeEntrada === "TextInputDinamic" ? Identificador : ""}
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
            : TipoDeEntrada === "checkbox"
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
            : TipoDeEntrada === "checkbox"
            ? "checkbox"            
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
    )}
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
