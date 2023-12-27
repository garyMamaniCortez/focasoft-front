import Fondo from "../../atoms/background/Background";
import Etiqueta from "../../atoms/label/Label";
import Afiche from "../../atoms/afiche/Afiche";
import Boton from "../../atoms/boton/Boton";
import { Link } from "react-router-dom";
import "./Evento.css";
import { useEffect, useState } from "react";

const Evento = (props) => {

  console.log(props.Datos.Afiche);
  const [premios,setPremios] = useState([]);
  const [requisitos,setRequisitos] = useState([]);
  const [contactos,setContactos] = useState([]);
  const [patrocinadores, setpatrocinadores] = useState([]);
  console.log(contactos)
  let idFormulario =
    "/RegistrarParticipante/" +
    props.Datos.Formulario +
    "/" +
    props.Datos.TituloDelEvento;

    useEffect(() => {
      const ponerArrays=()=>{
        if(props.Datos.Premios!= null){
          setPremios(props.Datos.Premios)
        }
        if(props.Datos.Requisitos!= null){
          setRequisitos(props.Datos.Requisitos)
        }
        if(props.Datos.Contactos!= null){
          setContactos(props.Datos.Contactos)
        }
        if(props.Datos.Patrocinadores!= null){
          setpatrocinadores(props.Datos.Patrocinadores)
        }
      }
      ponerArrays();
    }, [props.Datos]);
    console.log(premios)
    console.log(requisitos)
    console.log(props.Datos)

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
              Tipo de evento: {props.Datos.Tipo}
              <br />
              Fecha del evento: {props.Datos.FechaDelEvento} 
            </Etiqueta>
          </Fondo>
          <Fondo Tipo="FondoAtributo1">
            <div>
              <Etiqueta TipoDeEtiqueta="AtributoEvento1">Descripción:</Etiqueta>
            </div>
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
              {props.Datos.Descripcion}
            </Etiqueta>
          </Fondo>

          <div className={`${
              props.Datos.Premios === " "
                ? "invisible"
                : props.Datos.Premios === null
                ? "invisible"
                : props.Datos.Premios
            }`}> 
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Premios:</Etiqueta>
            <br />
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
            {premios.map((c)=>{
                  return (<div className="premios">- {c}</div>)
                })}
            </Etiqueta>
          </Fondo></div>
          <div className={`${
              props.Datos.Requisitos === " "
                ? "invisible"
                : props.Datos.Requisitos === null
                ? "invisible"
                : props.Datos.Requisitos
            }`}>
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Requisitos:</Etiqueta>
            <br />
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
            {requisitos.map((c)=>{
                  return (<div className="requisitos">- {c}</div>)
                })}
            </Etiqueta>
          </Fondo>
          </div>

          <div className={`${
              props.Datos.Patrocinadores === " "
                ? "invisible"
                : props.Datos.Patrocinadores == null
                ? "invisible"
                : props.Datos.Requisitos
            }`}>
          <Fondo Tipo="FondoAtributo1">
            <Etiqueta TipoDeEtiqueta="AtributoEvento1">Patrocinadores:</Etiqueta>
            <br />
            <Etiqueta TipoDeEtiqueta="AtributoEvento2">
            {patrocinadores.map((c)=>{
                  return (<div className="requisitos">- {c}</div>)
                })}
            </Etiqueta>
          </Fondo>
          </div>
        </div>
        <div className="w3-col l5">
          <div className={`${
              props.Datos.Afiche === " "
                ? "invisible"
                : props.Datos.Afiche === "http://null"
                ? "invisible"
                : props.Datos.Afiche
            }`}>
          <Fondo Tipo="FondoAtributo2">
            <Afiche src={props.Datos.Afiche} Class={"imagenGrande"}></Afiche>
          </Fondo></div>
          <br />
          <div
            className={`${
              props.Datos.Contactos === " "
                ? "invisible"
                : props.Datos.Contactos === null
                ? "invisible"
                : props.Datos.Contactos
            }`}
          >
            <Fondo Tipo="FondoAtributo2">
              <Etiqueta TipoDeEtiqueta="AtributoEvento1">Contactos:</Etiqueta>
              <br />
              <Etiqueta TipoDeEtiqueta="AtributoEvento2">
                {contactos.map((c)=>{
                  return (<div className="contactos">- {c}</div>)
                })}
              </Etiqueta>
            </Fondo>
          </div>
          <div
            className={
              props.Datos.Formulario == null ? "invisible" : "ContenderBoton09"
            }
          >
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
