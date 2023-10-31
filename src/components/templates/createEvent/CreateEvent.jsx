import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import "./CreateEvent.css";
const CreateEvent = () => {
  const evento = {
    TituloDelEvento: "",
    FechaDelEvento: "",
    TipoDelEvento: "",
    Descripcion: "",
    Requisitos: [""],
    Premios: [""],
    Patrocinadores: [""],
    Contactos: [""],
  };

  const Campos = [
    {
      divClase: "itemContainer",
      Etiqueta: "Titulo del evento",
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
    {
      divClase: "itemContainer",
      Etiqueta: "Requisitos",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
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
      TipoDeEntrada: "text",
      Identificador: "Premios",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "Un premio solo debe contener caracteres alfanumericos\n Los premios deben separarse con una coma",
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
      ],
      Requisitos: "Cada patrocinador solo debe contener caracteres alfanumericos y deben separarse con una coma",
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
      ],
      Requisitos: "Cada patrocinador solo debe contener caracteres alfanumericos y deben separarse con una coma",
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
