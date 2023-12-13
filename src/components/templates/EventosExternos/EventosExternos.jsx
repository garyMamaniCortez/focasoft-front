import React from "react";
import CardSectionEventoExterno from "../../organisms/EventoExternoCard/CardSectionEventoExterno";
import "./vistaEventos.css";
function EventosExternos() {
  return (
    <div className="vistaContent w3-right">
      <div className="w3-row titulo-buscador">
        <div className="w3-col l3">
          <h1 className="TituloDeSeccion">Eventos externos</h1>
        </div>
      </div>
      <div className="tituloSeccion w3-col l12"></div>
      <CardSectionEventoExterno visible="invisible"></CardSectionEventoExterno>
    </div>
  );
}
export default EventosExternos;
