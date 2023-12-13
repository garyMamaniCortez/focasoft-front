import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import "./CreateEvent.css";
import React, { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../axios/interceptor";
import { ENDPOINTS } from "../../../Constants/endpoinst";

const CreateEvent = () => {
  const evento = {
    TituloDelEvento: " ",
    FechaDelEvento: " ",
    TipoDelEvento: " ",
    Equipo: false,
    Descripcion: " ",    
    Patrocinadores: [" "],
    Contacto: [" "],
    Requisitos: [" "],
    Premios: [" "],
  };

  // const [checkbox, setCheckbox] = useState(true);

  // const NoEsCompetencia = () => {
  //   if (evento.TipoDelEvento === 'Competencia') {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  // useEffect(() => {
  //   setCheckbox(NoEsCompetencia());
  //   console.log(evento);
  //   console.log(NoEsCompetencia());
  // }, [evento.TipoDelEvento]);
  

  const [datosRecibidos, setDatos] = useState([]);
    useEffect(() => {
      const datosRecibidos = async () => {
        try {
          const response = axiosInterceptorInstance.get(ENDPOINTS.obtenerPatrocinadores);
          const data = (await response).data;
          setDatos(data);
        } catch (error) {
          console.error('Error al obtener datos:', error);
        }
      };
      datosRecibidos();
    }, []);
      const datosTransformados = datosRecibidos.map(item => {
        return {
          Valor: item.nombre,
          Etiqueta: item.nombre
        };
      });
      
  const Campos = [
    {
      Etiqueta: "* Titulo del evento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "TituloDelEvento",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos:
        "El Titulo del evento solo debe contener caracteres alfanumericos",
    },
    {
      Etiqueta: "* Fecha del evento",
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
      Etiqueta: "* Tipo del evento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "select",
      Identificador: "TipoDelEvento",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
        { Valor: "Reclutamiento", Etiqueta: "Reclutamiento"},
        {
          Valor: "Taller de entrenamiento",
          Etiqueta: "Taller de entrenamiento",          
        },
        {
          Valor: "Competencia de entrenamiento",
          Etiqueta: "Competencia de entrenamiento",    
        },
        { Valor: "Clasificatorio interno", Etiqueta: "Clasificatorio interno"},
        { Valor: "Competencia", Etiqueta: "Competencia" },
      ],
      Requisitos: "Se debe selecionar una talla de polera",
    },
    {
      divClase: "itemContainer",
      Etiqueta: "¿evento por equipos?",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "checkbox",
      Identificador: "Equipo",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      divClase: "itemContainer",
      Etiqueta: "* Descripcion",
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
    {
      divClase: "itemContainer",
      Etiqueta: "Contacto",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Contacto",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "Cada patrocinador solo debe contener caracteres alfanumericos y deben separarse con una coma",
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
        "Un requisito solo debe contener caracteres alfanumericos",
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
      Requisitos: "Un premio solo debe contener caracteres alfanumericos y deben separarse con una coma",
    },
  ];

  return (
    <div className="CreateEventContent vistaContent w3-right">
      <h1 className="TituloDeSeccion">Crear Evento</h1>
      <div className="CreateEventSection">
        <CreateEventSection Campos={Campos} Accion={"crear"} Evento={evento} />
      </div>
    </div>
  );
};

export default CreateEvent;
