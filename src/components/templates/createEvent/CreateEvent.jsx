import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import './CreateEvent.css'
const CreateEvent = () => {
      
    return (
      <div className="CreateEventContent vistaContent w3-right">
        <h1 className="H1CreateEvent">Crear Evento</h1>
        <div className="CreateEventSection">
          <CreateEventSection/>
        </div>
      </div>
    );
  }
  
  export default CreateEvent;
