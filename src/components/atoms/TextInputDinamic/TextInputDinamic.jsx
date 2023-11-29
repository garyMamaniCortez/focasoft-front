import React, { useEffect, useState } from 'react';
import Boton from '../boton/Boton';

import './TextInputDinamic.css';

const TextInputDinamic = ({disabled,hidden,agregar,remover,lista}) => {
  const [nuevoDato, setNuevoDato] = useState('');
  
  const handleChange = (event) => {
    setNuevoDato(event.target.value);
  };

  const handleAgregar = () => {
    if(nuevoDato !== ''){
      agregar(nuevoDato);
      setNuevoDato('');
    }
  }

  const handleQuitar = () => {
    remover();
  }
  
  return (
    <div disabled={disabled}
    hidden={hidden}> 
        <input
          type="text"
          value={nuevoDato}
          onChange={handleChange}
          />
        <Boton f={handleAgregar} ClaseDeBoton="botonGris" TipoDeBoton="button" >+</Boton>
        <Boton f={handleQuitar} ClaseDeBoton="botonGris" TipoDeBoton="button">-</Boton>
      
        <ul>
          {lista.map((dato, index) => (
            <li key={index}>{dato}</li>
          ))}
        </ul>      
    </div>
  );
};

export default TextInputDinamic;