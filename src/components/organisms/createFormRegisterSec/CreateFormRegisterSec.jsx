import CreateFormRegister from "../../molecules/createFormRegister/CreateFormRegister";
import Background from "../../atoms/background/Background";
import Boton from "../../atoms/boton/Boton";

const CreateFormRegisterSec = ({campos}) => {

  return (
    <Background>
      <CreateFormRegister campos= {campos}/>
      <div className="w3-row w3-center">
        <div className="createEventButton w3-col l6">
        <Boton text="Guardar Informacion" buttonType="formButton"></Boton>
        </div>
        <div className="w3-col l6">
          <Boton text="Cancelar" buttonType="crudButton"></Boton>
          </div>
        </div>
    </Background>
  );
}

export default CreateFormRegisterSec;