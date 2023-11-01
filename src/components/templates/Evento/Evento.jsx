import Informacion from "../../organisms/Evento/Evento";
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import "./Evento.css"

const Evento = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState({});
  const [eventoCargado, setEventoCargado] = useState(false);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/evento/${id}`);
        setEvento(response.data);
        setEventoCargado(true); // Marcar el evento como cargado
      } catch (error) {
        console.error('Error al obtener el evento:', error);
      }
    }

    getEvent();
  }, [id]);

  const Datos = 
    {
      TituloDelEvento: evento.titulo,
      Descripcion: evento.descripcion,
      FechaDelEvento: evento.fecha_ini,
      Premios: evento.premios,
      Requisitos: evento.requisitos,
      Afiche: "http://"+evento.afiche,
      Contactos: evento.contactos,
      Formulario: evento.id_formulario
    }
  

  return (
    <div className="vistaContent w3-right">
      <h1 className="TituloDeSeccion">informacion de evento</h1>
      <div className="CentrarSeccion">
        <Informacion Datos={Datos}/>
      </div>
    </div>
  );
};

export default Evento;
