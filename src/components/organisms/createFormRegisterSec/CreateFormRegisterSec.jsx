import { useState } from "react";

import Background from "../../atoms/background/Background";
import Boton from "../../atoms/boton/Boton";
import Formulario from "../../molecules/formulario/Formulario";

import { useNavigate } from "react-router-dom";

const CreateFormRegisterSec = () => {

  const navigate = useNavigate()
  const CamposDeEntrada = [
    { Etiqueta: 'Nombres', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"Nombres" },
    { Etiqueta: 'Apellidos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"Apellidos" },
    { Etiqueta: 'Fecha de nacimiento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'date', Identificador:"FechaDenacimiento"  },
    { Etiqueta: 'Correo electronico', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"CorreoElectronico" },
    { Etiqueta: 'Numero de Celular', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"NumeroDeCelular"  },
];

const [formData, setFormData] = useState({Nombres: "",Apellidos: "", FechaDenacimiento: ""
, CorreoElectronico: "",NumeroDeCelular: ""});

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
};

const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Nombre: ${formData.Nombres} 
  \nFecha del evento: ${formData.Apellidos}
  \nTipo del evento: ${formData.FechaDenacimiento} 
  \nDescripcion: ${formData.CorreoElectronico}
  \nRequisitos: ${formData.NumeroDeCelular}`
  );
};

const goBack = () => {
  navigate(-1)
};

  return (
    <Background>
      <form >
        <Formulario CamposDeEntrada= {CamposDeEntrada} handleSubmit={handleChange}/>
        <div className="w3-center w3-margin">
          <Boton ClaseDeBoton="botonAzul">Añadir Pregunta</Boton>
        </div>
        <div className="w3-row w3-center">             
          <div className="createEventButton w3-col l6">
          <Boton ClaseDeBoton="botonAmarilloGrand"  TipoDeBoton="submit">Guardar formulario</Boton>
          </div>
          <div className="w3-col l6">
            <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="button" f={goBack} >Cancelar</Boton>
          </div>
        </div>
      </form>
    </Background>
  );
}

export default CreateFormRegisterSec;