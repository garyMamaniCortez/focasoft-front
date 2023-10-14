import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import './CreateEvent.css'
const CreateEvent = () => {

    const campos = [
        { etiqueta: 'TItulo del evento', LabelType: 'FormLabel', InputType: 'text'},
        { etiqueta: 'Fecha del evento', LabelType: 'FormLabel', InputType: 'date'},
        { etiqueta: 'Tipo del evento', LabelType: 'FormLabel', InputType: 'select'},
        { etiqueta: 'Descripcion', LabelType: 'FormLabel', InputType: 'description'},
        { etiqueta: 'Afiche del evento', LabelType: 'FormLabel', InputType: 'file'},
        { etiqueta: 'Requsitos', LabelType: 'FormLabel', InputType: 'text'},
        { etiqueta: 'Premios', LabelType: 'FormLabel', InputType: 'text'},
        { etiqueta: 'Patrocinadores', LabelType: 'FormLabel', InputType: 'text'},
        { etiqueta: 'Contactos', LabelType: 'FormLabel', InputType: 'text'},
      ];
      

    return (
      <div className="CreateEventContent">
        <h1 className="H1CreateEvent">Crear Evento</h1>
        <div className="CreateEventSection">
          <CreateEventSection campos={campos}/>
        </div>
      </div>
    );
  }
  
  export default CreateEvent;
