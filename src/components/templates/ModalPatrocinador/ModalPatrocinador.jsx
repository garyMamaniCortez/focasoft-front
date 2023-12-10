import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalRegistroPatrocinador = ({ isOpen, closeModal, onGuardar }) => {
  const [nombre, setNombre] = useState('');

  const handleGuardar = () => {
    onGuardar(nombre);
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
      <label htmlFor="nombre">Nombre del Patrocinador:</label>
      <br />
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <div>
      <button onClick={handleGuardar}>Guardar</button>
      <button onClick={closeModal}>Cancelar</button>
      </div>
    </Modal>
  );
};

export default ModalRegistroPatrocinador;