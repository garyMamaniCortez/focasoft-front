import Background from "../../atoms/background/Background";
import Boton from "../../atoms/boton/Boton";
import Formulario from "../../molecules/formulario/Formulario";

const CreateFormRegisterSec = ({CamposDeEntrada}) => {

  return (
    <Background>
      <Formulario CamposDeEntrada= {CamposDeEntrada}/>
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