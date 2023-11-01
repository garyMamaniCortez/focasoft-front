import CreateFormRegisterSec from "../../organisms/registerParticipantsSec/RegisterParticipantsSec.jsx"
import "./RegisterParticipant.css"
import "w3-css"

const RegisterParticipant = () => {

    return (
        <div className="vistaContent w3-right">
            <h1 className="TituloDeSeccion">Formulario de Registro</h1>
            <div className="SeccionRegistrarParticipante">
            <CreateFormRegisterSec Campos=""/>
            </div>
            
        </div>
    );
}

export default RegisterParticipant;