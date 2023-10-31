import Card from "../../molecules/card/Card";
import 'w3-css/w3.css';
import "./cardSection.css"
import axios from "axios"

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { async } from "q";
import { useState } from "react";
import Boton from "../../atoms/boton/Boton"
import InputBuscar from "../../atoms/inputBuscar/InputBuscar";


const endpoint = 'http:///localhost:8000/api'

function CardSection(props){
    const [eventos, setEventos] = useState( [] );
    const [nombreEvento, setNombre] = useState("");

    useEffect(()=>{
        getAllEvents()
    },[])

    const getAllEvents = async () => {
        const response = await axios.get("http://localhost:8000/api/eventos")
        setEventos(response.data)
    }

    const getImagen = async (urlImagen) => {
        const response = await axios.get("http://"+urlImagen)
        console.log(response)
        return(response.data)
    }  

    const handleChange = (event) => {
        const { name, value } = event.target;
          setNombre(value)
          console.log(nombreEvento)

      };
      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const response = axios.post("http://localhost:8000/api/evento/buscar" ,{
                busqueda: nombreEvento
            }).then(function (response) {
                console.log(response);
                setEventos(response.data)
              })
              .catch(function (error) {
                console.log(error.response.data.error);
                alert(error.response.data.error);
              });            
        }
      }




    return(
        <div className="cardSectionContent">
            <div className="buscarSide w3-col l3 w3-right">
                    <InputBuscar text="Buscar evento" Modificar={handleChange} TeclaPresionada={handleKeyPress}></InputBuscar>
            </div>
            
            <div className="tituloSeccion w3-col l12">
            <h2 className="cardSTi">Eventos</h2>
            </div>
            
            
            <div className="w3-row cards">
                {
                eventos.map( ( evento ) => (
                    
                    <div className="w3-col l6 m6 card" key={evento.id} >
                    <Link to={"/Evento/" + evento.id} style={{textDecoration: 'none'}}>
                    <Card 
                        idEvento={evento.id}
                        category={evento.tipo}
                        title={evento.titulo} 
                        date={evento.fecha_ini}
                        description={evento.descripcion}
                        src={"http://"+(evento.afiche)}
                        idFormulario={evento.id_formulario}
                        aficheDiv={evento.afiche==null ? "invisible" : ""}
                        botonEditar={(props.visible=="invisible") ? "invisible" : "botonRegistro"}
                        claseDiv={(evento.id_formulario==null || props.invisible=="invisible") ? "invisible" :"botonRegistro"}
                        >
                        
                    </Card>
                    </Link>
                    </div>

                )
                )
                }
                
            </div>

        </div>
    )
}
export default CardSection;