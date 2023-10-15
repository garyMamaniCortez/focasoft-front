import CreateFormRegisterSec from "../../organisms/registerParticipantsSec/RegisterParticipantsSec.jsx"
import "./RegisterParticipant.css"
import "w3-css"

const RegisterParticipant = () => {

    return (
        <div className="vistaContent w3-right">
            <h1 className="H1Register">Formulario de Registro</h1>
            <div className="SeccionRegistrarParticipante">
            <CreateFormRegisterSec/>
            </div>
            
        </div>
    );
}

export default RegisterParticipant;