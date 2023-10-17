import { Link } from "react-router-dom";
import { useState } from "react";

import Formulario from "../../molecules/formulario/Formulario.jsx";
import Boton from "../../atoms/boton/Boton.jsx"
import Background from "../../atoms/background/Background.jsx"; 
import { useAppContext } from '../../../Context';
import axios from "axios"
import { useNavigate } from "react-router-dom";

const CreateEventSection = () => {

  const navigate = useNavigate()
  const id = useAppContext();


  const CamposDeEntrada = [
    {divClase:"itemContainer", Etiqueta: 'Titulo del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:'TituloDelEvento',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    {divClase:"itemContainer", Etiqueta: 'Fecha del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'date', 
    Identificador:'FechaDelEvento',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    {divClase:"itemContainer", Etiqueta: 'Tipo del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'select',
    Identificador:'TipoDelEvento', Desactivado: false,
    OpcionesDelDesplegable: [
      {Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      {Valor:"Reclutamiento", Etiqueta: "Reclutamiento" },
      {Valor:"Taller de entrenamiento", Etiqueta: "Taller de entrenamiento" },
      {Valor:"Competencia de entrenamiento", Etiqueta: "Competencia de entrenamiento" },
      {Valor:"Clasificatorio interno", Etiqueta: "Clasificatorio interno" },
      {Valor:"Competencia", Etiqueta: "Competencia" },
  ]},
    {divClase:"itemContainer", Etiqueta: 'Descripcion', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'description', 
    Identificador:'Descripcion',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    {divClase:"itemContainer", Etiqueta: 'Afiche del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'file',
    Identificador:'AficheDelEvento',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    {divClase:"itemContainer", Etiqueta: 'Requisitos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:'Requisitos',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    {divClase:"itemContainer", Etiqueta: 'Premios', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', 
    Identificador:'Premios',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    {divClase:"itemContainer", Etiqueta: 'Patrocinadores', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:'Patrocinadores',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    {divClase:"itemContainer", Etiqueta: 'Contactos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:'Contactos', Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
  ];

  const [formData, setFormData] = useState({
    TituloDelEvento: "",
    FechaDelEvento: "",
    FechaFinDelEvento: "", 
    TipoDelEvento: "", 
    Descripcion: "",
    AficheDelEvento: "",
    Requisitos: "",
    Premios: "", 
    Patrocinadores:"", 
    idFormulario: "",
    Contactos:""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
  
    const validationRegex = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚ]+$/;
    const optionalValidationRegex = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚ]*$/;
    const errors = [];
    const hoy = new Date();
    const fechaDelEvento = new Date(formData.FechaDelEvento);

  
    if (!formData.TituloDelEvento.trim()) {
      errors.push("- El campo Titulo del evento no puede estar vacío");
    }
    if (!validationRegex.test(formData.TituloDelEvento)) {
      errors.push("- El Titulo del evento solo debe contener caracteres alfanumericos");
    }
    if (!formData.FechaDelEvento.trim()) {
      errors.push("- El campo Fecha del evento no puede estar vacío.");
    }
    if (fechaDelEvento <= hoy) {
      errors.push("- La Fecha del evento debe ser una fecha posterior a la de hoy.");
    }
    if (!formData.TipoDelEvento.trim() || formData.TipoDelEvento === "Sin seleccionar") {
      errors.push("- Debes escoger un tipo del evento.");
    }
    if (!formData.Descripcion.trim() || !validationRegex.test(formData.Descripcion)) {
      errors.push("- El campo descripción no puede estar vacío.");
    }
    if (!optionalValidationRegex.test(formData.Requisitos)) {
      errors.push("- El campo Requisitos solo debe contener letras y números.");
    }
    if (!optionalValidationRegex.test(formData.TipoDelEvento)) {
      errors.push("- El campo Premios solo debe contener letras y números.");
    }
    if (!optionalValidationRegex.test(formData.Patrocinadores)) {
      errors.push("- El campo Patrocinadores solo debe contener letras y números.");
    }
    if (!optionalValidationRegex.test(formData.Contactos)) {
      errors.push("- El campo Contactos solo debe contener letras y números.");
    }
  
    if (errors.length > 0) {
        alert("Errores:\n\n" + errors.join("\n"));
    } else {
        alert(`El evento ${formData.TituloDelEvento} se creo exitosamente`)
      axios.post("http://localhost:8000/api/evento",{
        titulo: formData.TituloDelEvento,
        fecha_ini: formData.FechaDelEvento,
        fecha_fin: formData.FechaFinDelEvento,
        tipo: formData.TipoDelEvento,
        descripcion: formData.Descripcion,
        afiche: formData.AficheDelEvento,
        id_formulario: id.datos,
        requisitos: formData.Requisitos,
        premios: formData.Premios,
        patrocinadores: formData.Patrocinadores,
        contactos: formData.Contactos
    })
    .then(function (response) {
      console.log(response);
      navigate('/')
    })
    .catch(function (error) {
      console.log(error.response.data.error);
      alert(error.response.data.error);      
    });
    }
};

  return (
      <Background>
        <form onSubmit={handleSubmit}>
          <Formulario CamposDeEntrada= {CamposDeEntrada} handleChange = {handleChange} Desactivado={false}/>
          <div className="w3-row w3-center">
            <div className="createEventButton w3-col l6">
            <Link to="/CrearEvento/AgregarFormulario">
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