import CreateFormRegisterSec from "../../organisms/registerParticipantsSec/RegisterParticipantsSec.jsx"
import "./RegisterParticipant.css"

const RegisterParticipant = () => {
    const Evento = "Evento de Programación";
    const campos = [
        { etiqueta: 'Nombres', LabelType: 'FormLabel', InputType: 'text', Select: false },
        { etiqueta: 'Apellidos', LabelType: 'FormLabel', InputType: 'text', Select: false  },
        { etiqueta: 'Fecha de nacimiento', LabelType: 'FormLabel', InputType: 'date', Select: true  },
        { etiqueta: 'Correo electronico', LabelType: 'FormLabel', InputType: 'description', Select: false  },
        { etiqueta: 'Numero de Celular', LabelType: 'FormLabel', InputType: 'text', Select: false  },
    ];

    return (
        <div>
            <h1 className="H1Register">{Evento}</h1>
            <div className="row">
                <div className="est1">

                </div>
                <div className="est2">
                    <CreateFormRegisterSec campos={campos}/>

                </div>
            </div>
        </div>
    );
}

export default RegisterParticipant;