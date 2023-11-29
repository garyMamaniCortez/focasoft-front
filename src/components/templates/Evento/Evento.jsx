import Informacion from "../../organisms/Evento/Evento";
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import "./Evento.css"
import ReclutamientoIm from "../../icons/reclutamiento.png"
import EntrenamientoIm from "../../icons/entrenamiento.png"
import CompetenciaIm from "../../icons/competencia.png"

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
      Tipo: evento.tipo,
      Descripcion: evento.descripcion,
      FechaDelEvento: evento.fecha_ini,
      Premios: evento.premios,
      Requisitos: evento.requisitos,
      Afiche: evento.afiche==null ?  ((evento.tipo == "Reclutamiento" ? ReclutamientoIm : (evento.tipo == "Taller de entrenamiento" ? EntrenamientoIm : CompetenciaIm) )): "http://"+(evento.afiche),
      Contactos: evento.contactos,
      Formulario: evento.id_formulario
    }
  

  return (
    <div className="vistaContent w3-right">
      <h1 className="TituloDeSeccion">Información de evento</h1>
      <div className="CentrarSeccion">
        <Informacion Datos={Datos}/>
      </div>
    </div>
  );
};

export default Evento;
