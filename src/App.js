import Navbar from "./components/organisms/navbar/Navbar"
import CreateEvent from "./components/templates/createEvent/CreateEvent"
import VistaEventos from "./components/templates/VistaEventos/VistaEventos"
import CreateRegister from "./components/templates/createRegister/CreateRegister"
import RegisterParticipant from "./components/templates/registerParticipant/RegisterParticipant";
import EditEvent from "./components/templates/editEvent/EditEvent";

import "w3-css"
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="w3-row">
      <Navbar></Navbar>
      <Routes>
        <Route path="/CrearEvento" element={<CreateEvent />}/>
        <Route path = "/CrearEvento/AgregarFormulario" element = { <CreateRegister/>}/>
        <Route path="/" element={<VistaEventos/>}/>
        <Route path="/RegistrarParticipante/:id/:evento" element={<RegisterParticipant/>}/>
        <Route path="/EditarEvento/:id" element={<EditEvent/>}/>
      </Routes>
    </div>
  );
}

export default App;
