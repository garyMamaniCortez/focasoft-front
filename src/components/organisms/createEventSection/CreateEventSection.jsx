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
    { Etiqueta: 'Titulo del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:'TituloDelEvento',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Fecha del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'date', 
    Identificador:'FechaDelEvento',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Tipo del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'select',
    Identificador:'TipoDelEvento', Desactivado: false,
    OpcionesDelDesplegable: [
      {Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      {Valor:"Reclutamiento", Etiqueta: "Reclutamiento" },
      {Valor:"Taller de entrenamiento", Etiqueta: "Taller de entrenamiento" },
      {Valor:"Competencia de entrenamiento", Etiqueta: "Competencia de entrenamiento" },
      {Valor:"Clasificatorio interno", Etiqueta: "Clasificatorio interno" },
      {Valor:"Competencia", Etiqueta: "Competencia" },
  ]},
    { Etiqueta: 'Descripcion', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'description', 
    Identificador:'Descripcion',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Afiche del evento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'file',
    Identificador:'AficheDelEvento',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Requisitos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:'Requisitos',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Premios', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', 
    Identificador:'Premios',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Patrocinadores', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:'Patrocinadores',  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Contactos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:'Contactos', Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
  ];

  const [formData, setFormData] = useState({
    TituloDelEvento: null,
    FechaDelEvento: null,
    FechaFinDelEvento: null, 
    TipoDelEvento: null, 
    Descripcion: null,
    AficheDelEvento: null,
    Requisitos: null,
    Premios: null, 
    Patrocinadores:null, 
    idFormulario: null,
    Contactos:null});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    console.log({id})

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
    } else {
      console.log(formData)
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