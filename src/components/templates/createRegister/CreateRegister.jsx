import CreateFormRegisterSec from "../../organisms/createFormRegisterSec/CreateFormRegisterSec.jsx"
import './CreateRegister.css'
import "w3-css"
const CreateRegister = () => {

    return (
        <div className="vistaContent w3-right">
            <h1 className="TituloDeSeccion">Crear Formulario de Registro</h1>
            <div className="SeccionCrearFormularioDeRegistro">
                <CreateFormRegisterSec />
            </div>
        </div>
    );
}

export default CreateRegister;