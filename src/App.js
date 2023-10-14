import CreateEvent from "./components/templates/createEvent/CreateEvent"
import VistaEventos from "./components/templates/VistaEventos/VistaEventos";
import Navbar from "./components/organisms/navbar/Navbar"
import "w3-css"
import RegisterParticipant from "./components/templates/registerParticipant/RegisterParticipant";
function App() {

  return (
    <div className="w3-row">
      <RegisterParticipant/>
    </div>
  );
}

export default App;
