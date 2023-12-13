import Informacion from "../../organisms/Evento/Evento";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import "./Evento.css"
import ReclutamientoIm from "../../icons/reclutamiento.png"
import EntrenamientoIm from "../../icons/entrenamiento.png"
import CompetenciaIm from "../../icons/competencia.png"
import subirGanadores from "../../icons/iconoarchivo.png"
import { Link } from "react-router-dom";
import axiosInterceptorInstance from '../../../axios/interceptor'
import { ENDPOINTS } from "../../../Constants/endpoinst";
import Modal from "react-modal";
import Boton from "../../atoms/boton/Boton";

const AdminEvento = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState({});
  const [eventoCargado, setEventoCargado] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false); 
  const [archivosubido, setArchivosubido] = useState(null);
  
  const obtenerArchivo = (e) => {
    const archivo = e.target.files[0];
    setArchivosubido(archivo);
  };

  const handleOpenModal = () => {
    setModalAbierto(true);
  }

  const handleCloseModal = () => {
    setModalAbierto(false);
  }

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await axiosInterceptorInstance.get(ENDPOINTS.obtenerEvento+id);
        setEvento(response.data);
        setEventoCargado(true); // Marcar el evento como cargado
      } catch (error) {
        console.error('Error al obtener el evento:', error);
      }
    }    
    getEvent();
  }, [id]);  

  const subirExcel = async () => {
    try {
      const formData = new FormData();
      formData.append('excel', setArchivosubido);
      formData.append('id_evento', id);
      await axiosInterceptorInstance.post(ENDPOINTS.subirGanadores, formData);
      handleCloseModal();
    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  }
  
  const Datos = 
    {
      TituloDelEvento: evento.titulo,
      Tipo: evento.tipo,
      Descripcion: evento.descripcion,
      FechaDelEvento: evento.fecha_ini,
      Premios: evento.premios,
      Requisitos: evento.requisitos,
      Afiche: evento.afiche==null ?  ((evento.tipo == "Reclutamiento" ? ReclutamientoIm : (evento.tipo == "Taller de entrenamiento" ? EntrenamientoIm : CompetenciaIm) )): "http://"+(evento.afiche),
      Contactos: evento.contactos,
      Formulario: evento.id_formulario
    }
  

  return (
    <div className="vistaContent w3-right">
      <h1 className="TituloDeSeccion">Información del evento</h1>
      <div className="optionsAdmin">
          <div className="barra w3-bar">
            <ul>
              <li className="w3-bar-item w3-button"><Link to={"/EditarEvento/"+id}>Modificar evento</Link></li>
              <li  className="w3-bar-item w3-button"><Link to={"/AgregarFormulario/"+id}>Agregar formulario</Link></li>
              <li  className="w3-bar-item w3-button" ><button className="botoncito" onClick={handleOpenModal}>Agregar ganadores</button></li>
              <li  className="w3-bar-item w3-button"><Link to={""}>Reporte</Link></li>
              <li  className="w3-bar-item w3-button"><Link to={"/Patrocinadores/"+id}>Patrocinadores</Link></li>
              <li  className={evento.id_formulario === null ? 'invisible' : "w3-bar-item w3-button" }><Link to={"/Participantes/"+evento.titulo+"/"+evento.id_formulario+"/"+id}>Participantes</Link></li>
            </ul>
          </div>
      </div>

    
        <Modal
          isOpen={modalAbierto}
          onRequestClose={handleCloseModal}
          contentLabel="subirGanadores"
          className="Modal">   
            <div className="ModalContent">         
                <h2>Insertar archivo de ganadores</h2>
              
                <div className="ModalBody">
                  <form id="formularioArchivo">
                    <input className="ingresoArchivo" type="file" 
                    id="file" 
                    name="file"
                    onChange={obtenerArchivo}/>
                    <label for="file" id="subirganador">                    
                      <img src={subirGanadores} alt="click para subir archivo" id="imgarchivo"/>
                      <span>{archivosubido ? archivosubido.name : "haga click para subir un archivo"}</span>
                    </label>                                                              
                    <Boton ClaseDeBoton="botonAmarilloPeq" tipo="submit" f={subirExcel}>Subir</Boton>
                  </form>
                </div>
                <div className="modalFooter">
                  <Boton ClaseDeBoton="botonAzulPequeño" f={handleCloseModal}>Cancelar</Boton>                  
                </div>
             </div>
          </Modal>
      
      <div className="CentrarSeccion">              
        <Informacion Datos={Datos}/>
      </div>
    </div>
  );
};

export default AdminEvento;
