import React, { useState } from 'react';
import Boton from '../boton/Boton';

import './TextInputDinamic.css';

const TextInputDinamic = ({disabled,hidden}) => {
  const [datos, setDatos] = useState([]);
  const [nuevoDato, setNuevoDato] = useState('');

  const agregarDato = () => {
    if (nuevoDato.trim() !== '') {
      // Agregar el nuevo dato al estado de datos
      setDatos([...datos, nuevoDato]);
      // Limpiar el campo de entrada
      setNuevoDato('');
    }
  };

  // Eliminar un dato de la lista
  const eliminarDato = (indice) => {
    // Crear una copia del estado de datos
    const copiaDatos = [...datos];
    // Eliminar el dato en el índice dado
    copiaDatos.splice(indice, 1);
    // Actualizar el estado de datos
    setDatos(copiaDatos);
  };

  return (
    <div disabled={disabled}
    hidden={hidden}  className='w3-margin-top'>
      <div>
        <input
          type="text"
          value={nuevoDato}
          onChange={(e) => setNuevoDato(e.target.value)}/>
        <Boton f={agregarDato} ClaseDeBoton="botonGris" >+</Boton>
        <Boton f={eliminarDato} ClaseDeBoton="botonGris">-</Boton>
      </div>
      <div>
        <ul>
          {datos.map((dato, index) => (
            <li key={index}>{dato}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextInputDinamic;