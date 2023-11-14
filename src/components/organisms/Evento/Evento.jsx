import Fondo from "../../atoms/background/Background";
import Etiqueta from "../../atoms/label/Label";
import Afiche from "../../atoms/afiche/Afiche";
import Boton from "../../atoms/boton/Boton";
import { Link } from "react-router-dom";

import "./Evento.css";

const Evento = (props) => {
  console.log(props.Datos.Afiche);
  let idFormulario= "/RegistrarParticipante/"+props.Datos.Formulario+"/"+props.Datos.TituloDelEvento;
  return (
    <Fondo Tipo="FondoEvento">
      <div className="w3-row">
        <div className="w3-col l7 ContenedoresAtributo">
          <div className="ContenderTituloEvento09">
            <Etiqueta TipoDeEtiqueta="FormTitle">
              {props.Datos.TituloDelEvento}
            </Etiqueta>
          </div>
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">
              Tipo de evento: {props.Datos.Tipo}{" "}
            </Etiqueta>
          </Fondo>
          <Fondo Tipo="FondoAtributo1">
            <div>
              {" "}
              <Etiqueta TipoDeEtiqueta="AtributoEvento1">Descripcion:</Etiqueta>
            </div>
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Descripcion}
            </Etiqueta>
          </Fondo>
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Fecha:</Etiqueta>
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">
              {props.Datos.FechaDelEvento}
            </Etiqueta>
          </Fondo>
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Premios:</Etiqueta>
            <br/>

            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Premios}
            </Etiqueta>
          </Fondo>
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Requisitos:</Etiqueta>
            <br/>
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Requisitos}
            </Etiqueta>
          </Fondo>
        </div>
        <div className="w3-col l5">
          <Fondo Tipo="FondoAtributo2">
            <Afiche src={props.Datos.Afiche} Class="normal"></Afiche>
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo2">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Contacto:</Etiqueta>
            <br/>
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Contactos}
            </Etiqueta>
          </Fondo>
          <div className={(props.Datos.Formulario==null) ? "invisible":"ContenderBoton09"}>
            <Link to={idFormulario}>
                <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="Button">
                Registrarse
                </Boton>
            </Link>
          </div>
        </div>
      </div>
    </Fondo>
  );
};

export default Evento;
