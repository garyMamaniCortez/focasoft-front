import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import './CreateEvent.css'
const CreateEvent = () => {

    const CamposDeEntrada = [
        { Etiqueta: 'TItulo del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'1'},
        { Etiqueta: 'Fecha del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'date', Identificador:'2'},
        { Etiqueta: 'Tipo del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'select', Identificador:'3'},
        { Etiqueta: 'Descripcion', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'description', Identificador:'4'},
        { Etiqueta: 'Afiche del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'file', Identificador:'5'},
        { Etiqueta: 'Requsitos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'6'},
        { Etiqueta: 'Premios', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'7'},
        { Etiqueta: 'Patrocinadores', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'8'},
        { Etiqueta: 'Contactos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'9'},
      ];
      

    return (
      <div className="CreateEventContent vistaContent w3-right">
        <h1 className="H1CreateEvent">Crear Evento</h1>
        <div className="CreateEventSection">
          <CreateEventSection CamposDeEntrada={CamposDeEntrada}/>
        </div>
      </div>
    );
  }
  
  export default CreateEvent;
