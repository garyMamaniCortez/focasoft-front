import Card from "../../molecules/card/Card";
import 'w3-css/w3.css';
import "./cardSection.css"
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
import { ENDPOINTS } from '../../../Constants/endpoinst'

function CardSection(props){
    const [eventos, setEventos] = useState( [] );
    const [nombreEvento, setNombre] = useState("");

    useEffect(()=>{
        getAllEvents()
    },[])

    const getAllEvents = async () => {
        const response = await axiosInterceptorInstance.get(ENDPOINTS.obtenerEventos)
        setEventos(response.data)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
          setNombre(value)
          console.log(nombreEvento)

      };
      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const response = axiosInterceptorInstance.post(ENDPOINTS.buscarEvento ,{
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

            
            <div className="w3-row cards">
                {
                eventos.map( ( evento ) => (
                    
                    <div className="w3-col l6 m6 card" key={evento.id} >
                    <Link to={props.visible=="invisible" ? ("/Evento/" + evento.id) : "/admin/Evento/"+evento.id} style={{textDecoration: 'none'}}>
                    <Card 
                        idEvento={evento.id}
                        category={evento.tipo}
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