import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import './CreateEvent.css'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";


const EditEvent = () => {
    const { id } = useParams();
    const hola="joa"

    const [evento, setEvento] = useState(null);

    const obtenerDatosEvento = async (eventoId) => {
      try {
        const respuesta = await axios.get(`http://localhost:8000/api/evento/${eventoId}`);
        return respuesta.data;
      } catch (error) {
        console.error('Error al obtener los datos del evento:', error);
        return null;
      }
    };
    useEffect(() => {
      const cargarDatosEvento = async () => {
        const eventoId = id;
        const datosEvento = await obtenerDatosEvento(eventoId);
        setEvento(datosEvento)
        console.log(evento)
      };
      cargarDatosEvento();
    

    },[])
    
      
  const Campos = [
    {
      Valor: "hola",
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
      Valor: "hola",
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
      Valor: "hola",

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
      Valor: "hola",

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
      Valor: "hola",

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
      Valor: "hola",

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
      Valor: "hola",

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
      Valor: "hola",

      divClase: "itemContainer",
      Etiqueta: "Patrocinadores",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Patrocinadores",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      Valor: "hola",

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
      <h1 className="H1CreateEvent">Crear Evento</h1>
      <div className="CreateEventSection">
        <CreateEventSection Campos={Campos} accion="editar" evento={evento}/>
      </div>
    </div>
  );
  }
  
  export default EditEvent;