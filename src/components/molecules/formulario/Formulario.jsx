import Label from "../../atoms/label/Label";
import TextInput from "../../atoms/textInput/TextInput";

import "./Formulario.css";

const Formulario = ({ CamposDeEntrada, handleChange, FormData }) => {
  return (
    <div>
      {CamposDeEntrada.map((item) => (
        <div className={item.divClase}>
          <Label TipoDeEtiqueta={item.TipoDeEtiqueta}>{item.Etiqueta}</Label>
          <TextInput
            TipoDeEntrada={item.TipoDeEntrada}
            Identificador={item.Identificador}
            ManejarCambio={handleChange}
            OpcionesDelDesplegable={item.OpcionesDelDesplegable}
            Desactivado={item.Desactivado}
            Valor={FormData[item.Identificador]}
          />
        </div>
      ))}
    </div>
  );
};

export default Formulario;
