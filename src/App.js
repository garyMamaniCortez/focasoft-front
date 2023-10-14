import Navbar from "./components/organisms/navbar/Navbar"

import CreateEvent from "./components/templates/createEvent/CreateEvent"
import VistaEventos from "./components/templates/VistaEventos/VistaEventos"
import CreateRegister from "./components/templates/createRegister/CreateRegister"
import RegisterParticipant from "./components/templates/registerParticipant/RegisterParticipant";

import "w3-css"

function App() {

  return (
    <div className="w3-row">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
