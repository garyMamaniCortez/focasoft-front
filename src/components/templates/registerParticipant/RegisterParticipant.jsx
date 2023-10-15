import CreateFormRegisterSec from "../../organisms/registerParticipantsSec/RegisterParticipantsSec.jsx"
import "./RegisterParticipant.css"
import "w3-css"

const RegisterParticipant = () => {
    const CamposDeEntrada = [
        { Etiqueta: 'Nombres', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"1" },
        { Etiqueta: 'Apellidos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"2"  },
        { Etiqueta: 'Fecha de nacimiento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'date', Identificador:"3"  },
        { Etiqueta: 'Correo electronico', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'email', Identificador:"4"  },
        { Etiqueta: 'Numero de Celular', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"5"  },
    ];

    return (
        <div className="vistaContent w3-right">
            <h1 className="H1Register">Formulario de Registro</h1>
            <div className="SeccionRegistrarParticipante">
            <CreateFormRegisterSec CamposDeEntrada={CamposDeEntrada}/>
            </div>
            
        </div>
    );
}

export default RegisterParticipant;