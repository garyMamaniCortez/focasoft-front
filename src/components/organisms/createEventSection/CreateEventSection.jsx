import Formulario from "../../molecules/formulario/Formulario.jsx";
import Boton from "../../atoms/boton/Boton.jsx"
import Background from "../../atoms/background/Background.jsx"; 
import { Link } from "react-router-dom";

const CreateEventSection = ({CamposDeEntrada}) => {

  return (
      <Background>
      <Formulario CamposDeEntrada= {CamposDeEntrada}/>
        <div className="w3-row w3-center">
          <div className="createEventButton w3-col l6">
          <Link to="/CrearFormulario"><Boton text="Formulario de registro" buttonType="formButton"></Boton></Link>
          </div>
          <div className="w3-col l6">
          <Boton text="Crear evento" buttonType="crudButton"></Boton>
          </div>
        </div>

      </Background>
  );
}

export default CreateEventSection;