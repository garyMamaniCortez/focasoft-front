import React, { useState } from 'react';
import Modal from 'react-modal';
import './modalPatrodinador.css'
import Boton from '../../atoms/boton/Boton'
import 'w3-css'
import axiosInterceptorInstance from '../../../axios/interceptor';
import swal from 'sweetalert';
import { ENDPOINTS } from '../../../Constants/endpoinst';

const ModalRegistroPatrocinador = ({ isOpen, closeModal }) => {
  const [nombre, setNombre] = useState('');
  const [pagina, setPagina] = useState('');
  const [logo, setLogo] = useState('');

  const handleChangeLogo = (event) => {
    
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      const base64String = reader.result.split(",")[1];
      setLogo(base64String)      
    };

    reader.readAsDataURL(file);
  
};

  const handleGuardar = () => {
    axiosInterceptorInstance
          .post(ENDPOINTS.registrarPatrocinador, {
            'nombre': nombre,
            'pagina_web': pagina,
            'logo': logo
          })
          .then(function (response) {
            swal({ icon: "success", text: "Patrocinador registrado" });
          })
          .catch(function (error) {
            console.log(error.response.data.error);
            swal({ icon: "error", text: error.response.data.error });
          });
    setNombre('');
    closeModal();

  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Registrar Patrocinador"
    >
      <h2>Registrar Patrocinador</h2>
      <label htmlFor="nombre">Nombre del patrocinador:</label>
      <br />
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <label htmlFor="pagina">Pagina web del patrocinador:</label>
      <br />
      <input
        type="text"
        id="pagina"
        value={pagina}
        onChange={(e) => setPagina(e.target.value)}
      />
      <br />
      <label htmlFor="logo">Logo del patrocinador:</label>
      <br />
      <input
        type="file"
        id="logo"
        onChange={handleChangeLogo}
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

export default ModalRegistroPatrocinador;