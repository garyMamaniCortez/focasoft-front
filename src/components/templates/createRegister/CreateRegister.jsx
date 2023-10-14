import CreateFormRegisterSec from "../../organisms/createFormRegisterSec/CreateFormRegisterSec.jsx"
import './CreateRegister.css'
import "w3-css"
const CreateRegister = () => {
    const campos = [
        { etiqueta: 'Nombres', LabelType: 'FormLabel', InputType: 'text', Select: false },
        { etiqueta: 'Apellidos', LabelType: 'FormLabel', InputType: 'text', Select: false  },
        { etiqueta: 'Fecha de nacimiento', LabelType: 'FormLabel', InputType: 'date', Select: true  },
        { etiqueta: 'Correo electronico', LabelType: 'FormLabel', InputType: 'text', Select: false  },
        { etiqueta: 'Numero de Celular', LabelType: 'FormLabel', InputType: 'text', Select: false  },
    ];

    return (
        <div className="vistaContent w3-right">
            <h1 className="H1CreateEvent">Crear Formulario de Registro</h1>
            <div className="SeccionCrearFormularioDeRegistro">
                <CreateFormRegisterSec campos={campos}/>
            </div>
        </div>
    );
}

export default CreateRegister;