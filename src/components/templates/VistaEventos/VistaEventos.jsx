import React from "react";
import CardSection from "../../organisms/CardSection/CardSection";
import "./vistaEventos.css";
function VistaEventos() {
  return (
    <div className="vistaContent w3-right">
      <div className="w3-row titulo-buscador">
        <div className="w3-col l3">
          <h1 className="TituloDeSeccion">Eventos</h1>
        </div>
      </div>
      <div className="tituloSeccion w3-col l12"></div>
      <CardSection visible="invisible"></CardSection>
    </div>
  );
}
export default VistaEventos;
