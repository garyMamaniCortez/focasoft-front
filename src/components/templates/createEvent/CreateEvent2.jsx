import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import "./CreateEvent.css";

const createEvent = () => {
    const evento = {
        Requisitos: [" "],
        Premios: [" "],
    }
    const Campos = [
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
            TipoDeEntrada: "text",
            Identificador: "Premios",
            Desactivado: false,
            OpcionesDelDesplegable: [
                { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos: "Un premio solo debe contener caracteres alfanumericos y deben separarse con una coma",
            }
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