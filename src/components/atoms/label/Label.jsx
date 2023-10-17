import React from "react";
import './Label.css'

const Label = ({TipoDeEtiqueta, children}) => {
    return (
      <label  className={`${TipoDeEtiqueta === "FormLabel" ? "FormLabel" :
                            TipoDeEtiqueta === "FormTitle" ? "FormTitle" :
                            TipoDeEtiqueta ==="ListBody" ? "ListBody" : ""}
      `}>
        {children}
      </label>
    );
  }
  
  export default Label;
