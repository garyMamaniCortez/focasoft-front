import Fondo from "../../atoms/background/Background";
import Etiqueta from "../../atoms/label/Label";
import Afiche from "../../atoms/afiche/Afiche";

const Evento = (props) => {
  return (
    <Fondo Tipo="FondoEvento">
      <div className="w3-row">
        <div className="w3-col l6">
          <Etiqueta TipoDeEtiqueta="FormTitle">
            Competencia de clasificaion umss
          </Etiqueta>
          <Fondo Tipo="FondoAtributo">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">
              Tipo de evento: {props.Datos.TituloDelEvento}{" "}
            </Etiqueta>
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Descripcion:</Etiqueta>
            <br />
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Descripcion}
            </Etiqueta>
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Fecha:</Etiqueta>
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">
              {props.Datos.FechaDelEvento}
            </Etiqueta>
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Premios:</Etiqueta>
            <br />
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Premios}
            </Etiqueta>
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Requisitos:</Etiqueta>
            <br />
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Requisitos}
            </Etiqueta>
          </Fondo>
          <br />
        </div>
        <div className="w3-col l6">
          <Fondo Tipo="FondoAtributo">
          <Afiche></Afiche>
          </Fondo>
          <br />
          <Fondo Tipo="FondoAtributo">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Contacto:</Etiqueta>
            <br />
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Contactos}
            </Etiqueta>
          </Fondo>
        </div>
      </div>
    </Fondo>
  );
};

export default Evento;
