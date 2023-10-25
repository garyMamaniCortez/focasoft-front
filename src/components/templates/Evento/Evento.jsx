import Informacion from "../../organisms/Evento/Evento";
import "./Evento.css"

const Evento = () => {
  const Datos = 
    {
      TituloDelEvento: "Titulo de evento",
      Descripcion: "Titulo de evento",
      FechaDelEvento: "aa-mm-dd",
      Premios: "Premios",
      Requisitos: "Requisitos",
      Afiche: "Afiche",
      Contactos: "Contacto"
    }
  

  return (
    <div className="vistaContent w3-right">
      <h1 className="H1CreateEvent">Crear Formulario de Registro</h1>
      <div className="CentrarSeccion InformacionEvento">
        <Informacion Datos={Datos}/>
      </div>
    </div>
  );
};

export default Evento;
