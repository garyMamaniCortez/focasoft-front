import React from "react";
import CardSection from "../../organisms/CardSection/CardSection";
import InputBuscar from "../../atoms/inputBuscar/InputBuscar"
import "./vistaEventos.css"
function VistaEventos(){
    return(
        <div className="vistaContent w3-right">
            <div className="w3-row titulo-buscador">
                <div className="w3-col l3">
                    <h1>Eventos pasados</h1>
                </div>
                
                <div className="buscarSide w3-col l3 w3-right">
                    <InputBuscar text="Buscar evento"></InputBuscar>
                </div>
            </div>
            <CardSection></CardSection>
            
        </div>
    )
}
export default VistaEventos;