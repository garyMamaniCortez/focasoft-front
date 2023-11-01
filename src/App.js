import Navbar from "./components/organisms/navbar/Navbar"
import CreateEvent from "./components/templates/createEvent/CreateEvent"
import VistaEventos from "./components/templates/VistaEventos/VistaEventos"
import CreateRegister from "./components/templates/createRegister/CreateRegister"
import RegisterParticipant from "./components/templates/registerParticipant/RegisterParticipant";
import IniciarSesion from "./components/templates/iniciarSesion/IniciarSesion";
import EditEvent from "./components/templates/editEvent/EditEvent";
import Evento from "./components/templates/Evento/Evento";
import VistaEventosAdmin from "./components/templates/admin/VistaEventosAdmin";
import { useAppContext } from './Context';

import "w3-css"
import { Routes, Route } from "react-router-dom";

// Estilos
import "./vistaContent.css"


function App() {
  const { datos } = useAppContext();

  return (
    <div className="w3-row">
      <Navbar Boton={(datos.activado) ? 'Cerrar sesión' : 'Iniciar sesión'}></Navbar>
      <Routes>
        <Route path="/CrearEvento" element={<CreateEvent />}/>
        <Route path = "/AgregarFormulario/:id" element = { <CreateRegister/>}/>
        <Route path="/" element={<VistaEventos/>}/>
        <Route path="/RegistrarParticipante/:id/:evento" element={<RegisterParticipant/>}/>
        <Route path="/IniciarSesion" element={<IniciarSesion/>}/>
        <Route path="/EditarEvento/:id" element={<EditEvent/>}/>
        <Route path="/Evento/:id" element={<Evento/>}/>
        <Route path="/admin" element={<VistaEventosAdmin/>}/>
      </Routes>
    </div>
  );
}

export default App;
