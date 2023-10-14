import CreateEventForm from "../../molecules/createEvent/CreateEventForm.jsx"
import Boton from "../../atoms/boton/Boton.jsx"
import Background from "../../atoms/background/Background.jsx"; 
import { Outlet, Link, Routes } from "react-router-dom";
import CreateRegister from "../../templates/createRegister/CreateRegister.jsx";
import { BrowserRouter, Route } from "react-router-dom";

const CreateEventSection = ({campos}) => {

  return (
      <Background>
      <CreateEventForm campos= {campos}/>
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