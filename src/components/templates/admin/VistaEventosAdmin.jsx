import React from "react";
import CardSection from "../../organisms/CardSection/CardSection";
import InputBuscar from "../../atoms/inputBuscar/InputBuscar"
import Boton from "../../atoms/boton/Boton";
import ModalRegistroPatrocinador from "../ModalPatrocinador/ModalPatrocinador";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalEventoExterno from "../ModalEventoExterno/ModalEventoExterno";
import "./vistaEventos.css"
function VistaEventosAdmin(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);

const abrirModal = () => setModalIsOpen(true);
const abrirModal2 = () => setModalIsOpen2(true);
const cerrarModal = () => setModalIsOpen(false);
const cerrarModal2 = () => setModalIsOpen2(false);

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
                                    <Boton ClaseDeBoton={"botonAmarilloPeq"} TipoDeBoton={"button"}>Crear evento</Boton>
                                </Link>
                            
                            </div>
                            <div className="boton w3-col l4">
                            <Boton ClaseDeBoton={"botonAmarilloPeq"} TipoDeBoton={"button"} f={abrirModal2}>Promocionar evento</Boton>
                            <ModalEventoExterno
                                isOpen={modalIsOpen2}
                                closeModal={cerrarModal2}
                            />
                                
                            </div>
                            <div className="boton w3-col l4">
                            <Boton ClaseDeBoton={"botonAmarilloPeq"} TipoDeBoton={"button"} f={abrirModal}>Registrar patrocinador</Boton>
                            <ModalRegistroPatrocinador
                                isOpen={modalIsOpen}
                                closeModal={cerrarModal}
                            />
                            </div>
                    </div>
                </div>
            </div> 
            
            <CardSection visible="botonRegistro" invisible="invisible"></CardSection>
            
        </div>
    )
}
export default VistaEventosAdmin;