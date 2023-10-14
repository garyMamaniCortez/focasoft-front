import CreateFormRegisterSec from "../../organisms/registerParticipantsSec/RegisterParticipantsSec.jsx"
import "./RegisterParticipant.css"
import "w3-css"

const RegisterParticipant = () => {
    const campos = [
        { etiqueta: 'Nombres', LabelType: 'FormLabel', InputType: 'text', Select: false },
        { etiqueta: 'Apellidos', LabelType: 'FormLabel', InputType: 'text', Select: false  },
        { etiqueta: 'Fecha de nacimiento', LabelType: 'FormLabel', InputType: 'date', Select: true  },
        { etiqueta: 'Correo electronico', LabelType: 'FormLabel', InputType: 'email', Select: false  },
        { etiqueta: 'Numero de Celular', LabelType: 'FormLabel', InputType: 'text', Select: false  },
    ];

    return (
        <div className="vistaContent w3-right">
            <h1 className="H1Register">Formulario de Registro</h1>
            <div className="SeccionRegistrarParticipante">
            <CreateFormRegisterSec campos={campos}/>
            </div>
            
        </div>
    );
}

export default RegisterParticipant;