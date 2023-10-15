import Background from "../../atoms/background/Background";
import Boton from "../../atoms/boton/Boton";
import Formulario from "../../molecules/formulario/Formulario";

const CreateFormRegisterSec = ({CamposDeEntrada}) => {

  return (
    <Background>      
      <Formulario CamposDeEntrada= {CamposDeEntrada}/>
      <div className="w3-center w3-margin">
        <Boton text="Añadir Pregunta" buttonType="botonAzul"></Boton>
      </div>
      <div className="w3-row w3-center">             
        <div className="createEventButton w3-col l6">
        <Boton text="Guardar Informacion" buttonType="botonAmarilloGrand"></Boton>
        </div>
        <div className="w3-col l6">
          <Boton text="Cancelar" buttonType="botonRojoGrand"></Boton>
        </div>
      </div>
    </Background>
  );
}

export default CreateFormRegisterSec;