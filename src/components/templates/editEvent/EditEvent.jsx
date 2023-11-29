import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import "./CreateEvent.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const EditEvent = () => {
  const { id } = useParams();
  const [datosDelEvento, setDatosDelEvento] = useState({});
  const [eventoCargado, setEventoCargado] = useState(false);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/evento/${id}`
        );
        setDatosDelEvento(response.data);
        setEventoCargado(true); // Marcar el evento como cargado
      } catch (error) {
        console.error("Error al obtener el evento:", error);
      }
    };

    getEvent();
  }, [id]);

  const evento = {
    TituloDelEvento: datosDelEvento.titulo,
    FechaDelEvento: datosDelEvento.fecha_ini,
    TipoDelEvento: datosDelEvento.tipo,
    Descripcion: datosDelEvento.descripcion,
    Requisitos: datosDelEvento.requisitos,
    Premios: datosDelEvento.premios,
    Patrocinadores: datosDelEvento.patrocinadores ,
    Contactos: datosDelEvento.contactos,
  };

  if (!eventoCargado) {
    // Si el evento no se ha cargado todavía, puedes mostrar un spinner o un mensaje de carga
    return <div>Cargando evento...</div>;
  }

  const Campos = [
    {
      divClase: "itemContainer",
      Etiqueta: "Titulo del evento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "TituloDelEvento",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos:
        "El Titulo del evento solo debe contener caracteres alfanumericos",
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
      ],
      Requisitos: "La fecha posterior a la de hoy",
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
      ],
      Requisitos: "Se debe selecionar una talla de polera",
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
      ],
      Requisitos: "Descripcion es un campo obligatorio",
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
      ],
      Requisitos: "El Afiche debe ser un archivo en fomato jpeg",
    },    
    // {
    //   divClase: "itemContainer",
    //   Etiqueta: "Patrocinadores",
    //   TipoDeEtiqueta: "FormLabel",
    //   TipoDeEntrada: "text",
    //   Identificador: "Patrocinadores",
    //   Desactivado: false,
    //   OpcionesDelDesplegable: [
    //     { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
    //   ],
    //   Requisitos:
    //     "Cada patrocinador solo debe contener caracteres alfanumericos y deben separarse con una coma",
    // },
    {
      divClase: "itemContainer",
      Etiqueta: "Contactos",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Contactos",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos:
        "Cada patrocinador solo debe contener caracteres alfanumericos y deben separarse con una coma",
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Requisitos",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "TextInputDinamic",
      Identificador: "Requisitos",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos:
        "Un requisito solo debe contener caracteres alfanumericos\n Los requisitos deben separarse con una coma",
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Premios",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "TextInputDinamic",
      Identificador: "Premios",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos:
        "Un premio solo debe contener caracteres alfanumericos\n Los premios deben separarse con una coma",
    },
  ];

  return (
    <div className="CreateEventContent vistaContent w3-right">
      <h1 className="TituloDeSeccion">Editar evento</h1>
      <h2 className="TituloEvento">{evento.TituloDelEvento}</h2>
      <div className="CreateEventSection">              
        <CreateEventSection          
          Campos={Campos}
          Accion="editar"
          Evento={evento}
          idEvento={id}
        />
      </div>
    </div>
  );
};

export default EditEvent;
