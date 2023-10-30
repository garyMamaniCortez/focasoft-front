import Fondo from "../../atoms/background/Background";
import Etiqueta from "../../atoms/label/Label";
import Afiche from "../../atoms/afiche/Afiche";
import Boton from "../../atoms/boton/Boton";

import "./Evento.css";

const Evento = (props) => {
  console.log(props.Datos.Afiche);
  return (
    <Fondo Tipo="FondoEvento">
      <div className="w3-row">
        <div className="w3-col l7 ContenedoresAtributo">
          <div className="ContenderTituloEvento09">
            <Etiqueta TipoDeEtiqueta="FormTitle">
              Competencia de clasificaion umss
            </Etiqueta>
          </div>
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">
              Tipo de evento: {props.Datos.TituloDelEvento}{" "}
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

            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Premios}
            </Etiqueta>
          </Fondo>
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Requisitos:</Etiqueta>
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Requisitos}
            </Etiqueta>
          </Fondo>
        </div>
        <div className="w3-col l5">
          <Fondo Tipo="FondoAtributo2">
            <Afiche src={props.Datos.Afiche}></Afiche>
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo2">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Contacto:</Etiqueta>
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Contactos}
            </Etiqueta>
          </Fondo>
          <div className="ContenderBoton09">
            <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="Button">
              Registrarse
            </Boton>
          </div>
        </div>
      </div>
    </Fondo>
  );
};

export default Evento;
