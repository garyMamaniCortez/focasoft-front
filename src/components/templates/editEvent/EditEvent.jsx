import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import './CreateEvent.css'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";

const EditEvent = () => {
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

  if (!eventoCargado) {
    // Si el evento no se ha cargado todavía, puedes mostrar un spinner o un mensaje de carga
    return <div>Cargando evento...</div>;
  }

  const Campos = [
    {
      Valor: evento.titulo,
      divClase: "itemContainer",
      Etiqueta: "Titulo del evento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "TituloDelEvento",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ]
      },
    {
      divClase: "itemContainer",
      Etiqueta: "Fecha del evento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "date",
      Identificador: "FechaDelEvento",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ]
      },
    {
      divClase: "itemContainer",
      Etiqueta: "Tipo del evento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "select",
      Identificador: "TipoDelEvento",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
        { Valor: "Reclutamiento", Etiqueta: "Reclutamiento" },
        {
          Valor: "Taller de entrenamiento",
          Etiqueta: "Taller de entrenamiento",
        },
        {
          Valor: "Competencia de entrenamiento",
          Etiqueta: "Competencia de entrenamiento",
        },
        { Valor: "Clasificatorio interno", Etiqueta: "Clasificatorio interno" },
        { Valor: "Competencia", Etiqueta: "Competencia" },
      ]
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Descripcion",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "description",
      Identificador: "Descripcion",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ]
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Afiche del evento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "file",
      Identificador: "AficheDelEvento",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ]
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Requisitos",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Requisitos",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ]
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Premios",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Premios",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ]
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Patrocinadores",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Patrocinadores",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ]
      },
    {
      divClase: "itemContainer",
      Etiqueta: "Contactos",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Contactos",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ]
      },
  ];

  return (
    <div className="CreateEventContent vistaContent w3-right">
      <h1 className="TituloDeSeccion">Editar evento</h1>
      <div className="CreateEventSection">
        <CreateEventSection Campos={Campos} Accion="editar" Evento={evento} idEvento={id}/>
      </div>
    </div>
  );
}

export default EditEvent;

    
      
