import Label from "../../atoms/label/Label";
import TextInput from "../../atoms/textInput/TextInput";

import "./Formulario.css";

const Formulario = ({ CamposDeEntrada, handleChange, FormData, Desactivado,Lista }) => {
  return (
    <>
      {CamposDeEntrada.map((item) => (
        <div hidden={item.Desactivado} className="ContenedorCampo">
          <Label TipoDeEtiqueta={item.TipoDeEtiqueta}>{item.Etiqueta}</Label>
          <div className="ContenedorEntrada">
          <TextInput
            TipoDeEntrada={item.TipoDeEntrada}
            Identificador={item.Identificador}
            ManejarCambio={handleChange}
            OpcionesDelDesplegable={item.OpcionesDelDesplegable}
            Desactivado={Desactivado}
            Valor={FormData[item.Identificador]}
          />
          <br/>
           <Label TipoDeEtiqueta="FormularioRequisitos">{item.Requisitos}</Label> 
          </div>
        </div>
      ))}
    </>
  );
};

export default Formulario;
