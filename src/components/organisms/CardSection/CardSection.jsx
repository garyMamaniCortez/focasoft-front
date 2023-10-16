import Card from "../../molecules/card/Card";
import 'w3-css/w3.css';
import "./cardSection.css"
import axios from "axios"

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { async } from "q";
import { useState } from "react";


const endpoint = 'http:///localhost:8000/api'

function CardSection(){
    const [eventos, setEventos] = useState( [] );
    useEffect(()=>{
        getAllEvents()
    },[])

    const getAllEvents = async () => {
        const response = await axios.get("http://localhost:8000/api/eventos")
        setEventos(response.data)
    }

    return(
        <div className="cardSectionContent">
            <h2 className="cardSTi">Eventos</h2>
            <div className="w3-row cards">
                {
                eventos.map( ( evento ) => (

                    <div className="w3-col l6 m6 card" key={evento.id}>
                    <Card 
                        category={evento.tipo}
                        title={evento.titulo} 
                        date={evento.fecha_ini}
                        description={evento.descripcion}
                        src="https://www.umss.edu.bo/wp-content/uploads/2023/03/ICPC-Bolivia-Regionals-2022-afiche.png">
    
                    </Card>
                    </div>

                ))
                }
                
            </div>

        </div>
    )
}
export default CardSection;