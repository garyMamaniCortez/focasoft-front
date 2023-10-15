import Label from "../../atoms/label/Label";
import TextInput from "../../atoms/textInput/TextInput";

import './Formulario.css'

const Formulario = ({CamposDeEntrada, handleChange}) => {
    const h = handleChange

    return (
        <div>
            {CamposDeEntrada.map((item) => (
                <div className='itemContainer'>
                    <Label TipoDeEtiqueta={item.TipoDeEtiqueta}>{item.Etiqueta}</Label>
                    <TextInput TipoDeEntrada={item.TipoDeEntrada} Identificador={item.Identificador} ManejarCambio={h}/>
                </div>
            ))}
        </div>
    );
}

export default Formulario;