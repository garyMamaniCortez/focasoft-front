import React from "react";
import CardSectionEventoPasado from "../../organisms/EventoPasadoCard/CardSectionEventoPasado";
import "./vistaEventos.css";
function EventosPasados() {
  return (
    <div className="vistaContent w3-right">
      <div className="w3-row titulo-buscador">
        <div className="w3-col l3">
          <h1 className="TituloDeSeccion">Eventos pasados</h1>
        </div>
      </div>
      <div className="tituloSeccion w3-col l12"></div>
      <CardSectionEventoPasado visible="invisible"></CardSectionEventoPasado>
    </div>
  );
}
export default EventosPasados;
