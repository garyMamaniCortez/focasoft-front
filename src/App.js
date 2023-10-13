import CreateEvent from "./components/templates/createEvent/CreateEvent";
import VistaEventos from "./components/templates/VistaEventos/VistaEventos"
import Navbar from "./components/organisms/navbar/Navbar"
function App() {

  return (
    <div className="row">
      <div className="col-4">
        <CreateEvent/>
      </div>
      <div className="col-8">
      </div>
    </div>
  );
}

export default App;
