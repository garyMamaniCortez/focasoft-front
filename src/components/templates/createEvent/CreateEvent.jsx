import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import './CreateEvent.css'
const CreateEvent = () => {

    const campos = [
        { etiqueta: 'TItulo del evento', LabelType: 'FormLabel', InputType: 'text', Select: false },
        { etiqueta: 'Fecha del evento', LabelType: 'FormLabel', InputType: 'date', Select: false  },
        { etiqueta: 'Tipo del evento', LabelType: 'FormLabel', InputType: 'text', Select: true  },
        { etiqueta: 'Descripcion', LabelType: 'FormLabel', InputType: 'description', Select: false  },
        { etiqueta: 'Afiche del evento', LabelType: 'FormLabel', InputType: 'text', Select: false  },
        { etiqueta: 'Requsitos', LabelType: 'FormLabel', InputType: 'text', Select: false  },
        { etiqueta: 'Premios', LabelType: 'FormLabel', InputType: 'text'  },
        { etiqueta: 'Patrocinadores', LabelType: 'FormLabel', InputType: 'text', Select: false  },
        { etiqueta: 'Contactos', LabelType: 'FormLabel', InputType: 'text', Select: 'false'},
      ];
      

    return (
      <div>
        <h1 className="H1CreateEvent">Crear Evento</h1>
        <div className="row">
          <div className="col-4">

          </div>
          <div className="col-8">
                  <CreateEventSection campos={campos}/>

          </div>
        </div>
      </div>
    );
  }
  
  export default CreateEvent;
