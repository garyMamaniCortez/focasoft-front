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
      Esta es una etiqueta
      <br/><Label LabelType="ListBody" >
        Gato
      </Label><br/>
      <CreateRegister/>
    </div>
  );
}

export default App;
