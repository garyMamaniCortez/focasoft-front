import CreateEventForm from "../../molecules/createEvent/CreateEventForm.jsx"
import Boton from "../../atoms/boton/Boton.jsx"
import Background from "../../atoms/background/Background.jsx"; 

const CreateEventSection = ({campos}) => {

  return (
      <Background>
      <CreateEventForm campos= {campos}/>
        <div className="w3-row w3-center">
          <div className="createEventButton w3-col l6">
          <Boton text="Formulario de registro" buttonType="formButton"></Boton>
          </div>
          <div className="w3-col l6">
          <Boton text="Crear evento" buttonType="crudButton"></Boton>
          </div>
        </div>
      </Background>
  );
}

export default CreateEventSection;