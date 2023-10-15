import { useState } from "react";

import Background from "../../atoms/background/Background.jsx";
import Boton from "../../atoms/boton/Boton.jsx";
import Label from "../../atoms/label/Label.jsx";
import Formulario from "../../molecules/formulario/Formulario.jsx";

const RegisterParticipantsSec = () => {

  const Evento = "Evento de Programación";
  
  const CamposDeEntrada = [
    { Etiqueta: 'Nombres', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"Nombres" },
    { Etiqueta: 'Apellidos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"Apellidos"  },
    { Etiqueta: 'Fecha de nacimiento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'date', Identificador:"FechaDeNacimiento"  },
    { Etiqueta: 'Correo electronico', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'email', Identificador:"CorreoElectronico"  },
    { Etiqueta: 'Numero de Celular', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', Identificador:"NumeroDeCelular"  },
];

const [formData, setFormData] = useState({Nombres: "",Apellidos: "", 
  FechaDeNacimiento: "", CorreoElectronico: "",NumeroDeCelular: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nombre: ${formData.Nombres} 
    \nApellidos: ${formData.Apellidos} 
    \nFecha de nacimiento: ${formData.FechaDeNacimiento} 
    \nCorreo electronico: ${formData.CorreoElectronico} 
    \nNumero de celular: ${formData.NumeroDeCelular}`
    );
  };

  return (
    <Background>
      <Label TipoDeEtiqueta="FormTitle">{Evento}</Label>
      <form onSubmit={handleSubmit}>
        <Formulario CamposDeEntrada= {CamposDeEntrada}  handleChange = {handleChange}/>
        <div className="w3-row w3-center">
        <Boton TipoDeBoton="submit" ClaseDeBoton="botonRojoGrand">Registrarse</Boton>
        </div>
      </form>
    </Background>
  );
}

export default RegisterParticipantsSec;