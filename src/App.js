import CreateEvent from "./components/templates/createEvent/CreateEvent"
import VistaEventos from "./components/templates/VistaEventos/VistaEventos";
import Navbar from "./components/organisms/navbar/Navbar"
import CreateRegister from "./components/templates/createRegister/CreateRegister"

import "w3-css"
function App() {

  return (
    <div className="w3-row">
        <Navbar/>
      <div className="l10 w3-col w3-right">
        <CreateEvent></CreateEvent>
      </div>
    </div>
  );
}

export default App;
