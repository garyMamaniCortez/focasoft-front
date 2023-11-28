import React from "react";
import CardSection from "../../organisms/CardSection/CardSection";
import InputBuscar from "../../atoms/inputBuscar/InputBuscar"
import Boton from "../../atoms/boton/Boton";
import { Link, useNavigate } from "react-router-dom";
import "./vistaEventos.css"
function VistaEventosAdmin(){
    return(
        <div className="vistaContent w3-right">
            <div className="w3-row titulo-buscador">
                <div className="w3-col l3">
                    <h1 className="TituloDeSeccion">Eventos</h1>
                </div>
            </div>
            <div className="tituloSeccion w3-col l12">
                <div className="botones w3-center w3-row" >
                    <div className="botonesContent">
                            <div className="boton w3-col l4">
                                <Link to="/CrearEvento">
                                    <Boton ClaseDeBoton={"botonAmarilloGrand"} TipoDeBoton={"button"}>Crear evento</Boton>
                                </Link>
                            
                            </div>
                            <div className="boton w3-col l4">
                            <Boton ClaseDeBoton={"botonAmarilloGrand"} TipoDeBoton={"button"}>Promocionar evento</Boton>
                            </div>
                            <div className="boton w3-col l4">
                            <Boton ClaseDeBoton={"botonAmarilloGrand"} TipoDeBoton={"button"}>Generar reporte</Boton>
                            </div>
                    </div>
                </div>
            </div> 
            
            <CardSection visible="botonRegistro" invisible="invisible"></CardSection>
            
        </div>
    )
}
export default VistaEventosAdmin;