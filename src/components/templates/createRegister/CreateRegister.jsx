import Formulario from "../../organisms/createFormRegisterSec/CreateFormRegisterSec.jsx";
import "./CreateRegister.css";
import "w3-css";

const CreateRegister = (props) => {
  const Tipo = props.Tipo;

  const Campos = [];

  return (
    <div className="vistaContent w3-right">
      <h1 className="TituloDeSeccion">Crear Formulario de Registro</h1>
      <div className="SeccionCrearFormularioDeRegistro">
        <Formulario Campos={Campos} Tipo={Tipo} />
      </div>
    </div>
  );
};

export default CreateRegister;
