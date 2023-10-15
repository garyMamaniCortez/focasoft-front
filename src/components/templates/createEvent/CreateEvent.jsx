import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import './CreateEvent.css'
const CreateEvent = () => {

    const campos = [
        { etiqueta: 'TItulo del evento', LabelType: 'FormLabel', InputType: 'text', Id:'1'},
        { etiqueta: 'Fecha del evento', LabelType: 'FormLabel', InputType: 'date', Id:'2'},
        { etiqueta: 'Tipo del evento', LabelType: 'FormLabel', InputType: 'select', Id:'3'},
        { etiqueta: 'Descripcion', LabelType: 'FormLabel', InputType: 'description', Id:'4'},
        { etiqueta: 'Afiche del evento', LabelType: 'FormLabel', InputType: 'file', Id:'5'},
        { etiqueta: 'Requsitos', LabelType: 'FormLabel', InputType: 'text', Id:'6'},
        { etiqueta: 'Premios', LabelType: 'FormLabel', InputType: 'text', Id:'7'},
        { etiqueta: 'Patrocinadores', LabelType: 'FormLabel', InputType: 'text', Id:'8'},
        { etiqueta: 'Contactos', LabelType: 'FormLabel', InputType: 'text', Id:'9'},
      ];
      

    return (
      <div className="CreateEventContent vistaContent w3-right">
        <h1 className="H1CreateEvent">Crear Evento</h1>
        <div className="CreateEventSection">
          <CreateEventSection campos={campos}/>
        </div>
      </div>
    );
  }
  
  export default CreateEvent;
