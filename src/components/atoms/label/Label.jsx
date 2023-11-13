import React from "react";
import "./Label.css";

const Label = ({ TipoDeEtiqueta, children }) => {
  return (
    <label
      className={`${
        TipoDeEtiqueta === "AtributoEvento1"
          ? "AtributoEvento1"
          : TipoDeEtiqueta === "AtributoEvento2"
          ? "AtributoEvento2"
          : TipoDeEtiqueta === "FormLabel"
          ? "FormLabel"
          : TipoDeEtiqueta === "FormTitle"
          ? "FormTitle"
          : TipoDeEtiqueta === "ListBody"
          ? "ListBody"
          : TipoDeEtiqueta === "FormularioRequisitos"
          ? "FormularioRequisitos"
          : TipoDeEtiqueta === "EtiquetaFormulario2"
          ? "EtiquetaFormulario2"
          : TipoDeEtiqueta === "DescripcionCampo"
          ? "DescripcionCampo"
          : ""
      }
      `}
    >
      {children}
    </label>
  );
};

export default Label;
