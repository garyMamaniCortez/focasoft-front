import Label from "../../atoms/label/Label";
import TextInput from "../../atoms/textInput/TextInput";

import './Formulario.css'

const Formulario = ({CamposDeEntrada}) => {

    return (
        <div>
            {CamposDeEntrada.map((item) => (
                <div className='itemContainer'>
                    <Label TipoDeEtiqueta={item.TipoDeEtiqueta}>{item.Etiqueta}</Label>
                    <TextInput TipoDeEntrada={item.TipoDeEntrada}  Id={item.Identificador}/>
                </div>
            ))}
        </div>
    );
}

export default Formulario;