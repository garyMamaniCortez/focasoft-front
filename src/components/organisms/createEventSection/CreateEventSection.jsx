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
    { Etiqueta: 'Requsitos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Requsitos'},
    { Etiqueta: 'Premios', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Premios'},
    { Etiqueta: 'Patrocinadores', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Patrocinadores'},
    { Etiqueta: 'Contactos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Contactos'},
  ];

  const [formData, setFormData] = useState({TituloDelEvento: "",FechaDelEvento: "", TipoDelEvento: ""
  , Descripcion: "",AficheDelEvento: "",Requsitos: "",Premios: "", Patrocinadores:"", Contactos:""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Titulo Del Evento: ${formData.TituloDelEvento} 
    \nDescripcion: ${formData.TituloDelEvento}
    \nTipo del evento: ${formData.TipoDelEvento}  `
    );
};

  return (
      <Background>
        <form onSubmit={handleSubmit}>
        <Formulario CamposDeEntrada= {CamposDeEntrada} handleChange = {handleChange}/>
          <div className="w3-row w3-center">
            <div className="createEventButton w3-col l6">
            <Link to="/CrearFormulario"><Boton text="Formulario de registro" buttonType="formButton"></Boton></Link>
            </div>
            <div className="w3-col l6">
            <button type="submit">Probar</button>
            </div>
          </div>
          </form>
      </Background>
  );
}

export default CreateEventSection;