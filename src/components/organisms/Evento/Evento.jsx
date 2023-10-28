import Fondo from "../../atoms/background/Background";
import Etiqueta from "../../atoms/label/Label";
import Afiche from "../../atoms/afiche/Afiche";
import Boton from "../../atoms/boton/Boton"

import "./Evento.css";

const Evento = (props) => {
  console.log(props.Datos.Afiche)
  return (
    <Fondo Tipo="FondoEvento">
      <div className="w3-row">
        <div className="w3-col l7">
          <Etiqueta TipoDeEtiqueta="FormTitle">
            Competencia de clasificaion umss
          </Etiqueta>
          <Fondo className="ContenedoresAtributo" Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">
              Tipo de evento: {props.Datos.TituloDelEvento}{" "}
            </Etiqueta>
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Descripcion:</Etiqueta>
            <br />
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Descripcion}
            </Etiqueta>
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Fecha:</Etiqueta>
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">
              {props.Datos.FechaDelEvento}
            </Etiqueta>
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Premios:</Etiqueta>
            <br />
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Premios}
            </Etiqueta>
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Requisitos:</Etiqueta>
            <br />
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Requisitos}
            </Etiqueta>
          </Fondo>
          <br />
        </div>
        <div className="w3-col l5">
          <Fondo Tipo="FondoAtributo2">
            <Afiche src={props.Datos.Afiche}></Afiche>
            
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo2">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Contacto:</Etiqueta>
            <br />
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Contactos}
            </Etiqueta>
          </Fondo>
          <div className="ContenderBoton09">
          <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="Button">Registrarse</Boton>
          </div>
        </div>
      </div>
    </Fondo>
  );
};

export default Evento;
