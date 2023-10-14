import Background from "./components/atoms/background/Background";
import Boton from "./components/atoms/boton/Boton";
import Label from "./components/atoms/label/Label";
import "./components/atoms/label/Label.css"
import CreateRegister from "./components/templates/createRegister/CreateRegister.jsx"

import CreateEvent from "./components/templates/createEvent/CreateEvent";
import VistaEventos from "./components/templates/VistaEventos/VistaEventos"
import Navbar from "./components/organisms/navbar/Navbar"

function App() {

  return (
    <div>
      <Background>
        <p>datos</p>
        <br/><Label LabelType="ListBody" >
        Gato
      </Label><br/>
      
        <Boton buttonType='formButton' text='holi'/>
      </Background>
    <div className="row">
      <div className="col-4">  
      </div>
      <div className="col-8">
      </div>
    </div>

    <CreateRegister></CreateRegister>
    </div>
  );
}

export default App;
