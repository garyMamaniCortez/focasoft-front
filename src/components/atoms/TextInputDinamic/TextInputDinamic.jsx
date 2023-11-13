import React, { useState } from 'react';

const TextInputDinamic = () => {
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

  return (
    <div>
      <div>
        <label>Nuevo Dato:</label>
        <input
          type="text"
          value={nuevoDato}
          onChange={(e) => setNuevoDato(e.target.value)}
        />
        <button onClick={agregarDato}>Agregar</button>
      </div>
      <div>
        <h2>Lista de Datos:</h2>
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