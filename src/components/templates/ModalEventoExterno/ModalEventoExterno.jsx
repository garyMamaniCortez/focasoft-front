import React, { useState } from 'react';
import Modal from 'react-modal';
import './modalPatrodinador.css'
import Boton from '../../atoms/boton/Boton'
import 'w3-css'
import axiosInterceptorInstance from '../../../axios/interceptor';
import swal from 'sweetalert';
import { ENDPOINTS } from '../../../Constants/endpoinst';

const ModalEventoExterno = ({ isOpen, closeModal }) => {
  const [nombre, setNombre] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [descripcion, setDescripcion] = useState(null);
  const [afiche, setAfiche] = useState();
  const [url, setUrl] = useState(null)

  const handleChangeAfiche = (event) => {
    
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function () {
        const base64String = reader.result.split(",")[1];
        setAfiche(base64String)      
      };

      reader.readAsDataURL(file);
    
  };

  const handleGuardar = () => {
    axiosInterceptorInstance
          .post(ENDPOINTS.registrarEventoExterno, {
            titulo: nombre,
            fecha_ini: fecha,
            descripcion: descripcion,
            afiche: afiche,
            url: url
          })
          .then(function (response) {
            swal({ icon: "success", text: "Evento externo registrado" });
          })
          .catch(function (error) {
            console.log(error.response.data.error);
            swal({ icon: "error", text: error.response.data.error });
          });
    setNombre('');
    setFecha('');
    setDescripcion('');
    setAfiche('');
    setUrl('');
    closeModal();

  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Registrar Patrocinador"
    >
      <h2>Promocionar evento externo</h2>
      <label htmlFor="nombre">Titulo del evento</label>
      <br />
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <label htmlFor="fecha">Fecha del evento</label>
      <br />
      <input
        type="date"
        id="fecha"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <br />
      <label htmlFor="fecha">Descripción del evento</label>
      <br />
      <input
        type="text"
        id="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <br />
      <label htmlFor="url">URL del evento</label>
      <br />
      <input
        type="text"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <br />
      <label htmlFor="afiche">Afiche del evento</label>
      <br />
      <input
        type="file"
        id="afiche"
        onChange={handleChangeAfiche}
      />
      <div className='botones w3-row'>
        <div className='botonDiv w3-col l6'>
          <Boton ClaseDeBoton='botonRojoPeq' f={closeModal}>Cancelar </Boton>
        </div>
        <div className='botonDiv w3-col l6'>
          <Boton ClaseDeBoton='botonAmarilloPeq' f={handleGuardar}>Guardar </Boton>
        </div>
      </div>
    </Modal>
  );
};

export default ModalEventoExterno;