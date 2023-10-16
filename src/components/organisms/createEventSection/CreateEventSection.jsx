import { Link } from "react-router-dom";
import { useState } from "react";

import Formulario from "../../molecules/formulario/Formulario.jsx";
import Boton from "../../atoms/boton/Boton.jsx"
import Background from "../../atoms/background/Background.jsx"; 

const CreateEventSection = () => {

  const CamposDeEntrada = [
    { Etiqueta: 'Titulo del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'TituloDelEvento'},
    { Etiqueta: 'Fecha del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'date', Identificador:'FechaDelEvento'},
    { Etiqueta: 'Tipo del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'select', Identificador:'TipoDelEvento'},
    { Etiqueta: 'Descripcion', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'description', Identificador:'Descripcion'},
    { Etiqueta: 'Afiche del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'file', Identificador:'AficheDelEvento'},
    { Etiqueta: 'Requisitos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Requisitos'},
    { Etiqueta: 'Premios', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Premios'},
    { Etiqueta: 'Patrocinadores', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Patrocinadores'},
    { Etiqueta: 'Contactos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:'Contactos'},
  ];


  const OpcionesDelDesplegable = [
    {Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
    {Valor:"Reclutamiento", Etiqueta: "Reclutamiento" },
    {Valor:"Taller de entrenamiento", Etiqueta: "Taller de entrenamiento" },
    {Valor:"Competencia de entrenamiento", Etiqueta: "Competencia de entrenamiento" },
    {Valor:"Clasificatorio interno", Etiqueta: "Clasificatorio interno" },
    {Valor:"Competencia", Etiqueta: "Competencia" },
]

  const [formData, setFormData] = useState({TituloDelEvento: "",FechaDelEvento: "", TipoDelEvento: ""
  , Descripcion: "",AficheDelEvento: "",Requisitos: "",Premios: "", Patrocinadores:"", Contactos:""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de campos
    const namesValidationRegex = /^[A-Za-z0-9\s]+$/;
    const validationRegex = /^[a-zA-Z0-9\s]+$/;

    if(!formData.TituloDelEvento.trim() || !namesValidationRegex.test(formData.TituloDelEvento)){
      alert("El campo Titulo del evento no puede estar vacío y solo debe contener letras y espacios.");
      return;
    } else if(!formData.FechaDelEvento.trim()){
      alert("El campo Fecha del evento no puede estar vacío.");
      return;
    } else if(!formData.TipoDelEvento.trim() || formData.TipoDelEvento === "Sin seleccionar"){
      alert("Escoja el tipo de evento.");
      return;
    } else if(!formData.Descripcion.trim() || !validationRegex.test(formData.Descripcion)){
      alert("El campo descripción no puede estar vacío.");
      return;
    } else if(!formData.AficheDelEvento.trim()){
      alert("Debe de haber un Afiche del evento.");
      return;
    } else if(!formData.Requisitos.trim() || !validationRegex.test(formData.Requisitos)){
      alert("El campo Requisitos no puede estar vacío.");
      return;
    } else if(!formData.Premios.trim() || !validationRegex.test(formData.TipoDelEvento)){
      alert("El campo Premios no puede estar vacío y debe contener letras y números.");
      return;
    } else if(!formData.Patrocinadores.trim() || !validationRegex.test(formData.Patrocinadores)){
      alert("El campo Patrocinadores no puede estar vacío y debe contener letras y números.");
      return;
    } else if(!formData.Contactos.trim() || !validationRegex.test(formData.Contactos)){
      alert("El campo Contactos no puede estar vacío y debe contener letras y números.");
      return;
    } else (
      console.log(formData)
    )
    
  };

  return (
      <Background>
        <form onSubmit={handleSubmit}>
          <Formulario CamposDeEntrada= {CamposDeEntrada} handleChange = {handleChange} 
          OpcionesDelDesplegable ={OpcionesDelDesplegable} Desactivado={false}/>
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