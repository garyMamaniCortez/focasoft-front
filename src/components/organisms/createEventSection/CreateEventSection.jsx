import { Link } from "react-router-dom";
import { useState } from "react";

import Formulario from "../../molecules/formulario/Formulario.jsx";
import Boton from "../../atoms/boton/Boton.jsx"
import Background from "../../atoms/background/Background.jsx"; 

const CreateEventSection = () => {

  const CamposDeEntrada = [
    { Etiqueta: 'TItulo del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'TituloDelEvento'},
    { Etiqueta: 'Fecha del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'date', Identificador:'FechaDelEvento'},
    { Etiqueta: 'Tipo del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'select', Identificador:'TipoDelEvento'},
    { Etiqueta: 'Descripcion', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'description', Identificador:'Descripcion'},
    { Etiqueta: 'Afiche del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'file', Identificador:'AficheDelEvento'},
    { Etiqueta: 'Requsitos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Requisitos'},
    { Etiqueta: 'Premios', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Premios'},
    { Etiqueta: 'Patrocinadores', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Patrocinadores'},
    { Etiqueta: 'Contactos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Contactos'},
  ];

  const [formData, setFormData] = useState({TituloDelEvento: "",FechaDelEvento: "", TipoDelEvento: ""
  , Descripcion: "",AficheDelEvento: "",Requisitos: "",Premios: "", Patrocinadores:"", Contactos:""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de campos
    const validationRegex = /^[a-zA-Z0-9\s]+$/; // Expresión regular para permitir letras, números y espacios

    const fieldsToValidate = [
      "TituloDelEvento",
      "Descripcion",
      "Requisitos",
      "Premios",
      "Patrocinadores",
      "Contactos",
    ];

    let isValid = true;

    fieldsToValidate.forEach((fieldName) => {
      if (!formData[fieldName].trim()) {
        alert(`El campo ${fieldName} no puede estar vacío.`);
        isValid = false;
      } else if (!validationRegex.test(formData[fieldName])) {
        alert(`El campo ${fieldName} contiene caracteres especiales no permitidos.`);
        isValid = false;
      }
    });

    if (isValid) {
      // Si pasa la validación, continúa aquí
      alert("Los datos son válidos. Puedes enviar el formulario.");
    }
  };

  return (
      <Background>
        <form onSubmit={handleSubmit}>
          <Formulario CamposDeEntrada= {CamposDeEntrada} handleChange = {handleChange}/>
          <div className="w3-row w3-center">
            <div className="createEventButton w3-col l6">
            <Link to="/CrearFormulario">
              <Boton ClaseDeBoton="botonAmarilloGrand">Formulario de registro</Boton></Link>
            </div>
            <div className="w3-col l6">
            <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="submit">Crear evento</Boton>
            </div>
          </div>
        </form>

      </Background>
  );
}

export default CreateEventSection;