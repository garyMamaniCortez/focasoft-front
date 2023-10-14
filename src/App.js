import Navbar from "./components/organisms/navbar/Navbar"
import CreateEvent from "./components/templates/createEvent/CreateEvent"
import VistaEventos from "./components/templates/VistaEventos/VistaEventos"
import CreateRegister from "./components/templates/createRegister/CreateRegister"
import RegisterParticipant from "./components/templates/registerParticipant/RegisterParticipant";

import "w3-css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="w3-row">
      <Navbar></Navbar>
    <BrowserRouter>
      <Routes>
        <Route path="/CrearEvento" element={<CreateEvent />}>
            
        </Route>
        <Route path="CrearFormulario" element={<CreateRegister/>}/>
        <Route path="/VistaEventos" element={<VistaEventos/>}></Route>
        <Route path="RegistrarParticipante" element={RegisterParticipant}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
