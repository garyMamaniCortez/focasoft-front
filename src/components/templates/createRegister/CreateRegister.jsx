import CreateFormRegisterSec from "../../organisms/createFormRegisterSec/CreateFormRegisterSec.jsx"
import './CreateRegister.css'
import "w3-css"
const CreateRegister = () => {
    const CamposDeEntrada = [
        { Etiqueta: 'Nombres', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"1" },
        { Etiqueta: 'Apellidos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"2" },
        { Etiqueta: 'Fecha de nacimiento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'date', Identificador:"3"  },
        { Etiqueta: 'Correo electronico', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"4" },
        { Etiqueta: 'Numero de Celular', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"5"  },
    ];

    return (
        <div className="vistaContent w3-right">
            <h1 className="H1CreateEvent">Crear Formulario de Registro</h1>
            <div className="SeccionCrearFormularioDeRegistro">
                <CreateFormRegisterSec CamposDeEntrada={CamposDeEntrada}/>
            </div>
        </div>
    );
}

export default CreateRegister;