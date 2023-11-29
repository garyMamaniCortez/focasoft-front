import React from "react";
import "./Label.css";

const Label = ({ TipoDeEtiqueta, children }) => {
  return (
    <label
      className={TipoDeEtiqueta}
    >
      {children}
    </label>
  );
};

export default Label;
