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
import CompetenciaIm from "../../icons/competencia.png"
import ReclutamientoIm from "../../icons/reclutamiento.png"
import EntrenamientoIm from "../../icons/entrenamiento.png"
import axiosInterceptorInstance from "../../../axios/interceptor";
import { ENDPOINTS } from "../../../Constants/endpoinst";

function CardSectionEventoExterno(props){
    const [eventos, setEventos] = useState( [] );

    useEffect(()=>{
        getEventosExternos()
    },[])

    const getEventosExternos = async () => {
        const response = await axiosInterceptorInstance.get(ENDPOINTS.obtenerEventosExternos)
        setEventos(response.data)
    }

    const getImagen = async (urlImagen) => {
        const response = await axios.get("http://"+urlImagen)
        console.log(response)
        return(response.data)
    }  

    return(
        <div className="cardSectionContent">
            
            <div className="w3-row cards">
                {
                eventos.map( ( evento ) => (
                    
                    <div className="w3-col l6 m6 card" key={evento.id} >
                    <Card 
                        idEvento={evento.id}
                        category={''}
                        url={evento.url}
                        title={evento.titulo} 
                        date={evento.fecha_ini}
                        description={evento.descripcion}
                        Class={evento.afiche==null ? "esIcono" : null}
                        src={evento.afiche==null ?  ((evento.tipo == "Reclutamiento" ? ReclutamientoIm : (evento.tipo == "Taller de entrenamiento" ? EntrenamientoIm : CompetenciaIm) )): "http://"+(evento.afiche)}
                        idFormulario={evento.id_formulario}
                        /*</Link>aficheDiv={evento.afiche==null ? "invisible" : ""}*/
                        
                        botonEditar={(props.visible=="invisible") ? "invisible" : "botonRegistro"}
                        claseDiv={(evento.id_formulario==null || props.invisible=="invisible") ? "invisible" :"botonRegistro"}
                        >
                        
                    </Card>
                    </div>

                )
                )
                }
                
            </div>

        </div>
    )
}
export default CardSectionEventoExterno;