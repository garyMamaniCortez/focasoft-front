import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import './CreateEvent.css'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";


const EditEvent = () => {
    const { id } = useParams();

    const [evento, setEvento] = useState( null );

    const getEvent = async () => {
        console.log(id)
        const response = await axios.get("http://localhost:8000/api/evento/"+id)
        setEvento(response.data)
    }

        useEffect(()=>{
        getEvent()
        console.log(evento);

    },[])
    
      
    return (
      <div className="CreateEventContent vistaContent w3-right">
        <h1 className="H1CreateEvent">Editar Evento</h1>
        <div className="CreateEventSection">
          <CreateEventSection accion={"editar"} evento={evento}/>
        </div>
      </div>
    );
  }
  
  export default EditEvent;